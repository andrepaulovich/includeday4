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
                        
                        var template = "<div class='col-sm-12 col-lg-4 col-md-4'>";
                        template += ("<div class='thumbnail'>");
                        
                        template += ("<div class='caption'>");                                                
                        template += ("<h4>");
                        template += ("<span>" + Utils.obterNomeDispenser(item.idDispenser) + "</span>");
                        template += ("<span class='pull-right'>" + item.intervaloMinutos + " minutos <span class='glyphicon glyphicon-time'></span></span>");
                        template += ("</h4>");                        
                        template += ("<p class='pull-left'>Dosagem: <span class='label label-default'>Caiu? " + Utils.converterTrueFalseEmTexto(item.dosagemCaiu) + "</span></p>");                        
                        template += ("<p class='pull-left' style='margin-left: 5px'><span class='label label-default'>Retirada? " + Utils.converterTrueFalseEmTexto(item.dosagemRetirada) + "</span></p>");
                        template += ("<p class='pull-left'>Medicamento: <span class='label label-" + Utils.obterCorTipoMedicamento(item.numeroMedicamento) + "'>" + Utils.obterNomeMedicamento(item.numeroMedicamento) + "</span></p>");                        
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