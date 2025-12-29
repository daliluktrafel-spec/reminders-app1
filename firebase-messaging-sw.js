// firebase-messaging-sw.js

// استيراد مكتبات Firebase
importScripts('https://www.gstatic.com/firebasejs/10.14.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.0/firebase-messaging-compat.js');

// نفس إعدادات Firebase الخاصة بمشروعك
firebase.initializeApp({
  apiKey: "AIzaSyBvzdxIg12wzWobOco5WmcWR5oVdoVnsTM",
  authDomain: "reminders-app-5c038.firebaseapp.com",
  projectId: "reminders-app-5c038",
  storageBucket: "reminders-app-5c038.appspot.com",
  messagingSenderId: "864515961662",
  appId: "1:864515961662:web:4d6afea2d97d07d859b26f",
  measurementId: "G-MQVVLYJ4H3"
});

// تهيئة Messaging
const messaging = firebase.messaging();

// استقبال الإشعارات في الخلفية
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification?.title || "🔔 تنبيه جديد";
  const notificationOptions = {
    body: payload.notification?.body || "لديك تذكير جديد",
    icon: "/icon.png" // ضع أي أيقونة هنا إذا أردت
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
