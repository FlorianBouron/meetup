import mongoose from 'mongoose';

export default () => {
  mongoose.connect('mongodb://localhost/meetup');
  const db = mongoose.connection;
};
