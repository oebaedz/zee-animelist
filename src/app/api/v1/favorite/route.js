import prisma from "@/libs/prisma"

export async function POST (request) {
    const {anime_mal_id, user_email} = await request.json()
    const data = {anime_mal_id, user_email}

    const createFavorite = await prisma.favorite.create({ data })

    if (!createFavorite) {
        return Response.json({ status: 500, isAdded: false })
    } else {
        return Response.json({ status: 200, isAdded: true })
    }
}