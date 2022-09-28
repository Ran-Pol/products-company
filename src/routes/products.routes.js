import { Router } from 'express'
const router = Router()

import * as productsCtrl from '../controllers/products.controllers'
import { authJwt } from '../middlewares'

router.get('/', productsCtrl.getProducts)

router.post('/', authJwt.verifyToken, productsCtrl.createProduct)

router.get('/:productId', productsCtrl.getProductById)

router.delete('/:productId', authJwt.verifyToken, productsCtrl.deleteProductById)

router.put('/:productId', authJwt.verifyToken, productsCtrl.updateProductById)

export default router
