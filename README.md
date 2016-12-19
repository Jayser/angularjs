# AngularJS App!
The main goal of this app it's self improvement at AngularJS.

## Development
```
npm start
```
This will start dev server on `http://localhost:8000` in the memory.

```
npm run mock
```
This will start dev server on `http://localhost:8005` in the memory and mock all http request according to `app/data/mock`.

```
npm run build:prod
```
This will build production version and put in the build folder

```
npm test
```
This will check tests

```
npm run test:watch
```
This will check tests in live mode

```
npm run coverage
```
This will build coverage in the `reports/coverage` folder.
> exclude some matches

```
"exclude": [
  "**/*.spec.js",
  "**/*.module.js",
  "**/index.js"
]
```

```
npm run stylint
```
This will check stylesheets on defects  

```
npm run lint
```
This will check javascript on defects  

```
npm run analyze
```
This will create `reports/webpack-stats.json` file for [analyse](https://webpack.github.io/analyse/) webpack service

## Git config
* git config user.name "User Name"
* git config user.email "user_email"
* git config color.ui true
* git config core.ignorecase false
* git config merge.ff no
* git config merge.commit no
* git config pull.ff yes

## Pre-commit
* run `lint`, `stylint`, `test` tasks
* Commit msg should match: <type>: <subject>

> feat: some feature msg


## [Types](http://npm.im/commitizen)
* feat - A new feature
* fix - A bug fix
* docs - Documentation only changes
* style - Changes that don't affect the meaning of the code 
* refactor - A code change that neither fixes a bug or adds a feature
* perf - A code change that improves performance
* test - Adding missing tests
* build - Changes to the build process or auxiliary tools and libraries such as documentation generation
* revert - A revert some changes 
* merge - A merge some changes
* rebase - A merge some changes
* cherry-pick -  A cherry-pick some changes

## Style Guide
* [Git Flow](https://habrahabr.ru/post/106912/)
* [Style Guide](https://github.com/toddmotto/angular-styleguide)
* [johnpapa](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)
* [jade](https://pugjs.org/api/migration-v2.html)
* [uui](https://uui.epam.com)
* [component](https://docs.angularjs.org/guide/component)
* [UI Bootstrap](http://angular-ui.github.io/bootstrap/)

## Technologies & Tools
* jade
* postcss
* stylelint
* font-awesome
* AngularJS/UI Router/UI Bootstrap
* babel/latest/stage-0
* jasmine/karma/coverage
* eslint
* webpack

## Improvements
* TODO.md - file for improvements
 
## Author
* [Sarhan Azizov](https://github.com/Jayser/)

## Contributors
* [Dmitriy Zhuravel](https://github.com/dmZhur)
* [Sergiy Gurko](https://github.com/DStereo)
* [Oleg Rovenskyi](https://github.com/OlegRovenskyi)
* [Alex Podobed](https://github.com/AlexPodobed)

## License
MIT - do anything with the code, but don't blame me if it does not work.