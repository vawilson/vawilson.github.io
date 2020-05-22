
screen_width = $(document).width();
tree_width = screen_width-270;
screen_height = 8000;
tree_height = screen_height-200;
var i = 0;



var tree = d3.tree()
.size([tree_width, tree_height]);

var diagonal = d3.linkVertical()
.x(function(d) { return d.x; })
.y(function(d) { return d.y; });

var svg = d3.select("body").append("svg")
.attr("width",tree_width+90)
.attr('class','tree')
.attr("height", screen_height)
.attr('id','svg')
.append("g")
.attr("transform", "translate(-40,0)");

var div = d3.select("body").append("div")
.attr("class", "tooltip")
.style("opacity", 1e-6);


var yScale = d3.scaleLinear()
.domain([1440,2020])
.range([510,tree_height]);
//create axis
svg.append('g')
.attr('class', 'y axis')
.attr('transform', 'translate(100,0)')
.call(d3.axisLeft(yScale).ticks(50).tickFormat(d3.format("d")));



// load the external data
d3.csv("./treedata.csv").then(function(data) {
	console.log(data);
	// *********** Convert flat data into a nice tree ***************
	// create a name: node map

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

	// Normalize for fixed-depth.
	nodes.forEach(function(d) {
		d.y = yScale(d.data.year);
	}
);
nodes.forEach(function(d) { d.x = d.x +50 ; });


// Declare the nodesâ€¦
var node = svg.selectAll("g.node")
.data(nodes, function(d) {

	return d.id || (d.id = ++i); });

	// Enter the nodes.
	var nodeEnter = node.enter().append("g")
	.attr("class", "node" +num)
	.attr("transform", function(d) {
		return "translate(" + d.x + "," + d.y + ")";

	});

	nodeEnter.append("circle")
	.on("mouseover", mouseover)
	.on("mousemove", function(d){mousemove(d);})
	.on("mouseout", mouseout)
	.attr("r", function(d){
		if(d.data.type === "movement"){
			return 10;
		}
		else{
			return 5;
		}
	})
	.attr("stroke","black")
	.style("fill", function(d){
		if(d.data.country){
			return ordinal(d.data.country);
		}
		else{
			return "rgb(0,0,0)";
		}
	});

	nodeEnter.append("text")
	.attr("dx", 12)
	.attr("dy", ".35em")
	.text(function(d){
		if(d.data.type === "movement"){
			return d.data.name;
		}
	});

	// Declare the linksâ€¦
	var link = svg.selectAll("path.link")
	.data(links, function(d) { return d.target.id; });
	// Enter the links.
	link.enter().insert("path", "g")
	.attr("class", "link"+num)
	.attr("d", diagonal);

}


function mouseover() {
	div.transition()
	.duration(300)
	.style("opacity", 1);
}

function mousemove(d) {
	//weird node (event)
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
		.html("<b>" + d.data.name + "</b>" +  "<br>"+"Designer: " + d.data.author + "<br>" + "Year created: " + d.data.year
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

function mouseout() {
	div.transition()
	.duration(300)
	.style("opacity", 1e-6);
}
