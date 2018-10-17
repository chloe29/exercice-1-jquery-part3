$(function(){
  $("#clickMe").click(function(){
    $("#clickNumber").val(function(i, val) {return val*1+1});
  });
});
// .val obtient la valeur de l'id
// initialisation de la fonction suivante qui nous permet d'incrémenter (augmenter) la valeur
// on utilise un *1 devant le +1 pour éviter que les clics ne soient qu'une  succession de 1.

// autre méthode :
// $(function(){
//   $("#clickMe").click(function(){
//     //la méthode .val récupére ou remplace la value d'un élément de formulaire
//     //Nous récupérons donc la valeur de l'input portant l'ID #clickNumber dans l'objet result.
//     var result = $('#clickNumber').val();
//     //On incrémente (augmente) d'une unité l'objet result à chaque clic
//     result++;
//     //On récupère la valeur de result que l'on affiche dans l'input.
//     $('#clickNumber').val(result);
//   });
// });
