const mongoose = require('mongoose')

mongoose.connect(
    process.env.MONGO_URL_CONNECT,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    () => {console.log("Conectado ao MongoDB")
    });
