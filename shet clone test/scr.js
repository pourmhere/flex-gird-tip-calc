let c = document.getElementById("c")


let rheadcnt = 26

for (let i = 1; i <= rheadcnt.length; i++) {
    let rhead = document.createElement("div")
    rhead.className = "head cell"
    rhead.innerText = String.fromCharCode(i + 64)
    c.append(rhead)
}




for (let col = 1; col < 20; col++) {
    let colhead = document.createElement("div")
    colhead.className = "head cell"
    colhead.innerText = col
    c.append(colhead)

}