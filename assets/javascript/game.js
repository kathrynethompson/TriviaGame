var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,

    clock: function() {
        game.counter--;
        $('#counter').html(game.counter);

        if (game.counter === 0) {
            alert("Game over!");
        }
    },
    start: function() {
        game.start;
    },
}

var questionOne = {
    question: "1. Who is the main character in Kingdom Hearts?",
    answer: [" Shinji", " Riku", " Sora", " Kairi"],
    correctAnswer: 2,
};

var questionTwo = {
    question: '2. What is the name of the princess you have to save in The Legend of Zelda?',
    answer: [" Link", " Zelda", " Navi", " Peach"],
    correctAnswer: 1,
};

var questionThree = {
    question: "What is the name of the second installment of Elder Scrolls?",
    answer: [" Oblivion", " Daggerfall", " Skyrim", " Bloodmoon"],
    correctAnswer: 1,
};

var questionFour = {
    question: "4. Developed by Capcom, what is the name of the main character in Devil May Cry?",
    answer: [" Dante", " Snake", " Nero", " Mondus"],
    correctAnswer: 0,
};

var questionFive = {
    question: "5. What company developed Fallout 4?",
    answer: [" EA", " Bethesda", " Ubisoft", " Microsoft"],
    correctAnswer: 1,
};

var questionSix = {
    question: "6. Which game do you encounter enemies called the Fallen, Vex, Cabal, and Hive?",
    answer: [" Borderlands", " Fallout", " Destiny", " Bioshock"],
    correctAnswer: 2,
};

var questionSeven = {
    question: "7. On what world does the game Final Fantasy 7 take place?",
    answer: [" Drakengaurd", " Morrowwind", " Nether Realm", " Gaia"],
    correctAnswer: 3,
};


var questions = [
    questionOne,
    questionTwo,
    questionThree,
    questionFour,
    questionFive,
    questionSix,
    questionSeven,
];

$(document).ready(function() {

    $('.btn').on('click', function() {
        $('.startWindow').addClass('invisible');
        $('.questionArea').removeClass('invisible');


        var submitButton = $('<button>');
        submitButton.addClass('submit');
        submitButton.text('Submit');
        $('.wrapper').append(submitButton);

        $('.submit').on('click', function() {
            $('.questionArea').hide();
            submitButton.remove();
            $('.music').remove();
            $('#counter').remove();
            clearInterval(timer);


            function checkAnswer() {
                console.log('hello');
                $('.input:checked').each(function() {
                    if ($(this).attr('data-correct') === 'true') {
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
            };
            checkAnswer();
            var scoreArea = $('<div>');
            scoreArea.addClass('scoring');
            scoreArea.text("You guessed " + game.correct + " correct and " + game.incorrect + " wrong!");
            $('.wrapper').append(scoreArea)
            $('.finalpic').show();


            var refreshButton = $('<button>');
            refreshButton.addClass('refresh');
            refreshButton.text('Play Again!');
            $('.wrapper').append(refreshButton);

            $('.refresh').click(function() {
                location.reload();
            })

        });

    
        timer = setInterval(game.clock, 1000)
        $('.questionArea').prepend("Time left: <span id='counter'>120</span> Seconds");
        for (var i = 0; i < questions.length; i++) {
            var showQuestion = $('<div class="question">');
            var questionText = $('<div class="question-text">');
            questionText.html(questions[i].question);
            showQuestion.append(questionText);


            var answerGroup = $('<form class="answers">');
            showQuestion.append(answerGroup);


            for (var j = 0; j < questions[i].answer.length; j++) {
                var showAnswer = $('<div class="answer"></div>');
                var input = $('<input type="radio" name="radio" class="input">');
                input.attr('data-correct', questions[i].correctAnswer === j);
                showAnswer.append(input);
                showAnswer.append(questions[i].answer[j]);
                answerGroup.append(showAnswer);
            }



            $('.questionArea').append(showQuestion);

        }

    });
});
