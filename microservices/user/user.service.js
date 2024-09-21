import Fastify from 'fastify'
import {handleUserRegister} from "./handlers/register.js";

const fastify = Fastify({
    logger: true,
})

fastify.post('/user/register', handleUserRegister)

fastify.listen({ port: 3000 }, (err, address) => {
    if (err) throw err
    console.log("User service: Start Up!")
})

