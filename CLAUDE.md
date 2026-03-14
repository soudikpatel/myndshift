# Myndshift Website

## Project Overview
Static multi-page website for Myndshift. Built with HTML, CSS, and minimal JavaScript. Hosted on Firebase.

## Tech Stack
- HTML5 (semantic markup)
- CSS3 (modular files, CSS custom properties, Flexbox, Grid)
- Vanilla JavaScript (no frameworks)
- Firebase Hosting

## Project Structure
```
public/
├── index.html                    # Home page
├── about.html                    # About page
├── contact.html                  # Contact with Formspree form
├── courses/
│   ├── index.html               # Courses listing
│   └── [course-name].html       # Individual course pages
├── blog/
│   ├── index.html               # Blog listing
│   └── [post-name].html         # Individual blog posts
├── events/
│   └── index.html               # Events listing
├── components/
│   ├── header.html              # Loaded via JS into #header-placeholder
│   └── footer.html              # Loaded via JS into #footer-placeholder
├── assets/
│   ├── css/
│   │   ├── main.css            # Variables, reset, base styles
│   │   ├── layout.css          # Grid, flexbox, containers
│   │   ├── components.css      # Buttons, cards, forms, nav
│   │   ├── pages.css           # Page-specific styles
│   │   └── responsive.css      # Media queries
│   ├── js/
│   │   ├── components.js       # Loads header/footer/breadcrumbs
│   │   ├── navigation.js       # Mobile menu toggle
│   │   ├── contact-form.js     # Formspree submission
│   │   └── utils.js            # Breadcrumb generator, helpers
│   └── images/
│       ├── courses/
│       └── blog/
└── 404.html
firebase.json                     # Firebase hosting config
```

## Key Patterns

### Component Loading
Header and footer are loaded dynamically via `components.js`:
- Each page has `<div id="header-placeholder"></div>` and `<div id="footer-placeholder"></div>`
- JavaScript fetches `/components/header.html` and `/components/footer.html` and injects them

### Breadcrumbs
Generated automatically from URL path in `utils.js`. No manual updates needed.

### CSS Variables
Defined in `main.css`:
```css
:root {
  --primary-color: #2C3E50;
  --secondary-color: #3498DB;
  --accent-color: #E74C3C;
  --text-color: #333333;
  --bg-color: #FFFFFF;
  --light-gray: #F8F9FA;
}
```

### Responsive Breakpoints
- Mobile: default (< 768px)
- Tablet: 768px+
- Desktop: 1024px+

## Commands
```bash
firebase serve      # Local dev server at localhost:5000
firebase deploy     # Deploy to production
```

## Adding Content

### New Blog Post
1. Create `public/blog/post-slug.html` (copy existing post)
2. Add card to `public/blog/index.html`
3. Add image to `public/assets/images/blog/`

### New Course
1. Create `public/courses/course-slug.html` (copy existing course)
2. Add card to `public/courses/index.html`
3. Add image to `public/assets/images/courses/`

## Contact Form
Uses Formspree. Form ID configured in `contact-form.js`. User needs to create account at formspree.io and update the endpoint.

## Notes
- All internal links use absolute paths starting with `/`
- Clean URLs enabled in firebase.json (no .html extension needed)
- No build step required - edit files directly
