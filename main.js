
$( document ).ready(function() {
    $.get("https://www.kimovil.com/es/comparar-moviles/f_max_d+eurPrice.450,f_not_m+code.CN:IN#localprices", function (response){ 
        let body = document.getElementsByTagName("body")[0]    
        body.innerHTML = response;
        let list = body.getElementsByTagName("link");
        for(let i =0; i < list.length;i++){
            let link = list[i];
            if(link.href.includes(".css")) link.remove();
        }

    });
});

