// Panel 1 - Details
const panel1 = new Panel('panel-1', { aspectRatio: 4 / 3 });

panel1.addElement('images/papers.png', 0.16, 0.06, 0.62, 0);
panel1.addElement('images/goose.png', -0.26, 0.08, 0.34, 0, 0.37, -4);
panel1.addElement('images/sparkle.png', -0.34, -0.3, 0.08, 0);
panel1.addElement('images/sparkle.png', 0.18, 0.24, 0.06, 0);

panel1.addText('details of the day', 0.15, -0.1, 0.05, -3, 0.055, -5, 'card-text');
panel1.addText('(coming soon)', 0.15, 0.1, 0.04, -3, 0.045, -5, 'card-text');

// Panel 2 - Title
const panel2 = new Panel('panel-2', { aspectRatio: 3 / 2 });

panel2.addText("Kate & Reu's", 0, -0.14, 0.13, -2, null, null, 'title-text');
panel2.addText('Wedding', 0.06, 0.14, 0.15, -2, null, null, 'title-text');

// Panel 3 - Registry link
const panel3 = new Panel('panel-3', { aspectRatio: 4 / 3 });

panel3.setBackground('images/stamp-green.svg');
panel3.addText('Registry Link', 0, -0.2, 0.075, 0, null, null, 'frame-title');
panel3.addText('COMING SOOON', 0, 0.06, 0.045, -4, 0.05, -7, 'card-text');
panel3.addElement('images/sparkle.png', -0.42, 0.36, 0.07, 0);
panel3.addElement('images/sparkle.png', 0.4, -0.33, 0.06, 0);

// Panel 4 - Framed photos
const panel4 = new Panel('panel-4', { aspectRatio: 4 / 3 });

panel4.setBackground('images/stamp-green-2.svg');
panel4.addElement('images/photo-1.jpg', -0.16, 0, 0.28, -4, 0.3, -6, 'framed-photo');
panel4.addElement('images/photo-2.jpg', 0.16, 0.04, 0.28, 3, 0.3, 5, 'framed-photo');
panel4.addElement('images/flowers.png', -0.32, 0.2, 0.4, 0);
panel4.addElement('images/green-stars.webp', -0.36, -0.15, 0.2, 0);

// Panel 5 - Venue information
const panel5 = new Panel('panel-5', { aspectRatio: 4 / 3 });

panel5.addText('Venue', -0.34, -0.36, 0.08, 0, null, null, 'venue-title');
panel5.addText('Information', 0.3, 0.4, 0.08, 0, null, null, 'info-title');
panel5.addText('Kortright Centre<br>For Conservation', -0.24, -0.05, 0.04, -4, null, null, 'card-text');
panel5.addElement('images/white-dotted-stamp.svg', 0.12, 0.1, 0.34, 3, 0.36, 5);
panel5.addElement('images/sparkle.png', -0.4, 0.38, 0.06, 0);

// Panel 6 - Save the date
const panel6 = new Panel('panel-6', { aspectRatio: 4 / 3 });

panel6.setBackground('images/stamp-blue.svg');
panel6.addText('Save the<br>Date', 0, -0.16, 0.075, 0, null, null, 'date-heading');
panel6.addText('August 22<br>2027', 0, 0.14, 0.07, 0, null, null, 'date-value');
panel6.addElement('images/moon.png', -0.32, 0.36, 0.26, 0);
panel6.addElement('images/sparkle-teal.png', 0.36, -0.32, 0.06, 0);
panel6.addElement('images/sparkle-teal.png', 0.4, 0.3, 0.05, 0);