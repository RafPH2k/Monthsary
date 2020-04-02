
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
	var correct = 0;


	if (question1 == "July,4,2018") {
		correct++;
}
	if (question2 == "Table Tennis") {
		correct++;
}	
	if (question3 == "Violet") {
		correct++;
}
    if (question4 == "08/08/2000") {
		correct++;
}
	if (question5 == "Human Fall Flat") {
		correct++;
}
    
	var pictures =["Pix/prize1.png","Pix/prize4.png","Pix/prize3.png","Pix/prize4.png"]
	var messages = ["Great job! Here is your Prize Claim this after Quarantine!", "That's just okay Here is your Prize Claim this after Quarantine!", "You really need to do better Here is your Consolation prize Claim this after Quarantine!","Well Done! Here is your Prize Claim this after Quarantine!"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 5) {
		score = 1;
	}

	if (correct == 5) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
	
