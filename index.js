/*

defangjs v1.0.4

@Repository: https://github.com/edoardottt/defangjs

@Author: edoardottt, https://www.edoardoottavianelli.it

@License: https://github.com/edoardottt/defangjs/blob/main/LICENSE

*/

//Regular expression (global) matching a dot.
const reDot = /\./g;

//Regular expression (global) matching a colon.
//This is useful for the port.
const reColon = /\:/g;

//Regular expression (global) matching a defanged double colon.
//This is useful for Ipv6.
const reDoubleColon = /\:\:/g;

/*
* Defang a url.
* For security reasons, if the url is not formatted in
* a proper way the result is an empty string.
* @param  {string} input: The url you want to defang.
* @return {string} The input url defanged.
*/
exports.defangUrl = function (input) {
	var result = "";

	// - http://   -->   hxxp[://]
	if (input.substring(0, 7) == "http://") {
		result = helperHttp(input);
	}

	// - https://   -->   hxxps[://]
	if (input.substring(0, 8) == "https://") {
		result = helperHttps(input);
	}

	// - ftp://   -->   fxp[://]
	if (input.substring(0, 6) == "ftp://") {
		result = helperFtp(input);
	}

	// no protocol
	if (result == "") {
		result = helperNoProtocol(input);
	}

	// then check if result is different from "" !
	return result;
}

/*
* Defang a HTTP url (internal).
* @param  {string} input: The HTTP url you want to defang.
* @return {string} The input HTTP url defanged.
*/
function helperHttp(input) {
	var result = "hxxp[://]";
	var endDomain = input.indexOf('/', 7);
	if (endDomain != -1) {
		result += input.substring(7, endDomain).replace(reDot, '[.]').replace(reColon, '[:]');
		result += input.substring(endDomain);
	} else {
		result += input.substring(7).replace(reDot, '[.]').replace(reColon, '[:]');
	}
	return result;
}

/*
* Defang a HTTPS url (internal).
* @param  {string} input: The HTTPS url you want to defang.
* @return {string} The input HTTPS url defanged.
*/
function helperHttps(input) {
	var result = "hxxps[://]"
	var endDomain = input.indexOf('/', 8)
	if (endDomain != -1) {
		result += input.substring(8, endDomain).replace(reDot, '[.]').replace(reColon, '[:]');
		result += input.substring(endDomain)
	} else {
		result += input.substring(8).replace(reDot, '[.]').replace(reColon, '[:]');
	}
	return result
}

/*
* Defang a FTP url (internal).
* @param  {string} input: The FTP url you want to defang.
* @return {string} The input FTP url defanged.
*/
function helperFtp(input) {
	var result = "fxp[://]";
	var endDomain = input.indexOf('/', 6);
	if (endDomain != -1) {
		result += input.substring(6, endDomain).replace(reDot, '[.]').replace(reColon, '[:]');
		result += input.substring(endDomain);
	} else {
		result += input.substring(6).replace(reDot, '[.]').replace(reColon, '[:]');
	}
	return result;
}

/*
* Defang a url without protocol (internal).
* @param  {string} input: The url you want to defang.
* @return {string} The input url defanged.
*/
function helperNoProtocol(input) {
	var result = "";

	if (input.substring(0, 3) == "://") {
		result += "[://]";
		var endDomain = input.indexOf('/', 3);
		if (endDomain != -1) {
			result += input.substring(3, endDomain).replace(reDot, '[.]').replace(reColon, '[:]');
			result += input.substring(endDomain);
		} else {
			result += input.substring(3).replace(reDot, '[.]').replace(reColon, '[:]');
		}

	} else if (input.substring(0, 2) == "//") {
		result += "[//]";
		var endDomain = input.indexOf('/', 2);
		if (endDomain != -1) {
			result += input.substring(2, endDomain).replace(reDot, '[.]').replace(reColon, '[:]');
			result += input.substring(endDomain);
		} else {
			result += input.substring(2).replace(reDot, '[.]').replace(reColon, '[:]');
		}

	} else {
		var endDomain = input.indexOf('/', 0);
		if (endDomain != -1) {
			result += input.substring(0, endDomain).replace(reDot, '[.]').replace(reColon, '[:]');
			result += input.substring(endDomain);
		} else {
			result += input.replace(reDot, '[.]').replace(reColon, '[:]');
		}
	}

	return result;
}

/*
* Defang an Ip address.
* Support both IPv4 and IPv6.
* @param  {string} input: The ip you want to defang.
* @return {string} The input ip defanged.
*/
exports.defangIp = function (input) {
	var result = "";
	var doubleColonIndex = input.indexOf("::", 0);

	if (doubleColonIndex != -1) {
		// SHORT IPV6
		result += input.substring(0, doubleColonIndex).replace(reColon, '[:]');
		result += "[::]"
		result += input.substring(doubleColonIndex + 2).replace(reColon, '[:]');
	} else {
		result += input.replace(reDot, '[.]').replace(reColon, '[:]');
	}

	return result;
}

/*
* Defang an email address.
* @param  {string} input: The email you want to defang.
* @return {string} The input email defanged.
*/
exports.defangEmail = function (input) {
	return input.replace(reDot, '[.]').replace(reColon, '[:]');
}
