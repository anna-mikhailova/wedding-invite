import { motion } from 'framer-motion'

const BASE = import.meta.env.BASE_URL

const PASTEL_COLORS = [
  { hex: '#F2C4CE', name: 'пудровый' },
  { hex: '#C8DFC8', name: 'мятный' },
  { hex: '#C4D4F0', name: 'лавандовый' },
  { hex: '#F5E6C8', name: 'шампань' },
  { hex: '#E8C8D8', name: 'сиреневый' },
  { hex: '#D4C4E8', name: 'лиловый' },
]

const sectionLabel = {
  fontFamily: "var(--font-serif)",
  fontSize: '0.78rem',
  letterSpacing: '0.38em',
  textTransform: 'uppercase',
  color: 'var(--color-primary)',
}

const cardTitle = {
  fontFamily: "var(--font-serif)",
  fontSize: '1rem',
  letterSpacing: '0.28em',
  textTransform: 'uppercase',
  color: 'var(--color-primary)',
  marginBottom: '0.6rem',
}

const cardBody = {
  fontFamily: "var(--font-sans)",
  fontWeight: 300,
  fontSize: '0.78rem',
  lineHeight: 1.65,
  color: 'var(--color-primary)',
  opacity: 0.7,
}

export default function Dresscode() {
  return (
    <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p style={{ ...sectionLabel, textAlign: 'center', marginBottom: '1.25rem' }}>
            Дресс-код
          </p>

          <motion.img
            src={`${BASE}dress-code.png`}
            alt=""
            aria-hidden="true"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              display: 'block',
              width: 120,
              height: 'auto',
              margin: '0 auto 2rem',
              pointerEvents: 'none',
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ ...cardBody, textAlign: 'center', maxWidth: 480, margin: '0 auto', letterSpacing: '0.2em' }}
          >
            Мужчины — в костюме или смокинге, галстук или бабочка приветствуются. Девушки — в вечернем или коктейльном платье, любой цвет кроме белого и красного.
          </motion.p>
    </motion.div>
  )
}
