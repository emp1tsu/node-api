const express = require('express')
const dotEnv = require('dotenv')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml')

const dbConnection = require('./database/connection.js')

dotEnv.config()

const PORT = process.env.PORT || 3000

const app = express()

// db connectivity
dbConnection()

// cors
app.use(cors())

// request payload middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/product', require('./routes/productRoutes.js'))
app.use('/api/v1/user', require('./routes/userRoutes'))

// API Documentation
if (process.env.NODE_ENV != 'production') {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
}

app.get('/', (req, res, next) => {
  res.send('hello')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`)
})

// error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.stack(500).send({
    status: 500,
    message: err.message,
    body: {},
  })
})
