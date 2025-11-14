import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/digimon')({
  server: {
    handlers: {
      GET: async () => {
        const data = await fetch(`https://digi-api.com/api/v1/digimon`).then((res) => res.json())

        return Response.json(data)
      },
    },
  },
})
