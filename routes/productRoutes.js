const express = require('express')
const router = express.Router()
const productController = require('../controller/productController.js')
const joiSchemaValidation = require('../middleware/joiSchemaValidation')
const productSchema = require('../apiSchema/productSchema')
const tokenValidation = require('../middleware/tokenValidation')

router.post(
  '/',
  tokenValidation.validationToken,
  joiSchemaValidation.validateBody(productSchema.createProductSchema),
  productController.createProduct
)

router.get(
  '/:id',
  tokenValidation.validationToken,
  productController.getProductById
)

router.put(
  '/:id',
  tokenValidation.validationToken,
  joiSchemaValidation.validateBody(productSchema.updateProductSchema),
  productController.updateProduct
)

router.get(
  '/',
  tokenValidation.validationToken,
  joiSchemaValidation.validateQueryParams(productSchema.getAllProductSchema),
  productController.getAllProducts
)

router.delete(
  '/:id',
  tokenValidation.validationToken,
  productController.deleteProduct
)

module.exports = router
