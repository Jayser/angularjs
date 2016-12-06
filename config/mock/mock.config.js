const glob = require('glob');
const fs = require('fs');
const cfgBase = require('../index');

const REGEXP_EXTENTION = /\.[^\.]+$/;
const files = glob.sync(`**/*`, {
    cwd: cfgBase.paths.mocks,
    nodir: true
});

const listOfApi = files.reduce((prevObj, path)=> {
    const ext = path.match(REGEXP_EXTENTION)[0];
    const api = path.replace(ext, '');

    prevObj[api] = {
        path,
        ext
    };

    return prevObj;
}, {});

module.exports = app => {
    for (let api of Object.keys(listOfApi)) {
        app.all(`/${api}`, (req, res) => {
            const file = listOfApi[api];
            const path = `${cfgBase.paths.mocks}/${file.path}`;
            const mockText = fs.readFileSync(path, 'utf8');

            console.log('[MOCK]: ' + api);
            console.log('[FROM]: ' + path);
            console.log('[RESPONSE]: ' + mockText);

            res.set({'Content-Type': `application/${file.ext}`});
            res.send(mockText);
        });
    }
};