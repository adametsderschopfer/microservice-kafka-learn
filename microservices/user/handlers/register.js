export const handleUserRegister = (request, reply) => {
    // .....user register logic.....
    // The creation logic was skipped for the sake of studying message exchange between services
    // ...

    /*
    * Send event to create profile for successfully registered user
    * */

    // todo: send

    reply.send({
        message: "User successfully created!"
    })
}