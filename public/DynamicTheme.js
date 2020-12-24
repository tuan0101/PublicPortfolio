let theme = localStorage.getItem('theme')
console.log('its working');
if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}


let themeDots;

document.addEventListener('DOMContentLoaded', function() {
    themeDots = document.getElementsByClassName('theme-dot');
    console.log(themeDots.length);
    for (var i=0; themeDots.length > i; i++){
        themeDots[i].addEventListener('click', function(){
            let mode = this.dataset.mode
            // console.log('Option clicked:', mode)
            setTheme(mode)
        })
    }
  });



function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = '/css/default.css'
	}

	if(mode == 'blue'){
        console.log('blue');
        document.getElementById('theme-style').href = '/css/blue.css'
        console.log('object', document.getElementById('theme-style'));
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = '/css/green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = '/css/purple.css'
	}

	// localStorage.setItem('theme', mode)
}