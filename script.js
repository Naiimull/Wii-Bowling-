const motionButton = document.getElementById("enableMotion");
const motionStatus = document.getElementById("motionStatus");

let hasStarted = false;
let hasGlowStarted = false;
async function handleClick() {
    if (hasStarted) {
        return;
    }

    // catch error block
    try { 
        if (hasGlowStarted === false) {
            motionButton.textContent = "Ready to bowl!";
            motionButton.style.boxShadow = "0 0 20px blue";
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
            );
            hasGlowStarted = true;
        }
        if (
            typeof DeviceMotionEvent === "undefined" ||
            typeof DeviceMotionEvent.requestPermission !== "function"
        ) {
            motionStatus.textContent = "For this test, open the page in Safari on your iPhone.";
            return;
        }
        const permission = await DeviceMotionEvent.requestPermission();
        if (permission !== "granted") {
            motionStatus.textContent = " Motion permission was not granted.";
            return;
        } else {
            motionStatus.textContent = "Permission granted. Motion readings are not connected yet.";
        }
        // Intructions that might fail go here
        hasStarted = true;
    } catch (error) {
        // Instructions for handling a failure go here
        hasStarted = false;
        motionStatus.textContent = "Something went wrong. Please try again.";
    }

}
motionButton.addEventListener("click", handleClick);




