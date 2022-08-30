let search = document.getElementById("search");
document.addEventListener("keypress", (e)=>{
    if (e.keyCode == 13){
        let words = search.value.toString().split(' ').join("+");
        let url = "https://www.google.com/search?q="
        window.open(url+words, "_self")
    };
});
