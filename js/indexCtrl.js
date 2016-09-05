var Index = function () {

    var carregarLista = function () {

        var url = API_URL + '/agenda/v1/get/'; 
        
        $.ajax({
            async: true,
            type: "GET",
            url: url,
            dataType: "JSON",
            processData: true,
            success: function (data) {

                if(data != null && data.items.length > 0){

                    $.each(data.items, function (i, item) {
                        
                        if (item.id == null) return true;
                        
                        var template = "<div class='col-sm-4 col-lg-4 col-md-4'>";
                        template += ("<div class='thumbnail'>");
                        
                        template += ("<div class='caption'>");
                        template += ("<h4><a href='#'>" + item.idDispenser + "</a></h4>");
                        template += ("<p>" + item.numeroMedicamento + "</p>");
                        template += ("</div>");
                        template += ("<div class='ratings'>");
                        template += ("<p class='pull-right'></p>");
                        template += ("<p>");
                        
                        if (item.numeroMedicamento == 1) {
                            template += ("<span class='glyphicon glyphicon-star'></span>");
                            template += ("<span class='glyphicon glyphicon-star-empty'></span>");
                            template += ("<span class='glyphicon glyphicon-star-empty'></span>");
                        } else if (item.numeroMedicamento == 2){
                            template += ("<span class='glyphicon glyphicon-star'></span>");
                            template += ("<span class='glyphicon glyphicon-star'></span>");
                            template += ("<span class='glyphicon glyphicon-star-empty'></span>");
                        } else {
                            template += ("<span class='glyphicon glyphicon-star'></span>");
                            template += ("<span class='glyphicon glyphicon-star'></span>");
                            template += ("<span class='glyphicon glyphicon-star'></span>");
                        }
                        
                        template += ("</p>");
                        template += ("</div>");
                        template += ("</div>");
                        template += ("</div>");

                        $('#incidentes-result').append(template);
                    });
                    
                    
                }
            },
            error: function (xhr) {
                alert("Ocorreu um erro ao carregar a lista.");
            }
        });

    };

    return {
        //Função principal que inicializa o módulo
        inicializar: function () {
            carregarLista();
        }
    };
} ();