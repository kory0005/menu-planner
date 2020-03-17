$(document).ready(function() {

    $("#list").css("display", "none");

    // VALIDATION
    function validateProfile(e) {
        e.preventDefault();
        var valid = true;
        if (form.name.value === '' || form.day.value === '') {
            $("#warning").html("<p>It seems you are missing something in the form above :)</p>");
            $("#list").css("display", "none");
            valid = false;
        } else if (form.name.value !== '' || form.day.value !== '') {
            $("#warning").empty();
            valid = true;


            // ADD ITEMS INVOKE
            addItems(newMenuArray);

            // SHOW ITEMS
            $("#list").css("display", "block");
            for (let m = 0; m < newMenuArray.length; m++) {
                var name = document.getElementById("pearsonName").value;
                var dayName = document.getElementById("selectedDay").value;
                var mess = "<h2> Hello " + name + "!<h2><br>" + "<h3>Your menu for " + dayName + " is:</h3><br> <li>Breakfast: " + newMenuArray[m].breakfast + "</li> <li>Lunch: " + newMenuArray[m].lunch + "</li> <li>Dinner: " + newMenuArray[m].dinner + "</li>";
                document.getElementById("list").innerHTML = mess;
            };

        };

    };

    // VALIDATION INVOKE
    $("#form").on("submit", validateProfile);


    var newMenuArray = new Array();


    // ADD ITEMS
    function addItems(a) {
        for (let i = 0; i < 1; i++) {
            let menu = {
                breakfast: prompt('What is for breakfast?', ""),
                lunch: prompt('What is for lunch?', ""),
                dinner: prompt('What is for dinner?', "")
            }
            a.push(menu);
        }
        // console.log(a);
        return a;
    };

    // CLOSE
});