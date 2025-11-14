import { createFileRoute } from '@tanstack/react-router'

// const DigimonIDs = [
//   1, 16, 81, 83, 85, 98, 101, 117, 271, 341, 349, 356, 399, 465, 477, 493, 516, 535, 547, 593, 826, 867, 983,
// ]

type DigimonDetail = {
  id: number
  name: string
  imageURL?: string
  directEvolution: number
}

export const Route = createFileRoute('/api/digimon/main')({
  server: {
    handlers: {
      GET: async () => {
        const data = await fetch(`https://digi-api.com/api/v1/digimon/1`).then((res) => res.json())

        return Response.json({
          id: data.id,
          name: data.name,
          imageURL: data?.images?.[0]?.href,
          directEvolution: 34
        } as DigimonDetail)
      },
    },
  },
})
