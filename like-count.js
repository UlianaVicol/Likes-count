let likes = 0;

function initiateClicks() {
    let clickStr = localStorage.getItem("likes");
    if(clickStr == undefined){
        localStorage.setItem("likes", 0);
        likes = 0;
    }else{
        likes = parseInt(clickStr);   
    }
        document.getElementById("likes").innerHTML = likes;
}

function doClick() {
    likes += 1;
    localStorage.setItem("likes", likes);
    document.getElementById("likes").innerHTML = likes;
}

document.getElementById("likeBTN").onclick = doClick;
initiateClicks();