import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Mail, Users } from 'lucide-react';

const EXPERIENCES = [
  {
    title: 'TechNeekX',
    role: 'Chief Business Officer',
    desc: 'Leading business operations and strategy. Giving top priority to community building and sustainable growth.',
    img: '/offer_letter/techneekx.jpeg',
    link: 'https://teamtechneekx.netlify.app',
    email: 'teamtechneekxx@gmail.com',
    featured: true
  },
  {
    title: 'NerdsRoom',
    role: 'Community Lead',
    desc: 'Building and managing vibrant tech communities, fostering knowledge sharing and collaboration.',
    img: '/offer_letter/nerdsroom.jpeg',
    link: 'https://nerdsroom.xyz',
    featured: false
  },
  {
    title: 'HackInfinity',
    role: 'Team Member',
    desc: 'Organizing and participating in high-impact hackathons and tech events.',
    img: '/offer_letter/hackinfinity.jpeg',
    link: '#',
    featured: false
  }
];

export default function Experience() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ padding: '60px 0' }}
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          style={{ fontSize: 28, color: '#00b4ff', marginBottom: 8 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          💼 Experience & Offers
        </motion.h2>
        <p style={{ color: '#aaa', marginBottom: 30 }}>
          Showcasing my official offer letters and roles across different organizations.
        </p>

        <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              style={{
                background: exp.featured ? 'linear-gradient(145deg, rgba(0,180,255,0.08), rgba(10,10,10,0.9))' : 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: exp.featured ? '1px solid rgba(0,180,255,0.3)' : '1px solid rgba(255,255,255,0.05)',
                borderRadius: 16,
                padding: 20,
                boxShadow: exp.featured ? '0 0 20px rgba(0,180,255,0.1)' : 'none'
              }}
            >
              {exp.featured && (
                <div style={{ background: '#00b4ff', color: '#fff', fontSize: 12, padding: '4px 10px', borderRadius: 12, display: 'inline-block', marginBottom: 12, fontWeight: 'bold' }}>
                  ⭐ Highlight
                </div>
              )}
              
              <div 
                style={{ borderRadius: 10, overflow: 'hidden', cursor: 'pointer', marginBottom: 16, border: '1px solid rgba(255,255,255,0.1)' }}
                onClick={() => setSelectedImg(exp.img)}
              >
                <img src={exp.img} alt={exp.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              </div>

              <h3 style={{ fontSize: 20, color: '#00b4ff', marginBottom: 4 }}>{exp.title}</h3>
              <div style={{ fontSize: 15, color: '#fff', fontWeight: 600, marginBottom: 8 }}>{exp.role}</div>
              <p style={{ fontSize: 14, color: '#aaa', marginBottom: 16, lineHeight: 1.5 }}>{exp.desc}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {exp.link !== '#' && (
                  <a href={exp.link} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#0ea5e9', textDecoration: 'none', background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: 6 }}>
                    <ExternalLink size={14} /> Website
                  </a>
                )}
                {exp.email && (
                  <a href={`mailto:${exp.email}`} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#fff', textDecoration: 'none', background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: 6 }}>
                    <Mail size={14} /> Contact
                  </a>
                )}
                {exp.featured && (
                  <a href={`mailto:${exp.email}?subject=Interested in joining PR & Outreach Team`} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#fff', textDecoration: 'none', background: 'linear-gradient(90deg, #0ea5e9, #2563eb)', padding: '8px 12px', borderRadius: 6, width: '100%', justifyContent: 'center', marginTop: 6, fontWeight: 'bold' }}>
                    <Users size={16} /> Join PR & Outreach Team Now!
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}
          >
            <motion.img
              src={selectedImg}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{ maxWidth: '100%', maxHeight: '90vh', borderRadius: 8, boxShadow: '0 0 30px rgba(0,180,255,0.3)' }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
