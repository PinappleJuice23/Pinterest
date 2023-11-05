window.onload = () =>
{
    fetch('https://run.mocky.io/v3/7900bc8b-b6d0-43ea-b752-8219035b952a').then(function(response){
        return response.json()
    }).then(function(object)
    {
        const photos = object.photos
        const list = document.getElementById("imageGrid")
        let videosHTML = ""

        for(let i = 0; i < photos.length; i++)
        {
            videosHTML += `
                <div class="box">
                    <div class="zdjecie1">
                        
                            <div class="hided">
                            
                                <div class="top-bar">
                                    <p>Profile ⌵</p>
                                    <a>Save</a>
                                </div>

                                <div class="bottom-bar">
                                    <a>↗ website.com</a>
                                    <div class="radius-ico">
                                        <img src="https://cdn3.iconfinder.com/data/icons/iconset-1-1/24/icon_set_outlinder-10-256.png">
                                        <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-more-256.png">
                                    </div>
                                </div>
                            </div>
                            <img src="${photos[i].photo}" class="foto" alt="image">
                            
                    </div>
                
                    <p class="content">${photos[i].title}</p>
                    <img class="user" src="${photos[i].user}">
                    <a class="username">${photos[i].username}</a>
                        
                </div>
            `
        }
        list.innerHTML = videosHTML
    })
    
}