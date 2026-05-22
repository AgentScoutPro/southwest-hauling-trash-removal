const form = document.querySelector("#estimate-form");
const note = document.querySelector("#form-note");
const recipient = "chris@southwestjunkhauling.com";
const quoteSubject = "Free Junk Removal Quote Request";
const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navDropdowns = [...document.querySelectorAll(".nav-dropdown")];

menuToggle?.addEventListener("click", () => {
  const isOpen = siteHeader?.classList.toggle("nav-open") || false;
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navDropdowns.forEach((dropdown) => {
  dropdown.addEventListener("toggle", () => {
    if (!dropdown.open) return;
    navDropdowns.forEach((otherDropdown) => {
      if (otherDropdown !== dropdown) {
        otherDropdown.removeAttribute("open");
      }
    });
  });
});

document.addEventListener("click", (event) => {
  if (event.target instanceof Node && siteHeader?.contains(event.target)) return;
  navDropdowns.forEach((dropdown) => dropdown.removeAttribute("open"));
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  siteHeader?.classList.remove("nav-open");
  menuToggle?.setAttribute("aria-expanded", "false");
  navDropdowns.forEach((dropdown) => dropdown.removeAttribute("open"));
});

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

const hero = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-content");
const heroVideo = document.querySelector(".hero-video");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const coarsePointer = window.matchMedia("(pointer: coarse)");

if (hero && heroContent && !reduceMotion.matches) {
  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    const tiltX = (50 - y) * 0.035;
    const tiltY = (x - 50) * 0.035;

    hero.style.setProperty("--hero-x", `${x.toFixed(2)}%`);
    hero.style.setProperty("--hero-y", `${y.toFixed(2)}%`);
    heroContent.style.transform = `translate3d(${((x - 50) * 0.04).toFixed(2)}px, ${((y - 50) * 0.04).toFixed(2)}px, 0) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`;
  });

  hero.addEventListener("pointerleave", () => {
    hero.style.setProperty("--hero-x", "50%");
    hero.style.setProperty("--hero-y", "42%");
    heroContent.style.transform = "";
  });
}

if (hero && heroVideo) {
  let heroVideoDuration = 0;
  let heroTicking = false;
  let heroTargetTime = 0;
  let heroRenderedTime = 0;
  let heroScrubFrame = 0;

  const clampHeroProgress = (value) => Math.min(Math.max(value, 0), 1);

  const seekHeroVideo = (time) => {
    if (reduceMotion.matches || !heroVideoDuration || !heroVideo.seekable.length) return;

    try {
      heroVideo.currentTime = time;
      heroRenderedTime = time;
    } catch {
      // The browser may need one more metadata pass before accepting seeks.
    }
  };

  const scrubHeroVideo = () => {
    heroScrubFrame = 0;

    if (reduceMotion.matches || !heroVideoDuration || !heroVideo.seekable.length) return;

    const delta = heroTargetTime - heroRenderedTime;

    if (Math.abs(delta) < 0.012) {
      seekHeroVideo(heroTargetTime);
      return;
    }

    const maxStep = coarsePointer.matches ? 0.06 : 0.085;
    const easing = coarsePointer.matches ? 0.08 : 0.1;
    const easedStep = delta * easing;
    const nextStep = Math.max(Math.min(easedStep, maxStep), -maxStep);

    seekHeroVideo(heroRenderedTime + nextStep);
    heroScrubFrame = window.requestAnimationFrame(scrubHeroVideo);
  };

  const requestHeroScrub = () => {
    if (!heroScrubFrame) {
      heroScrubFrame = window.requestAnimationFrame(scrubHeroVideo);
    }
  };

  const updateHeroScroll = () => {
    const rect = hero.getBoundingClientRect();
    const scrollable = rect.height - window.innerHeight;
    const progress = scrollable > 0 ? clampHeroProgress(-rect.top / scrollable) : 0;
    const duration = heroVideoDuration || heroVideo.duration || 0;

    hero.style.setProperty("--hero-progress", progress.toFixed(3));

    if (!reduceMotion.matches && duration) {
      heroVideoDuration = duration;
      heroTargetTime = duration * progress;
      requestHeroScrub();
    }

    heroTicking = false;
  };

  const requestHeroUpdate = () => {
    if (!heroTicking) {
      window.requestAnimationFrame(updateHeroScroll);
      heroTicking = true;
    }
  };

  heroVideo.addEventListener("loadedmetadata", () => {
    heroVideoDuration = heroVideo.duration || 0;
    heroRenderedTime = heroVideo.currentTime || 0;
    heroTargetTime = heroRenderedTime;
    heroVideo.pause();
    updateHeroScroll();
  });

  heroVideo.addEventListener("canplay", () => {
    heroVideo.pause();
  });

  window.addEventListener("scroll", requestHeroUpdate, { passive: true });
  window.addEventListener("resize", requestHeroUpdate);
  if (heroVideo.readyState) {
    heroVideoDuration = heroVideo.duration || 0;
  }
  updateHeroScroll();
}

const sequence = document.querySelector(".scroll-sequence");
const sequenceVideo = document.querySelector(".sequence-video");
const sequencePanels = [...document.querySelectorAll(".sequence-panel")];
const sequenceProgress = document.querySelector(".sequence-progress");
const supportsScrollTimeline = CSS.supports("animation-timeline: view()");

if (sequence && sequenceVideo && sequencePanels.length) {
  let videoDuration = 0;
  let ticking = false;

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const updateSequence = () => {
    const rect = sequence.getBoundingClientRect();
    const scrollable = rect.height - window.innerHeight;
    const progress = scrollable > 0 ? clamp(-rect.top / scrollable, 0, 1) : 0;
    const activeIndex = clamp(Math.floor(progress * sequencePanels.length), 0, sequencePanels.length - 1);
    const duration = videoDuration || sequenceVideo.duration || 0;

    if (duration && sequenceVideo.seekable.length) {
      try {
        sequenceVideo.currentTime = duration * progress;
      } catch {
        // Some browsers delay seeking until the file is fully indexed.
      }
    }

    sequence.style.setProperty("--sequence-progress", progress.toFixed(3));
    sequence.classList.toggle("has-native-scroll-timeline", supportsScrollTimeline);

    if (sequenceProgress) {
      sequenceProgress.textContent = `${String(Math.round(progress * 100)).padStart(2, "0")}%`;
    }

    sequencePanels.forEach((panel, index) => {
      panel.classList.toggle("is-active", index === activeIndex);
    });

    ticking = false;
  };

  const requestSequenceUpdate = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateSequence);
      ticking = true;
    }
  };

  sequenceVideo.addEventListener("loadedmetadata", () => {
    videoDuration = sequenceVideo.duration || 0;
    sequenceVideo.pause();
    updateSequence();
  });

  sequenceVideo.addEventListener("canplay", () => {
    sequenceVideo.pause();
  });

  window.addEventListener("scroll", requestSequenceUpdate, { passive: true });
  window.addEventListener("resize", requestSequenceUpdate);
  if (sequenceVideo.readyState) {
    videoDuration = sequenceVideo.duration || 0;
  }
  updateSequence();
}
