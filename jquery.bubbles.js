(function( $ ) {
  $.fn.bubbles = function( options ) {
  
  var settings = $.extend( {
      'image'         : 'bubble.png',	// bubble image filename
      'firstX' : 0,	// x initial position of bubbles compared to parent 
	  'firstY' : 0,		// y initial position of bubbles compared to parent 
	  'minHeight' : 10,
	  'maxHeight' : 90,
	  'minX' : 200,		// minimum x ending position of bubbles 
	  'minY' : 0,		// minimum y ending position of bubbles 
	  'maxX' : 300,		// maximum x ending position of bubbles 
	  'maxY' : -200,	// maximum y ending position of bubbles 
	  'minDuration' : 500,	// minimum duration of the animation in milliseconds
	  'maxDuration' : 5000,	// maximum duration of the animation in milliseconds
	  'interval' : 50 	// duration of the interval between the appearance of a bubble and the subsequent
    }, options);
  
   /* BUBBLES */
		var bubble = new Array();
		var element = $(this);
		function newBubble() {
			var i = bubble.push(document.createElement("img"));
			$(bubble[i-1]).attr('src',settings.image);
			$(bubble[i-1]).css({ 	"position": "absolute",
									"display":"none",
									'left': settings.firstX+'px',
									'top': settings.firstY+'px' });
			$(element).append(bubble[i-1]);
			}
		
		setInterval(function() {
			if (bubble.length == 0)
				newBubble();
			//console.log(bubble.length+" "+$('img').length);
			var temp = bubble.pop();
			$(temp).show();
			$(temp).height(settings.minHeight+Math.floor(Math.random()*settings.maxHeight));
			$(temp).animate({
				left: '+='+(Math.floor(Math.random()*settings.maxX)+settings.minX),
				top:  '+='+(Math.floor(Math.random()*settings.maxY)+settings.minY)
			},{"duration" :  settings.minDuration+Math.floor(Math.random()*settings.maxDuration), 
			"complete" : function() {
			$(this).css({ 	"position": "absolute",
									"display":"none",
									'left': settings.firstX+'px',
									'top': settings.firstY+'px' });
			bubble.push($(this));
			}});
		}, settings.interval);
		/* END OF BUBBLES */
  };
})( jQuery );
