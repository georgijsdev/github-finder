// Init GitHub
const github = new GitHub;

// Init UI
const ui = new UI;

// User search
const searchUser = document.querySelector('#searchUser');

// Event listener
searchUser.addEventListener('keyup', e => {
    // Get input value
    const userText = e.target.value;

    if (userText !== '') {
       // HTTP Call
       github.getUser(userText)
        .then(data => {
            if (data.profile.message === 'Not Found') {
                // Alert "Not found"
                ui.showAlert('User not found', 'alert alert-danger');
                ui.clearProfile();
            } else {
                // Show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else {
        // Clear profile as cleared input
        ui.clearProfile();
    }
})