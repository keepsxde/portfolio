import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const NAME = 'Mykhailo Chumak'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <NavLink to="/" className="navbar__brand">
          <span className="navbar__bracket">[</span>
          <span className="navbar__name">{NAME}</span>
          <span className="navbar__bracket">]</span>
          <span className="navbar__cursor" aria-hidden="true" />
        </NavLink>

        <button
          className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          <li>
            <NavLink to="/" className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/writeups" className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}>
              Writeups
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
