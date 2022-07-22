const connect = require('mongoose');

connect(
  'mongodb+srv://devashish:mongodb@cluster0.ff0a9.mongodb.net/task-management-app',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
);
