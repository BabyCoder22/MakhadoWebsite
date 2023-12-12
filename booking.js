const firebaseConfig = {
    apiKey: "AIzaSyBVhgY0-8FkvGgvONeTu27JcnaDoZwYBss",
    authDomain: "makhado-689d2.firebaseapp.com",
    databaseURL: "https://makhado-689d2-default-rtdb.firebaseio.com",
    projectId: "makhado-689d2",
    storageBucket: "makhado-689d2.appspot.com",
    messagingSenderId: "169425355200",
    appId: "1:169425355200:web:8adb54b955dc02240f0825"
};

firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database()
    .ref('Collected Data');

document.getElementById('BookingForm')
    .addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var lastname = getInputVal('lastname');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var car_model = getInputVal('car_model');
    var service_type = getInputVal('service_type');
    var service_date = getInputVal('service_date');
    var comments = getInputVal('comments');


    saveMessage(name, lastname, email, phone, car_model, service_type, service_date, comments);
    document.getElementById('BookingForm').reset();
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, lastname, email, phone, car_model, service_type, service_date, comments) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        lastname: lastname,
        email: email,
        phone: phone,
        car_model: car_model,
        service_type: service_type,
        service_date: service_date,
        comments: comments
    });
}