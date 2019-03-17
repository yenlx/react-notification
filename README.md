Demo fcm với reactJS 

SETUP PROJECT
git clone https://github.com/yenlx/react-notification.git
cd  react-notification
npm install
npm start
--- 
Cần đăng ký 1 app trên firebase để có 1 server gửi thông báo. 
- Nếu client chỉ cần nhận thông báo thì chỉ cần cài đặt thông số messagingSenderId ở phần (config-firebase.js)
- Mặc định theo SDK của firebase nó sẽ đăng ký 1 service worker ngầm với đường dẫn ROOT_DOMAIN/firebase-messaging-sw.js . Nhưng bạn có thể thay đổi điều đó bằng cách tự register 1 service worker do chính bạn tạo ra. Theo project tôi đã đăng ký 1 custom server worker trong folder public là sw.js 
----
