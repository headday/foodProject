function tabs(tabsSelctor,tabsContentSelector, tabsParantSelector, activeClass){
// Tabs
    
let tabs = document.querySelectorAll(tabsSelctor),
tabsContent = document.querySelectorAll(tabsContentSelector),
tabsParent = document.querySelector(tabsParantSelector);

function hideTabContent() {

tabsContent.forEach(item => {
    item.classList.add('hide');
    item.classList.remove('show', 'fade');
});

tabs.forEach(item => {
    item.classList.remove(activeClass);
});
}

function showTabContent(i = 0) {
tabsContent[i].classList.add('show', 'fade');
tabsContent[i].classList.remove('hide');
tabs[i].classList.add(activeClass);
}

hideTabContent();
showTabContent();

tabsParent.addEventListener('click', function(event) {
const target = event.target;
if(target && target.classList.contains(tabsSelctor.slice(1))) {
    tabs.forEach((item, i) => {
        if (target == item) {
            hideTabContent();
            showTabContent(i);
        }
    });
}
});
}
export default tabs;