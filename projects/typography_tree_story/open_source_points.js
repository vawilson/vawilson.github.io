
var screen_width = $(document).width();
var start =  80*screen_width/1250;
var finish = screen_width-screen_width/100*17;
var ran = Math.floor(finish-start);
var svg = d3.select("#svg");
var points_svg = d3.select("body").append("svg")
.style('opacity',1)
.attr("id", "points");
var colors = ["rgb(201, 125, 190)","rgb(52, 117, 77)" ,"rgb(226, 111, 104)", "rgb(184,132,69)", "rgb(60,57,62)", "rgb(136,189,158)", "rgb(156,112,93)","rgb(201,109,28)","rgb(120, 90, 133)"];
for(i in [...Array(Math.floor(ran)).keys()]){
  i  = parseInt(i);
  for(j in [...Array(Math.floor(ran)).keys()]){
    j = parseInt(j);
    cx = start +j*15;
    cy = 8400+i*20;
    if(i<25 && cx>start && cx<=finish+screen_width/50){
    svg.append("circle")
    .style('fill',function(f){
    color = colors[Math.floor(Math.random() * colors.length)];
    return color;
    })
    .attr('r',5)
    .attr("class","oss" + toString(i))
    .style('stroke','rgb(0,0,0,0)')
    .style('opacity',function(f){
      if(i>6){
       return i*.03;
      }
      else{
        return .2;
      }
    })
    .attr("cx",cx)
    .attr('cy',cy);
  }
}
}
