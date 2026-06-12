import { motion } from 'framer-motion'

const BASE = import.meta.env.BASE_URL

const sectionLabel = {
  fontFamily: "var(--font-serif)",
  fontSize: '0.78rem',
  letterSpacing: '0.38em',
  textTransform: 'uppercase',
  color: 'var(--color-primary)',
}

const bodyText = {
  fontFamily: "var(--font-serif)",
  fontSize: '0.78rem',
  letterSpacing: '0.2em',
  lineHeight: 1.75,
  color: 'var(--color-primary)',
  opacity: 0.8,
}

export default function Wishes() {
  return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: 360, margin: '0 auto', aspectRatio: '2400 / 2273' }}
        >
          <img
            src={`${BASE}handdrawn-frame.png`}
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', padding: '0.5rem 1rem', textAlign: 'center' }}>
            <p style={{ ...sectionLabel }}>Пожелание</p>
            <img
              src={`${BASE}present.png`}
              alt=""
              aria-hidden="true"
              style={{ width: 140, height: 'auto', margin: '0 auto 0', display: 'block', pointerEvents: 'none' }}
            />
            <p style={bodyText}>
              Мы будем рады деньгам в качестве подарка — это поможет нам осуществить наши мечты
            </p>
          </div>
    </motion.div>
  )
}
