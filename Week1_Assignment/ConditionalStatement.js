//function launchBrowser
function launchBrowser(browserName) {
    // Check if the browser is Chrome
    if (browserName === "chrome") {
        console.log("Launching Google Chrome browser...");
    } 
    else {
        console.log("Launching " + browserName + " browser...");
    }
}

// Function B: Uses a switch case to handle test type messages
function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Initiate Smoke testing...");
            break;
        case "sanity":
            console.log("Initiate Sanity testing...");
            break;
        case "regression":
            console.log("Initiate Regression testing...");
            break;
        default:
            console.log("No Test type mentioned. Initiating default test type i.e Smoke Testing...");
            break;
    }
}

// Calling the functions with different test data
console.log("****launchBrowser***");
launchBrowser("chrome");
launchBrowser("Firefox");

console.log("\n--- Testing runTests ---");
runTests("sanity");
runTests("regression");
runTests("performance"); // Triggers the default case