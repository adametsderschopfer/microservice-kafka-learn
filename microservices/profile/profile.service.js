import Fastify from 'fastify'
import kafka from "@fastify/kafka"
import crypto from "node:crypto"
import {KAFKA_USER_REGISTER_TOPIC} from "./constants.js";

const fastify = Fastify({
    logger: true,
})

const groupId = crypto.randomBytes(20).toString('hex')
fastify.register(kafka, {
    consumer: {
        'metadata.broker.list': 'kafka:9092',
        'fetch.wait.max.ms': 10,
        'fetch.error.backoff.ms': 50,
        'topic.metadata.refresh.interval.ms': 1000,
        'group.id': groupId,
    },
}).after((err) => {
    if (err) throw err

    fastify.kafka
        .subscribe([KAFKA_USER_REGISTER_TOPIC])
        .on(KAFKA_USER_REGISTER_TOPIC, (msg, commit) => {
            console.log(msg.value.toString())
            commit()
        })

    fastify.kafka.consume()
})

fastify.listen({ port: 3001, host: "0.0.0.0" }, (err, address) => {
    if (err) throw err
    console.log("Profile service: Start Up!")
})

