$(document).ready(function () {
    score = 0;
    stop = 0;
    $("#test").html("Score: " + score + "<br>Average: 0<br>Start whenever you're ready!");  // Sets the text for the #test
    $("counting").html("test");

    $("#button").mousedown(function () {
        score = score + 1; // Gets how many clicks
        average = score / 10; // Averages those clicks.
        $("#test").html("Score: " + score + "<br>Average: " + average + " cps.<br>You have 10 seconds to click!"); // Sets the text in #test again
        startTimer(); // Starts the 10 second countdown function
    });

    function startTimer() {
        if (stop === 0) {
            stop = stop + 1;
            var counter = 0;
            var interval = setInterval(function () { // Sets a interval that runs every 10 seconds.
                counter++;
                display = 10 - counter;
                $("#button").html("CLICK! (" + display + " secs)"); // Sets the display of the button to click and then the amount of seconds left
                if (counter == 10) { // When the counter hits 0 then it will stop the interval.
                    clearInterval(interval); 
                    stop = 0;
                    endscore = score;
                    score = 0;  // \/ Sets the results text to show results
                    $("#results").html("You clicked " + endscore + " times, in 10 seconds.<br>Your average click speed was " + average + " clicks per second.<br>Start clicking again to retry and get a better score!");
                    $("#button").html("CLICK TO TRY AGAIN."); // Encourages the you to try again.
                    $("#button"), () => {
                        setTimeout(function(){ // Attempt to make the button disabled for a few seconds after the results show to prevent accidental restarts.
                            button.prop('disabled', false);
                        }, 3*1000);
                    }
                    console.log('### Created by Rabeh') // Logs the results to the console mainly for debugging.
                    console.log("## End Score: " + endscore);
                    console.log("## Average Score: " + average)
                }
            }, 1000);
        }
    }
});
