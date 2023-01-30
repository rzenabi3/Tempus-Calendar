// attempting to pull data from local storage 
  window.addEventListener('description', ()=> {
    const name = document.getElementById('#name');
    const description = localStorage.getItem('hour') || '';
    name.val = "hour .description";

    name.addEventListener('change', (e) => {
      localStorage.getItem('hour', e.target.val)
    
    })


  })
  // displays all div ids within the timeBlock div attempting to now pull local storage from divs and display in calendar
  const row =document.getElementsByClassName("timeBlock");
  console.log(row);
  $(localStorage.getItem(row));
 
 
  // let timeBlock = $(".description");
  // timeBlock.array.forEach(element, index=> {
  //     element.val(localStorage.getItem("hour" + (index + 7)));
  //     console.log(element);
  // });

  // last attempt at retrieving data from local storage
  // function getItem() {

  // }
  
  // retrieves block time to change color
  function point() {
    var currentHr = dayjs().hour();
    $(".timeBlock").each(function () {
        var hrSection = parseInt($(this).attr("id").split("hour")[1]);
        if (hrSection < currentHr) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (hrSection === currentHr) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })
}
point();

// retrieves current day/month and year 
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
let month = months[d.getMonth()];
document.getElementById("Mes").innerHTML = month;
var today = dayjs().format('dddd, MMM YYYY');

// stores text data in storage 
$("#Mes").html(today);
$(document).ready(function(){
  $(".saveBtn").on("click", function () {
    var valor = $(this).siblings(".description").val();
    var ahora = $(this).parent().attr("id");
    localStorage.setItem(ahora, valor);
    // document.getElementById("description").innerHTML = localStorage.getItem("ahora");

    })
  })
// TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //

