





function changeFunc() {

 var a = document.getElementById("selectProductos").value
    console.log(a);
  if(a == 1){
   mostrarInternet();
  }
  if(a == 2){
    mostrarDuo();
  }
  if(a == 3){
    mostrarTrio();

  }
  if(a == 4){
    mostrarTelefonia();

  }
  

}
 



function mostrarTrio(){
	$("#trio").show();
    $("#duo").hide();
 
	
}

function mostrarDuo(){

$("#duo").show();
$("#trio").hide();


}
function mostrarInternet(){

    $("#internet").show();
    $("#trio").hide();
    $("#duo").hide();
    $("#telefonia").hide();
    
    
    }

    function mostrarTelefonia(){
      $("#telefonia").show();
      $("#internet").hide();
      $("#trio").hide();
      $("#duo").hide();
      
      
      }
    




    


