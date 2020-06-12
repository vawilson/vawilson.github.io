
//get screen dimensions
screen_width = $(document).width();
screen_height = 9000;
//define tree dimensions
tree_width = screen_width-400;
tree_height = screen_height-200;
var i = 0;
// create the tree given a width and height
var tree = d3.tree()
.size([tree_width, tree_height]);
// create the paths in the tree
var diagonal = d3.linkVertical()
.x(function(d) { return d.x; })
.y(function(d) { return d.y; });
//create an svg for the tree
var svg = d3.select("body").append("svg")
.attr("width",tree_width+195)
.attr('class','tree')
.attr("height", screen_height)
.attr('id','svg')
.append("g")
.attr("transform", "translate(-60,0)");
// create a tooltip for the nodes
var div = d3.select("body").append("div")
.attr("class", "tooltip")
.style("opacity", 1e-6);
// add a time scale on the left and fit the data to the scale
var yScale = d3.scaleLinear()
.domain([1440,2020])
.range([710,tree_height]);
//create axis
svg.append('g')
.attr('class', 'y-axis')
.style('font-family','Helvetica')
.style('font-size','11')
.style('stroke-width','2px')
.attr('transform', 'translate(100,0)')
.call(d3.axisLeft(yScale).ticks(50).tickFormat(d3.format("d")).tickPadding(6));
//dictionary for the movements and their descriptions (for the toolbar)
text_dict = {};
// load the external data
d3.csv("./treedata.csv").then(function(data) {
	// *********** Convert flat data into a nice tree ***************
	var dataMap = data.reduce(function(map, node) {
		map[node.name] = node;
		return map;
	}, {});
	// create the tree array
	var treeData = [];
	data.forEach(function(node) {
		// add to parent
		parent = node.parent.split(',');
		if(parent.length<=1){
			var parent = dataMap[node.parent];
			if (parent) {
				// create child array if it doesn't exist
				(parent.children || (parent.children = []))
				// add node to child array
				.push(node);
			} else {
				// parent is null or missing
				treeData.push(node);
			}
		}
		else{
			//handle non-tree stuff oops
			var parent_arr = [];
			for(i in parent){
				parent_arr.push(dataMap[parent[i].trim()]);
			}
			for(i in parent_arr){
				// create child array if it doesn't exist
				(parent_arr[i].children || (parent_arr[i].children = []))
				// add node to child array
				.push(node);
			}
		}
	});
	//creates multiple trees
	treeData.forEach(function(node,i){
		root = node;
		update(root,i);
	});
});

function update(source,num) {
	// Compute the new tree layout.
	// create a hierarchy from the root
	var treeRoot = d3.hierarchy(root);
	treeRoot
	.sum(function(d) { return d.value; })
	.sort(function(a, b) { return b.height - a.height || b.value - a.value; });
	treeRoot = tree(treeRoot);
	// nodess
	var nodes = treeRoot.descendants();

	// links
	var links = treeRoot.links();
	//create scale
	//update text dict
	nodes.forEach(function(d){
		text = d.data.text;
		name = d.data.name;
		title = d.data.title;
		font_name = d.data.font_name;
		h_movement = d.data.historical_movement
		text_dict[name] = [text,h_movement,font_name];
	});
	// Normalize for fixed-depth.
	nodes.forEach(function(d) {
		d.y = yScale(d.data.year);
	}
);
// some custom placements for these nodes (they didn't position themselves well)
nodes.forEach(function(d) {
	d.x = d.x +150 ;
	if(d.data.name === "Antiqua"){
		d.x = d.x +130 ;
	}
	if(d.data.name === "Schwabacher"){
		d.x = d.x +120 ;
	}
	if(d.data.name === "Fraktur"){
		d.x = d.x +170 ;
	}
	if(d.data.name === "Script"){
		d.x = d.x - 250 ;
	}
	if(d.data.name === "Italic"){
		d.x = d.x - 270 ;
	}
	if(d.data.name === "Textualis"){
		d.x = d.x + 100 ;
	}
	if(d.data.name === "Bodoni"){
		d.x = d.x - 50 ;
	}
	if(d.data.name === "Didot"){
		d.x = d.x - 70 ;
	}

});
// Declare the nodes
var node = svg.selectAll("g.node")
.data(nodes, function(d) {
	return d.id || (d.id = ++i); });
	// Enter the nodes.
	var nodeEnter = node.enter().append("g")
	.attr("class", "node" +num)
	.attr("transform", function(d) {
		return "translate(" + d.x + "," + d.y + ")";
	});
  // create a circle for each data point
	nodeEnter.append("circle")
	.on("mouseover", mouseover)
	.on("mousemove", function(d){mousemove(d);})
	.on("mouseout", mouseout)
	.attr('id',function(d){return d.data.name;})
	.attr("r", function(d){
		// size depends on type: movement or typeface
		if(d.data.type === "movement"){
			return 10;
		}
		else{
			return 5;
		}
	})
	.attr("stroke","black")
	.style("fill", function(d){
		// color according to country
		if(d.data.country){
			return ordinal(d.data.country);
		}
		else{
			return "rgb(0,0,0)";
		}
	});
// display text for movements only, had to shuffle some select movement texts around
	nodeEnter.append("text")
	.attr("dx",function(d){
		if( d.data.name === "Didone-Serif"){
			return -80;
		}
		else if (d.data.name === "Transitional-Serif") {
			return -108;
		}
		else if (d.data.name === "Scotch-Roman"  ) {
			return -97;
		}
		else if ( d.data.name === "Serif" ) {
			return -38;
		}

		else{
			return 17;
		}
	})
	.attr("dy", function(d){
		if( d.data.name === "Didone-Serif"){
			return -5;
		}
		return ".35em"})
		.text(function(d){
			if(d.data.type === "movement"){
				return d.data.name;
			}
		});
		// Declare the links
		var link = svg.selectAll("path.link")
		.data(links, function(d) { return d.target.id; });
		// Enter the links.
		link.enter().insert("path", "g")
		.attr("class", "link"+num)
		.attr('id',function(d){return d.target.data.name + "_path";})
		.attr('opacity',function(d){
			if(d.target.data.name === "Sans-Serif"){
				return 0;
			}
			else{
				return 1;
			}
		})
		.attr("d", diagonal);
	}
  // hover tooltip function
	function mouseover() {
		div.transition()
		.duration(300)
		.style("opacity", 1);
	}
	//hover templates - movements and typefaces display different info
	function mousemove(d) {
		//hover template for invention of printing press
		if( d.data.name === "Invention of the printing press"){
			div
			.html("<b>" + d.data.name + "</b>" + "<br>"+"Year created: " + d.data.year
			+ "<br>"+"Inventor: " + d.data.author + "<br> Country: " + d.data.country)
			.style("left", (d3.event.pageX ) + "px")
			.style("top", (d3.event.pageY) + "px");
		}
		//movements without movement origins/event origin
		else if (d.data.name === "Black Letter" || d.data.name === "Script" || d.data.name == "Oldstyle Serif"
		|| d.data.name == "Sans Serif" ) {
			div
			.html("<b>" + d.data.name + "</b>" + "<br>"+"Designer: " + d.data.author +  "<br>"+"Typeface: "+ d.data.typeface+ "<br>"+"Year created: " + d.data.year
			+ "<br> Country: " + d.data.country)
			.style("left", (d3.event.pageX ) + "px")
			.style("top", (d3.event.pageY) + "px");
		}
		// movements
		else if (d.data.type === "movement") {
			div
			.html("<b>" + d.data.name + "</b>" +  "<br>"+"Designer: " + d.data.author + "<br>" +  "Typeface: "+ d.data.typeface+ "<br>"+ "Year created: " + d.data.year
			+ "<br> Country: " + d.data.country)

			.style("left", (d3.event.pageX ) + "px")
			.style("top", (d3.event.pageY) + "px");
		}
		//typefaces
		else{
			div
			.html("<b>" + d.data.name + "</b>" + "<br>"+ "Designer: " + d.data.author+
			"<br>"+"Year created: " + d.data.year + "<br>"+ "Movement: " + d.data.parent + "<br> Country: " + d.data.country)
			.style("left", (d3.event.pageX ) + "px")
			.style("top", (d3.event.pageY) + "px");
		}
	}
// make hover tooltip dissapear when you remove mouse
	function mouseout() {
		div.transition()
		.duration(300)
		.style("opacity", 1e-6);
	}
