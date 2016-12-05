const path = require('path');
const glob = require('glob');

const files = glob.sync(path.resolve('app/data/mocks') + '/**/*.json');

module.exports = app => {
    app.use('/api', (req, res) => {
        console.log(files);
        //res.json(require('./src/todolist/mocks/todos.json'));
    });
};