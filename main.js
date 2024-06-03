
$( document ).ready(function() {

    $.ajax({
        type: "GET",
        url: "https://venta.enterticket.es/buy/?id=29932", 
        headers: {
            "service-worker-navigation-preload": "true"
        },
        cache:false,

        crossDomain: true,
        cookie: "hl=es; OptanonAlertBoxClosed=2023-02-15T08:22:57.664Z; __gads=ID=488340e6ecea011f:T=1676449378:S=ALNI_MbaRXNovXLRa-Y4_LDnxfbzY0ZoWA; __gpi=UID=00000bda9e1c0022:T=1676449378:RT=1676449378:S=ALNI_MaZP-XcOEAry62wlqC6AZ32F2fK8A; PHPSESSID=3occ3dklcraplin7ppmua25svn; card_unanswered-question=closed; eupubconsent-v2=CPnPd_CPnPd_CAcABBENC6CsAP_AAH_AAChQJQtf_X__b2_r-_5_f_t0eY1P9_7__-0zjhfdl-8N3f_X_L8X52M7vF36tq4KuR4ku3LBIUdlHPHcTVmw6okVryPsbk2cr7NKJ7PEmnMbO2dYGH9_n1_z-ZKY7___f_7z_v-v________7-3f3__5___-__e_V__9zfn9_____9vP___9v-_9__________3_79_7_H8-CTYBJhq3EAXYljgTbRhFAiBGFYSFUCgAooBhaIDCB1cFOyuAn1hEgAQCgCMCIEOAKMGAQAAAQBIREBIEeCAQAEQCAAEACoRCAAjYBBQAWAgEAAoBoWKMUAQgSEGRARFKYEBEiQUE9lQglB_oaYQh1lgBQaP-KhARKAEKwIhIWDkOCJAS8WSBZijfIARgBQCiVCtQSemgAAAA.f_gAD_gAAAAA; _gid=GA1.2.210443098.1678102187; _dc_gtm_UA-51952827-1=1; OptanonConsent=isIABGlobal=false&datestamp=Tue+Mar+07+2023+11:50:45+GMT+0100+(Central+European+Standard+Time)&version=6.13.0&hosts=&consentId=165a2310-12d7-401c-b145-52e2458927c4&interactionCount=1&landingPath=NotLandingPage&groups=C0001:1,C0002:1,C0004:1,STACK42:1&geolocation=ES;VC&AwaitingReconsent=false; _dd_s=logs=1&id=af40b94c-f927-4f0d-8b8b-0be398df4247&created=1678182032579&expire=1678187145564; _ga_5VH2KDPNN3=GS1.1.1678182032.3.1.1678186245.0.0.0; _ga=GA1.1.849530110.1676449376",
        success: function(response) {
            let body = document.getElementsByTagName("body")[0]    
            body.innerHTML = response;
            body.innerHTML = document.getElementById('results').innerHTML;
            
        }
      });
      
});

