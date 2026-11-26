(function() {
    const INTERVAL_TIME = 10000;     // Lặp lại toàn bộ chu trình mỗi 10 giây
    const DELAY_BETWEEN_CLICKS = 2000; // Chờ 2 giây giữa 2 lần bấm

    function getButtonByXPath(xpath) {
        return document.evaluate(
            xpath,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue;
    }

    function clickIfReady(btn, label) {
        if (btn && btn.offsetParent !== null && !btn.disabled) {
            btn.click();
            console.log("%c[Thành công] Đã bấm " + label + " lúc:", "color: green;", new Date().toLocaleTimeString());
        } else {
            console.log("%c[Bỏ qua] " + label + " chưa sẵn sàng hoặc đang ẩn lúc:", "color: orange;", new Date().toLocaleTimeString());
        }
    }

    function runAutoClicker() {
        const xpath1 = '/html/body/div/div[1]/div/main/div/div[2]/section[5]/div[2]/div/div[5]/div/button[2]';
        const xpath2 = '/html/body/div/div[1]/div/main/div/div[2]/section[5]/div[2]/div/div[5]/div/button[2]';

        // Lần bấm thứ 1
        const btn1 = getButtonByXPath(xpath1);
        clickIfReady(btn1, "Nút 1");

        // Chờ 2 giây rồi thực hiện lần bấm thứ 2
        setTimeout(() => {
            const btn2 = getButtonByXPath(xpath2);
            clickIfReady(btn2, "Nút 2");
        }, DELAY_BETWEEN_CLICKS);
    }

    if (window.autoClickerInterval) {
        clearInterval(window.autoClickerInterval);
    }

    runAutoClicker();
    window.autoClickerInterval = setInterval(runAutoClicker, INTERVAL_TIME);
    console.log("%cĐã bật Auto-Clicker (cách 2s, lặp lại mỗi 10s)!", "color: purple; font-weight: bold;");
})();
