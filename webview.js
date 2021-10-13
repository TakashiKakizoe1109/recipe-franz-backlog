const path = require('path');
let counts = {
    direct: 0,
    indirect: 0,
};
module.exports = (Franz) => {
    const getMessages = function getMessages() {
        try {
            counts.direct = (document.querySelector('#globalNotificationsLink .badge.badge--notification').textContent ? document.querySelector('#globalNotificationsLink .badge.badge--notification').textContent : 0) * 1;
            counts.indirect = 0;
        } catch (e) {
        }
        Franz.setBadge(counts.direct, counts.indirect);
    };
    Franz.loop(getMessages);
    Franz.injectCSS(path.join(__dirname, 'service.css'));
};