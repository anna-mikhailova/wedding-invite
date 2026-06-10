import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase } from '../supabase'

const inputStyle = {
  display: 'block',
  width: '100%',
  border: '1px solid #dce7f0',
  padding: '0.7rem 0.9rem',
  fontFamily: "var(--font-sans)",
  fontWeight: 300,
  fontSize: '0.875rem',
  color: 'var(--color-primary)',
  backgroundColor: '#ffffff',
  outline: 'none',
  transition: 'border-color 0.2s',
}

const labelStyle = {
  display: 'block',
  fontFamily: "var(--font-sans)",
  fontWeight: 400,
  fontSize: '0.72rem',
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--color-primary)',
  marginBottom: '0.4rem',
}

export default function RSVP() {
  const [form, setForm] = useState({ name: '', attendance: '' })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    setError(null)

    const { error: supabaseError } = await supabase
      .from('rsvps')
      .insert({ name: form.name, attendance: form.attendance })

    if (supabaseError) {
      setError('Что-то пошло не так. Попробуй ещё раз.')
      setStatus('idle')
    } else {
      setStatus('success')
    }
  }

  return (
    <section
      className="py-10 px-6 bg-white"
      id="rsvp"
    >
      <div style={{ maxWidth: 440, margin: '0 auto' }}>
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
              fontSize: '0.78rem',
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              color: 'var(--color-primary)',
              marginBottom: '0.75rem',
            }}
          >
            Мы тебя ждём
          </p>

          <p
            className="text-center"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: '0.78rem',
              color: 'var(--color-primary)',
              opacity: 0.6,
              marginBottom: '2.5rem',
            }}
          >
            Пожалуйста, подтверди до 19 июня 2026
          </p>

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center py-14"
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 700,
                    fontSize: '2rem',
                    color: 'var(--color-primary)',
                    marginBottom: '0.75rem',
                  }}
                >
                  Спасибо!
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: '0.85rem', color: 'var(--color-primary)', opacity: 0.7 }}>
                  Мы ждём тебя на нашем празднике
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                exit={{ opacity: 0 }}
              >
                <div>
                  <label style={labelStyle}>Твое имя и фамилия*</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="Иван Иванов"
                    onFocus={e => { e.target.style.borderColor = 'var(--color-primary)' }}
                    onBlur={e => { e.target.style.borderColor = '#dce7f0' }}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Ты придёшь? *</label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.2rem' }}>
                    {[
                      { value: 'yes', label: 'Я буду' },
                      { value: 'no', label: 'Я не смогу прийти' },
                    ].map(opt => (
                      <label
                        key={opt.value}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.6rem',
                          cursor: 'pointer',
                          fontFamily: 'var(--font-sans)',
                          fontWeight: 300,
                          fontSize: '0.875rem',
                          color: 'var(--color-primary)',
                        }}
                      >
                        <input
                          type="radio"
                          name="attendance"
                          value={opt.value}
                          required
                          checked={form.attendance === opt.value}
                          onChange={handleChange}
                          style={{ accentColor: 'var(--color-primary)', width: '1rem', height: '1rem', cursor: 'pointer' }}
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </div>

                {error && (
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: '#c0392b', textAlign: 'center' }}>
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="transition-opacity duration-300 hover:opacity-70"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    color: '#ffffff',
                    fontFamily: "var(--font-sans)",
                    fontWeight: 400,
                    fontSize: '0.68rem',
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                    padding: '0.9rem 2rem',
                    border: 'none',
                    borderRadius: '9999px',
                    cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                    opacity: status === 'submitting' ? 0.65 : 1,
                    transition: 'opacity 0.2s',
                    marginTop: '0.25rem',
                  }}
                >
                  {status === 'submitting' ? 'Отправляем...' : 'Подтвердить'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
