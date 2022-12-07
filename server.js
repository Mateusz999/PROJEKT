const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public')) //dostęp do folderu public, gdzie jesst css, js , czyli pliki statyczne
app.set('views', __dirname + '/views')
const bodyParser = require('body-parser')
app.use(bodyParser.json()) //for content-type: application/json request


app.use('/', require('./server/routes/home'))
app.use('/admin', require('./server/routes/admin'))

require('./server/db')(app) // plik z łączenie do mongoGB plus argument, którym jest app
app.listen(3000, () => {
    console.log('listening on PORT 3000')
})