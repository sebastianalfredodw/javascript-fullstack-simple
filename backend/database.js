const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { 
    useNewUrlParser: true
})

.then(db => console.log(`Conectado a la DB`))
.catch(err => console.error(err));
