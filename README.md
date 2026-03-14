# Mynd Shift Website

A responsive multi-page static website built with HTML, CSS, and minimal JavaScript.

## Project Structure

```
public/
├── index.html                    # Home page
├── about.html                    # About page
├── contact.html                  # Contact with working form
├── courses/
│   ├── index.html               # Courses listing
│   └── [course-name].html       # Individual course pages
├── blog/
│   ├── index.html               # Blog listing
│   └── [post-name].html         # Individual blog posts
├── events/
│   └── index.html               # Events listing
├── components/
│   ├── header.html              # Reusable header
│   └── footer.html              # Reusable footer
├── assets/
│   ├── css/                     # Stylesheets
│   ├── js/                      # JavaScript files
│   └── images/                  # Images and media
└── 404.html                     # Error page
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (for Firebase CLI)
- [Firebase CLI](https://firebase.google.com/docs/cli)

### Installation

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize the project (if not already done):
   ```bash
   firebase init hosting
   ```

### Local Development

Start the local development server:
```bash
firebase serve
```

Visit `http://localhost:5000` in your browser.

### Deployment

Deploy to Firebase Hosting:
```bash
firebase deploy
```

## Adding Content

### New Blog Post

1. Create `public/blog/your-post-name.html` (copy an existing post as template)
2. Update the content, title, and meta description
3. Add thumbnail image to `public/assets/images/blog/`
4. Add a card linking to your post in `public/blog/index.html`
5. Deploy: `firebase deploy`

### New Course

1. Create `public/courses/your-course-name.html`
2. Update course details (title, description, curriculum, etc.)
3. Add images to `public/assets/images/courses/`
4. Add a card linking to your course in `public/courses/index.html`
5. Deploy: `firebase deploy`

## Contact Form

The contact form uses [Formspree](https://formspree.io) for handling submissions.

To set up:
1. Create an account at formspree.io
2. Create a new form and copy the form ID
3. Update the form endpoint in `public/assets/js/contact-form.js`

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid
- **JavaScript** - Vanilla JS (no frameworks)
- **Firebase Hosting** - Static file hosting with CDN

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved - Mynd Shift
