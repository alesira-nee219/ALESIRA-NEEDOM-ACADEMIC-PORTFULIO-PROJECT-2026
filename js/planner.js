// Academic Planner — interactive task management system.
// Demonstrates: arrays & functions, DOM manipulation, event handling,
// dynamic content updates, and simple persistence via localStorage.

document.addEventListener('DOMContentLoaded', () => {
  const STORAGE_KEY = 'academicPlannerTasks';

  const form = document.getElementById('task-form');
  const titleInput = document.getElementById('task-title');
  const subjectInput = document.getElementById('task-subject');
  const dueInput = document.getElementById('task-due');
  const list = document.getElementById('task-list');
  const emptyState = document.getElementById('empty-state');
  const filterButtons = document.querySelectorAll('.filter-btn');

  let currentFilter = 'all';

  // ---- Array of task objects lives in memory, backed by localStorage ----
  function loadTasks() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (err) {
      console.error('Could not read saved tasks:', err);
      return [];
    }
  }

  function saveTasks(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }

  let tasks = loadTasks();

  function makeId() {
    return 'task-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
  }

  function addTask(title, subject, due) {
    tasks.push({
      id: makeId(),
      title,
      subject: subject || 'General',
      due: due || null,
      completed: false,
    });
    saveTasks(tasks);
    render();
  }

  function toggleTask(id) {
    tasks = tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t));
    saveTasks(tasks);
    render();
  }

  function deleteTask(id) {
    tasks = tasks.filter((t) => t.id !== id);
    saveTasks(tasks);
    render();
  }

  function getVisibleTasks() {
    if (currentFilter === 'pending') return tasks.filter((t) => !t.completed);
    if (currentFilter === 'completed') return tasks.filter((t) => t.completed);
    return tasks;
  }

  function render() {
    const visible = getVisibleTasks();
    list.innerHTML = '';

    if (visible.length === 0) {
      emptyState.style.display = 'block';
      return;
    }
    emptyState.style.display = 'none';

    visible.forEach((task) => {
      const item = document.createElement('li');
      item.className = 'task-item' + (task.completed ? ' completed' : '');

      const check = document.createElement('button');
      check.className = 'task-check';
      check.setAttribute('aria-label', task.completed ? 'Mark as pending' : 'Mark as completed');
      check.addEventListener('click', () => toggleTask(task.id));

      const titleSpan = document.createElement('span');
      titleSpan.className = 'task-title';
      titleSpan.textContent = task.title;

      const meta = document.createElement('span');
      meta.className = 'task-meta';
      const dueText = task.due ? `Due ${task.due}` : 'No due date';
      meta.textContent = `${task.subject} · ${dueText}`;

      const del = document.createElement('button');
      del.className = 'task-delete';
      del.textContent = 'Delete';
      del.addEventListener('click', () => deleteTask(task.id));

      item.append(check, titleSpan, meta, del);
      list.appendChild(item);
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = titleInput.value.trim();
    if (!title) {
      titleInput.focus();
      return;
    }
    addTask(title, subjectInput.value.trim(), dueInput.value);
    form.reset();
    titleInput.focus();
  });

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      render();
    });
  });

  render();
});
