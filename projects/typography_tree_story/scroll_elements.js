// get the window height/width
var h = window.innerHeight
var w = $(document).width();
//select the main svg
var svg = d3.select("#svg");

//legend/toolbar dimensions
svg_offset = 460;
legend_w = 180;
legend_h = 230;
//create the svg for the legend
var legend_svg = d3.select("body").append("svg")
.attr('width','17vw')
.attr('height',h)
.attr("class", "legend");
// create the svg for the text
toolbar = legend_svg.append("rect")
.attr('width','100%')
.attr('height','100%')
.attr('id','toolbar')
.style('opacity',0)
.attr('fill','rgb(245, 225, 198)')
.attr('y',0)
.attr('x',0);
// create a text grouping
text = legend_svg.append('g')
.attr('id','text')
.attr('width','100%')
.style('opacity',0);
// title
title = text.append("foreignObject")
.attr("width", '90%')
.attr("height", 30)
.attr('y',30)
.attr('x',0)
.attr('id','title')
.append("xhtml:body")
.style('text-align','left')
.style('background','rgb(245, 225, 198)')
.style('font-size','1vh')
.html("");
// "influnced by" on the toolbar
influence = text.append("foreignObject")
.attr("width", '90%')
.attr("height", 30)
.attr('y',53)
.attr('x',0)
.attr('id','influence')
.append("xhtml:body")
.style('background','rgb(245, 225, 198)')
.style('font-size','1vh')
.text('influenced by');
// the movement that influenced the family
h_movement = text.append("foreignObject")
.attr("width", '100%')
.attr("height", 50)
.attr('y',80)
.attr('x',0)
.attr('id','h_movement')
.append("xhtml:body")
.style('background','rgb(245, 225, 198)')
.style('text-align','left')
.style('font-size','1vh')
.html("");
// the description of the family/movment
textbox = text.append("foreignObject")
.attr("width", '85%')
.attr("height", 350)
.attr('y',120)
.attr('x',15)
.attr('id','textbox')
.append("xhtml:body")
.style('background','rgb(245, 225, 198)')
.style('text-align','left')
.style('font-size','.8vh')
.html("");
d3.select('#textbox').style('font-family','Helvetica').style('font-size','2vh');
d3.select('#title').style('font-family','Helvetica').style("font-size",'3vh').style('text-align','center')
d3.select('#h_movement').style('font-family','Helvetica').style("font-size",'2vh').style('text-align','center')
d3.select('#influence').style('font-family','Helvetica').style("font-size",'3vh').style('text-align','center')
// color/country key
ordinal = d3.scaleOrdinal()
.domain(["Germany", "England", "Italy", "France", "UK", "Switzerland", "US"])
.range([ "rgb(232, 111, 104)", "rgb(184,162,69)", "rgb(60,57,62)", "rgb(166,189,158)", "rgb(156,112,93)","rgb(201,109,28)","rgb(120, 90, 163)"]);
//append the country/color legend
legend_svg.append("g")
.attr("class", "legendOrdinal")
.style('font-family','Helvetica')
.style('font-size','1.5vh')
.attr("transform", "translate(30," + .73*h+")");
var legendOrdinal = d3.legendColor()
.shape("path", d3.symbol().type(d3.symbolCircle).size(200)())
.shapePadding(10)
.title("Country of Origin")
.scale(ordinal);
legend_svg.select(".legendOrdinal")
.call(legendOrdinal);
// create the legend for family/typeface (size legend)
var size = d3.scaleLinear().range([5,10]);
legend_svg.append("g")
.attr("class", "legendRadius")
.style('font-family','Helvetica')
.style('font-size','1.5vh')
.attr("transform", "translate(30," + .6*h+")");
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
// Legend design end
//Legend waypoint (sticky)
var sticky = new Waypoint.Sticky({
  element: $('.legend')[0],
})
//color used to highlight the nodes/paths when they are selected
highlight = "rgb(212, 0, 67)";
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
.attr('height',800)
.attr('id','blackletter')
.attr("class", "blackletter")
// Transitional
transitional_svg = d3.select("body").append("svg")
.attr('width',1400)
.attr('height',750)
.attr('id','transitional')
.attr("class", "transitional");

crag_svg = d3.select("body").append("svg")
.attr('width',1400)
.attr('height',815)
.attr('id','crag')
.attr("class", "crag");

sans_svg = d3.select("body").append("svg")
.attr('width',1400)
.attr('height',915)
.attr('id','sans')
.attr("class", "sans");

didone_svg = d3.select("body").append("svg")
.attr('width',1400)
.attr('height',300)
.attr('id','didone')
.attr("class", "didone");


slab_svg = d3.select("body").append("svg")
.attr('width',1400)
.attr('height',300)
.attr('id','slab')
.attr("class", "slab");

grotesque_svg = d3.select("body").append("svg")
.attr('width',1400)
.attr('height',300)
.attr('id','gro')
.attr("class", "gro");

humanist_svg = d3.select("body").append("svg")
.attr('width',1400)
.attr('height',300)
.attr('id','hum')
.attr("class", "hum");

geometic_svg = d3.select("body").append("svg")
.attr('width',1400)
.attr('height',300)
.attr('id','geo')
.attr("class", "geo");

neo_grotesque_svg = d3.select("body").append("svg")
.attr('width',1400)
.attr('height',300)
.attr('id','neogro')
.attr("class", "neogro");

fraktur_svg = d3.select("body").append("svg")
.attr('width',1400)
.attr('height',405)
.attr('id','fraktur')
.attr("class", "fraktur");
//Waypoints for each family
$('.blackletter')
.css('opacity', 0) // immediately hide element
.waypoint(function(direction) {
  if (direction === 'down') {
    $(this.element).animate({ opacity: 1 })
    d3.select('#Black-Letter').transition().style("stroke", highlight).style("stroke-width",'3px').attr("r", 15)
    d3.select('#Black-Letter_path').transition().style("stroke", highlight).style("stroke-width",'3px')
    d3.select('#toolbar').transition().style("opacity",1)

    if (text_dict['Black-Letter']){
      d3.select('#textbox').transition().text(text_dict['Black-Letter'][0])
      d3.select('#title').transition().text('Black-Letter').style('font-family',text_dict['Black-Letter'][2]).style('font-size','1.5vw')
      d3.select('#h_movement').transition().text(text_dict['Black-Letter'][1])
      d3.select('#text').transition().style("opacity",1)
    }
  }
  else {
    $(this.element).animate({ opacity: 0 })
    d3.select('#Black-Letter').transition().style("stroke", "rgb(0,0,0)").style("stroke-width",'1px').attr("r", 10)
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
    d3.select('#Black-Letter').transition().style("stroke", 'rgb(0,0,0)').style("stroke-width",'1px').attr("r", 10)
    d3.select('#Black-Letter_path').transition().style("stroke",'rgb(0,0,0)').style("stroke-width",'1px')
    d3.select('#Oldstyle-Serif').transition().style("stroke", highlight).style("stroke-width",'3px').attr("r", 15)
    d3.select('#Oldstyle-Serif_path').transition().style("stroke", highlight).style("stroke-width",'3px')
    if(text_dict['Oldstyle-Serif']){
      d3.select('#textbox').transition().text(text_dict['Oldstyle-Serif'][0])
      d3.select('#title').transition().text('Oldstyle-Serif').style('font-family',text_dict['Oldstyle-Serif'][2]).style('font-size','1.5vw')
      d3.select('#h_movement').transition().text(text_dict['Oldstyle-Serif'][1])
      d3.select('#text').transition().style("opacity",1)
    }
  }
  else {
    $(this.element).animate({ opacity: 0 })
    d3.select('#Black-Letter').transition().style("stroke", highlight).style("stroke-width",'3px').attr("r", 15)
    d3.select('#Black-Letter_path').transition().style("stroke",highlight).style("stroke-width",'3px')
    d3.select('#Oldstyle-Serif').transition().style("stroke", "rgb(0,0,0)").style("stroke-width",'1px').attr("r", 10)
    d3.select('#Oldstyle-Serif_path').transition().style("stroke", "rgb(0,0,0)").style("stroke-width",'1px')
    if (text_dict['Black-Letter']){
      d3.select('#textbox').transition().text(text_dict['Black-Letter'][0]).style("opacity",1)
      d3.select('#title').transition().text('Black-Letter').style('font-family',text_dict['Black-Letter'][2]).style('font-size','1.5vw').style("opacity",1)
      d3.select('#h_movement').transition().text(text_dict['Black-Letter'][1]).style("opacity",1)
      d3.select('#text').transition().style("opacity",1)
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
    d3.select('#Oldstyle-Serif').transition().style("stroke", 'rgb(0,0,0)').style("stroke-width",'1px').attr("r", 10)
    d3.select('#Oldstyle-Serif_path').transition().style("stroke",'rgb(0,0,0)').style("stroke-width",'1px')
    d3.select('#Script').transition().style("stroke", highlight).style("stroke-width",'3px').attr("r", 15)
    d3.select('#Script_path').transition().style("stroke", highlight).style("stroke-width",'3px')

    if(text_dict['Script']){

      d3.select('#h_movement').transition().text(text_dict['Script'][1]).style("opacity",1)
      d3.select('#title').transition().style("opacity",1).text('Script').style('font-family',text_dict['Script'][2]).style('font-size','1.5vw')
      d3.select('#textbox').transition().style("opacity",1).text(text_dict['Script'][0]).style('font-family','Helvetica')
    }
  }
  else {
    $(this.element).animate({ opacity: 0 })

    d3.select('#Script').transition().style("stroke", 'rgb(0,0,0)').style("stroke-width",'1px').attr("r", 10)
    d3.select('#Script_path').transition().style("stroke",'rgb(0,0,0)').style("stroke-width",'1px')
    d3.select('#Oldstyle-Serif').transition().style("stroke", highlight).style("stroke-width",'3px').attr("r", 15)
    d3.select('#Oldstyle-Serif_path').transition().style("stroke", highlight).style("stroke-width",'3px')

    if(text_dict['Oldstyle-Serif']){
      d3.select('#textbox').transition().text(text_dict['Oldstyle-Serif'][0]).style("opacity",1)
      d3.select('#title').transition().text('Oldstyle-Serif').style('font-family',text_dict['Oldstyle-Serif'][2]).style('font-size','1.5vw').style("opacity",1)
      d3.select('#h_movement').transition().text(text_dict['Oldstyle-Serif'][1]).style("opacity",1)
      d3.select('#text').transition().style("opacity",1)
    }

  }
}, {
  offset: 'bottom-in-view'
})
$('.crag')
.css('opacity', 0) // immediately hide element
.waypoint(function(direction) {
  if (direction === 'down') {
    $(this.element).animate({ opacity: 1 })
    d3.select('#Script').transition().style("stroke", 'rgb(0,0,0)').style("stroke-width",'1px').attr("r", 10)
    d3.select('#Script_path').transition().style("stroke",'rgb(0,0,0)').style("stroke-width",'1px')
    d3.select('#h_movement').transition().text("")
    d3.select('#title').transition().style("opacity",0).text("").style('font-family',"Helvetica").style('font-size','1.5vw')
    d3.select('#textbox').transition().style("opacity",0).text("")
    d3.select('#influence').transition().style("opacity",0)
  }
  else {
    $(this.element).animate({ opacity: 0 })
    d3.select('#Fraktur').transition().style("stroke", highlight).style("stroke-width",'3px').attr("r", 15)
    d3.select('#Fraktur_path').transition().style("stroke",highlight).style("stroke-width",'3px')
    d3.select('#h_movement').transition().text(text_dict['Fraktur'][1])
    d3.select('#title').transition().style("opacity",1).text('Fraktur').style('font-family',text_dict['Fraktur'][2]).style('font-size','1.5vw')
    d3.select('#textbox').transition().style("opacity",1).text(text_dict['Fraktur'][0]).style('font-family','Helvetica')
    d3.select('#text').transition().style("opacity",1)
    d3.select('#influence').transition().style("opacity",1)

  }
}, {
  offset: 'bottom-in-view'
})


$('.transitional')
.css('opacity', 0) // immediately hide element
.waypoint(function(direction) {
  if (direction === 'down') {
    $(this.element).animate({ opacity: 1 })
    d3.select('#Transitional-Serif').transition().style("stroke", highlight).style("stroke-width",'3px').attr('r',15)
    d3.select('#Transitional-Serif_path').transition().style("stroke", highlight).style("stroke-width",'3px')
    if(text_dict['Transitional-Serif']){
      d3.select('#h_movement').transition().text(text_dict['Transitional-Serif'][1]).style("opacity",1)
      d3.select('#title').transition().text('Transitional-Serif').style('font-family','Baskerville').style("opacity",1).style('font-size','1.5vw')
      d3.select('#textbox').transition().text(text_dict['Transitional-Serif'][0]).style("opacity",1)
      d3.select('#text').transition().style("opacity",1)
      d3.select('#influence').transition().style("opacity",1)
    }
  }
  else {
    $(this.element).animate({ opacity: 0 })
    d3.select('#Transitional-Serif').transition().style("stroke", "rgb(0,0,0)").style("stroke-width",'1px').attr('r',10)
    d3.select('#Transitional-Serif_path').transition().style("stroke", "rgb(0,0,0)").style("stroke-width",'1px')
    d3.select('#h_movement').transition().text("").style("opacity",0)
    d3.select('#title').transition().style("opacity",0).text("").style('font-family','Helvetica').style('font-size','1.5vw')
    d3.select('#textbox').transition().style("opacity",0).text("")
    d3.select('#influence').transition().style("opacity",0)
  }
}, {
  offset: 'bottom-in-view'
})

$('.sans')
.css('opacity', 0) // immediately hide element
.waypoint(function(direction) {
  if (direction === 'down') {
    $(this.element).animate({ opacity: 1 })
    d3.select('#Transitional-Serif').transition().style("stroke", 'rgb(0,0,0)').style("stroke-width",'1px').attr("r", 10)
    d3.select('#Transitional-Serif_path').transition().style("stroke",'rgb(0,0,0)').style("stroke-width",'1px')
    d3.select('#Sans-Serif').transition().style("stroke", highlight).style("stroke-width",'3px').attr('r',15)
    d3.select('#Sans-Serif_path').transition().style("stroke", highlight).style("stroke-width",'3px')
    if (text_dict['Sans-Serif']){
      d3.select('#textbox').transition().text(text_dict['Sans-Serif'][0])
      d3.select('#title').transition().text('Sans-Serif').style('font-family','Franklin').style('font-size','1.5vw')
      d3.select('#h_movement').transition().text(text_dict['Sans-Serif'][1])
      d3.select('#text').transition().style("opacity",1)
    }
  }
  else {
    $(this.element).animate({ opacity: 0 })
    d3.select('#Sans-Serif').transition().style("stroke", 'rgb(0,0,0)').style("stroke-width",'1px').attr("r", 10)
    d3.select('#Sans-Serif_path').transition().style("stroke",'rgb(0,0,0)').style("stroke-width",'1px')
    d3.select('#Transitional-Serif').transition().style("stroke", highlight).style("stroke-width",'3px').attr('r',15)
    d3.select('#Transitional-Serif_path').transition().style("stroke", highlight).style("stroke-width",'3px')
    if(text_dict['Transitional-Serif']){
      d3.select('#h_movement').transition().text(text_dict['Transitional-Serif'][1])
      d3.select('#title').transition().text('Transitional-Serif').style('font-family','Baskerville').style('font-size','1.5vw')
      d3.select('#textbox').transition().text(text_dict['Transitional-Serif'][0])
      d3.select('#text').transition().style("opacity",1)
    }
  }
}, {
  offset: 'bottom-in-view'
})

$('.didone')
.css('opacity', 0) // immediately hide element
.waypoint(function(direction) {
  if (direction === 'down') {
    $(this.element).animate({ opacity: 1 })
    d3.select('#Sans-Serif').transition().style("stroke", 'rgb(0,0,0)').style("stroke-width",'1px').attr("r", 10)
    d3.select('#Sans-Serif_path').transition().style("stroke",'rgb(0,0,0)').style("stroke-width",'1px')
    d3.select('#Didone-Serif').transition().style("stroke", highlight).style("stroke-width",'3px').attr('r',15)
    d3.select('#Didone-Serif_path').transition().style("stroke", highlight).style("stroke-width",'3px')
    if (text_dict['Didone-Serif']){
      d3.select('#textbox').transition().text(text_dict['Didone-Serif'][0])
      d3.select('#title').transition().text('Didone-Serif').style('font-family',text_dict['Didone-Serif'][2]).style('font-size','1.5vw')
      d3.select('#h_movement').transition().text(text_dict['Didone-Serif'][1])
      d3.select('#text').transition().style("opacity",1)
    }
  }
  else {
    $(this.element).animate({ opacity: 0 })
    d3.select('#Didone-Serif').transition().style("stroke", 'rgb(0,0,0)').style("stroke-width",'1px').attr("r", 10)
    d3.select('#Didone-Serif_path').transition().style("stroke",'rgb(0,0,0)').style("stroke-width",'1px')
    d3.select('#Sans-Serif').transition().style("stroke", highlight).style("stroke-width",'3px').attr('r',15)
    d3.select('#Sans-Serif_path').transition().style("stroke", highlight).style("stroke-width",'3px')
    if (text_dict['Sans-Serif']){
      d3.select('#textbox').transition().text(text_dict['Sans-Serif'][0])
      d3.select('#title').transition().text('Sans-Serif').style('font-family',text_dict['Sans-Serif'][2]).style('font-size','1.5vw')
      d3.select('#h_movement').transition().text(text_dict['Sans-Serif'][1])
      d3.select('#text').transition().style("opacity",1)
    }
  }
}, {
  offset: 'bottom-in-view'
})


$('.slab')
.css('opacity', 0) // immediately hide element
.waypoint(function(direction) {
  if (direction === 'down') {
    $(this.element).animate({ opacity: 1 })
    d3.select('#Slab-Serif').transition().style("stroke", highlight).style("stroke-width",'3px').attr('r',15)
    d3.select('#Slab-Serif_path').transition().style("stroke", highlight).style("stroke-width",'3px')
    d3.select('#Didone-Serif').transition().style("stroke", 'rgb(0,0,0)').style("stroke-width",'1px').attr("r", 10)
    d3.select('#Didone-Serif_path').transition().style("stroke",'rgb(0,0,0)').style("stroke-width",'1px')
    if (text_dict['Slab-Serif']){
      d3.select('#textbox').transition().text(text_dict['Slab-Serif'][0])
      d3.select('#title').transition().text('Slab-Serif').style('font-family',"Antique").style('font-size','1.5vw')
      d3.select('#h_movement').transition().text(text_dict['Slab-Serif'][1])
      d3.select('#text').transition().style("opacity",1)
    }
  }
  else {
    $(this.element).animate({ opacity: 0 })
    d3.select('#Didone-Serif').transition().style("stroke", highlight).style("stroke-width",'3px').attr('r',15)
    d3.select('#Didone-Serif_path').transition().style("stroke", highlight).style("stroke-width",'3px')
    d3.select('#Slab-Serif').transition().style("stroke", 'rgb(0,0,0)').style("stroke-width",'1px').attr("r", 10)
    d3.select('#Slab-Serif_path').transition().style("stroke",'rgb(0,0,0)').style("stroke-width",'1px')


    if (text_dict['Didone-Serif']){
      d3.select('#textbox').transition().text(text_dict['Didone-Serif'][0])
      d3.select('#title').transition().text('Didone-Serif').style('font-family',text_dict['Didone-Serif'][2]).style('font-size','1.5vw')
      d3.select('#h_movement').transition().text(text_dict['Didone-Serif'][1])
      d3.select('#text').transition().style("opacity",1)
    }
  }
}, {
  offset: 'bottom-in-view'
})

$('.gro')
.css('opacity', 0) // immediately hide element
.waypoint(function(direction) {
  if (direction === 'down') {
    $(this.element).animate({ opacity: 1 })
    d3.select('#Grotesque').transition().style("stroke", highlight).style("stroke-width",'3px').attr('r',15)
    d3.select('#Grotesque_path').transition().style("stroke", highlight).style("stroke-width",'3px')
    d3.select('#Slab-Serif').transition().style("stroke", 'rgb(0,0,0)').style("stroke-width",'1px').attr("r", 10)
    d3.select('#Slab-Serif_path').transition().style("stroke",'rgb(0,0,0)').style("stroke-width",'1px')

    if (text_dict['Grotesque']){
      d3.select('#textbox').transition().text(text_dict['Grotesque'][0])
      d3.select('#title').transition().text('Grotesque').style('font-family','Grotesk').style('font-size','1.5vw')
      d3.select('#h_movement').transition().text(text_dict['Grotesque'][1])
      d3.select('#text').transition().style("opacity",1)
    }
  }
  else {
    $(this.element).animate({ opacity: 0 })
    d3.select('#Slab-Serif').transition().style("stroke", highlight).style("stroke-width",'3px').attr('r',15)
    d3.select('#Slab-Serif_path').transition().style("stroke", highlight).style("stroke-width",'3px')
    d3.select('#Grotesque').transition().style("stroke", 'rgb(0,0,0)').style("stroke-width",'1px').attr("r", 10)
    d3.select('#Grotesque_path').transition().style("stroke",'rgb(0,0,0)').style("stroke-width",'1px')
    if (text_dict['Slab-Serif']){
      d3.select('#textbox').transition().text(text_dict['Slab-Serif'][0])
      d3.select('#title').transition().text('Slab-Serif').style('font-family',"Antique").style('font-size','1.5vw')
      d3.select('#h_movement').transition().text(text_dict['Slab-Serif'][1])
      d3.select('#text').transition().style("opacity",1)
    }
  }
}, {
  offset: 'bottom-in-view'
})
$('.hum ')
.css('opacity', 0) // immediately hide element
.waypoint(function(direction) {
  if (direction === 'down') {
    $(this.element).animate({ opacity: 1 })
    d3.select('#Grotesque').transition().style("stroke", 'rgb(0,0,0)').style("stroke-width",'1px').attr("r", 10)
    d3.select('#Grotesque_path').transition().style("stroke",'rgb(0,0,0)').style("stroke-width",'1px')
    d3.select('#Humanist').transition().style("stroke", highlight).style("stroke-width",'3px').attr('r',15)
    d3.select('#Humanist_path').transition().style("stroke", highlight).style("stroke-width",'3px')
    if (text_dict['Humanist']){
      d3.select('#textbox').transition().text(text_dict['Humanist'][0])
      d3.select('#title').transition().text('Humanist').style('font-family',"Verdana").style('font-size','1.5vw')
      d3.select('#h_movement').transition().text(text_dict['Humanist'][1])
      d3.select('#text').transition().style("opacity",1)
    }
  }
  else {
    $(this.element).animate({ opacity: 0 })
    d3.select('#Humanist').transition().style("stroke", 'rgb(0,0,0)').style("stroke-width",'1px').attr("r", 10)
    d3.select('#Humanist_path').transition().style("stroke",'rgb(0,0,0)').style("stroke-width",'1px')
    d3.select('#Grotesque').transition().style("stroke", highlight).style("stroke-width",'3px').attr('r',15)
    d3.select('#Grotesque_path').transition().style("stroke", highlight).style("stroke-width",'3px')
    if (text_dict['Grotesque']){
      d3.select('#textbox').transition().text(text_dict['Grotesque'][0])
      d3.select('#title').transition().text('Grotesque').style('font-family','Grotesk').style('font-size','1.5vw')
      d3.select('#h_movement').transition().text(text_dict['Grotesque'][1])
      d3.select('#text').transition().style("opacity",1)
    }
  }
}, {
  offset: 'bottom-in-view'
})
$('.geo ')
.css('opacity', 0) // immediately hide element
.waypoint(function(direction) {
  if (direction === 'down') {
    $(this.element).animate({ opacity: 1 })
    d3.select('#Humanist').transition().style("stroke", 'rgb(0,0,0)').style("stroke-width",'1px').attr("r", 10)
    d3.select('#Humanist_path').transition().style("stroke",'rgb(0,0,0)').style("stroke-width",'1px')
    d3.select('#Geometric').transition().style("stroke", highlight).style("stroke-width",'3px').attr('r',15)
    d3.select('#Geometric_path').transition().style("stroke", highlight).style("stroke-width",'3px')


    if (text_dict['Geometric']){
      d3.select('#textbox').transition().text(text_dict['Geometric'][0])
      d3.select('#title').transition().text('Geometric').style('font-family','Gotham').style('font-size','1.5vw')
      d3.select('#h_movement').transition().text(text_dict['Geometric'][1])
      d3.select('#text').transition().style("opacity",1)
    }
  }
  else {
    $(this.element).animate({ opacity: 0 })
    d3.select('#Geometric').transition().style("stroke", 'rgb(0,0,0)').style("stroke-width",'1px').attr("r", 10)
    d3.select('#Geometric_path').transition().style("stroke",'rgb(0,0,0)').style("stroke-width",'1px')
    d3.select('#Humanist').transition().style("stroke", highlight).style("stroke-width",'3px').attr('r',15)
    d3.select('#Humanist_path').transition().style("stroke", highlight).style("stroke-width",'3px')
    if (text_dict['Humanist']){
      d3.select('#textbox').transition().text(text_dict['Humanist'][0])
      d3.select('#title').transition().text('Humanist').style('font-family',"Verdana").style('font-size','1.5vw')
      d3.select('#h_movement').transition().text(text_dict['Humanist'][1])
      d3.select('#text').transition().style("opacity",1)
    }
  }
}, {
  offset: 'bottom-in-view'
})
$('.neogro ')
.css('opacity', 0) // immediately hide element
.waypoint(function(direction) {
  if (direction === 'down') {
    $(this.element).animate({ opacity: 1 })
    d3.select('#Geometric').transition().style("stroke", 'rgb(0,0,0)').style("stroke-width",'1px').attr("r", 10)
    d3.select('#Geometric_path').transition().style("stroke",'rgb(0,0,0)').style("stroke-width",'1px')
    d3.select('#Neo-grotesque').transition().style("stroke", highlight).style("stroke-width",'3px').attr('r',15)
    d3.select('#Neo-grotesque_path').transition().style("stroke", highlight).style("stroke-width",'3px')


    if (text_dict['Neo-grotesque']){
      d3.select('#textbox').transition().text(text_dict['Neo-grotesque'][0])
      d3.select('#title').transition().text('Neo-grotesque').style('font-family','Helvetica').style('font-size','1.5vw')
      d3.select('#h_movement').transition().text(text_dict['Neo-grotesque'][1])
      d3.select('#text').transition().style("opacity",1)
    }
  }
  else {
    $(this.element).animate({ opacity: 0 })
    d3.select('#Neo-grotesque').transition().style("stroke", 'rgb(0,0,0)').style("stroke-width",'1px').attr("r", 10)
    d3.select('#Neo-grotesque_path').transition().style("stroke",'rgb(0,0,0)').style("stroke-width",'1px')
    d3.select('#Geometric').transition().style("stroke", highlight).style("stroke-width",'3px').attr('r',15)
    d3.select('#Geometric_path').transition().style("stroke", highlight).style("stroke-width",'3px')
    if (text_dict['Geometric']){
      d3.select('#textbox').transition().text(text_dict['Geometric'][0])
      d3.select('#title').transition().text('Geometric').style('font-family','Gotham').style('font-size','1.5vw')
      d3.select('#h_movement').transition().text(text_dict['Geometric'][1])
      d3.select('#text').transition().style("opacity",1)
    }
  }
}, {
  offset: 'bottom-in-view'
})
$('.fraktur ')
.css('opacity', 0) // immediately hide element
.waypoint(function(direction) {
  if (direction === 'down') {
    $(this.element).animate({ opacity: 1 })
    d3.select('#Script').transition().style("stroke", 'rgb(0,0,0)').style("stroke-width",'1px').attr("r", 10)
    d3.select('#Script_path').transition().style("stroke",'rgb(0,0,0)').style("stroke-width",'1px')
    d3.select('#Fraktur').transition().style("stroke", highlight).style("stroke-width",'3px').attr('r',15)
    d3.select('#Fraktur_path').transition().style("stroke", highlight).style("stroke-width",'3px')


    if (text_dict['Fraktur']){
      d3.select('#textbox').transition().text(text_dict['Fraktur'][0])
      d3.select('#title').transition().text('Fraktur').style('font-family',text_dict['Fraktur'][2]).style('font-size','1.5vw')
      d3.select('#h_movement').transition().text(text_dict['Fraktur'][1])
      d3.select('#text').transition().style("opacity",1)
    }
  }
  else {
    $(this.element).animate({ opacity: 0 })
    d3.select('#Fraktur').transition().style("stroke", 'rgb(0,0,0)').style("stroke-width",'1px').attr("r", 10)
    d3.select('#Fraktur_path').transition().style("stroke",'rgb(0,0,0)').style("stroke-width",'1px')
    d3.select('#Script_path').transition().style("stroke", highlight).style("stroke-width",'3px').attr('r',15)
    d3.select('#Script').transition().style("stroke", highlight).style("stroke-width",'3px')
    if (text_dict['Script']){
      d3.select('#textbox').transition().text(text_dict['Script'][0])
      d3.select('#title').transition().text('Script').style('font-family',text_dict['Script'][1]).style('font-size','1.5vw')
      d3.select('#h_movement').transition().text(text_dict['Script'][1])
      d3.select('#text').transition().style("opacity",1)
    }
  }
}, {
  offset: 'bottom-in-view'
})

$('.os')
.css('opacity', 0) // immediately hide element
.waypoint(function(direction) {
  if (direction === 'down') {
    d3.select('#Neo-grotesque').transition().style("stroke", 'rgb(0,0,0)').style("stroke-width",'1px').attr("r", 10)
    d3.select('#Neo-grotesque_path').transition().style("stroke",'rgb(0,0,0)').style("stroke-width",'1px')

    d3.select('#textbox').transition().text(text_dict['OS'][0])
    d3.select('#title').transition().text('Open Source Fonts').style('font-family','Helvetica').style('font-size','1.5vw')
    d3.select('#h_movement').transition().text(text_dict['OS'][1])
    d3.select('#text').transition().style("opacity",1)

  }
  else {
    d3.select('#Neo-grotesque').transition().style("stroke", highlight).style("stroke-width",'3px').attr('r',15)
    d3.select('#Neo-grotesque_path').transition().style("stroke", highlight).style("stroke-width",'3px')
    if (text_dict['Neo-grotesque']){
      d3.select('#textbox').transition().text(text_dict['Neo-grotesque'][0])
      d3.select('#title').transition().text('Neo-grotesque').style('font-family','Helvetica').style('font-size','1.5vw')
      d3.select('#h_movement').transition().text(text_dict['Neo-grotesque'][1])
      d3.select('#text').transition().style("opacity",1)
    }


  }
}, {
  offset: 'bottom-in-view'
})
