require('dotenv').config();

const app = require('./server');
require('./database');



app.listen(app.get('port'), () =>{

    console.log('Server on port 3000:', app.get('port'))
})
    
