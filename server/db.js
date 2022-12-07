module.exports = function(app){

 const MongoClient = require('mongodb').MongoClient 
                      
 MongoClient.connect('mongodb+srv://admin:admin@cluster0.8wbpsyv.mongodb.net/CHURCH',
 {useUnifiedTopology: true }
 ).then( (client ) => {

  
    const db = client.db("CHURCH")
    app.locals.db = db

    app.locals.advertCollection = db.collection("advert")

}).catch((error) => { console.log(error)})

}
