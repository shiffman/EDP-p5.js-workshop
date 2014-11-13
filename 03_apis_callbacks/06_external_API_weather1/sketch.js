// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// These are adapted from https://github.com/lmccart/itp-creative-js

// http://openweathermap.org/API

function setup() {
  createCanvas(1200, 400);
  loadJSON("http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=7", drawData);
  noLoop();
}

function draw() {
}

function drawData(data) {
  noLoop();
  textAlign(CENTER);
  ellipseMode(CENTER);
  noStroke();
  fill(0);

  print(data.list);
  for (var i=0; i<data.list.length; i++) {
    var x = 
    ellipse(100+150*i, 100, data.list[i].clouds, data.list[i].clouds);
    text("day "+i, 100+150*i, 200);
  } 
}