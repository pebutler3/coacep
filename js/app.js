$(document).foundation();

$(function() {
  var header = $("header > div");

  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 10) {
          header.addClass("fixed");
      } else {
          header.removeClass("fixed");
      }
  });

  $.scrollIt({
    upKey: 38,               // key code to navigate to the next section
    downKey: 40,             // key code to navigate to the previous section
    easing: 'linear',        // the easing function for animation
    scrollTime: 600,         // how long (in ms) the animation takes
    activeClass: 'active',   // class given to the active nav element
    onPageChange: null,      // function(pageIndex) that is called when page is changed
    topOffset: -75           // offste (in px) for fixed top navigation
  });
});

var moreInfoButton = document.querySelector('.more-info');
var annualMeetingSidebar = document.querySelector('.annual-meeting-sidebar');
var annualMeetingSidebarOverlay = document.querySelector('.annual-meeting-sidebar__overlay');
var annualMeetingSidebarOverlayOpen = document.querySelector('.annual-meeting-sidebar__overlay--open');
var closeAnnualMeetingSidebarButton = document.querySelector('.close-annual-meeting-sidebar');
var sidebarIsOpen = false;

// moreInfoButton

var closeAnnualMeetingSidebar = function() {
  annualMeetingSidebar.classList.remove('annual-meeting-sidebar--open');
  annualMeetingSidebarOverlay.classList.remove('annual-meeting-sidebar__overlay--open');
}

var toggleAnnualMeetingSidebar = function() {
  annualMeetingSidebar.classList.toggle('annual-meeting-sidebar--open');
  annualMeetingSidebarOverlay.classList.toggle('annual-meeting-sidebar__overlay--open');

  annualMeetingSidebarOverlay.addEventListener('click', closeAnnualMeetingSidebar);
  closeAnnualMeetingSidebarButton.addEventListener('click', closeAnnualMeetingSidebar);
};

moreInfoButton && moreInfoButton.addEventListener('click', toggleAnnualMeetingSidebar);

