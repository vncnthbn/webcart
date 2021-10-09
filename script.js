	function onSubmit(){
		var score=0;
		var numOfQuestions= 20;
		var ansArr['a','b','c','d','a','b','c','d','a','b','c','d','a','b','c','d','a','b','c','d'];
		var i;
		var q1= document.forms['quiz']['q1'].value;
		var q2= document.forms['quiz']['q2'].value;
		var q3= document.forms['quiz']['q3'].value;
		var q4= document.forms['quiz']['q4'].value;
		var q5= document.forms['quiz']['q5'].value;
		var q6= document.forms['quiz']['q6'].value;
		var q7= document.forms['quiz']['q7'].value;
		var q8= document.forms['quiz']['q8'].value;
		var q9= document.forms['quiz']['q9'].value;
		var q10= document.forms['quiz']['q10'].value;
		var q11= document.forms['quiz']['q11'].value;
		var q12= document.forms['quiz']['q12'].value;
		var q13= document.forms['quiz']['q13'].value;
		var q14= document.forms['quiz']['q14'].value;
		var q15= document.forms['quiz']['q15'].value;
		var q16= document.forms['quiz']['q16'].value;
		var q17= document.forms['quiz']['q17'].value;
		var q18= document.forms['quiz']['q18'].value;
		var q19= document.forms['quiz']['q19'].value;
		var q20= document.forms['quiz']['q20'].value;


		for (var i= 1;i<=numOfQuestions;i++){

			if (eval('q'+ 1)== "" ) {
				alert("you missed a question number" + i);
			}
		}
			for(var i= 1; i<=numOfQuestions;i++){
				if(eval('q'+ i)== ansArr[i - 1]){
					score++;
				}
			}
			var results = document.getElementById("results");
			results.innerHTML="<h2>You Scored"+ score +"points out of"+  numOfQuestions +"</h2>"
						alert('You Scored' + score+ "out of"+ numOfQuestions);
				return false;
		}