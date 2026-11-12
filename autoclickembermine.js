(function() {
    const INTERVAL_TIME = 10000;       
    const DELAY_BETWEEN_BTNS = 2000;   

    function runAutoClicker() {
        const xpath1 = '/html/body/div/div[1]/div/main/div/div[3]/section[3]/div[2]/div/div[5]/div/button[1]';
        const xpath2 = '/html/body/div/div[1]/div/main/div/div[5]/div/div[3]/button';

        const btn1 = document.evaluate(xpath1, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (btn1 && btn1.offsetParent !== null) {
            btn1.click();
            console.log("Đã bấm Nút 1");
        }

        setTimeout(() => {
            const btn2 = document.evaluate(xpath2, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (btn2 && btn2.offsetParent !== null) {
                btn2.click();
                console.log("Đã bấm Nút 2");
            }
        }, DELAY_BETWEEN_BTNS);
    }

    runAutoClicker();
    window.autoClickerInterval = setInterval(runAutoClicker, INTERVAL_TIME);
})();
