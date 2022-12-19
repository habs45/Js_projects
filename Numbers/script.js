

const cnt1 = document.getElementById("cn1");
const cnt2 = document.getElementById("cn2");
const cnt3 = document.getElementById('cn3')

let int = setInterval(() => {
    if (cnt1.textContent == 500) {
        cnt1.textContent = "500"
        clearInterval(int)
        return
    }
    cnt1.textContent = new Number(cnt1.textContent) + 2
}, 1)

let p = setInterval(() => {
    if (cnt2.textContent == 17150) {
        cnt2.textContent = "17150"
        clearInterval(p)
        return
    }
    cnt2.textContent = new Number(cnt2.textContent) + 50
}, 1)

let k = setInterval(() => {
    if (cnt3.textContent == 1500) {
        cnt3.textContent = "1500"
        clearInterval(k)
        return
    }
    cnt3.textContent = new Number(cnt3.textContent) + 5
}, 1)




