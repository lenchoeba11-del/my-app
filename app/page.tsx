export default function Home() {
  return (
    <main style={styles.main}>
      <h1 style={styles.logo}>NEXT<span style={{ fontSize: "18px" }}>.js</span></h1>

      <h2 style={styles.title}>
        I am learning my programming by committing to github.wow Abdii Sabaa.
        <br />
        <strong>WOW Abdii sabaa.</strong>
      </h2>

      <p style={styles.text}>
        Looking for a starting point or more instructions?
        <br />
        Head over to <b>Templates</b> or the <b>Learning Center</b>.
      </p>

      <div style={styles.buttons}>
        <button style={styles.deploy}>▲ Deploy Now</button>
        <button style={styles.doc}>Documentation</button>
      </div>
    </main>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center" as const,
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  logo: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "20px",
  },
  text: {
    color: "#555",
    marginBottom: "30px",
    lineHeight: "1.6",
  },
  buttons: {
    display: "flex",
    gap: "15px",
  },
  deploy: {
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    padding: "12px 20px",
    borderRadius: "25px",
    cursor: "pointer",
  },
  doc: {
    backgroundColor: "#fff",
    color: "#000",
    border: "1px solid #ccc",
    padding: "12px 20px",
    borderRadius: "25px",
    cursor: "pointer",
  },
};
