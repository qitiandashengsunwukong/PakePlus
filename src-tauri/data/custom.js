console.log(
    '%cbuild from PakePlus： https://github.com/Sjj1024/PakePlus',
    'color:orangered;font-weight:bolder'
)

// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }
}

document.addEventListener('click', hookClick, { capture: true })

// css filter
document.addEventListener('DOMContentLoaded', () => {
    const targetNode = document.body
    // 配置观察选项
    const config = {
        childList: true,
        subtree: true,
    }
    const observer = new MutationObserver((mutationsList, observer) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const element0 = document.querySelector('#app > div:nth-child(2) > header > div > div:nth-child(2) ');
                if (element0) {
                    element0.style.display = 'none';
                };const element1 = document.querySelector('
#app > div:nth-child(2) > header > div > div.scroll-area.kling-scroll-dark > ul > a:nth-child(5) > div > div');
                if (element1) {
                    element1.style.display = 'none';
                };const element2 = document.querySelector('
#app > div:nth-child(2) > header > div > div:nth-child(2) > div.menu-item.invitation-box > span > div');
                if (element2) {
                    element2.style.display = 'none';
                };const element3 = document.querySelector('
#main-container > div > div.history-stream > div.filter-bar > div.right > div');
                if (element3) {
                    element3.style.display = 'none';
                };const element4 = document.querySelector('
#main-container > div > div:nth-child(1) > div > div.designer-component.property-panel > div.top-nav-panel-container > header > div > div > div.combo > div > div > div.el-select__selection > div.el-select__selected-item.el-select__placeholder > span.kling-new-tag');
                if (element4) {
                    element4.style.display = 'none';
                };const element5 = document.querySelector('
#app > div.customer-support');
                if (element5) {
                    element5.style.display = 'none';
                };const element6 = document.querySelector('
#app > div:nth-child(2) > header > div > div:nth-child(2) > div:nth-child(5)');
                if (element6) {
                    element6.style.display = 'none';
                };const element7 = document.querySelector('
#app > div:nth-child(2) > header > div > div:nth-child(2) > div:nth-child(6)');
                if (element7) {
                    element7.style.display = 'none';
                };const element8 = document.querySelector('
#app > div:nth-child(2) > header > div > div:nth-child(2) > div.membership');
                if (element8) {
                    element8.style.display = 'none';
                };const element9 = document.querySelector('
#app > div:nth-child(2) > header > div > div:nth-child(2) > div.menu-item.invitation-box > span');
                if (element9) {
                    element9.style.display = 'none';
                };const element10 = document.querySelector('');
                if (element10) {
                    element10.style.display = 'none';
                }
            }
        }
    })
    observer.observe(targetNode, config)
})
// end css filter
