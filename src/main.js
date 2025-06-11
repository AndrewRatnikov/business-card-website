import "./firebaseSetup";
import "./style.css";

const ordersHandler = {
  init() {
    this.eventHandlers();
  },

  eventHandlers() {
    const mentorshipOrderButton = document.querySelector(
      "#mentorship-order-btn"
    );
    mentorshipOrderButton.addEventListener("click", this.mentorshipOrder);

    const consultationOrderButton = document.querySelector(
      "#consultation-order-btn"
    );
    consultationOrderButton.addEventListener("click", this.consultationOrder);
  },

  mentorshipOrder() {
    console.log("Mentorship order clicked");
  },

  consultationOrder() {
    console.log("Consultation order clicked");
  },
};

ordersHandler.init();
