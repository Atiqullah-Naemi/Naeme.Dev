import Typed from 'typed.js';

class Typing
{
	constructor()
	{
		this.startTyping();
	}

	startTyping()
	{
		var typed = new Typed('.large-hero__toggleTyping', {
		  stringsElement: '.large-hero__typing',
		  typeSpeed: 200,
		   loop: true,
		   loopCount: Infinity,
		   autoInsertCss: true,
		   contentType: 'html',
		   showCursor: true,
		   cursorChar: ''
		});
	}
}

export default Typing;