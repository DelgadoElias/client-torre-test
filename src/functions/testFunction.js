/**
 * Show Toast in App for 3s.
 * @param {object} x - Selected HTML element.
 */
export default function testFunction() {
  const x = document.getElementById('snackbar');
  x.className = 'show';
  setTimeout(function() {
    x.className = x.className.replace('show', '');
  }, 3000);
};
