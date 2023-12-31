const { spawn} = require('child_process');
const { MongoClientTool } = require('./MongoClient')
const fs = require('fs')
class NexttraceTool {
    constructor() {
        this.mongoClient = new MongoClientTool('fun', 'task')
    }

    async getRoute (host) {
        const orders = ['nexttrace', '-j', '-M', host]
        let content = Buffer.from('')
        const mtrProcess = spawn('sudo', orders);

        mtrProcess.stdout.on('data', (data) => {
            content = Buffer.concat([content, data])
        })

        mtrProcess.stderr.on('data', (data) => {
            console.error(`Error: ${data}`);
        });

        mtrProcess.on('close', (code) => {
            content = content.toString().split('DMIT.LAX')[1]
            this.mongoClient.insert(content)
            console.log(`mtr process exited with code ${code}`);
        });

    }
}
const nexttraceTool = new NexttraceTool()
nexttraceTool.getRoute('www.baidu.com')
