
var  timePickerService = (function () {

        // private
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
                var eigthHourslLater       = moment(eventContext.date).add(8, 'hours');
            
                if(workStartDate == undefined || workStartDate == null)
                    return -1;
            
                workerService.displayWorkStartAndEndTime(workStartDate, eigthHourslLater);
            
                clearInterval(timer);
                timer = setInterval(function() {   
                    pictureService.timeCheckerForImageChange();  
                    workerService.timeCheckerFor30minuteAlert(eigthHourslLater);  
                }, 1000);
            
            });
        }


        return {

          // public
          registerTimePicker: registerTimePicker,    
        };

    }());

