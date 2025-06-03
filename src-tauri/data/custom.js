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
                const element0 = document.querySelector('#root > div > div > div.c3ecdb44 > div.dc04ec1d > div > div.c7f51894');
                if (element0) {
                    element0.style.display = 'none';
                };const element1 = document.querySelector('
#root > div > div > div.c3ecdb44 > div._7780f2e > div > div > div._9a2f8e4 > div._0fcaa63._7941d9f');
                if (element1) {
                    element1.style.display = 'none';
                };const element2 = document.querySelector('
#root > div > div > div.c3ecdb44 > div._7780f2e > div > div._3919b83 > div > div > div.dad65929 > div._4f9bf79.d7dc56a8._43c05b5 > div.ds-flex > div.ds-flex._965abe9 > div:nth-child(4)');
                if (element2) {
                    element2.style.display = 'none';
                };const element3 = document.querySelector('
#root > div > div > div.c3ecdb44 > div._7780f2e > div > div._3919b83 > div > div > div.dad65929 > div._4f9bf79.d7dc56a8._43c05b5 > div.ds-flex > div.ds-flex._965abe9 > div:nth-child(3)');
                if (element3) {
                    element3.style.display = 'none';
                }
            }
        }
    })
    observer.observe(targetNode, config)
})
// end css filter
