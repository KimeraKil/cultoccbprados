$(function(){
    $("#sltSetor").on("change", function(){
        var id = $('#sltSetor').val();
        //alert(id);
        $('#sltMes').prop("disabled", false);
        $('#sltAno').prop("disabled", false);
    })
})

$(function(){
    $("#sltMes").on("change", function(){
        var mesSlt = $('#sltMes').val();
        var setorSel = $('#sltSetor').val();
        var mesesS = ['Janeiro', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        var anoSel = $('#sltAno').val();
        if(setorSel == null){
            setorSel = '?Setor?';
        }
        $('#sltFunc').prop("disabled", false);
        //alert (anoSel);
        $(".barraSup").html('<h2>Escala de Folga - '+setorSel+' - '+mesesS[mesSlt]+'</h2>');
        //alert(setorSel);
        $.ajax({
            url: "./config/carregaTabela.php",
            method: 'POST',
            data:{mes: mesSlt, ano: anoSel},
            success:function(result){
                $("#tbEscala").html(result);
            },
            error:function(result){
                alert(result);
            }
        });
    })
})

$(function(){
    $("#sltAno").on("change", function(){
        var mesSlt = $('#sltMes').val();
        var setorSel = $('#sltSetor').val();
        var mesesS = ['Janeiro', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        var anoSel = $('#sltAno').val();
        if(mesSlt == null){
            mesSlt = 1;
        }
        if(setorSel == null){
            setorSel = '?Setor?';
        }
        //alert (anoSel);
        $(".barraSup").html('<h2>Escala de Folga - '+setorSel+' - '+mesesS[mesSlt]+'</h2>');
        //alert(setorSel);
        $.ajax({
            url: "./config/carregaTabela.php",
            method: 'POST',
            data:{mes: mesSlt, ano: anoSel},
            success:function(result){
                $("#tbEscala").html(result);
            },
            error:function(result){
                alert(result);
            }
        });
    })
})

$(function(){
    $("#sltFunc").on("change", function(){
        var id = $('#sltFunc').val();
        alert(id);
        $('#sltFolga').prop("disabled", false);
    })
})

$(function(){
    $("#sltFolga").on("change", function(){
        var id = $('#sltFolga').val();
        alert(id);
        $('#sltDom').prop("disabled", false);
    })
})

$(function(){
    $("#sltDom").on("change", function(){
        var id = $('#sltDom').val();
        alert(id);
    })
})

$(function(){
    $("#btnSEsc").on("click", function(){
        var id = $('#btnSEsc').val();
        alert("Clicou Salvar");
    })
})

$(function(){
    $("#btnCreHA").on("click", function(){
        var id = $('#btnCreHA').val();
        alert("Clicou Criar");
        $('.mExtraNo').removeClass("mExtraNo").addClass("mExtra");
    })
})

$(function(){
    $("#btnCextra").on("click", function(){
        var id = $('#btnCextra').val();
        alert("Clicou Fechar Criar");
        $('.mExtra').removeClass("mExtra").addClass("mExtraNo");
    })
})

$(function(){
    $("#sltDALT").on("change", function(){
        var id = $('#sltDALT').val();
        alert(id);
    })
})

$(function(){
    $("#btnSAlH").on("click", function(){
        var hora = $('#newHour').val();
        var minutos = $('#newMinutes').val();
        alert(hora+":"+minutos);
    })
})