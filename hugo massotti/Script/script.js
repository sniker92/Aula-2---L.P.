//function calcularMedia(a, b, c){
 //   let resultado1 = (a + b + c)/3;
  //  return resultado1;
//}

//function calcularExame(nota){
 //   let resultado2 = 10 - nota;
 //   return resultado2;
//}

function calcularDelta(a, b, c){
    let delta = b*b - (4*a*c);
    return delta;
}

function calcularX1(a, b, delta){
    let x1 = (-1*b + Math.sqrt(delta)) / 2 * a;
    return x1;
}

function calcularX2(a, b, delta){
    let x2 = (-1*b - Math.sqrt(delta)) / 2 * a;
    return x2;
}


$("#btOk").click(
    function(){
        formula =
        {
            'a':parseInt(document.getElementById('inputA').value),
            'b':parseInt(document.getElementById('inputB').value),
            'c':parseInt(document.getElementById('inputC').value)
        }

        let delta = calcularDelta(formula.a, formula.b, formula.c);
        alert (delta)

        let x1 = calcularX1(formula.a, formula.b, delta);
        alert (x1)

        let x2 =calcularX2(formula.a, formula.b, delta);
        alert (x2)


        //cadastro =
        //{
            //'Nome':document.getElementById('inputNome').value,
            //'Endereco':document.getElementById('inputEndereco').value,
            //'Email':document.getElementById('inputEmail').value
        //}
        
        //const nome = document.getElementById('inputnome').value;

       // alert("Meu nome é: " + cadastro.Nome + " Sou de " + cadastro.Endereco);
        //alert(cadastro.Endereco);
       //alert(cadastro.Email);
       //calculo =
       //{
        //   'a':document.getElementById('inputA').value,
        //   'b':document.getElementById('inputB').value,
        //   'c':document.getElementById('inputC').value
        
       //}
       //let media = (parseInt(calculo.a) + parseInt(calculo.b) + parseInt(calculo.c)) / 3 ;
       //let media = calcularMedia(
        //    parseInt(calculo.a), 
        //    parseInt(calculo.b), 
        //    parseInt(calculo.c)
        //   );
        //   alert (media)
       //if (media >= 7){
       //    alert('Você foi aprovado!');
      // } else {
       //    alert('Você ficou de exame!');
           //let exame = 10 - media;
        //   let exame = calcularExame(media);
        //   alert('Você precisa tirar ' + exame + ' no exame.');
       //}
       

    }
)