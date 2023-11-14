const { BaseData } = require('./base/BaseData');
const { MongoClient } = require('mongodb')
class MongoClientTool extends BaseData{
    client
    db
    collection
    constructor(dbName, collection) {
        super()
        this.client = new MongoClient(`mongodb://${this.global.mongoCfg.url}:${this.global.mongoCfg.port}`)
        this.db = this.client.db(dbName)
        this.collection = this.db.collection(collection)
    }

    async query (filter) {
        return this.collection.find(filter).toArray();
    }

    async insert (contents){
       return await collection.insertMany(contents);
    }

    async close () {
        this.client.close()
    }
}

module.exports = {
    MongoClientTool
}