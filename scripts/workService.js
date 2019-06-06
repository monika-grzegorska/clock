
var workService = (function () {

        // private
        function hoursAlreadySpentAtWork () {
            var clockTimeNow = new moment();
            var workStartDate = $("#datetimepicker3").data("datetimepicker").date();
            
            if(workStartDate == "")
                return -1;
            
            var differenceStartToNowInHours = clockTimeNow.diff(workStartDate, 'hours');
                return differenceStartToNowInHours;
        }
        
        function displayWorkStartAndEndTime(startTime, endTime){
            document.getElementById('work-start').innerHTML = startTime.format('LTS');
            document.getElementById('work-end').innerHTML = endTime.format('LTS');
        }
        
        function timeCheckerFor30minuteAlert(endWorkTime){
           clockService.redClockEffectWhenWorkWillEndSoon(endWorkTime);
        }
        var overtime = 0;
        $("#overtime-hours-count").html(overtime);

        function chooseLenghtOfOverime() {  
            $("#overtime-plus-btn").click(function () {
                overtime++;
                if (overtime > 24) {
                    overtime = 24;   
                }
                $("#overtime-hours-count").html(overtime);
            });
        
            $("#overtime-minus-btn").click(function () {
                overtime--;
                if (overtime < 0) {
                    overtime = 0;    
                }
                $("#overtime-hours-count").html(overtime);
            });
        }

        return {
            
        // public
        hoursAlreadySpentAtWork: hoursAlreadySpentAtWork,    
        displayWorkStartAndEndTime: displayWorkStartAndEndTime,
        timeCheckerFor30minuteAlert: timeCheckerFor30minuteAlert,
        chooseLenghtOfOverime: chooseLenghtOfOverime
        };

    }());

  