
$( document ).ready(function() {
    $.get("https://www.kimovil.com/es/comparar-moviles/f_max_d+eurPrice.450,f_not_m+code.CN:IN#localprices", function (response){ 
        var html = response;
        var html_src = 'data:text/html;charset=utf-8,' + html;
        $("#iframeId").attr("src" , html_src);
    });
});

