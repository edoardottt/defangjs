var defangjs = require('./index.js');

console.log(defangjs.defangUrl("https://github.com/edoardottt/defangjs") + "\n")

console.log(defangjs.defangUrl("https://www.edoardoottavianelli.it") + "\n")

console.log(defangjs.defangUrl("http://github.com/edoardottt/defangjs") + "\n")

console.log(defangjs.defangUrl("http://www.edoardoottavianelli.it") + "\n")

console.log(defangjs.defangUrl("ftp://github.com/edoardottt/defangjs") + "\n")

console.log(defangjs.defangUrl("ftp://www.edoardoottavianelli.it") + "\n")

console.log(defangjs.defangIp("8.8.8.8") + "\n");

console.log(defangjs.defangIp("8.8") + "\n");