import mongoose from 'mongoose';

export default () => {
	mongoose.connect('mongodb://localhost/meetup');
	let db = mongoose.connection;
}