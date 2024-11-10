/*

defangjs v1.0.7

@Repository: https://github.com/edoardottt/defangjs

@Author: edoardottt, https://edoardottt.com

@License: https://github.com/edoardottt/defangjs/blob/main/LICENSE

npm test OR node test.js

*/

var defangjs = require('./index.js');


console.log("[ HTTPS:// ]:      " + defangjs.Url("https://github.com/edoardottt/defangjs") + "\n");

console.log("[ HTTPS:// ]:      " + defangjs.Url("https://edoardottt.com") + "\n");

console.log("[ HTTPS:// ]:      " + defangjs.Url("https://very.bad.url.com:666/") + "\n");

console.log("[ HTTP:// ]:       " + defangjs.Url("http://github.com/edoardottt/defangjs") + "\n");

console.log("[ HTTP:// ]:       " + defangjs.Url("http://edoardottt.com") + "\n");

console.log("[ HTTP:// ]:       " + defangjs.Url("http://very.bad.url.com:666/") + "\n");

console.log("[ FTP:// ]:        " + defangjs.Url("ftp://github.com/edoardottt/defangjs") + "\n");

console.log("[ FTP:// ]:        " + defangjs.Url("ftp://edoardottt.com") + "\n");

console.log("[ FTP:// ]:        " + defangjs.Url("ftp://very.bad.url.com:666/") + "\n");

console.log("[ FILE:// ]:       " + defangjs.Url("file:///etc/hosts") + "\n");

console.log("[ :// ]:           " + defangjs.Url("://github.com/edoardottt/defangjs") + "\n");

console.log("[ :// ]:           " + defangjs.Url("://edoardottt.com") + "\n");

console.log("[ :// ]:           " + defangjs.Url("://very.bad.url.com:666/") + "\n");

console.log("[ // ]:            " + defangjs.Url("//github.com/edoardottt/defangjs") + "\n");

console.log("[ // ]:            " + defangjs.Url("//edoardottt.com") + "\n");

console.log("[ // ]:            " + defangjs.Url("//very.bad.url.com:666/") + "\n");

console.log("[ NO PROTOCOL ]:   " + defangjs.Url("github.com/edoardottt/defangjs") + "\n");

console.log("[ NO PROTOCOL ]:   " + defangjs.Url("edoardottt.com") + "\n");

console.log("[ NO PROTOCOL ]:   " + defangjs.Url("very.bad.url.com:666/") + "\n");

console.log("[ IPv4 ]:          " + defangjs.Ip("8.8.8.8") + "\n");

console.log("[ SHORT IPv4 ]:    " + defangjs.Ip("127.1") + "\n");

console.log("[ IPv4 ]:          " + defangjs.Ip("8.8.8.8:53") + "\n");

console.log("[ SHORT IPv4 ]:    " + defangjs.Ip("127.1:80") + "\n");

console.log("[ IPv6 ]:          " + defangjs.Ip("2001:0db8:85a3:0000:0000:8a2e:0370:7334") + "\n");

console.log("[ SHORT IPv6 ]:    " + defangjs.Ip("2001:0db8:85a3::8a2e:0370:7334") + "\n");

console.log("[ IPv6 ]:          " + defangjs.Ip("[2001:0db8:85a3:0000:0000:8a2e:0370:7334]:8080") + "\n");

console.log("[ SHORT IPv6 ]:    " + defangjs.Ip("[2001:0db8:85a3::8a2e:0370:7334]:8080") + "\n");

console.log("[ EMAIL ]:         " + defangjs.Email("edoardott@gmail.com") + "\n");

console.log("[ EMAIL ]:         " + defangjs.Email("mailto:edoardott@gmail.com") + "\n");
