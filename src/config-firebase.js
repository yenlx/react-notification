import firebase from 'firebase';

export const registerFirebase = () => {
    navigator.serviceWorker.register('/sw.js') // đăng ký 1 service worker trước khi muốn có được token device
        .then(function (registration) {
            var config = {
                messagingSenderId: "288192095109" //message serder id từ server
            };
            firebase.initializeApp(config); //setup app 
            const messaging = firebase.messaging();
            messaging.useServiceWorker(registration);
           
            messaging.requestPermission()
                .then(function () {
                    return messaging.getToken()
                }).then(function (token) {
                    console.log('current token : ' + token);
                }).catch(function (err) {
                    console.log("cant get" + err);
                });
            messaging.onMessage(function (payload) {
                // console.log(localStorage.getItem('messageNotification'));
                if (localStorage.getItem('messageNotification') !== null) {
                    let message = JSON.parse(localStorage.getItem('messageNotification'));
                    // console.log(Array.isArray(message));
                    // console.log(localStorage.getItem('messageNotification'))
                    // console.log(payload);
                    message = message.concat({
                        "title": payload.notification.title,
                        "body": payload.notification.body,
                        "click_action": payload.notification.click_action,
                        "icon": payload.notification.icon
                    });
                    localStorage.setItem('messageNotification', JSON.stringify(message));
                }
            });
            messaging.onTokenRefresh(function () { //vì token có thể thay đổi nên cần đăng ký lắng nghe refresh token để luôn có 1 token mới nhất đến server
                messaging.getToken().then(function (refreshedToken) {
                    console.log('Token refreshed : ' + refreshedToken);
                }).catch(function (err) {
                    // console.log('err ' + err)
                });
            });
        })
        .catch(function (err) {
            // console.log('error ' + err);
        });

}