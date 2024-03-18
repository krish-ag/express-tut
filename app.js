import express from 'express';
import { engine } from 'express-handlebars';
import blogRouter from './routes/blog.js';

const app = express();
const port = 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use("/static", express.static('static'));

app.use('/', blogRouter);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
})
