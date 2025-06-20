import React from 'react';
import './TeamMembers.css';

const members = [
  {
    name: 'Hardeep Singh',
    role: 'Head - Business & Technology',
    email: 'hardeep@88gravity.com',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    linkedin: '#',
    featured: true,
  }, 
  {
    name: 'Jane Doe',
    role: 'Marketing Lead',
    email: 'jane.doe@email.com',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    linkedin: '#',
  },
  {
    name: 'John Smith',
    role: 'Operations Manager',
    email: 'john.smith@email.com',
    image:  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    linkedin: '#',
  },
  {
    name: 'Priya Sharma',
    role: 'Creative Director',
    email: 'priya.sharma@email.com',
    image:  'https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=600&q=80',
    linkedin: '#',
  },
  {
    name: 'Amit Patel',
    role: 'Finance Head',
    email: 'amit.patel@email.com',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    linkedin: '#',
  },
];

const TeamMembers = () => {
  return (
    <section className="team-section">
      <div className="team-grid">
      <p className="team-title">People Loved Our Team
      </p>
        {members.map((member) => (
          <div className={`team-card${member.featured ? ' team-card-featured' : ''}`} key={member.name}>
            <img src={member.image} alt={member.name} className="team-img" />
            <div className="team-overlay">
              <div className="team-info">
                <div className="team-name">{member.name}</div>
                <div className="team-role">{member.role}</div>
                <div className="team-email">{member.email}</div>
                <a href={member.linkedin} className="team-linkedin" target="_blank" rel="noopener noreferrer">
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/></svg>
                </a>
              </div>
            </div>
          </div>
        ))}
         <button className="team-viewall">VIEW ALL MEMBERS</button>
      </div>
    </section>
  );
};

export default TeamMembers; 