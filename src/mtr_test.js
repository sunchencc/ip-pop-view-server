const { spawn } = require('child_process');
const fs = require('fs')

const targetHost = ['nexttrace', '-j',   'www.baidu.com'];

const mtrProcess = spawn('sudo', targetHost);
console.time('a')
mtrProcess.stdout.on('data', (data) => {
    console.log(`11111111mtr output:\n${data}`);
    fs.writeFileSync('./text.txt', data, { flag: 'w+' })
})

mtrProcess.stderr.on('data', (data) => {
    console.error(`Error: ${data}`);
});

mtrProcess.on('close', (code) => {
    console.timeEnd('a')

    console.log(`mtr process exited with code ${code}`);
});