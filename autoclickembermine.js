(function() {
    const INTERVAL_TIME = 10000;       // Lặp lại chu kỳ mỗi 10 giây
    const DELAY_BETWEEN_BTNS = 2000;   // Chờ 2 giây sau khi bấm nút 1

    function runAutoClicker() {
        // XPath mới nhất cho Nút 1 và Nút 2
        const xpath1 = '/html/body/div/div[1]/div/main/div/div[2]/section[3]/div[2]/div/div[5]/div/button[2]';
        const xpath2 = '/html/body/div/div[1]/div/main/div/div[4]/div/div[3]/button';

        // 1. Xử lý Nút 1
        const btn1 = document.evaluate(xpath1, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        
        if (btn1 && btn1.offsetParent !== null) {
            btn1.click();
            console.log("%c[Thành công] Đã bấm Nút 1 lúc:", "color: green;", new Date().toLocaleTimeString());
        } else {
            console.log("%c[Bỏ qua] Nút 1 chưa xuất hiện, sẽ thử lại ở chu kỳ sau.", "color: orange;");
        }

        // 2. Xử lý Nút 2 sau độ trễ 2 giây
        setTimeout(() => {
            const btn2 = document.evaluate(xpath2, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            
            if (btn2 && btn2.offsetParent !== null) {
                if (btn2.innerText.toLowerCase().includes("deploying")) {
                    console.log("%c[Thông báo] Nút 2 đang ở trạng thái xử lý...", "color: blue;");
                }
                
                btn2.click();
                console.log("%c[Thành công] Đã bấm Nút 2 lúc:", "color: green;", new Date().toLocaleTimeString());
            } else {
                console.log("%c[Bỏ qua] Nút 2 chưa xuất hiện (popup chưa bật), tiếp tục chạy bình thường.", "color: orange;");
            }
        }, DELAY_BETWEEN_BTNS);
    }

    // Xóa bộ đếm cũ nếu có trước khi chạy mới
    if (window.autoClickerInterval) {
        clearInterval(window.autoClickerInterval);
    }

    // Chạy ngay lập tức lần đầu
    runAutoClicker();

    // Thiết lập lặp lại chu kỳ mỗi 10 giây
    window.autoClickerInterval = setInterval(runAutoClicker, INTERVAL_TIME);
    console.log("%cĐã khởi động Auto-Clicker chế độ an toàn (2 nút)!", "color: purple; font-weight: bold;");
})();
