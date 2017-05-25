
var currentIndex = 0;
var maxIndex = 2;
window.isPaused = false;

function nextIndex (index) {
  return (index + 1) % (maxIndex + 1);
}

function bgUrlFor (index) {
  return 'url("img/bg-' + index + '.jpg")';
}

function transitionBg (prevIndex, nextIndex) {
  $('.main-container').css('background-image', bgUrlFor(nextIndex));
}

function changeText (nextIndex) {
  var title = ['colombia', 'ecuador', 'peru'];
  var subtitle = ['escape tour', 'coming soon', 'coming soon'];
  var description = [
    'its a 14 day tour designed for young and active teenagers/adults to escape their daily lives and live for a couple weeks like all the famous instagrammers and celebrities you see on social media like instagram and snapchat live with the most beautiful places, luxury mansions and pool parties while having the most amazing fun and adventures!',
    'Follow us on instagram to find out when we launch in cerro tusa and check out all of our amazing content!',
    'Follow us on instagram to find out when we launch in guatapé and check out all of our amazing content!',
  ];
  var button = ['book adventure', 'follow', 'follow']

  $('.content-container .title').text(title[nextIndex]);
  $('.content-container .subtitle').text(subtitle[nextIndex]);
  $('.content-container .description').text(description[nextIndex]);
  $('#book-adventure-button').text(button[nextIndex]);

  $('.content-container .title-container').removeClass('black');
  if (nextIndex === 1) {
    $('.content-container .title-container').addClass('black');
  }

  $('.navbar-item .text').removeClass('white');
  if (nextIndex === 2) {
    $('.navbar-item .text').addClass('white');
  }

  $('.content-container .description').removeClass('black');
  if (nextIndex === 1) {
    $('.content-container .description').addClass('black');
  }
}

function changeNav (nextIndex) {
  $('.carousel-nav-item').removeClass('active');
  $('.carousel-nav-item.' + nextIndex).addClass('active');
}

function makeActive (nextIndex) {
  changeText(nextIndex);
  transitionBg(currentIndex, nextIndex);
  changeNav(nextIndex);
}

$(function () {
  $('.main-container').css('background-image', bgUrlFor(currentIndex));

  window.setInterval(function () {
    if (window.isPaused) return;

    var next_index = nextIndex(currentIndex);
    makeActive(next_index);
    currentIndex = next_index;
  }, 7000);

  $('.carousel-nav-item').click(function (e) {
    e.preventDefault();

    window.isPaused = true;

    var target = e.target;
    console.log('target:', target);
    var navItem = $(target).closest('.carousel-nav-item');
    console.log('navItem:', navItem);
    var navItemIndex = $(navItem).data('index');

    console.log('navItemIndex:', navItemIndex);
    makeActive(navItemIndex);
  });
});
