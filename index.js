/*

defangjs v1.0.0

@Repository: https://github.com/edoardottt/defangjs

@Author: edoardottt, https://www.edoardoottavianelli.it

*/

const reDot = /\./gm;

/*
 * Defang a url.
 * For security reasons, if the url is not formatted in
 * a proper way the result is an empty string.
 * @param  {string} input: The url you want to defang.
 * @return {string} The input url defanged.
 */
exports.defangUrl = function (input) {
    var result = ""

    // - http://   -->   hxxp[://]
    if (input.substring(0, 7) == "http://") {
        result += "hxxp[://]"
        var endDomain = input.indexOf('/', 7)
        if (endDomain != -1) {
            result += input.substring(7, endDomain).replace(reDot, '[.]')
            result += input.substring(endDomain)
        } else {
            result += input.substring(7).replace(reDot, '[.]')
        }
    }

    // - https://   -->   hxxps[://]
    if (input.substring(0, 8) == "https://") {
        result += "hxxps[://]"
        var endDomain = input.indexOf('/', 8)
        if (endDomain != -1) {
            result += input.substring(8, endDomain).replace(reDot, '[.]')
            result += input.substring(endDomain)
        } else {
            result += input.substring(8).replace(reDot, '[.]')
        }
    }

    // - ftp://   -->   fxp[://]
    if (input.substring(0, 6) == "ftp://") {
        result += "fxp[://]"
        var endDomain = input.indexOf('/', 6)
        if (endDomain != -1) {
            result += input.substring(6, endDomain).replace(reDot, '[.]')
            result += input.substring(endDomain)
        } else {
            result += input.substring(6).replace(reDot, '[.]')
        }
    }

    return result;
}

/*
 * Defang an Ip address.
 * @param  {string} input: The ip you want to defang.
 * @return {string} The input ip defanged.
 */
exports.defangIp = function (input) {
    return input.replace(reDot, '[.]')
}
