(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var profit_rate = 0.0;
var rate = 1.005;

function increment() {
  var buying_price = document.getElementById("buying_price").value;
  rate += 0.005;
  var selling_price = "$" + Math.round(buying_price * rate * 1000) / 1000;
  profit_rate += 0.5;
  document.getElementById("selling_price").textContent = selling_price;
  document.getElementById("profit_rate").textContent = profit_rate + "%";
}

function decrement() {
  var buying_price = document.getElementById("buying_price").value;
  rate -= 0.005;
  var selling_price = "$" + Math.round(buying_price * rate * 1000) / 1000;
  profit_rate -= 0.5;
  document.getElementById("selling_price").textContent = selling_price;
  document.getElementById("profit_rate").textContent = profit_rate + "%";
}

function refresh() {
  rate = 1.005;
  profit_rate = 0.0;
  document.getElementById("buying_price").value = "";
  document.getElementById("selling_price").textContent = "";
  document.getElementById("profit_rate").textContent = profit_rate + "%";
}

},{}]},{},[1]);
