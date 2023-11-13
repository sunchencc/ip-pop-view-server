const Traceroute = require('nodejs-traceroute');
const ipInfo = require("ipinfo")

try {
    const tracer = new Traceroute();
    tracer
        .on('pid', (pid) => {
            console.log(`pid: ${pid}`);
        })
        .on('destination', (destination) => {
            console.log(`destination: ${destination}`);
        })
        .on('hop', (hop) => {
            //console.log(`hop: ${JSON.stringify(hop)}, ${hop.ip}`);
            ipInfo(hop.ip, (err, loc) => {
                console.log(err || loc)
            })
        })
        .on('close', (code) => {
            console.log(`close: code ${code}`);
        });

    tracer.trace('baidu.com');
} catch (ex) {
    console.log(ex);
}