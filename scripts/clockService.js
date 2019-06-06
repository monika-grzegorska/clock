
var clockService = (function () {

    var globalSwitchForBlinking = false;


    // private
    function displayClock() {
    var clockDiv = document.getElementById('clock')
    var clockTime = new moment().format('LTS');
    clockDiv.innerHTML = clockTime
    }

    function redClockEffectWhenWorkWillEndSoon(endWorkTime) {
        var clockTimeNow = new moment();  
        var differenceStartToNowInMinutes = endWorkTime.diff(clockTimeNow, 'minutes')
        if (differenceStartToNowInMinutes <= 30) {
        globalSwitchForBlinking = true;
        }
        else{
        globalSwitchForBlinking = false;
        }
    }          

    function changingClockColorEverySecond (){
        if(globalSwitchForBlinking == true)    {
        var  currentClockColor = document.getElementById("clock").style.color;
        if(currentClockColor == 'black'){
            document.getElementById("clock").style.color ='red' 
        }else{
            document.getElementById("clock").style.color = 'black'
        }
    }
    }
            

    return {
        
    // public
    displayClock: displayClock,    
    redClockEffectWhenWorkWillEndSoon: redClockEffectWhenWorkWillEndSoon,
    changingClockColorEverySecond: changingClockColorEverySecond
    };

}());

