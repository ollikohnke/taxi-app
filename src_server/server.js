//// Load modules ////
const express = require('express')
const morgan = require('morgan');

//// Load own modules ////
const apiRouter = require('./routes/apiRoutes.js')
const frontRouter = require('./routes/frontRoutes.js')
const backRouter = require('./routes/backRoutes.js')
const authRouter = require('./routes/authRoutes.js')

//// Express and middlewares ////
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//// Logging ////
app.use(morgan('common'));

//// Login routes ////
app.use('/auth', authRouter);

//// Serve front end ////
app.use('/', frontRouter)

//// Serve back end ////
app.use('/driver', backRouter)

//// Api routes for front and back /////
app.use('/api', apiRouter)

//// Start the server ////
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(process.env.SERVER_URI);
});