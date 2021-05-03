$(document).ready(function(){

    // $("#url").on("paste", function(){
    //     var req = {
    //         url: $("#url").val()
    //     };

    //     var response = $.ajax({
    //         url: "http://127.0.0.1:8800/get_feed/",
    //         type: "POST",
    //         data: JSON.stringify(req),
    //         contentType: "application/json",
    //         dataType: "json"
    //     });

    //     response.done(function(data){
    //         $("#taglink-model").addClass("show");
    //         $("#title").text(data.page.title);
    //         if(data.og.image){
    //             $("#img").attr("src", data.og.image);
    //         }else{
    //             $("#img").attr("src", "images/github.png");
    //         }
    //         $("#description").text(data.meta.description);
    //         console.log(data);
    //     });
    // });

    
    $("#url").on("keyup", function(event){
        if(event.keyCode == 86 || event.keyCode == 13){
                var req = {
                    url: $("#url").val()
                };

                var response = $.ajax({
                    url: "http://127.0.0.1:8800/get_feed/",
                    type: "POST",
                    data: JSON.stringify(req),
                    contentType: "application/json",
                    dataType: "json"
                });

                response.done(function(data){
                    // $("#taglink-model").addClass("show");
                    // $("#title").text(data.page.title);
                    // if(data.og.image){
                    //     $("#img").attr("src", data.og.image);
                    // }else{
                    //     $("#img").attr("src", "images/github.png");
                    // }
                    // $("#description").text(data.meta.description);
                    console.log(data.entries[2]);
                });
        }else{
            $("#taglink-model").removeClass("show");
        }
    });
    
});