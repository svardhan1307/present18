// Dreamy Canvas Confetti & Particle FX
// Renders pastel ribbons, stars, floating hearts, and interactive click particles.

class ConfettiEngine {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.ambientParticles = [];
    this.animId = null;
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.colors = [
      '#FF85A2', // Soft Rose Pink
      '#FFAEC9', // Blush Pink
      '#FF6584', // Vibrant Pink
      '#FFF0F5', // Lavender Blush
      '#FFE066', // Warm Pastel Gold
      '#FFFFFF', // Pure White
      '#F472B6'  // Pastel Pink
    ];
  }

  init(canvasElement) {
    this.canvas = canvasElement;
    this.ctx = this.canvas.getContext('2d');
    this.resize();

    window.addEventListener('resize', () => this.resize());
    
    // Spawn initial ambient drifting particles
    this.initAmbient();
    this.startLoop();
  }

  resize() {
    if (!this.canvas) return;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  initAmbient() {
    this.ambientParticles = [];
    const count = Math.min(25, Math.floor(this.width / 40));
    for (let i = 0; i < count; i++) {
      this.ambientParticles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 8 + 6,
        speedY: Math.random() * 0.4 + 0.2,
        swaySpeed: Math.random() * 0.02 + 0.01,
        swayAmp: Math.random() * 1.5 + 0.5,
        angle: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.4 + 0.2,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        type: Math.random() > 0.4 ? 'heart' : 'sparkle'
      });
    }
  }

  // Draw heart helper
  drawHeart(ctx, x, y, size, color, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = color;
    ctx.globalAlpha = opacity;
    ctx.beginPath();
    const topCurveHeight = size * 0.3;
    ctx.moveTo(0, topCurveHeight);
    ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
    ctx.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, size, 0, size * 1.2);
    ctx.bezierCurveTo(0, size, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
    ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  // Draw star/sparkle helper
  drawSparkle(ctx, x, y, size, color, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = color;
    ctx.globalAlpha = opacity;
    ctx.beginPath();
    for (let i = 0; i < 4; i++) {
      ctx.lineTo(Math.cos((i * Math.PI) / 2) * size, Math.sin((i * Math.PI) / 2) * size);
      ctx.lineTo(
        Math.cos((i * Math.PI) / 2 + Math.PI / 4) * (size * 0.3),
        Math.sin((i * Math.PI) / 2 + Math.PI / 4) * (size * 0.3)
      );
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  // Big celebration explosion
  fireCelebration(originX = this.width / 2, originY = this.height / 2, count = 90) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 12 + 4;
      const typeRand = Math.random();
      let type = 'ribbon';
      if (typeRand > 0.6) type = 'heart';
      else if (typeRand > 0.4) type = 'sparkle';

      this.particles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 3,
        size: Math.random() * 10 + 6,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
        opacity: 1,
        decay: Math.random() * 0.015 + 0.008,
        gravity: 0.22,
        type: type
      });
    }
  }

  // Mini tap burst (when clicking/tapping anywhere on the screen)
  fireTapSparkle(x, y) {
    const count = 7;
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4 + 1.5;
      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        size: Math.random() * 7 + 5,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 8,
        opacity: 1,
        decay: 0.025,
        gravity: 0.12,
        type: Math.random() > 0.3 ? 'heart' : 'sparkle'
      });
    }
  }

  startLoop() {
    const loop = () => {
      this.ctx.clearRect(0, 0, this.width, this.height);

      // 1. Render Ambient Floating Particles
      for (let p of this.ambientParticles) {
        p.y -= p.speedY;
        p.angle += p.swaySpeed;
        p.x += Math.sin(p.angle) * p.swayAmp;

        // Wrap around top
        if (p.y < -20) {
          p.y = this.height + 20;
          p.x = Math.random() * this.width;
        }

        if (p.type === 'heart') {
          this.drawHeart(this.ctx, p.x, p.y, p.size, p.color, p.opacity);
        } else {
          this.drawSparkle(this.ctx, p.x, p.y, p.size, p.color, p.opacity);
        }
      }

      // 2. Render Active Celebration / Tap Particles
      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= 0.98;
        p.rotation += p.rotationSpeed;
        p.opacity -= p.decay;

        if (p.opacity <= 0 || p.y > this.height + 50) {
          this.particles.splice(i, 1);
          continue;
        }

        if (p.type === 'heart') {
          this.drawHeart(this.ctx, p.x, p.y, p.size, p.color, p.opacity);
        } else if (p.type === 'sparkle') {
          this.drawSparkle(this.ctx, p.x, p.y, p.size, p.color, p.opacity);
        } else {
          // Classic confetti ribbon
          this.ctx.save();
          this.ctx.translate(p.x, p.y);
          this.ctx.rotate((p.rotation * Math.PI) / 180);
          this.ctx.fillStyle = p.color;
          this.ctx.globalAlpha = p.opacity;
          this.ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
          this.ctx.restore();
        }
      }

      this.animId = requestAnimationFrame(loop);
    };

    loop();
  }
}

export const confetti = new ConfettiEngine();
