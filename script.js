const motionButton = document.getElementById("enableMotion");
let hasStarted = false;
function handleClick() {
    if (hasStarted) {
        return;
    }
    hasStarted = true;
    motionButton.textContent = "Ready to bowl!";
    motionStatus.textContent = "Button clicked. Motion controls are not enabled yet.";
    motionButton.animate(
        [   {boxShadow: "0 0 5px blue"},
            {boxShadow: "0 0 20px pink"},
            {boxShadow: "0 0 20px blue"},
            {boxShadow: "0 0 5px pink"},
            {boxShadow: "0 0 5px blue"}
        ],
        {
             duration: 1200,
             iterations: Infinity
        }
    )
}
motionButton.addEventListener("click", handleClick);

const motionStatus = document.getElementById("motionStatus");


