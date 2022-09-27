import { Router } from 'express'
import * as productsCtrl from '../controllers/products.controllers'

const router = Router()

router.get('/', productsCtrl.getProducts)

router.post('/', productsCtrl.createProduct)

router.get('/:productId', productsCtrl.getProductById)

router.delete('/:productId', productsCtrl.deleteProductById)

router.put('/:productId', productsCtrl.updateProductById)

export default router
