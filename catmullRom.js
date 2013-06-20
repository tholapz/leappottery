var CatmullRom = {
  smoothness = 10,
  getPointOnSpline : function( p0, p1, p2, p3, t ) {
    var result = [ 0, 0 ];
    result[0] = 0.5*((2*p1[0])+
       (-p0[0]+p2[0])*t+
       (2*p0[0]-5*p1[0]+4*p2[0]-p3[0])*t*t+
       (-p0[0]+3*p1[0]-3*p2[0]+p3[0])*t*t*t);
    result[1] = 0.5*((2*p1[1])+
       (-p0[1]+p2[1])*t+
       (2*p0[1]-5*p1[1]+4*p2[1]-p3[1])*t*t+
       (-p0[1]+3*p1[1]-3*p2[1]+p3[1])*t*t*t);

       return result;
  },
  drawLine : function( context, coord ) {
    context.beginPath();
    context.moveTo( coord[0][0], coord[0][1] );
    for (var i = 1; i < coord.length-2; i++) {
        context.lineTo(  coord[i][0], coord[i][1]);
    }
    context.lineWidth = 1;
    context.strokeStyle = 'red';
    context.stroke();
  },
  drawBezier : function( context, coord ) {
    context.beginPath();
    context.moveTo( coord[0][0], coord[0][1] );
    for (var i = 1; i < coord.length-2; i++) {
        context.bezierCurveTo(  coord[i][0], coord[i][1], coord[i+1][0], coord[i+1][1], coord[i+2][0], coord[i+2][1]);
    }
    context.lineWidth = 1;
    context.strokeStyle = 'green';
    context.stroke();
  },
  drawCatmullRom : function( context, coord ) {
    if(!context) return;
    context.beginPath();
    context.moveTo( coord[1][0], coord[1][1] );

    for (var i = 1; i < coord.length-2; i++) {
      for (var j = 0; j < this.smoothness; j++) {
        var point = this.getPointOnSpline( coord[i-1], coord[i], coord[i+1], coord[i+2], j/this.smoothness );
        context.lineTo(point[0], point[1] );
      }
      context.lineTo(coord[ i+1 ][ 0 ], coord[ i+1 ][ 1 ] );
    }
    context.strokeStyle = "blue";
    context.stroke();
  }
}
