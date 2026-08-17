document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    /* =========================================================
       LOVE.EXE — PRODUCTION CONFIG
    ========================================================= */

    const CONFIG = {

        // =====================================================
        // CHANGE YOUR CUSTOM CONTENT HERE
        // =====================================================

        name: "Her Name",

        landingMessage:
            "Someone made this<br>especially for you.",

        confessionLines: [
            "I could've just texted you.",

            "I could've said it in one sentence.",

            "But somehow...\nthat didn't feel like enough.",

            "So I made this little place\njust for you.",

            "Because there was something\nI wanted you to know.",

            "I like you."
        ],

        finalMessage:
            "Maybe this is where\nour little story begins.",

        // =====================================================
        // AUDIO VOLUMES
        // =====================================================

        musicVolume: 0.28,

        clickVolume: 0.38,

        hoverVolume: 0.16,

        transitionVolume: 0.30,

        heartbeatVolume: 0.30,

        successVolume: 0.62
    };


    /* =========================================================
       HELPER
    ========================================================= */

    const $ = (id) => document.getElementById(id);


    function showScene(scene) {

        if (!scene) {
            return;
        }

        document
            .querySelectorAll(".scene")
            .forEach((item) => {
                item.classList.remove("active");
            });

        requestAnimationFrame(() => {
            scene.classList.add("active");
        });

    }


    /* =========================================================
       SCENES
    ========================================================= */

    const landingScreen =
        $("landingScreen");

    const bootScreen =
        $("bootScreen");

    const readyScreen =
        $("readyScreen");

    const questionScreen =
        $("questionScreen");

    const analysisScreen =
        $("analysisScreen");

    const mysteryScreen =
        $("mysteryScreen");

    const confessionScreen =
        $("confessionScreen");

    const valentineScreen =
        $("valentineScreen");

    const yesScreen =
        $("yesScreen");

    const timeScreen =
        $("timeScreen");


    /* =========================================================
       BUTTONS
    ========================================================= */

    const startBtn =
        $("startBtn");

    const continueBtn =
        $("continueBtn");

    const mysteryContinueBtn =
        $("mysteryContinueBtn");

    const confessionContinueBtn =
        $("confessionContinueBtn");

    const yesBtn =
        $("yesBtn");

    const timeBtn =
        $("timeBtn");


    /* =========================================================
       AUDIO ELEMENTS
    ========================================================= */

    const audio = {

        bgm:
            $("bgm"),

        click:
            $("clickSound"),

        hover:
            $("hoverSound"),

        transition:
            $("transitionSound"),

        heartbeat:
            $("heartbeatSound"),

        success:
            $("successSound")

    };


    /* =========================================================
       AUDIO STATE
    ========================================================= */

    let musicEnabled = true;

    let soundEnabled = true;


    /* =========================================================
       OTHER ELEMENTS
    ========================================================= */

    const progressFill =
        $("progressFill");

    const progressPercent =
        $("progressPercent");

    const bootStatus =
        $("bootStatus");

    const terminal1 =
        $("terminal1");

    const terminal2 =
        $("terminal2");

    const terminal3 =
        $("terminal3");


    const questionText =
        $("questionText");

    const questionSubtext =
        $("questionSubtext");

    const questionCounter =
        $("questionCounter");

    const answers =
        $("answers");


    const analysisStatus =
        $("analysisStatus");


    const confessionText =
        $("confessionText");

    const confessionCursor =
        $("confessionCursor");


    const landingMessage =
        $("landingMessage");

    const finalMessage =
        $("finalMessage");

    const memoryStatus =
        $("memoryStatus");

    const memoryDate =
        $("memoryDate");


    const floatingHearts =
        $("floatingHearts");

    const celebration =
        $("celebration");


    const musicBtn =
        $("musicBtn");

    const soundBtn =
        $("soundBtn");

    const sparkleBtn =
        $("sparkleBtn");


    /* =========================================================
       APPLY CUSTOM CONTENT
    ========================================================= */

    if (landingMessage) {

        landingMessage.innerHTML =
            CONFIG.landingMessage;

    }


    if (finalMessage) {

        finalMessage.textContent =
            CONFIG.finalMessage;

    }


    /* =========================================================
       PAGE TITLE
    ========================================================= */

    document.title =
        CONFIG.name &&
        CONFIG.name !== "Her Name"
            ? `For ${CONFIG.name} ♡`
            : "LOVE.EXE";


    /* =========================================================
       AUDIO — SAFE PLAY
    ========================================================= */

    function playSound(
        sound,
        volume = 0.5
    ) {

        if (
            !soundEnabled ||
            !sound
        ) {
            return;
        }

        try {

            sound.pause();

            sound.currentTime = 0;

            sound.volume =
                Math.max(
                    0,
                    Math.min(
                        1,
                        volume
                    )
                );

            const promise =
                sound.play();

            if (
                promise &&
                typeof promise.catch ===
                "function"
            ) {

                promise.catch(() => {});

            }

        } catch (error) {

            console.warn(
                "Audio error:",
                error
            );

        }

    }


    /* =========================================================
       BACKGROUND MUSIC
    ========================================================= */

    function startMusic() {

        if (
            !musicEnabled ||
            !audio.bgm
        ) {
            return;
        }

        try {

            audio.bgm.volume =
                CONFIG.musicVolume;

            const promise =
                audio.bgm.play();

            if (
                promise &&
                typeof promise.catch ===
                "function"
            ) {

                promise.catch(() => {});

            }

        } catch (error) {

            console.warn(
                "Music could not start:",
                error
            );

        }

    }


    function stopMusic() {

        if (!audio.bgm) {
            return;
        }

        audio.bgm.pause();

    }


    /* =========================================================
       CONTROL STATE
    ========================================================= */

    function updateMusicButton() {

        if (!musicBtn) {
            return;
        }

        musicBtn.classList.toggle(
            "control-active",
            musicEnabled
        );

        musicBtn.style.opacity =
            musicEnabled
                ? "1"
                : "0.45";

    }


    function updateSoundButton() {

        if (!soundBtn) {
            return;
        }

        soundBtn.classList.toggle(
            "control-active",
            soundEnabled
        );

        soundBtn.style.opacity =
            soundEnabled
                ? "1"
                : "0.45";

    }


    /* =========================================================
       START BUTTON
    ========================================================= */

    if (startBtn) {

        startBtn.addEventListener(
            "click",
            () => {

                if (
                    startBtn.disabled
                ) {
                    return;
                }

                console.log(
                    "LOVE.EXE started"
                );


                playSound(
                    audio.click,
                    CONFIG.clickVolume
                );


                startMusic();


                setTimeout(() => {

                    playSound(
                        audio.transition,
                        CONFIG.transitionVolume
                    );

                }, 180);


                startBtn.disabled =
                    true;


                startBtn.style.transform =
                    "scale(.97)";


                createFloatingHearts(
                    window.innerWidth / 2,
                    window.innerHeight / 2,
                    8
                );


                setTimeout(() => {

                    showScene(
                        bootScreen
                    );

                    startBootSequence();

                }, 350);

            }
        );

    } else {

        console.error(
            "LOVE.EXE: startBtn not found."
        );

    }


    /* =========================================================
       BOOT SEQUENCE
    ========================================================= */

    function startBootSequence() {

        if (
            !progressFill ||
            !progressPercent ||
            !bootStatus
        ) {

            console.error(
                "LOVE.EXE: Boot elements missing."
            );

            setTimeout(() => {

                showScene(
                    readyScreen
                );

            }, 1000);

            return;
        }


        progressFill.style.width =
            "0%";

        progressPercent.textContent =
            "0%";


        if (terminal1) {
            terminal1.classList.remove(
                "terminal-active"
            );
        }

        if (terminal2) {
            terminal2.classList.remove(
                "terminal-active"
            );
        }

        if (terminal3) {
            terminal3.classList.remove(
                "terminal-active"
            );
        }


        let progress = 0;


        const states = [

            {
                at: 10,
                text:
                    "Warming up the little heart..."
            },

            {
                at: 27,
                text:
                    "Connecting tiny feelings..."
            },

            {
                at: 44,
                text:
                    "Searching for courage..."
            },

            {
                at: 62,
                text:
                    "Trying not to get nervous..."
            },

            {
                at: 79,
                text:
                    "Preparing something special..."
            },

            {
                at: 93,
                text:
                    "Almost ready..."
            },

            {
                at: 100,
                text:
                    "Everything is ready ♡"
            }

        ];


        const timer =
            setInterval(() => {

                progress++;


                progressFill.style.width =
                    `${progress}%`;


                progressPercent.textContent =
                    `${progress}%`;


                const state =
                    states.find(
                        item =>
                            item.at ===
                            progress
                    );


                if (state) {

                    bootStatus.textContent =
                        state.text;

                }


                if (
                    progress >= 15 &&
                    terminal1
                ) {

                    terminal1.classList.add(
                        "terminal-active"
                    );

                }


                if (
                    progress >= 40 &&
                    terminal2
                ) {

                    terminal2.classList.add(
                        "terminal-active"
                    );

                }


                if (
                    progress >= 72 &&
                    terminal3
                ) {

                    terminal3.classList.add(
                        "terminal-active"
                    );

                }


                if (
                    progress === 44
                ) {

                    playSound(
                        audio.transition,
                        CONFIG.transitionVolume * 0.45
                    );

                }


                if (
                    progress === 100
                ) {

                    clearInterval(
                        timer
                    );


                    setTimeout(() => {

                        showScene(
                            readyScreen
                        );

                    }, 1100);

                }

            }, 42);

    }


    /* =========================================================
       READY → QUESTIONS
    ========================================================= */

    if (continueBtn) {

        continueBtn.addEventListener(
            "click",
            () => {

                playSound(
                    audio.click,
                    CONFIG.clickVolume
                );


                playSound(
                    audio.transition,
                    CONFIG.transitionVolume
                );


                setTimeout(() => {

                    showScene(
                        questionScreen
                    );

                    loadQuestion(0);

                }, 220);

            }
        );

    }


    /* =========================================================
       QUESTION DATA
    ========================================================= */

    const questions = [

        {
            question:
                "Do you enjoy talking to me?",

            subtext:
                "Be honest... I won't judge.",

            answers: [

                {
                    text:
                        "Sometimes",

                    icon:
                        "♡",

                    value:
                        "sometimes"
                },

                {
                    text:
                        "Always",

                    icon:
                        "♥",

                    value:
                        "always"
                }

            ]

        },


        {
            question:
                "Do I make you smile?",

            subtext:
                "There is only one acceptable answer...",

            answers: [

                {
                    text:
                        "A little",

                    icon:
                        "♡",

                    value:
                        "little"
                },

                {
                    text:
                        "More than you know",

                    icon:
                        "♥",

                    value:
                        "more"
                }

            ]

        },


        {
            question:
                "Would you like to make more memories with me?",

            subtext:
                "No pressure. Just be honest.",

            answers: [

                {
                    text:
                        "Maybe",

                    icon:
                        "♡",

                    value:
                        "maybe"
                },

                {
                    text:
                        "I'd love that",

                    icon:
                        "♥",

                    value:
                        "love"
                }

            ]

        }

    ];


    let currentQuestion = 0;

    const userAnswers = [];


    /* =========================================================
       LOAD QUESTION
    ========================================================= */

    function loadQuestion(index) {

        if (
            index < 0 ||
            index >= questions.length
        ) {
            return;
        }


        if (
            !questionText ||
            !questionSubtext ||
            !answers
        ) {
            console.error(
                "Question elements missing."
            );

            return;
        }


        currentQuestion =
            index;


        const data =
            questions[index];


        if (questionCounter) {

            questionCounter.textContent =
                `0${index + 1} / 0${questions.length}`;

        }


        questionText.textContent =
            data.question;


        questionSubtext.textContent =
            data.subtext;


        document
            .querySelectorAll(
                ".progress-dot"
            )
            .forEach(
                (
                    dot,
                    dotIndex
                ) => {

                    dot.classList.toggle(
                        "active",
                        dotIndex === index
                    );

                }
            );


        answers.innerHTML =
            "";


        data.answers.forEach(
            (answer) => {

                const button =
                    document.createElement(
                        "button"
                    );


                button.type =
                    "button";


                button.className =
                    "answer-button";


                button.dataset.answer =
                    answer.value;


                button.innerHTML = `
                    <span>
                        ${answer.text}
                    </span>
                    <span>
                        ${answer.icon}
                    </span>
                `;


                button.addEventListener(
                    "mouseenter",
                    () => {

                        if (
                            window.innerWidth >
                            700 &&
                            !button.disabled
                        ) {

                            playSound(
                                audio.hover,
                                CONFIG.hoverVolume
                            );

                        }

                    }
                );


                button.addEventListener(
                    "click",
                    () => {

                        selectAnswer(
                            button
                        );

                    }
                );


                answers.appendChild(
                    button
                );

            }
        );

    }


    /* =========================================================
       SELECT ANSWER
    ========================================================= */

    function selectAnswer(button) {

        if (
            !button ||
            button.disabled
        ) {
            return;
        }


        const value =
            button.dataset.answer;


        userAnswers[
            currentQuestion
        ] = value;


        document
            .querySelectorAll(
                ".answer-button"
            )
            .forEach(
                (item) => {

                    item.disabled =
                        true;

                }
            );


        button.classList.add(
            "selected"
        );


        playSound(
            audio.click,
            CONFIG.clickVolume
        );


        const rect =
            button.getBoundingClientRect();


        createFloatingHearts(
            rect.left +
            rect.width / 2,

            rect.top,

            5
        );


        setTimeout(
            () => {

                if (
                    currentQuestion <
                    questions.length - 1
                ) {

                    loadNextQuestion();

                } else {

                    beginAnalysis();

                }

            },
            650
        );

    }


    /* =========================================================
       NEXT QUESTION
    ========================================================= */

    function loadNextQuestion() {

        currentQuestion++;


        const card =
            document.querySelector(
                ".question-card"
            );


        if (!card) {

            loadQuestion(
                currentQuestion
            );

            return;

        }


        card.animate(
            [

                {
                    opacity:
                        1,

                    transform:
                        "translateX(0)"
                },

                {
                    opacity:
                        0,

                    transform:
                        "translateX(-30px)"
                }

            ],
            {
                duration:
                    230,

                easing:
                    "ease"
            }
        );


        playSound(
            audio.transition,
            CONFIG.transitionVolume * 0.6
        );


        setTimeout(
            () => {

                loadQuestion(
                    currentQuestion
                );

            },
            230
        );

    }


    /* =========================================================
       ANALYSIS
    ========================================================= */

    function beginAnalysis() {

        showScene(
            analysisScreen
        );


        playSound(
            audio.transition,
            CONFIG.transitionVolume
        );


        const statuses = [

            "Reading your answers...",

            "Cross-checking tiny feelings...",

            "Looking for a pattern...",

            "Almost there...",

            "Analysis complete."

        ];


        if (!analysisStatus) {

            setTimeout(
                () => {

                    showScene(
                        mysteryScreen
                    );

                },
                3000
            );

            return;

        }


        let index = 0;


        analysisStatus.textContent =
            statuses[0];


        const timer =
            setInterval(
                () => {

                    index++;


                    if (
                        index <
                        statuses.length
                    ) {

                        analysisStatus.textContent =
                            statuses[index];

                    }


                    if (
                        index >=
                        statuses.length - 1
                    ) {

                        clearInterval(
                            timer
                        );


                        setTimeout(
                            () => {

                                showScene(
                                    mysteryScreen
                                );

                            },
                            900
                        );

                    }

                },
                650
            );

    }


    /* =========================================================
       MYSTERY
    ========================================================= */

    if (mysteryContinueBtn) {

        mysteryContinueBtn.addEventListener(
            "click",
            () => {

                playSound(
                    audio.click,
                    CONFIG.clickVolume
                );


                playSound(
                    audio.transition,
                    CONFIG.transitionVolume
                );


                setTimeout(
                    () => {

                        showScene(
                            confessionScreen
                        );

                        startConfession();

                    },
                    250
                );

            }
        );

    }


    /* =========================================================
       CONFESSION
    ========================================================= */

    let confessionLineIndex = 0;


    function startConfession() {

        if (
            !confessionText
        ) {
            return;
        }


        confessionLineIndex =
            0;


        confessionText.textContent =
            "";


        if (
            confessionContinueBtn
        ) {

            confessionContinueBtn.classList.remove(
                "visible"
            );

        }


        if (
            confessionCursor
        ) {

            confessionCursor.style.display =
                "inline";

        }


        playSound(
            audio.heartbeat,
            CONFIG.heartbeatVolume
        );


        typeConfessionLine();

    }


    function typeConfessionLine() {

        if (
            confessionLineIndex >=
            CONFIG.confessionLines.length
        ) {

            if (
                confessionCursor
            ) {

                confessionCursor.style.display =
                    "none";

            }


            if (
                confessionContinueBtn
            ) {

                confessionContinueBtn.classList.add(
                    "visible"
                );

            }


            createFloatingHearts(
                window.innerWidth / 2,
                window.innerHeight / 2,
                8
            );


            return;

        }


        const line =
            CONFIG.confessionLines[
                confessionLineIndex
            ];


        confessionText.textContent =
            "";


        let characterIndex =
            0;


        const typing =
            setInterval(
                () => {

                    confessionText.textContent =
                        line.slice(
                            0,
                            characterIndex + 1
                        );


                    characterIndex++;


                    if (
                        characterIndex >=
                        line.length
                    ) {

                        clearInterval(
                            typing
                        );


                        confessionLineIndex++;


                        setTimeout(
                            () => {

                                typeConfessionLine();

                            },
                            1300
                        );

                    }

                },
                34
            );

    }


    /* =========================================================
       CONFESSION → VALENTINE
    ========================================================= */

    if (
        confessionContinueBtn
    ) {

        confessionContinueBtn.addEventListener(
            "click",
            () => {

                playSound(
                    audio.click,
                    CONFIG.clickVolume
                );


                playSound(
                    audio.transition,
                    CONFIG.transitionVolume
                );


                setTimeout(
                    () => {

                        showScene(
                            valentineScreen
                        );


                        createFloatingHearts(
                            window.innerWidth / 2,
                            window.innerHeight / 2,
                            12
                        );

                    },
                    250
                );

            }
        );

    }


    /* =========================================================
       VALENTINE — YES
    ========================================================= */

    if (yesBtn) {

        yesBtn.addEventListener(
            "mouseenter",
            () => {

                if (
                    window.innerWidth >
                    700 &&
                    !yesBtn.disabled
                ) {

                    playSound(
                        audio.hover,
                        CONFIG.hoverVolume
                    );

                }

            }
        );


        yesBtn.addEventListener(
            "click",
            () => {

                if (
                    yesBtn.disabled
                ) {

                    return;

                }


                yesBtn.disabled =
                    true;


                if (timeBtn) {

                    timeBtn.disabled =
                        true;

                }


                playSound(
                    audio.click,
                    CONFIG.clickVolume
                );


                playSound(
                    audio.success,
                    CONFIG.successVolume
                );


                setTimeout(
                    () => {

                        playSound(
                            audio.transition,
                            CONFIG.transitionVolume
                        );

                    },
                    250
                );


                createFinalCelebration(
                    30
                );


                setTimeout(
                    () => {

                        showScene(
                            yesScreen
                        );


                        startMemoryCreation();


                        playSound(
                            audio.heartbeat,
                            CONFIG.heartbeatVolume * 0.65
                        );


                        setTimeout(
                            () => {

                                createFinalCelebration(
                                    24
                                );

                            },
                            450
                        );

                    },
                    700
                );

            }
        );

    }


    /* =========================================================
       NEED TIME
    ========================================================= */

    if (timeBtn) {

        timeBtn.addEventListener(
            "mouseenter",
            () => {

                if (
                    window.innerWidth >
                    700 &&
                    !timeBtn.disabled
                ) {

                    playSound(
                        audio.hover,
                        CONFIG.hoverVolume
                    );

                }

            }
        );


        timeBtn.addEventListener(
            "click",
            () => {

                if (
                    timeBtn.disabled
                ) {

                    return;

                }


                if (yesBtn) {

                    yesBtn.disabled =
                        true;

                }


                timeBtn.disabled =
                    true;


                playSound(
                    audio.click,
                    CONFIG.clickVolume
                );


                playSound(
                    audio.transition,
                    CONFIG.transitionVolume
                );


                createFloatingHearts(
                    window.innerWidth / 2,
                    window.innerHeight / 2,
                    7
                );


                setTimeout(
                    () => {

                        showScene(
                            timeScreen
                        );

                    },
                    550
                );

            }
        );

    }


    /* =========================================================
       MEMORY CREATION
    ========================================================= */

    function startMemoryCreation() {

        if (
            memoryStatus
        ) {

            memoryStatus.textContent =
                "Creating new memory...";

        }


        updateMemoryDate();


        const states = [

            "Saving this little moment...",

            "Adding a little sparkle...",

            "Making it official...",

            "Memory created ♡"

        ];


        let index = 0;


        const timer =
            setInterval(
                () => {

                    if (
                        !memoryStatus
                    ) {

                        clearInterval(
                            timer
                        );

                        return;

                    }


                    if (
                        index >=
                        states.length
                    ) {

                        clearInterval(
                            timer
                        );

                        return;

                    }


                    memoryStatus.textContent =
                        states[index];


                    index++;

                },
                850
            );

    }


    /* =========================================================
       UPDATE DATE
    ========================================================= */

    function updateMemoryDate() {

        if (!memoryDate) {
            return;
        }


        const now =
            new Date();


        const months = [

            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC"

        ];


        const day =
            String(
                now.getDate()
            ).padStart(
                2,
                "0"
            );


        const month =
            months[
                now.getMonth()
            ];


        const year =
            now.getFullYear();


        memoryDate.textContent =
            `${month} ${day}, ${year}`;

    }


    /* =========================================================
       FINAL CELEBRATION
    ========================================================= */

    function createFinalCelebration(
        count = 20
    ) {

        if (
            !celebration
        ) {
            return;
        }


        const symbols = [

            "♥",
            "♡",
            "✦",
            "✧"

        ];


        for (
            let i = 0;
            i < count;
            i++
        ) {

            const particle =
                document.createElement(
                    "span"
                );


            particle.className =
                "final-particle";


            particle.textContent =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];


            const x =
                Math.random() *
                1000 -
                500;


            const y =
                Math.random() *
                800 -
                400;


            const rotation =
                Math.random() *
                100 -
                50;


            const size =
                10 +
                Math.random() *
                18;


            particle.style.setProperty(
                "--x",
                `${x}px`
            );


            particle.style.setProperty(
                "--y",
                `${y}px`
            );


            particle.style.setProperty(
                "--rotate",
                `${rotation}deg`
            );


            particle.style.fontSize =
                `${size}px`;


            particle.style.animationDelay =
                `${Math.random() * .45}s`;


            celebration.appendChild(
                particle
            );


            setTimeout(
                () => {

                    particle.remove();

                },
                4500
            );

        }

    }


    /* =========================================================
       FLOATING HEARTS
    ========================================================= */

    function createFloatingHearts(
        x,
        y,
        count = 5
    ) {

        if (
            !floatingHearts
        ) {

            return;

        }


        for (
            let i = 0;
            i < count;
            i++
        ) {

            const heart =
                document.createElement(
                    "span"
                );


            heart.className =
                "float-heart";


            heart.textContent =
                Math.random() > .35
                    ? "♥"
                    : "♡";


            heart.style.left =
                `${
                    x +
                    (
                        Math.random() *
                        80 -
                        40
                    )
                }px`;


            heart.style.top =
                `${
                    y +
                    (
                        Math.random() *
                        20 -
                        10
                    )
                }px`;


            heart.style.animationDelay =
                `${
                    Math.random() *
                    .2
                }s`;


            floatingHearts.appendChild(
                heart
            );


            setTimeout(
                () => {

                    heart.remove();

                },
                2700
            );

        }

    }


    /* =========================================================
       MUSIC BUTTON
    ========================================================= */

    if (musicBtn) {

        musicBtn.addEventListener(
            "click",
            () => {

                musicEnabled =
                    !musicEnabled;


                if (
                    musicEnabled
                ) {

                    startMusic();

                } else {

                    stopMusic();

                }


                updateMusicButton();

            }
        );

    }


    /* =========================================================
       SOUND BUTTON
    ========================================================= */

    if (soundBtn) {

        soundBtn.addEventListener(
            "click",
            () => {

                /*
                 * Don't play click sound here
                 * because sound is being toggled.
                 */

                soundEnabled =
                    !soundEnabled;


                updateSoundButton();

            }
        );

    }


    /* =========================================================
       SPARKLE BUTTON
    ========================================================= */

    if (sparkleBtn) {

        sparkleBtn.addEventListener(
            "click",
            () => {

                playSound(
                    audio.click,
                    CONFIG.clickVolume
                );


                createFloatingHearts(
                    window.innerWidth / 2,
                    window.innerHeight / 2,
                    14
                );


                if (
                    typeof createFinalCelebration ===
                    "function"
                ) {

                    createFinalCelebration(
                        8
                    );

                }

            }
        );

    }


    /* =========================================================
       GLOBAL BUTTON HOVER
    ========================================================= */

    document
        .querySelectorAll(
            "button"
        )
        .forEach(
            (button) => {

                /*
                 * Skip buttons that already
                 * have special hover audio.
                 */

                if (
                    button ===
                    yesBtn ||
                    button ===
                    timeBtn ||
                    button.id ===
                    "musicBtn" ||
                    button.id ===
                    "soundBtn" ||
                    button.id ===
                    "sparkleBtn"
                ) {

                    return;

                }


                button.addEventListener(
                    "mouseenter",
                    () => {

                        if (
                            window.innerWidth >
                            700 &&
                            !button.disabled
                        ) {

                            playSound(
                                audio.hover,
                                CONFIG.hoverVolume
                            );

                        }

                    }
                );

            }
        );


    /* =========================================================
       INITIAL CONTROL STATE
    ========================================================= */

    updateMusicButton();

    updateSoundButton();


    /* =========================================================
       INITIAL SCENE
    ========================================================= */

    showScene(
        landingScreen
    );


    /* =========================================================
       CONSOLE MESSAGE
    ========================================================= */

    console.log(
        "♡ LOVE.EXE production version loaded."
    );

});