let S = 0
basic.forever(function () {
    S = 0
    for (let a of [
    15,
    35,
    45,
    55
    ]) {
        if (a != 45) {
            S += a
        }
    }
    basic.showNumber(S)
})
