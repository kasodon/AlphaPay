const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const log = console.log;

express()
  .use(express.static(path.join(__dirname, 'views')))
  .use(bodyParser.urlencoded({extended: true}))
  // Data parsing
  .use(express.urlencoded({extended: false }))
  .use(express.json())
  .set('views', path.join(__dirname, 'views'))
  .engine('html', require('ejs').renderFile)
  .set('view engine', 'html')
  .get('/', (req, res) => res.render('index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  



