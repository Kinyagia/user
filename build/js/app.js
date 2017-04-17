(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey ="48190ca879e3796158bd02b9c2ac1f509386b0f4";

},{}],2:[function(require,module,exports){
var apiKey = require("./../.env").apiKey;
var user = function(){

};

user.prototype.getuser = function (name, displayFunction) {
  $.get("https://api.github.com/users/"+name+"?access_token=" + apiKey).then(function(response){
   console.log(response);
    //displayFunction(name, response.name);
   $(".solution").text(response.name);

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

  exports.userModule = user;

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/user.js":2}]},{},[3]);
