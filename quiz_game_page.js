var p1_name = localStorage.getItem("player1_name");
var p2_name = localStorage.getItem("player2_name");
p1_score = 0;
p2_score = 0;
document.getElementById("player1").innerHTML = p1_name+ " : ";
document.getElementById("player2").innerHTML = p2_name+ " : ";
document.getElementById("p1score").innerHTML = p1_score;
document.getElementById("p2score").innerHTML = p2_score;
document.getElementById("playerQues").innerHTML = "Question Turn - "+ p1_name;
document.getElementById("playerAns").innerHTML = "Answer Turn - "+ p2_name;

function send(){
    number1 = document.getElementById("word1").value;
    number2 = document.getElementById("word2").value;
    actual_ans = parseInt(number1) * parseInt(number2);
    
    ques_no = "<h4>" + number1 + " X "+ number2  +"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_btn = "<br><br><button class='btn btn-info' onlick='check()'>Check </button>";
row = ques_no + input_box + check_btn;

document.getElementById("output").innerHTML = row;
document.getElementById("word1").value = "";
document.getElementById("word2").value = "";
}
