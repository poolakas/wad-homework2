$(function () {

    loadUserInfo()
        .then(function (response) {
            let User = new user(
                response.email
            );

            displayUserInfo(User)
        })
        .catch(function () {
            console.log('Error loading User info')
        });
});
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.avatar')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            $("p").text(displayUserInfo(user))
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function loadUserInfo() {
    return $.get(
        {
            url: 'data/user.json',
            success: function (response) {
                return response;
            },
            error: function () {
                console.log('error')
            }
        }
    );
}
function displayUserInfo(User) {
    console.log("siin")
    $('#myDropdown #email').text(User.email);
}
