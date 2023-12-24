import prisma from "@/libs/prisma"

export async function POST (request) {
    const {anime_mal_id, user_email, username, comment} = await request.json()
    const data = {anime_mal_id, user_email, username, comment}

    const createComment = await prisma.comment.create({ data })

    if (!createComment) {
        return Response.json({ status: 500, isAdded: false })
    } else {
        return Response.json({ status: 200, isAdded: true })
    }
}