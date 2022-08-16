function play()
{

    /* On note 16 777 216 couleur possible donc je vai générer 
    un nombre aléatoire entre 0 et ce nombre
    */
    let couleur1 = Math.floor(Math.random()  * 16777216) + 1;
    let couleur2 = Math.floor(Math.random()  * 16777216) + 1;

    // Je convertir la valeur en héxadécimal
    let couleur_p = couleur1.toString(16);
    let couleur_bloc = couleur2.toString(16);
    
    // Je selectionne les élément à modifier
    let x = document.querySelectorAll(".bloc");
    let y = document.querySelectorAll(".bloc p");
    for (var i=0; i < x.length; i++)
    {
        y[i].style.color = "#" + couleur_p;
        x[i].style.background = "#" + couleur_bloc;

    }
  }
