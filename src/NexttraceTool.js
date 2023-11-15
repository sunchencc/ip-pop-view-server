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
            console.log('=======>', data.toString('utf-8'))
            content = Buffer.concat([content, data])
        })

        mtrProcess.stderr.on('data', (data) => {
            console.error(`Error: ${data}`);
        });

        mtrProcess.on('close', (code) => {
            console.log('close------>')

            fs.writeFileSync('./text.json', content.toString('utf-8'), { encoding: 'utf-8' })
            console.log(content.toString('utf8'))
            console.log(`mtr process exited with code ${code}`);
        });
    }
}
const nexttraceTool = new NexttraceTool()
nexttraceTool.getRoute('www.baidu.com')
