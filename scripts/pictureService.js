
var pictureService = (function () {

        // private
        function timeCheckerForImageChange(){
            var howHoursAlreadySpentAtWork = workerService.hoursAlreadySpentAtWork();
            changingPictureForSpecificAmmountOfHours(howHoursAlreadySpentAtWork);
        }
        
        function changingPictureForSpecificAmmountOfHours(hoursSinceStart) {
        
            var newImageName = "img/" + hoursSinceStart + ".png";
            var existingImageName = $(document.getElementById('work-image').innerHTML).attr('src');
            
            if(newImageName == existingImageName)
                return;
            
            if( hoursSinceStart >= 0 && hoursSinceStart < 9){
                document.getElementById('work-image').innerHTML = "<img src='" + newImageName + "'/>";
            }
        }

        return {
            
            // public
            timeCheckerForImageChange: timeCheckerForImageChange,    
            changingPictureForSpecificAmmountOfHours: changingPictureForSpecificAmmountOfHours
        };

    }());

  