var score = 0;
var total = 20;
var answers = ['b','a','d','d','d','d','a','a','b','a','b','a','b','a','a','a','b','d','a','b'];


function Result( ){

    var form = document.forms['quizForm'];



    var q21 = form.elements['q21'].value;
    var q22 = form.elements['q22'].value;
    var q23 = form.elements['q23'].value;
    var q24 = form.elements['q24'].value;
    var q25 = form.elements['q25'].value;
    var q26 = form.elements['q26'].value;
   var q27 = form.elements['q27'].value;
    var q28 = form.elements['q28'].value;
    var q29 = form.elements['q29'].value;
   var q30 = form.elements['q30'].value;
   var q31 = form.elements['q31'].value;
    var q32 = form.elements['q32'].value;
    var q33 = form.elements['q33'].value;
    var q34 = form.elements['q34'].value;
    var q35 = form.elements['q35'].value;
    var q36 = form.elements['q36'].value;
    var q37 = form.elements['q37'].value;
    var q38 = form.elements['q38'].value;
    var q39 = form.elements['q39'].value;
    var q40 = form.elements['q40'].value;
   


     for(i = 1; i <= total; i++){
       if(eval('q'+i)==null || eval('q'+i) ==''){
             alert('please answer question '+i);
            return false;
       }

     
     }

 
    for(i = 1; i <= total; i++){
        if(eval('q'+i)==answers[i-1]){
            score++;
        }
       
    }

    var result = document.getElementById('result');
    result.innerHTML = `you score  ${score} out of ${total}`
    alert('you scored '+score+' out of' +" " +total);
    // score = 0;
    return false;
}








