const timer = require('./timer')
const getOutput = () => {
    const time = timer.getTime()

    if(time.ugly > 0){
        return formatOutput({'time':time.pretty})
    } else {
        return formatOutput({'hack':true, destination:process.env.DESTINATION})
    }
}

const formatOutput = (output) => {
    const data = JSON.stringify(output)
    return `data: ${data}\n\n`
}

module.exports = {getOutput}