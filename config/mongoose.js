const mongoose = require('mongoose');
 mongoose.set('strictQuery',true);
// const dotenv = require('.env');
//const DB =''
// dotenv.config({ path: 'config/.env' });

//connecting mongoose with database
//I stored MONGODB_URI in my system veriable for security reason. veriable name MONGODB_URI followed by your mongo atlas link
//for local use you can write this code
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/csvUploader');

// mongoose.connect(DB, {
// 	useNewUrlParser: true,
// 	useCreateIndex:true,
//  	useUnifiedTopology: true,
// 	useFindAndModify:false
// }).then(() => {
// 	console.log('connection successful');
// }).catch((err) => console.log('no connection',err));

// const DB = "mongodb://127.0.0.1:27017/placement_cell"
// const DB = 'mongodb+srv://vijaykumarcse22:BD7rWeK2FBPYkusW@placementapp.zp4kzxo.mongodb.net/'

mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Connected to Database :: Mongodb');
});

module.exports = mongoose;
