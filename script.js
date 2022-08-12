function play()
{
   
    var x = document.querySelectorAll(".bloc");
    var y = document.querySelectorAll(".para");
    for (var i=0; i < x.length; i++)
    {
        y[i].classList.toggle("decoP");
        x[i].classList.toggle("decobloc");

    }
    
}