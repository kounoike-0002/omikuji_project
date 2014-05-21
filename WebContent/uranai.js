window.onload = function() {
	var R = Math.random(10)*10;
	if(R >= 8){
		document.getElementById("unse").innerText="大吉";
		document.getElementById("kome").innerText="やったじゃん！";
	}else if(R >= 4){
		document.getElementById("unse").innerText="中吉";
		document.getElementById("kome").innerText="まあ、よかったね";
	}else{
		document.getElementById("unse").innerText="小吉";
		document.getElementById("kome").innerText="ぷっ。どんまい";
	}
}
