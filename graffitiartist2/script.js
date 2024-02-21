function getStartOfUrl()
{
    if(window.origin.toString().includes("github") && window.location.toString().includes("PSP"))
    {
        return window.origin + "/PSP"
    }
    else if(window.origin.includes('github'))
    {
        return window.origin + "/" + window.location.pathname.toString().split("/")[1]
    }
    else
    {
        return location.origin
    }
}

$("#choice1").on("click", function(){
    window.location = getStartOfUrl() + window.location.pathname.replace("2", "3") + window.location.search + "a" 
});

$("#choice2").on("click", function(){
    window.location = getStartOfUrl() + window.location.pathname.replace("2", "3") + window.location.search + "b"
});