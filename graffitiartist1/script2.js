const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);


function getStartOfUrl()
{
    if(window.origin.toString().includes("github") && window.location.toString().includes("PSP"))
    {
        return window.origin + "/PSP"
    }
    else if(window.origin.includes('github') && !window.origin.toString().includes("alexpsp-bypassed.github.io"))
    {
        return window.origin + "/" + window.location.pathname.toString().split("/")[1]
    }
    else
    {
        return location.origin
    }
}

$("#choice1").on("click", function(){
    window.location = getStartOfUrl() + "/graffitiartist2/index.html" + "?ch=A&c=" + urlParams.get("c")
});

$("#choice2").on("click", function(){
    window.location = getStartOfUrl() + "/graffitiartist2/index.html" + "?ch=B&c=" + urlParams.get("c")
});