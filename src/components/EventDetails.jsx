import { motion } from 'framer-motion'

const WEDDING = { year: 2026, month: 6, day: 19 }

const MONTH_NAMES = [
  'Январь','Февраль','Март','Апрель','Май','Июнь',
  'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь',
]

const DAY_LABELS = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс']

function buildCalendar(year, month) {
  const firstDow = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const offset = (firstDow + 6) % 7
  const cells = new Array(offset).fill(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)
  return cells
}

const labelStyle = {
  fontFamily: "var(--font-serif)",
  fontSize: '0.78rem',
  letterSpacing: '0.38em',
  textTransform: 'uppercase',
  color: 'var(--color-primary)',
}

export default function EventDetails() {
  const cells = buildCalendar(WEDDING.year, WEDDING.month)

  return (
    <section className="py-10 px-6 bg-white" id="details">
      <div style={{ maxWidth: 860, margin: '0 auto' }}>

        {/* Bird decoration */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '1.1rem' }}
        >
          <img
            src={`${import.meta.env.BASE_URL}bird.png`}
            alt=""
            aria-hidden="true"
            className="countdown-bird"
            style={{ display: 'block', width: 100, height: 'auto', pointerEvents: 'none' }}
          />
        </motion.div>

        {/* Invitation text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: '0.78rem',
            letterSpacing: '0.2em',
            lineHeight: 1.75,
            color: 'var(--color-primary)',
            maxWidth: 560,
            margin: '0 auto',
          }}>
            Дорогие гости!{' '}
            <br />
            С радостью приглашаем вас разделить с нами один из самых важных дней в нашей жизни&nbsp;— день нашей свадьбы.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Calendar */}
          <motion.div
            style={{ flex: 1, width: '100%', maxWidth: 380 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ position: 'relative', padding: '1.8rem 1.2rem 1.5rem' }}>
              <img
                src={`${import.meta.env.BASE_URL}calendar-frame.png`}
                alt=""
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none',
                  objectFit: 'fill',
                }}
              />

              <p
                className="text-center"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  fontSize: '0.72rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'var(--color-primary)',
                  opacity: 1,
                  marginBottom: '1.5rem',
                  position: 'relative',
                }}
              >
                {MONTH_NAMES[WEDDING.month]} <span style={{ fontSize: '1rem', fontWeight: 300 }}>{WEDDING.year}</span>
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 0, position: 'relative' }}>
                {DAY_LABELS.map(label => (
                  <div
                    key={label}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 400,
                      fontSize: '0.62rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--color-primary)',
                      opacity: 0.4,
                      textAlign: 'center',
                      paddingBottom: '0.6rem',
                    }}
                  >
                    {label}
                  </div>
                ))}

                {cells.map((day, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 40,
                    }}
                  >
                    {day !== null && (
                      <span
                        style={{
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 36,
                          height: 36,
                        }}
                      >
                        {day === WEDDING.day && (
                          <img
                            src={`${import.meta.env.BASE_URL}circle.png`}
                            alt=""
                            aria-hidden="true"
                            style={{
                              position: 'absolute',
                              inset: 0,
                              width: '100%',
                              height: '100%',
                              pointerEvents: 'none',
                            }}
                          />
                        )}
                        <span
                          style={{
                            position: 'relative',
                            zIndex: 1,
                            fontFamily: "var(--font-sans)",
                            fontWeight: day === WEDDING.day ? 600 : 300,
                            fontSize: '0.82rem',
                            color: 'var(--color-primary)',
                          }}
                        >
                          {day}
                        </span>
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            className="text-center"
            style={{ flex: 1, width: '100%' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p style={labelStyle}>Место</p>
            <img
              src={`${import.meta.env.BASE_URL}location.png`}
              alt=""
              aria-hidden="true"
              style={{ width: 200, height: 'auto', margin: '0.75rem auto 0', display: 'block' }}
            />
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: '0.78rem',
                letterSpacing: '0.2em',
                color: 'var(--color-primary)',
                marginTop: '1.25rem',
                marginBottom: '0.4rem',
              }}
            >
              Ресторан Атлантис
            </p>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: '0.78rem',
                letterSpacing: '0.2em',
                color: 'var(--color-primary)',
                opacity: 0.6,
                marginBottom: '1.25rem',
              }}
            >
              Санкт-Петербург, пос. Солнечное, ул. Дачная, д. 1
            </p>
            <a
              href="https://yandex.ru/maps/?text=%D1%80%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD+%D0%90%D1%82%D0%BB%D0%B0%D0%BD%D1%82%D0%B8%D1%81+%D0%A1%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D0%BE%D0%B5+%D0%94%D0%B0%D1%87%D0%BD%D0%B0%D1%8F+1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-opacity duration-300 hover:opacity-70"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '9999px',
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                fontSize: '0.68rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '0.65rem 1.8rem',
              }}
            >
              Показать на карте
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
