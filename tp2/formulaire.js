<<<<<<< HEAD


function validation() {



  this.event.preventDefault();
  var test = true;
  var text = "";




    if (document.getElementById("nom").value.length < 5) 
     
	text = "Nom";
    
  
     if (document.getElementById("prenom").value.length < 5) 
   
	text = text + ", Prénom";
	

     if (document.getElementById("add").value.length < 5) 
   
	text = text + ", Adresse";
	

     if (document.getElementById("email").value.length < 5) 
      
	text = text + ", Email";

   
     if (text.length == 0)
	
	test = false;
    


if (test) {

   if (text.length > 8)

   document.getElementById("error").innerHTML = "Les champs " + text + " doivent contenir au moins cinq caractères!";

   else 

   document.getElementById("error").innerHTML = "Le champ " + text + " doit contenir au moins cinq caractères!";}
 
else

   document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#prenom").value + " 😀";


}
=======
<script>

function Validation() {

  if (document.getElementById("nom").value.length == 3)
     
    document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";
    document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;
     
  
}

</script>
>>>>>>> 72c2afd535a56781dfa5681555ab5575bd783de1
