/*

defangjs v1.0.0

@Repository: https://github.com/edoardottt/defangjs

@Author: edoardottt, https://www.edoardoottavianelli.it

npm test OR node test.js

*/

var defangjs = require('./index.js');


console.log("[ HTTPS:// ]:      " + defangjs.defangUrl("https://github.com/edoardottt/defangjs") + "\n")

console.log("[ HTTPS:// ]:      " + defangjs.defangUrl("https://www.edoardoottavianelli.it") + "\n")

console.log("[ HTTP:// ]:       " + defangjs.defangUrl("http://github.com/edoardottt/defangjs") + "\n")

console.log("[ HTTP:// ]:       " + defangjs.defangUrl("http://www.edoardoottavianelli.it") + "\n")

console.log("[ FTP:// ]:        " + defangjs.defangUrl("ftp://github.com/edoardottt/defangjs") + "\n")

console.log("[ FTP:// ]:        " + defangjs.defangUrl("ftp://www.edoardoottavianelli.it") + "\n")

console.log("[ :// ]:           " + defangjs.defangUrl("://github.com/edoardottt/defangjs") + "\n")

console.log("[ :// ]:           " + defangjs.defangUrl("://www.edoardoottavianelli.it") + "\n")

console.log("[ // ]:            " + defangjs.defangUrl("//github.com/edoardottt/defangjs") + "\n")

console.log("[ // ]:            " + defangjs.defangUrl("//www.edoardoottavianelli.it") + "\n")

console.log("[ NO PROTOCOL ]:   " + defangjs.defangUrl("github.com/edoardottt/defangjs") + "\n")

console.log("[ NO PROTOCOL ]:   " + defangjs.defangUrl("www.edoardoottavianelli.it") + "\n")

console.log("[ IPv4 ]:          " + defangjs.defangIp("8.8.8.8") + "\n");

console.log("[ SHORT IPv4 ]:    " + defangjs.defangIp("127.1") + "\n");

console.log("[ IPv6 ]:          " + defangjs.defangIp("2001:0db8:85a3:0000:0000:8a2e:0370:7334") + "\n");

console.log("[ SHORT IPv6 ]:    " + defangjs.defangIp("2001:0db8:85a3::8a2e:0370:7334") + "\n");