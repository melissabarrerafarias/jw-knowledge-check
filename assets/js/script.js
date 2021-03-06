// questions for kids bible quiz
const kidsQuestions = [
    {
        question: "1. ¿Quien construyó el arca? ",
        choices: ["Jose", "Noé", "Abrahán", "David"],
        answer: "Noé"
    },

    {
        question: "2. ¿A quien mato David con una piedra (y la ayuda de Jehová)?",
        choices: ["Jezabel", "Siquem", "Goliat", "Hamán"],
        answer: "Goliat"
    },

    {
        question: "3. ¿Cuales eran los nombres de los hijos gemelos de Isaac?",
        choices: ["Esaú y Jacob", "David y Samuel", "Jose y Benjamin", "Isaias y Ismael"],
        answer: "Esaú y Jacob"
    },

    {
        question: "4. ¿Cuales eran los nombres de los tres jóvenes hebreos? (nombres babilonios)",
        choices: ["Santiago, Juan, Andres", "Samuel, Isaac, y Moises", "Sadrac, Mesac y Abednego", "Mesac, David, Daniel"],
        answer: "Sadrac, Mesac y Abednego"
    },

    {
        question: "5. ¿Que personaje estuvo dentro de un pez muy grande? ",
        choices: ["Nehemias", "Jonas", "Elias", "Malaquias"],
        answer: "Jonas",
    },

    {
        question: "6. ¿Que siervo fiel fue vendido por sus propios hermanos? ",
        choices: ["Jesus", "Moises", "Jose", "Esteban"],
        answer: "Jose"
    },

    {
        question: "7. ¿Cuales eran los nombres de los dos primeros hijos de Adán y Eva? ",
        choices: ["Set y Cam", "Jose y Benjamin", "Esaú y Jacob", "Caín y Abel"],
        answer: "Caín y Abel"
    },

    {
        question: "8. ¿Cuantas plagas mando Jehová contra Egipto? ",
        choices: ["8", "10", "9", "12"],
        answer: "10"
    },

    {
        question: "9. ¿Quien fue la madre de Jesús? ",
        choices: ["Maria", "Marta", "Elizabeth", "Eva"],
        answer: "Maria"
    },

    {
        question: "10. ¿Quien fue el primer ángel que Jehová creó? ",
        choices: ["Emanuel", "Arcangel", "Miguel", "Gabriel"],
        answer: "Miguel"
    }
];

// teachers bootcamp
const teachersQuestions = [
    {
        question: "1. ¿Cual NO es una lección en el libro “Maestros”? ", 
        choices: ["Hablar con naturalidad", "Modular la voz", "Hablar con sencillez", "Introducir bien una revista"], 
        answer: "Introducir bien una revista"
    },
    {
        question: "2. ¿Cuántos tratados hay en el kit de enseñanza? ", 
        choices: ["9", "8", "10", "7"], 
        answer: "9"
    },
    {
        question: "3. ¿Cuantas Atalayas recibimos para el público cada año? ", 
        choices: ["6", "3", "12", "4"], 
        answer: "3"
    },
    {
        question: "4. ¿Cuantas preguntas se hacen cuando alguien quiere ser publicador no bautizado? ", 
        choices: ["10", "8", "20", "15"], 
        answer: "10"
    },
    {
        question: "5. ¿Cuantas horas predica un precursor regular? ", 
        choices: ["50", "60", "70", "120"], 
        answer: "70"
    },
    {
        question: "6. ¿Cual es el tema central de la Biblia? ", 
        choices: ["Jesus", "El Reino", "La vida eterna", "La descendencia prometida"], 
        answer: "El Reino"
    },
    {
        question: "7. ¿Que texto usaría para mostrar que el Reino eliminará las enfermedades? ", 
        choices: ["Apocalipsis 4:11", "Isaías 23:14", "Isaías 33:24", "Mateo 22:21"], 
        answer: "Isaías 33:24 "
    },
    {
        question: "8. ¿Cuantas lecciones hay en el folleto 'Buenas noticias'?", 
        choices: ["14", "15", "16", "10"], 
        answer: "15"
    },
    {
        question: "9. ¿Que folleto usaría para los que no saben leer?", 
        choices: ["Escuche a Dios y vivirá para siempre", "Escuche a Dios", "De padres a hijos", "Introducción a la Palabra de Dios"], 
        answer: "Escuche a Dios"
    },
    {
        question: "10. ¿Cual de estos textos muestra que Jehová es el nombre de Dios?", 
        choices: ["Salmos 83:17", "Genesis 3:16", "Lucas 15:7", "Isaías 42:8"], 
        answer: "Isaías 42:8"
    }
];

const easyQuestions = [
    {
        question: "1. ¿En que orden creo Jehová?", 
        choices: ["Peces y aves, animales terrestres, ser humano", "Animales terrestres, peces y aves, ser humano", "Ser humano, animales terrestres, peces y aves", "Ser humano, peces y aves, animales terrestres"], 
        answer: "Peces y aves, animales terrestres, ser humano"
    },
    {
        question: "2. ¿Cual es el tercer libro de la Biblia?", 
        choices: ["Deuteronomio", "Exodo", "Levítico", "Números"], 
        answer: "Levítico"
    },
    {
        question: "3. ¿Cual fue la primera cuidad Cananea que conquistaron los israelitas?", 
        choices: ["Gabaón", "Hai", "Guilgal", "Jericó"], 
        answer: "Jericó"
    },
    {
        question: "4. ¿Donde estaba la Tierra Prometida?", 
        choices: ["Belen", "Canaán", "Egipto", "Jerusalen"], 
        answer: "Canaán"
    },
    {
        question: "5. ¿Cuántos sobrevivieron el diluvio?", 
        choices: ["8", "7", "9", "10"], 
        answer: "8"
    },
    {
        question: "6. ¿Cuantos apóstoles se llamaban Santiago?", 
        choices: ["1", "3", "2", "0"], 
        answer: "2"
    },
    {
        question: "7. ¿Cual era el primer mandamiento de los 10 mandamientos?", 
        choices: ["'No debes tener otros dioses contra mi rostro'", "'No debes hacerte una imagen tallada [..], ni debes inclinarte ante ellas ni servirles'", "'No debes tomar el nombre de Jehová tu Dios de manera indigna'", "'Honra a tu padre y a tu madre'"], 
        answer: "'No debes tener otros dioses contra mi rostro'"
    },
    {
        question: "8. ¿Cual es el penúltimo libro de la Biblia?", 
        choices: ["Santiago", "3 Juan", "Judas", "Apocalipsis"], 
        answer: "Judas"
    },
    {
        question: "9. ¿Cual fue la primera plaga que mando Jehová contra Egipto?", 
        choices: ["Ranas", "Granizo", "Mosquitos", "Agua convertida en sangre"], 
        answer: "Agua convertida en sangre"
    },
    {
        question: "10. ¿Quien NO era un apóstol de Jesús?", 
        choices: ["Alfeo", "Tadeo", "Felipe", "Simón"], 
        answer: "Alfeo"
    },
];

const startBtn = document.getElementById("start");
const rules = document.getElementById("rules");
const headerText = document.getElementById("header-text");
const timerShow = document.getElementById("timerShow");

// timer variables
const seconds = document.createElement("p");
seconds.className = "timer-text mt-4";
let count = 120;

// score variable
let score = 0;

const currentScore = document.createElement("p");
currentScore.className = "timer-text mt-4";

// display question

let questionDisplay = document.createElement("p");
questionDisplay.className = "question-text col-12";
let currentQuestion = 0;

// show final score
const scoreDiv = document.getElementById("scoreContainer");

// play again ??
const playAgainBtn = document.createElement("button");
playAgainBtn.className = "btn btn-lg btn-outline-primary mt-4 question-choices";
playAgainBtn.textContent = "Vuelve al menú principal";


function chooseQuiz() {
    startBtn.className = "display-none";
    rules.innerHTML = "";
    headerText.className = "display-none";

    const chooseWho = document.createElement("p");
    chooseWho.textContent = "Escoja cual examen quiere tomar:"
    chooseWho.className = "choose-who-text";

    const kidsBtn = document.createElement("button");
    const teachersBtn = document.createElement("button");
    const easyBtn = document.createElement("button");

    kidsBtn.textContent = "Para los Niños";
    teachersBtn.textContent = "Seamos Buenos Maestros!";
    easyBtn.textContent = "Facil!";

    kidsBtn.className = "btn btn-lg btn-outline-info m-3 choose-quiz";
    teachersBtn.className = "btn btn-lg btn-outline-info m-3 choose-quiz";
    easyBtn.className = "btn btn-lg btn-outline-info m-3 choose-quiz";
    

    rules.append(chooseWho, kidsBtn, teachersBtn, easyBtn);

    kidsBtn.addEventListener("click", function () {
        let timer = setInterval(function () {
            count--;
            seconds.textContent = "Segundos: " + count;
            timerShow.appendChild(seconds);

            currentScore.textContent = `Puntaje : ${score}`;
            timerShow.appendChild(currentScore);
            if (count < 1) {
                endQuiz();
                clearInterval(timer);
                console.log("the game has ended");
            }
        }, 1000);
        kidsQuiz();
    });

    teachersBtn.addEventListener("click", function () {
        let timer = setInterval(function () {
            count--;
            seconds.textContent = "Segundos: " + count;
            timerShow.appendChild(seconds);

            currentScore.textContent = `Puntaje : ${score}`;
            timerShow.appendChild(currentScore);
            if (count < 1) {
                endQuiz();
                clearInterval(timer);
                console.log("the game has ended");
            }
        }, 1000);
        teachersQuiz();
    });

    easyBtn.addEventListener("click", function () {
        let timer = setInterval(function () {
            count--;
            seconds.textContent = "Segundos: " + count;
            timerShow.appendChild(seconds);

            currentScore.textContent = `Puntaje : ${score}`;
            timerShow.appendChild(currentScore);
            if (count < 1) {
                endQuiz();
                clearInterval(timer);
                console.log("the game has ended");
            }
        }, 1000);
        easyQuiz();
    });
};

// kids quiz
kidsQuiz = function () {
    rules.innerHTML = '';

    let question = kidsQuestions[currentQuestion];

    rules.appendChild(questionDisplay);

    for (i = 0; i < question.choices.length; i++) {
        questionDisplay.textContent = question.question;

        let answersBtn = document.createElement("button");
        answersBtn.className = "question-choices btn btn-lg btn-outline-dark m-2 col-4";
        answersBtn.textContent = question.choices[i];
        rules.append(answersBtn);
        answersBtn.addEventListener("click", kidsCheckAnswer);
    };
}

function kidsCheckAnswer(event) {
    let chosenAnswer = event.target.textContent;
    console.log({ chosenAnswer });

    if (chosenAnswer === kidsQuestions[currentQuestion].answer) {
        console.log("correct!");
        addPoints();
    }

    else {
        console.log("incorrect!");
        removePoints();
        appendTime();
    }
    currentQuestion++;

    if (currentQuestion < kidsQuestions.length) {
       kidsQuiz();
    }

    else {
        console.log("the game has ended!");
        endQuiz();
    }
};

// kids quiz
teachersQuiz = function () {
    rules.innerHTML = '';

    let question = teachersQuestions[currentQuestion];

    rules.appendChild(questionDisplay);

    for (i = 0; i < question.choices.length; i++) {
        questionDisplay.textContent = question.question;

        let answersBtn = document.createElement("button");
        answersBtn.className = "question-choices btn btn-lg btn-outline-dark m-2 col-4";
        answersBtn.textContent = question.choices[i];
        rules.append(answersBtn);
        answersBtn.addEventListener("click", teachersCheckAnswer);
    };
}

function teachersCheckAnswer(event) {
    let chosenAnswer = event.target.textContent;
    console.log({ chosenAnswer });

    if (chosenAnswer === teachersQuestions[currentQuestion].answer) {
        console.log("correct!");
        addPoints();
    }

    else {
        console.log("incorrect!");
        removePoints();
        appendTime();
    }
    currentQuestion++;

    if (currentQuestion < teachersQuestions.length) {
       teachersQuiz();
    }

    else {
        console.log("the game has ended!");
        endQuiz();
    }
};

easyQuiz = function () {
    rules.innerHTML = '';

    let question = easyQuestions[currentQuestion];

    rules.appendChild(questionDisplay);

    for (i = 0; i < question.choices.length; i++) {
        questionDisplay.textContent = question.question;

        let answersBtn = document.createElement("button");
        answersBtn.className = "question-choices btn btn-lg btn-outline-dark m-2 col-4";
        answersBtn.textContent = question.choices[i];
        rules.append(answersBtn);
        answersBtn.addEventListener("click", easyCheckAnswer);
    };
}

function easyCheckAnswer(event) {
    let chosenAnswer = event.target.textContent;
    console.log({ chosenAnswer });

    if (chosenAnswer === easyQuestions[currentQuestion].answer) {
        console.log("correct!");
        addPoints();
    }

    else {
        console.log("incorrect!");
        removePoints();
        appendTime();
    }
    currentQuestion++;

    if (currentQuestion < easyQuestions.length) {
       easyQuiz();
    }

    else {
        console.log("the game has ended!");
        endQuiz();
    }
};

// time penalty
function appendTime() {
    count -= 10;
    if (count < 0) {
        count = 0;
    }
}

// add to score if question answered correctly
function addPoints() {
    score += 10;
}

function removePoints() {
    score -= 5;
    if (score < 0) {
        score = 0;
    }
}

function endQuiz(timer) {
    clearInterval(timer);

    // timer
    seconds.className = "display-none";
    seconds.className = "display-none";
    // questions
    rules.className = 'display-none';
    // score 
    timerShow.className = "display-none";

    // final score showing

    const totalScore = document.createElement("h2");
    totalScore.className = "rules-text";
    totalScore.textContent = `Su punataje salio a : ${score} / 100`;

    scoreDiv.append(totalScore, playAgainBtn);
}

playAgainBtn.addEventListener("click", function () {
    location.reload();
})



startBtn.addEventListener("click", function () {
    chooseQuiz();
});