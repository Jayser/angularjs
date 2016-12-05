const resolve = require('path').resolve;
const glob = require('glob');
const cfgBase = require('../index');

const MOCK_DIR = 'mocks';
const SLASH = 1;
const MOCK_FILE_EXTENSION = '.json';

const files = glob.sync(`${cfgBase.paths.mocks}/**/*${MOCK_FILE_EXTENSION}`);

const listOfApi = files.map(file => {
    const idx = file.indexOf(MOCK_DIR) + MOCK_DIR.length + SLASH;
    return file.slice(idx).replace(MOCK_FILE_EXTENSION, '');
});

module.exports = app => {
    for (let i = 0, ln = listOfApi.length; i < ln; i++) {
        app.all(`/${listOfApi[i]}`, (req, res) => {
            const name = listOfApi[i];
            const path = `${cfgBase.paths.mocks}/${name}${MOCK_FILE_EXTENSION}`;
            const response = require(resolve(path));

            console.log('------------------------------------------------------------------------------');
            console.log('[MOCK]: ' + name);
            console.log('[FROM]: ' + path);
            console.log('[RESPONSE]: ' + JSON.stringify(response));
            console.log('------------------------------------------------------------------------------');

            res.json(response);
        });
    }
};