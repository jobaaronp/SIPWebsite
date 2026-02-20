import sipActivity1 from '../assets/SIP Activity 1.jpg';
import sipActivity2 from '../assets/SIP Activity 2.jpg';
import sipActivity3 from '../assets/SIP Activity 3.jpg';
import sipActivity4 from '../assets/SIP Activity 4.jpg';
import sipActivity5 from '../assets/SIP Activity 5.jpg';

const MyActivities = () => {
  const activities = [
    {
      title: "Activity One",
      description: "This is the picture that I choose as my symbol. I choose this because it represents my personal growth and development as an Atenean and as a musician.",
      year: "2026",
      image: sipActivity1,
    },
    {
      title: "Activity Two",
      description: "The pie chart that I created to represent my time management and productivity through the importance of music.",
      year: "2026",
      image: sipActivity2,
    },
    {
      title: "Activity Three",
      description: "This table represents my attributes as a student.",
      year: "2026",
      image: sipActivity3,
    },
    {
      title: "Activity Four",
      description: "This poem was created for my previous professor who was also a law student.",
      year: "2026",
      image: sipActivity4,
    },
    {
      title: "Activity Five",
      description: "This was my journey map throughout college.",
      year: "2026",
      image: sipActivity5,
    },
    
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@200;300;400&display=swap');

        .activities-wrapper {
          background-color: #f5f3ee;
          min-height: 100vh;
          font-family: 'Jost', sans-serif;
          color: #3a3530;
        }

        /* ── PAGE HEADER ── */
        .activities-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 120px 2rem 50px;
          text-align: center;
        }

        .activities-header .hero-icon {
          font-size: 1.4rem;
          margin-bottom: 24px;
          color: #8a9e82;
        }

        .activities-header h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 400;
          color: #2c2822;
          margin-bottom: 12px;
          letter-spacing: 0.01em;
        }

        .activities-header p {
          font-size: 0.75rem;
          font-weight: 300;
          letter-spacing: 0.2em;
          color: #7a7068;
          text-transform: uppercase;
        }

        /* ── DIVIDER ── */
        .divider-container {
          display: flex;
          justify-content: center;
          padding: 40px 0;
        }
        .divider-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, transparent, #b5ada2, transparent);
        }

        /* ── GRID ── */
        .activities-grid {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 3rem 100px;
        }

        .activity-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid #d4cec7;
        }

        .activity-row:first-child {
          border-top: 1px solid #d4cec7;
        }

        .activity-card {
          padding: 44px 40px;
          position: relative;
        }

        .activity-card:first-child {
          border-right: 1px solid #d4cec7;
        }

        /* ── ACTIVITY IMAGE ── */
        .activity-image-wrapper {
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: 4px;
          margin-bottom: 20px;
        }

        .activity-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .activity-image-wrapper img:hover {
          transform: scale(1.04);
        }

        .activity-number {
          font-size: 0.62rem;
          letter-spacing: 0.2em;
          color: #8a9e82;
          text-transform: uppercase;
          margin-bottom: 14px;
          font-weight: 300;
        }

        .activity-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem;
          font-weight: 400;
          color: #2c2822;
          margin-bottom: 14px;
          letter-spacing: 0.01em;
          line-height: 1.2;
        }

        .activity-desc {
          font-size: 0.78rem;
          font-weight: 300;
          line-height: 1.85;
          color: #6b6358;
        }

        .activity-year {
          margin-top: 20px;
          font-size: 0.65rem;
          letter-spacing: 0.18em;
          color: #a09890;
          text-transform: uppercase;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 600px) {
          .activity-row {
            grid-template-columns: 1fr;
          }
          .activity-card:first-child {
            border-right: none;
            border-bottom: 1px solid #d4cec7;
          }
          .activities-grid {
            padding: 0 1.5rem 60px;
          }
        }
      `}</style>

      <div className="activities-wrapper">

        {/* ── HEADER ── */}
        <div className="activities-header">
          <div className="hero-icon">✦</div>
          <h1>My Activities</h1>
          <p>Experiences that shaped my journey</p>
        </div>

        <div className="divider-container">
          <div className="divider-line" />
        </div>

        {/* ── ACTIVITY GRID ── */}
        <div className="activities-grid">
          {Array.from({ length: Math.ceil(activities.length / 2) }).map((_, rowIdx) => (
            <div className="activity-row" key={rowIdx}>
              {activities.slice(rowIdx * 2, rowIdx * 2 + 2).map((activity, colIdx) => (
                <div className="activity-card" key={colIdx}>
                  {activity.image && (
                    <div className="activity-image-wrapper">
                      <img src={activity.image} alt={activity.title} />
                    </div>
                  )}
                  <p className="activity-number">0{rowIdx * 2 + colIdx + 1}</p>
                  <h2 className="activity-title">{activity.title}</h2>
                  <p className="activity-desc">{activity.description}</p>
                  <p className="activity-year">{activity.year}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default MyActivities;