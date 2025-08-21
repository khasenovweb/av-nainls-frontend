const CookieManager = {
    // Проверить наличие cookie
    has: function(name) {
        return this.get(name) !== null;
    },
    
    // Получить значение cookie
    get: function(name) {
        const nameEQ = name + '=';
        const cookies = document.cookie.split(';');
        
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.indexOf(nameEQ) === 0) {
                return cookie.substring(nameEQ.length, cookie.length);
            }
        }
        return null;
    },
    
    // Установить cookie
    set: function(name, value, days = 365) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + value + expires + '; path=/';
    },
    
    // Удалить cookie
    remove: function(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
};

var cookie_alert = document.querySelector('[data-cookie-alert]');
var cookie_alert_btn = document.querySelector('[data-cookie-alert-btn]');


if (!CookieManager.has('cookie_alert')) {
    cookie_alert.style.display = 'flex';
}

cookie_alert_btn.addEventListener('click', function(){
    CookieManager.set('cookie_alert', true);
    cookie_alert.remove();
});