import User from '../models/Users'
import jwt from 'jsonwebtoken'
import config from '../config'

export const signup = async (req, res) => {
  const { username, email, password, roles } = req.body

  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
  })
  const savedUser = await newUser.save()

  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: 86400, //24 hours
  })

  res.status(200).json({ token })
}

export const signin = async (req, res) => {
  res.json('signin')
}
