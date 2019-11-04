<script>

function Validation() {

  if (document.getElementById("nom").value.length == 3)
     
    document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";
    document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;
     
  
}

</script>