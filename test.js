/* VARIABLES

    == comparer deux variables dans leur valeur
    === comparer deux variables dans leur valeur ainsi que leur type
    != différent de 
    !== différence dans leur type
    && "et" ex: chiffre1 > chiffre2 && chiffre2 > chiffre3 = true si les deux conditions sont vraies.
    || "ou" ex: chiffre1 > chiffre2 || chiffre2 > chiffre3 = true si au moins une des deux conditions est vraie.

    booléen = binaire 

    if() {

    } else {

    }
*/

/* CONDITIONS

var nombre = 1;

while (true) {
  console.log(nombre);

  if (nombre == 28) {
    break;
  }

  nombre++;
}

*/

/* alert("bonjour, programme d'addition");

do {
  nmbr1 = parseInt(prompt("veuillez entrer votre 1er nombre"));
} while (isNaN(nmbr1));

do {
  nmbr2 = parseInt(prompt("veuillez entrer votre 2eme nombre"));
} while (isNaN(nmbr2));

/*parseInt = transforme une chaine de caractères en nombre 

var resultat = nmbr1 + nmbr2;

alert(nmbr1 + "+" + nmbr2 + "=" + resultat);



for (var i = 0; i < 100; i += 2) {
  console.log(i);
}

*/

/* TABLEAUX



*/

/*
var variable1 = "success";
var tableau = ["item 0", "item1", "item2", "item3", "item4", variable1];
console.log(tableau);
console.log(tableau[0]);
tableau[4] = "python"; /* changer une variable du tableau
console.log(tableau);
tableau.pop(); /* supprime la dernière valeur du tableau 
console.log(tableau);
tableau.shift(); /* supprime la première valeur du tableau
tableau.push("HTML", "CSS"); /* ajouter une variable en fin de tableau 
console.log(tableau);
console.log(tableau[6]);
console.log(tableau[0]);

*/

/*Créer un tableau que l'utilisateur peut remplir via la boite de dialogue*/

/*var langagesProg = [];

while (true) {
  var promptText = prompt("Entrez un langage de programmation");
  if (promptText != "") {
    langagesProg.push(promptText);
  } else {
    break;
  }
}

console.log(langagesProg);*/

/*var langagesProg = ["C++", "C#", "Ruby", "Python"];

/* var promptText = prompt("entrez le nom d'un langage de prog");
if (langagesProg.indexOf(promptText) != -1) {
  alert("Ton langage Existe!");
} else {
  alert("Ton langage n'existe pas :'(");
}
*/
/* console.log(langagesProg);

langagesProg.splice(
  1,
  2,
  "PHP",
  "JS"
); /* splice(place un curseur, supprime un nombre d'élements à partir du curseur, puis rajoute des éléments en chaine de caractères ) */

/*console.log(langagesProg.length);

for (var i = 0; i < langagesProg.length; i++) {
  /*alert(langagesProg[i]);
  console.log("Index => " + i + " | Valeur => " + langagesProg[i]);
}
*/

/* 
var langagesProg = ["PHP", "JS", "Ruby"];
langagesProg.push("C++");
var langagesProgText = langagesProg.join(" et ");
console.log(langagesProgText);
*/

/* FONCTIONS; */

/*
function ditBonjour() {
  alert("bonjour");
}

ditBonjour();
*/

/* 
function additionne(nbr1, nbr2) {
  var resultat = Number(nbr1) + Number(nbr2); // Number transforme une string en nombre
  resultat += 30;
  return resultat; // Return est ce que la fonction dois renvoyer à la fin de son calcul
}

var prompt1 = prompt("Votre nombre 1");
var prompt2 = prompt("Votre nombre 2");

var add = additionne(prompt1, prompt2);

console.log(add);
*/

// OBJETS;

// un objet est comme une variable qui contient plusieurs valeurs dans des {accolades}
/* 

var utilisateur = {
  nom: { prenom: "Paul", famille: "Dupont" },
  age: 25,
  sexe: "M",
};
console.log(utilisateur.nom.prenom); // affiche "Paul"

*/

//Possible d'utiliser un constructeur via une fonction =>

/* function Personne(nom, age, sexe) {
  this.nom = nom; //attributs
  this.age = age;
  this.sexe = sexe;
}

function Voiture(fab, an, prop) {
  this.fabricant = fab;
  this.annee = an;
  this.proprietaire = prop;

  this.genererMessage = function () {
    alert(
      this.proprietaire.nom +
        " possède une " +
        this.fabricant +
        " de " +
        this.annee
    );
  };
}

var utilisateur1 = new Personne("Paul", 25, "M");
var utilisateur2 = new Personne("Jeremy", 36, "M");

var voiture1 = new Voiture("peugeot", 2005, utilisateur1);

console.log(utilisateur1);

utilisateur2.nom = "Matt";

voiture1.genererMessage();

utilisateur1.nom = "Jules";

voiture1.genererMessage();

*/

//RECUPERER DES ELEMENTS HTML

/*
var titre = document.getElementById("titre");

alert(titre.innerHTML); //récupérer le contenu de la balise HTML
console.log(titre);
*/

/*
var input = document.getElementsByName("pseudo"); //Elements avec un S va retourner un Tableau

console.log(input);
alert(input);

for (var i = 0; i < input.length; i++) {
  console.log(input[i].value);
  alert(input[i].type);
}
*/

/*
var paragraphes = document.querySelectorAll("#test .paragraphe"); // #test récupère l'id du Div et .paragraphe récupère la classe css paragraphe

console.log(paragraphes);
alert(paragraphes);

for (var i = 0; i < paragraphes.length; i++) {
  console.log(paragraphes[i].innerHTML);
  alert(paragraphes[i].innerHTML);
}
*/

// var paragraphe = document.getElementById("paragraphe");

// var pseudo = prompt("veuillez entrer votre pseudo");

// paragraphe.innerHTML += pseudo + " !"; // += vient ajouter du texte au contenu html déjà présent

// paragraphe.innerHTML = "Bonjour <b>" + pseudo + "</b> !";

var image = document.getElementById("image");

// var srcImage = image.getAttribute("src");
// var srcImage = image.src;

/*

var paragraphe = document.getElementById("image-src");
paragraphe.innerHTML = "La source de l'image est: " + image.src;

// image.setAttribute("src", "images/Nothing.jpg"); //change la source de l'image
image.src = "images/Nothing.jpg";

paragraphe.innerHTML = "La source de l'image est: " + image.src;

*/
image.classList.remove("petit");
image.classList.add("bords");

console.log(image.classList);
