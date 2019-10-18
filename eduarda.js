var cor1= '#0000FF';
var cor2= '#FF0000';
var cor3= '#FFFF00';
var coratual = cor1;

 function montarTabela(lista, idElemento) {
	var html = '';
	for (var x = 0; x < lista.length; x++){
		html += '<tr>';
		html += '<td><span style="color: '+ lista[x][2] +'">' + lista[x][0] +' diz: </span>
		html += '</tr>' ;
	}
	 document.getElementById(idElemento).innerHTML = html;
 }
  function adicionar(lista, nome, Mensagem, cor) {
	lista.push([nome, Mensagem, cor]);
}
	document.addEventListener('DOMContentLoaded', function(){
	nomes = [];
	montarTabela(nomes, 'tabela');
	
	document.addEventListener('click', function (evento) {
	var elemento = elemento.target || evento.SrcElement;
	var idElemento = elemento.id;
	
	if(coratual == cor1){
		coratual = cor2;
			//alert (coratual)
	}else if(coratual == cor2){
		coratual = cor3;
			//alert(coratual)
	}else {
		coratual = cor1;
			//alert(coratual)
	}
		switch(idElemento){
			case 'btEnviar' :
				var novoNome = document.getElementById('txtNome').value;
				var Mensagem = document.getElementById('txtMensagem').value;
				//alert(coratual);
			adicionar(nomes, novoNome, Mensagem, coratual);
			montarTabela (nomes, 'tabela');
			document.getElementById('txtNome').value = '';
			document.getElementById('txtMensagem').value = '';
			break;
		}
		
	});
	});
