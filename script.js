var questions = [
  {
    question: "How long do you want to stay there?",
    choices: ["Less than 2 hours", "2-4 hours", "> 4 hours"]
  },

  {
    question: "What type of attraction are you interested in?",
    choices: ["Food & Nightlife", "Museums & Cultural", "Nature & Adventure"],
    picture: [
      "https://cdn.glitch.com/989a4e4c-d4bd-4c9c-8e40-aeaa6afa4b35%2Fmarginalia-640.png?v=1598760634105",
      "https://cdn.glitch.com/989a4e4c-d4bd-4c9c-8e40-aeaa6afa4b35%2Fmuseum.png?v=1598758799490",
      "https://cdn.glitch.com/989a4e4c-d4bd-4c9c-8e40-aeaa6afa4b35%2Fnature.png?v=1598758806267"
    ]
  },

  {
    question: "Who are you going with?",
    choices: ["friends", "with a date", "family"],
    picture: [
      "https://cdn.glitch.com/989a4e4c-d4bd-4c9c-8e40-aeaa6afa4b35%2Ffriends.png?v=1598730484670",
      "https://cdn.glitch.com/989a4e4c-d4bd-4c9c-8e40-aeaa6afa4b35%2Fdate.png?v=1598730574723",
      "https://cdn.glitch.com/989a4e4c-d4bd-4c9c-8e40-aeaa6afa4b35%2Ffam.png?v=1598730523862"
    ]
  }
];


var clicks = 1;
var maxclicks = 3;

let destination = "lol";

let counter = 1;
function submit(clicked_id) {
  if (clicks == counter) {
    finalAnswers.push(answers[answers.length - 1]);
    alert(finalAnswers);
    counter++;
  } else {
    alert("You've already submitted");
  }
}
function newQuestion() {
  if (clicks == maxclicks) {
    //     //location.replace("results.html");
    if (finalAnswers.join("") == 111) {
      destination = "Snakes & Lattes";
    } else if (finalAnswers.join("") == 112) {
      destination = "O.NOIR";
    } else if (finalAnswers.join("") == 113) {
      destination = "Figures";
    } else if (finalAnswers.join("") == 121) {
      destination = "Mackenzie House";
    } else if (finalAnswers.join("") == 122) {
      destination = "Casa Loma";
    } else if (finalAnswers.join("") == 123) {
      destination = "Simcoe WaveDeck";
    } else if (finalAnswers.join("") == 131) {
      destination = "Elora Gorge Park";
    } else if (finalAnswers.join("") == 132) {
      destination = "Webster Falls / Dundas Peak";
    } else if (finalAnswers.join("") == 133) {
      destination = "Bluffers Park";
    } else if (finalAnswers.join("") == 211) {
      destination = "Rec Room";
    } else if (finalAnswers.join("") == 212) {
      destination = "360 Restaurant";
    } else if (finalAnswers.join("") == 213) {
      destination = "Yasu";
    } else if (finalAnswers.join("") == 221) {
      destination = "A Space Gallery";
    } else if (finalAnswers.join("") == 222) {
      destination = "Royal Ontario Museum";
    } else if (finalAnswers.join("") == 223) {
      destination = "Ripley's Aquarius of Canada";
    } else if (finalAnswers.join("") == 231) {
      destination = "Tommy Thompson Park";
    } else if (finalAnswers.join("") == 232) {
      destination = "Humber Bay Park East";
    } else if (finalAnswers.join("") == 233) {
      destination = "High Park Nature Centre";
    } else if (finalAnswers.join("") == 311) {
      destination = "Arriba Restaurants";
    } else if (finalAnswers.join("") == 312) {
      destination = "Lovechild (Nightclub)";
    } else if (finalAnswers.join("") == 313) {
      destination = "Medieval Times Dinner & Tournament";
    } else if (finalAnswers.join("") == 321) {
      destination = "Luminato Festival";
    } else if (finalAnswers.join("") == 322) {
      destination = "Four Seasons Centre for the Performing Arts";
    } else if (finalAnswers.join("") == 323) {
      destination = "Ago Khan Museum";
    } else if (finalAnswers.join("") == 331) {
      destination = "Mono Cliffs Botanical Park";
    } else if (finalAnswers.join("") == 332) {
      destination = "Toronto Botanical Garden";
    } else if (finalAnswers.join("") == 333) {
      destination = "Toronto Island Park";
    }
    document.getElementById("result").innerHTML =
      "Your destination is: " + destination;
    //alert(destination);
  } else {
    document.getElementById("question").innerHTML = questions[clicks].question;
    document.getElementById("1").innerHTML = questions[clicks].choices[0];
    document.getElementById("2").innerHTML = questions[clicks].choices[1];
    document.getElementById("3").innerHTML = questions[clicks].choices[2];
    var startImage = document.createElement("startImage");
    startImage.src = questions[clicks].picture[0];
    document.getElementById("image").innerHTML =
      '<img src="' + startImage.src + '"/>';
    document.getElementById("1").style.background = "red";
    answers.push(1);
    clicks++;
  }
}

//onclick button store button number : lets say theres 6 options max, toggle/hide some if necessary

let answers = [];
let finalAnswers = [];
function storeAnsw(clicked_id) {
  //var pic = "https://cdn.glitch.com/989a4e4c-d4bd-4c9c-8e40-aeaa6afa4b35%2Fhourglass.png?v=1598730493131";
  //alert(clicked_id);
  if (clicks != 1) {
    var mainImage = document.createElement("mainImage");
    mainImage.src = questions[clicks - 1].picture[clicked_id - 1];
    document.getElementById("image").innerHTML =
      '<img src="' + mainImage.src + '"/>';
  }
  if (clicked_id == 1) {
    document.getElementById(clicked_id).style.background = "red";
    document.getElementById("2").style.background = "aliceblue";
    document.getElementById("3").style.background = "aliceblue";
  } else if (clicked_id == 2) {
    document.getElementById(clicked_id).style.background = "red";
    document.getElementById("1").style.background = "aliceblue";
    document.getElementById("3").style.background = "aliceblue";
  } else if (clicked_id == 3) {
    document.getElementById(clicked_id).style.background = "red";
    document.getElementById("2").style.background = "aliceblue";
    document.getElementById("1").style.background = "aliceblue";
  }

  answers.push(clicked_id);
  //alert("Added to array");
  // alert("ID's stored in array: " + answers);
  //display picture
  //if (clicked_id == 1) {
  //fetch this questions[clicks].pictures[clicked_id-1];
  //}
}
