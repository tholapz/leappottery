var BasicCanvas = {
	reset : function( context, imageData ){
		context.clearRect(0, 0, context.canvas.width, context.canvas.height);
		
	},
	setPixel : function( imageData, x, y, r, g, b, a ){
		if( imageData.length == 0 ) return;
		var index = (x + y * imageData.width) * 4;
        imageData.data[index+0] = r;
        imageData.data[index+1] = g;
        imageData.data[index+2] = b;
        imageData.data[index+3] = a;
	},

}
