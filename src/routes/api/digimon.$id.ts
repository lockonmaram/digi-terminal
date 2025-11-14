import { createFileRoute } from '@tanstack/react-router'

type DigimonDetail = {
  id: number
  name: string
  imageURL?: string
  directEvolution: number
}

export const Route = createFileRoute('/api/digimon/$id')({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const { id: digimonID } = params
        const data = await fetch(`https://digi-api.com/api/v1/digimon/${digimonID}`).then((res) => res.json())

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
