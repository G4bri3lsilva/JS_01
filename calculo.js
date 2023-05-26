function fazerMedia(){
    
    let nome = String(document.getElementById("nome").value)
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)

    let media=(n1+n2+n3)/3
    
    if(media >= 6){
        document.getElementById("resultado").innerHTML = ("o aluno "+nome +" teve como média "+media+" e foi aprovado!");
       }
       else{
        document.getElementById("resultado").innerHTML = ("o aluno "+nome +" teve como média "+ media+" e foi reprovado!");

    }
      
    
    


   


 
    

}