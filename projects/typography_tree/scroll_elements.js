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
