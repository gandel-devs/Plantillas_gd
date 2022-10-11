let client = document.querySelector('.client')
let build = document.querySelector('.build')
let years = document.querySelector('.years')

let count = 0

window.addEventListener("scroll", function () {
    if (count == 0 && this.window.scrollY > 2200) {
        countClients()
        countBuilds()
        countYears()
        count++
    }

})

async function sleep(msec) {
    return new Promise(resolve => setTimeout(resolve, msec));
}

async function countClients() {
    let count = 0;
    while (count <= 2000) {
        if (count >= 1000) {
            let number = Math.trunc(count / 1000);
            client.innerHTML = "+" + number + "k"
            await sleep(10)
        } else {
            client.innerHTML = count;
            await sleep(100)
        }


        count += 100
    }
}

async function countBuilds() {
    let count = 0;
    while (count <= 40) {
        build.innerHTML = count;
        await sleep(100)
        count += 10
    }
}

async function countYears() {
    let count = 0;
    while (count <= 10) {
        years.innerHTML = count + "y";
        await sleep(100)
        count += 1
    }
}



