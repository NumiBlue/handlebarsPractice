const express = require('express');
const app = express();
const expbs = require(express-handlebars);

app.engine('handlebars', expbs());
app.set('view engine', 'handlebars');

app.listen(8080, () => {
console.log('Server is running at port ', 8080);
});