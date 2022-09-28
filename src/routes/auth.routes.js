import { Router } from 'express'
const router = Router()

import * as authCtrl from '../controllers/authControllers'

router.post('/signup', authCtrl.signup)
router.post('/signin', authCtrl.signin)

export default router
