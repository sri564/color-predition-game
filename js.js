let yes1=document.querySelector(".yes1")
let yes2=document.querySelector(".yes2")
let yes3=document.querySelector(".yes3")

let yes4=document.querySelector(".yes4")
let yes5=document.querySelector(".yes5")
let yes6=document.querySelector(".yes6")
let number=0;
yes1.addEventListener("click",function(){
    console.log(number=number+1)
})
yes2.addEventListener("click",function(){
    console.log(number=number+2)
})
yes3.addEventListener("click",function(){
    console.log(number=number+3)
})
    
yes4.addEventListener("click",function(){
    console.log(number=number+4)
})
    
    yes5.addEventListener("click",function(){
    console.log(number=number+5)
})

    yes6.addEventListener("click",function(){
    console.log(number=number+6)
})
    let reveal=document.querySelector(".reveal")
    console.log(reveal)
    let box=document.querySelector(".box")
   console.log(box)

    // console.log(number)
   reveal.addEventListener("click",function(){
           if(number==12){
               box.style.backgroundColor="green"
           }
           else if(number==6){
               box.style.backgroundColor="black"
           }
           else if(number==19){
             box.style.backgroundColor="pink"   
           }
           else if(number==14){
               box.style.backgroundColor="yellow"
           }
           else if(number==10){
               box.style.backgroundColor="red"
           }
           else if(number==7){
                box.style.backgroundColor="white"
           }
           else if(number==18){
                box.style.backgroundColor="blue" 
           } 
   })
   let restart=document.querySelector(".restart")
   restart.addEventListener("click",function(){
       box.style.backgroundColor="34495e"
       number=0
   })
   let quit=document.querySelector(".quit")
   let enhance=document.querySelector(".start")
   let thetop=document.querySelector(".up")
   console.log(enhance,thetop)
   enhance.addEventListener("click",function(){
       thetop.classList.add("dis")
       quit.classList.remove("dis")
   })

//    let quit=document.querySelector(".quit")
   quit.addEventListener("click",function(){
       thetop.classList.remove("dis");
       quit.classList.add("dis")
   })