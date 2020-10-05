const express = require('express');
const mongoose = require('mongoose');
const app = express();
const constants = require('./service/constants/index');
const cors = require('cors');
const path = require('path');

const { MONGO_URI } = constants;
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({extended: true}));
app.use('/api/', require('./service/routes/post.routes'));
app.use('/api/', require('./service/routes/get.routes'));

if(process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, '../', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'build', 'index.html'));
  });
}

async function start() {
  try {
    await mongoose.connect(MONGO_URI, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
  } catch (err) {
    console.log('Server Error', err.message);
    process.exit(1);
  }
}

start();
