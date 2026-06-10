import { motion } from 'framer-motion'

const BASE = import.meta.env.BASE_URL

export default function Hero() {
  return (
    <section className="hero-section relative bg-white overflow-hidden" style={{ display: 'flex', flexDirection: 'column' }}>

      {/* Main scrollable content */}
      <div className="hero-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '2rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>

        {/* Main photo */}
        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.1 }}
          style={{
            position: 'relative',
            width: '52vw',
            maxWidth: '300px',
            aspectRatio: '154.76 / 180.7',
            flexShrink: 0,
            marginBottom: '3.5rem',
          }}
        >
          <img
            src={`${BASE}hero.jpg`}
            alt="Аня и Саша"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 380 422"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '130%',
              height: 'auto',
              pointerEvents: 'none',
            }}
          >
            <path
              d="M376.9 397.3c1,0 1.9,0.8 1.9,1.8 0,1 -0.9,1.8 -1.9,1.8l-21.5 0 0 20.4c0,1 -0.8,1.8 -1.8,1.8 -1,0 -1.8,-0.8 -1.8,-1.8l0 -20.4 -324.9 0 0 20.4c0,1 -0.8,1.8 -1.8,1.8 -1,0 -1.8,-0.8 -1.8,-1.8l0 -20.4 -21.5 0c-1,0 -1.8,-0.8 -1.8,-1.8 0,-1 0.8,-1.8 1.8,-1.8l21.5 0 0 -371.5 -21.5 0c-1,0 -1.8,-0.8 -1.8,-1.8 0,-1 0.8,-1.8 1.8,-1.8l21.5 0 0 -20.4c0,-1 0.8,-1.8 1.8,-1.8 1,0 1.8,0.8 1.8,1.8l0 20.4 324.9 0 0 -20.4c0,-1 0.8,-1.8 1.8,-1.8 1,0 1.8,0.8 1.8,1.8l0 20.4 21.5 0c1,0 1.9,0.8 1.9,1.8 0,1 -0.9,1.8 -1.9,1.8l-21.5 0 0 371.5 21.5 0zm-350 0l13.8 0 0 -13.3 -13.8 0 0 13.3zm17.4 0l290.1 0 0 -13.3 -290.1 0 0 13.3zm293.8 0l13.7 0 0 -13.3 -13.7 0 0 13.3zm13.7 -371.5l-13.7 0 0 13.4 13.7 0 0 -13.4zm-17.4 0l-290.1 0 0 13.4 290.1 0 0 -13.4zm-293.7 0l-13.8 0 0 13.4 13.8 0 0 -13.4zm297.4 17l0 337.6 13.7 0 0 -337.6 -13.7 0zm-3.7 168.8l0 -168.8 -290.1 0 0 337.6 290.1 0 0 -168.8zm-293.7 0l0 -168.8 -13.8 0 0 337.6 13.8 0 0 -168.8z"
              fillRule="nonzero"
              fill="var(--color-primary)"
            />
          </svg>
        </motion.div>

        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.22 }}
          style={{
            fontFamily: "var(--font-script)",
            fontWeight: 400,
            fontSize: 'clamp(2.8rem, 9vw, 5rem)',
            color: 'var(--color-primary)',
            lineHeight: 1,
            textAlign: 'center',
            marginBottom: '1rem',
          }}
        >
          Аня и Саша
        </motion.h1>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.36 }}
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: '0.65rem',
            letterSpacing: '0.42em',
            textTransform: 'uppercase',
            color: 'var(--color-primary)',
            opacity: 0.65,
          }}
        >
          <span style={{ fontSize: '1rem', fontWeight:300 }}>19</span> июля <span style={{ fontSize: '1rem', fontWeight:300}}>2026</span>
        </motion.p>
      </div>

      {/* Bottom decorative images */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        style={{ position: 'relative', flexShrink: 0 }}
      >
        {/* Bottom-left */}
        <div className="hero-deco" style={{ position: 'absolute', bottom: 0, left: 0, transform: 'translateX(-50%)' }}>
          <img
            src={`${BASE}hero-bottom.png`}
            alt=""
            aria-hidden="true"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Bottom-right */}
        <div className="hero-deco" style={{ position: 'absolute', bottom: 0, right: 0, transform: 'translateX(50%)' }}>
          <img
            src={`${BASE}hero-bottom.png`}
            alt=""
            aria-hidden="true"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </motion.div>

    </section>
  )
}
