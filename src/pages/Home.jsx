import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Ticker from '../components/Ticker'
import WhoWeAre from '../components/WhoWeAre'
import Stats from '../components/Stats'
import Process from '../components/Process'
import CtaBand from '../components/CtaBand'
import Footer from '../components/Footer'
import useReveal from '../hooks/useReveal'

export default function Home() {
  useReveal()

  return (
    <>
      <Hero>
        <Navbar />
      </Hero>
      <Ticker />
      <main className="wrap">
        <WhoWeAre />
        <Stats />
        <Process />
        <CtaBand />
      </main>
      <Footer />
    </>
  )
}
