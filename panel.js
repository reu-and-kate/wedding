class Panel {
  constructor(id, { aspectRatio = 1 } = {}) {
    const el = document.getElementById(id);
    if (!el) throw new Error(`Panel: no element found with id "${id}"`);
    this.el = el;
    this.el.style.aspectRatio = aspectRatio;
  }

  setBackground(src) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.className = 'panel-background';
    this.el.appendChild(img);
    return img;
  }

  addElement(
    src,
    xOffset = 0,
    yOffset = 0,
    scale = 1,
    rotation = 0,
    hoverScale = null,
    hoverRotation = null,
    className = ''
  ) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    if (className) img.classList.add(...className.split(' '));
    this._place(img, xOffset, yOffset, scale, rotation, hoverScale, hoverRotation);
    this.el.appendChild(img);
    return img;
  }

  addText(
    text,
    xOffset = 0,
    yOffset = 0,
    scale = 0.06,
    rotation = 0,
    hoverScale = null,
    hoverRotation = null,
    className = ''
  ) {
    const div = document.createElement('div');
    div.innerHTML = text;
    if (className) div.classList.add(...className.split(' '));
    this._place(div, xOffset, yOffset, scale, rotation, hoverScale, hoverRotation);
    this.el.appendChild(div);
    return div;
  }

  /** Shared positioning/scaling/rotation/hover logic for any element type. */
  _place(node, xOffset, yOffset, scale, rotation, hoverScale, hoverRotation) {
    node.classList.add('panel-element');

    node.style.left = `${50 + xOffset * 100}%`;
    node.style.top = `${50 + yOffset * 100}%`;

    node.style.fontSize = `${scale * 100}cqw`;
    node.style.setProperty('--scale', scale);
    node.style.setProperty('--rot', `${rotation}deg`);

    if (hoverScale !== null || hoverRotation !== null) {
      const targetScale = hoverScale ?? scale;
      const targetRotation = hoverRotation ?? rotation;
      node.style.setProperty('--rot-hover', `${targetRotation}deg`);
      node.style.setProperty('--scale-mult', targetScale / scale);
      node.classList.add('has-hover');
    }
  }
}