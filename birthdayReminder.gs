  function sendEmails() {
          var birthdate = [{name: 'rahul',  date: new Date(1995,4,5)},
                           {name: 'test',   date: new Date(1995,4,8)}];//sample data

          for (var i = 0; i < birthdate.length; i++) {
            var today = new Date();
            var date = birthdate[i].date;
            if (today.getMonth() == date.getMonth() && today.getDate() == date.getDate()) {
              var emailAddress = 'rahulkumar2048@gmail.com';
              var message = "Today is " + birthdate[i].name + " birthday";
              var subject = "Reminder for " + birthdate[i].name + " birthday";
              MailApp.sendEmail(emailAddress, subject, message);
            }

          }

        }
