const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

$("#choice1").on("click", function(){
    window.location = window.location.origin + window.location.pathname.replace("graffitiartist3", "itsthefinalcountdown") + window.location.search.toString().split("&")[0] + "a&c=" +  urlParams.get("c") 
});

$("#choice2").on("click", function(){
    window.location = window.location.origin + window.location.pathname.replace("graffitiartist3", "itsthefinalcountdown") + window.location.search.toString().split("&")[0] + "b&c=" +  urlParams.get("c")
});