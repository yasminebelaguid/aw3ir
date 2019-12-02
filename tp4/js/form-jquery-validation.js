
$( document ).ready(function() {

    
    console.log("DOM ready!");


   $("#gps").on("click", function () {
        getLocation();

    });

   
    $('#nom').keyup(function() {
 
        // Le script qui devra calculer et afficher le nombre de caractères

        var nombreCaractere = $(this).val().length;
        
        var msg =   nombreCaractere + ' car.';
        $('#id').text(msg);
      

       });


    $('#prenom').keyup(function () {

        var nombreCaractere = $(this).val().length;

        var msg = nombreCaractere + ' car.';
        $('#idd').text(msg);


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


