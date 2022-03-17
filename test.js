/*

defangjs v1.0.4

@Repository: https://github.com/edoardottt/defangjs

@Author: edoardottt, https://www.edoardoottavianelli.it

@License: https://github.com/edoardottt/defangjs/blob/main/LICENSE

npm test OR node test.js

*/

var defangjs = require('./index.js');


console.log("[ HTTPS:// ]:      " + defangjs.defangUrl("https://github.com/edoardottt/defangjs") + "\n");

console.log("[ HTTPS:// ]:      " + defangjs.defangUrl("https://www.edoardoottavianelli.it") + "\n");

console.log("[ HTTPS:// ]:      " + defangjs.defangUrl("https://very.bad.url.com:666/") + "\n");

console.log("[ HTTP:// ]:       " + defangjs.defangUrl("http://github.com/edoardottt/defangjs") + "\n");

console.log("[ HTTP:// ]:       " + defangjs.defangUrl("http://www.edoardoottavianelli.it") + "\n");

console.log("[ HTTP:// ]:       " + defangjs.defangUrl("http://very.bad.url.com:666/") + "\n");

console.log("[ FTP:// ]:        " + defangjs.defangUrl("ftp://github.com/edoardottt/defangjs") + "\n");

console.log("[ FTP:// ]:        " + defangjs.defangUrl("ftp://www.edoardoottavianelli.it") + "\n");

console.log("[ FTP:// ]:        " + defangjs.defangUrl("ftp://very.bad.url.com:666/") + "\n");

console.log("[ :// ]:           " + defangjs.defangUrl("://github.com/edoardottt/defangjs") + "\n");

console.log("[ :// ]:           " + defangjs.defangUrl("://www.edoardoottavianelli.it") + "\n");

console.log("[ :// ]:           " + defangjs.defangUrl("://very.bad.url.com:666/") + "\n");

console.log("[ // ]:            " + defangjs.defangUrl("//github.com/edoardottt/defangjs") + "\n");

console.log("[ // ]:            " + defangjs.defangUrl("//www.edoardoottavianelli.it") + "\n");

console.log("[ // ]:            " + defangjs.defangUrl("//very.bad.url.com:666/") + "\n");

console.log("[ NO PROTOCOL ]:   " + defangjs.defangUrl("github.com/edoardottt/defangjs") + "\n");

console.log("[ NO PROTOCOL ]:   " + defangjs.defangUrl("www.edoardoottavianelli.it") + "\n");

console.log("[ NO PROTOCOL ]:   " + defangjs.defangUrl("very.bad.url.com:666/") + "\n");

console.log("[ IPv4 ]:          " + defangjs.defangIp("8.8.8.8") + "\n");

console.log("[ SHORT IPv4 ]:    " + defangjs.defangIp("127.1") + "\n");

console.log("[ IPv4 ]:          " + defangjs.defangIp("8.8.8.8:53") + "\n");

console.log("[ SHORT IPv4 ]:    " + defangjs.defangIp("127.1:80") + "\n");

console.log("[ IPv6 ]:          " + defangjs.defangIp("2001:0db8:85a3:0000:0000:8a2e:0370:7334") + "\n");

console.log("[ SHORT IPv6 ]:    " + defangjs.defangIp("2001:0db8:85a3::8a2e:0370:7334") + "\n");

console.log("[ IPv6 ]:          " + defangjs.defangIp("[2001:0db8:85a3:0000:0000:8a2e:0370:7334]:8080") + "\n");

console.log("[ SHORT IPv6 ]:    " + defangjs.defangIp("[2001:0db8:85a3::8a2e:0370:7334]:8080") + "\n");

console.log("[ EMAIL ]:         " + defangjs.defangEmail("edoardott@gmail.com") + "\n");

console.log("[ EMAIL ]:         " + defangjs.defangEmail("mailto:edoardott@gmail.com") + "\n");
