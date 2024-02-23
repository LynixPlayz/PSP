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
console.log(getStartOfUrl())

$("#replay").on("click", function(){
    window.location.replace("http://" + window.location.host)
});

function setWinner(winner)
{
    $("#winner").html(winner)
}

function getWinner()
{
    return $("#winner").html()
}

function winnerString(string)
{
    if(string == "graffitiartist")
    {
        return "Graffiti Artist!"
    }
    else if(string == "localresident")
    {
        return "Local Resident!"
    }
    else if(string == "businessguy")
    {
        return "Business Owner!"
    }
    else if(string == "mayor")
    {
        return "Mayor!"
    }
}

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

function setDesc(string)
{
    $("#typewriter").html(string);
}

function setName(string)
{
    $("#eventName").html(string);
}

function getCulimatingEvent(choicesString)
{
    real = choicesString.toLowerCase();

    console.log(real == "aaa")

    if(real == "aaa")
    {
        setName("Unity Unveiled")
        setDesc(`The community-driven graffiti art showcase in designated legal spaces is a resounding success. Unity in Diversity prevails as the neighborhood appreciates both cultural heritage and new artistic expressions. Positive relationships within the community are celebrated.
        Explanation: Choosing Art Training Programs and Collaborating with Graffiti Artists (AAA) reflects a commitment to artistic freedom and engagement with the artistic community. This led to a community-driven showcase that emphasizes unity and appreciation for diverse expressions.`)
        setWinner("Local Resident!")    
    }
    else if (real == "aab")
    {
        setName("Renaissance Reverie")
        setDesc(`An independent exhibition, supported by both Graffiti Artists and Local Residents, becomes a symbol of Artistic Renaissance. Despite strained relationships with Business Owners, the artistic community revels in newfound freedom and creative expression.
        Explanation: Opting for Art Training Programs and Collaborating with Graffiti Artists (AAB) indicates a commitment to preserving artistic freedom and engaging with the artistic community. This choice led to an independent exhibition, symbolizing an artistic renaissance, though with strains in relationships with Business Owners.
        `)
        setWinner("Graffiti Artist!")
    }
    else if (real == "aba")
    {
        setName("Harmonious Business Canvas")
        setDesc(`The Business-Approved Graffiti Art Showcase, showcasing a harmonious blend of graffiti art approved by local businesses, unfolds. Positive outcomes for local businesses are evident, although relationships within the artistic community are somewhat strained due to perceived corporate influence.
        Explanation: Your choice to support Art Training Programs and Collaborate with Local Residents (ABA) reflects a commitment to artistic freedom and community engagement. This led to a Business-Approved Showcase, promoting harmony with local businesses, yet introducing strains within the artistic community due to perceived corporate influence.
        `)
        setWinner("Business Owner!")
    }
    else if (real == "abb")
    {
        setName("City Splendor")
        setDesc(`The City-Wide Graffiti Art Showcase celebrates the Mayor's leadership with positive outcomes for city aesthetics. However, strained relationships emerge within the artistic community due to differing opinions on the controlled nature of the showcase.
        Explanation: Your choice to support both Legal Graffiti Spaces and Community Art Collaboration (ABB) reflects a balanced approach that acknowledges the importance of preserving artistic freedom while also engaging with the local community. This led to a City-Wide Graffiti Art Showcase that showcases the Mayor's leadership but also introduces tensions within the artistic community.
        `)
        setWinner("Mayor!")
    }
    else if (real == "baa")
    {
        setName("Resilient Expressions")
        setDesc(`A Community-Driven Graffiti Art Showcase reflects the neighborhood's resilience and commitment to artistic expression. Positive aesthetics are achieved, but strained relationships emerge within the artistic community due to differing opinions on the controlled showcase.
        Explanation: Opting for Collaborating with Local Residents and City-Sponsored Exhibition (BAA) emphasizes your focus on involving the local community and navigating relationships with authorities. This resulted in a Community-Driven Graffiti Art Showcase, showcasing resilience but introducing tensions within the artistic community.
        `)
        setWinner("Local Resident!")
    }
    else if (real == "bab")
    {
        setName("Rebellion Revolution")
        setDesc(`The Graffiti Art Revolution unfolds with an independent exhibition showcasing rebellious artistic expressions. Positive outcomes are seen within the artistic community, celebrating artistic rebellion and freedom. However, strained relationships emerge with Business Owners and Government Leaders.
        Explanation: Your choice to support Art Training Programs and Collaborate with Graffiti Artists (BAB) reflects a commitment to preserving artistic freedom and engaging with the artistic community. This led to a Graffiti Art Revolution, celebrating rebellion and freedom but also straining relationships with Business Owners and Government Leaders.
        `)
        setWinner("Graffiti Artist!")
    }
    else if (real == "bba")
    {
        setName("Perspectives Unveiled")
        setDesc(`An independent exhibition supported by both Graffiti Artists and Local Residents becomes the final event. Diverse Perspectives are showcased, emphasizing the importance of different viewpoints. While relationships with Business Owners may be strained, the artistic community celebrates the diversity of expression.
        Explanation: Your choice to collaborate with Local Residents and Graffiti Artists and support an Independent Exhibition (BBA) reflects a commitment to community engagement and diverse artistic expression. This led to an event showcasing diverse perspectives but introducing strains in relationships with Business Owners.
        `)
        setWinner("Local Resident!")
    }
    else if (real == "bbb")
    {
        setName("Cultural Fusion")
        setDesc(`The final event showcases an Artistic Renaissance supported by Business Owners. This Cultural Harmony reflects a balance between preserving cultural heritage and embracing new artistic expressions. Positive outcomes are seen within the business community, but relationships with Graffiti Artists may be strained.
        Explanation: Opting for Legal Graffiti Spaces and Collaborate with Business Owners (BBB) signifies a desire to seek balance with authorities and engage with local businesses. This led to a Cultural Harmony event, celebrating both cultural heritage and new expressions, but introducing strains in relationships with Graffiti Artists.
        `)
        setWinner("Business Owner!")
    }
    if(winnerString(urlParams.get("c")) == getWinner())
    {
        $("#winner").attr("class", "text-6xl text-green-400 dark:text-green-200")
        $("#losetext").html("You win!, test your skill and play again by clicking the blue replay button.")
    }
    else{
        $("#winner").attr("class", "text-6xl text-red-400 dark:text-red-200")
    }
}
getCulimatingEvent(urlParams.get("ch"))
type("", 1000, "typewriter")