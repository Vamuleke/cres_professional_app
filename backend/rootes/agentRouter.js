import express from 'express'
import {data} from '../data.js'
import Agent from '../models/agentModel.js'
import expressAsyncHandler from 'express-async-handler'

const agentRouter = express.Router ()

agentRouter.get ('/seed', expressAsyncHandler ( async (request, response) => {
    await Agent.deleteMany ({})
    const createdAgents = await Agent.insertMany (data.agents)

    response.send (createdAgents)
}))

agentRouter.get ('/', expressAsyncHandler (async (request, response) => {
    const agents = await Agent.find ({})

    response.send (agents)
}))

export default agentRouter