const { BaseData } = require('./base/BaseData');
const mongodb = require('mongodb')
class MongoClient extends BaseData{
    client
    db
    collection
    constructor(dbName, collection) {
        super()
        this.client = new MongoClient(`mongodb://${this.global.mongoCfg.url}:${this.global.mongoCfg.port}`)
        this.db = this.connect(dbName)
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

const test = new MongoClient('test', 'test2')
console.log(test.query({}))