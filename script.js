var num1 = window.document.getElementById('n1')
var num2 = window.document.getElementById('n2')
var num3 = window.document.getElementById('n3')
var num4 = window.document.getElementById('n4')
var num5 = window.document.getElementById('n5')
var resultado = window.document.getElementById('res')




function calcular(){

    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var n3 = Number(num3.value)
    var n4 = Number(num4.value)
    var n5 = Number(num5.value)
    

   
    var qn1 = n1**2
    var qn2 = n2**2 
    var qn3 = n3**2
    var qn4 = n4**2 
    var qn5 = n5**2

   resultado.innerHTML=`Resultado: <br> 
     ${n1}² = ${qn1} <br>
     ${n2}² = ${qn2} <br>
     ${n3}² = ${qn3} <br>
     ${n4}² = ${qn4} <br> 
     ${n5}² = ${qn5} `
}



