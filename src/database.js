const mongoose = require('mongoose')


const MONGODB_URI = 'mongodb://127.0.0.1/inver-app';

mongoose.connect(MONGODB_URI, {

    useUnifiedTopology: true,
    useNewUrlParser: true,
    



})

.then(db => console.log('Databases is Connected'))
.catch(err => console.log(err));