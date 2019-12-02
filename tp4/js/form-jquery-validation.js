
<<<<<<< HEAD

=======
>>>>>>> 34dfb1694b2670229231326c6f85e234d5d0fc47
$( document ).ready(function() {

    
    console.log("DOM ready!");
<<<<<<< HEAD


   $("#gps").on("click", function () {
        getLocation();
=======
    
    
    $('#gps').click(function () {

        $('#map').html(getLocation());
>>>>>>> 34dfb1694b2670229231326c6f85e234d5d0fc47
    });

   
    $('#nom').keyup(function() {
 
        // Le script qui devra calculer et afficher le nombre de caractères

        var nombreCaractere = $(this).val().length;
        
        var msg =   nombreCaractere + ' car.';
        $('#id').text(msg);
      
<<<<<<< HEAD
       });
=======
       })
>>>>>>> 34dfb1694b2670229231326c6f85e234d5d0fc47


    $('#prenom').keyup(function () {

        var nombreCaractere = $(this).val().length;

        var msg = nombreCaractere + ' car.';
        $('#idd').text(msg);

<<<<<<< HEAD
    });


 $("#valider").on("click", function ()
    {


    var 
	nom = $("#nom"),
        prenom = $("#prenom"),
        date = $("#date"),
        add = $("#add"),
        email = $("#email");

    contactStore.add(nom, prenom, date, add, email);

    var list = contactStore.getList();
    

    for(var i in list){
        list[i].name
        $("table").append("<tr><td>"+list[i].name+"</td></tr>");
    }


});

});

=======
    })



    var nom = $("#nom"); var prenom = $("#prenom"); var date = $("#date"); var add = $("#add"); var email = $("#email");


    $("#valider").on("click", (event) => {

        var test = (verifyInput(nom.val(), prenom.val(), date.val(), add.val(), email.val())) ? false : true;

        console.log(test);

        if (test) {


            //contactStore.add(nom, prenom, date, add, email);
            
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
>>>>>>> 34dfb1694b2670229231326c6f85e234d5d0fc47
