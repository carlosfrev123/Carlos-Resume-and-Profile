# Carlos Revilla — Resume & Portfolio

A modern, single-page portfolio website built with React and Vite, showcasing my professional experience, projects, and skills as a Full-Stack Software Engineer and M.S. Data Science candidate at UVA.

**Live Site:** [carlosfrev123.github.io/Carlos-Resume-and-Profile](https://carlosfrev123.github.io/Carlos-Resume-and-Profile)

---

## Features

- **Interactive Resume** — Detailed work experience, education, skills, and talks with smooth-scroll sidebar navigation
- **Projects & Samples** — Live AI image classification demo (TensorFlow.js) and detailed project cards with GitHub links, including this portfolio site itself
- **Contact Form** — EmailJS-powered contact form for direct outreach with success/error feedback
- **Downloadable Resume** — PDF, DOCX, and HTML formats auto-updated from Google Docs via Apps Script integration
- **Automated CI/CD** — GitHub Actions pipeline for continuous deployment on every push
- **Responsive Design** — Clean, professional layout with navy/light blue color scheme optimized for all devices

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 19, Vite, JavaScript (JSX) |
| **Styling** | CSS3 (Custom Properties, Grid, Flexbox) |
| **AI/ML** | TensorFlow.js, MobileNet (lightweight CNN) |
| **Integrations** | EmailJS (contact form), Google Apps Script (resume sync) |
| **CI/CD** | GitHub Actions, GitHub Pages |
| **Security** | Environment variables for API keys, domain-restricted EmailJS keys |

---

## Project Structure
src/
├── components/
│ ├── AIDemo.jsx # TensorFlow.js image classification demo
│ ├── ContactForm.jsx # EmailJS contact form with validation
│ └── Projects.jsx # Project cards with details and GitHub links
├── App.jsx # Main app with tabs, resume content, sidebar navigation
├── App.css # Global styles and professional color scheme
└── main.jsx # Entry point
public/
└── resume/ # Auto-updated downloadable resume files (PDF, DOCX, HTML)
.github/
└── workflows/
└── deploy.yml # GitHub Actions deployment pipeline


---

## Featured Projects

| Project | Description | Tech |
|---------|-------------|------|
| **Carlos Resume & Portfolio** | This site! Professional portfolio with automated resume updates | React, Vite, TensorFlow.js, GitHub Pages |
| **KafkaNightOwl** | Open-source Kafka observability dashboard | Node.js, Kafka, MongoDB, React, TypeScript |
| **Acne-AI** | Medical diagnosis AI (99.9% accuracy) | Python, TensorFlow, DinoV2 |
| **Space.me** | Celestial event tracker with NASA API | PostgreSQL, NASA API, JavaScript |
| **MeWantFood** | Restaurant discovery app with Yelp integration | Node.js, Express, Yelp API |

---

## If you want to use this template for your own website:

### Prerequisites
- Node.js (v22 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/carlosfrev123/Carlos-Resume-and-Profile.git

# Navigate to project directory
cd Carlos-Resume-and-Profile

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Variables
Create a .env file in the root directory:

```bash
# EmailJS API keys
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
### Build
```bash
npm run build
```

Deployment

This site is configured for GitHub Pages deployment via GitHub Actions. Update vite.config.js with your repository name:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/Your-Repo-Name/',
});
```

### Latest Updates

- Portfolio site card added to Projects tab showcasing this website's tech stack

- GitHub link added to header alongside email and LinkedIn

- Google Docs automation — Resume files auto-update via Google Apps Script

- Download resume feature with PDF, DOCX, and HTML formats

- Environment variables for secure EmailJS integration

- Professional color scheme (navy, light blue, white) with responsive design

### Contact

*Email*: carlosfr.mgmt@gmail.com

*LinkedIn*: [linkedin.com/in/carlosfrevilla](https://linkedin.com/in/carlosfrevilla)

*GitHub*: [github.com/carlosfrev123](https://github.com/carlosfrev123)