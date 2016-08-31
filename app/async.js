exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    //return new Promise(function (fulfill){
    //  fulfill(value);
    //})
    var dfd= $.Deferred();
    setTimeout(function() {
      dfd.resolve(value);
    }, 1);
    return dfd.promise();
  },

  manipulateRemoteData: function(url) {
    var dfd = $.Deferred();

    $.ajax(url).then(function(response) {
      var data = $.map(response.people, function(obj) {
        return obj.name;
      });
      dfd.resolve(data.sort());
    });

    return dfd.promise();
  }
};
