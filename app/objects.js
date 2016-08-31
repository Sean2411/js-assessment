exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    obj.sayIt=fn;
    return obj.sayIt();

  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting=greeting;
  },

  iterate: function(obj) {
    var rs=[];
    var str="";
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        str=key+':'+' '+obj[key];
        rs.push(str);
      }
    }

    return rs;

  }
};
