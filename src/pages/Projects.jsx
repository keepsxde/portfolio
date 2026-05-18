import { useState } from 'react'
import './Projects.css'

const PROJECTS = [
  {
    id: 1,
    title: 'Project Title One',
    youtubeId: 'YOUR_VIDEO_ID',
    tags: ['Python', 'Networking'],
    tagColors: ['cyan', 'green'],
    description:
      'Replace this with a full description of your project. What problem does it solve? What technologies did you use? What did you learn? Add as much or as little detail as you like — this section expands when the user clicks the button below.',
  },
  {
    id: 2,
    title: 'Project Title Two',
    youtubeId: 'YOUR_VIDEO_ID',
    tags: ['Web Security', 'JavaScript'],
    tagColors: ['red', 'cyan'],
    description:
      'Replace this with a full description of your project. Explain the motivation, your implementation approach, and any interesting challenges you overcame.',
  },
  {
    id: 3,
    title: 'Project Title Three',
    youtubeId: 'YOUR_VIDEO_ID',
    tags: ['Linux', 'Bash', 'Automation'],
    tagColors: ['green', 'purple', 'cyan'],
    description:
      'Replace this with a full description of your project. Include links to your GitHub repository or any live demos if applicable.',
  },
]

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)

  return (
    <article className="project-card">
      <div className="project-card__embed">
        <iframe
          src={`https://www.youtube.com/embed/${project.youtubeId}`}
          title={project.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="project-card__body">
        <div className="project-card__header">
          <h3 className="project-card__title">{project.title}</h3>
          <div className="project-card__tags">
            {project.tags.map((t, i) => (
              <span key={t} className={`tag tag--${project.tagColors[i] ?? 'green'}`}>{t}</span>
            ))}
          </div>
        </div>

        <div className={`project-card__desc${open ? ' project-card__desc--open' : ''}`}>
          <p>{project.description}</p>
        </div>

        <button className="project-card__toggle" onClick={() => setOpen(o => !o)}>
          <span>{open ? 'Hide description' : 'Show description'}</span>
          <svg
            className={`project-card__chevron${open ? ' project-card__chevron--open' : ''}`}
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4 6l4 4 4-4" />
          </svg>
        </button>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <main className="page projects">
      <div className="container">
        <header className="page-header">
          <p className="page-header__prompt">
            <span className="page-header__dollar">$</span> ls ./projects
          </p>
          <h1 className="page-header__title">Projects</h1>
          <p className="page-header__sub">
            A collection of my cybersecurity and software engineering work.
            Replace each card with your own YouTube demo and description.
          </p>
        </header>

        <div className="projects-grid">
          {PROJECTS.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </main>
  )
}
