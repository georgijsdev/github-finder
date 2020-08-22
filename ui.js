class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}" />
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">
                            Public repos: ${user.public_repos}
                        </span>
                        <span class="badge badge-secondary">
                            Public gists: ${user.public_gists}
                        </span>
                        <span class="badge badge-success">
                            Followers: ${user.followers}
                        </span>
                        <span class="badge badge-info">
                            Following: ${user.following}
                        </span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member since: ${new Date(user.created_at).getUTCFullYear()}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h2 class="page-heading my-4">Latest repos</h2>
            <div id="repos"></div>
        `;
    }

    

    showRepos(repo) {
        let repos = ''; 
        repo.forEach(repo =>
            {repos +=
            `<div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6"><a href="${repo.html_url}" target="_blank">${repo.name}</a></div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">
                            Stars: ${repo.stargazers_count}
                        </span>
                        <span class="badge badge-secondary">
                            Public gists: ${repo.watchers_count}
                        </span>
                        <span class="badge badge-success">
                            Followers: ${repo.forks_count}
                        </span>
                    </div>
                </div>
            </div>`});
        
        document.getElementById('repos').innerHTML = repos;
    }

    showAlert(message, classNames) {
        // Clear remaining alerts
        this.clearAlert();
        // Create new div
        const div = document.createElement('div');
        // Add alert classes
        div.classList = classNames;
        // Add text message
        div.appendChild(document.createTextNode(message));
        // Get parent element
        const container = document.querySelector('.searchContainer');
        // Get search 
        const search = document.querySelector('.search');
        container.insertBefore(div, search);
        // Clear alert after 3s
        setTimeout(() => {
            this.clearAlert();
        }, 3000)
    }

    //
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }

    
}