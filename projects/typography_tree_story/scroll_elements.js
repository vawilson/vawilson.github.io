var h = window.innerHeight
var w = $(document).width();
var svg = d3.select("#svg");

//LEGEND
svg_offset = 460;
legend_w = 180;
legend_h = 230;

var legend_svg = d3.select("body").append("svg")
.attr('width',150)
.attr('height',340)
.attr("class", "legend");


ordinal = d3.scaleOrdinal()
.domain(["Germany", "England", "Italy", "France", "UK", "Switzerland", "US"])
.range([ "rgb(232, 111, 104)", "rgb(184,162,69)", "rgb(60,57,62)", "rgb(166,189,158)", "rgb(156,112,93)","rgb(201,109,28)","rgb(120, 90, 163)"]);


legend_svg.append("g")
.attr("class", "legendOrdinal")
.style('font-family','Helvetica')
.style('font-size','15')
.attr("transform", "translate(20,130)");

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
.attr("transform", "translate(20,40)");

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
highlight = "rgb(58, 29, 173)";

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
.attr('height',400)
.attr('id','renn_svg')
.attr("class", "renn");
//add rect
renn_svg.append("line")
.attr('stroke-dasharray','5,5')
.attr('stroke-width','2px')
.attr('stroke',highlight)
.attr('x1',50)
.attr('x2',1010)
.attr('y1',30)
.attr('y2',30);

renn_svg.append("text")
.text("1463")
.attr('dy',33)
.attr('dx',9)
.attr('stroke-width','1px')
.style('font-size','10')
.attr('stroke',highlight);

renn_text = renn_svg.append("text")
.attr('y',35)
.attr('x',1010)
.attr('stroke-width','1px')
.attr('stroke',highlight);

renn_text.append("tspan")
.text("During the Italian Rennesaince, Felice Feliciano completed a study on ");

renn_text.append("tspan")
.attr('x',1010)
.attr('y',50)
.text("the geometry of Roman inscriptions as a part of the Humanist");

renn_text.append("tspan")
.attr('x',1010)
.attr('y',65)
.text("movement's Roman revival.");

renn_text.append("tspan")
.attr('x',1010)
.attr('y',95)
.text("Shortly after, Nicolas Jensen is inspired by the same Ancient Roman");

renn_text.append("tspan")
.attr('x',1010)
.attr('y',110)
.text("inscriptions and creates Roman, the first serif typeface.");
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
.attr('stroke',highlight);

script_text.append('tspan')
.attr('x',500)
.attr('y',95)
.text("The Script family of typefaces was first created by Aldus Manutius to imitate the cursive style");
script_text.append('tspan')
.attr('x',500)
.attr('y',110)
.text("of handwriting used in book-making at the time. The name Italics is a homage to the home of");
script_text.append('tspan')
.attr('x',500)
.attr('y',125)
.text("the typeface where it was used for small portable books that Roman type would not fit easily.");

script_svg.append("line")
.attr('stroke-dasharray','5,5')
.attr('stroke-width','2px')
.attr('stroke',highlight)
.attr('x1',50)
.attr('x2',500)
.attr('y1',90)
.attr('y2',90);

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
.attr('height',400)
.attr('id','blackletter')
.attr("class", "blackletter")

black_letter_svg.append("line")
.attr('stroke-dasharray','5,5')
.attr('stroke-width','2px')
.attr('stroke',highlight)
.attr('x1',0)
.attr('x2',700)
.attr('y1',280)
.attr('y2',280);

bl_text = black_letter_svg.append("text")
.attr('x',1000)
.attr('y',205)
.attr('stroke-width','1px')
.attr('stroke',highlight);

bl_text.append('tspan')
.attr('x',700)
.attr('y',285)
.text("Black-Letter is a family of typefaces derivative of the");
bl_text.append('tspan')
.attr('x',700)
.attr('y',300)
.text("Carolignian miniscule introduced during Charlemagne's rule");
bl_text.append('tspan')
.attr('x',700)
.attr('y',315)
.text("of the Holy Roman Empire. It was comissioned so the literate class");
bl_text.append('tspan')
.attr('x',700)
.attr('y',330)
.text("between different regions could read the same Bible. Over time, standardization");
bl_text.append('tspan')
.attr('x',700)
.attr('y',345)
.text(" waned as literacy increased and the demand for books increased required a quicker method of writing. ");


$('.blackletter')
 .css('opacity', 0) // immediately hide element
 .waypoint(function(direction) {
   if (direction === 'down') {
     $(this.element).animate({ opacity: 1 })
     d3.select('#Black-Letter').transition().style("stroke", highlight).style("stroke-width",'2px')
     d3.select('#Black-Letter_path').transition().style("stroke", highlight).style("stroke-width",'2px')


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
      d3.select('#Oldstyle-Serif').transition().style("stroke", highlight).style("stroke-width",'2px')
      d3.select('#Oldstyle-Serif_path').transition().style("stroke", highlight).style("stroke-width",'2px')


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

       d3.select('#Script').transition().style("stroke", highlight).style("stroke-width",'2px')
       d3.select('#Script_path').transition().style("stroke", highlight).style("stroke-width",'2px')

       d3.select('#Italic').transition().style("stroke", highlight).style("stroke-width",'2px')
       d3.select('#Italic_path').transition().style("stroke", highlight).style("stroke-width",'2px')

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
