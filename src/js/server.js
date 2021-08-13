const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')


app.use(cors())

app.get('/:cep', async (req, res) => {

  try {
    const { data } = await axios(`https://viacep.com.br/ws/${req.params.cep}/json/`)
    return res.status(200).json(data)
  }
  catch (error) {
    return res.status(400).json(error.messsge)
  }


})
app.listen('4567')