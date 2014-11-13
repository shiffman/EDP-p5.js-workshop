// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// These are adapted from https://github.com/lmccart/itp-creative-js


var people = [];

function setup() {
  createCanvas(600, 400);
  loadJSON("data.json", createPeople);
}

function draw() {
  background(120, 180, 200);
  if (people.length === 0) {
    textAlign(CENTER);
    fill(255);
    noStroke();
    textSize(20);
    text("LOADING", width/2,height/2);
  } else {
    for (var i = 0; i < people.length; i++) {
      people[i].display();
      people[i].update();
    }
  }
}

function createPeople(data) {
  // Go through the JSON array and make some objects
  for (var i = 0; i < data.length; i++) {
    people[i] = new Person(data[i]);
  }
}

// This is awkward but I'm copying all of the JSON
// properties into an object of this type
function Person(data) {
  this.x = random(width);
  this.y = height/2;
  for (var prop in data) {
    if (data.hasOwnProperty(prop)) {
      this[prop] = data[prop];
    }
  }

  this.update = function() {
    this.x += random(-2,2);    
  }

  this.display = function() {
    noStroke();
    fill(155, 30, 180, 180);
    ellipse(this.x, this.y, this.age * 5, this.age * 5);
    fill(255);
    textSize(20);
    textAlign(CENTER);
    text(this.name, this.x, this.y);    
  }
}
