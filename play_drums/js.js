var k=document.querySelectorAll(".drum").length;
for(var i=0;i<k;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var key = this.textContent;
        fun(key);
    });
}
document.addEventListener("keypress",function(event)
{
    fun(event.key);
});
function fun(key)
{
    if(key=='S' || key=='s')
    {
        var audio=new Audio("sounds/crash.mp3"); 
    }
    else if(key=='D' || key=='d')
    {
        var audio=new Audio("sounds/kick-bass.mp3"); 
    }
    else if(key=='F'|| key=='f')
    {
        var audio=new Audio("sounds/snare.mp3"); 
    }
    else if(key=='G'|| key=='g')
    {
        var audio=new Audio("sounds/tom-1.mp3"); 
    }
    else if(key=='H'|| key=='h')
    {
        var audio=new Audio("sounds/tom-2.mp3"); 
    }
    else if(key=='J'|| key=='j')
    {
        var audio=new Audio("sounds/tom-3.mp3"); 
    }
    else if(key=='K'|| key=='k')
    {
        var audio=new Audio("sounds/tom-4.mp3"); 
    }
    audio.play()
}
