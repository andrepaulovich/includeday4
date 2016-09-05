var Utils = function () {
    
    var construirMenu = function() {
        
        var template = "<a href='[URL]' [CLASS] accesskey='[ACCESSKEY]'>[NOME]</a>";
       
        $.each(MENU.links, function (i, item) {
            var link = $(template.replace("[URL]", item.url).replace("[NOME]", item.nome).replace("[CLASS]", "class='list-group-item'").replace("[ACCESSKEY]", item.accesskey));
            $('#menu-lateral').append(link);
        });
        
        $.each(MENU.links, function (i, item) {            
            var link = template.replace("[URL]", item.url).replace("[NOME]", item.nome).replace("[CLASS]", "").replace("[ACCESSKEY]", item.accesskey);
            $('#menu-topo').append("<li>" + link + "</li>");
        });
        
    }
    
    var limparLista = function () {
        $('.table-result').empty();
    };

    ///*
    // Esta função converte os valores do medicamento em texto
    ///*
    var obterNomeMedicamento = function(medicamento) {
        switch (medicamento) {
            case 1 :
                return "M&M Amarelo";                
            case 2 :
                return "M&M Vermelho";          
            case 3 :
                return "M&M Azul";
            case 4 :
                return "M&M Verde";                
            default:
                break;
        }
    }

    var obterCorTipoMedicamento = function(tipoMedicamento){
        var cor = "";
        if(tipoMedicamento == 1){
            cor = "warning";
        } else if (tipoMedicamento == 2){
            cor = "danger";
        } else if (tipoMedicamento == 3){
            cor = "primary";            
        } else if (tipoMedicamento == 4){
            cor = "success";
        } else {
            cor = "default";
        }
        return cor;
    }

    var obterNomeDispenser = function(id){
        var dispenser = "";

        if(id == ID_DISPENSER_BH){
            dispenser = "Belo Horizonte";
        } else if (id == ID_DISPENSER_CAMPINAS){
            dispenser = "Campinas";
        } else {
            dispenser = "Não identificado";
        }

        return dispenser;
    }

    ///*
    // Esta função converte os valores do medicamento em texto
    ///*
    var converterTrueFalseEmTexto = function(valor) {
        if (valor) {
            return "Sim";
        }else{
            return "Não";
        }
    }

    return {
        inicializar: function () {
            construirMenu();
        },        
        limparLista: limparLista,
        obterNomeMedicamento: obterNomeMedicamento,
        converterTrueFalseEmTexto: converterTrueFalseEmTexto,
        obterCorTipoMedicamento: obterCorTipoMedicamento,
        obterNomeDispenser: obterNomeDispenser
    };
} ();