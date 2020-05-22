start_y = 7750;
var w = $(document).width();
var points_svg = d3.select("body").append("svg")
.attr('width',1280)
.attr('height',800)
.attr("transform", "translate(15,7900)")
.attr("class", "points");
var colors = ["rgb(201, 125, 190)","rgb(34, 117, 77)" ,"rgb(232, 111, 104)", "rgb(184,162,69)", "rgb(60,57,62)", "rgb(166,189,158)", "rgb(156,112,93)","rgb(201,109,28)","rgb(120, 90, 163)"];



var size = [8,16,32,64,64,64,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,64,64,64,32,16,6,6]

sum = 0;
for(i in size){
sum = sum + size[i];
  for(j in [...Array(size[i]).keys()]){
    place = parseInt(j);
    points_svg.append("circle")
    .style('fill',function(f){
    color = colors[Math.floor(Math.random() * colors.length)];
    return color;
    })
    .attr('r',5)
    .attr("class","oss")
    .style('stroke','rgb(0,0,0,0)')
    .style('opacity',function(f){
      if(i>7){

       return.03*i;
      }
      else{
        return .2;
      }
    })
    .attr("cx",(1250*(place/size[i]))+30)
    .attr('cy',7+(i*15));
  }
}
console.log(sum);
