window.onload = () =>
{
    fetch('https://run.mocky.io/v3/bba2ac0d-3012-4db9-8591-d4c34444f084').then(function(response){
        return response.json()
    }).then(function(object)
    {
        const photos = object.photos
        const list = document.getElementById("NameBarID")
        let videosHTML = ""

        videosHTML += `
            <div class="InfoBar">
                <p class="LetterCircle">${photos[0].username[0]}</p>     
            </div>
                <p class="UserNameBar_top">${photos[0].username}</p><br>
                <p class="UserNameBar">@${photos[0].username}</p>
                <p class="obs">${photos[0].obs1} obserwujących · ${photos[0].obs2} obserwowany</p>
                <div class="but">
                    <button class="somebuttons">Udostępnij</button><button class="somebuttons">Edytuj Profil</button>
                </div>
                <div class="zakladki">
                    <a class="zakladki_button">Utworzone</a><a class="zakladki_button" >Zapisane</a>
                </div>
                
        `
        list.innerHTML = videosHTML
        
        
    })
    
}