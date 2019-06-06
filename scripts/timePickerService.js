
var  timePickerService = (function () {

        // private
        function add8HoursAndOvertimeToWorkStartDate () {
            var basicWorkTime = 8;
            var overtime = workService.chooseLenghtOfOverime();
            return basicWorkTime + overtime;
        }
        function registerTimePicker()
        {
            var timePicker = $(function () {
                $('#datetimepicker3').datetimepicker({
                    format: 'LT'
                });
            });
            
            var timer = null;
            timePicker.on('change.datetimepicker', function(eventContext){
            
                var workStartDate          = moment(eventContext.date);
                var eigthHourslLater       = moment(eventContext.date).add(add8HoursAndOvertimeToWorkStartDate(), 'hours');
            
                if(workStartDate == undefined || workStartDate == null)
                    return -1;
            
                workService.displayWorkStartAndEndTime(workStartDate, eigthHourslLater);
            
                clearInterval(timer);
                timer = setInterval(function() {   
                    pictureService.timeCheckerForImageChange();  
                    workService.timeCheckerFor30minuteAlert(eigthHourslLater);  
                }, 1000);
            
            });
        }


        return {

          // public
          registerTimePicker: registerTimePicker,    
          add8HoursAndOvertimeToWorkStartDate :add8HoursAndOvertimeToWorkStartDate ,
        };

    }());

