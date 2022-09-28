import { json } from 'express/lib/response'
import Product from '../models/Product'

export const getProducts = async (req, res) => {
  const allProducts = await Product.find({})
  res.json(allProducts)
}

export const createProduct = async (req, res) => {
  const { name, category, price, imgURL } = req.body
  const newProduct = new Product({ name, category, price, imgURL })

  const result = await newProduct.save()
  res.status(201).json(result)
}

export const getProductById = async (req, res) => {
  const rsturnedProduct = await Product.findById(req.params.productId)
  res.json(rsturnedProduct)
}

export const updateProductById = async (req, res) => {
  const { productId } = req.params
  const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, {
    new: true,
  })
  res.status(200).json(updatedProduct)
}

export const deleteProductById = async (req, res) => {
  const { productId } = req.params
  await Product.findByIdAndDelete(productId)
}
