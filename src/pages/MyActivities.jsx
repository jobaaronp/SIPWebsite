import { useState } from "react";
import sipActivity1  from '../assets/SIPActivity1.jpg';
import sipActivity2  from '../assets/SIPActivity2.jpg';
import sipActivity3  from '../assets/SIPActivity3.jpg';
import sipActivity4  from '../assets/SIPActivity4.jpg';
import sipActivity5  from '../assets/SIPActivity5.jpg';
import sipActivity6  from '../assets/SIPActivity6.jpg';
import sipActivity7  from '../assets/SIPActivity7.jpg';
import sipActivity8  from '../assets/SIPActivity8.jpg';
import sipActivity9  from '../assets/SIPActivity9.jpg';
import sipActivity10 from '../assets/SIPActivity10.jpg';
import sipActivity11 from '../assets/SIPActivity11.jpg';
import sipActivity12 from '../assets/SIPActivity12.jpg';
import sipActivity13 from '../assets/SIPActivity13.jpg';
import sipActivity14 from '../assets/SIPActivity14.jpg';
import sipActivity15 from '../assets/SIPActivity15.jpg';
import sipActivity16 from '../assets/SIPActivity16.jpg';
import sipActivity17 from '../assets/SIPActivity17.jpg';
import sipActivity18 from '../assets/SIPActivity18.jpg';

const MyActivities = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [modalImg, setModalImg]   = useState(null);

  const activities = [
    { title: "Activity One",      category: "Personal Symbol",     description: "This is the picture that I choose as my symbol. I choose this because it represents my personal growth and development as an Atenean and as a musician.", year: "2026", image: sipActivity1 },
    { title: "Activity Two",      category: "Data Visualization",  description: "The pie chart that I created to represent my time management and productivity through the importance of music.", year: "2026", image: sipActivity2 },
    { title: "Activity Three",    category: "Self-Assessment",     description: "This table represents my attributes as a student.", year: "2026", image: sipActivity3 },
    { title: "Activity Four",     category: "Creative Writing",    description: "This poem was created for my previous professor who was also a law student.", year: "2026", image: sipActivity4 },
    { title: "Activity Five",     category: "Journey Map",         description: "This was my journey map throughout college.", year: "2026", image: sipActivity5 },
    { title: "Activity Six",      category: "Reflection Essay",    description: "A personal reflection on how a bad grade at the start of college became the turning point of my growth — the moment I was forced to ask myself what I was actually here to do.", year: "2026", image: sipActivity6 },
    { title: "Activity Seven",    category: "Symbol & Prayer",     description: "A hand-drawn symbol of my workspace alongside a personal prayer asking God for guidance, strength, and discernment as I walk my journey as a student and musician.", year: "2026", image: sipActivity7 },
    { title: "Activity Eight",    category: "Ignatian Reflection", description: "A reflection on the Ignatian values of Magis, Cura Personalis, and discernment — and how stepping back from music to prioritize academics reflected these principles in my own life.", year: "2026", image: sipActivity8 },
    { title: "Activity Nine",     category: "Soul Reflection",     description: "A reflection on the fear of reaching a goal and still feeling empty — and how that realization challenged me to stop chasing achievements and start being present in the moment I'm already in.", year: "2026", image: sipActivity9 },
    { title: "Activity Ten",      category: "Service Reflection",  description: "A reflection inspired by Jannah's story, which made me realize that true service goes beyond what you produce — it's about companionship, presence, and genuinely listening to the people you serve.", year: "2026", image: sipActivity10 },
    { title: "Activity Eleven",   category: "Finding God",         description: "A reflection on finding God in the everyday challenges of student life — in friendships, projects, and stressful moments — by choosing to be contemplative in action.", year: "2026", image: sipActivity11 },
    { title: "Activity Twelve",   category: "Growth Reflection",   description: "A reflection on growth through messy, slow work like debugging code — learning that real worth doesn't come from a finished product, but from trusting the process, just as Ignatius trusted his.", year: "2026", image: sipActivity12 },
    { title: "Activity Thirteen", category: "Personal Record",     description: "A personal record worksheet exploring what lies beyond myself — the themes, values, and transformative experiences from my Ateneo journey that have shaped me as a person for others.", year: "2026", image: sipActivity13 },
    { title: "Activity Fourteen", category: "ADDU Journey",        description: "A reflection on how the ADDU journey is best described as 'free yet structured' — balancing the freedom of artistic expression with the discipline of academics, resulting in a balanced person.", year: "2026", image: sipActivity14 },
    { title: "Activity Fifteen",  category: "Self-Identity",       description: "A reflection on self-identity as a stable and confident person — and how knowing myself fully allows me to spread positivity, become a role model, and guide others toward inner peace and freedom.", year: "2026", image: sipActivity15 },
    { title: "Activity Sixteen",  category: "Friendship",          description: "A reflection on friendship as presence over position — how real harmony, whether in music or in BS-IT, happens when each person listens deeply, shaping each other's direction through quiet influence.", year: "2026", image: sipActivity16 },
    { title: "Activity Seventeen",category: "Milestones",          description: "My five most important milestones in Ateneo: performing at Magis Gala, competing at Palarong Atenista 2024, organizing SADSAD '23, completing my thesis with Best Thesis recognition, and standing at graduation's edge.", year: "2026", image: sipActivity17 },
    { title: "Activity Eighteen", category: "Closing Reflection",  description: "The closing chapter of my Ignatian reflection — sitting with the tension of consolation and desolation, carrying both pride and loss as I move toward graduation, still figuring out slowly what my change is for.", year: "2026", image: sipActivity18 },
  ];

  const toggle     = (i)    => setOpenIndex(openIndex === i ? null : i);
  const openModal  = (act, e) => { e.stopPropagation(); setModalImg(act); document.body.style.overflow = 'hidden'; };
  const closeModal = ()     => { setModalImg(null); document.body.style.overflow = ''; };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@200;300;400&display=swap');

        .aw-wrapper {
          background-color: #f5f3ee;
          min-height: 100vh;
          font-family: 'Jost', sans-serif;
          color: #3a3530;
          padding-bottom: 120px;
        }

        /* ── HEADER ── */
        .aw-header {
          display: flex; flex-direction: column;
          align-items: center; padding: 120px 2rem 50px; text-align: center;
        }
        .aw-header .hero-icon { font-size: 1.4rem; margin-bottom: 24px; color: #8a9e82; }
        .aw-header h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3rem); font-weight: 400;
          color: #2c2822; margin-bottom: 12px; letter-spacing: 0.01em;
        }
        .aw-header p {
          font-size: 0.75rem; font-weight: 300;
          letter-spacing: 0.2em; color: #7a7068; text-transform: uppercase;
        }

        /* ── DIVIDER ── */
        .aw-divider { display: flex; justify-content: center; padding: 40px 0; }
        .aw-divider-line {
          width: 1px; height: 60px;
          background: linear-gradient(to bottom, transparent, #b5ada2, transparent);
        }

        /* ── LIST ── */
        .aw-list { max-width: 900px; margin: 0 auto; padding: 0 3rem; }

        /* ── ROW ── */
        .aw-row { border-bottom: 1px solid #d4cec7; }
        .aw-row:first-child { border-top: 1px solid #d4cec7; }

        .aw-row-header {
          display: grid;
          grid-template-columns: 50px 160px 1fr auto 44px;
          align-items: center; gap: 24px;
          padding: 24px 0; cursor: pointer; user-select: none;
        }

        .aw-num { font-size: 0.65rem; letter-spacing: 0.2em; color: #8a9e82; font-weight: 300; }

        .aw-badge {
          display: inline-block; font-size: 0.62rem; font-weight: 400;
          letter-spacing: 0.15em; text-transform: uppercase;
          border: 1px solid #c4beb6; color: #7a7068;
          padding: 4px 12px; border-radius: 2px; white-space: nowrap;
          transition: border-color 0.25s, color 0.25s;
        }
        .aw-row:hover .aw-badge, .aw-row.open .aw-badge { border-color: #8a9e82; color: #5a7052; }

        .aw-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.1rem, 2vw, 1.5rem); font-weight: 400;
          letter-spacing: 0.01em; color: #2c2822; transition: color 0.25s;
        }
        .aw-row:hover .aw-title, .aw-row.open .aw-title { color: #5a7052; }

        .aw-year { font-size: 0.68rem; font-weight: 300; letter-spacing: 0.14em; color: #a09890; text-align: right; white-space: nowrap; }

        .aw-toggle {
          width: 34px; height: 34px; border-radius: 50%;
          background: #3a3530; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: background 0.25s;
        }
        .aw-row:hover .aw-toggle, .aw-row.open .aw-toggle { background: #5a7052; }
        .aw-toggle svg { transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1); }
        .aw-row.open .aw-toggle svg { transform: rotate(45deg); }

        /* ── EXPANDED BODY ── */
        .aw-body { overflow: hidden; max-height: 0; transition: max-height 0.55s cubic-bezier(0.16, 1, 0.3, 1); }
        .aw-row.open .aw-body { max-height: 600px; }

        .aw-body-inner {
          display: grid; grid-template-columns: 300px 1fr;
          gap: 48px; padding: 4px 0 44px; align-items: start;
        }

        /* ── IMAGE ── */
        .aw-img-wrap {
          position: relative; overflow: hidden; border-radius: 4px;
          aspect-ratio: 16/10; border: 1px solid #e2ddd6;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07); cursor: zoom-in;
        }
        .aw-img-wrap img {
          width: 100%; height: 100%; object-fit: cover;
          display: block; transition: transform 0.5s ease;
        }
        .aw-img-wrap:hover img { transform: scale(1.05); }

        .aw-img-zoom-hint {
          position: absolute; top: 10px; right: 10px;
          background: rgba(44,40,34,0.65); color: #f5f3ee;
          font-size: 0.58rem; letter-spacing: 0.14em; text-transform: uppercase;
          padding: 4px 9px; border-radius: 2px;
          opacity: 0; transition: opacity 0.25s;
          font-family: 'Jost', sans-serif; font-weight: 300; pointer-events: none;
        }
        .aw-img-wrap:hover .aw-img-zoom-hint { opacity: 1; }

        .aw-img-label {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: linear-gradient(transparent, rgba(44,40,34,0.82));
          padding: 32px 14px 12px;
        }
        .aw-img-label-cat {
          font-size: 0.6rem; font-weight: 400; letter-spacing: 0.16em;
          text-transform: uppercase; color: #c8d9c2; display: inline-block; margin-bottom: 4px;
        }
        .aw-img-label-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem; font-weight: 400; color: #f5f3ee; line-height: 1.2;
        }

        /* ── CONTENT ── */
        .aw-content { padding-top: 4px; }
        .aw-desc { font-size: 0.8rem; font-weight: 300; line-height: 1.85; color: #6b6358; margin-bottom: 24px; }
        .aw-meta-label { font-size: 0.62rem; letter-spacing: 0.2em; text-transform: uppercase; color: #a09890; margin-bottom: 8px; font-weight: 300; }
        .aw-year-chip {
          display: inline-block; border: 1px solid #d4cec7;
          padding: 4px 14px; font-size: 0.72rem; font-weight: 300;
          letter-spacing: 0.12em; color: #5a5248; border-radius: 2px;
        }

        /* ── MODAL ── */
        .aw-modal-overlay {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(28,25,20,0.88); backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center;
          padding: 32px; animation: aw-fade-in 0.25s ease;
        }
        @keyframes aw-fade-in { from { opacity: 0; } to { opacity: 1; } }

        .aw-modal-box {
          position: relative; max-width: 88vw; max-height: 88vh;
          display: flex; flex-direction: column;
          animation: aw-scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes aw-scale-in {
          from { opacity: 0; transform: scale(0.93); }
          to   { opacity: 1; transform: scale(1); }
        }

        .aw-modal-img {
          display: block; max-width: 100%; max-height: 78vh;
          object-fit: contain; border-radius: 4px;
          box-shadow: 0 24px 80px rgba(0,0,0,0.5);
        }

        .aw-modal-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 4px 0;
        }
        .aw-modal-meta { display: flex; flex-direction: column; gap: 4px; }
        .aw-modal-cat { font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase; color: #8a9e82; font-weight: 300; }
        .aw-modal-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem; font-weight: 400; color: #f5f3ee; letter-spacing: 0.01em;
        }
        .aw-modal-close {
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(245,243,238,0.12); border: 1px solid rgba(245,243,238,0.2);
          color: #f5f3ee; font-size: 1.1rem; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s; flex-shrink: 0;
        }
        .aw-modal-close:hover { background: rgba(245,243,238,0.22); }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .aw-list { padding: 0 1.5rem; }
          .aw-row-header { grid-template-columns: 36px 1fr 36px; gap: 12px; }
          .aw-badge, .aw-year { display: none; }
          .aw-body-inner { grid-template-columns: 1fr; gap: 20px; }
          .aw-modal-overlay { padding: 16px; }
        }
      `}</style>

      <div className="aw-wrapper">

        <div className="aw-header">
          <div className="hero-icon">✦</div>
          <h1>My Activities</h1>
          <p>Experiences that shaped my journey</p>
        </div>

        <div className="aw-divider">
          <div className="aw-divider-line" />
        </div>

        <div className="aw-list">
          {activities.map((act, i) => (
            <div key={i} className={`aw-row${openIndex === i ? ' open' : ''}`}>

              <div className="aw-row-header" onClick={() => toggle(i)}>
                <span className="aw-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="aw-badge">{act.category}</span>
                <span className="aw-title">{act.title}</span>
                <span className="aw-year">{act.year}</span>
                <button className="aw-toggle" aria-label="Toggle activity">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <line x1="6" y1="0" x2="6" y2="12" stroke="white" strokeWidth="1.8"/>
                    <line x1="0" y1="6" x2="12" y2="6" stroke="white" strokeWidth="1.8"/>
                  </svg>
                </button>
              </div>

              <div className="aw-body">
                <div className="aw-body-inner">
                  <div
                    className="aw-img-wrap"
                    onClick={(e) => openModal(act, e)}
                    title="Click to view full image"
                  >
                    <img src={act.image} alt={act.title} />
                    <div className="aw-img-zoom-hint">View full ↗</div>
                    <div className="aw-img-label">
                      <div className="aw-img-label-cat">{act.category}</div>
                      <div className="aw-img-label-title">{act.title}</div>
                    </div>
                  </div>

                  <div className="aw-content">
                    <p className="aw-desc">{act.description}</p>
                    <div className="aw-meta-label">Year</div>
                    <span className="aw-year-chip">{act.year}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* MODAL */}
      {modalImg && (
        <div className="aw-modal-overlay" onClick={closeModal}>
          <div className="aw-modal-box" onClick={(e) => e.stopPropagation()}>
            <img className="aw-modal-img" src={modalImg.image} alt={modalImg.title} />
            <div className="aw-modal-footer">
              <div className="aw-modal-meta">
                <span className="aw-modal-cat">{modalImg.category}</span>
                <span className="aw-modal-title">{modalImg.title}</span>
              </div>
              <button className="aw-modal-close" onClick={closeModal} aria-label="Close">✕</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyActivities;