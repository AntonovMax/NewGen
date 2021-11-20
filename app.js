const express = require('express')
const app = express()
var exphbs  = require('express-handlebars');


app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs());

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.get('/', (req, res) => {
  res.render('home')
})

app.post('/', (req, res) => {
  console.log('req.body is - ', req.body);
  res.json({authenticate: 'cuca'})
})


app.listen(3000, () => {
  console.log('Server has started');
})
