import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import "../CSS/Home.css"
import '../index.css' 


// 🖼️ Import Assets
import photo from '../../public/hardik.png'
import githubLogo from '../../public/github.png'
import linkedinLogo from '../../public/linkedin.png'
import gmailLogo from '../../public/gmail.png'
import whatsappLogo from '../../public/whatsapp.png'
import instagramLogo from '../../public/insta.png'


export default function Home() {
  const professions = [
    'Database Manager',
    'Data Engineer',
    "SQL Specialist",
    'Database Architect',
    'Data Analyst',
  ]

  const quickLinks = [
    { img: githubLogo, title: 'GitHub', link: 'https://github.com/Hardik-112006' },
    { img: linkedinLogo, title: 'LinkedIn', link: 'https://www.linkedin.com/in/hardik-talwar-66b362335/' },
    { img: gmailLogo, title: 'Email', link: 'mailto:hardiktalwar2006@gmail.com' },
    { img: whatsappLogo, title: 'WhatsApp', link: 'https://wa.me/+917706859594' },
    { img: instagramLogo, title: 'Instagram', link: 'https://www.instagram.com/kunj_2834/' },
  ]

  const exploreLinks = [
    { label: '🚀 Projects', to: '/projects', desc: 'View my technical work' },
    { label: '💼 Experience', to: '/experience', desc: 'My professional journey' },
    { label: '🎯 Skills', to: '/skills', desc: 'Tech stack & tools' },
    { label: '📜 Certificates', to: '/certificates', desc: 'My achievements' },
    { label: '📄 Resume', to: '/resume', desc: 'Download my CV' },
    { label: '📬 Contact', to: '/contact', desc: 'Get in touch' }
  ]

  return (
    <section className="home-section">
      {/* Typing Effect Styles */}
      <style>
        {`
          @keyframes typing { from { width: 0; } to { width: 100%; } }
          @keyframes blink { 50% { border-color: transparent; } }
        `}
      </style>

      {/* Top Section: Photo + Info */}
      <div className="home-top">
        {/* Left: Glowing Photo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="photo-container"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="photo-ring"
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="photo-frame"
          >
            <motion.img
              src={photo}
              alt="Hardik Talwar"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="profile-photo"
            />
          </motion.div>
        </motion.div>

        {/* Right: Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
        >
          <h1 className="home-title">
            Hi, I’m{' '}
            <motion.span
              animate={{ backgroundPositionX: ['0%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="home-name"
            >
              Hardik Talwar
            </motion.span>
          </h1>

          {/* Typing Animated Text */}
          <p className="typing-effect">
            Database Manager | Data Engineer | Tech Explorer
          </p>

          {/* Profession Tags */}
          <motion.div className="profession-tags">
            {professions.map((role, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05, background: 'linear-gradient(90deg,var(--accent),var(--accent-2))' }} transition={{ type: 'spring', stiffness: 200 }} className="profession-tag">
                {role}
              </motion.div>
            ))}
          </motion.div>

          {/* Info Cards */}
          <motion.div className="info-cards">
            {[
              { label: '📍 Location', value: 'Lucknow, Uttar Pradesh, India' },
              { label: '💼 Expertise', value: 'Database Management, Data Engineering' },
              { label: '📧 Contact', value: 'hardiktalwar2006@gmail.com' },
            ].map((info, i) => (
              <motion.div key={i} whileHover={{ y: -4, scale: 1.05 }} transition={{ type: 'spring', stiffness: 250 }} className="info-card">
                <strong>{info.label}</strong>
                <p>{info.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Quick Links */}
      <motion.div className="quick-links">
        <h2 className="quick-links-title">Connect with me</h2>
        <div className="quick-links-list">
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 250 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{ filter: 'drop-shadow(0 0 15px var(--accent)) brightness(1.2)' }}
                className="quick-link-img"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Explore Grid for Mobile Friendly Navigation */}
      <motion.div className="explore-section" style={{ marginTop: '4rem', width: '100%', maxWidth: '1000px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#fff' }}>Explore My Portfolio</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.2rem', padding: '0 1rem' }}>
          {exploreLinks.map((item, idx) => (
            <Link key={idx} to={item.to} style={{ textDecoration: 'none' }}>
              <motion.div 
                whileHover={{ scale: 1.05, background: 'linear-gradient(145deg, rgba(0,255,200,0.15), rgba(10,10,10,0.9))', borderColor: 'var(--accent)' }}
                transition={{ type: 'spring', stiffness: 200 }}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#fff',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                }}
              >
                <h3 style={{ fontSize: '1.3rem', margin: 0, color: 'var(--accent)' }}>{item.label}</h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>{item.desc}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>

    </section>
  )
}
