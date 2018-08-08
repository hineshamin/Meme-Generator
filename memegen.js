var submitbutton = document.querySelector('button');
var obj = {};
var arr = JSON.parse(sessionStorage.getItem('memes')) || [];
submitbutton.addEventListener('click', function() {
  var x = document.querySelector('form');
  for (var i = 0; i < x.length; i++) {
    obj[x.elements[i].getAttribute('id')] = x.elements[i].value;
  }
  obj.urlinput ? arr.push(obj) : alert('Please enter a valid URL');
  sessionStorage.setItem('memes', JSON.stringify(arr));
});

//Display the memes with the correct text
var memearea = document.querySelector('.memearea');
for (var i = 0; i < arr.length; i++) {
  var meme = document.createElement('div');
  meme.setAttribute('id', i.toString());
  meme.style.display = 'flex';
  meme.style.margin = '20px';
  meme.style.position = 'relative';
  meme.style.textAlign = 'center';
  var image = document.createElement('img');
  image.setAttribute('src', arr[i].urlinput);
  var ximagediv = document.createElement('div');
  ximagediv.setAttribute('class', 'ximage');
  ximagediv.setAttribute('id', i.toString());
  var ximage = document.createElement('img');
  ximage.setAttribute(
    'src',
    'http://www.clker.com/cliparts/e/0/f/4/12428125621652493290X_mark_18x18_02.svg.med.png'
  );
  ximagediv.style.position = 'absolute';
  ximagediv.style.left = '50%';
  ximagediv.style.top = '50%';
  ximagediv.style.transform = 'translate(-50%, -50%)';
  ximagediv.appendChild(ximage);
  var toptext = document.createElement('div');
  toptext.setAttribute('id', i.toString() + 'toptext');
  toptext.innerText = arr[i].toptext.toUpperCase();
  toptext.style.position = 'absolute';
  toptext.style.left = '50%';
  toptext.style.transform = 'translate(-50%)';
  var bottomtext = document.createElement('div');
  bottomtext.setAttribute('id', i.toString() + 'bottomtext');
  bottomtext.innerText = arr[i].bottomtext.toUpperCase();
  bottomtext.style.position = 'absolute';
  bottomtext.style.bottom = '0%';
  bottomtext.style.left = '50%';
  bottomtext.style.transform = 'translate(-50%)';
  meme.appendChild(toptext);
  meme.appendChild(bottomtext);
  meme.appendChild(image);
  meme.appendChild(ximagediv);
  memearea.appendChild(meme);
}

//Remove elements when clicked on
for (var i = 0; i < arr.length; i++) {
  var meme = document.getElementById(i.toString());
  meme.addEventListener('click', function(event) {
    var index = event.target.parentElement.getAttribute('id');
    arr = removeAtIndex(arr, parseInt(index));
    sessionStorage.setItem('memes', JSON.stringify(arr));
    document.location.reload(true);
  });
}

function removeAtIndex(arr, i) {
  return arr.slice(0, i).concat(arr.slice(i + 1));
}
