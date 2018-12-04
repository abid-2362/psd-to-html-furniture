$(document).ready(function(){
  var element = $(".navbar-default");
  $(window).on("scroll", function(){
    var pos = $(window).scrollTop();
    // console.log(pos);
    if(pos > 20){
      $(element).addClass("scrolled");
    }else {
      $(element).removeClass("scrolled");
    }
  });

  // charCounter Plugin
  //message
  $('#message').simplyCountable({
    counter: '#characters-count',
    maxCount: 3000,
    strictMax: true
  });
  $('#m-message').simplyCountable({
    counter: '#m-characters-count',
    maxCount: 3000,
    strictMax: true
  });

  // mobile-search-toggle functionality
  var searchIcon = $("#small-search-icon");
  var searchInput = $("#small-search-input");
  $(searchIcon).on("click", function(){
    searchInput.slideToggle();
  });

  // hamburger menu
  var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
  });

  //blueimp gallery plugin activation
  // document.getElementById('links').onclick = function (event) {
  $('#links').find('a').on('click', function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {index: link, event: event},
        //links = this.getElementsByTagName('a');
        links = $("#links").find('a');
    blueimp.Gallery(links, options);
  });

});