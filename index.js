const express = require('express')
const app = express()
const port = 3012
const router= require('./src/routes/routes')

app.use('/api',router)

app.listen(port,()=>{
  console.log(`Servidor corriendo en puerto ${port}`);
})
