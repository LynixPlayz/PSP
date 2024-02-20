const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

$("#choice1").on("click", function(){
    window.location = location.origin + "/" + urlParams.get('c') + "1" + "/index.html"
});

function type(txt, milliseconds, elementId)
{
    console.log(txt)
    if(txt == "")
    {
        console.log($("#" + elementId).html())
        typeInternal(0, $("#" + elementId).html(), milliseconds, elementId, function(){
            console.error("wat")
            $("#choice1").removeAttr("disabled")
        })
        
        return;
    }
    typeInternal(0, txt, milliseconds, elementId, function(){
        console.error("wat")
        $("#choice1").removeAttr("disabled")
    })
}

function typeInternal(i, txt, milliseconds, elementId, finishFunction = function(){})
{
    console.log(finishFunction)
    txtDivided = txt.substring(0, i)
    //console.log(txtDivided)
    $("#" + elementId).html(txtDivided)
    //console.log($("#" + elementId).html())
    if(i < txt.length)
    {
        //console.log(txt.length + "          " + i)
        setTimeout(function(){typeInternal(i + (txt.length / (milliseconds / (milliseconds / txt.length))), txt, milliseconds, elementId, finishFunction)}, (milliseconds / txt.length))
    }
    else
    {
        console.warn(finishFunction)
        finishFunction();
    }
}

type("", 1000, "typewriter")