// errorHandler =  (error, req, res, next) => {
//     // console.log(`error message ${error.message}`);
//     console.log('error message', error)
//     // if (error) {
//     //     const status = error.status || 400
//     //     res.status(status).send({
//     //         status: false,
//     //         message: error.message
//     //     })
//     // };
//     next()
// };
// module.exports = errorHandler

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);    
    const status = err.status || 500;
    res.status(status).json({
        error: {
            message: err.message,
            status: status,
        },
    });
};

module.exports = errorHandler;