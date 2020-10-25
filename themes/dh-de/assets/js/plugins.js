async function swap(element, to) {
    var i = element.innerHTML.length
    for (; i > 0; i--) {
        await new Promise(r => setTimeout(r, 40));
        element.innerHTML = element.innerHTML.substr(0, i)
    }
    for (; i <= to.length; i++) {
        await new Promise(r => setTimeout(r, 40));
        element.innerHTML = to.substr(0, i)
    }
}


async function startTyping(id, stringList) {
    var i = 0
    var intervalID = setInterval(function () {
        swap(document.getElementById(id), stringList[(i++) % (stringList.length)]);
    }, 3000);
}


const stayTimeout = 1000;

const typeDelay = 50;

function setDirection(element) {
    if (element.clientWidth < element.scrollWidth) {
        element.dir = 'rtl'
    } else {
        element.dir = 'ltr'
    }
}

async function insertInputTemporary(element, stringList, index) {
    const to = stringList[index]+"‎" //Not empty! There is a &lrm; (U+200E) inside!
    var i = element.value.length

    for (; i <= to.length; i++) {
        await new Promise(r => setTimeout(r, typeDelay));
        element.value = to.substr(0, i)
        setDirection(element);
    }
    await new Promise(r => setTimeout(r, stayTimeout));
    for (; i >= 0; i--) {
        await new Promise(r => setTimeout(r, typeDelay));
        element.value = element.value.substr(0, i)
        setDirection(element)
    }
    await new Promise(r => setTimeout(r, stayTimeout));
    insertInputTemporary(element, stringList, (++index) % (stringList.length))
}


async function startTypingSearchField(id, stringList) {
    await insertInputTemporary(document.getElementById(id), stringList, Math.floor(Math.random() * stringList.length))
}