(function() {
    const INTERVAL_TIME = 10000;       // Lặp lại toàn bộ chu trình mỗi 10 giây
    const DELAY_BETWEEN_BTNS = 2000;   // Chờ 2 giây sau khi bấm nút 1

    function getElementByXPath(xpath) {
        return document.evaluate(
            xpath,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue;
    }

    function clickTarget(xpath, label) {
        const btn = getElementByXPath(xpath);
        if (btn && btn.offsetParent !== null && !btn.disabled) {
            btn.click();
            console.log("%c[Thành công] Đã bấm " + label + " lúc:", "color: green;", new Date().toLocaleTimeString());
        } else {
            console.log("%c[Bỏ qua] " + label + " chưa sẵn sàng hoặc đang ẩn lúc:", "color: orange;", new Date().toLocaleTimeString());
        }
    }

    function runAutoClicker() {
        const xpath1 = '/html/body/div/div[1]/div/main/div/div[2]/section[5]/div[2]/div/div[5]/div/button[2]';
        const xpath2 = '/html/body/div/div[1]/div/main/div/div[4]/div/div[3]/button';

        // Bước 1: Bấm nút thứ nhất
        clickTarget(xpath1, "Nút 1");

        // Bước 2: Chờ 2 giây rồi bấm nút thứ hai
        setTimeout(() => {
            clickTarget(xpath2, "Nút 2");
        }, DELAY_BETWEEN_BTNS);
    }

    if (window.autoClickerInterval) {
        clearInterval(window.autoClickerInterval);
    }

    runAutoClicker();
    window.autoClickerInterval = setInterval(runAutoClicker, INTERVAL_TIME);
    console.log("%cĐã khởi động Auto-Clicker 2 nút (cách 2s, lặp lại mỗi 10s)!", "color: purple; font-weight: bold;");
})();
