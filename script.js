


const frame1 = document.getElementById("frame1")
const frame2 = document.getElementById("frame2")
const road =document.getElementById("road")
const popup = document.getElementById("popup")
const info = document.getElementById("info")
const car = document.getElementById("car")
console.log(car.offsetTop);



for(let i =0;i<60;i++){
    const child1 = document.createElement("div");
            child1.classList.add("child1");
            child1.style.backgroundColor = `rgb(0,${Math.floor(Math.random() * 20)},0)`
            frame1.children[0].before(child1)
        
            const child2 = document.createElement("div");
            child2.classList.add("child2");
            child2.style.backgroundColor = `rgb(0,${Math.floor(Math.random() * 20)},0)`
            frame2.children[0].before(child2)
}

let speedX = 100;
let speed = 20;
let animation = false;
let point = 0;





const positionArray = []


function drive(){

    


    if(speedX % speed == 0){
        if(animation){

            const child1 = document.createElement("div");
            child1.classList.add("child1");
            child1.style.backgroundColor = `rgb(0,${Math.floor(Math.random() * 20)},0)`
            frame1.children[0].before(child1)
        
            const child2 = document.createElement("div");
            child2.classList.add("child2");
            child2.style.backgroundColor = `rgb(0,${Math.floor(Math.random() * 20)},0)`
            frame2.children[0].before(child2)
        
            let x = Math.floor(Math.random() * 20);
           
            if((x ==0)){
                const money = document.createElement("div");
                money.classList.add("money");
                money.style.backgroundColor = `rgb(${100 + Math.floor(Math.random() * 155)},${100 + Math.floor(Math.random() * 155)},${100 + Math.floor(Math.random() * 155)})`;
                money.style.borderRadius = "50%"
                money.style.left = `${Math.floor(Math.random() * 90) }%`;
              
                road.children[0].before(money) 
                const position = [] 
                position[0] = money.offsetLeft;
                position[1] = money.offsetTop;
                positionArray.unshift(position)
                
               
               
            }
            else{
                const roadMove = document.createElement("div");
                roadMove.style.width = "100%";
                roadMove.style.height = "10px";
                
                road.children[0].before(roadMove)
                    
            } 
            for(let i=0;i<positionArray.length;i++){
                positionArray[i][1] +=10;
                if(positionArray[positionArray.length-1][1]>500){
                    positionArray.pop()}
                   
        }
       
if(positionArray.length !=0){
    // console.log(positionArray[positionArray.length-1][1])
    for(let i=0;i<positionArray.length;i++){
        if(((positionArray[i][1] >= (car.offsetTop- 5))&&(positionArray[i][1] <= (car.offsetTop+5)))&&((positionArray[i][0] >= (car.offsetLeft-20))&&(positionArray[i][0] <= (car.offsetLeft+20)))){
            point++
            info.children[1].innerHTML = point
        }
    
   
    }
}
    

     
        }
        

    }
  
    // console.log(positionArray[positionArray.length - 1]);

    speedX++
        requestAnimationFrame(drive)
    }

    requestAnimationFrame(drive)

   



document.addEventListener("keydown", (e)=>{

    if(e.key == "ArrowLeft"){

        if(car.offsetLeft >= 40){

            car.style.left = `${car.offsetLeft - 20}px`;
            // carLeft = car.offsetLeft - 20;
            // console.log("esas-:", car.offsetLeft)
            // console.log("top:", car.offsetTop)
        }
        else{
            car.style.left = `${0}px`;
        }
      
    }
    if((e.key == "ArrowRight")&&(car.offsetLeft < 400)){
        car.style.left = `${car.offsetLeft + 20}px`;
        // carLeft = car.offsetLeft + 20;
        
        // console.log("top:", car.offsetTop)
    }


})

document.addEventListener("keydown", (e) => {
    if (e.key == "ArrowUp") {
        console.log(speed)
       if(speed > 2){
        speed --
       }
       else{
        speed = 1;
       }


    }
    if (e.key == "ArrowDown") {
        console.log(speed)
        if(speed<60){
            speed ++;
        }
        else{
            speed = 60
        }
      


    }
    if (e.key == " ") {
       if(animation == false){
        popup.style.display = "none"
        animation = true
       }else{
        animation = false;
        popup.style.display = "flex"
       }


    }

})

// if(positionArray[positionArray.length-1][1]>1000){
//     positionArray.pop()
// }

for(let i=0;i<positionArray.length;i++){
   
 
}

