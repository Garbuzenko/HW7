
let tabActive        = document.body.querySelector(".tab_active").classList;
let tabContentActive = document.body.querySelector(".tab__content_active").classList;

const menu = document.body.querySelectorAll(".tab");
for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", function () {

        //Удаляем активность с текущей вкладки и контента
        if (tabActive != undefined){
            tabActive.remove("tab_active");
        }
        if (tabContentActive != undefined){
            tabContentActive.remove("tab__content_active");
        }

        //Делаем активной текущую вкладку
        this.classList.add("tab_active");

        const content = document.body.querySelectorAll('.tab__content');
        content[i].classList.add('tab__content_active');
        tabContentActive = content[i].classList;
        tabActive = this.classList;
    })
}