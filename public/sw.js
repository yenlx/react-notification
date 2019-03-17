importScripts('https://www.gstatic.com/firebasejs/5.5.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.6/firebase-messaging.js');

var config = {
    messagingSenderId: "288192095109"
};
firebase.initializeApp(config);
var messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    var notificationTitle = payload.data.title;
    var notificationOptions = {
        body: payload.data.body,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});
