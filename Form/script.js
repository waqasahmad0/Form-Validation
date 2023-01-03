function fileValidation(field) {  
      var fileInput = document.getElementById('uploadfile').value;   
       var allowExtension = /(\.pdf|\.doc)$/i;   
        if (!allowExtension.exec(fileInput)) {   
                alert("failed");    
                field.form.reset();
       return false;  
      }
}
function dateChange(){   
     var EndDate = document.getElementById('endDate').value; 
        var StartDate = document.getElementById('startDate').value;  
          var extension = StartDate < EndDate; 
             if(!extension){      
                  alert("end date is greater than start date");  
                        date.form.reset();      
                          return false;
    }
}



 