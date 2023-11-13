const global = require('../../config/global')
class BaseData {
    global
    constructor() {
        console.log('123123')
        this.global = global
    }
}

module.exports = {
    BaseData
}