import React, { useEffect, useState } from 'react';

export default function SuperScaleGenZ() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const principles = [
    { icon: '🎯', title: 'No BS, Just Systems', text: "We don't chase trends or hype. We build sustainable systems that actually work." },
    { icon: '🌟', title: 'Independent Vibes', text: "Each brand has its own identity, team, and mission. We're the backbone, not the boss." },
    { icon: '⚡', title: 'Culture First', text: 'We build brands that resonate with real people, not just market research reports.' },
    { icon: '🔥', title: 'Scale Smart', text: 'Growth is cool, but not at the cost of what makes a brand special.' },
    { icon: '💡', title: 'Solve Real Problems', text: 'We only build stuff people actually need. No vanity projects.' },
    { icon: '🎨', title: 'Stay Creative', text: "Cookie-cutter is boring. Every brand we build has its own flavor." }
  ];

  const ventures = [
    {
      name: 'Freshscribe',
      tagline: '🥬 Fresh. Reliable. Subscription-first.',
      description: 'Your daily dose of freshness, delivered. A subscription-based produce brand that brings farm-fresh fruits and vegetables straight to your door. No middlemen, no markup, just quality produce and a system that works.',
      logo: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\'%3E%3Ccircle cx=\'100\' cy=\'100\' r=\'80\' fill=\'%2385C341\'/%3E%3Cpath d=\'M100 40 L120 90 L100 80 L80 90 Z\' fill=\'white\'/%3E%3Ccircle cx=\'120\' cy=\'120\' r=\'35\' fill=\'%23FF8C42\'/%3E%3C/svg%3E'
    },
    {
      name: 'Chills & Co.',
      tagline: '😎 Workwear that gets it.',
      description: "Office vibes, Gen-Z energy. We make T-shirts and apparel for the 9-to-5 crew who doesn't take themselves too seriously. Think: corporate memes, work culture jokes, and fits that transition from desk to happy hour.",
      logo: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\'%3E%3Ccircle cx=\'100\' cy=\'100\' r=\'90\' fill=\'none\' stroke=\'white\' stroke-width=\'3\'/%3E%3Cpath d=\'M70 90 L100 120 L130 90\' fill=\'none\' stroke=\'white\' stroke-width=\'4\'/%3E%3Ctext x=\'100\' y=\'65\' font-family=\'Arial\' font-size=\'24\' font-weight=\'bold\' text-anchor=\'middle\' fill=\'white\'%3ECHILLS%3C/text%3E%3C/svg%3E'
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@400;500;700&family=Righteous&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --electric-blue: #00D9FF;
          --hot-pink: #FF006E;
          --laser-yellow: #FFBE0B;
          --neon-green: #8BF500;
          --purple-haze: #8338EC;
          --sunset-orange: #FB5607;
          --bg-dark: #0A0E27;
        }

        body {
          font-family: 'DM Sans', sans-serif;
          background: var(--bg-dark);
          color: white;
          overflow-x: hidden;
          cursor: none;
        }

        /* CUSTOM CURSOR */
        .custom-cursor {
          width: 20px;
          height: 20px;
          border: 2px solid var(--electric-blue);
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
          transition: all 0.1s ease;
        }

        .cursor-follower {
          width: 40px;
          height: 40px;
          border: 1px solid var(--hot-pink);
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 9998;
          opacity: 0.5;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* ANIMATED BACKGROUND */
        .gradient-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background: linear-gradient(135deg, 
            var(--bg-dark) 0%, 
            #1a1535 25%,
            #2a1f4a 50%,
            #1a1535 75%,
            var(--bg-dark) 100%);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* FLOATING SHAPES */
        .floating-shapes {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .shape {
          position: absolute;
          opacity: 0.15;
          filter: blur(80px);
        }

        .shape-1 {
          width: 400px;
          height: 400px;
          background: var(--electric-blue);
          border-radius: 50%;
          top: 10%;
          left: 5%;
          animation: float1 20s ease-in-out infinite;
        }

        .shape-2 {
          width: 300px;
          height: 300px;
          background: var(--hot-pink);
          border-radius: 50%;
          top: 60%;
          right: 10%;
          animation: float2 18s ease-in-out infinite;
        }

        .shape-3 {
          width: 350px;
          height: 350px;
          background: var(--purple-haze);
          border-radius: 50%;
          bottom: 10%;
          left: 50%;
          animation: float3 22s ease-in-out infinite;
        }

        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(50px, -50px) rotate(120deg); }
          66% { transform: translate(-30px, 30px) rotate(240deg); }
        }

        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-40px, 40px) rotate(-120deg); }
          66% { transform: translate(40px, -20px) rotate(-240deg); }
        }

        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }

        /* HERO */
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 2rem 5%;
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          background: linear-gradient(135deg, var(--hot-pink), var(--purple-haze));
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 2rem;
          animation: popIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          box-shadow: 0 10px 40px rgba(255, 0, 110, 0.3);
        }

        @keyframes popIn {
          0% { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .hero-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(3rem, 10vw, 7rem);
          font-weight: 800;
          line-height: 1;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, 
            var(--electric-blue) 0%, 
            var(--hot-pink) 25%,
            var(--laser-yellow) 50%,
            var(--neon-green) 75%,
            var(--purple-haze) 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: textShine 3s linear infinite, titleDrop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes textShine {
          to { background-position: 200% center; }
        }

        @keyframes titleDrop {
          0% { transform: translateY(-50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        .hero-subtitle {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.5rem, 4vw, 3rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
          animation: titleDrop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s backwards;
          text-shadow: 0 0 20px rgba(0, 217, 255, 0.5);
        }

        .hero-description {
          font-size: clamp(1rem, 2vw, 1.25rem);
          max-width: 700px;
          margin: 0 auto 3rem;
          opacity: 0.9;
          animation: fadeInUp 0.8s ease 0.4s backwards;
        }

        @keyframes fadeInUp {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 0.9; }
        }

        .hero-cta {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
          animation: fadeInUp 0.8s ease 0.6s backwards;
        }

        .btn {
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.125rem;
          border: none;
          cursor: none;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--hot-pink), var(--purple-haze));
          color: white;
          box-shadow: 0 10px 40px rgba(255, 0, 110, 0.4);
        }

        .btn-primary:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 15px 50px rgba(255, 0, 110, 0.6);
        }

        .btn-secondary {
          background: transparent;
          color: var(--electric-blue);
          border: 2px solid var(--electric-blue);
          box-shadow: 0 0 20px rgba(0, 217, 255, 0.3);
        }

        .btn-secondary:hover {
          background: var(--electric-blue);
          color: var(--bg-dark);
          transform: translateY(-3px) scale(1.05);
        }

        /* SECTIONS */
        section {
          padding: 8rem 5%;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-badge {
          display: inline-block;
          background: rgba(0, 217, 255, 0.1);
          border: 1px solid var(--electric-blue);
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
          color: var(--electric-blue);
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--electric-blue), var(--hot-pink));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-description {
          font-size: clamp(1rem, 2vw, 1.25rem);
          max-width: 700px;
          margin: 0 auto;
          opacity: 0.8;
        }

        /* PRINCIPLES */
        .principles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .principle-card {
          background: linear-gradient(135deg, rgba(26, 31, 58, 0.8), rgba(26, 31, 58, 0.4));
          border: 1px solid rgba(0, 217, 255, 0.2);
          padding: 3rem 2rem;
          border-radius: 30px;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(50px) scale(0.9);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          backdrop-filter: blur(10px);
        }

        .principle-card.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .principle-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: var(--electric-blue);
          box-shadow: 0 20px 60px rgba(0, 217, 255, 0.3);
        }

        .principle-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          filter: drop-shadow(0 0 20px currentColor);
        }

        .principle-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--laser-yellow), var(--sunset-orange));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .principle-text {
          opacity: 0.8;
          line-height: 1.6;
        }

        /* VENTURES */
        .ventures-grid {
          display: grid;
          gap: 4rem;
        }

        .venture-card {
          display: grid;
          grid-template-columns: 250px 1fr;
          gap: 3rem;
          background: linear-gradient(135deg, rgba(26, 31, 58, 0.8), rgba(26, 31, 58, 0.4));
          border: 1px solid rgba(255, 0, 110, 0.2);
          padding: 3rem;
          border-radius: 40px;
          align-items: center;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          backdrop-filter: blur(10px);
        }

        .venture-card.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .venture-card:hover {
          transform: translateY(-10px);
          border-color: var(--hot-pink);
          box-shadow: 0 30px 80px rgba(255, 0, 110, 0.3);
        }

        .venture-logo {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(255, 0, 110, 0.1));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          border: 2px solid rgba(255, 255, 255, 0.1);
          animation: rotateLogo 10s linear infinite;
        }

        @keyframes rotateLogo {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .venture-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          animation: rotateLogoReverse 10s linear infinite;
        }

        @keyframes rotateLogoReverse {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }

        .venture-content h3 {
          font-family: 'Righteous', cursive;
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          margin-bottom: 0.5rem;
          color: var(--laser-yellow);
          text-shadow: 0 0 20px rgba(255, 190, 11, 0.5);
        }

        .venture-tagline {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--hot-pink);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .venture-description {
          opacity: 0.9;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .venture-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--electric-blue);
          text-decoration: none;
          font-weight: 700;
          font-size: 1.125rem;
          transition: all 0.3s ease;
          cursor: none;
        }

        .venture-link:hover {
          gap: 1rem;
          color: var(--laser-yellow);
          text-shadow: 0 0 20px currentColor;
        }

        /* ARCHITECTURE */
        .architecture-visual {
          max-width: 800px;
          margin: 4rem auto;
          padding: 4rem;
          background: linear-gradient(135deg, rgba(131, 56, 236, 0.1), rgba(255, 0, 110, 0.1));
          border: 2px solid rgba(131, 56, 236, 0.3);
          border-radius: 40px;
          position: relative;
          backdrop-filter: blur(10px);
        }

        .arch-level {
          text-align: center;
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          font-weight: 700;
          margin: 2rem 0;
        }

        .arch-level:nth-child(1) { color: var(--laser-yellow); }
        .arch-level:nth-child(3) { color: var(--electric-blue); }
        .arch-level:nth-child(5) { color: var(--neon-green); }

        .arch-arrow {
          text-align: center;
          font-size: 2rem;
          color: var(--hot-pink);
          animation: arrowBounce 2s ease infinite;
        }

        @keyframes arrowBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }

        /* FUTURE */
        .future-content {
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
          padding: 4rem 2rem;
          background: linear-gradient(135deg, rgba(139, 245, 0, 0.1), rgba(255, 190, 11, 0.1));
          border: 2px solid var(--neon-green);
          border-radius: 40px;
        }

        .future-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--neon-green), var(--laser-yellow));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .future-subtitle {
          font-size: clamp(1.25rem, 3vw, 1.75rem);
          opacity: 0.9;
        }

        /* FOOTER */
        footer {
          padding: 6rem 5% 3rem;
          border-top: 1px solid rgba(0, 217, 255, 0.2);
          text-align: center;
        }

        .footer-logo {
          font-family: 'Righteous', cursive;
          font-size: 2rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--electric-blue), var(--hot-pink), var(--laser-yellow));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-tagline {
          font-size: 1rem;
          opacity: 0.7;
          margin-bottom: 0.5rem;
        }

        .footer-copyright {
          font-size: 0.875rem;
          opacity: 0.5;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .venture-card {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .venture-logo {
            margin: 0 auto;
          }

          .principles-grid {
            grid-template-columns: 1fr;
          }

          body {
            cursor: auto;
          }

          .custom-cursor, .cursor-follower {
            display: none;
          }
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* CUSTOM CURSOR */}
      <div 
        className="custom-cursor"
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />
      <div 
        className="cursor-follower"
        style={{ 
          left: mousePosition.x - 10, 
          top: mousePosition.y - 10 
        }}
      />

      {/* ANIMATED BACKGROUND */}
      <div className="gradient-bg" />
      <div className="floating-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-badge">🔥 PARENT BRAND STUDIO</div>
        
        <h1 className="hero-title">SuperScale Co.</h1>
        
        <h2 className="hero-subtitle">
          Building brands that hit different 🚀
        </h2>
        
        <p className="hero-description">
          A next-gen parent company creating independent businesses that solve real problems, 
          vibe with culture, and scale without losing their soul.
        </p>
        
        <div className="hero-cta">
          <a href="#ventures" className="btn btn-primary">
            <span style={{ position: 'relative', zIndex: 1 }}>Explore Our Ventures ✨</span>
          </a>
          <a href="#principles" className="btn btn-secondary">
            <span style={{ position: 'relative', zIndex: 1 }}>Our Philosophy 💭</span>
          </a>
        </div>
      </section>

      {/* PRINCIPLES SECTION */}
      <section id="principles">
        <div className="section-header animate-on-scroll">
          <div className="section-badge">💎 OUR DNA</div>
          <h2 className="section-title">What Makes Us Different</h2>
          <p className="section-description">
            We're not your typical holding company. Here's what drives us.
          </p>
        </div>
        
        <div className="principles-grid">
          {principles.map((principle, index) => (
            <div key={index} className="principle-card animate-on-scroll" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="principle-icon">{principle.icon}</div>
              <h3 className="principle-title">{principle.title}</h3>
              <p className="principle-text">{principle.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VENTURES SECTION */}
      <section id="ventures">
        <div className="section-header animate-on-scroll">
          <div className="section-badge">🚀 OUR BRANDS</div>
          <h2 className="section-title">The SuperScale Universe</h2>
          <p className="section-description">
            Meet the independent brands we've built from the ground up.
          </p>
        </div>
        
        <div className="ventures-grid">
          {ventures.map((venture, index) => (
            <div key={index} className="venture-card animate-on-scroll" style={{ transitionDelay: `${index * 0.2}s` }}>
              <div className="venture-logo">
                <img src={venture.logo} alt={venture.name} />
              </div>
              
              <div className="venture-content">
                <h3>{venture.name}</h3>
                <p className="venture-tagline">{venture.tagline}</p>
                <p className="venture-description">{venture.description}</p>
                <a href="#" className="venture-link">
                  {venture.name === 'Freshscribe' ? 'Check out Freshscribe' : 'Shop Chills & Co.'}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE SECTION */}
      <section id="architecture">
        <div className="section-header animate-on-scroll">
          <div className="section-badge">🏗️ THE FRAMEWORK</div>
          <h2 className="section-title">How It All Works</h2>
          <p className="section-description">Simple structure, powerful results.</p>
        </div>
        
        <div className="architecture-visual">
          <div className="arch-level">SuperScale Co.</div>
          <div className="arch-arrow">↓</div>
          <div className="arch-level">Independent Brands</div>
          <div className="arch-arrow">↓</div>
          <div className="arch-level">Shared Backbone</div>
          
          <p style={{ marginTop: '3rem', textAlign: 'center', opacity: 0.8, lineHeight: 1.7 }}>
            Each venture runs independently with its own team, identity, and vision. 
            SuperScale provides the infrastructure, resources, and strategic support. 
            Think of us as the power-up that lets brands focus on what they do best.
          </p>
        </div>
      </section>

      {/* FUTURE SECTION */}
      <section id="future">
        <div className="future-content animate-on-scroll">
          <h2 className="future-title">More Coming Soon...</h2>
          <p className="future-subtitle">
            We're always building. More brands, same philosophy. 
            The SuperScale universe is just getting started. 🌌
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">SuperScale Co.</div>
        <p className="footer-tagline">Building brands that actually matter ✨</p>
        <p className="footer-copyright">© 2026 SuperScale Co. Made with 💜 and lots of ☕</p>
      </footer>
    </>
  );
}