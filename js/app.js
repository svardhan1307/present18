// Main Application Logic for Shipra's Birthday Website
import { Pandas } from './pandas.js';
import { sounds } from './audio.js';
import { confetti } from './confetti.js';

class BirthdayApp {
  constructor() {
    this.currentSlide = 1;
    this.totalSlides = 5;

    this.slides = document.querySelectorAll('.slide');
    this.dots = document.querySelectorAll('.dot-indicator');
    this.prevBtn = document.getElementById('prevBtn');
    this.nextBtn = document.getElementById('nextBtn');
    this.progressFill = document.getElementById('progressFill');
    this.progressText = document.getElementById('progressText');
    this.slideCounterBadge = document.getElementById('slideCounterBadge');

    // Modals
    this.wishModal = document.getElementById('wishModal');
    this.hugModal = document.getElementById('hugModal');

    // Audio
    this.musicToggleBtn = document.getElementById('musicToggleBtn');
    this.musicWaves = document.getElementById('musicWaves');
    this.musicText = document.getElementById('musicText');

    this.touchStartX = 0;
    this.touchEndX = 0;
  }

  init() {
    // 1. Initialize Canvas Particle FX
    const canvas = document.getElementById('confettiCanvas');
    if (canvas) {
      confetti.init(canvas);
    }

    // 2. Inject Adorable Panda SVGs
    this.injectPandas();

    // 3. Attach Navigation Listeners
    this.attachNavListeners();

    // 4. Attach Action Button Listeners
    this.attachActionListeners();

    // 5. Attach Music Toggle
    this.attachMusicToggle();

    // 6. Interactive Click/Tap Anywhere for Micro Hearts
    this.attachTapFx();

    // 7. Update initial state
    this.updateUI();
  }

  injectPandas() {
    const p1 = document.getElementById('pandaContainer1');
    if (p1) p1.innerHTML = Pandas.cakePanda;

    const p2 = document.getElementById('pandaContainer2');
    if (p2) p2.innerHTML = Pandas.bestiesPandas;

    const p3 = document.getElementById('pandaContainer3');
    if (p3) p3.innerHTML = Pandas.envelopePanda;

    const p4 = document.getElementById('pandaContainer4');
    if (p4) p4.innerHTML = Pandas.partyPanda;

    const p5 = document.getElementById('pandaContainer5');
    if (p5) p5.innerHTML = Pandas.bestiesForeverPanda;

    const pHug = document.getElementById('modalHugPandaContainer');
    if (pHug) pHug.innerHTML = Pandas.hugPanda;
  }

  goToSlide(slideIndex) {
    if (slideIndex < 1 || slideIndex > this.totalSlides) return;
    if (slideIndex === this.currentSlide) return;

    sounds.playChime(440 + slideIndex * 60);

    this.slides.forEach((slide) => {
      slide.classList.remove('active');
    });

    const targetSlide = document.getElementById(`slide-${slideIndex}`);
    if (targetSlide) {
      targetSlide.classList.add('active');
    }

    this.currentSlide = slideIndex;
    this.updateUI();

    // Trigger subtle confetti burst on slide transitions
    confetti.fireCelebration(window.innerWidth / 2, window.innerHeight * 0.35, 25);
  }

  updateUI() {
    // Update progress track
    const pct = (this.currentSlide / this.totalSlides) * 100;
    if (this.progressFill) this.progressFill.style.width = `${pct}%`;
    if (this.progressText) this.progressText.textContent = `${this.currentSlide} of ${this.totalSlides}`;
    if (this.slideCounterBadge) this.slideCounterBadge.textContent = `Slide ${this.currentSlide} of ${this.totalSlides}`;

    // Update dots
    this.dots.forEach((dot, idx) => {
      if (idx + 1 === this.currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    // Update buttons disabled state
    if (this.prevBtn) this.prevBtn.disabled = this.currentSlide === 1;
    if (this.nextBtn) this.nextBtn.disabled = this.currentSlide === this.totalSlides;
  }

  attachNavListeners() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => {
        this.goToSlide(this.currentSlide - 1);
      });
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => {
        this.goToSlide(this.currentSlide + 1);
      });
    }

    // Dot indicators
    this.dots.forEach((dot) => {
      dot.addEventListener('click', (e) => {
        const target = parseInt(e.target.getAttribute('data-slide'), 10);
        if (target) this.goToSlide(target);
      });
    });

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        this.goToSlide(this.currentSlide + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        this.goToSlide(this.currentSlide - 1);
      }
    });

    // Mobile swipe gestures
    window.addEventListener('touchstart', (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    }, { passive: true });
  }

  handleSwipe() {
    const diff = this.touchStartX - this.touchEndX;
    if (Math.abs(diff) > 60) {
      if (diff > 0) {
        // Swiped left -> next
        this.goToSlide(this.currentSlide + 1);
      } else {
        // Swiped right -> prev
        this.goToSlide(this.currentSlide - 1);
      }
    }
  }

  attachActionListeners() {
    // Slide 1: Open Surprise Button
    const openSurpriseBtn = document.getElementById('openSurpriseBtn');
    if (openSurpriseBtn) {
      openSurpriseBtn.addEventListener('click', (e) => {
        const rect = openSurpriseBtn.getBoundingClientRect();
        sounds.playSparkle();
        confetti.fireCelebration(rect.left + rect.width / 2, rect.top, 80);
        setTimeout(() => {
          this.goToSlide(2);
        }, 350);
      });
    }

    // Slide 3: Letter Next Button
    const letterNextBtn = document.getElementById('letterNextBtn');
    if (letterNextBtn) {
      letterNextBtn.addEventListener('click', () => {
        sounds.playSparkle();
        this.goToSlide(4);
      });
    }

    // Slide 4: Make Wish Button
    const makeWishBtn = document.getElementById('makeWishBtn');
    if (makeWishBtn) {
      makeWishBtn.addEventListener('click', (e) => {
        const rect = makeWishBtn.getBoundingClientRect();
        sounds.playSparkle();
        confetti.fireCelebration(rect.left + rect.width / 2, rect.top, 100);
        this.openModal(this.wishModal);
      });
    }

    // Wish Modal Controls
    const closeWishModalBtn = document.getElementById('closeWishModalBtn');
    const continueWishModalBtn = document.getElementById('continueWishModalBtn');
    if (closeWishModalBtn) {
      closeWishModalBtn.addEventListener('click', () => this.closeModal(this.wishModal));
    }
    if (continueWishModalBtn) {
      continueWishModalBtn.addEventListener('click', () => {
        this.closeModal(this.wishModal);
        this.goToSlide(5);
      });
    }

    // Slide 5: Send Hug Button
    const sendHugBtn = document.getElementById('sendHugBtn');
    if (sendHugBtn) {
      sendHugBtn.addEventListener('click', (e) => {
        sounds.playHugChime();
        confetti.fireCelebration(window.innerWidth / 2, window.innerHeight * 0.4, 120);
        this.openModal(this.hugModal);
      });
    }

    // Hug Modal Controls
    const closeHugModalBtn = document.getElementById('closeHugModalBtn');
    const finishHugBtn = document.getElementById('finishHugBtn');
    const replaySurpriseBtn = document.getElementById('replaySurpriseBtn');

    if (closeHugModalBtn) {
      closeHugModalBtn.addEventListener('click', () => this.closeModal(this.hugModal));
    }
    if (finishHugBtn) {
      finishHugBtn.addEventListener('click', () => {
        sounds.playHugChime();
        confetti.fireCelebration(window.innerWidth / 2, window.innerHeight * 0.5, 80);
      });
    }
    if (replaySurpriseBtn) {
      replaySurpriseBtn.addEventListener('click', () => {
        this.closeModal(this.hugModal);
        sounds.playSparkle();
        this.goToSlide(1);
        confetti.fireCelebration(window.innerWidth / 2, window.innerHeight * 0.4, 80);
      });
    }

    // Close modals on overlay backdrop click
    [this.wishModal, this.hugModal].forEach((modal) => {
      if (modal) {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) this.closeModal(modal);
        });
      }
    });
  }

  openModal(modal) {
    if (!modal) return;
    modal.classList.add('is-active');
  }

  closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('is-active');
  }

  attachMusicToggle() {
    if (this.musicToggleBtn) {
      this.musicToggleBtn.addEventListener('click', () => {
        const isPlaying = sounds.toggleBackgroundMusic();
        if (isPlaying) {
          this.musicToggleBtn.classList.add('is-active');
          if (this.musicWaves) this.musicWaves.style.display = 'inline-flex';
          if (this.musicText) this.musicText.textContent = 'Playing ♡';
        } else {
          this.musicToggleBtn.classList.remove('is-active');
          if (this.musicWaves) this.musicWaves.style.display = 'none';
          if (this.musicText) this.musicText.textContent = 'Music Box';
        }
      });
    }
  }

  attachTapFx() {
    window.addEventListener('click', (e) => {
      // Don't trigger for buttons or interactive elements to avoid overlapping
      const target = e.target;
      if (target.closest('button') || target.closest('.flip-card')) {
        sounds.playPop();
        return;
      }

      sounds.playPop();
      confetti.fireTapSparkle(e.clientX, e.clientY);
    });
  }
}

// Instantiate and start app on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const app = new BirthdayApp();
  app.init();
});
