function Name() {
    var nom = document.getElementById("nom").value;
    nom = nom.toUpperCase();
    document.getElementById("nom").value = nom;
    var ok = true ;
    for (var i=0;i < nom.length;i++) {
        if (!isNaN(nom[i])) {
            ok = false;
            break;
        }
    }
    if (ok == false) {
        document.getElementById("n").innerHTML = " Nom non valide";

    }
    else
    {
        document.getElementById("n").innerHTML = "";

    }

}
function Surname() {
    var prenom = document.getElementById("prenom").value;
    var maj = prenom.charAt(0).toUpperCase();
    prenom = maj.concat(prenom.substring(1,25));
    document.getElementById("prenom").value = prenom;
    var ok = true ;
    for (var i=0;i < prenom.length;i++) {
        if (!isNaN(prenom[i])) {
            ok = false;
            break;
        }
    }
    if (ok == false) {
        document.getElementById("p").innerHTML = " Prénom non valide";

    }
    else
    {
        document.getElementById("p").innerHTML = "";

    }
}
function Adresse() {
    var adresse = document.getElementById("adresse").value;
    var ville = document.getElementById("ville").value;
    var cp = document.getElementById("codep").value;
    if(isNaN(adresse.charAt(0))||isNaN(cp)||cp.length != 5 ){
        document.getElementById("add").innerHTML = " Adresse non valide";


    }else{
        document.getElementById("add").innerHTML = "";

    }
}
function Mail() {
    var mail = document.getElementById("mail").value;
    if ((mail.indexOf("@")>=0)&&(mail.indexOf(".")>=0)) {
        console.log(mail + " semble valide");
        document.getElementById("m").innerHTML="";

    } else {
        document.getElementById("m").innerHTML=" Entrez un email valide";

    }
}
function Age(age) {
    age = document.getElementById("age").value;
        if(isNaN(age)){
            document.getElementById("ag").innerHTML=" Age non valide";
             
        }else{
            document.getElementById("ag").innerHTML="";
             
        }
}
