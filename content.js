// Panel 1 - Details
const panel1 = new Panel('panel-1', { aspectRatio: 4 / 3 });

panel1.addElement('images/papers.png', 16, 6, 62, 0);
panel1.addElement('images/cloud.png', -15, -30, 45, 0, 47, 2);
panel1.addElement('images/sparkle.png', -5, -30, 15, 0, 16, -2);
panel1.addElement('images/sparkle.png', 45, 30, 15, 0, 16, 2);

panel1.addText('details of the day', 15, -1, 4.5, -3, 5, -5, 'card-text');
panel1.addText('(coming soon)', 15, 20, 4, -3, 4.5, -5, 'card-text');
panel1.addElement('images/goose.png', -23, 15, 24, 0, 26, -4);

// Panel 2 - Title
const panel2 = new Panel('panel-2', { aspectRatio: 3 / 2 });

panel2.addText("Kate & Reu's", 0, -5, 13, -8, null, null, 'title-text');
panel2.addText('Wedding', 6, 22, 13, -8, null, null, 'title-text');

// Panel 3 - Links
const panel3 = new Panel('panel-3', { aspectRatio: 4 / 3 });

panel3.setBackground('images/stamp-green.svg');
panel3.addText('LIN&#8203;KS', 0, -20, 8, 0, null, null, 'frame-title');
panel3.addText('Registry<br>(coming soon)', 0, 10, 3, -4, 3.5, -7, 'sticky-note');
//panel3.addText('RVSP', 16, 6, 4.5, 3, 5, 5, 'sticky-note');
panel3.addElement('images/sparkle.png', -39, 29, 16, 0, 17, 2);
panel3.addElement('images/sparkle.png', 30, -40, 8, 0, 9, 2);
panel3.addElement('images/sparkle.png', 39, -27, 8, 0, 9, -2);
panel3.addElement('images/sparkle.png', 43, -42, 8, 0, 9, 2);



// Panel 4 - Framed photos
const panel4 = new Panel('panel-4', { aspectRatio: 4 / 3 });

panel4.addElement('images/stamp-green-2.svg', 8, 2, 55, 90);
panel4.addElement('images/purple.jpg', -4, 0, 24, -4, 26, -6, 'framed-photo');
panel4.addElement('images/prop.jpg', 22, 4, 26, 5, 28, 7, 'framed-photo');
panel4.addElement('images/flowers.png', -26, 20, 40, 0, 40, -2);
panel4.addElement('images/green-stars.webp', -30, -15, 20, 0, 21, 2);

// Panel 5 - Venue information
const panel5 = new Panel('panel-5', { aspectRatio: 4 / 3 });

panel5.addElement('images/post-card.png', 0, 0, 70, 0);
panel5.addText('Venue', -25, -39, 8, 0, null, null, 'venue');
panel5.addText('Information', 13.2, 40, 8, 0, null, null, 'venue');
panel5.addText('Kortright Centre,<br>9550 Pine<br>Valley Dr,<br>Woodbridge', 19, 7.8, 3, 0, 3.2, 0, 'normal-text');
panel5.addElement('images/kortright.jpg', -17.6, 0, 30, 0);
panel5.addElement('images/sparkle.png', -20, 38, 9, 0, 11, 2);
panel5.addElement('images/sparkle.png', 17, -38, 9, 0, 11, -2);

panel5.el.addEventListener('click', () => {
  window.open('https://maps.app.goo.gl/mSQQbGWTj4P4H5Lx9', '_blank');
});

// Panel 6 - Save the date
const panel6 = new Panel('panel-6', { aspectRatio: 4 / 3 });

panel6.setBackground('images/stamp-blue.svg');
panel6.addText('Save the<br>Date', 0, -21, 10, 0, null, null, 'date-heading');
panel6.addText('August<br>22, 2027', 0, 9, 5, 0, 5.4, null, 'date-text');
panel6.addText('4:30pm', 0, 30, 4, 0, 4.4, null, 'date-text');
panel6.addElement('images/moon.png', -18, 36, 33, 0, 34, 3);
panel6.addElement('images/green-stars.webp', 26, 32, 25, 0, 27, -2);
