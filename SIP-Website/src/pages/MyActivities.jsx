const MyActivities = () => {
  const activities = [
    {
      title: "Activity Title One",
      description: "Describe what this activity was about, your role, and what you learned or contributed during this experience.",
      year: "2024",
    },
    {
      title: "Activity Title Two",
      description: "Describe what this activity was about, your role, and what you learned or contributed during this experience.",
      year: "2024",
    },
    {
      title: "Activity Title Three",
      description: "Describe what this activity was about, your role, and what you learned or contributed during this experience.",
      year: "2023",
    },
    {
      title: "Activity Title Four",
      description: "Describe what this activity was about, your role, and what you learned or contributed during this experience.",
      year: "2023",
    },
    {
      title: "Activity Title Five",
      description: "Describe what this activity was about, your role, and what you learned or contributed during this experience.",
      year: "2023",
    },
    {
      title: "Activity Title Six",
      description: "Describe what this activity was about, your role, and what you learned or contributed during this experience.",
      year: "2022",
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

        /* Row separator between every two rows */
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

        /* Vertical divider between the two columns */
        .activity-card:first-child {
          border-right: 1px solid #d4cec7;
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