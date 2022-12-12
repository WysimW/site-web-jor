const theme = {
    blackclass: 'theme-black-body',
    greenclass: 'theme-green-body',
    blueclass: 'theme-blue-body',
    bodyElement: null,
    saveColorThemeToLocalStorage: function (colorTheme) {
        
        localStorage.setItem('colorTheme', colorTheme);
    },
    loadColorThemeFromLocalStorage: function () {
        const colorTheme = localStorage.getItem('colorTheme');

        // si un thème a été mémorisé
        if (colorTheme) {
            // on applique ce thème couleur
            theme.changeColorTheme(colorTheme);
        }
    },
    changeColorTheme: function (colorTheme) {
        theme.bodyElement.classList.remove("theme-black-body", "theme-blue-body", "theme-green-body", "theme-red-body", "theme-bronze-body");
        theme.bodyElement.classList.add(colorTheme);
    },
    handleThemeColorClick: function (event) {
        console.log('On clique sur le theme')
        const clickedButton = event.currentTarget;
        console.log(clickedButton);
        const colorThemeClass = clickedButton.id;
        console.log(colorThemeClass);
        theme.changeColorTheme(colorThemeClass);
        theme.saveColorThemeToLocalStorage(colorThemeClass);
        console.log(colorElements);
    },
    listenEvents: function () {
        const themeButtonsElements = document.querySelectorAll('.theme-circle');
        console.log(themeButtonsElements);
        for (let index = 0; index < themeButtonsElements.length; index++) {
            const currentThemeButton = themeButtonsElements[index];
            currentThemeButton.addEventListener('click', theme.handleThemeColorClick);
        }
    },
    init: function () {
        console.log('Initialisation du module theme')
        theme.bodyElement = document.querySelector('body');
        theme.listenEvents();
        theme.loadColorThemeFromLocalStorage();
    },

}

document.addEventListener('DOMContentLoaded', theme.init);