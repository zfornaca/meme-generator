window.onload = function() {
  var sandwichOrder = document.querySelector('form');

  // Capture form inputs
  sandwichOrder.addEventListener('submit', function(evt) {
    evt.preventDefault();
    var topText = document.getElementById('topBun').value;
    var memeURL = document.getElementById('fillings').value;
    var bottomText = document.getElementById('bottomBun').value;

    // Create new div (newMeme) to add to page
    var newMeme = document.createElement('div');
    newMeme.setAttribute('class', 'meme');

    // Convert form inputs to img, h2, h2 tags to add to newMeme
    var bgImage = document.createElement('img');
    bgImage.setAttribute('src', memeURL);
    var textOne = document.createElement('h2');
    textOne.setAttribute('class', 'firstText');
    textOne.innerText = topText;
    var textTwo = document.createElement('h2');
    textTwo.setAttribute('class', 'secondText');
    textTwo.innerText = bottomText;

    // Generate remove text
    var removeTag = document.createElement('p');
    removeTag.setAttribute('class', 'remove');
    removeTag.innerText = 'Clear plate?';

    // Add img, h2, h2 to newMeme
    newMeme.appendChild(removeTag);
    newMeme.appendChild(bgImage);
    newMeme.appendChild(textOne);
    newMeme.appendChild(textTwo);

    // Add removal behavior
    newMeme.addEventListener('click', function(evt) {
      newMeme.remove();
    });

    // Append newMeme to page
    var container = document.getElementById('container');
    container.appendChild(newMeme);

    //
    document.getElementById('memeForm').reset();
  });
};
