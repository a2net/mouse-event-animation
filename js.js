var animateMouse = function(event){

	var self = this;
	self.previousY = 0;
	self.previousX = 0;

	//Self firing function on dom ready
	window.onload = (function(){
		document.addEventListener(event, createElement); // Event listener to the document "On click"
	})();

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
		// Add a class to the element
		elem.classList.add('animateClick');
		// Append the new element to the body
		document.body.appendChild(elem);
		//Pass the element for removing after animation ends
		removeElemAfterAnimation(elem);
	}

}