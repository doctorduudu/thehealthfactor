$(document).ready(function(){
    
    (function() {
        const cardText = document.querySelectorAll('.card-text');
            cardText.forEach(card => {
                card.textContent = card.textContent.substring(0, 220);
            });
    }());
    
//  // Add smooth scrolling to all links
//  $("a").on('click', function(event) {
//
//    // Make sure this.hash has a value before overriding default behavior
//    if (this.hash !== "") {
//      // Prevent default anchor click behavior
//      event.preventDefault();
//
//      // Store hash
//      var hash = this.hash;
//
//      // Using jQuery's animate() method to add smooth page scroll
//      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//      $('html, body').animate({
//        scrollTop: $(hash).offset().top
//      }, 800, function(){
//
//        // Add hash (#) to URL when done scrolling (default click behavior)
//        window.location.hash = hash;
//      });
//    } // End if
//  });
    
//    $('.backtotop').click(function(){
//        console.log('back to top clicked');
//        window.scroll({
//          top: 250, 
//          left: 0,    
//          behavior: 'smooth'
//        });
//    })
//    $('.navbar-nav .nav-item').click(function(){
//        console.log('back to top clicked');
//        window.scroll({
//          top: 250, 
//          left: 0,    
//          behavior: 'smooth'
//        });
//    })
    
    // Select all links with hashes
//$('a[href*="#"]')
//  // Remove links that don't actually link to anything
//  .not('[href="#"]')
//  .not('[href="#0"]')
//  .click(function(event) {
//    // On-page links
//    if (
//      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
//      && 
//      location.hostname == this.hostname
//    ) {
//      // Figure out element to scroll to
//      var target = $(this.hash);
//      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//      // Does a scroll target exist?
//      if (target.length) {
//        // Only prevent default if animation is actually gonna happen
//        event.preventDefault();
//        $('html, body').animate({
//          scrollTop: target.offset().top
//        }, 1000, function() {
//          // Callback after animation
//          // Must change focus!
//          var $target = $(target);
//          $target.focus();
//          if ($target.is(":focus")) { // Checking if the target was focused
//            return false;
//          } else {
//            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//            $target.focus(); // Set focus again
//          };
//        });
//      }
//    }
//    
//  }); 
    
    // Vanilla JavaScript Scroll to Anchor
// @ https://perishablepress.com/vanilla-javascript-scroll-anchor/

(function() {
	scrollTo();
})();

function scrollTo() {
	var links = document.getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		var link = links[i];
		if ((link.href && link.href.indexOf('#') != -1) && ((link.pathname == location.pathname) || ('/' + link.pathname == location.pathname)) && (link.search == location.search)) {
			link.onclick = scrollAnchors;
		}
	}
}

function scrollAnchors(e, respond = null) {
	const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
	e.preventDefault();
	var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
	const targetAnchor = document.querySelector(targetID);
	if (!targetAnchor) return;
	const originalTop = distanceToTop(targetAnchor);
	window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
	const checkIfDone = setInterval(function() {
		const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
		if (distanceToTop(targetAnchor) === 0 || atBottom) {
			targetAnchor.tabIndex = '-1';
			targetAnchor.focus();
			window.history.pushState('', '', targetID);
			clearInterval(checkIfDone);
		}
	}, 100);
}
});