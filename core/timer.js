//m = milliseconds
const mInHour = 3600000 //five zeros
const mInMinute = 60000
const mInSecond = 1000

//sL = startingLine
const sLArgs = [2020, 2, 12, 14]//Year / Month / Day / Hour
const sLTest  = [2020, 2, 6, 12, 30]
const sLRAW = Date.UTC(...sLTest)

const offset = process.env.LOCAL_TIME_OFFSET
const startingLine = sLRAW + (mInHour * Number(offset))


console.log('----')
console.log(new Date(sLRAW).toJSON())
console.log(new Date(startingLine).toJSON())
console.log(new Date().toJSON())
console.log(new Date().getTimezoneOffset())
const splitTime = (src, divider) => {
    const out = Math.floor(src/divider)
    const remainder = src % divider
    return [out, remainder]
}

//takes milliseconds, gives '<hours> : <minutes> : <seconds>'
const formatTime = milli => {
    const [hours, preMin] = splitTime(milli, mInHour)
    const [minutes, preSeconds] = splitTime(preMin, mInMinute)
    const [seconds] = splitTime(preSeconds, mInSecond)
    return `${hours}:${minutes}:${seconds}`
}

const getTime = () => {
    timeTill = startingLine - Date.now()
    Math.round()

    const   pretty = formatTime(timeTill),
            ugly = timeTill
    return {pretty, ugly}
}

module.exports = {getTime}