function sortear() {

    var audio = document.getElementById("audio");
    audio.play();

    $("#nomeSorteado").val("");
    $('#divBlock').show();
    $("#spinner").hide();
    setTimeout(function() {
            var item = buscarItem(item);
            $("#nomeSorteado").val(item.nome);
            document.getElementById(item.id).style.textDecoration = "line-through";
            $('#divBlock').hide();
            $("#spinner").show();
        }, 1000);
}

function buscarItem(item) {
    var inputs = document.getElementsByTagName('input');
    if (inputs.length > 1) {
        var nomes = [];
        var countNomes = 0;
        for (index = 0; index < inputs.length; ++index) {
            var input = inputs[index];
            var id = input.id;
            if (input.style.textDecoration == "" && id != "nomeSorteado") {
                var nome = input.value;
                nomes[id] = {id, nome};
                countNomes += 1;
            }
        }
        if (countNomes == 1) {
            $("#btnSortear").css("display", "none");
        }
        while (item == undefined || item.nome == undefined) {
            item = nomes[Math.floor(Math.random()*nomes.length)];
        }
        return item;
    } else {
        var nomes = $("#nomesInformados").val().split('\n');
        var nomesChave= [];
    
        var str = "";
        var id = 0;
        for (nome of nomes) {
            nomesChave[id] = {id, nome};
            str += "<input id=\"" + id + "\" value=\"" +nome + "\" disabled=\"true\" type=\"text\" class=\"form-control\"/><br>";
            id += 1;
        }
    
        document.querySelector("#resultado").innerHTML = str;
        $("#nomesInformados").css("display", "none");
    
        $("#nomeSorteado").css("display", "");
    
        return nomesChave[Math.floor(Math.random()*nomesChave.length)];
    }
}