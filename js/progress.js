const progress = {
    handleListClick: function (event) {
        const clickedBtn= event.currentTarget;
        console.log("ça clique" + clickedBtn);
    },
    init: function () {
        console.log("initialisation du module progress");
        const listBtn = document.querySelectorAll('.raid-list');
        console.log(listBtn);
        for (let index = 0; index < listBtn.length; index++) {
            const currentListBtn = listBtn[index];
            currentListBtn.addEventListener('click', progress.handleListClick)
        }
    },
}

document.addEventListener('DOMContentLoaded', progress.init);