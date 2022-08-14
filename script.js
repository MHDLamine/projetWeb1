function play()
{
    let couleur = [
    "#7F00FF", "#4D4DFF", "#871F78", "#00009C", "#6B238E", "#23238E", "#4F2F4F", "#FF1CAE", "#5959AB",
    "#DB7093", "#FF6EC7", "#DB70DB", "#EAADEA", "#856363", "#BC8F8F","#A68064", "#97694F", "#855E42",
    "#A62A2A","#8E2323",		"#8C1717", "#5C3317", "#6B4226", "#5C4033","#FFFF00", "#008000"
  ];

    let couleur1 = ( Math.floor(Math.random()  * couleur.length)) + 1;
    let couleur2 = ( Math.floor(Math.random()  * couleur.length)) + 1;
 

    
    var x = document.querySelectorAll(".bloc");
    console.log(x);
    var y = document.querySelectorAll(".bloc p");
    for (var i=0; i < x.length; i++)
    {
        y[i].style.color = couleur [couleur1];
        x[i].style.background = couleur [couleur2];

    }
}
