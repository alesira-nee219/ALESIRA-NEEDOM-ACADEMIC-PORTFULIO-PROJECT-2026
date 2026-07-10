# ALESIRA NEEDOM — Academic Portfolio

A five-page academic portfolio and student management site built with plain HTML, CSS, and JavaScript, for the student portfulio assessment project.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Homepage — photo, welcome message, nav, bio |
| `about.html` | Educational background, career goals, skills, hobbies |
| `projects.html` | Three sample projects with images, tags, links, and a demo video |
| `planner.html` | Interactive academic planner (add / complete / delete tasks) |
| `contact.html` | Contact form with live JavaScript validation |

## Before you submit: fill in the placeholders

Every spot you need to personalize is wrapped in square brackets, like `ALESIRA NEEDOM` or `a.needom7508@miva.edu.ng`.

1. **Every page's `<title>`, header brand, and footer** — contains a link to`MY PORTFULIO HOME PAGE`, `MY EMAIL`, `MY LINKEDIN PROFILE`, `MY GITHUB`, `MY LIVE URL`.
2. **`index.html`** — name, program, bio, resume link, stats (projects/GPA/certifications/graduation year), and MY photo (see below).
3. **`about.html`** — education table rows, career aspirations text, skill percentages (edit the `width` in each `.skill-fill` style), hobby chips, and an optional audio bio file.
4. **`projects.html`** — three project titles, descriptions, project images, and an optional demo video.
5. **`contact.html`** — email, phone, and location shown under the form.

### Adding my photos and project images
I uploaded the my photo from my file explore into my project images folder source `images/` and update the `src` attributes in the HTML to point to them, e.g.:
```html
<img src="images/my-photo.jpg" alt="Photograph of my-photo">
```

### Adding audio/video
Dropped my audio file (e.g. `intro.mp3`) and video file (e.g. `project-demo.mp4`) into a `images/` folder, then update the `<source src="...">` paths in `about.html` and `projects.html`.

## Running it locally
No build step is needed — just open `index.html` in a browser. For the planner's saved tasks and smoothest behavior, it's better to serve the folder rather than opening the file directly.

## Deploying (GitHub Pages)
1. I Created a new GitHub repository and push this whole folder to it.
2. In the repo, I navigated go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to `Deploy from a branch`, choosed the `main` branch and `/ (root)` folder, then save.
4. GitHub gave me a live URL (usually `https://<username>.github.io/<repo-name>/`) after a minute or two.
5. I attached both that live link and your GitHub repository link to my Pdf file.

## Project structure
```
portfolio/
├── index.html
├── about.html
├── projects.html
├── planner.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   ├── main.js       (shared: nav, footer year, scroll reveal)
│   ├── planner.js    (task manager logic)
│   └── contact.js    (form validation)
└── images/
    ├── profile-placeholder.svg
    ├── project-placeholder-1.svg / -2.svg / -3.svg
    └── video-poster-placeholder.svg
```
