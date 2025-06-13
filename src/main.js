import { analytics } from "./firebaseSetup";
import { logEvent } from "firebase/analytics";
import "./style.css";

const ordersHandler = {
  init() {
    this.eventHandlers();
  },

  eventHandlers() {
    const mentorshipOrderButton = document.querySelector(
      "#mentorship-order-btn",
    );
    mentorshipOrderButton.addEventListener("click", this.mentorshipOrder);

    const consultationOrderButton = document.querySelector(
      "#consultation-order-btn",
    );
    consultationOrderButton.addEventListener("click", this.consultationOrder);
  },

  mentorshipOrder() {
    logEvent(analytics, "Mentorship order clicked");
  },

  consultationOrder() {
    logEvent(analytics, "Consultation order clicked");
  },
};

ordersHandler.init();
