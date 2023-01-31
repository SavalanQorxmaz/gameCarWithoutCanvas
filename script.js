


const frame = document.getElementById("frame")

console.log(frame.children[0])

setInterval(()=>{


    const child = document.createElement("div");
    child.classList.add("child");
    child.style.backgroundColor = `rgb(${200 + Math.floor(Math.random() * 55)},${200 + Math.floor(Math.random() * 55)},${200 + Math.floor(Math.random() * 55)})`
    // console.log(child)
    frame.children[0].before(child)


}, 200)