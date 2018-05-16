const path = require('path')
const captchapng = require('captchapng')
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const dbName = 'szhmqd17';

exports.getStudentListPage = (req, res) => {
    MongoClient.connect(url, function (err, client) {

        const db = client.db(dbName);


        // Get the documents collection
        const collection = db.collection('studentInfo');

        collection.find({}).toArray(function(err,docs){
            console.log(docs);
            res.send(docs)
            
        })
        client.close()
    })
}