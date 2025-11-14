import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute, Link, Router } from '@tanstack/react-router'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const { data: digimon } = useSuspenseQuery({
    queryKey: ['digimon_main'],
    queryFn: () => fetch('/api/digimon/main').then((r) => r.json()),
  })
  const { data: digivolution } = useSuspenseQuery({
    queryKey: ['digimon_digivolution'],
    queryFn: () => fetch(`/api/digimon/${digimon.directEvolution}`).then((r) => r.json()),
  })

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 px-6 text-center overflow-hidde">
        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-6">
            <img src="/images/d-terminal.png" alt="D-Terminal" className="w-24 h-24 md:w-32 md:h-32" />
            <h1 className="text-6xl md:text-7xl font-myPixel font-black text-white tracking-[-0.08em]">
              <span className="bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent font-[DigiPixel]">
                Digimon
              </span>{' '}
              <span className="text-text">TERMINAL</span>
            </h1>
          </div>
          <p className="text-2xl text-text mb-10">Compendium of digital monsters</p>
        </div>
      </section>

      <section>
        <div className="flex flex-1 gap-10 items-center justify-center">
          <Link to="/digimon/list">
            <Card className="w-full max-w-sm items-center">
              <CardContent>
                <img src={digimon.imageURL ?? ''} alt={digimon.name} className="w-74 h-74" />
              </CardContent>
              <CardFooter>
                <h1 className="font-[DigiPixel] text-text text-2xl">Digimon List</h1>
              </CardFooter>
            </Card>
          </Link>
          <Card className="w-full max-w-sm items-center">
            <CardContent>
              <img src={digivolution.imageURL ?? ''} alt={digivolution.name} className="w-74 h-74" />
            </CardContent>
            <CardFooter>
              <h1 className="font-[DigiPixel] text-text text-2xl">Levels</h1>
            </CardFooter>
          </Card>
          <Card className="w-full max-w-sm items-center">
            <CardContent>
              <img src="/images/attributes.png" alt="D-Terminal" className="w-80 h-74" />
            </CardContent>
            <CardFooter>
              <h1 className="font-[DigiPixel] text-text text-2xl">Attributes</h1>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  )
}
