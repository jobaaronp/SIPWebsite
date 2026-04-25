import jm1 from "../assets/JM1.png";
import jm2 from "../assets/JM2.png";
import sipPic from "../assets/SIP Pic.jpg";

const JourneyMap = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Background */}
      <div style={styles.bgOverlay} />
      <img src={sipPic} alt="background" style={styles.bgImage} />

      {/* Content */}
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>JOURNEY MAP</h1>
          <p style={styles.subtitle}>A visual reflection of my path through college</p>
          <div style={styles.divider} />
        </div>

        {/* Map 1 */}
        <div style={styles.mapCard}>
          <p style={styles.mapLabel}>Part 1</p>
          <img src={jm1} alt="Journey Map Part 1" style={styles.mapImage} />
        </div>

        {/* Connector */}
        <div style={styles.connector}>
          <div style={styles.connectorLine} />
          <div style={styles.connectorDot} />
          <div style={styles.connectorLine} />
        </div>

        {/* Map 2 */}
        <div style={styles.mapCard}>
          <p style={styles.mapLabel}>Part 2</p>
          <img src={jm2} alt="Journey Map Part 2" style={styles.mapImage} />
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
    backgroundColor: "rgba(0,0,0,0.35)",
    zIndex: 1,
  },
  container: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "min(860px, 92vw)",
    gap: "0px",
  },
  header: {
    textAlign: "center",
    marginBottom: "32px",
  },
  title: {
    fontSize: "clamp(22px, 4vw, 34px)",
    fontWeight: "400",
    letterSpacing: "6px",
    color: "#fff",
    margin: "0 0 8px 0",
    textShadow: "0 2px 12px rgba(0,0,0,0.5)",
  },
  subtitle: {
    fontSize: "13px",
    color: "rgba(255,255,255,0.75)",
    fontStyle: "italic",
    letterSpacing: "1px",
    margin: "0 0 16px 0",
  },
  divider: {
    width: "60px",
    height: "1px",
    background: "#c8a882",
    margin: "0 auto",
  },
  mapCard: {
    background: "rgba(255, 252, 248, 0.97)",
    borderRadius: "2px",
    boxShadow: "0 8px 40px rgba(0,0,0,0.35)",
    padding: "28px 28px 20px",
    width: "100%",
    boxSizing: "border-box",
  },
  mapLabel: {
    fontFamily: "'Georgia', serif",
    fontSize: "11px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: "#c8866a",
    marginBottom: "14px",
    marginTop: "0",
    textAlign: "center",
  },
  mapImage: {
    width: "100%",
    height: "auto",
    display: "block",
    borderRadius: "1px",
  },
  connector: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "6px 0",
  },
  connectorLine: {
    width: "2px",
    height: "20px",
    background: "#c8866a",
    opacity: 0.5,
  },
  connectorDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#c8866a",
    border: "2px solid #fff",
    boxShadow: "0 0 0 2px #c8866a",
    margin: "3px 0",
  },
};

export default JourneyMap;