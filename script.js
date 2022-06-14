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
                document.getElementById("title").innerHTML = minutes + ":0" + seconds + " - Focus";
            }
            else{
                document.getElementById("time").innerHTML = minutes + ":" + seconds;
                document.getElementById("title").innerHTML = minutes + ":" + seconds + " - Focus";
            }
            if (distance <= 1000 || flag == 0) {
                clearInterval(x);
                if(distance <= 1000){
                    flag = 0;
                    var base = document.querySelectorAll("*");
                    for (let i = 0; i < base.length; i++) {
                        base[i].classList.add("pause");
                    }
                    var stage = document.getElementById("stage");
                    stage.innerHTML = "It's time to rest, you earned it!";
                    btn.setAttribute("onclick","pause()");
                    cont = cont + 1;
                    if (cont == 4) {
                        cont = 0;
                        document.getElementById("time").innerHTML = "15:00";
                        document.getElementById("title").innerHTML = "15:00 - Relax";
                    }
                    else{
                        document.getElementById("time").innerHTML = "5:00";
                        document.getElementById("title").innerHTML = "5:00 - Relax";
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
                document.getElementById("title").innerHTML = minutes + ":0" + seconds + " - Relax";
            }
            else{
                document.getElementById("time").innerHTML = minutes + ":" + seconds;
                document.getElementById("title").innerHTML = minutes + ":" + seconds + " - Relax";
            }
            if (distance <= 1000 || flag == 0) {
                clearInterval(x);
                if(distance <= 1000){
                    flag = 0;
                    var base = document.querySelectorAll("*");
                    for (let i = 0; i < base.length; i++) {
                        base[i].classList.remove("pause");
                    }
                    btn.setAttribute("onclick","timerWork()");
                    document.getElementById("time").innerHTML = "25:00";
                    document.getElementById("title").innerHTML = "25:00 - Focus";
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