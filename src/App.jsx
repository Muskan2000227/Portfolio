import Experience from './components/Experience'
import Header from './components/Header'
import Projects from './components/Projects'
import Skill from './components/Skill'
import Achievements from './components/Acheivements'
import Education from './components/Education'
import Footer from './components/Footer'
import Connect from './components/Connect'
import Loader from './components/Loader'
import FluidCursor from './components/FluidCursor'

function App() {
  return (
    <Loader>
      <FluidCursor />
      <div className="w-full min-h-screen flex justify-center relative select-none ">
        <div className="h-full w-full max-w-[55rem] p-5 md:p-10 z-10 bg-white flex flex-col">
          {/* Header + Connect */}
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
            <Header />
            <div className="mt-4 md:mt-0">
              <Connect />
            </div>
          </div>

          {/* Divider */}
          <div className="bg-gray-300 w-full h-[1px] my-5"></div>

          {/* Main sections */}
          <Experience />
          <Projects />
          <Skill />
          <Education />
          <Achievements />
          <Footer />
        </div>
      </div>
    </Loader>
  )
}

export default App
