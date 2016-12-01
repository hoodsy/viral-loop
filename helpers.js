var hbs = require('express-hbs');

module.exports = function(){  
    hbs.registerHelper('concat', function (string, variable, string2, options) {
      return string + variable.toString() + string2
    });
};