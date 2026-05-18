import { useState } from 'react'
import './Writeups.css'

const WRITEUPS = [
  {
    id: 1,
    title: 'CTF Challenge Name',
    ctf: 'CTF Event Name',
    category: 'Web',
    difficulty: 'Medium',
    diffColor: 'cyan',
    points: 300,
    year: 2024,
    summary: 'A brief summary of what this challenge involved — one or two sentences describing the vulnerability class or technique.',
    content: `Replace this with the full writeup for this challenge.

**Enumeration**
Describe what you found during the recon phase. What services were running? What did you discover?

**Exploitation**
Walk through your exploitation process step by step. Include any commands or payloads you used.

**Flag**
\`FLAG{your_flag_here}\`

**Lessons Learned**
What did this challenge teach you? Any tools or techniques you hadn't used before?`,
  },
  {
    id: 2,
    title: 'Another Challenge',
    ctf: 'CTF Event Name',
    category: 'Pwn',
    difficulty: 'Hard',
    diffColor: 'red',
    points: 500,
    year: 2024,
    summary: 'A brief summary — describe the binary exploitation technique used, e.g. buffer overflow, format string, etc.',
    content: `Replace this with the full writeup for this challenge.

**Binary Analysis**
What did static and dynamic analysis reveal about the binary?

**Vulnerability**
Describe the vulnerability class and how you identified it.

**Exploit Development**
Walk through writing the exploit.

**Flag**
\`FLAG{your_flag_here}\``,
  },
  {
    id: 3,
    title: 'Forensics Challenge',
    ctf: 'CTF Event Name',
    category: 'Forensics',
    difficulty: 'Easy',
    diffColor: 'green',
    points: 100,
    year: 2024,
    summary: 'Brief summary — describe what artifact you analysed and how you extracted the flag.',
    content: `Replace this with the full writeup for this challenge.

**Given Files**
List any files provided with the challenge.

**Analysis**
Walk through your forensics methodology — what tools did you use?

**Flag**
\`FLAG{your_flag_here}\``,
  },
  {
    id: 4,
    title: 'Crypto Challenge',
    ctf: 'CTF Event Name',
    category: 'Crypto',
    difficulty: 'Medium',
    diffColor: 'cyan',
    points: 250,
    year: 2023,
    summary: 'Brief summary — describe the cryptographic weakness exploited.',
    content: `Replace this with the full writeup for this challenge.

**Overview**
What cipher or cryptographic scheme was used?

**Attack**
What mathematical weakness did you exploit?

**Script**
\`\`\`python
# Add your solve script here
\`\`\`

**Flag**
\`FLAG{your_flag_here}\``,
  },
]

const DIFF_COLOR = { Easy: 'green', Medium: 'cyan', Hard: 'red', Insane: 'purple' }

function WriteupCard({ writeup }) {
  const [open, setOpen] = useState(false)
  const diffColor = DIFF_COLOR[writeup.difficulty] ?? 'cyan'

  return (
    <article className="writeup-card">
      <div className="writeup-card__meta">
        <div className="writeup-card__meta-left">
          <span className={`tag tag--${diffColor}`}>{writeup.difficulty}</span>
          <span className="tag tag--green">{writeup.category}</span>
        </div>
        <span className="writeup-card__points">{writeup.points} pts &middot; {writeup.year}</span>
      </div>

      <h3 className="writeup-card__title">{writeup.title}</h3>
      <p className="writeup-card__ctf">{writeup.ctf}</p>
      <p className="writeup-card__summary">{writeup.summary}</p>

      <div className={`writeup-card__content${open ? ' writeup-card__content--open' : ''}`}>
        <div className="writeup-card__content-inner">
          <pre className="writeup-card__pre">{writeup.content}</pre>
        </div>
      </div>

      <button className="writeup-card__toggle" onClick={() => setOpen(o => !o)}>
        <svg
          className={`writeup-card__chevron${open ? ' writeup-card__chevron--open' : ''}`}
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
        <span>{open ? 'Collapse writeup' : 'Read writeup'}</span>
      </button>
    </article>
  )
}

const ALL_CATS = ['All', ...Array.from(new Set(WRITEUPS.map(w => w.category)))]

export default function Writeups() {
  const [filter, setFilter] = useState('All')

  const visible = filter === 'All' ? WRITEUPS : WRITEUPS.filter(w => w.category === filter)

  return (
    <main className="page writeups">
      <div className="container">
        <header className="page-header">
          <p className="page-header__prompt">
            <span className="page-header__dollar">$</span> cat ./writeups/*
          </p>
          <h1 className="page-header__title">CTF Writeups</h1>
          <p className="page-header__sub">
            Documented solutions from Capture The Flag competitions. Click any
            card to expand the full writeup.
          </p>
        </header>

        <div className="writeups-filter">
          {ALL_CATS.map(c => (
            <button
              key={c}
              className={`filter-btn${filter === c ? ' filter-btn--active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="writeups-list">
          {visible.map(w => (
            <WriteupCard key={w.id} writeup={w} />
          ))}
        </div>
      </div>
    </main>
  )
}
