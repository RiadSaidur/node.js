const express  =  require('express');
const routes = require('./routes');
const app = express();

const PORT =  process.env.PORT || 5000;

// DB CONNECTION
require('./models');

// BODY PARSER FRO AJAX REQUESTS
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(routes);


app.listen(PORT, () => {
  console.log(`Listenting to port ${PORT}`);
});