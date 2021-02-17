const ease = {
  exponentialIn: (t) => (0 == t ? t : Math.pow(2, 10 * (t - 1))),
  exponentialOut: (t) => (1 == t ? t : 1 - Math.pow(2, -10 * t)),
  exponentialInOut: (t) =>
    0 == t || 1 == t
      ? t
      : t < 0.5
      ? 0.5 * Math.pow(2, 20 * t - 10)
      : -0.5 * Math.pow(2, 10 - 20 * t) + 1,
  sineOut: (t) => {
    return Math.sin(1.5707963267948966 * t);
  },
  circularInOut: (t) =>
    t < 0.5
      ? 0.5 * (1 - Math.sqrt(1 - 4 * t * t))
      : 0.5 * (Math.sqrt((3 - 2 * t) * (2 * t - 1)) + 1),
  cubicIn: (t) => t * t * t,
  cubicOut: (t) => {
    const a = t - 1;
    return a * a * a + 1;
  },
  cubicInOut: (t) => (t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1),
  quadraticOut: (t) => -t * (t - 2),
  quarticOut: (t) => Math.pow(t - 1, 3) * (1 - t) + 1,
};

class ShapeOverlays {
  constructor(e) {
    this.elm = e;
    this.path = e.querySelectorAll('path');
    this.numPoints = 4;
    this.duration = 1000;
    this.delayPointsArray = [];
    this.delayPointsMax = 0;
    this.delayPerPath = 60;
    this.timeStart = Date.now();
    this.isOpened = false;
    this.isAnimating = false;
  }
  toggle() {
    this.isAnimating = true;
    for (var e = 0; e < this.numPoints; e++) this.delayPointsArray[e] = 0;
    this.isOpened === false ? this.open() : this.close();
  }
  open() {
    this.isOpened = true;
    this.elm.classList.add('is-opened');
    this.timeStart = Date.now();
    this.renderLoop();
  }
  close() {
    this.isOpened = false;
    this.elm.classList.remove('is-opened');
    this.timeStart = Date.now();
    this.renderLoop();
  }
  updatePath(e) {
    const t = [];
    for (var s = 0; s < this.numPoints; s++) {
      const i = s % 2 == 1 ? ease.sineOut : ease.exponentialInOut;
      t[s] = 100 * (1 - i(Math.min(Math.max(e - this.delayPointsArray[s], 0) / this.duration, 1)));
    }
    let i = '';
    i += this.isOpened ? `M 0 0 H ${t[0]}` : `M ${t[0]} 0`;
    for (s = 0; s < this.numPoints - 1; s++) {
      const e = ((s + 1) / (this.numPoints - 1)) * 100,
        n = e - ((1 / (this.numPoints - 1)) * 100) / 2;
      i += `C ${t[s]} ${n} ${t[s + 1]} ${n} ${t[s + 1]} ${e} `;
    }
    return (i += this.isOpened ? 'H 100 V 0' : 'H 0 V 0');
  }
  render() {
    if (this.isOpened) {
      for (var e = 0; e < this.path.length; e++) {
        this.path[e].setAttribute(
          'd',
          this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * e))
        );
      }
    } else {
      for (e = 0; e < this.path.length; e++) {
        this.path[e].setAttribute(
          'd',
          this.updatePath(
            Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - e - 1))
          )
        );
      }
    }
  }
  renderLoop() {
    this.render();
    const animationTimeDiff = Date.now() - this.timeStart;
    const durationPath =
      this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax;

    if (animationTimeDiff < durationPath) {
      requestAnimationFrame(() => {
        this.renderLoop();
      });
    } else {
      this.isAnimating = false;
    }
  }
}

export const initShapeAnimation = () => {
  const e = document.querySelector('.hamburger'),
    t = document.querySelector('.hamburger-icon'),
    s = document.querySelector('.shape-overlays'),
    i = new ShapeOverlays(s),
    n = document.querySelectorAll('.global-menu__item');
  document.querySelector('.custom-dropdown-menu a');

  e.addEventListener('click', () => {
    if ((i.toggle(), i.isOpened === true)) {
      e.classList.add('is-opened-navi');
      for (var t = 0; t < n.length; t++) n[t].classList.add('is-opened');
    } else {
      e.classList.remove('is-opened-navi');
      for (t = 0; t < n.length; t++) n[t].classList.remove('is-opened');
    }
  });
  t.addEventListener('click', () => {
    if ((i.toggle(), i.isOpened === true)) {
      e.classList.add('is-opened-navi');
      for (var t = 0; t < n.length; t++) n[t].classList.add('is-opened');
    } else {
      e.classList.remove('is-opened-navi');
      for (t = 0; t < n.length; t++) n[t].classList.remove('is-opened');
    }
  });

  // $(".custom-dropdown-menu").on("click", "a", function () {
  //   if ((i.toggle(), !0 === i.isOpened)) {
  //     e.classList.add("is-opened-navi");
  //     for (var t = 0; t < n.length; t++) n[t].classList.add("is-opened");
  //   } else {
  //     e.classList.remove("is-opened-navi");
  //     for (t = 0; t < n.length; t++) n[t].classList.remove("is-opened");
  //   }
  // }),
  // $(".list-inline").on("click", "li", function (t) {
  //   if ((i.toggle(), !0 === i.isOpened)) {
  //     e.classList.add("is-opened-navi");
  //     for (var s = 0; s < n.length; s++) n[s].classList.add("is-opened");
  //   } else {
  //     e.classList.remove("is-opened-navi");
  //     for (s = 0; s < n.length; s++) n[s].classList.remove("is-opened");
  //   }
  // });
};
