<h1 align="center">
  <b>defangjs</b>
</h1>
<p align="center">
  <b>URL / IP / Email defanging with Javascript</b><br>
  <a href="https://www.npmjs.com/package/defangjs"><img src="https://github.com/edoardottt/images/blob/main/defangjs/npm.svg"></a>
  <a href="https://www.npmjs.com/package/defangjs"><img src="https://github.com/edoardottt/images/blob/main/defangjs/ipv6.svg"></a>
  <a href="https://www.npmjs.com/package/defangjs"><img src="https://github.com/edoardottt/images/blob/main/defangjs/dependencies.svg"></a>
  <br>
  <a href="https://github.com/edoardottt/defangjs/blob/main/LICENSE"><img src="https://github.com/edoardottt/images/blob/main/defangjs/license.svg"></a>
  <a href="https://runkit.com/edoardottt/runkit-npm-defangjs"><img src="https://github.com/edoardottt/images/blob/main/defangjs/runkit.svg"></a>
<br>
  <sub>Coded with 💙 by edoardottt</sub>
</p>

Defanging is the process where URLs, IPs, and email addresses no longer become effective (or clickable if you want). Why? Links can be used for phishing or it's simply safer to display them in a weakened way if they are malicious resources (eg. Indicators of compromise for a malware).

- [Blocking Email Links: Why we use HXXP in emails](https://privacymatters.ubc.ca/blocking-email-links-why-we-use-hxxp-emails)
- [Email Security – Defanging URLs](https://www.ibm.com/docs/en/sqsp/32.0?topic=SSBRUQ_32.0.0/com.ibm.resilient.doc/install/resilient_install_defangURLs.htm)

Install ⬇️
------

```console
npm install defangjs@latest
```

Usage 🚀
-------

```Javascript
var defangjs = require('defangjs');

var url = 'https://edoardottt.com/index.html';
console.log(defangjs.Url(url)); 
// hxxps[://]edoardottt[.]com/index.html

var maliciousIpv4 = '666.666.666.666';
console.log(defangjs.Ip(maliciousIpv4)); 
// 666[.]666[.]666[.]666

var maliciousIpv6 = '2001:0db8:85a3:0000:0000:8a2e:0370:7334';
console.log(defangjs.Ip(maliciousIpv6));
// 2001[:]0db8[:]85a3[:]0000[:]0000[:]8a2e[:]0370[:]7334

var maliciousEmail = 'mailto:edoardott@gmail.com';
console.log(defangjs.Email(maliciousEmail));
// mailto[:]edoardott@gmail[.]com
```

Test 🧑‍🏭
-------

```console
npm test
```

Take a look to [test.js](https://github.com/edoardottt/defangjs/blob/main/test.js), this file contains all the supported formats (URLs, various protocols, ports, Ipv4 and Ipv6 and email addresses)

Changelog 📌
-------

Detailed changes for each release are documented in the [release notes](https://github.com/edoardottt/defangjs/releases).

Contributing 🤝
------

If you want to contribute to this project, you can start opening an [issue](https://github.com/edoardottt/defangjs/issues).

License 📝
-------

This repository is under [GNU General Public License v3.0](https://github.com/edoardottt/defangjs/blob/main/LICENSE).  
[edoardottt.com](https://edoardottt.com) to contact me.
