// src/components/Projects.jsx
import { useState } from "react";
import AIDemo from "./AIDemo";

// Expanded project data based on your resume and provided links
const projectData = [
  {
    id: "kafka-nightowl",
    name: "KafkaNightOwl: Kafka Metric Visualizer & Monitoring Tool",
    type: "Open Source / Full-Stack",
    tech: "Node.js/Express, Kafka, MongoDB, React, TypeScript, Jest, Webpack",
    description: "Engineered an open-source observability dashboard to aggregate and visualize Kafka message metrics with ACID-compliant persistence.",
    highlights: [
      "Built the Message Data & Metrics Service with Node.js/Express for high-throughput Kafka data aggregation.",
      "Created the core Observability Dashboard with React using container/Flux architecture for a scalable, maintainable codebase.",
      "Implemented a robust testing suite with Jest for both frontend components and backend endpoints, elevating code quality.",
      "Incorporated TypeScript for static typing, improving code readability and enabling early error detection.",
      "Employed Webpack to bundle frontend assets, reducing network requests and improving load performance."
    ],
    links: {
      github: "https://github.com/oslabs-beta/KafkaNightOwl",
    }
  },
  {
    id: "acne-ai",
    name: "Acne-AI: Medical Diagnosis AI",
    type: "AI/ML Engineering",
    tech: "Python, TensorFlow, DinoV2, Google Colab, Axios",
    description: "Fine-tuned the DinoV2 vision model achieving 99.9% accuracy for medical diagnosis.",
    highlights: [
      "Trained on a T4 GPU for 10 epochs, reaching train/val loss of 0.031/0.062.",
      "Integrated Axios for efficient image processing, reducing latency for model diagnosis.",
      "The live demo on this site runs a lightweight, browser-optimized version of this concept."
    ],
    links: {
      github: "https://github.com/orgs/acne-ai/repositories",
    }
  },
  {
    id: "space-me",
    name: "Space.me",
    type: "Full-Stack Engineering",
    tech: "PostgreSQL, NASA API, JavaScript (Inferred), Node.js (Inferred)",
    description: "A celestial event tracker that optimized database performance and integrated live NASA data.",
    highlights: [
      "Executed advanced indexing strategies on a PostgreSQL database exceeding 3,000 records, reducing critical report runtime by up to 10 minutes daily.",
      "Introduced a feature using the NASA API for live celestial event updates, improving data loading times by over 5 seconds per query."
    ],
    links: {
      github: "https://github.com/space-me/space.me",
    }
  },
  {
    id: "mewantfood",
    name: "MeWantFood",
    type: "Full-Stack Engineering",
    tech: "JavaScript, Node.js, Express (Inferred), Yelp API, cookie-parser",
    description: "A restaurant discovery app with secure session management and Yelp integration.",
    highlights: [
      "Implemented cookie handling using the cookie-parser library to manage user sessions effectively.",
      "Integrated the Yelp API to enable users to find information about nearby restaurants."
    ],
    links: {
      github: "https://github.com/MeWantFood/iteration",
    }
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  if (selectedProject) {
    return (
      <div className="project-detail">
        <button className="back-button" onClick={() => setSelectedProject(null)}>
          ← Back to Projects
        </button>
        <h2>{selectedProject.name}</h2>
        <p className="project-tech">{selectedProject.tech}</p>
        <p>{selectedProject.description}</p>
        <h3>Key Contributions</h3>
        <ul>
          {selectedProject.highlights.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        {selectedProject.links?.github && (
          <a
            href={selectedProject.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            View Repository on GitHub
          </a>
        )}
        {/* Fallback for projects without a live link */}
        {!selectedProject.links?.github && (
          <p className="contact-notice">
            For repository access, please <button className="inline-button" onClick={() => setActiveTab("contact")}>contact me</button>.
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="projects-grid">
      {/* AI Demo Card - Your existing component becomes a card */}
      <div className="project-card ai-demo-card">
        <div className="card-header">
          <h3>Live AI Demo</h3>
          <span className="project-type">Interactive Sample</span>
        </div>
        <div className="card-description">
          <AIDemo />
        </div>
      </div>

      {/* Other Project Cards from resume */}
      {projectData.map((project) => (
        <div key={project.id} className="project-card">
          <div className="card-header">
            <h3>{project.name}</h3>
            <span className="project-type">{project.type}</span>
          </div>
          <p className="project-tech">{project.tech}</p>
          <p className="card-description">{project.description}</p>
          <div className="card-actions">
            <button
              className="view-details-btn"
              onClick={() => setSelectedProject(project)}
            >
              View Details
            </button>
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;