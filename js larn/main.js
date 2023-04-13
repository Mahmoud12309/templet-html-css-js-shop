const bar = document.querySelector("#bar"),
nav = document.querySelector("#navbar"),
close = document.querySelector("#close");

bar.addEventListener('click',()=>{
	nav.className="active";
	
});
close.addEventListener('click',()=>{
	nav.classList.remove("active");
	
});