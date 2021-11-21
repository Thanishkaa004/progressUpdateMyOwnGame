function calculateScoreFantasyLevel1(){
  var points = 0;
  var q1 = document.quiz.fantasyLevel1Question1.value;
  var q2 = document.quiz.fantasyLevel1Question2.value;
  var q3 = document.quiz.fantasyLevel1Question3.value;
  var q4 = document.quiz.fantasyLevel1Question4.value;
  var q5 = document.quiz.fantasyLevel1Question5.value;
  var q6 = document.quiz.fantasyLevel1Question6.value;

  if(q1 === "Hedwig"){
    points += 1;
  }
  if(q2 === "Seeker"){
    points += 1;
  }
  if(q3 === "Controls"){
    points += 1;
  }
  if(q4 === "Expelliarmus"){
    points += 1;
  }
  if(q5 === "Otter"){
    points += 1;
  }
  if(q6 === "Marvolo's Ring"){
    points += 1;
  }

  document.write("Your final score is " + points);

}

function calculateScoreFantasyLevel2(){
  var q7 = document.quiz.fantasyLevel2Question1.value;
  var q8 = document.quiz.fantasyLevel2Question2.value;
  var q9 = document.quiz.fantasyLevel2Question3.value;
  var q10 = document.quiz.fantasyLevel2Question4.value;
  var q11 = document.quiz.fantasyLevel2Question5.value;
  var q12 = document.quiz.fantasyLevel2Question6.value;


  if(q7 === "Butcher"){
    points += 1;
  }
  if(q8 === "Fink"){
    points += 1;
  }
  if(q9 === "Avenias"){
    points += 1;
  }
  if(q10 === "Blue and Gold"){
    points += 1;
  }
  if(q11 === "Staring directly at the princess"){
    points += 1;
  }
  if(q12 === "Brown"){
    points += 1;
  }

  document.write("Your final score is " + points);

}

function calculateScoreFantasyLevel3(){
  var q13 = document.quiz.fantasyLevel3Question1.value;
  var q14 = document.quiz.fantasyLevel3Question2.value;
  var q15 = document.quiz.fantasyLevel3Question3.value;
  var q16 = document.quiz.fantasyLevel3Question4.value;
  var q17 = document.quiz.fantasyLevel3Question5.value;
  var q18 = document.quiz.fantasyLevel3Question6.value;

  if(q13 === "Inej"){
    points += 1;
  }
  if(q14 === "By dropping down from a rooftop"){
    points += 1;
  }
  if(q15 === "Toffee"){
    points += 1;
  }
  if(q16 === "Grey"){
    points += 1;
  }
  if(q17 === "Amsterdam"){
    points += 1;
  }
  if(q18 === "Ravka"){
    points += 1;
  }

  document.write("Your final score is " + points);

}


