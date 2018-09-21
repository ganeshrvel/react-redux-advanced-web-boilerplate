# React-Redux advanced web boilerplate

License: MIT

Author: [Ganesh Rathinavel](https://www.linkedin.com/in/ganeshrvel "Ganesh Rathinavel")

Requirements: node.js v8 or higher, npm

Version: 1.0.0

URL: [https://github.com/ganeshrvel/react-redux-advanced-web-boilerplate](https://github.com/ganeshrvel/react-redux-advanced-web-boilerplate "https://github.com/ganeshrvel/react-redux-advanced-web-boilerplate")

##### Advanced and highly scalable boilerplate built using React v16, Redux v4, Webpack v4 {HMR, Helmet, Loadables, Dynamic Reducer Injection, Selectors, Code splitting}

### Features
- Latest versions of React (v16), Redux (v4), Webpack (v4)
- Hot module Reload (HMR) for instant feedback.
- Helmet for better meta info management.
- Highly modular.
- Loadables, Dynamic Reducer Injection, Selectors for efficient Code. splitting and performance/startup optimisation.
- Industry standard State management.
- SASS/SCSS styling.

### Installation
```shell
$ git clone --depth=1 https://github.com/ganeshrvel/react-redux-advanced-web-boilerplate.git

$ cd react-redux-advanced-web-boilerplate

$ npm install
```

### Run
```shell
# Development
$ npm run start:dev:all

# Production
$ npm run start:production:all

```

### General Information
- Port assigned: 3000 and 3001(Development only)
- *Prettier* is used for maintaining code standards.

To use a local image inside the app use require('../path/file.jpg');
```javascript
// Example
 <img
            src={imgsrc('keyboard.jpg')}
            width="100px"
            height="auto"
          />
 /*
 imgsrc
 * default path: ../public/images/
 * @param filePath
 * @param returnNoImageFound (optional)
 */
```
And place the image file inside the *./app/public/images* folder

### Accolades and Credits
- favicon is made by prettycons from [www.flaticon.com](http://www.flaticon.com "www.flaticon.com")
 
- No image icon made by Phonlaphat Thongsriphong from [https://www.iconfinder.com/phatpc](https://www.iconfinder.com/phatpc "https://www.iconfinder.com/phatpc")
