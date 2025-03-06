import { db, collection, addDoc } from "./firebase-config.js";

document.getElementById("cadetForm").addEventListener("submit", async function(event) {
    event.preventDefault(); 

    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const age = document.querySelector('input[name="age"]:checked')?.value;

    const welfare = [];
    document.querySelectorAll('input[name="welfare"]:checked').forEach((checkbox) => {
        welfare.push(checkbox.value);
    });

    if (!gender || !age) {
        document.getElementById("responseMessage").innerText = "❌ Please fill all required fields.";
        return;
    }

    try {
        await addDoc(collection(db, "cadet_responses"), {
            gender,
            age,
            welfare,
            timestamp: new Date()
        });

        document.getElementById("responseMessage").innerText = "✅ Submitted successfully!";
        document.getElementById("cadetForm").reset();
    } catch (error) {
        console.error("Error submitting form:", error);
        document.getElementById("responseMessage").innerText = "❌ Submission failed.";
    }
});
