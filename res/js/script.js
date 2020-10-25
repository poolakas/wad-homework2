let posts = []
let profiles = []

$(function () {
    loadUserInfo()
        .then(function (response) {
            let user = new User(
                response.firstname,
                response.lastname,
                response.email,
                response.avatar
            
            );

            displayUserInfo(user)
            $('#my_avatar').attr("src", user.avatar)
        })
        .catch(function () {
            console.log('Error loading user info')
        });

    loadPosts()
        .then(function (response) {
            for (let post of response) {
                posts.push(new Post(post.id, post.author,
                     post.createTime, post.text, post.media
                     ,post.likes))
            }

            displayPosts()
        })
        .catch(function () {
            console.log('Error loading user info')
        });
    
    loadProfiles()
        .then(function (response) {
            for (let profile of response) {
                profiles.push(new Profile(profile.firstname, profile.lastname, profile.avatar))
            }

            displayProfiles()
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
            $("p").text(displayUserInfo(user))
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function likeFunction(post_id) {
    let postID = ["#one", "#two", "#three", "#four"]
    $(postID[post_id-1] + ' #likes').toggleClass('liked')
}

function displayUserInfo(user) {
    $('#myDropdown #name').text(user.firstname + " " + user.lastname);
    $('#myDropdown #email').text(user.email);
}
function displayPosts() {
    let postID = ["#one", "#two", "#three", "#four"]

    for (let post of posts) {
        $(postID[parseInt(post.id)-1] + ' #author').text(post.author.firstname + ' ' + post.author.lastname);
        $(postID[parseInt(post.id)-1] + ' #avatar').attr("src", post.author.avatar);
        $(postID[parseInt(post.id)-1] + ' #createTime').text(post.createTime);
        $(postID[parseInt(post.id)-1] + ' #likes').text(post.likes);
        if(post.text !== null) {
            $(postID[parseInt(post.id)-1] + ' #text').text(post.text);
        }
        
        if(post.media !== null) {
            if (post.media.type == "image") {
                $(postID[parseInt(post.id)-1] + ' #media').attr("src", post.media.url);
            }
            if (post.media.type == "video") {
                $(postID[parseInt(post.id)-1] + ' #media').attr("src", post.media.url);
            }
        }
    }
    
}


function followFunction(profile_id) {
    let profileID = ["#one", "#two", "#three", "#four"]
    $(profileID[profile_id-1] + ' #follow').toggleClass('followed').text('Followed')
}

function loadUserInfo() {
    return $.get(
        {
            url: 'https://private-anon-49292198e5-wad20postit.apiary-mock.com/users/1',
            success: function (response) {
                return response;
            },
            error: function () {
                console.log('error')
            }
        }
    );
}

function loadPosts() {
    return $.get(
        {
            url: 'https://private-anon-49292198e5-wad20postit.apiary-mock.com/posts',
            success: function (response) {
                return response;
            },
            error: function () {
                console.log('error')
            }
        }
    );
}
function loadProfiles() {
    return $.get(
        {
            url: 'https://private-anon-3868089c92-wad20postit.apiary-mock.com/profiles',
            success: function (response) {
                return response;
            },
            error: function () {
                console.log('error')
            }
        }
    );
}

