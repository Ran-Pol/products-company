import User from '../models/Users'

export const signup = async (req, res) => {
  const { username, email, password, roles } = req.body
  
  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
  })
  const savedUser = await newUser.save()
  res.json(savedUser)
}

export const signin = async (req, res) => {
  res.json('signin')
}
