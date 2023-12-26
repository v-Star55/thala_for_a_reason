const msDhoniQuotes = [
    "I believe in giving more than 100% on the field, and I don't really worry about the result if there's great commitment on the field. That's victory for me.",
    "I play aggressive cricket, and I like to dominate.",
    "I have always believed that process is more important than results.",
    "I am always the one who is responsible for anything bad that happens in Indian cricket. Everything that happens is because of me.",
    "I don't study cricket too much. Whatever I have learned or experienced is through cricket I've played on the field, and whatever little I have watched.",
    "I don't mind repeating everything.",
    "I live in the present with an eye on the future.",
    "What captains want is players who move well in the field.",
    "I am blessed with a very good family.",
    "I am touched by the admiration and ovation I receive from CSK fans, which will always remain close to my heart.",
    "If you keep winning, you don't know the areas you've to work hard.",
    "I Never allow myself to be pressured.",
    "I don't regret anything in life.",
    "Definitely NOT",
    "I am on national duty, everything else can wait.",
    "I tell my wife she is only the third most important thing after my country and my parents, in that order.",
];


const quote = document.querySelector(".quoteText");
const thala = document.querySelector(".thala");
const notThala = document.querySelector(".notThala");
const thalaAudio = document.querySelector(".thalaAudio");
const notThalaAudio = document.querySelector(".notThalaAudio");
const reason = document.querySelector(".reason");
const thalaVideo = document.querySelector(".thalaVideo");


quote.innerHTML = msDhoniQuotes[Math.floor(Math.random() * msDhoniQuotes.length)];  

const validation=["dhoni","msd","csk","thala","7","captain cool","definitely not","sakshi","ziva","ranchi","2011","2007","2013","5","1981"];
const notValid=["mahendra singh dhoni","ms dhoni","mahendra"]



// function to calculate the sum of digits of a number

const sum = function (num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

// Adding event listener to the form

document.querySelector("form").addEventListener("submit", function (event) {

    event.preventDefault();
    // Resetting the display

    thala.style.display = "none";
    notThala.style.display = "none";

  // Resetting the audio
    thalaAudio.currentTime = 0;
    notThalaAudio.currentTime = 0;
    thalaAudio.pause();
    notThalaAudio.pause();
  // Resetting the video
    thalaVideo.currentTime = 0;
    thalaVideo.pause();  

    let input = document.querySelector(".inputText").value;
    let ans;
    input = input.toLowerCase();
    input = input.trim();
    let num = parseInt(input);
    let flag = false;

 // Checking if input is empty   
    if (input.length === 0) {
        alert("Please Write Something");
        return;
    }

    if(notValid.includes(input)){
        alert("Saale naam kyu likh raha hai?");
        return; 
    }

    if(num===1983){
        alert("Chaman Voh MS Dhoni ne nahi jeet vaya tha, Kapil Dev ne jeetaya tha !!");
        return;
    }

    if(num===2019){
        alert("Yeh yaad mat dila !! Amaa Behen par aajaunga mein !!");
        return;
    }

    // Checking if input is a number

    if (isNaN(num) === false) {
        ans = sum(num);
        flag = true;
    }


    if (input.length === 7|| validation.includes(input) || ans === 7 || num % 7 === 0) {


// checking and displaying the reason.

        if (flag === true) {
            if (ans === 7) {
                reason.innerHTML = "The sum of the digits is 7";
            }
            if (num % 7 === 0) {
                reason.innerHTML = "The number is divisible by 7";
            }
            if (num === 7 || input === "7") {
                reason.innerHTML = "The number is 7";
            }
            if(num===5){
                reason.innerHTML="CSK won IPL 5 times";
            }
            if(num===2011){
                reason.innerHTML="India won the world cup in 2011";
            }
            if(num===2007){
                reason.innerHTML="India won the T20 world cup in 2007";
            }
            if(num===2013){
                reason.innerHTML="India won the Champions Trophy in 2013";
            }
            if(num===1981){
                reason.innerHTML="THALA was born in 1981";
            }

        }
        else{
            if(input.length===7){
                reason.innerHTML="You wrote " + input+ " which is 7 characters long";
            }else{
                reason.innerHTML = "You wrote " + input;
            }
        }
 
  // Displaying the result      

        thala.style.display = "block";
        thalaAudio.play();
        thalaVideo.play();
        return;
    } else {
        notThala.style.display = "block";
        notThalaAudio.play();
    }

});
