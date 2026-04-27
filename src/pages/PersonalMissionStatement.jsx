import sipPic from "../assets/SIP Pic.jpg";

const sections = [
  {
    id: "becoming",
    label: "Who I Am Becoming",
    symbol: "✦",
    text: `I am becoming a technology professional who builds with both skill and soul.
Not just a developer — but a problem-solver, a creator, and eventually an entrepreneur.
I am growing into someone who takes his faith seriously, works with discipline,
and refuses to let comfort become an excuse for staying small.
Every line of code I write, every challenge I push through, is shaping the person
I am called to be.`,
  },
  {
    id: "drives",
    label: "What Drives Me",
    symbol: "◆",
    text: `I am driven by the belief that technology, when built with purpose,
can genuinely change lives. I want to build systems and solutions that make
everyday living easier for real people — not just for profit, but because I care
about the people on the other side of the screen. I am also driven by my family.
I want to build something that provides for them and makes them proud.
And above all, I am driven by faith — the quiet conviction that God placed this
passion in me for a reason, and I owe it to Him to pursue it fully.`,
  },
  {
    id: "values",
    label: "The Values I Live By",
    symbol: "❖",
    items: [
      { title: "Faith", desc: "I put God first in everything — my work, my plans, and my purpose." },
      { title: "Discipline", desc: "I show up consistently, even when motivation is absent." },
      { title: "Integrity", desc: "I build and work in ways I am not ashamed of." },
      { title: "Service", desc: "My skills are not just for me — they are meant to help others." },
      { title: "Growth", desc: "I stay curious, keep learning, and never stop improving." },
    ],
  },
  {
    id: "impact",
    label: "The Impact I Hope to Make",
    symbol: "✶",
    text: `I hope to leave a mark that outlasts me. I want to build technology
that solves real problems in my community and beyond. I want to be the kind of
entrepreneur who creates opportunities — not just for himself, but for the people
around him. And I want to show the next generation of Filipino students that you
do not have to choose between faith and ambition, between serving God and
building something great. You can do both. I intend to prove it.`,
  },
];

const PersonalMissionStatement = () => {
  return (
    <div style={styles.pageWrapper}>
      <div style={styles.bgOverlay} />
      <img src={sipPic} alt="background" style={styles.bgImage} />

      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <p style={styles.eyebrow}>SIP Final Project</p>
          <h1 style={styles.title}>PERSONAL MISSION<br />STATEMENT</h1>
          <div style={styles.divider} />
        </div>

        {/* Mission Statement Hero */}
        <div style={styles.heroCard}>
          <p style={styles.heroQuote}>
            "I exist to build technology that serves people, honors God,
            and creates a life of purpose — starting from where I am,
            with what I have, one disciplined day at a time."
          </p>
          <span style={styles.heroName}>— Aaron Narciso</span>
        </div>

        {/* Four Pillars */}
        <div style={styles.pillarsGrid}>
          {sections.map((s) => (
            <div key={s.id} style={styles.pillarCard}>
              <div style={styles.pillarSymbol}>{s.symbol}</div>
              <h2 style={styles.pillarTitle}>{s.label}</h2>
              <div style={styles.pillarDivider} />

              {s.items ? (
                <ul style={styles.valuesList}>
                  {s.items.map((item) => (
                    <li key={item.title} style={styles.valueItem}>
                      <span style={styles.valueTitle}>{item.title}</span>
                      <span style={styles.valueSep}> — </span>
                      <span style={styles.valueDesc}>{item.desc}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={styles.pillarText}>{s.text}</p>
              )}
            </div>
          ))}
        </div>

        {/* Closing */}
        <div style={styles.closingCard}>
          <p style={styles.closingText}>
            This is not just a statement written for a class. This is a commitment
            — to myself, to the people I will serve, and to the God who gave me
            the ability to build. I will return to these words whenever I feel
            lost, and they will remind me: this is who I am, and this is where I
            am going.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageWrapper: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "80px",
    paddingBottom: "60px",
    fontFamily: "'Georgia', 'Times New Roman', serif",
    overflow: "hidden",
  },
  bgImage: {
    position: "fixed",
    top: 0, left: 0,
    width: "100%", height: "100%",
    objectFit: "cover",
    zIndex: 0,
  },
  bgOverlay: {
    position: "fixed",
    top: 0, left: 0,
    width: "100%", height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 1,
  },
  container: {
    position: "relative",
    zIndex: 2,
    width: "min(860px, 92vw)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px",
  },

  /* Header */
  header: {
    textAlign: "center",
    marginBottom: "4px",
  },
  eyebrow: {
    fontSize: "11px",
    letterSpacing: "4px",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.6)",
    margin: "0 0 12px 0",
  },
  title: {
    fontSize: "clamp(20px, 4vw, 32px)",
    fontWeight: "400",
    letterSpacing: "5px",
    color: "#fff",
    margin: "0 0 16px 0",
    textShadow: "0 2px 16px rgba(0,0,0,0.5)",
    lineHeight: "1.4",
    textAlign: "center",
  },
  divider: {
    width: "60px",
    height: "1px",
    background: "#c8a882",
    margin: "0 auto",
  },

  /* Hero Quote Card */
  heroCard: {
    background: "rgba(255, 252, 248, 0.97)",
    width: "100%",
    boxSizing: "border-box",
    padding: "40px 52px",
    borderRadius: "2px",
    boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
    textAlign: "center",
    borderLeft: "4px solid #c8866a",
  },
  heroQuote: {
    fontSize: "clamp(14px, 2vw, 17px)",
    lineHeight: "1.9",
    color: "#2c2019",
    fontStyle: "italic",
    margin: "0 0 16px 0",
  },
  heroName: {
    fontSize: "12px",
    letterSpacing: "2px",
    color: "#c8866a",
    textTransform: "uppercase",
  },

  /* Pillars Grid */
  pillarsGrid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
    gap: "16px",
  },
  pillarCard: {
    background: "rgba(255, 252, 248, 0.97)",
    padding: "32px 32px 28px",
    borderRadius: "2px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
    boxSizing: "border-box",
  },
  pillarSymbol: {
    fontSize: "20px",
    color: "#c8866a",
    marginBottom: "10px",
    opacity: 0.7,
  },
  pillarTitle: {
    fontFamily: "'Georgia', serif",
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: "#2c2019",
    margin: "0 0 12px 0",
  },
  pillarDivider: {
    width: "36px",
    height: "1px",
    background: "#c8a882",
    marginBottom: "16px",
  },
  pillarText: {
    fontSize: "13px",
    lineHeight: "1.9",
    color: "#5a4033",
    margin: 0,
    whiteSpace: "pre-line",
  },

  /* Values List */
  valuesList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  valueItem: {
    fontSize: "13px",
    lineHeight: "1.7",
    color: "#5a4033",
  },
  valueTitle: {
    fontWeight: "700",
    color: "#3a2e2a",
  },
  valueSep: {
    color: "#c8866a",
  },
  valueDesc: {
    fontStyle: "italic",
  },

  /* Closing */
  closingCard: {
    background: "rgba(255, 252, 248, 0.97)",
    width: "100%",
    boxSizing: "border-box",
    padding: "32px 48px",
    borderRadius: "2px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
    borderTop: "3px solid #c8866a",
    textAlign: "center",
  },
  closingText: {
    fontSize: "13px",
    lineHeight: "1.95",
    color: "#5a4033",
    fontStyle: "italic",
    margin: 0,
  },
};

export default PersonalMissionStatement;