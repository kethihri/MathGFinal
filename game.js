player1_name = localStorage.getItem(player1_name);
player2_name = localStorage.getItem(player2_name);

document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;

function Send()
{
    Number1 = document.getElementById("number").value;;
    console.log(Number1);

    input_box = "<input type='number' id='Guess' style='color: rgb(255, 255, 255)'>";
    check_button = "<br><br><button class='btn btn-primary' onclick='Check()' style='width: 30%;'>Check</button>";
    HL = "<br><br><label id='Higher/Lower' style='font-size: 20px; color: black;'></label>";
    img = "<br><br> <img src='NC.jpg'>";
    row = input_box + check_button + HL + img;
    document.getElementById("GUESS").innerHTML = row;
}

function Check() 
{
   
    console.log(Number1);
    var Guess = document.getElementById("Guess").value;
 
    
    if(Guess > Number1)
    {
        document.getElementById("Higher/Lower").innerHTML = "Lower";
    }

    else if(Guess < Number1)
    {
        document.getElementById("Higher/Lower").innerHTML = "Higher";
    }

    else if(Guess==Number1)
    {
        document.getElementById("Higher/Lower").innerHTML = "You Did It!!";
    }
}