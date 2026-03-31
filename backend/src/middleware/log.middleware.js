const showLog = async(req,res,next)=>{
    const log = `time: ${new Date()}, request method: ${req.method}`
    console.log(log)
    next()
}
module.exports = showLog;