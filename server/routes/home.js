const express = require('express')
const router = express.Router()

const pages_url = 'pages'



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

router.get('/admin', async(req,res) =>
{

    const db = req.app.locals.db
   
    const advert = await db.collection("Advert").aggregate(
        [
            {
              '$sort': {
                'completed':1
              }
            }
          ]
    ).toArray()
    .then( (result) =>{
       
        res.render('pages' +'/admin.ejs', {
            advert: result

        })
    })
  
})

router.get('/kontakt', (req,res) => {
   res.render('pages' + '/kontakt.ejs')
})

router.get('/', async(req,res) => {
  const db = req.app.locals.db
  const posts = await db.collection("Posts")
  .find()
  .toArray()
  .then( (result) => {
    res.render(pages_url + '/home.ejs', {
      post: result
    })

  })
  
})


router.get('/:id', (req, res) => {
  const db = req.app.locals.db
  let id = req.params.id
  const ObjectId = require('mongodb').ObjectID
  
  db.collection('Posts')
      .findOne( { _id: ObjectId(id) } )
      .then( (result) => {
          res.render(pages_url+ '/home_details.ejs',{
              detail: result
             
          })
      }).catch((error) => {
          console.log("error")
      })
    })

    router.get('/admin', async(req,res) =>
{

    const db = req.app.locals.db
   
    const advert = await db.collection("Advert").aggregate(
        [
            {
              '$sort': {
                'completed':1
              }
            }
          ]
    ).toArray()
    .then( (result) =>{
       
        res.render('pages' +'/admin.ejs', {
            advert: result

        })
    })
  
})
module.exports = router