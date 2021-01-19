const handleError = (res, status, err, msg) => {
    console.log(err)
    res.status(status).json({msg})
}

module.exports = {handleError}