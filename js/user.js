var apiKey = require("./../.env").apiKey;
var user = function(){

};

user.prototype.getuser = function (name, displayFunction) {
  $.get("https://api.github.com/users/"+name+"?access_token=" + apiKey).then(function(response){
  //  console.log(response);
    displayFunction(name, response.name);
   $(".solution").text(response.name);

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

  exports.userModule = user;
