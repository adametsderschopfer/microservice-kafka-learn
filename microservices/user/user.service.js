import Fastify from 'fastify'
import kafka from "@fastify/kafka"
import {KAFKA_USER_REGISTER_TOPIC} from "./constants.js";

const fastify = Fastify({
    logger: true,
})

fastify.register(kafka, {
    producer: {
        'metadata.broker.list': 'kafka:9092',
        'fetch.wait.max.ms': 10,
        'fetch.error.backoff.ms': 50,
        'client.id': 'user-service',
        'dr_cb': true
    },
});

fastify.post('/user/register', async (request, reply) => {
    // .....user register logic.....
    // The creation logic was skipped for the sake of studying message exchange between services
    // ...

    /*
    * Send event to create profile for successfully registered user
    * */
    fastify.kafka.push({
        topic: KAFKA_USER_REGISTER_TOPIC,
        payload: JSON.stringify({
            id: Date.now(),
            email: "user@example.com",
            username: "imbatman"
        }),
        key: 'user_register_key'
    })

    reply.send({
        message: "User successfully created!"
    })
})

fastify.listen({ port: 3000, host: "0.0.0.0" }, (err, address) => {
    if (err) throw err
    console.log("User service: Start Up!")
})

