import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import AIDemo from "./components/AIDemo";

function App() {
  const [activeTab, setActiveTab] = useState("resume");

  // Professional summary
  const professionalSummary =
    "Full-Stack Software Engineer & Data Science MS candidate specializing in AI/ML integration and cloud architecture. Expert in building scalable data pipelines (Apache Kafka, AWS ECS) and production AI systems (99.9% accuracy DinoV2). Passionate about bridging the gap between data science research and production engineering.";

  // Work Experience Data
  const workExperience = [
    {
      company: "Philips",
      title: "Full-Stack Software Engineer",
      location: "Cambridge, MA",
      dates: "Jan 2026 - Present",
      achievements: [
        "✅ Architected secure multi-tenant cloud platform on AWS ECS Fargate using Terraform for IaC (ALB routing, TLS certificates, per-tenant state isolation)",
        "✅ Built high-throughput C#/.NET background service with Quartz.NET and Citus/RDS aggregating patient device data",
        "✅ Designed automated CI/CD pipeline with GitHub Actions + OIDC authentication (Docker builds, ECR pushes, zero-downtime deployments)",
        "✅ Engineered performant data pipelines ensuring transactional integrity for sensitive healthcare datasets",
      ],
    },
    {
      company: "Silverchair",
      title: "Full-Stack Software Engineer",
      location: "Charlottesville, VA",
      dates: "May 2024 - February 2025",
      achievements: [
        "✅ Resolved critical data integrity issues in Solr pipeline by re-ingesting missing columns, eliminating 28% of user-reported errors",
        "✅ Optimized performance by resolving N+1 query bottlenecks — improved search load times by ~300ms",
        "✅ Championed code quality with comprehensive Jest test suite, reducing manual QA efforts by 2 hours/week",
        "✅ Collaborated with stakeholders to translate business requirements into high-availability features",
      ],
    },
    {
      company: "WRT World Enterprises",
      title: "Systems and IT Intern",
      location: "Miami, FL",
      dates: "June 2022 - August 2022",
      achievements: [
        "Engineered structured Excel databases to track hundreds of product SKUs for rapid querying",
        "Managed product information review lifecycle, enforcing rigorous QA against source data",
      ],
    },
  ];

  // Education Data
  const education = [
    {
      degree: "M.S. Data Science",
      school: "University of Virginia",
      date: "Expected May 2027",
      focus: "Machine Learning, Data Engineering, Natural Language Processing",
    },
    {
      degree: "B.A. Computer Science",
      school: "University of Virginia",
      date: "August 2020 - May 2024",
      focus: "Minor: Data Science | AI, Data Science Systems, Database Systems",
    },
    {
      degree: "Software Engineering Bootcamp",
      school: "Codesmith (Full-time Immersive)",
      date: "May 2023 - September 2023",
      focus:
        "Advanced JavaScript, TypeScript, React + Redux Toolkit, Database Design",
    },
  ];

  // Projects Data
  const projects = [
    {
      name: "OS-Labs: KafkaNightOwl",
      tech: "Node.js/Express, Kafka, MongoDB, React, TypeScript",
      description:
        "Built message data & metrics service streamlining Kafka transactions with ACID-compliant persistence",
      highlights: [
        "✅ ACID-compliant MongoDB persistence for transaction integrity",
        "✅ Flux architecture for scalable UI state management",
      ],
    },
    {
      name: "Acne-AI",
      tech: "DinoV2, Python, TensorFlow, Google Colab, Axios",
      description: "Medical diagnosis AI achieving 99.9% accuracy",
      highlights: [
        "✅ Fine-tuned DinoV2 vision model on T4 GPU for 10 epochs",
        "✅ 99.9% model accuracy — train/val loss: 0.031/0.062",
        "✅ Integrated Axios for seamless model communication, reducing latency",
      ],
    },
  ];

  const talks = [
    {
      title: "GraphQL & the N+1 Problem",
      role: "Speaker",
      date: "July 2023",
      description: "Presented solutions to GraphQL's N+1 query issues",
      sponsors: "Sponsored by Codesmith, Jeeny, and Bractlet",
    },
  ];

  // Skills Data
  const skills = {
    languages: [
      "C#/.NET",
      "Python",
      "TypeScript",
      "JavaScript",
      "Java",
      "C++",
      "SAS",
      "R",
    ],
    cloud: [
      "AWS (ECS, RDS, API Gateway)",
      "Terraform",
      "Docker",
      "CI/CD (GitHub Actions)",
    ],
    dataAI: [
      "Apache Kafka",
      "GraphQL",
      "DinoV2 (99.9% accuracy)",
      "TensorFlow",
      "RAG Pipelines",
    ],
    tools: ["Git", "Redis/Caching", "Jest", "MongoDB", "PostgreSQL"],
  };

  return (
    <div className="app">
      <div className="container">
        <header>
          <h1>Carlos Fernando Revilla</h1>
          <div className="title-badge">
            <span className="badge">Full-Stack Software Engineer</span>
            <span className="badge">M.S. Data Science Candidate</span>
            <span className="badge">AI/ML Practitioner</span>
          </div>
          <div className="contact-info">
            <span>✉️ carlosfr.mgmt@gmail.com</span>
            <span>
              🔗{" "}
              <a
                href="https://www.linkedin.com/in/carlosfrevilla/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/carlosfrevilla
              </a>
            </span>
          </div>
          <div className="summary">
            <p>{professionalSummary}</p>
          </div>
        </header>

        <div className="tabs">
          <button
            className={activeTab === "resume" ? "active" : ""}
            onClick={() => setActiveTab("resume")}
          >
            📄 Resume
          </button>
          <button
            className={activeTab === "ai-demo" ? "active" : ""}
            onClick={() => setActiveTab("ai-demo")}
          >
            🤖 AI Demo
          </button>
          <button
            className={activeTab === "contact" ? "active" : ""}
            onClick={() => setActiveTab("contact")}
          >
            ✉️ Contact
          </button>
        </div>

        {/* RESUME TAB */}
        {activeTab === "resume" && (
          <div className="tab-content">
            {/* Work Experience */}
            <section>
              <h2>💼 Work Experience</h2>
              {workExperience.map((job, idx) => (
                <div key={idx} className="job">
                  <div className="job-header">
                    <h3>
                      {job.title} @ {job.company}
                    </h3>
                    <span className="job-date">{job.dates}</span>
                  </div>
                  <p className="job-location">{job.location}</p>
                  <ul>
                    {job.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        dangerouslySetInnerHTML={{ __html: achievement }}
                      />
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Projects */}
            <section>
              <h2>🚀 Projects</h2>
              {projects.map((project, idx) => (
                <div key={idx} className="project">
                  <h3>{project.name}</h3>
                  <p className="project-tech">{project.tech}</p>
                  <p>{project.description}</p>
                  <ul>
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        dangerouslySetInnerHTML={{ __html: highlight }}
                      />
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Talks */}
            <section>
              <h2>🎤 Talks & Publications</h2>
              {talks.map((talk, idx) => (
                <div key={idx} className="talk">
                  <h3>
                    {talk.title} — {talk.role}
                  </h3>
                  <p className="talk-date">{talk.date}</p>
                  <p>{talk.description}</p>
                  <p className="talk-sponsors">{talk.sponsors}</p>
                </div>
              ))}
            </section>

            {/* Education */}
            <section>
              <h2>🎓 Education</h2>
              {education.map((edu, idx) => (
                <div key={idx} className="education">
                  <div className="edu-header">
                    <h3>{edu.degree}</h3>
                    <span className="edu-date">{edu.date}</span>
                  </div>
                  <p>{edu.school}</p>
                  <p className="edu-focus">{edu.focus}</p>
                </div>
              ))}
            </section>

            {/* Skills */}
            <section>
              <h2>⚙️ Technical Skills</h2>
              <div className="skills-category">
                <h3>Languages</h3>
                <div className="skills-list">
                  {skills.languages.map((skill, i) => (
                    <span key={i} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="skills-category">
                <h3>Cloud & Infrastructure</h3>
                <div className="skills-list">
                  {skills.cloud.map((skill, i) => (
                    <span key={i} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="skills-category">
                <h3>Data & AI</h3>
                <div className="skills-list">
                  {skills.dataAI.map((skill, i) => (
                    <span key={i} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="skills-category">
                <h3>Tools</h3>
                <div className="skills-list">
                  {skills.tools.map((skill, i) => (
                    <span key={i} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* AI DEMO TAB */}
        {activeTab === "ai-demo" && (
          <div className="tab-content">
            <AIDemo />
          </div>
        )}

        {/* CONTACT TAB */}
        {activeTab === "contact" && (
          <div className="tab-content">
            <ContactForm />
          </div>
        )}

        <footer>
          <p>
            Built with React + Vite + TensorFlow.js | Hosted on GitHub Pages
          </p>
          <p>
            📊 M.S. Data Science @ UVA | 🤖 99.9% Accuracy DinoV2 | ☁️ AWS
            Infrastructure
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
