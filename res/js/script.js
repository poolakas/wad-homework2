$(function () {

    loadUserInfo()
        .then(function (response) {
            let user = new User(
                response.email
            );

            displayUserInfo(user)
        })
        .catch(function () {
            console.log('Error loading user info')
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
            $("p").text("EEEE")
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
function displayUserInfo(user) {
    $('#dropdown-content #email').text(user.email);
}
