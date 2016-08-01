# mouse-event-animation


to initiate the script just add the next script to your DOM

```
<script type="text/javascript">
	var args = {
		time : "0.3s", 									// Default "0.3s"
		setToElement: document.getElementById('foo'), 	// Default document
		color: '#4545aa', 								// Default #000
		background: '#444' 								// Default transparent
	};

	animateMouse('mousemove', args);
</script>
```

setToElement option is for applying the animation on spesific areas of the page
