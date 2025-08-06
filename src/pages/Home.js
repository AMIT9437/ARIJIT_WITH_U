import React from "react";
import { Link } from "react-router-dom";
import TopServices from "../components/TopServices";

export default function Home() {
  return (
    <div style={{ maxWidth: "1000px", margin: "auto", padding: "1rem" }}>
      <section style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1>ARIJIT_WITH_U</h1>
        <p style={{ fontSize: "1.1rem", fontWeight: "500", color: "#555" }}>
          DESCRIPTION HERE( MATE TUMA ANUSARE SEND KARIBA MU UPDATE KARIDEBI AU.
          <br />
          <strong>Affordable. Reliable. On Time. Every Time.</strong>
        </p>
      </section>

      <section style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", textAlign: "center" }}>
        <img
          src="/images/your-photo.jpg"
          alt="ARIJIT Photo"
          style={{ width: "130px", borderRadius: "50%", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
        />
        <h2>ARIJIT PANDA</h2>
        <p style={{ lineHeight: "1.6", textAlign: "justify" }}>
          🎓 <strong>About My Qualifications:</strong> UPDATE LATER.
          <br /><br />
           SHORT DESCRIPTION 
        <p style={{ lineHeight: "1.6", textAlign: "justify" }}>
          👋 <strong>About Me:</strong> ABOUT U ( UPDATE LATER)
        </p>
      </section>

      <hr style={{ margin: "2rem 0" }} />

      <section>
        <TopServices />
      </section>

      {/* 🌟 My Inspiration Button Section */}
      <section style={{ textAlign: "center", marginTop: "2rem" }}>
        <Link to="/inspiration">
          <button
            style={{
              background: "linear-gradient(135deg, #ff6ec4, #7873f5)",
              color: "#fff",
              padding: "14px 34px",
              fontSize: "18px",
              fontWeight: "bold",
              borderRadius: "40px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            💖 My Inspiration
          </button>
        </Link>
      </section>

      <footer style={{ marginTop: "3rem", textAlign: "center", fontSize: "0.9rem", color: "#777" }}>
        <p><strong>About:</strong> ARIJIT WITH U</p>
        <p><strong>Contact Us:</strong> Email: MAIL ID @gmail.com | Phone: +91-1212121212</p>
        <p>© 2025 ARIJIT WITH U. All Rights Reserved.</p>
      </footer>
    </div>
  );

}
