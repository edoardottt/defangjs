# defangjs
URL/IP defanging with Javascript

- [Blocking Email Links: Why we use HXXP in emails](https://privacymatters.ubc.ca/blocking-email-links-why-we-use-hxxp-emails)
- [Email Security – Defanging URLs](https://www.ibm.com/docs/en/sqsp/32.0?topic=SSBRUQ_32.0.0/com.ibm.resilient.doc/install/resilient_install_defangURLs.htm)

Install ⬇️
------

```bash
npm install defangjs
```

Usage 🚀
-------

```Javascript
var defangjs = require('defangjs');

var url = 'https://www.edoardoottavianelli.it/index.html';

console.log(defangUrl(url)); // --> hxxps[://]www[.]edoardoottavianelli[.]it/index.html

var maliciousIp = '666.666.666.666';

console.log(defangIp(maliciousIp)); // --> 666[.]666[.]666[.]666
```

Contribute 🤝
-------
Open an [issue](https://github.com/edoardottt/defangjs/issues).


License 📝
-------

This repository is under [GNU General Public License v3.0](https://github.com/edoardottt/defangjs/blob/main/LICENSE).  
[edoardoottavianelli.it](https://www.edoardoottavianelli.it) to contact me.
