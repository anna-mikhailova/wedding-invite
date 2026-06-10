import './App.css'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import EventDetails from './components/EventDetails'
import Timeline from './components/Timeline'
import Dresscode from './components/Dresscode'
import Wishes from './components/Wishes'
import RSVP from './components/RSVP'

function App() {
  return (
    <main>
      <Hero />
      <EventDetails />
      <Timeline />
      <section className="py-10 px-6 bg-white">
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div style={{ flex: 1, width: '100%' }}><Dresscode /></div>
            <div style={{ flex: 1, width: '100%' }}><Wishes /></div>
          </div>
        </div>
      </section>
      <RSVP />
      <Countdown />
    </main>
  )
}

export default App
