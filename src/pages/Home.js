import React from "react";
import { Link } from "react-router-dom";
import TopServices from "../components/TopServices";

export default function Home() {
  return (
    <div style={{ maxWidth: "1000px", margin: "auto", padding: "1rem" }}>
      {/* Intro Section */}
      <section style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1>ARIJIT_WITH_U</h1>
        <p style={{ fontSize: "1.1rem", fontWeight: "500", color: "#555" }}>
          Welcome to The Arijit Panda: Dream 2 Success – your trusted partner in financial excellence.
With 6+ years of experience as a Commerce Graduate, CA & CMA aspirant, and Registered GST Practitioner, I provide expert solutions in Audit, Taxation, Legal Compliance, Accounts Management, and Strategic Growth.
I’m committed to delivering accurate, practical, and value-driven services to help you grow, stay compliant, and achieve your goals
          <br />
          <strong>Affordable. Reliable. On Time. Every Time.</strong>
        </p>
      </section>

      {/* Profile Section */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          textAlign: "center",
        }}
      >
        <img
          src="/images/your-photo.jpg"
          alt="ARIJIT Photo"
          style={{
            width: "130px",
            borderRadius: "50%",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        />
        <h2>ARIJIT PANDA</h2>

        <p style={{ lineHeight: "1.6", textAlign: "justify" }}>
          🎓 <strong>About My Qualifications:</strong> I am a Commerce Graduate, currently pursuing CA & CMA, and a Registered GST Practitioner (GSTP) with 6 years of professional experience. My expertise includes Audit, Taxation, Legal Compliance, Accounts Management, Strategic Decision-Making, and Fund Management. I combine technical knowledge with practical insights to deliver effective, tailored financial solutions that help individuals and businesses thrive
          <br />
          SHORT DESCRIPTION
        </p>

            <p style={{ lineHeight: "1.6", textAlign: "justify" }}>
  👋 <strong>About Me:</strong> I am Arijit Panda, dedicated to delivering precise, practical, and value-driven financial solutions tailored to my clients’ needs. With proven leadership skills and a passion for inspiring teams, I foster a collaborative environment that turns challenges into opportunities.
</p>
<p style={{ lineHeight: "1.6", textAlign: "justify" }}>
  I believe that solutions are not confined to four walls or a desk—by adopting innovative approaches and exploring new possibilities, I go beyond conventional methods to achieve impactful results.
</p>
<p style={{ lineHeight: "1.6", textAlign: "justify" }}>
  💡 <em>Your One-Stop Solution – The Arijit Panda: Dream 2 Success</em> is not just a name—it’s a journey from Zero to One, focused on development, growth, value creation, and peace. Keep Smiling. Stay Happy.
</p>
      </section>

      <hr style={{ margin: "2rem 0" }} />

      {/* Services Section */}
      <section>
        <TopServices />
      </section>

      {/* Inspiration Button Section */}
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
    </div>
  );
}

