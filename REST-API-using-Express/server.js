import express, { urlencoded, json } from 'express';
import routes from './routes';
const app = express();

const PORT =  process.env.PORT || 5000;

// DB CONNECTION
import './models';

// BODY PARSER FOR AJAX REQUESTS
app.use(urlencoded({extended:true}));
app.use(json());

app.use(routes);


app.listen(PORT, () => {
  console.log(`Listenting to port ${PORT}`);
});