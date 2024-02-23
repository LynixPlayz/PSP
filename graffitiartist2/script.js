const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);


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

function getStagePathName()
{
    if(window.origin.includes('github'))
    {
        return "/" + window.location.pathname.toString().split("/")[2] + "/" + window.location.pathname.toString().split("/")[3]
    }
    else
    {
        return window.location.pathname
    }
}

$("#choice1").on("click", function(){
    window.location = getStartOfUrl() + getStagePathName().replace("2", "3") + window.location.search.toString().split("&")[0] + "a&c=" +  urlParams.get("c")
});

$("#choice2").on("click", function(){
    window.location = getStartOfUrl() + getStagePathName().replace("2", "3") + window.location.search.toString().split("&")[0] + "b&c=" + urlParams.get("c")
});