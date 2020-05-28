var h = window.innerHeight
var w = $(document).width();
var svg = d3.select("#svg");

//LEGEND
svg_offset = 460;
legend_w = 180;
legend_h = 230;

var legend_svg = d3.select("body").append("svg")
.attr('width',250)
.attr('height',1000)
.attr("class", "legend");

toolbar = legend_svg.append("rect")
.attr('width',250)
.attr('height',1000)
.attr('id','toolbar')
.attr('fill','rgb(245, 225, 198)')
.attr('y',200)
.attr('x',0);

textbox = legend_svg.append("rect")
.attr('width',230)
.attr('height',440)
.attr('id','textbox')
.attr('fill','rgb(245, 225, 198)')
.attr('y',215)
.attr('x',10);

ordinal = d3.scaleOrdinal()
.domain(["Germany", "England", "Italy", "France", "UK", "Switzerland", "US"])
.range([ "rgb(232, 111, 104)", "rgb(184,162,69)", "rgb(60,57,62)", "rgb(166,189,158)", "rgb(156,112,93)","rgb(201,109,28)","rgb(120, 90, 163)"]);


legend_svg.append("g")
.attr("class", "legendOrdinal")
.style('font-family','Helvetica')
.style('font-size','15')
.attr("transform", "translate(30,770)");

var legendOrdinal = d3.legendColor()
//d3 symbol creates a path-string, for example
//"M0,-8.059274488676564L9.306048591020996,
//8.059274488676564 -9.306048591020996,8.059274488676564Z"
.shape("path", d3.symbol().type(d3.symbolCircle).size(200)())
.shapePadding(10)
.title("Country of Origin")
//use cellFilter to hide the "e" cell
.cellFilter(function(d){ return d.label !== "e" })
.scale(ordinal);

legend_svg.select(".legendOrdinal")
.call(legendOrdinal);

var size = d3.scaleLinear().range([5,10]);

legend_svg.append("g")
.attr("class", "legendRadius")
.style('font-family','Helvetica')
.style('font-size','15')
.attr("transform", "translate(30,680)");

var legendSize = d3.legendSize()
.scale(size)
.cells(2)
.shape('circle')
.title('Classification')
.labels(["Typeface","Movement"])
.shapePadding(10)
.orient('vertical');
legend_svg.select(".legendRadius")
.call(legendSize);
// LEGEND end
//LEGEND WAYPOINT (STICKY)


var sticky = new Waypoint.Sticky({
  element: $('.legend')[0],

})
highlight = "rgb(145, 17, 71)";

function wrap(text, width,x) {
  text.each(function() {
    var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", ).attr("y", y).attr("dy", dy + "em");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", ).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      }
    }
  });
}

// DESCRIPTION WAYPOINTS
//Humanism
var renn_svg = d3.select("body").append("svg")
.attr('width',1400)
.attr('height',600)
.attr('id','renn_svg')
.attr("class", "renn");
//add rect

renn_svg.append("text")
.text("1463")
.attr('dy',33)
.attr('dx',9)
.attr('stroke-width','1px')
.style('font-size','10')
.attr('stroke','black');

///SCRIPT
var script_svg = d3.select("body").append("svg")
.attr('width',1400)
.attr('height',400)
.attr('id','script_svg')
.attr("class", "script");

script_text = script_svg.append("text")
.attr('x',800)
.attr('y',15)
.attr('stroke-width','1px')
.attr('stroke','black');

script_text.append('tspan')
.attr('x',500)
.attr('y',95)
.text("");
script_text.append('tspan')
.attr('x',500)
.attr('y',110)
.text("");

script_text.append('tspan')
.attr('x',500)
.attr('y',125)
.text("");



// open source movement
open_source_svg = d3.select("body").append("svg")
.attr('width',1400)
.attr('height',400)
.attr('id','os')
.attr("class", "os")
.append('rect')
.attr('height',100)
.attr('width',400)
.attr('x',447)
.attr('fill','white')
.attr('y',150);

// Black Letter

black_letter_svg = d3.select("body").append("svg")
.attr('width',1400)
.attr('height',750)
.attr('id','blackletter')
.attr("class", "blackletter")


transitional_svg = d3.select("body").append("svg")
.attr('width',1400)
.attr('height',415)
.attr('id','transitional')
.attr("class", "transitional");

$('.transitional')
 .css('opacity', 0) // immediately hide element
 .waypoint(function(direction) {
   if (direction === 'down') {
     $(this.element).animate({ opacity: 1 })
     d3.select('#Transitional-Serif').transition().style("stroke", highlight).style("stroke-width",'3px')
     d3.select('#Transitional-Serif_path').transition().style("stroke", highlight).style("stroke-width",'3px')


   }
   else {
     $(this.element).animate({ opacity: 0 })
     d3.select('#Transitional-Serif').transition().style("stroke", "rgb(0,0,0)").style("stroke-width",'1px')
     d3.select('#Transitional-Serif_path').transition().style("stroke", "rgb(0,0,0)").style("stroke-width",'1px')

   }
 }, {
   offset: 'bottom-in-view'
 })

$('.blackletter')
 .css('opacity', 0) // immediately hide element
 .waypoint(function(direction) {
   if (direction === 'down') {
     $(this.element).animate({ opacity: 1 })
     d3.select('#Black-Letter').transition().style("stroke", highlight).style("stroke-width",'3px')
     d3.select('#Black-Letter_path').transition().style("stroke", highlight).style("stroke-width",'3px')
     d3

   }
   else {
     $(this.element).animate({ opacity: 0 })
     d3.select('#Black-Letter').transition().style("stroke", "rgb(0,0,0)").style("stroke-width",'1px')
     d3.select('#Black-Letter_path').transition().style("stroke", "rgb(0,0,0)").style("stroke-width",'1px')

   }
 }, {
   offset: 'bottom-in-view'
 })

 $('.renn')
  .css('opacity', 0) // immediately hide element
  .waypoint(function(direction) {
    if (direction === 'down') {
      $(this.element).animate({ opacity: 1 })
      d3.select('#Oldstyle-Serif').transition().style("stroke", highlight).style("stroke-width",'3px')
      d3.select('#Oldstyle-Serif_path').transition().style("stroke", highlight).style("stroke-width",'3px')


    }
    else {
      $(this.element).animate({ opacity: 0 })
      d3.select('#Oldstyle-Serif').transition().style("stroke", "rgb(0,0,0)").style("stroke-width",'1px')
      d3.select('#Oldstyle-Serif_path').transition().style("stroke", "rgb(0,0,0)").style("stroke-width",'1px')

    }
  }, {
    offset: 'bottom-in-view'
  })

  $('.script')
   .css('opacity', 0) // immediately hide element
   .waypoint(function(direction) {
     if (direction === 'down') {
       $(this.element).animate({ opacity: 1 })

       d3.select('#Script').transition().style("stroke", highlight).style("stroke-width",'3px')
       d3.select('#Script_path').transition().style("stroke", highlight).style("stroke-width",'3px')

       d3.select('#Italic').transition().style("stroke", highlight).style("stroke-width",'3px')
       d3.select('#Italic_path').transition().style("stroke", highlight).style("stroke-width",'3px')

     }
     else {
       $(this.element).animate({ opacity: 0 })
       d3.select('#Script').transition().style("stroke", "rgb(0,0,0)").style("stroke-width",'1px')
       d3.select('#Script_path').transition().style("stroke", "rgb(0,0,0)").style("stroke-width",'1px')

       d3.select('#Italic').transition().style("stroke", "rgb(0,0,0)").style("stroke-width",'1px')
       d3.select('#Italic_path').transition().style("stroke", "rgb(0,0,0)").style("stroke-width",'1px')

     }
   }, {
     offset: 'bottom-in-view'
   })

   $('.os')
    .css('opacity', 0) // immediately hide element
    .waypoint(function(direction) {
      if (direction === 'down') {
      $(this.element).animate({ opacity: 1 })

      }
      else {
        $(this.element).animate({ opacity: 0 })

      }
    }, {
      offset: 'bottom-in-view'
    })
