$( document ).ready(function() {
    var alarm = new Audio('/audios/alarm.mp3');
    var isPaused = false;
    var hours, minutes, seconds = 0;
    var s;

    document.addEventListener('DOMContentLoaded', function() {
        if (!Notification) {
            return;
        }
        
        if (Notification.permission !== 'granted')
            Notification.requestPermission();
        });
        
        
        function notify() {
        if (Notification.permission !== 'granted')
            Notification.requestPermission();
        else {
            var notification = new Notification('Finito', {
            icon: 'https://www.searchpng.com/wp-content/uploads/2019/12/Notification-Icon-PNG-715x715.jpg',
            body: 'Il tempo è terminato',
            });
            notification.onclick = function() {
            window.open('http://localhost:8000/');
            };
        }
        }

    function getSeconds(){
        if(!isPaused) {
            if(hours == 0 && minutes == 0 && seconds == 0){
                notify();
                alarm.play();
                clearInterval(s);
                $(".inputs input").css("pointer-events", "");
                return;
            }


            if(minutes == 0 && seconds == 0){
                seconds = 60;
                minutes = 59;
                hours = hours - 1;
            }
    
            if(seconds == 0){
                seconds = 60;
                minutes = minutes - 1;
            }
    
            seconds = seconds - 1;
    
    
    
            if(seconds < 10){
                $("#seconds").val("0" + seconds.toString());
            }
            else{
                $("#seconds").val(seconds.toString());
            }
    
    
            if(minutes < 10){
                $("#minutes").val("0" + minutes.toString());
            }
            else{
                $("#minutes").val(minutes.toString());
            }
    
    
            if(hours < 10){
                $("#hours").val("0" + hours.toString());
            }
            else{
                $("#hours").val(hours.toString());
            }
        }
    }

    $("#reset").click(function(e){
        e.preventDefault();

        clearInterval(s);
        $(".inputs input").val("00");
        $(".inputs input").css("pointer-events", "");
        $("#start span").html("Start");
    });

    $("#start").click(function(e){
        e.preventDefault();

        isPaused = false;

        hours = parseInt($("#hours").val());
        minutes = parseInt($("#minutes").val());
        seconds = parseInt($("#seconds").val());

        clearInterval(s);
        s = setInterval(getSeconds, 1000);

        $(".inputs input").css("pointer-events", "none");
    });

    $("#stop").click(function(e){
        e.preventDefault();

        isPaused = true;

        $("#start span").html("Riprendi");

        $(".inputs input").css("pointer-events", "");
    });
});
