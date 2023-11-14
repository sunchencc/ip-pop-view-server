const { spawn} = require('child_process');
const { MongoClientTool } = require('./MongoClient')
class NexttraceTool {
    constructor() {
        this.mongoClient = new MongoClientTool('fun', 'task')
    }

    async getRoute (host) {
        const orders = ['nexttrace', '-j', '-M', host]
        let content = ''
        const mtrProcess = spawn('sudo', orders);
        mtrProcess.stdout.on('data', (data) => {
            content += data
        })

        mtrProcess.stderr.on('data', (data) => {
            console.error(`Error: ${data}`);
        });

        mtrProcess.on('close', (code) => {
            console.log('close------>')
            console.log(content)
            console.log(`mtr process exited with code ${code}`);
        });
    }
}
const nexttraceTool = new NexttraceTool()
nexttraceTool.getRoute('www.baidu.com')
