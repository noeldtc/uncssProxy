
$( document ).ready(function() {
    $.get("https://www.kimovil.com/es/comparar-moviles/f_max_d+eurPrice.450,f_not_m+code.CN:IN#localprices", function (response){ 
        document.getElementsByTagName("body")[0].innerHTML = response;
    });
});

