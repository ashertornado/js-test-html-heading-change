// Telling the console the app is working
console.log("JavaScript application is running");

// Heading text change
document.getElementById("textChanger").onclick = function(){
    document.getElementById("heading").innerHTML = "Heading was changed by JavaScript!";
}

// Refresh Button
document.getElementById("refreshBtn").onclick = function(){
    location.reload();
}