const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:pass@cluster0.vguxiok.mongodb.net/users_app');

const User = mongoose.model('Users', { name: String, email: String, password: String });

const  user = new User({
    name: 'Sunil-2',
    email: 'sunil@gmail.com',
    password: '12345',
});

user.save();