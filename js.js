var animateMouse = function(event, args){

	var self = this,
		defaultArgs = {
			time : "0.3s"
		},
  		pfx = ["webkit", "moz", "MS", "o", ""]; // Browser types support

	self.previousY = 0;
	self.previousX = 0;
	self.Args;

  	function setVals(args, defaultArgs){
		if ( typeof args === 'undefined') {
			self.Args = defaultArgs;
			return;
		}

		for(val in args){
			if ( typeof defaultArgs[val] !== 'undefined' ){
				defaultArgs[val] = args[val];
			} else {
				console.log("Trying to set an unfamiliar value of: " + val);
			}
		}

		self.Args = defaultArgs;
	};

	//Self firing function on dom ready
	window.onload = (function(){
		setVals(args, defaultArgs);
  		PrefixedEvent(document, event, createElement);
	})();
  
  function PrefixedEvent(element, type, callback) {
  	//Run on the browser prefix (array) to detect users browser and set the event listener
    for (var p = 0; p < pfx.length; p++) {
      if (!pfx[p]) type = type.toLowerCase();
      element.addEventListener(pfx[p]+type, callback, false); // Event listener to the document "On click"
    }
  }

	function removeElemAfterAnimation(elem){
		//Add a listener to the elemnt to wait for the animation end time
		elem.addEventListener('animationend', function(e){
			document.body.removeChild(elem); // Remove the element from the dom
		})
	}

	function createElement(e){

		//Mouse move event is fired constantly to check mouse position
		//This prevents the function excecution every check
		if ( self.previousY === e.offsetY && self.previousX === e.offsetX ) {
			return;
		}

		//Save last mouse position
		self.previousY = e.clientY;
		self.previousX = e.clientX;

		var elem,
			positionTop = parseInt(self.previousY, 10) - 7;
			positionLeft = parseInt(self.previousX, 10) - 7;

		if( positionTop < 0 || positionLeft < 0 ) {
			return;
		} 

		//Create the Element in the dom and save it
		elem = document.createElement('span');
		// Set top position of the element by the click event offset
		elem.style.top = positionTop + 'px';
		// Set left position of the element by the click event offset
		elem.style.left = positionLeft + 'px';
    
    	elem.style.animationDuration = self.Args.time;
		// Add a class to the element
		elem.classList.add('animateClick');
		// Append the new element to the body
		document.body.appendChild(elem);
		//Pass the element for removing after animation ends
		removeElemAfterAnimation(elem);
	}

}
