  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import{getDatabase , ref , push} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js"
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCsZ6mjf3qPWqhyiZNfZH-5OA0AcLbSy-8",
    authDomain: "real-time-database-9a7e1.firebaseapp.com",
    databaseURL: "https://real-time-database-9a7e1-default-rtdb.firebaseio.com",
    projectId: "real-time-database-9a7e1",
    storageBucket: "real-time-database-9a7e1.firebasestorage.app",
    messagingSenderId: "1026502043481",
    appId: "1:1026502043481:web:aa4474d4d80c46441c8e48",
    measurementId: "G-RR3K38WN6N"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase(app);

  //DOM Elements 
  const  feedbackForm = document.getElementById('feedbackForm');

  feedbackForm.addEventListener('submit' , (e)=>{
    e.preventDefault()
    const name = document.getElementById('name').value;
    const fname = document.getElementById('fname').value;
    const female = document.getElementById('female').value;
    const male = document.getElementById('male').value;
    const date = document.getElementById('date').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const message = document.getElementById('message').value;
push(ref(db , 'feedback'), {name , fname , female , male , date , email , rating , message})
.then(()=>{
    alert('Thanks for your feedback 💕');
    feedbackForm.reset()
})
.catch((error)=>{
    alert('Error Submitting Feedback: ' +error.message)
})
  })
