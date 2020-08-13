const Product = require('../database/models/productModel.js')

module.exports.createProduct = async (serviceData) => {
  try {
    let product = new Product({ ...serviceData })
    return await product.save()
  } catch (error) {
    console.log('Something went wrong: Service: createProduct', error)
    throw new Error(error)
  }
}
