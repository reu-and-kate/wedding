// Panel 1 - Details
const panel1 = new Panel('panel-1', { aspectRatio: 4 / 3 });

panel1.addElement('images/papers.png', 16, 6, 62, 0);
panel1.addElement('images/cloud.png', -15, -30, 45, 0, 47, 2);
panel1.addElement('images/goose.png', -23, 15, 24, 0, 26, -4);
panel1.addElement('images/sparkle.png', -5, -30, 15, 0);
panel1.addElement('images/sparkle.png', 45, 30, 15, 0);

panel1.addText('details of the day', 15, -1, 5, -3, 5.5, -5, 'card-text');
panel1.addText('(coming soon)', 15, 20, 4, -3, 4.5, -5, 'card-text');

// Panel 2 - Title
const panel2 = new Panel('panel-2', { aspectRatio: 3 / 2 });

panel2.addText("Kate & Reu's", 0, -5, 13, -20, null, null, 'title-text');
panel2.addText('Wedding', 6, 22, 13, -20, null, null, 'title-text');

// Panel 3 - Registry link
const panel3 = new Panel('panel-3', { aspectRatio: 4 / 3 });

panel3.setBackground('images/stamp-green.svg');
panel3.addText('Links', 0, -20, 7.5, 0, null, null, 'frame-title');
panel3.addText('Registry', -13, 10, 4, -4, 4.5, -7, 'sticky-note');
panel3.addText('RVSP', 16, 6, 4.5, 3, 5, 5, 'sticky-note');
panel3.addElement('images/sparkle.png', -42, 36, 7, 0);
panel3.addElement('images/sparkle.png', 4, -33, 6, 0);

// Panel 4 - Framed photos
const panel4 = new Panel('panel-4', { aspectRatio: 4 / 3 });

panel4.setBackground('images/stamp-green-2.svg');
panel4.addElement('images/reukatenewfoundland.jpg', -16, 0, 28, -4, 30, -6, 'framed-photo');
panel4.addElement('images/prop.jpg', 16, 4, 20, 3, 23, 5, 'framed-photo');
panel4.addElement('images/flowers.png', -32, 20, 40, 0);
panel4.addElement('images/green-stars.webp', -36, -15, 20, 0);

// Panel 5 - Venue information
const panel5 = new Panel('panel-5', { aspectRatio: 4 / 3 });

panel5.addElement('images/post-card.png', 0, 0, 70, 0);
panel5.addText('Venue', -34, -41, 8, 0, null, null, 'venue-title');
panel5.addText('Information', 23, 41, 8, 0, null, null, 'info-title');
panel5.addText('Kortright Centre,<br>9550 Pine<br>Valley Dr,<br>Woodbridge', 19, 7.8, 3, 0, null, null, 'normal-text'); // https://maps.app.goo.gl/mSQQbGWTj4P4H5Lx9
panel5.addElement('images/kortright.jpg', -17.6, 0, 30, 0);
panel5.addElement('images/sparkle.png', -4, 38, 6, 0);

// Panel 6 - Save the date
const panel6 = new Panel('panel-6', { aspectRatio: 4 / 3 });

panel6.setBackground('images/stamp-blue.svg');
panel6.addText('Save the<br>Date', 0, -16, 7, 0, null, null, 'date-heading');
panel6.addText('August 22<br>2027', 0, 14, 7, 0, null, null, 'date-value');
panel6.addElement('images/moon.png', -22, 36, 36, 0);
panel6.addElement('images/green-stars.webp', 30, 32, 25, 0);
