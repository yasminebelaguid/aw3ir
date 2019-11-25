
$( document ).ready(function() {

    
    console.log("DOM ready!");
    
    
    $('#gps').click(function () {

        $('#map').html(getLocation());
    });

   
    $('#nom').keyup(function() {
 
        // Le script qui devra calculer et afficher le nombre de caractères

        var nombreCaractere = $(this).val().length;
        
        var msg =   nombreCaractere + ' car.';
        $('#compteur').text(msg);
      
       })


    $('#prenom').keyup(function () {

        var nombreCaractere = $(this).val().length;

        var msg = nombreCaractere + ' car.';
        $('#compteur1').text(msg);

    })



    var nom = $("#nom"); var prenom = $("#prenom"); var date = $("#date"); var add = $("#add"); var email = $("#email");


    $("#valider").on("click", (event) => {

        var test = (verifyInput(nom.val(), prenom.val(), date.val(), add.val(), email.val())) ? false : true;

        console.log(test);

        if (test) {
            
             $(".modal-title").html("Bienvenue " + prenom.val());
           
            $(".modal-body").html(" Vous êtes  nés le " + date.val()  
            + " et vous habitez : " + ''
            + '<a href="http://maps.google.com/maps?q=' + add.val() 
            + '"> <img src="https://maps.googleapis.com/maps/api/staticmap?markers=' + add.val() 
            + '&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg" alt="carte" style="width:100%">' + add.val() );

        } else {

            $(".modal-title").html("Erreur !"); $(".modal-body").html("Veuillez remplir tous les champs obligatoires..");
        }

            $("#myModal").modal("show");
    });

    verifyInput = (nom, prenom, date, add, email) => {
        return nom == "" | prenom == "" | date == "" | add == "" | email == "";
    }


});
