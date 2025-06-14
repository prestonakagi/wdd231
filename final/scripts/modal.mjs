// display modal when click a button
// only way to close modal is to click top right X button
// for dialog window

// use .join(', ') for arrays of strings!
// need 1st arg for selected ID and 2nd arg = data.specific level.

export function displayField(whichModal, imagePath) {
//   whichModal is for selection of dialog element!
  whichModal.innerHTML = `
    <button type="button" id="closeModal">X</button>
    <h2>Ultimate Frisbee Field of Play</h2>
    <img src="${imagePath}" alt="Field of Play Diagram" load="lazy">
  `;
  whichModal.showModal();

  // To close the modal when click X button
    const closeButton = document.getElementById('closeModal');

  closeButton.addEventListener("click", () => {
    whichModal.close();
    // TODO: first modal can be closed, but 2nd modal opens but cannot be closed on click!
    // Actually kind of random which modal cannot be closed.
  });
};