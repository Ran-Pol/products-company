import mongoose from 'mongoose'

mongoose
  .connect('mongodb://Localhost/productcompanydb')
  .then((db) => console.log('DB is connected'))
  .catch((error) => console.log(error))
