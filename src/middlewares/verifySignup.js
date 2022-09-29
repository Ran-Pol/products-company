import { ROLES } from '../models/Roles'
import Users from '../models/Users'

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  const userName = await Users.findOne({ username: req.body.username })

  if (userName)
    return res.status(400).json({
      message: 'The username already exists',
    })

  const userEmail = await Users.findOne({ email: req.body.email })

  if (userEmail)
    return res.status(400).json({
      message: 'The email already exists',
    })

  next()
}

export const checkRolesExisted = async (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        return res.status(400).json({
          message: `Role ${req.body.roles[i]} does not exists`,
        })
      }
    }
  }
  next()
}
