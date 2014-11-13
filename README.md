p5.js workshop, EDP 
=============================

Thursday, Nov 13, 2014

The network is one of our most fundamental mediums for interactivity. It makes possible our interaction with machines, data, and, most importantly, other people. Though the base interaction it supports is simple, a client sends a request to a server, which replies; an incredible variety of systems can be and have been built on top of it. In this wokrshop, students will utilize JavaScript as both a client and server side programming language to build creative network systems. Additionally, HTML and CSS will be used to define the structure and look. 

### Getting Started

#### Some things you'll need / want
* [Github student developer pack](https://education.github.com/pack) - includes Digital Ocean $100 credit and more.
* Grab the p5.js editor.  This will get you up and running instantly.  This is a very new project and there are likely many bugs.  Help by contributing suggestions and bug reports!
* You can also download a code editor like [TextWrangler](http://www.barebones.com/products/textwrangler/) or [Sublime Text](http://www.sublimetext.com/).
* Getting familiar with the command line is useful. Nothing too fancy; just the basics. Take a look at the commands `ls`, `cd`, and `mkdir`. [Basic unix commands](http://www.webmonkey.com/2010/02/learn_enough_unix_for_your_resume/#Basic_Commands).

#### HTML and CSS
  * [Intro to HTML and CSS](https://github.com/lmccart/p5.js/wiki/Intro-to-HTML-and-CSS)
  * [Another Intro to HTML](https://github.com/robynitp/networkedmedia/wiki/Intro-to-HTML)
  * [Another Intro to CSS](https://github.com/robynitp/networkedmedia/wiki/Intro-to-CSS)


### JavaScript basics
* [Intro to JS basics](https://github.com/lmccart/p5.js/wiki/JavaScript-basics)
* Intro to [p5.js](http://p5js.org) and canvas
  * [Download p5.js](http://p5js.org/download/). The download comes with a copy of p5.js, you can also use a statically hosted version from the [CDN](http://cdnjs.com/libraries/p5.js), more info on that [here](http://p5js.org/get-started/#file-setup).
  * [Getting started with p5.js](http://p5js.org/get-started/)
  * [Processing <> p5.js transition](https://github.com/lmccart/p5.js/wiki/Processing-transition)
  * If you aren't using the p5.js edtior, you'll need to run a [local web server with python or apache](https://github.com/lmccart/p5.js/wiki/Local-server). 

### DOM Manipulation
* [Intro to DOM manipulation and events](https://github.com/lmccart/p5.js/wiki/Intro-to-DOM-manipulation-and-events) - Use JS to manipulate the HTML page and make it react to events (mouse, keyboard, touch, page load). 
  * [Reference for all DOM events](https://developer.mozilla.org/en-US/docs/Web/Events)
  * [DOM manipulation with no libraries examples](https://github.com/shiffman/itp-networked-media/tree/master/week3/02_dom_pure_js)
* [Tutorial: p5.dom library](https://github.com/lmccart/p5.js/wiki/Beyond-the-canvas) - You can also use the p5.dom library to handle HTML manipulation and events.
  * [p5.dom.js reference](http://p5js.org/reference/#/libraries/p5.dom)
  * [p5.dom.js examples](https://github.com/shiffman/itp-networked-media/tree/master/week3/04_dom_p5)

### APIs and Callbacks
* [Web services: AJAX and JSON](https://github.com/lmccart/p5.js/wiki/Loading-external-files:-AJAX,-XML,-JSON)

### Server side programming?
* Download [servi](https://github.com/antiboredom/servi.js/releases).
* [Tutorial: Setting up a web server with Servi](https://github.com/robynitp/networkedmedia/wiki/Web-Servers-with-Servi) - Create a basic file server using these instructions.

* Deployment
  * Sign up for Digital Ocean, try the [Github student developer pack](https://education.github.com/pack).
  * Download an FTP client like [Cyberduck](https://cyberduck.io/?l=en), [Filezilla](https://filezilla-project.org/), [Fetch - mac only](http://fetchsoftworks.com/), etc.
  * [Tutorial: Digital Ocean setup](https://github.com/robynitp/networkedmedia/wiki/Digital-Ocean-Set-up) - Follow the steps to create an account, a new droplet, and connect with Cyberduck.
  * Upload your files to your Digital Ocean account via Cyberduck.
  * [Tutorial: installing forever](http://www.hacksparrow.com/keep-node-js-script-running-after-logging-out-from-shell.html) - The default behavior of Node is to kill the script when you log out of ssh or quit Terminal. That's fine for short-term use, but to keep your web site up and persistent, install forever.
  * [Setting up a servi.js project without the servi IDE](https://github.com/antiboredom/servi.js/wiki/Setting-up-a-servi.js-project-without-the-servi-editor)

## Resources

### p5.js
* [p5.js reference](http://p5js.org/reference)
* [p5.js forum](http://forum.processing.org/two/)
* [p5.js on GitHub](https://github.com/lmccart/p5.js)
* [p5.js CDN](http://cdnjs.com/libraries/p5.js)

### Servi.js
* [servi.js documentation](https://github.com/antiboredom/servi.js/wiki)

### JS Learning / Intro
* [CodeAcademy: JavaScript](http://www.codecademy.com/tracks/javascript)
* [How to learn JavaScript properly](http://javascriptissexy.com/how-to-learn-javascript-properly/)
* [JavaScript the right way](http://www.jstherightway.org/)
* [Code School](https://www.codeschool.com/paths/javascript)
* [JavaScript garden](http://bonsaiden.github.io/JavaScript-Garden/)
* [A re-introduction to JS by Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
* [JavaScript 101 from JQuery](https://learn.jquery.com/javascript-101/)
* [JavaScript: The Definitive Guide](http://shop.oreilly.com/product/9780596000486.do)
* [Eloquent JavaScript](http://eloquentjavascript.net/contents.html), Marijn Haverbeke
* [Beginning JavaScript](http://www.amazon.com/Beginning-JavaScript-Paul-Wilton/dp/0470525932), Paul Wilton and Jeremy McPeak
* [HTML & CSS book](http://www.htmlandcssbook.com/)
* [JavaScript book](http://www.javascriptbook.com/)

### Tools
* [Github student developer pack](https://education.github.com/pack) - includes Digital Ocean $100 credit and more!
* Checking code: [JSLint](http://www.jslint.com/) / [JSHint](http://www.jshint.com)
* Browser debugging: Chrome Developer Tools ([tutorial](https://developer.chrome.com/extensions/tut_debugging)) / Firebug ([tutorial](http://www.developerfusion.com/article/139949/debugging-javascript-with-firebug/))
* Mobile debugging [http://jsconsole.com](http://jsconsole.com)
* Sharing code snippets (useful for asking questions): [http://gist.github.com](http://gist.github.com)
