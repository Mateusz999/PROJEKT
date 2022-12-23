const express = require("express");
const router = express.Router();



router.delete('/delete', (req,res) => {


    const ObjectId = require('mongodb').ObjectID
    const db = req.app.locals.db
    db.collection('Advert')
    
    .deleteOne({_id: ObjectId(req.body.id)})
    .then( (result)=>{

    if(result.deletedCount === 0) {

        return res.json('No article to delete')
    }    
        return res.json('Success')    
})
.catch( ()=> {
    return res.json('Failure')
})





})

router.get('/edit/:id', (req,res) => {

    const db = req.app.locals.db
    var id = req.params.id
    const ObjectId = require('mongodb').ObjectID

    db.collection('Advert')
        .findOne( {_id: ObjectId(id)})
        .then( (result) => {

            return res.json(result)
        })
        .catch((error) => {
            return res.json('Failure')
        })
})

router.put('/putEdit/:id', (req,res) =>{

    const db = req.app.locals.db
    var id = req.params.id
    const ObjectId = require('mongodb').ObjectID

    db.collection('Advert')
        .findOneAndUpdate({_id: ObjectId(id)},
            {
                $set: {
                    title: req.body.title,
                    completed: req.body.completed,
                    description: req.body.description,
                    time: req.body.time
                }
            }
        )
        .then((result) =>{
            return res.json('Success')
        })
        .catch(()=> { return res.json('Failure') })
})


router.post('/add', (req,res) => {
    const db = req.app.locals.db
    db.collection('Advert')
    .insertOne( {
        title: req.body.title,
        completed: req.body.completed,
        description: req.body.description,
        time: req.body.time
    })
    .then((result) => {
        if(result.insertedCount == 1) { return res.json('Success')}
    })
    .catch( ()=> {
        return res.json('Failure')
    } )
})


module.exports = router;