import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 px-6 text-center overflow-hidde">
        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-6">
            <img
              src="/d-terminal.png"
              alt="D-Terminal"
              className="w-24 h-24 md:w-32 md:h-32"
            />
            <h1 className="text-6xl md:text-7xl font-myPixel font-black text-white tracking-[-0.08em]">
              <span className="bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent font-[DigiPixel]">
                Digimon
              </span>{' '}
              <span className="text-text">TERMINAL</span>
            </h1>
          </div>
          <p className="text-2xl text-text mb-10">
            Digital compendium of digital monsters
          </p>
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://tanstack.com/start"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-cyan-500/50"
            >
              Digivolve
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
