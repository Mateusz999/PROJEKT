const express = require('express')
const router = express.Router()

const pages_url = 'pages'

router.get('/', (req,res) => {
    res.render(pages_url + '/home.ejs')
})
router.get('/ogloszenia', async(req,res) => {

    const db = req.app.locals.db
    

  
    db.collection('Advert')
    const advert = await db.collection("Advert").aggregate(
        [
            {
              '$sort': {
                'completed':1
              }
            }
          ])
    .toArray()
    .then( (result) => {

     
        res.render('pages' +'/ogloszenia.ejs', {
            advert: result,
           

        })
        
    })
})

router.get('/ogloszenia', async(req,res) => {

    const db = req.app.locals.db
    

  
    db.collection('Advert')
    const advert = await db.collection("Advert").aggregate(
        [
            {
              '$sort': {
                'completed':1
              }
            }
          ])
    .toArray()
    .then( (result) => {

     
        res.render('pages' +'/ogloszenia.ejs', {
            advert: result,
           

        })
        
    })
})


router.get('/ogloszenia/time', async(req,res) => {

  const db = req.app.locals.db

  
  db.collection('Advert')
  const advert = await db.collection("Advert").aggregate(
    [
      {
          '$sort': {
            'completed': 1
          }
      }
    ])
    .toArray()
    .then( (result) => {

      res.render('pages'+'/ogloszenia_time.ejs', {
        advert: result
      })
    })
})
module.exports = router