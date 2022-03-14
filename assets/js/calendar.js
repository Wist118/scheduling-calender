 var hour = dayjs().get('hour')



var time1 = dayjs().set('hour', 9, 'second', 0)
var time2 = dayjs().set('hour', 10, 'second', 0)
var time3 = dayjs().set('hour', 11, 'second', 0)
var time4 = dayjs().set('hour', 12, 'second', 0)
var time5 = dayjs().set('hour', 13, 'second', 0)
var time6 = dayjs().set('hour', 14, 'second', 0)
var time7 = dayjs().set('hour', 15, 'second', 0)
var time8 = dayjs().set('hour', 16, 'second', 0)
var time9 = dayjs().set('hour', 17, 'second', 0)
const current = document.querySelector(".lead")



var displayedTime = function() {
    current.textContent = dayjs().utc().toDate()
}
setInterval(displayedTime, 100)



function timeLoop() {
        

        if (hour > time1.get('hour')) {
            
            $(".t-9").addClass("past")
        }
        else if (hour < time1.get('hour')) {
            $(".t-9").addClass("future")
        }
        else if (hour = time1.get('hour')) {
            $(".t-9").addClass("present")
        }
          

        if (hour > time2.get('hour')) {
            
            $(".t-10").addClass("past")
        }
        else if (hour < time2.get('hour')) {
            $(".t-10").addClass("future")
        }
        else if (hour = time2.get('hour')) {
            $(".t-10").addClass("present")
        }

        if (hour > time3.get('hour')) {
            
            $(".t-11").addClass("past")
        }
        else if (hour < time3.get('hour')) {
            $(".t-11").addClass("future")
        }
        else if (hour = time3.get('hour')) {
            $(".t-11").addClass("present")
        }

        if (hour > time4.get('hour')) {
            
            $(".t-12").addClass("past")
        }
        else if (hour < time4.get('hour')) {
            $(".t-12").addClass("future")
        }
        else if (hour = time4.get('hour')) {
            $(".t-12").addClass("present")
        }

        if (hour > time5.get('hour')) {
            
            $(".t-1").addClass("past")
        }
        else if (hour < time5.get('hour')) {
            $(".t-1").addClass("future")
        }
        else if (hour = time5.get('hour')) {
            $(".t-1").addClass("present")
        }

        if (hour > time6.get('hour')) {
            
            $(".t-2").addClass("past")
        }
        else if (hour < time6.get('hour')) {
            $(".t-2").addClass("future")
        }
        else if (hour = time6.get('hour')) {
            $(".t-2").addClass("present")
        }

        if (hour > time7.get('hour')) {
            
            $(".t-3").addClass("past")
        }
        else if (hour < time7.get('hour')) {
            $(".t-3").addClass("future")
        }
        else if (hour = time7.get('hour')) {
            $(".t-3").addClass("present")
        }

        if (hour > time8.get('hour')) {
            
            $(".t-4").addClass("past")
        }
        else if (hour < time8.get('hour')) {
            $(".t-4").addClass("future")
        }
        else if (hour = time8.get('hour')) {
            $(".t-4").addClass("present")
        }

        if (hour > time9.get('hour')) {
            
            $(".t-5").addClass("past")
        }
        else if (hour < time9.get('hour')) {
            $(".t-5").addClass("future")
        }
        else if (hour = time9.get('hour')) {
            $(".t-5").addClass("present")
        }
}

timeLoop();


document.getElementById("btn1").addEventListener("click", function () {
    var textArea = document.getElementById("text1").value;
    localStorage.setItem("textarea1", textArea);
});

document.getElementById("btn2").addEventListener("click", function () {
    var textArea = document.getElementById("text2").value;
    localStorage.setItem("textarea2", textArea);
});

document.getElementById("btn3").addEventListener("click", function () {
    var textArea = document.getElementById("text3").value;
    localStorage.setItem("textarea3", textArea);
});

document.getElementById("btn4").addEventListener("click", function () {
    var textArea = document.getElementById("text4").value;
    localStorage.setItem("textarea4", textArea);
});

document.getElementById("btn5").addEventListener("click", function () {
    var textArea = document.getElementById("text5").value;
    localStorage.setItem("textarea5", textArea);
});

document.getElementById("btn6").addEventListener("click", function () {
    var textArea = document.getElementById("text6").value;
    localStorage.setItem("textarea6", textArea);
});

document.getElementById("btn7").addEventListener("click", function () {
    var textArea = document.getElementById("text7").value;
    localStorage.setItem("textarea7", textArea);
});

document.getElementById("btn8").addEventListener("click", function () {
    var textArea = document.getElementById("text8").value;
    localStorage.setItem("textarea8", textArea);
});

document.getElementById("btn9").addEventListener("click", function () {
    var textArea = document.getElementById("text9").value;
    localStorage.setItem("textarea9", textArea);
});
