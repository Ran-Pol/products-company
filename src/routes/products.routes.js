import { Router } from 'express'
const router = Router()

import * as productsCtrl from '../controllers/products.controllers'
import { authJwt } from '../middlewares'

router.get('/', productsCtrl.getProducts)

router.post(
  '/',
  [authJwt.verifyToken, authJwt.isModerator],
  productsCtrl.createProduct
)

router.get('/:productId', productsCtrl.getProductById)

router.delete(
  '/:productId',
  [authJwt.verifyToken, authJwt.isModerator],
  productsCtrl.deleteProductById
)

router.put(
  '/:productId',
  [authJwt.verifyToken, authJwt.isModerator],
  productsCtrl.updateProductById
)

export default router
