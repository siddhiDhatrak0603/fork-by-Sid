// activityLogger.js
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const db = getFirestore();

// Log any activity for a user
export async function logActivity(userPhone, type, details) {
  try {
    await addDoc(collection(db, "userActivity"), {
      userPhone,
      type,       // e.g. PAGE_VIEW, REPORT_SUBMIT, LOGIN
      details,    // e.g. "Opened Family Tool"
      timestamp: serverTimestamp()
    });
  } catch (err) {
    console.error("Error logging activity:", err);
  }
}
