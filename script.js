const form = document.querySelector("#estimate-form");
const note = document.querySelector("#form-note");
const recipient = "chris@southwestjunkhauling.com";
const quoteSubject = "Free Junk Removal Quote Request";

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const body = [
    "New estimate request from southwestjunkhauling.com",
    "",
    `Name: ${data.get("name") || ""}`,
    `Phone: ${data.get("phone") || ""}`,
    `Email: ${data.get("email") || ""}`,
    `Address: ${data.get("address") || ""}`,
    `City: ${data.get("city") || ""}`,
    `Service: ${data.get("service") || ""}`,
    `Preferred pickup date: ${data.get("pickup_date") || ""}`,
    "",
    "Message:",
    data.get("message") || data.get("details") || "",
    "",
    "Photos:",
    "If photos were selected on the website, please attach them to this email before sending."
  ].join("\n");

  window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(quoteSubject)}&body=${encodeURIComponent(body)}`;
  note.textContent = "Opening your email app with the request addressed to Chris.";
});

document.querySelectorAll(".project-card").forEach((card) => {
  card.querySelectorAll(".compare-toggle button").forEach((button) => {
    button.addEventListener("click", () => {
      const view = button.dataset.view || "before";
      card.dataset.view = view;
      card.querySelectorAll(".compare-toggle button").forEach((toggle) => {
        toggle.classList.toggle("is-active", toggle === button);
      });
    });
  });
});
