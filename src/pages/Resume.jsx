import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00b4ff", marginBottom: 4 }}>
              👨‍💻 HARDIK TALWAR
            </h3>
            <p style={{ margintop: 10, fontSize: 15, color: "#ccc" }}>
              Bachelor of Technology | Babu Banarasi Das University, Lucknow
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 Sadar Purana Quila, Lucknow, Uttar Pradesh 226001
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ✉️ hardiktalwar2006@gmail.com | 📞 +91 7706859594
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 560,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
              B.Tech student at Babu Banarasi Das University. Open Source Contributor at Elite Coders Winters Of Code.
              Skilled in SQL, Java, Python, and JavaScript. Passionate about database management, data engineering, and building scalable data-driven applications.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Section with Border Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🎓 Education
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>Bachelor of Technology</strong> — Babu Banarasi Das University, Lucknow (Sept 2024 – July 2028) <br />
              <span style={{ color: "#aaa" }}>GPA: 8.02</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>10th & 12th Board</strong> — Christ Church College, Lucknow (Mar 2011 – June 2024) <br />
              <span style={{ color: "#aaa" }}>Percentage: 90%</span>
            </li>
          </ul>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            💼 Experience
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>Open Source Contributor</strong> — Elite Coders Winters Of Code (Hybrid) <br />
              <span style={{ color: "#aaa" }}>Jan 2026 – Mar 2026</span>
              <ul style={{ paddingLeft: 20, color: "#ccc", marginTop: 8, fontSize: 14 }}>
                <li>Contributed to real-world open-source projects under mentorship, collaborating with developers and improving code quality through pull requests and reviews with my skills.</li>
                <li>Actively participated in a global developer community, working on issues, documentation, and feature enhancements in a structured contribution program.</li>
              </ul>
            </li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>💼 Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>♻️ <strong>ReVibe:</strong> An innovative e-wast management platform (React, Node.js)</li>
            <li>2️⃣ <strong>Hanu-Planner:</strong> Interactive planning and scheduling application (React, Tailwind CSS)</li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>⚙️ Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "Java",
              "C++",
              "Python",
              "JavaScript",
              "SQL",
              "C",
              "VS Code",
              "Jupyter Notebook",
              "GitHub",
              "HTML",
              "CSS",
              "Numpy",
              "Pandas",
              "Matplotlib",
              "Seaborn",
              "Web Scraping",
              "Leadership",
              "Communication",
              "Public Speaking",
              "Time Management",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Achievements & Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>🏆 Achievements & Leadership</h4>
          <ul style={{ paddingLeft: 20, margin: 0, lineHeight: 1.8, color: "#ccc" }}>
            <li>Secured 1st rank among 5000+ users in Tech-Quest Hosted by Allahabad University, 2026.</li>
            <li>Completed Many Virtual Internships Training by Deloitte, Amazon AWS, TCS, JP Morgan.</li>
            <li>Secured 22nd rank in Daily Series: Management and Tech Series organised by Unstop, 2026.</li>
            <li><strong>Team Leader (Community Lead, Nerds Room)</strong> — Jan 2025 – Present</li>
            <li>Participated in Reverse Coding X of Shaastra 2026 Organised by IIT Madras.</li>
            <li>Participated in Codeslayer 2k25 Hackathon Organised By NIT Delhi, Luckn</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "🏆 LeetCode", link: "https://leetcode.com/u/hardik112006/" },
            { name: "💻 GitHub", link: "https://github.com/Hardik-112006" },
            { name: "💼 LinkedIn", link: "https://www.linkedin.com/in/hardik-talwar-66b362335/" },
            { name: "💻 GeeksForGeeks", link: "https://www.geeksforgeeks.org/profile/hardiktalukjo/" },
            { name: "📊 Codolio", link: "https://codolio.com/profile/Hardik112006" },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src="/resume.pdf"
            title="Hardik Talwar Resume"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "#00b4ff",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: 0.3,
          }}
        >
          ⬇️ Download Resume
        </motion.a>


      </motion.div>
    </section>
  );
}
