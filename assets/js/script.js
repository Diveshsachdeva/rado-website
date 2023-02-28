var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        icon.name = "sunny";
        icon.classList.remove("moon");
        icon.classList.add("sun");
    }else{
        icon.name = "moon";
        icon.classList.remove("sun");
        icon.classList.add("moon");
    }
}   