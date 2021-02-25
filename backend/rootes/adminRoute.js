import express from 'express'
import User from '../models/userModel.js'
import { getToken } from '../util.js'
import expressAsyncHandler from 'express-async-handler'
const router = express.Router()
router.put('/:id',expressAsyncHandler(async (req, resp) => {
  const userId = req.params.id
  const user = await User.findById(userId)
  if (user) {
    user.name = req.body.name
    user.email = req.body.email
    user.photo = req.body.photo
    const updateProfil = await user.save()
    if (updateProfil) {
      return resp
        .status(200)
        .send({ message: 'Profile modifier avec success', data: updateProfil })
    }
  }
})
)
router.get('/:id',expressAsyncHandler(async (req, resp) => {
  const user = await User.findOne({ _id: req.params.id })
  if (user) {
    resp.send(user)
  } else {
    resp.status(404).send({ message: 'Error not found' })
  }
})
)
export default router
