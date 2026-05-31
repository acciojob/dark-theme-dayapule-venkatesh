//your code here
function swapTheme(){
let btn=document.querySelector("#swap");
let container=document.querySelector("#app")
	if(btn.className=="button_day"){
		container.className="night";
		btn.className="button_night"
	}
	else{
		container.className="day"
		btn.className="button_day"
	}

	
}
