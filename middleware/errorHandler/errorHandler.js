const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Backend Error";
    const success = err.success;
    const extraMessage = err.extraMessage || "Backend Error";
    return res.status(status).json({success, message, extraMessage });
};

module.exports = errorHandler;