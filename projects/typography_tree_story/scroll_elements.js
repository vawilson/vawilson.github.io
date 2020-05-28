var h = window.innerHeight
var w = $(document).width();
var svg = d3.select("#svg");

//legend/toolbar
svg_offset = 460;
legend_w = 180;
legend_h = 230;

var legend_svg = d3.select("body").append("svg")
.attr('width',250)
.attr('height',1000)
.attr("class", "legend");

toolbar = legend_svg.append("rect")
.attr('width',250)
.attr('height',790)
.attr('id','toolbar')
.style('opacity',0)
.attr('fill','rgb(245, 225, 198)')
.attr('y',0)
.attr('x',0);

 text = legend_svg.append('g')
 .attr('id','text')
 .style('opacity',0);

title = text.append("foreignObject")
    .attr("width", 230)
    .attr("height", 30)
    .attr('y',30)
    .attr('x',0)
    .attr('id','title')
    .append("xhtml:body")
    .style('text-align','left')
    .style('background','rgb(245, 225, 198)')
    .style('font-size','18')
    .html("");
influence = text.append("foreignObject")
    .attr("width", 230)
    .attr("height", 30)
    .attr('y',53)
    .attr('x',0)
    .attr('id','influence')
    .append("xhtml:body")
    .style('background','rgb(245, 225, 198)')
    .style('font-size','10')
    .text('influenced by');


h_movement = text.append("foreignObject")
    .attr("width", 230)
    .attr("height", 50)
    .attr('y',80)
    .attr('x',0)
    .attr('id','h_movement')
    .append("xhtml:body")
    .style('background','rgb(245, 225, 198)')
    .style('text-align','left')
    .style('font-size','16')
    .html("");
textbox = text.append("foreignObject")
    .attr("width", 220)
    .attr("height", 350)
    .attr('y',130)
    .attr('x',15)
    .attr('id','textbox')
    .append("xhtml:body")
    .style('background','rgb(245, 225, 198)')
    .style('text-align','left')
    .style('font-size','14')
    .html("");
d3.select('#textbox').style('font-family','Helvetica').style('font-size','14');
d3.select('#title').style('font-family','Helvetica').style("font-size",'18').style('text-align','center')
d3.select('#h_movement').style('font-family','Helvetica').style("font-size",'15').style('text-align','center')
d3.select('#influence').style('font-family','Helvetica').style("font-size",'11').style('text-align','center')
// color/country key
ordinal = d3.scaleOrdinal()
.domain(["Germany", "England", "Italy", "France", "UK", "Switzerland", "US"])
.range([ "rgb(232, 111, 104)", "rgb(184,162,69)", "rgb(60,57,62)", "rgb(166,189,158)", "rgb(156,112,93)","rgb(201,109,28)","rgb(120, 90, 163)"]);

legend_svg.append("g")
.attr("class", "legendOrdinal")
.style('font-family','Helvetica')
.style('font-size','15')
.attr("transform", "translate(30,570)");
var legendOrdinal = d3.legendColor()
.shape("path", d3.symbol().type(d3.symbolCircle).size(200)())
.shapePadding(10)
.title("Country of Origin")
//use cellFilter to hide the "e" cell
.scale(ordinal);

legend_svg.select(".legendOrdinal")
.call(legendOrdinal);

var size = d3.scaleLinear().range([5,10]);

legend_svg.append("g")
.attr("class", "legendRadius")
.style('font-family','Helvetica')
.style('font-size','15')
.attr("transform", "translate(30,480)");

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


// Svgs used in waypoint activation
//Humanism
var renn_svg = d3.select("body").append("svg")
.attr('width',1400)
.attr('height',500)
.attr('id','renn_svg')
.attr("class", "renn");
//add rect
///SCRIPT
var script_svg = d3.select("body").append("svg")
.attr('width',1400)
.attr('height',400)
.attr('id','script_svg')
.attr("class", "script");
// open source movement
open_source_svg = d3.select("body").append("svg")
.attr('width',1400)
.attr('height',400)
.attr('id','os')
.attr("class", "os");
// Black Letter
black_letter_svg = d3.select("body").append("svg")
.attr('width',1400)
.attr('height',515)
.attr('id','blackletter')
.attr("class", "blackletter")
// Transitional
transitional_svg = d3.select("body").append("svg")
.attr('width',1400)
.attr('height',415)
.attr('id','transitional')
.attr("class", "transitional");

//Waypoints

$('.blackletter')
 .css('opacity', 0) // immediately hide element
 .waypoint(function(direction) {
   if (direction === 'down') {
     $(this.element).animate({ opacity: 1 })
     d3.select('#Black-Letter').transition().style("stroke", highlight).style("stroke-width",'3px')
     d3.select('#Black-Letter_path').transition().style("stroke", highlight).style("stroke-width",'3px')
     d3.select('#toolbar').transition().duration(1500).style("opacity",1)

     if (text_dict['Black-Letter']){
     d3.select('#textbox').transition().text(text_dict['Black-Letter'][0])
     d3.select('#title').transition().text('Black-Letter')
     d3.select('#h_movement').transition().text(text_dict['Black-Letter'][1])
     d3.select('#text').transition().duration(1500).style("opacity",1)
     }
   }
   else {
     $(this.element).animate({ opacity: 0 })
     d3.select('#Black-Letter').transition().style("stroke", "rgb(0,0,0)").style("stroke-width",'1px')
     d3.select('#Black-Letter_path').transition().style("stroke", "rgb(0,0,0)").style("stroke-width",'1px')
     d3.select('#text').transition().duration(0).style("opacity",0)
     d3.select('#toolbar').transition().duration(0).style("opacity",0)
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
      if(text_dict['Oldstyle-Serif']){
      d3.select('#textbox').transition().text(text_dict['Oldstyle-Serif'][0])
      d3.select('#title').transition().text('Oldstyle-Serif')
      d3.select('#h_movement').transition().text(text_dict['Oldstyle-Serif'][1])
      d3.select('#text').transition().duration(1500).style("opacity",1)
 }
    }
    else {
      $(this.element).animate({ opacity: 0 })
      d3.select('#Oldstyle-Serif').transition().style("stroke", "rgb(0,0,0)").style("stroke-width",'1px')
      d3.select('#Oldstyle-Serif_path').transition().style("stroke", "rgb(0,0,0)").style("stroke-width",'1px')
      if (text_dict['Black-Letter']){
      d3.select('#textbox').transition().text(text_dict['Black-Letter'][0])
      d3.select('#title').transition().text('Black-Letter')
      d3.select('#h_movement').transition().text(text_dict['Black-Letter'][1])
      d3.select('#text').transition().duration(1500).style("opacity",1)
      }

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
       if(text_dict['Script']){

         d3.select('#h_movement').transition(1500).text(text_dict['Script'][1])
         d3.select('#title').transition(1500).style("opacity",1).text('Script').style('font-family','Helvetica').style("font-size",'18')
       d3.select('#textbox').transition(1500).style("opacity",1).text(text_dict['Script'][0]).style('font-family','Helvetica')
}
     }
     else {
       $(this.element).animate({ opacity: 0 })
       d3.select('#Script').transition().style("stroke", "rgb(0,0,0)").style("stroke-width",'1px')
       d3.select('#Script_path').transition().style("stroke", "rgb(0,0,0)").style("stroke-width",'1px')

       d3.select('#Italic').transition().style("stroke", "rgb(0,0,0)").style("stroke-width",'1px')
       d3.select('#Italic_path').transition().style("stroke", "rgb(0,0,0)").style("stroke-width",'1px')
       if(text_dict['Oldstyle-Serif']){
       d3.select('#textbox').transition().text(text_dict['Oldstyle-Serif'][0])
       d3.select('#title').transition().text('Oldstyle-Serif')
       d3.select('#h_movement').transition().text(text_dict['Oldstyle-Serif'][1])
       d3.select('#text').transition().duration(1750).style("opacity",1)
  }

     }
   }, {
     offset: 'bottom-in-view'
   })



   $('.transitional')
    .css('opacity', 0) // immediately hide element
    .waypoint(function(direction) {
      if (direction === 'down') {
        $(this.element).animate({ opacity: 1 })
        d3.select('#Transitional-Serif').transition().style("stroke", highlight).style("stroke-width",'3px')
        d3.select('#Transitional-Serif_path').transition().style("stroke", highlight).style("stroke-width",'3px')
        if(text_dict['Transitional-Serif']){
          d3.select('#h_movement').transition().text(text_dict['Transitional-Serif'][1])
          d3.select('#title').transition().text('Transitional-Serif')
          d3.select('#textbox').transition().text(text_dict['Transitional-Serif'][0])
          d3.select('#text').transition().duration(1750).style("opacity",1)
   }
      }
      else {
        $(this.element).animate({ opacity: 0 })
        d3.select('#Transitional-Serif').transition().style("stroke", "rgb(0,0,0)").style("stroke-width",'1px')
        d3.select('#Transitional-Serif_path').transition().style("stroke", "rgb(0,0,0)").style("stroke-width",'1px')
        d3.select('#text').transition().duration(1750).style("opacity",0)
      }
    }, {
      offset: 'bottom-in-view'
    })


   $('.os')
    .css('opacity', 0) // immediately hide element
    .waypoint(function(direction) {
      if (direction === 'down') {
      

      }
      else {


      }
    }, {
      offset: 'bottom-in-view'
    })
