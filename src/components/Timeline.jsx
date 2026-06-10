import { motion } from 'framer-motion'

const TIMELINE = [
  { time: '15:00', label: 'Фуршет' },
  { time: '15:30', label: 'Церемония' },
  { time: '17:00', label: 'Начало банкета' },
  { time: '22:00', label: 'Окончание вечера' },
]

const label = {
  fontFamily: "var(--font-serif)",
  fontSize: '0.78rem',
  letterSpacing: '0.38em',
  textTransform: 'uppercase',
  color: 'var(--color-primary)',
}

export default function Timeline() {
  return (
    <section className="py-10 px-6 bg-white">
      <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative' }}>
        <motion.img
          src={`${import.meta.env.BASE_URL}butterfly.png`}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, x: 20, rotateY: 180 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 180 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'absolute',
            top: '3rem',
            right: '1rem',
            width: 100,
            height: 'auto',
            pointerEvents: 'none',
          }}
        />
        <motion.img
          src={`${import.meta.env.BASE_URL}flower2.png`}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, x: -20, rotateY: 180 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 180 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'absolute',
            bottom: '-3rem',
            left: '1rem',
            width: 100,
            height: 'auto',
            pointerEvents: 'none',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p style={{ ...label, textAlign: 'center', marginBottom: '3rem' }}>
            Программа вечера
          </p>

          <div style={{ position: 'relative', maxWidth: 520, margin: '0 auto' }}>
            {TIMELINE.map((item, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{
                    display: 'flex',
                    justifyContent: isLeft ? 'flex-start' : 'flex-end',
                    marginBottom: '2.5rem',
                    position: 'relative',
                  }}
                >
                  {/* Arrow */}
                  {i < TIMELINE.length - 1 && <img
                    src={`${import.meta.env.BASE_URL}arrow.png`}
                    alt=""
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      ...(isLeft
                        ? { left: 'calc(50% + 1.5rem - 30px)' }
                        : { right: 'calc(50% + 1.5rem - 30px)' }
                      ),
                      top: 'calc(50% + 40px)',
                      transform: isLeft
                        ? 'translateY(-50%) rotate(90deg)'
                        : 'translateY(-50%) rotate(90deg) scaleY(-1)',
                      width: 40,
                      height: 'auto',
                      pointerEvents: 'none',
                    }}
                  />}

                  {/* Content */}
                  <div style={{
                    width: '48%',
                    textAlign: isLeft ? 'right' : 'left',
                    paddingRight: isLeft ? '2rem' : 0,
                    paddingLeft: isLeft ? 0 : '2rem',
                  }}>
                    <div style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: '1.4rem',
                      fontWeight: 400,
                      color: 'var(--color-primary)',
                      lineHeight: 1.1,
                      marginBottom: '0.2rem',
                    }}>
                      {item.time}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 300,
                      fontSize: '0.72rem',
                      letterSpacing: '0.12em',
                      color: 'var(--color-primary)',
                      opacity: 0.7,
                    }}>
                      {item.label}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
