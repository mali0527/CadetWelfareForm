import { db, collection, addDoc } from "./firebase-config.js";

document.getElementById("cadetForm").addEventListener("submit", async function(event) {
  event.preventDefault(); // Prevent default form submission
  
  // Capture values from radio buttons
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const age = document.querySelector('input[name="age"]:checked')?.value;
  const level = document.querySelector('input[name="level"]:checked')?.value;
  
  // Capture welfare provisions (checkboxes)
  const welfare = [];
  document.querySelectorAll('input[name="welfare[]"]:checked').forEach(checkbox => {
    welfare.push(checkbox.value);
  });
  
  // Capture adequacy ratings (each is a radio button group)
  const accommodation = document.querySelector('input[name="accommodation"]:checked')?.value;
  const healthcare = document.querySelector('input[name="healthcare"]:checked')?.value;
  const feeding = document.querySelector('input[name="feeding"]:checked')?.value;
  const financial = document.querySelector('input[name="financial"]:checked')?.value;
  
  // Capture welfare challenges (checkboxes)
  const challenges = [];
  document.querySelectorAll('input[name="challenges[]"]:checked').forEach(checkbox => {
    challenges.push(checkbox.value);
  });
  
  // Capture overall experience ratings (radio buttons)
  const motivation = document.querySelector('input[name="motivation"]:checked')?.value;
  const activities = document.querySelector('input[name="activities"]:checked')?.value;
  const satisfaction = document.querySelector('input[name="satisfaction"]:checked')?.value;
  
  // Create the data object to be stored
  const formData = {
    gender,
    age,
    level,
    welfare,
    adequacy: {
      accommodation,
      healthcare,
      feeding,
      financial
    },
    challenges,
    overallExperience: {
      motivation,
      activities,
      satisfaction
    },
    timestamp: new Date()  // Optional: to record when the document was created
  };
  
  try {
    // Add the document to the "cadet_responses" collection
    const docRef = await addDoc(collection(db, "cadet_responses"), formData);
    console.log("Document written with ID: ", docRef.id);
    document.getElementById("responseMessage").innerText = "✅ Submitted successfully!";
    document.getElementById("cadetForm").reset();
  } catch (error) {
    console.error("Error submitting form:", error);
    document.getElementById("responseMessage").innerText = "❌ Submission failed.";
  }
});
