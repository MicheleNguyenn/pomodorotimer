var flag = 0;
var cont = 0;

function timerWork () {

    if ( flag == 0 ){
        flag = 1;
        var btn = document.getElementById("btn");
        btn.innerHTML = "Pause";

        var stage = document.getElementById("stage");
        stage.innerHTML = "It's time to work!";

        var time = document.getElementById("time").innerHTML;
        var min = parseInt(time.split(":")[0]);
        var sec = parseInt(time.split(":")[1]);

        var countDownDate = new Date();
        countDownDate.setSeconds(countDownDate.getSeconds() + (min * 60 + sec + 1));

        // Update the count down every 1 second
        x = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="time"
            if (seconds < 10){
                document.getElementById("time").innerHTML = minutes + ":0" + seconds;
            }
            else{
                document.getElementById("time").innerHTML = minutes + ":" + seconds;
            }
            if (distance <= 1000 || flag == 0) {
                clearInterval(x);
                if(distance <= 1000){
                    flag = 0;
                    var base = document.getElementById("base");
                    base.classList.add("pause");
                    var stage = document.getElementById("stage");
                    stage.innerHTML = "It's time to rest, you earned it!";
                    btn.setAttribute("onclick","pause()");
                    cont = cont + 1;
                    if (cont == 4) {
                        cont = 0;
                        document.getElementById("time").innerHTML = "15:00";
                    }
                    else{
                        document.getElementById("time").innerHTML = "5:00";
                    }
                    pause();
                }
            }
        }, 1000);
    }
    else {
        flag = 0;
        var stage = document.getElementById("stage");
        stage.innerHTML = "Press the button to resume";
        var btn = document.getElementById("btn");
        btn.innerHTML = "Start";
    }
}

function pause(){


    if ( flag == 0 ){
        flag = 1;
        var btn = document.getElementById("btn");
        btn.innerHTML = "Pause";

        var stage = document.getElementById("stage");
        stage.innerHTML = "It's time to rest, you earned it!";

        var time = document.getElementById("time").innerHTML;
        var min = parseInt(time.split(":")[0]);
        var sec = parseInt(time.split(":")[1]);

        var countDownDate = new Date();
        countDownDate.setSeconds(countDownDate.getSeconds() + (min * 60 + sec + 1));

        // Update the count down every 1 second
        x = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="time"
            if (seconds < 10){
                document.getElementById("time").innerHTML = minutes + ":0" + seconds;
            }
            else{
                document.getElementById("time").innerHTML = minutes + ":" + seconds;
            }
            if (distance <= 1000 || flag == 0) {
                clearInterval(x);
                if(distance <= 1000){
                    flag = 0;
                    btn.setAttribute("onclick","timerWork()");
                    document.getElementById("time").innerHTML = "25:00";
                    var base = document.getElementById("base");
                    base.classList.remove("pause");
                    timerWork();
                }
            }
        }, 1000);
    }
    else {
        flag = 0;
        var stage = document.getElementById("stage");
        stage.innerHTML = "Press the button to resume";
        var btn = document.getElementById("btn");
        btn.innerHTML = "Start";
    }
}