function changemode(theme){
    var themestyle=document.getElementById('theme-style');
    var darktheme='style_dark.css';
    var lighttheme='style_light.css';
    var personaltheme='style_personal.css';

    if (theme==='light'){
        themestyle.setAttribute('href',lighttheme);
    }
    else if (theme==='dark'){
        themestyle.setAttribute('href',darktheme);
    }
    else if (theme==='personal'){
        themestyle.setAttribute('href',personaltheme);
    }    
}

document.addEventListener('DOMContentLoaded',function(){
    var radiobuttons=document.getElementsByName('theme');
    for(var i=0 ;i<radiobuttons.length;i++){
        radiobuttons[i].addEventListener('change',function(){
            if(this.checked){
                changemode(this.value);
            }
        });
    }
});

var defaulttheme=document.querySelector('input[name="theme"]:checked').value;
changemode(defaulttheme);