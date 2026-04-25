import { useState } from "react";
import sipPic from "../assets/SIP Pic.jpg";

const PassionPlan = () => {
  const [activeSection, setActiveSection] = useState("prayer");

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.bgOverlay} />
      <img src={sipPic} alt="background" style={styles.bgImage} />

      {/* Section Toggle */}
      <div style={styles.toggleBar}>
        <button
          onClick={() => setActiveSection("prayer")}
          style={{
            ...styles.toggleBtn,
            ...(activeSection === "prayer" ? styles.toggleBtnActive : {}),
          }}
        >
          Prayer for Future Self
        </button>
        <button
          onClick={() => setActiveSection("plan")}
          style={{
            ...styles.toggleBtn,
            ...(activeSection === "plan" ? styles.toggleBtnActive : {}),
          }}
        >
          10–20 Year Passion Plan
        </button>
      </div>

      {/* Card */}
      <div style={styles.card}>
        <div style={styles.floralAccent}>✦</div>
        <h1 style={styles.title}>PASSION PLAN</h1>

        {/* ─── PRAYER SECTION ─── */}
        {activeSection === "prayer" && (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Prayer for My Future Self</h2>

            <p style={styles.bodyText}>
              Lord, I come before You not with doubt, but with fire. You placed
              this hunger in me — this desire to build, to create, to use
              technology not just as a career but as a calling. I believe with
              everything in me that You did not give me this passion by accident.
              You gave it to me with purpose, and I intend to honor that.
            </p>

            <p style={styles.bodyText}>
              Father, I ask that You sharpen my mind and steady my hands as I
              work. There will be days when the screen goes dark and the ideas
              run dry — on those days, remind me why I started. Let me not
              measure my progress against others, but against the version of
              myself You are calling me to become. Teach me discipline when
              motivation fades, and teach me patience when results are slow.
            </p>

            <p style={styles.bodyText}>
              I pray that the business I build will not just sustain me — but
              that it will matter. Let every system I write, every solution I
              create, every product I launch carry the weight of genuine purpose.
              Guard me against chasing money without meaning. Keep me grounded
              in the truth that I am building something bigger than profit —
              I am building a legacy rooted in faith and service.
            </p>

            <p style={styles.bodyText}>
              Lord, bless the work I do from home in the early years. Let that
              quiet, disciplined season be where my character is formed and my
              skills are refined. And when the time comes to step out — to launch
              and lead — give me the boldness to go. Remove the fear. Remove
              the hesitation. I will walk forward in faith, knowing that You
              go before me.
            </p>

            <div style={styles.closingPrayer}>
              <p style={styles.closingText}>
                I am not waiting for permission. I am not waiting for the perfect
                moment. I am trusting You with the imperfect steps, the uncertain
                seasons, and the long road ahead. Use my talents, Lord — all of
                them — for something that truly lasts.
              </p>
            </div>

            <p style={styles.closingAmen}>
              Into Your hands I place my ambitions, my plans, and my future.
              May everything I build bring glory to You and good to the people
              around me. <strong>Amen.</strong>
            </p>
          </div>
        )}

        {/* ─── 10-20 YEAR PLAN SECTION ─── */}
        {activeSection === "plan" && (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>10–20 Year Passion Plan</h2>

            <div style={styles.timeline}>
              {/* Short Term */}
              <div style={styles.timelineRow}>
                <div style={styles.timelineLeft}>
                  <h3 style={styles.timelineLabel}>Short-Term (0–5 Years)</h3>
                  <p style={styles.timelineText}>
                    After graduating, I plan to establish myself working remotely
                    in the tech industry — taking on freelance projects, remote
                    roles, or contract work in software and systems development.
                    This period is about building real-world experience, growing
                    my technical depth, and quietly laying the groundwork for
                    something of my own. Every project I take on in these years
                    is practice for the business I am working toward.
                  </p>
                </div>
                <div style={styles.timelineDotCol}>
                  <div style={styles.dot} />
                  <div style={styles.line} />
                </div>
                <div style={styles.timelineRight} />
              </div>

              {/* Medium Term */}
              <div style={styles.timelineRow}>
                <div style={styles.timelineLeft} />
                <div style={styles.timelineDotCol}>
                  <div style={styles.dot} />
                  <div style={styles.line} />
                </div>
                <div style={styles.timelineRight}>
                  <h3 style={styles.timelineLabel}>Medium-Term (5–10 Years)</h3>
                  <p style={styles.timelineText}>
                    This is where I make the leap. I will launch a technology
                    business built around the things I am genuinely passionate
                    about — creating software solutions, tools, or services that
                    solve real problems for real people. I want to build something
                    that reflects both my technical skills and my values. During
                    this phase, I aim to grow a small but capable team, find my
                    market, and prove that a purpose-driven tech business can thrive.
                  </p>
                </div>
              </div>

              {/* Long Term */}
              <div style={styles.timelineRow}>
                <div style={styles.timelineLeft}>
                  <h3 style={styles.timelineLabel}>Long-Term (10–20 Years)</h3>
                  <p style={styles.timelineText}>
                    By this point, I want my business to be running with impact —
                    reaching communities, creating jobs, and solving problems at
                    scale. I hope to mentor the next generation of Filipino tech
                    entrepreneurs and show them that success and faith are not
                    at odds with each other. My goal is not just a profitable
                    company, but a lasting contribution to the people around me
                    and to the country I call home.
                  </p>
                </div>
                <div style={styles.timelineDotCol}>
                  <div style={styles.dot} />
                </div>
                <div style={styles.timelineRight} />
              </div>
            </div>

            <div style={styles.closingPrayer}>
              <p style={styles.closingText}>
                Every stage of this plan is built on one foundation — that God
                directs my steps. The timeline may shift, the path may change,
                but the purpose remains: to build well, to serve others, and to
                leave something behind that mattered.
              </p>
            </div>
          </div>
        )}

        {/* Bottom nav */}
        <div style={styles.bottomNav}>
          {activeSection === "prayer" ? (
            <button style={styles.navBtn} onClick={() => setActiveSection("plan")}>
              Next part of my passion plan →
            </button>
          ) : (
            <button style={styles.navBtnOutline} onClick={() => setActiveSection("prayer")}>
              ← Back to Prayer
            </button>
          )}
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
    backgroundColor: "rgba(0,0,0,0.25)",
    zIndex: 1,
  },
  toggleBar: {
    position: "relative",
    zIndex: 3,
    display: "flex",
    gap: "12px",
    marginBottom: "20px",
  },
  toggleBtn: {
    padding: "8px 20px",
    border: "1px solid rgba(255,255,255,0.6)",
    borderRadius: "4px",
    background: "rgba(255,255,255,0.15)",
    color: "#fff",
    cursor: "pointer",
    fontSize: "13px",
    letterSpacing: "0.5px",
    backdropFilter: "blur(4px)",
    transition: "all 0.2s ease",
  },
  toggleBtnActive: {
    background: "rgba(255,255,255,0.9)",
    color: "#3a2e2a",
    fontWeight: "bold",
    borderColor: "#fff",
  },
  card: {
    position: "relative",
    zIndex: 2,
    background: "rgba(255, 252, 248, 0.97)",
    width: "min(680px, 90vw)",
    padding: "50px 56px",
    borderRadius: "2px",
    boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
    marginBottom: "40px",
  },
  floralAccent: {
    position: "absolute",
    top: "18px", right: "24px",
    fontSize: "32px",
    color: "#c8a882",
    opacity: 0.5,
    userSelect: "none",
  },
  title: {
    textAlign: "center",
    fontFamily: "'Georgia', serif",
    fontSize: "clamp(22px, 4vw, 32px)",
    fontWeight: "400",
    letterSpacing: "6px",
    color: "#2c2019",
    marginBottom: "6px",
    marginTop: "0",
  },
  section: { marginTop: "8px" },
  sectionTitle: {
    textAlign: "center",
    fontFamily: "'Georgia', serif",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: "1px",
    color: "#3a2e2a",
    marginBottom: "24px",
    textTransform: "uppercase",
  },
  bodyText: {
    fontSize: "13.5px",
    lineHeight: "1.9",
    color: "#3a2e2a",
    textAlign: "center",
    marginBottom: "18px",
  },
  closingPrayer: {
    borderTop: "1px solid #d4b896",
    borderBottom: "1px solid #d4b896",
    padding: "20px 24px",
    margin: "28px 0",
    background: "rgba(212, 184, 150, 0.08)",
  },
  closingText: {
    fontSize: "13px",
    lineHeight: "1.9",
    color: "#5a4033",
    textAlign: "center",
    fontStyle: "italic",
    margin: 0,
  },
  closingAmen: {
    fontSize: "12.5px",
    lineHeight: "1.85",
    color: "#5a4033",
    textAlign: "center",
    marginTop: "8px",
  },
  timeline: {
    display: "flex",
    flexDirection: "column",
    margin: "16px 0 24px",
  },
  timelineRow: {
    display: "grid",
    gridTemplateColumns: "1fr 32px 1fr",
    gap: "12px",
    alignItems: "flex-start",
  },
  timelineDotCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "4px",
  },
  dot: {
    width: "14px", height: "14px",
    borderRadius: "50%",
    background: "#c8866a",
    border: "2px solid #fff",
    boxShadow: "0 0 0 2px #c8866a",
    flexShrink: 0,
  },
  line: {
    width: "2px",
    flexGrow: 1,
    minHeight: "40px",
    background: "#c8866a",
    opacity: 0.4,
    margin: "4px 0",
  },
  timelineLeft: {
    textAlign: "right",
    paddingRight: "8px",
    paddingBottom: "24px",
  },
  timelineRight: {
    textAlign: "left",
    paddingLeft: "8px",
    paddingBottom: "24px",
  },
  timelineLabel: {
    fontFamily: "'Georgia', serif",
    fontSize: "13px",
    fontWeight: "700",
    color: "#3a2e2a",
    marginBottom: "8px",
    marginTop: "0",
  },
  timelineText: {
    fontSize: "12.5px",
    lineHeight: "1.85",
    color: "#5a4033",
    margin: 0,
  },
  bottomNav: {
    display: "flex",
    justifyContent: "center",
    marginTop: "24px",
    paddingTop: "20px",
    borderTop: "1px solid #e8ddd4",
  },
  navBtn: {
    padding: "10px 28px",
    background: "#3a2e2a",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
    fontSize: "13px",
    letterSpacing: "0.5px",
  },
  navBtnOutline: {
    padding: "10px 28px",
    background: "transparent",
    color: "#3a2e2a",
    border: "1px solid #3a2e2a",
    borderRadius: "3px",
    cursor: "pointer",
    fontSize: "13px",
    letterSpacing: "0.5px",
  },
};

export default PassionPlan;