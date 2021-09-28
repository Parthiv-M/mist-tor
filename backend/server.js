const express = require('express');
const connectDB = require('./config/db');

const app = express();


connectDB();


app.use(express.json({ extended: false }));


app.get('/', (req, res) => {
  return res.status(204).json({
    msg: "We are glad you like experimenting, but there's nothing here"
  });
});




app.use('/api/user', require('./routes/api/user'));


app.use('/api/getCommonData', require('./routes/api/getCommonData'));


app.use('/api/adminRoles', require('./routes/api/adminRoles'));


app.use('/api/commonProcess', require('./routes/api/commonProcess'));


app.use('/api/editorial', require('./routes/api/editorial'));


app.use('/api/maintenance', require('./routes/api/maintenance'));


app.use('/api/auth', require('./routes/api/auth'));

//someone else being smarty-pants
app.get('*', (req, res) => {
  return res.status(404).json({ msg: 'There is nothing to see here' });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
