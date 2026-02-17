import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500&family=Jost:wght@200;300;400&display=swap');

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 48px;
          transition: background 0.5s ease, padding 0.4s ease, box-shadow 0.4s ease;
          background: transparent;
        }

        .navbar.scrolled {
          background: rgba(245, 243, 238, 0.92);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 14px 48px;
          box-shadow: 0 1px 0 rgba(180, 172, 162, 0.3);
        }

        /* ── LOGO ── */
        .nav-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem;
          font-weight: 400;
          color: #2c2822;
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: opacity 0.3s ease;
        }
        .nav-logo:hover {
          opacity: 0.6;
        }

        /* ── LINKS ── */
        .nav-links {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 40px;
          margin: 0;
          padding: 0;
        }

        .nav-links a {
          font-family: 'Jost', sans-serif;
          font-size: 0.68rem;
          font-weight: 300;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #5a5248;
          text-decoration: none;
          position: relative;
          padding-bottom: 3px;
          transition: color 0.3s ease;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: #3a3530;
          transition: width 0.35s ease;
        }

        .nav-links a:hover {
          color: #2c2822;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .nav-links a.active {
          color: #2c2822;
          font-weight: 400;
        }

        .nav-links a.active::after {
          width: 100%;
          background: #8a9e82;
        }

        /* ── HAMBURGER (mobile) ── */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }

        .hamburger span {
          display: block;
          width: 22px;
          height: 1px;
          background: #3a3530;
          transition: transform 0.35s ease, opacity 0.35s ease;
          transform-origin: center;
        }

        .hamburger.open span:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open span:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
        }

        /* ── MOBILE MENU ── */
        .mobile-menu {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(245, 243, 238, 0.97);
          z-index: 99;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 36px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }

        .mobile-menu.open {
          opacity: 1;
          pointer-events: all;
        }

        .mobile-menu a {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 400;
          color: #2c2822;
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: opacity 0.3s ease;
        }

        .mobile-menu a:hover {
          opacity: 0.5;
        }

        .mobile-menu a.active {
          color: #8a9e82;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 640px) {
          .navbar {
            padding: 20px 24px;
          }
          .navbar.scrolled {
            padding: 14px 24px;
          }
          .nav-links {
            display: none;
          }
          .hamburger {
            display: flex;
          }
          .mobile-menu {
            display: flex;
          }
        }
      `}</style>

      {/* ── NAVBAR BAR ── */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <NavLink to="/" className="nav-logo">J. Pimentel</NavLink>

        {/* Desktop links */}
        <ul className="nav-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/my-activities">My Activities</NavLink></li>
          <li><NavLink to="/about-me">About Me</NavLink></li>
        </ul>

        {/* Hamburger for mobile */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* ── MOBILE FULL-SCREEN MENU ── */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/my-activities" onClick={() => setMenuOpen(false)}>My Activities</NavLink>
        <NavLink to="/about-me" onClick={() => setMenuOpen(false)}>About Me</NavLink>
      </div>
    </>
  )
}

export default Navbar