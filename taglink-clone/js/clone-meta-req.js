$(document).ready(function(){
    
    $("#url").on("keyup", function(event){
        if(event.keyCode == 86 || event.keyCode){
                var req = {
                    url: $("#url").val()
                };

                var response = $.ajax({
                    url: "http://127.0.0.1:8000/get_metadata/",
                    type: "POST",
                    data: JSON.stringify(req),
                    contentType: "application/json",
                    dataType: "json"
                });

                response.done(function(data){
                    $("#model").addClass("show");
                    $("#title").text(data.page.title);
                    $("#img").attr("src", data.og.image);
                    $("#description").text(data.meta.description);
                    console.log(data);
                });
        }else{
            $("#model").removeClass("show");
        }
    });
    
});


// $(document).ready(function(){
    
//     $("#url").on('paste', function(){
//         var req = {
//             url: $("#url").val()
//         };

//         var response = $.ajax({
//             url: "http://127.0.0.1:8000/get_metadata/",
//             type: "POST",
//             data: JSON.stringify(req),
//             contentType: "application/json",
//             dataType: "json"
//         });

//         response.done(function(data){
//             $("#taglink-model").addClass("show");
//             $("#title").text(data.page.title);
//             $("#img").attr("src", data.og.image);
//             $("#description").text(data.meta.description);
//             console.log(data);
//         });
//     });

// });