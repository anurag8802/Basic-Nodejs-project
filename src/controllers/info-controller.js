const info = (req,res) => {
    return res.status(200).json({
        success: true,
        message: 'API IS LIVE',
        error: {},
        data: {}
    });
}
module.exports = {
    info
}