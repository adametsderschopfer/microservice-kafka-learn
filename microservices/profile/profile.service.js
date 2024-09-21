import Fastify from 'fastify'
import {handleProfileGet} from "./handlers/getProfile.js";

const fastify = Fastify({
    logger: true,
})

fastify.get('/profile/:id', handleProfileGet)

fastify.listen({ port: 3001, host: "0.0.0.0" }, (err, address) => {
    if (err) throw err
    console.log("Profile service: Start Up!")
})

