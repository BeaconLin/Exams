function reverseLowerUpper(string) {
    var newStr = ''
    for (var i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
            newStr += string.charAt(i).toLowerCase()
        }
        if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
            newStr += string.charAt(i).toUpperCase()
        }
    }
    return newStr
}


console.log(reverseLowerUpper('AbC'))
console.log(reverseLowerUpper('zzA'))