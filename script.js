//your code here
let btn=document.querySelector("#swap");
let container=document.querySelector("#app")
let current=true
btn.addEventListener("click", (e)=>{
	if(current){
		container.style.backgroundColor="black"
		current=false
	}
	else{
		container.style.backgroundColor="white";
		current=true;
	}
})

