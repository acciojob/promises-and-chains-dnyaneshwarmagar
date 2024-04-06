//your JS code here. If required.
let myForm = document.querySelector("form");
	

myForm.addEventListener("submit",(e)=>{
	e.preventDefault();
	let name = document.getElementById("name").value;
let age = document.getElementById("age").value;

	return new Promise((resolve,reject)=>{
		let msg = ""
		
		if(+age >18 ){
			msg = `Welcome, ${name}. You can vote.`
		}
		else{
			msg = `Oh sorry ${name}. You aren't old enough.`
		}
		
		setTimeout(()=>{resolve(); alert(msg)},4000)
})
})
