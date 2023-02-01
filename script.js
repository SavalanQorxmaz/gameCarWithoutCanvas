


const frame1 = document.getElementById("frame1")
const frame2 = document.getElementById("frame2")
const road =document.getElementById("road")
// const car = document.getElementById("car")

console.log(frame1.children[0])

let speedX = 100
let animation = false;


let speed = 20


document.addEventListener("keydown", (e) => {



    if (e.key == "ArrowUp") {
       if(speed > 3){
        speed -=1
       }
       else{
        speed = 1;
       }



    }
    if (e.key == "ArrowDown") {
        if(speed<50){
            speed += 1;
        }
        else{
            speed = 50
        }
      


    }
    if (e.key == " ") {
       if(animation == false){
        animation = true
       }else{
        animation = false
       }


    }

})


function drive(){



speedX++
    if(speedX % speed == 0){
        if(animation){

            const child1 = document.createElement("div");
            child1.classList.add("child1");
            child1.style.backgroundColor = `rgb(${200 + Math.floor(Math.random() * 55)},${200 + Math.floor(Math.random() * 55)},${200 + Math.floor(Math.random() * 55)})`
            frame1.children[0].before(child1)
        
            const child2 = document.createElement("div");
            child2.classList.add("child2");
            child2.style.backgroundColor = `rgb(${200 + Math.floor(Math.random() * 55)},${200 + Math.floor(Math.random() * 55)},${200 + Math.floor(Math.random() * 55)})`
            frame2.children[0].before(child2)
        
            let x = Math.floor(Math.random() * 10);
        
            const roadMove = document.createElement("div");
            roadMove.style.width = "100%";
            roadMove.style.height = "10px";
            
            road.children[0].before(roadMove)
        
        
            if((x ==0)){
                const car = document.createElement("div");
                car.classList.add("car");
                car.style.backgroundColor = `rgb(${200 + Math.floor(Math.random() * 55)},${200 + Math.floor(Math.random() * 55)},${200 + Math.floor(Math.random() * 55)})`;
                car.style.left = `${Math.floor(Math.random() * 90) }%`;
                
                road.children[0].before(car)      
        
            }
        
        }

    }




       

        requestAnimationFrame(drive)
    }

    requestAnimationFrame(drive)

   



document.addEventListener("keydown", (e)=>{

    if((e.key == "ArrowLeft")&&(car.offsetLeft >= 0)){

        car.style.left = `${car.offsetLeft - 20}px`;
      
    }
    if((e.key == "ArrowRight")&&(car.offsetLeft <= 400)){
        car.style.left = `${car.offsetLeft +20}px`
    }


})


