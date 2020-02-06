async function swap(element, to) {
    var i = element.innerHTML.length
    for (; i > 0; i--) {
        await new Promise(r => setTimeout(r, 30));
        element.innerHTML = element.innerHTML.substr(0, i)
    }
    for (; i <= to.length; i++) {
        await new Promise(r => setTimeout(r, 30));
        element.innerHTML = to.substr(0, i)
    }
}


async function startTyping(id, stringList) {
    var i =0
    var intervalID = setInterval(function(){
        swap(document.getElementById(id),stringList[(i++)%(stringList.length)]);
        }, 3000);
}