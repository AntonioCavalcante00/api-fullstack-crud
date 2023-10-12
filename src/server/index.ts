import Express from "express";
import 'dotenv/config'

const server = Express();

server.use(Express.json())




export { server };