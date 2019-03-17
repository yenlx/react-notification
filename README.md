Demo fcm với reactJS 
<br/>
SETUP PROJECT <br/>
git clone https://github.com/yenlx/react-notification.git <br/>
cd  react-notification <br/>
npm install <br/>
npm start <br/>
--- <br/>
Cần đăng ký 1 app trên firebase để có 1 server gửi thông báo. <br/>
- Nếu client chỉ cần nhận thông báo thì chỉ cần cài đặt thông số messagingSenderId ở phần (config-firebase.js) <br/>
- Mặc định theo SDK của firebase nó sẽ đăng ký 1 service worker ngầm với đường dẫn ROOT_DOMAIN/ firebase-messaging-sw.js . Nhưng bạn có thể thay đổi điều đó bằng cách tự register 1 service worker do chính bạn tạo ra. Theo project tôi đã đăng ký 1 custom server worker trong folder public là sw.js <br/>
----

Để test notification ta sử dụng postman <br/>

<pre>
URL     :       https://fcm.googleapis.com/fcm/send METHOD : POST
Header  :       Content-Type:application/json
                Authorization:key=<FireBase Server key>
Body    :       {
                    "notification": {
                        "title": "First Message",
                        "body": "FireBase push notification",
                        "click_action": "https://facebook.com",
                        "icon": "https://pngimage.net/wp-content/uploads/2018/06/logo-face-e-instagram-png-4.png"
                    },
                    "to":<Token device lấy được>
                }      
</pre>