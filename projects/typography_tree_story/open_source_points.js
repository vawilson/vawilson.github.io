var svg = d3.select("#svg");
var points_svg = d3.select("body").append("svg")
.style('opacity',1)
.attr("id", "points");
var colors = ["rgb(201, 125, 190)","rgb(52, 117, 77)" ,"rgb(226, 111, 104)", "rgb(184,132,69)", "rgb(60,57,62)", "rgb(136,189,158)", "rgb(156,112,93)","rgb(201,109,28)","rgb(120, 90, 133)"];
var size = [8,13,26,52,52,52,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,52,52,52,26,13]
sum = 0;
for(i in size){
sum = sum + size[i];
  for(j in [...Array(size[i]).keys()]){
    place = parseInt(j);
    svg.append("circle")
    .style('fill',function(f){
    color = colors[Math.floor(Math.random() * colors.length)];
    return color;
    })
    .attr('r',5)
    .attr("class","oss" + toString(i))
    .style('stroke','rgb(0,0,0,0)')
    .style('opacity',function(f){
      if(i>7){

       return.03*i;
      }
      else{
        return .2;
      }
    })
    .attr("cx",(1150*(place/size[i]))+103)
    .attr('cy',8400+(i*15));
  }
}
