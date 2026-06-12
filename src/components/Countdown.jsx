import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const WEDDING = { year: 2026, month: 6, day: 19, hour: 15 }

function useCountdown() {
  const target = new Date(WEDDING.year, WEDDING.month, WEDDING.day, WEDDING.hour, 0, 0)

  const calc = () => {
    const diff = target - Date.now()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0 }
    const totalMinutes = Math.floor(diff / 60000)
    const totalHours = Math.floor(totalMinutes / 60)
    return {
      days: Math.floor(totalHours / 24),
      hours: totalHours % 24,
      minutes: totalMinutes % 60,
    }
  }

  const [time, setTime] = useState(calc)
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 30000)
    return () => clearInterval(id)
  }, [])
  return time
}

const BASE = import.meta.env.BASE_URL

export default function Countdown() {
  const { days, hours, minutes } = useCountdown()

  return (
    <section className="py-10 px-6 bg-white relative overflow-hidden">
      <img
        src={`${BASE}trees.png`}
        alt=""
        aria-hidden="true"
        className="trees-left"
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          height: '95%',
          width: 'auto',
          pointerEvents: 'none',
        }}
      />
      <img
        src={`${BASE}trees.png`}
        alt=""
        aria-hidden="true"
        className="trees-right"
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          height: '95%',
          width: 'auto',
          pointerEvents: 'none',
        }}
      />
      <div style={{ maxWidth: 380, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-center"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: '0.8rem',
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              color: 'var(--color-primary)',
              marginBottom: '2.5rem',
            }}
          >
            Увидимся через:
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
            }}
          >
            {[
              { value: days, label: 'дней' },
              { value: hours, label: 'часов' },
              { value: minutes, label: 'минут' },
            ].map(({ value, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: '2.4rem',
                    fontWeight: 300,
                    lineHeight: 1,
                    color: 'var(--color-primary)',
                    marginBottom: '0.3rem',
                  }}
                >
                  {String(value).padStart(2, '0')}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    fontSize: '0.6rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'var(--color-primary)',
                    opacity: 0.55,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center sm:flex-row sm:items-end sm:justify-center" style={{ gap: '2rem', marginTop: '3rem' }}>
            <div
              style={{
                position: 'relative',
                width: '220px',
                height: '220px',
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '48%',
                  left: '51%',
                  transform: 'translate(-50%, -50%)',
                  width: '87%',
                  height: '83%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={`${BASE}end2.jpg`}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 30%',
                    transform: 'scale(1.3)',
                    transformOrigin: 'center 30%',
                  }}
                />
              </div>
              <img
                src={`${BASE}circle2.png`}
                alt=""
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '120%',
                  height: 'auto',
                  pointerEvents: 'none',
                }}
              />
            </div>

            <div style={{ textAlign: 'left', paddingBottom: '0.5rem' }}>
              <p
                style={{
                  fontFamily: "var(--font-script)",
                  fontSize: '1.6rem',
                  color: 'var(--color-primary)',
                  lineHeight: 1.3,
                }}
              >
                c любовью,
              </p>
              <p
                style={{
                  fontFamily: "var(--font-script)",
                  fontSize: '2rem',
                  color: 'var(--color-primary)',
                  lineHeight: 1.2,
                  whiteSpace: 'nowrap',
                }}
              >
                Аня и Саша
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
