const express = require('express'); 
 
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

 
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/pattern/:type', (req, res) => {
  const patternType = req.params.type;
  const validPatterns = ['spiral', 'grid', 'fractal', 'circle', 'concentric', 'hexagonal', 'wave', 'concentricsquare','radialtriangles', 'diamondgrid','zigzag', 'wavygrid', 'plus','minus', 'heart','trianglesgrid','cylinder','check','triangle'];

  if (validPatterns.includes(patternType)) {
    res.render('pattern', { patternType });
  } else {
    res.send('Pattern not found');
  }
});

 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
