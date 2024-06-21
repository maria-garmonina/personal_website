document.addEventListener("DOMContentLoaded", function() {
    function show_list() {
        var courses = document.getElementById("courses_id");
        courses.style.display = courses.style.display === "block" ? "none" : "block";
    }

    document.querySelector(".dropdown_button").addEventListener("click", show_list);

    window.onclick = function(event) {
        if (!event.target.matches('.dropdown_button')) {
            var courses = document.getElementById('courses_id');
            if (courses) {
                courses.style.display = "none";
            }
        }
    }
});