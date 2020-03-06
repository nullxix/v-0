const output = require('../core/sse-output.js')

const sse = (req, res, next) => {

    // res.setHeader('Cache-Control', 'no-cache');
    // res.setHeader('Content-Type', 'text/event-stream');
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.flushHeaders(); // flush the headers to establish SSE with client

    // let counter = 0;
    // let interValID = setInterval(() => {
    //     res.write(`data: ${JSON.stringify({num: counter})}\n\n`); // res.write() instead of res.send()
    // }, 1000);

    // // If client closes connection, stop sending events
    // res.on('close', () => {
    //     console.log('client dropped me');
    //     clearInterval(interValID);
    //     res.end();
    // });

    console.log('SSE FORMED')
    res.setHeader('Cache-Control', 'no-cache')
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Connection', 'keep-alive')
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.flushHeaders()
    const sseInterval = setInterval(() => {
        const out = output.getOutput()
        res.write(out)
    },
    1000)

    res.on('close', () => {
        console.log('closing SSE')
        clearTimeout(sseInterval)
    })

    next()
}


module.exports = sse