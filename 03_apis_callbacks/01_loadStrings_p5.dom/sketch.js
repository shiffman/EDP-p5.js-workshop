// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// These are adapted from https://github.com/lmccart/itp-creative-js

// You can use preload
// var lines;

// function preload() {
//   lines = loadStrings("lines.txt");
// }

function setup() {
  noLoop();
  // Or you can pass a callback function to deal with the loaded data
  loadStrings("lines.txt", doText);
}

function doText(data) {
	for (var i=0; i<data.length; i++) {
    // Make a bunch of paragraphs
    var txt = createP(data[i]);
    txt.position(5,20*i+20);
  }
}


