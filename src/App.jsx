import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import Projects from "./components/Projects";

function App() {
  const [activeTab, setActiveTab] = useState("resume");

  // Professional Summary
  const professionalSummary =
    "Full-Stack Software Engineer with 2+ years of experience building cloud-native platforms and data-intensive applications. Proficient in C#/.NET, React, TypeScript, and AWS infrastructure (ECS, Terraform, CI/CD). Currently pursuing an M.S. in Data Science at UVA with hands-on project experience in AI/ML, Data Engineering, and NLP. Leverages AI-assisted development tools to accelerate delivery while building a strong foundation in machine learning engineering.";

  // Work Experience Data
  const workExperience = [
    {
      company: "Philips",
      title: "Full-Stack Software Engineer",
      location: "Cambridge, MA",
      dates: "Jan 2026 - Present",
      achievements: [
        "Architected a secure, multi-tenant cloud platform on AWS ECS Fargate using Terraform for IaC to provision ALB routing, TLS certificates, and per-tenant state isolation with S3 backends, a pattern directly transferable to Azure SQL elastic pools and Key Vault.",
        "Deployed & maintained a high-throughput C#/.NET background service using Quartz.NET and Citus/RDS to aggregate and process critical device utilization data, delivering actionable insights to a client-facing dashboard.",
        "Designed and implemented a fully automated CI/CD pipeline with GitHub Actions and OIDC-based authentication, orchestrating Docker builds, ECR pushes, and zero-downtime deployments—demonstrating the core practices of Azure DevOps.",
        "Engineered performant data pipelines to relay critical issues, ensuring transactional integrity for sensitive, multi-tenant datasets.",
      ],
    },
    {
      company: "Meta",
      title: "Data Labeling Analyst",
      location: "Remote (Contract)",
      dates: "Nov 2025 - Jan 2026",
      achievements: [
        "Annotated and evaluated high-volume text datasets to train and optimize Meta generative machine learning models, providing critical ground-truth data to improve algorithmic performance.",
        "Maintained a 98%+ quality assurance score by strictly adhering to complex, rapidly evolving content moderation and data labeling guidelines.",
        "Identified data trends and edge cases, collaborating with cross-functional quality control teams to refine labeling schemas and reduce annotation ambiguity.",
      ],
    },
    {
      company: "Silverchair",
      title: "Full-Stack Software Engineer",
      location: "Charlottesville, VA",
      dates: "May 2024 - February 2025",
      achievements: [
        "Resolved critical data integrity issues within a Solr data pipeline by diagnosing and re-ingesting missing table columns from source databases, restoring content accuracy and eliminating 28% of user-reported errors in a data-intensive product.",
        "Optimized application performance by identifying and resolving N+1 query bottlenecks against large SQL datasets through strategic caching and batching, directly improving search result load times by ~300ms on web and mobile applications.",
        "Championed code quality and reduced manual QA efforts by 2 hours per week by creating a comprehensive unit test suite with Jest, ensuring the reliability of data-critical features.",
        "Collaborated directly with product stakeholders to translate business requirements into technical solutions for a high-availability publishing platform.",
      ],
    },
    {
      company: "WRT World Enterprises",
      title: "Systems and IT Intern",
      location: "Miami, FL",
      dates: "June 2022 - August 2022",
      achievements: [
        "Engineered structured Excel data management systems to categorize and track hundreds of product SKUs, empowering colleagues to rapidly query specifications and answer client inquiries, mirroring the self-service nature of internal finance tools.",
        "Managed the product information review lifecycle, enforcing a rigorous quality assurance process to validate technical specs against source data, ensuring a high standard of data governance.",
      ],
    },
  ];

  // Education Data
  const education = [
    {
      degree: "M.S., Data Science",
      school: "University of Virginia",
      date: "Expected May 2027",
      focus: "Machine Learning, Data Engineering, Natural Language Processing.",
    },
    {
      degree: "B.A., Computer Science",
      school: "University of Virginia",
      date: "August 2020 - May 2024",
      focus:
        "Minor: Data Science. Relevant Coursework: Artificial Intelligence, Data Science Systems, Database Systems.",
    },
    {
      degree: "Software Engineering Bootcamp",
      school: "Codesmith (Full-time Immersive)",
      date: "May 2023 - September 2023",
      focus: "Advanced JavaScript, TypeScript, React, and database design.",
    },
  ];

  const talks = [
    {
      title: "GraphQL & the N+1 Problem",
      role: "Speaker",
      date: "July 2023",
      description:
        "Delivered a technical talk on identifying and resolving GraphQL N+1 query issues, a direct parallel to optimizing complex, relational queries against a large Azure SQL schema.",
      sponsors: "Sponsored by Codesmith, Jeeny, and Bractlet.",
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
      "ASP.NET",
      "Entity Framework",
      "jQuery",
    ],
    cloud: [
      "Microsoft Azure (App Service, Functions, Entra ID, Key Vault, SQL Database)",
      "AWS",
      "Terraform",
      "Docker",
      "CI/CD (GitHub Actions, Azure DevOps)",
    ],
    dataAI: [
      "Azure SQL / SQL Server",
      "Apache Kafka",
      "GraphQL",
      "LangChain",
      "Semantic Kernel",
      "DinoV2",
      "TensorFlow",
      "RAG Pipelines",
    ],
    financial: [
      "API Architecture",
      "ETL/ELT",
      "State Isolation",
      "Sensitive Data Handling",
      "Investran (Conceptual)",
      "MCP Server Design (Conceptual)",
    ],
  };

  // Sidebar scroll handler
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="app">
      <div className="container">
        <header>
          <h1>Carlos Fernando Revilla</h1>
          <div className="contact-info">
            <strong>Contact Info:</strong>
            <span>
              <a href="mailto:carlosfr.mgmt@gmail.com">
                carlosfr.mgmt@gmail.com
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/carlosfrevilla/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/carlosfrevilla
              </a>
            </span>
            <span>
              <a
                href="https://github.com/carlosfrev123/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </span>
          </div>
          <div className="title-badge">
            <span className="badge">Full-Stack Software Engineer</span>
            <span className="badge">M.S. Data Science Candidate</span>
            <span className="badge">AI/ML & Cloud Architect</span>
          </div>
          <div className="summary">
            <p>{professionalSummary}</p>
          </div>
          {/* Download Resume Section */}
          <div className="download-resume">
            <span className="download-label">Download Resume:</span>
            <a
              href="/Carlos-Resume-and-Profile/resume/Carlos_F_Revilla-Resume.pdf"
              download
              className="download-link"
            >
              PDF
            </a>
            <span className="download-separator">|</span>
            <a
              href="/Carlos-Resume-and-Profile/resume/Carlos_F_Revilla-Resume.docx"
              download
              className="download-link"
            >
              DOCX
            </a>
            <span className="download-separator">|</span>
            <a
              href="/Carlos-Resume-and-Profile/resume/Carlos_F_Revilla-Resume.html"
              download
              className="download-link"
            >
              HTML
            </a>
          </div>
        </header>

        <div className="tabs">
          <button
            className={activeTab === "resume" ? "active" : ""}
            onClick={() => setActiveTab("resume")}
          >
            Resume
          </button>
          <button
            className={activeTab === "projects" ? "active" : ""}
            onClick={() => setActiveTab("projects")}
          >
            Projects & Samples
          </button>
          <button
            className={activeTab === "contact" ? "active" : ""}
            onClick={() => setActiveTab("contact")}
          >
            Contact
          </button>
        </div>

        {/* RESUME TAB WITH SIDEBAR */}
        {activeTab === "resume" && (
          <div className="resume-layout">
            {/* Sidebar Navigation */}
            <nav className="resume-sidebar">
              <h4>On This Page</h4>
              <ul>
                <li>
                  <button onClick={() => scrollToSection("work-experience")}>
                    Work Experience
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("talks")}>
                    Talks & Publications
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("education")}>
                    Education
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("technical-skills")}>
                    Technical Skills
                  </button>
                </li>
              </ul>
            </nav>

            {/* Main Resume Content */}
            <div className="tab-content">
              {/* Work Experience */}
              <section id="work-experience">
                <h2>Work Experience</h2>
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
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              {/* Talks */}
              <section id="talks">
                <h2>Talks & Publications</h2>
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

                <div className="projects-cta">
                  <p>
                    Project publications can be found in the dedicated projects
                    tab.
                  </p>
                  <button
                    onClick={() => setActiveTab("projects")}
                    className="nav-to-projects-btn"
                  >
                    View Projects & Samples
                  </button>
                </div>
              </section>

              {/* Education */}
              <section id="education">
                <h2>Education</h2>
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
              <section id="technical-skills">
                <h2>Technical Skills</h2>
                <div className="skills-category">
                  <h3>Languages & Frameworks</h3>
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
                  <h3>Financial Services & Integrations</h3>
                  <div className="skills-list">
                    {skills.financial.map((skill, i) => (
                      <span key={i} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}

        {/* PROJECTS & SAMPLES TAB */}
        {activeTab === "projects" && (
          <div className="tab-content">
            <Projects />
          </div>
        )}

        {/* CONTACT TAB */}
        {activeTab === "contact" && (
          <div className="tab-content">
            <ContactForm />
          </div>
        )}

        <footer>
          <p>Built with React + Vite + TensorFlow.js</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
