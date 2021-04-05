var numeroSecreto = parseInt(Math.random() * 10);

var tentativas = 3;

while(tentativas > 0) {
  
  var chute = parseInt(prompt('Digite um número entre 0 e 10'));

    if(numeroSecreto == chute) {
      alert('Você acertou!')
      break;
    } else if(numeroSecreto < chute) {
      alert('O número secreto é menor!')
      tentativas = tentativas - 1;
    } else if(numeroSecreto > chute) {
      alert('O número secreto é maior!')
      tentativas = tentativas - 1;   
    }
} 

if(chute != numeroSecreto) {
  alert('Suas tentativas acabaram! O número secreto era ' + numeroSecreto);
}
 

