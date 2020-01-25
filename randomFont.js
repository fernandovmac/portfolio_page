var timer = null;
var mouseTarget = document.getElementsByClassName("demo");


function generateFont(x)
{
    var children = x.childNodes;
    console.log(children);
    timer = setInterval(() => {
        children.forEach( (child) => {
            child.style.fontFamily=getFont();
        })
    },50)     
    console.log ("changed font");
 
};

function onLoaded() {
    Array.prototype.forEach.call(mouseTarget, function(el) {
        var txt = el.innerHTML;
        txt = txt.replace(/&amp;/g, "&");
        var newText = "";
        for(var i=0, l=txt.length; i<l; i++)
        {
            newText += '<span id="letter">'+txt.charAt(i)+'</span>';
        }
        el.innerHTML = newText;

        console.log ("generated spans");

    });
}

function getFont()
{
    var chosenFont="";
    var fontType = [ "Arial", "Verdana", "Helvetica", "Tahoma", "Geneva", "sans-serif", "Palatino Linotype", "Book Antiqua", "Palatino", "Georgia", "Times New Roman", "Times", "serif", "Lucida Console", "Monaco", "monospace","Courier New", "Courier", "monospace"];
    for(var i=0;i<fontType.length;i++)
    {
        var num;
        num=Math.floor(Math.random()*fontType.length);
        chosenFont = fontType[num];
    }
    
    setTimeout(getFont,1000);
    return chosenFont;
   
};



function keepFont(x){
    if (timer)
        clearInterval(timer)
    
    Array.prototype.forEach.call(mouseTarget, function(el) {
    var children = el.childNodes;
    children.forEach( (child) => {
        child.style.fontFamily="'Prompt', sans-serif";
        })
    });

    console.log("changed back", timer);
};

