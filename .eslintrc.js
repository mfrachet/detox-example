module.exports = {
    "extends": "airbnb",
    "env": {
      "mocha": true
    },
    "parser": "babel-eslint",
    "globals": {
      "by": true,
      "expect": true,
      "device": true,
      "element": true
    },
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js"] }]
    }
};
