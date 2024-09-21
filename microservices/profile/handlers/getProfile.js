export const handleProfileGet = (request, reply) => {
    reply.send({
        id: request.params.id,
        naming: {
            username: "BobbyCrazy",
            firstname: "Bobby",
            surname: "Singer"
        },
        createdAt: new Date(),
    })
}