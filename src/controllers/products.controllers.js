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

export const getProductById = (req, res) => {}
export const updateProductById = (req, res) => {}
export const deleteProductById = (req, res) => {}
