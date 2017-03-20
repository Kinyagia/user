var user = require("./../js/user.js").userModule;

var displayRepository = function (name, reponame) {
  $("#solution").text(reponame);
};

$(document).ready(function(){
  var currentUser = new user();
  $("form#name").submit(function(event){
    event.preventDefault();

    var name=$("#username").val();
    $("#username").val("");

currentUser.getuser(name, displayRepository);
  });
});
