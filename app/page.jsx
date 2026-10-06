"use client";

import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "Field Notes",
    type: "Editorial platform",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1100&q=85",
    className: "project-wide",
  },
  {
    number: "02",
    title: "Noma Objects",
    type: "Digital storefront",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=850&q=85",
    className: "project-tall",
  },
  {
    number: "03",
    title: "Common Ground",
    type: "Community archive",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=85",
    className: "project-small",
  },
];

// Draft quote — confirm the wording with Hiren before publishing.
// photo: drop an image in /public/testimonials/ and set its path; initials show until then.
const testimonials = [
  {
    quote: (
      <>
        Rajiv delivered our gym management MVP <mark>in just 2 days</mark>.
        Members, renewals and reports are finally in one place.
      </>
    ),
    name: "Hiren",
    role: "Owner, Aura Fitness",
    location: "Surat, India",
    photo: null,
    projectUrl: "https://aurafitness-gym.vercel.app/",
  },
];

function SectionLabel({ number, children }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span>{children}</span>
    </div>
  );
}

function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      ↘
    </span>
  );
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top">
          RAJIV
        </a>
        <div className="header-actions">
          <nav
            className={menuOpen ? "nav-links is-open" : "nav-links"}
            aria-label="Main navigation"
          >
            <a href="#experience" onClick={() => setMenuOpen(false)}>
              Experience
            </a>
            <a href="#work" onClick={() => setMenuOpen(false)}>
              Work
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>
          <a
            className="pill-button"
            href="/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <span aria-hidden="true">↗</span>
          </a>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            Menu <span>{menuOpen ? "×" : "↘"}</span>
          </button>
        </div>
      </header>

      <section className="cover" id="top">
        <div className="cover-meta">
          <span className="cover-motto">WEB / PRODUCT / AI</span>
          <span>
            FULLSTACK CODE
            <br />& DIGITAL PRODUCTS
          </span>
        </div>
        <div className="cover-title">
          <div className="byline">
            <img
              className="avatar"
              src="/avatar/avatar.png"
              alt="Rajiv Mishra"
            />
            <p>
              <span className="eyebrow">A portfolio by</span>
              <span>FULLSTACK / AI ENGINEER</span>
              <span className="location">
                <i aria-hidden="true" />
                SURAT, INDIA
              </span>
            </p>
          </div>
          <div className="name-row">
            <h1>
              <span className="name-first">Rajiv</span>
              <i className="name-last">Mishra</i>
            </h1>
            <div className="stamp">
              AVAILABLE
              <br />
              FOR
              <br />
              <b>GOOD WORK</b>
            </div>
          </div>
          <div className="cover-strip">
            <p className="lede">
              I build <mark>AI-powered products</mark> for the web.
            </p>
            <p className="stack">NEXT.JS / MERN / LANGGRAPH</p>
          </div>
          <div className="cover-foot">
            <span>
              SCROLL TO EXPLORE <i>↓</i>
            </span>
          </div>
        </div>
      </section>

      <section className="experience spread" id="experience">
        <SectionLabel number="02">EXPERIENCE / THE LONG VERSION</SectionLabel>
        <div className="experience-head">
          <h2>
            Places I&apos;ve
            <br />
            <em>learned.</em>
          </h2>
          <p>
            Selected chapters from a career spent making things for screens,
            teams, and people.
          </p>
        </div>
        <div className="experience-list">
          <article className="experience-item">
            <div className="experience-number">01</div>
            <div className="experience-role">
              <p className="item-kicker">PRESENT / 2024—</p>
              <h3>Fullstack Engineer</h3>
              <p className="company">Independent / Remote</p>
            </div>
            <p className="item-description">
              Building accessible, high-performance products and AI-powered
              workflows with a small group of ambitious people. Owning the
              product from system to shipping.
            </p>
            <div className="item-tools">
              NEXT.JS / MERN / LANGCHAIN / AI AGENTS
            </div>
          </article>
          <article className="experience-item">
            <div className="experience-number">02</div>
            <div className="experience-role">
              <p className="item-kicker">2022—2024</p>
              <h3>Web Developer</h3>
              <p className="company">Studio 42 / Bengaluru</p>
            </div>
            <p className="item-description">
              Translated brand worlds into responsive digital experiences while
              building reliable APIs, data flows, and practical AI features for
              everyday work.
            </p>
            <div className="item-tools">
              REACT / NODE / MONGODB / AI INTEGRATIONS
            </div>
          </article>
        </div>
      </section>

      <section className="work spread" id="work">
        <SectionLabel number="03">
          SELECTED WORK / A FEW FAVOURITES
        </SectionLabel>
        <div className="work-heading">
          <h2>
            Things
            <br />
            <em>I&apos;ve built.</em>
          </h2>
          <span className="work-note">
            03 PROJECTS
            <br />
            01 POINT OF VIEW
          </span>
        </div>
        <div className="project-collage">
          {projects.map((project) => (
            <a
              href="#contact"
              className={`project ${project.className}`}
              key={project.number}
            >
              <div className="project-image">
                <img src={project.image} alt={`${project.title} project`} />
                <span>{project.number}</span>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>
                  {project.type} <span>/</span> {project.year}
                </p>
                <span className="project-arrow">↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="toolkit spread" id="toolkit">
        <SectionLabel number="04">TOOLKIT / THINGS I REACH FOR</SectionLabel>
        <div className="toolkit-grid">
          <h2>
            Tools are
            <br />
            <em>just tools.</em>
          </h2>
          <div className="tool-list">
            <div>
              <span>01</span>
              <b>Build</b>
              <p>Next.js, React, JavaScript</p>
            </div>
            <div>
              <span>02</span>
              <b>Shape</b>
              <p>CSS, design systems, motion</p>
            </div>
            <div>
              <span>03</span>
              <b>Connect</b>
              <p>MongoDB, Express, Node.js</p>
            </div>
            <div>
              <span>04</span>
              <b>Augment</b>
              <p>LangChain, AI agents, generative interfaces</p>
            </div>
          </div>
        </div>
        <div className="explore-note">
          <span>05 / CURRENTLY EXPLORING</span>
          <strong>
            How AI changes the way
            <br />
            we make things.
          </strong>
          <Arrow />
        </div>
      </section>

      <section className="testimonials spread" id="testimonials">
        <SectionLabel number="06">TESTIMONIALS / IN THEIR WORDS</SectionLabel>
        <div className="work-heading">
          <h2>
            Kind
            <br />
            <em>words.</em>
          </h2>
          <span className="work-note">
            FROM CLIENTS
            <br />& TEAMMATES
          </span>
        </div>
        <div className="testimonial-list">
          {testimonials.map((t, i) => (
            <figure
              className={
                i === 0 ? "testimonial testimonial-featured" : "testimonial"
              }
              key={t.name}
            >
              <span className="testimonial-mark" aria-hidden="true">
                “
              </span>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                {t.photo ? (
                  <img
                    className="testimonial-photo"
                    src={t.photo}
                    alt={t.name}
                  />
                ) : (
                  <span className="testimonial-photo" aria-hidden="true">
                    {t.name[0]}
                  </span>
                )}
                <span className="testimonial-person">
                  <b>{t.name}</b>
                  <span>{t.role}</span>
                  <span>{t.location}</span>
                </span>
                <a
                  className="pill-button"
                  href={t.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View project <span aria-hidden="true">↗</span>
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer className="footer spread" id="contact">
        <SectionLabel number="07">
          CONTACT / LET&apos;S MAKE SOMETHING
        </SectionLabel>
        <div className="footer-content">
          <h2>
            Have an idea?
            <br />
            <em>Let&apos;s talk.</em>
          </h2>
          <a className="email-link" href="mailto:contact.rajivmishra@gmail.com">
            contact.rajivmishra@gmail.com <span>↗</span>
          </a>
        </div>
        <div className="footer-bottom">
          <span>AR / 01 — 2026</span>
          <span>INDIA / WORLDWIDE</span>
          <div>
            <a href="#top">BACK TO TOP ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
