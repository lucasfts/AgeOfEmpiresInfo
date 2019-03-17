$(function(){
    var info = $("#info");


    $("#search").on("change",function(){
        info.html("");
        var opcao = $("#search").val();
        if(opcao != ""){
            $.ajax({
                method: "get",
                url: "https://cors.io/?https://age-of-empires-2-api.herokuapp.com/api/v1/" + opcao,
                success: function(response){
                    var json = json = JSON.parse(response);

                    json = json[Object.keys(json)[0]];
                    
                    for(var i= 0 ; i < json.length; i++){
                        var obj = json[i];                       
                        var content = '';
                        
                        for(var prop in obj){
                            if(prop != "id"){
                               content += '<p>'+prop+': '+obj[prop]+'</p>';
                             }
                        }                       
                        
                        var element = $('<div class="col-12 mt-1">'+
                            '<div class="card">'+
                                '<div class="card-header">'+obj.name+'</div>'+
                                '<div class="card-body">'+content+'</div> '+
                            '</div>'+
                        '</div>');

                        info.append(element);
                    }
                }
            });
        }
        
    });
});
