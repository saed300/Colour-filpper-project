
(function() {
  var colours = ['#b0cac7', '#f7d6bf', '#318fb5', '#005086', '#24a19c', '#6ebfb5', '#ffc7c7', '#ff5f40', '#1b262c', '#0f4c75', '#3282b8', '#bbe1fa'];
  var btn = document.querySelector('#btn');
  var heading = document.querySelector('.heading');
  var body = document.querySelector('body');

  btn.addEventListener('click', function() {
    var randomizer = randomNumber();
    body.style.backgroundColor = colours[randomizer];
    heading.textContent = colours[randomizer];
  });

  function randomNumber() {
    return Math.floor(Math.random() * colours.length);
  };
})();
