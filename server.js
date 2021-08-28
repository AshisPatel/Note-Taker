const express = require('express'); 


const app = express();

const htmlRoutes = require('./routes/htmlRoutes'); 
const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes'); 

app.use(express.static('public'));

// This will allow us to parse incoming string data 
app.use(express.urlencoded({ extended:true })); 

// Accept incoming JSON data

app.use(express.json());

app.use('/', htmlRoutes); 
app.use('/api', apiRoutes); 

// Sets port to port required by the hosting service (heroku) or 9001 if no required

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}! (^^)b`); 
});

