$(document).ready(function(){
  $("#inputs").submit(function(event){
    var input1 = $("input#fav1").val();
    var input2 = $("input#fav2").val();
    var input3 = $("input#fav3").val();
    var input4 = $("input#fav4").val();
    var input5 = $("input#fav5").val();

    var array1 = [input1, input2, input3, input4, input5];
    var array2 = [];
    array2.push(array1[1]);
    array2.push(array1[0]);
    array2.push(array1[2]);

    $("ul#results").append("<li>" + array2[0] + "</li>");
    $("ul#results").append("<li>" + array2[1] + "</li>");
    $("ul#results").append("<li>" + array2[2] + "</li>");

    var flavors = ["Chocolate", "Vanilla", "Strawberry", "Pistachio", "Rocky Road"];
    flavors.forEach(function(flavor){
      $("ul#results").append("<li>" + flavor + "</li>")
    })

    event.preventDefault();
  });
});
