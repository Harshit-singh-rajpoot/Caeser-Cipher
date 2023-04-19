function encrypt() {
    var getText = document.getElementById("textarea").value;
    var getKey = parseInt(document.getElementById("key").value);
    var newmsg = " ";
    if (getText != ' ' && getKey != " ") {
        for (var i = 0; i < getText.length; i++) {
            var x = getText.charCodeAt(i) + getKey;
            newmsg = newmsg + String.fromCharCode(x);
        }
    }
    document.getElementById("show").innerHTML = newmsg;
}
function decrypt() {
    var getText = document.getElementById("textarea").value;
    var getKey = parseInt(document.getElementById("key").value);
    var newmsg = " ";
    if (getText != ' ' && getKey != " ") {
        for (var i = 0; i < getText.length; i++) {
            var x = getText.charCodeAt(i) - getKey;
            newmsg = newmsg + String.fromCharCode(x);
        }
    }
    document.getElementById("show").innerHTML = newmsg;
}