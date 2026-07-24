// =====================================
// Peterson's Solution Simulator
// Part 1 - Variables & Initialization
// =====================================

let flag = [false, false];
let turn = 0;
let currentStep = 0;

function log(message) {

    const logBox = document.getElementById("logBox");

    logBox.innerHTML += message + "<br>";

    logBox.scrollTop = logBox.scrollHeight;

}

function updateUI() {

    document.getElementById("flag0").innerHTML = flag[0];
    document.getElementById("flag1").innerHTML = flag[1];

}

function startSimulation() {

    resetSimulation();

    turn = parseInt(document.getElementById("turn").value);

    log("Simulation Started");
    log("Initial Turn = Process " + (turn + 1));

    currentStep = 1;

    updateUI();

}

function resetSimulation() {

    flag = [false, false];

    turn = 0;

    currentStep = 0;

    document.getElementById("flag0").innerHTML = "False";
    document.getElementById("flag1").innerHTML = "False";

    document.getElementById("status0").innerHTML = "Idle";
    document.getElementById("status1").innerHTML = "Idle";

    document.getElementById("criticalBox").innerHTML =
    "Waiting for Simulation...";

    document.getElementById("logBox").innerHTML = "";

}

window.onload = function(){

    resetSimulation();

    log("Peterson's Solution Simulator Ready");

};
// =====================================
// Peterson's Solution Simulator
// Part 2 - Peterson Algorithm Logic
// =====================================

function nextStep() {

    switch (currentStep) {

        case 1:

            flag[0] = true;
            updateUI();

            document.getElementById("status0").innerHTML =
            "<span class='waiting'>Wants to Enter</span>";

            log("P1 sets flag[0] = true");

            currentStep++;
            break;

        case 2:

            turn = 1;

            log("Turn = P2");

            document.getElementById("criticalBox").innerHTML =
            "Turn assigned to Process 2";

            currentStep++;
            break;

        case 3:

            if(flag[1] && turn===1){

                document.getElementById("status0").innerHTML =
                "<span class='waiting'>Waiting...</span>";

                log("P1 is Waiting");

            }else{

                document.getElementById("status0").innerHTML =
                "<span class='running'>Running</span>";

                document.getElementById("criticalBox").innerHTML =
                "Process 1 entered Critical Section";

                log("P1 enters Critical Section");

                currentStep++;

            }

            break;

        case 4:

            flag[0] = false;

            updateUI();

            document.getElementById("status0").innerHTML =
            "<span class='finished'>Completed</span>";

            document.getElementById("criticalBox").innerHTML =
            "Process 1 exited Critical Section";

            log("P1 exits Critical Section");

            currentStep++;

            break;

        case 5:

            flag[1] = true;

            updateUI();

            document.getElementById("status1").innerHTML =
            "<span class='waiting'>Wants to Enter</span>";

            log("P2 sets flag[1] = true");

            currentStep++;

            break;

        case 6:

            turn = 0;

            log("Turn = P1");

            document.getElementById("criticalBox").innerHTML =
            "Turn assigned to Process 1";

            currentStep++;

            break;

    }

}
// =====================================
// Peterson's Solution Simulator
// Part 3 - Final Execution
// =====================================

function nextStep() {

    switch(currentStep){

        case 7:

            if(flag[0] && turn===0){

                document.getElementById("status1").innerHTML =
                "<span class='waiting'>Waiting...</span>";

                log("P2 is Waiting");

            }else{

                document.getElementById("status1").innerHTML =
                "<span class='running'>Running</span>";

                document.getElementById("criticalBox").innerHTML =
                "Process 2 entered Critical Section";

                log("P2 enters Critical Section");

                currentStep++;

            }

            break;

        case 8:

            flag[1]=false;

            updateUI();

            document.getElementById("status1").innerHTML =
            "<span class='finished'>Completed</span>";

            document.getElementById("criticalBox").innerHTML =
            "Process 2 exited Critical Section";

            log("P2 exits Critical Section");

            currentStep++;

            break;

        case 9:

            document.getElementById("criticalBox").innerHTML =
            "Simulation Completed Successfully";

            log("--------------------------------");

            log("Peterson's Algorithm Finished");

            log("✔ Mutual Exclusion Achieved");

            log("✔ No Deadlock");

            log("✔ No Starvation");

            currentStep++;

            break;

        default:

            alert("Simulation Finished.\nPress Reset to Start Again.");

            break;

    }

}

// Update Flag Values
function updateUI(){

    document.getElementById("flag0").innerHTML = flag[0] ? "True" : "False";
    document.getElementById("flag1").innerHTML = flag[1] ? "True" : "False";

}

// Enter Key → Next Step
document.addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        nextStep();

    }

});

console.log("Peterson Solution Simulator Loaded Successfully");
