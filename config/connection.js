const mongoClient = require('mongodb').MongoClient

const state={
    db:null

}

module.exports.connect=function(done){
    const url = 'mongodb://localhost:27017'
    const dbName='shopping'

    mongoClient.connect(url,(err,data)=>{
        if(err) return done(err)
        else state.db=data.db(dbName)
        done()
    })
}

module.exports.get=()=>{
    return state.db
}