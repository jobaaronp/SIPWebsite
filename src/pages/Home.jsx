import sipPic from '../assets/SIP Pic.jpg'

const Home = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@200;300;400&display=swap');

        .home-wrapper {
          background-color: #f5f3ee;
          min-height: 100vh;
          font-family: 'Jost', sans-serif;
          color: #3a3530;
        }

        /* ── HERO ── */
        .hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 120px 2rem 60px;
          text-align: center;
        }

        .hero-icon {
          font-size: 1.4rem;
          margin-bottom: 32px;
          color: #8a9e82;
        }

        .profile-photo {
            width: 280px;
            height: 360px;
            border-radius: 4px;
            object-fit: cover;
            object-position: top;
            margin-bottom: 40px;
            box-shadow: 0 8px 40px rgba(0,0,0,0.12);
            border: 1px solid #e2ddd6;
            transition: transform 0.4s ease, box-shadow 0.4s ease;
            }
            .profile-photo:hover {
            transform: scale(1.02);
            box-shadow: 0 12px 50px rgba(0,0,0,0.16);
        }

        .hero-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.4rem, 5vw, 3.8rem);
          font-weight: 400;
          color: #2c2822;
          line-height: 1.1;
          margin-bottom: 14px;
        }

        .hero-subtitle {
          font-size: 0.78rem;
          font-weight: 300;
          letter-spacing: 0.22em;
          color: #7a7068;
          text-transform: uppercase;
        }

        .hero-subtitle .dot {
          margin: 0 10px;
          color: #a09890;
        }

        /* ── DIVIDER ── */
        .divider-container {
          display: flex;
          justify-content: center;
          padding: 50px 0;
        }
        .divider-line {
          width: 1px;
          height: 80px;
          background: linear-gradient(to bottom, transparent, #b5ada2, transparent);
        }

        /* ── PILLARS ── */
        .pillars {
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 780px;
          margin: 0 auto;
          padding: 0 3rem 80px;
        }

        .pillar {
          padding: 40px;
        }

        .pillar:first-child {
          border-right: 1px solid #d4cec7;
        }

        .pillar-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.55rem;
          font-weight: 400;
          color: #2c2822;
          margin-bottom: 16px;
        }

        .pillar-text {
          font-size: 0.8rem;
          font-weight: 300;
          line-height: 1.85;
          color: #6b6358;
        }

        /* ── QUOTE ── */
        .quote-band {
          border-top: 1px solid #d4cec7;
          border-bottom: 1px solid #d4cec7;
          padding: 50px 2rem;
          text-align: center;
          max-width: 600px;
          margin: 0 auto 80px;
        }

        .quote-text {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 1.3rem;
          font-weight: 300;
          color: #5a5248;
          line-height: 1.7;
        }

        .quote-attr {
          margin-top: 16px;
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          color: #9e958b;
          text-transform: uppercase;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 600px) {
          .pillars {
            grid-template-columns: 1fr;
            padding: 0 1.5rem 60px;
          }
          .pillar:first-child {
            border-right: none;
            border-bottom: 1px solid #d4cec7;
          }
        }
      `}</style>

      <div className="home-wrapper">

        <section className="hero">
          <div className="hero-icon">✦</div>

          <img
            src = {sipPic}
            alt="Job Aaron T. Pimentel"
            className="profile-photo"
          />

          <h1 className="hero-name">Job Aaron T. Pimentel</h1>

          <p className="hero-subtitle">
            BS-IT 4A
            <span className="dot">•</span>
            Senior Integration Program
          </p>
        </section>

        <div className="divider-container">
          <div className="divider-line" />
        </div>

        <section className="pillars">
          <div className="pillar">
            <h2 className="pillar-title">Knowing Oneself</h2>
            <p className="pillar-text">
              My journey in technology is not just about lines of code,
              but a path toward understanding my purpose. As a senior
              IT student, I look inward to find the intersection of my
              technical skills and my core identity.
            </p>
          </div>

          <div className="pillar">
            <h2 className="pillar-title">Faith</h2>
            <p className="pillar-text">
              Every system I build is a reflection of the order I find in my
              faith. It provides the grounding I need to navigate the
              complexities of modern technology with grace and integrity.
            </p>
          </div>
        </section>

        <div className="quote-band">
          <p className="quote-text">
            "Technology is best when it brings people together."
          </p>
          <p className="quote-attr">— Matt Mullenweg</p>
        </div>

      </div>
    </>
  );
};

export default Home;