const express = require('express'); 


const app = express();

const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes'); 

app.use(express.static('public'));

// This is to accept inputs as strings ... may not need extended as data should not be stored within arrays in an key: value pair. 
app.use(express.urlencoded({ extended:true })); 

// Accept incoming JSON data

app.use(express.json());

app.use('/api', apiRoutes); 

// Sets port to port required by the hosting service (heroku) or 9001 if no required

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}! (^^)b`); 
});

