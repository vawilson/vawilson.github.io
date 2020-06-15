	// GET URL params to pick JSON file
	// Decode URI component for any param + value to be passed
	function getURLParameter(name) {
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
	}

	var svg = d3.select("survey");

	features = ["What kind of relationship are you looking for?",
								"Are sports important to you?",
								"How much time do you expect to spend with your partner?",
								"It is important that I make more money than my peers.",
								"420?",
								"I am comfortable with my child being gay.",
								"Rate the importance of sex in a relationship.",
								"I prefer politically incorrect humor.",
								"Emotional vulnerability is an important part of my friendships.",
								"If you do nothing for an entire day, how do you feel?",
								"I prefer a partner with a similar ethnicity as myself"
				]

	simple_features = [ "Relationship", "Sports", "Time", "Money", "420",
					"LGBT", "Sex", "Humor", "Vulnerability", "Activity", "Ethnicity"]

	var avgData = [3.8, 3.8, 4.2, 3.8, 3,
					 5.7, 4.8, 4.7, 5.2, 3.5, 3.1];

	var userData = [1, 1, 1, 1, 1,
					1, 1, 1, 1, 1, 1];

	var poolData = [3.8, 3.8, 4.2, 3.8, 3,
					 5.7, 4.8, 4.7, 5.2, 3.5, 3.1];

  // create fake data

	// JSON file from URL params
	sourcefile = ("sourcefile" + getURLParameter('sourcefile') + ".json"); //
	sourcefile = ("love_data.json");
	// Load JSON
	$(document).ready(function(){
		var relationship = document.getElementById("0");
		relationship.oninput = function() {
			userData[0] = relationship.value;
		}
		var sports = document.getElementById("1");
		sports.oninput = function() {
			userData[1] = sports.value;
		}

		$.ajax({
			url: sourcefile, // var set from URL params
			method: "GET",
			success: function(data) {

				var chartdata = {
					labels: simple_features,
					datasets : [
						{    // user dataset
							label: "You",
							backgroundColor: "rgba(250,220,220,0.5)",
							// borderColor: "rgba(250,220,220,0.5)",
							pointBackgroundColor: "rgba(250,220,220,1)",
							pointBorderColor: "rgba(179,181,198,1)",
							pointRadius : 2,
							radius: 2,
							pointHoverRadius: 2,
							pointHoverBackgroundColor: "rgba(179,181,198,1)",
							pointHoverBorderColor: "rgba(179,181,198,1)",
							data: userData
						},
						{    // pool dataset
							label: "Pool",
							backgroundColor: "rgba(100, 100, 220, 0.5)",
							backgroundColor: "rgba(205, 205, 225, 0.5)",
							pointBackgroundColor: "rgba(250,220,220,1)",
							pointBorderColor: "rgba(179,181,198,1)",
							pointRadius : 2,
							radius: 2,
							pointHoverRadius: 2,
							pointHoverBackgroundColor: "rgba(179,181,198,1)",
							pointHoverBorderColor: "rgba(179,181,198,1)",
							data: poolData
						},
						{    // average dataset
							label: " GT Average",
							backgroundColor: "rgba(207,36,86, 0.5)",
							pointHoverRadius: 2,
							radius: 2,
							pointBorderColor: "rgba(207,36,86, 1)",
							pointBackgroundColor: "rgba(207,36,86, 1)",

							pointRadius : 2,
							pointHoverBackgroundColor: "rgba(207,36,86, 1)",
							pointHoverBorderColor: "rgba(207,36,86, 1)",
							data: avgData
						}
					]
				};

				var ctx = $("#mycanvas");
				var radarGraph = new Chart(ctx, {
					type: 'radar',
					options: {
						layout: {
							padding: {
								left: 0,
								right: 0,
								top: 100,
								bottom: 100
							}
						},
						title:{
							display:true,
							horizontalAlign: "center",
							borderThickness: 2,
							borderColor: "rgba(255, 255, 255, 1)"
						},
						tooltips:{
							enabled: true,
							mode: "label",
							callbacks: {
            title: function(t, d) {
               return features[t[0].index];
				}
					}
						},
						elements: {
							line: {
								tension: 0.0,
							}
						},
						scale: {
							reverse: false,
							gridLines: {
              color: 'white'
							},
							ticks: {
								fontColor:'white',
								backdropColor: "rgba(255, 255, 255, 0)",
								beginAtZero: true,
								padding: 10,
							}
						},
						legend: {
							position: 'top',
							align: 'left',
							padding: 10,
						},
						labels: {
							fontColor: 'black',
							fontSize: 25,
							padding: 10,
						},
						animation: {
							animateRotate: true,
							animateScale: true
						}
					},
					data: chartdata
				});
				Chart.defaults.global.defaultFontColor = 'white';

				// Update Graph on data input change
				// "Relationship", "Sports", "Time", "Money", "420",
					// "Comfort", "Sex", "Humor", "Vulnerability", "Activity", "Ethnicity"
				var relationship = document.getElementById("0");
				relationship.oninput = function() {
					userData[0] = relationship.value;
					radarGraph.update();
				}
				var sports = document.getElementById("1");
				sports.oninput = function() {
					userData[1] = sports.value;
					radarGraph.update();
				}
				var time = document.getElementById("2");
				time.oninput = function() {
					userData[2] = time.value;
					radarGraph.update();
				}
				var money = document.getElementById("3");
				money.oninput = function() {
					userData[3] = money.value;
					radarGraph.update();
				}
				var weed = document.getElementById("4");
				weed.oninput = function() {
					userData[4] = weed.value;
					radarGraph.update();
				}
				var comfort = document.getElementById("5");
				comfort.oninput = function() {
					userData[5] = comfort.value;
					radarGraph.update();
				}
				var sex = document.getElementById("6");
				sex.oninput = function() {
					userData[6] = sex.value;
					radarGraph.update();
				}
				var humor = document.getElementById("7");
				humor.oninput = function() {
					userData[7] = humor.value;
					radarGraph.update();
				}
				var vulnerability = document.getElementById("8");
				vulnerability.oninput = function() {
					userData[8] = vulnerability.value;
					radarGraph.update();
				}
				var activity = document.getElementById("9");
				activity.oninput = function() {
					userData[9] = activity.value;
					radarGraph.update();
				}
				var ethnicity = document.getElementById("10");
				ethnicity.oninput = function() {
					userData[10] = ethnicity.value;
					radarGraph.update();
				}

			},
			error: function(data) {
				console.log(data);
			}
		});
	});




var svg = d3.select('svg')

// for each person in the dataset create a heart

var w = $(document).width();
var h = $(document).height();
var q = [];

participants = new Array(196);
imagePath = "heart.svg";
  svg.selectAll('heart')
  .data(participants)
  .enter()
  .append('svg:image')
    .attr('class','non-filtered')
    .attr("xlink:href",imagePath)
    .attr('width', $(document).width() / 35)
    .attr('height', $(document).height() /35)
    .attr('x', function (d,i) { return (i%14)*(w/30);})
    .attr('y', function (d,i) { return Math.floor(i/14)*(h/47) +10})

//update circles by row according to num entered
function updateCircle(num){
  svg.selectAll('image').attr('class', function(d,i){
    return i < num? 'filtered' : 'non-filtered';})
	.attr("xlink:href",function(d,i){
	return i >= num? 'heart_fill.svg' : 'heart.svg';
	});

}


d3.json('love_data.json').then(function(dataset) {
});


var hm_gen = {
  'Female': 1,
  'Male': 2,
  'Other': 3,
  'None': null

}
var hm_sex = {
  'Heterosexual': 1,
  'Homosexual': 2,
  'Bisexual': 3,
  'Pansexual': 4,
  'None': null

}
var hm_eth = {
  'White': 1,
  'South Asian': 2,
  'Hispanic/Latinx': 3,
  'Middle Eastern/North African': 4,
  'Black/African': 5,
  'East Asian': 6,
  'Central Asian': 7,
  'Southeast Asian': 8,
  'Russian': 9,
  'Native Hawaiian': 10,
  'Native American': 11,
  'Black/African American': 12,
  'Invalid / Other': 13,
  'None': null
}

var gen = null
var eth = null
var sex = null
load_data(gen, sex, eth)


function load_data() {

  $.getJSON("love_data.json", function (json) {
      runQuery(json)
  });
}

function gFunc() {
  var x = document.getElementById("mySelect").value;
  gen = hm_gen[x]
  // console.log(x)
  // console.log(gen)
  load_data(gen, sex, eth)
}

function sFunc() {
  var x = document.getElementById("mySelect2").value;
  sex = hm_sex[x]
  // console.log(x)
  // console.log(sex)
  load_data(gen, sex, eth)
}

function eFunc() {
  var x = document.getElementById("mySelect3").value;
  eth = hm_eth[x]
  // console.log(x)
  // console.log(eth)
  load_data(gen, sex, eth)
}

function ethQuery(q) {
  var copy = []
  eth = eth.toString()
  // if (q[i]['I prefer a partner with a similar ethnicity as myself'] != 7)
  for (var i = 0; i < q.length; i++) {
    // if (q[i]['I prefer a partner with a similar ethnicity as myself'] != 7){
    //   copy.push(q[i])

    // }

      var eQ = q[i]['Ethnicity']
      if (typeof eQ == Number) {
          eQ = eQ.toString()
      }
      if ((q[i]['I prefer a partner with a similar ethnicity as myself'] != 7) || (eQ == eth || eQ.toString().includes(eth.toString() + ","))) {
          copy.push(q[i])
      }
  }
  return copy
}

function runQuery(json) {

  q = json
  // console.log('gen', gen)
  // console.log('gen type', typeof gen)


  // console.log('sex', sex)
  // console.log('sex type', typeof sex)

  // console.log('eth', eth)
  // console.log('eth type', typeof eth)

  if (gen == null && sex == null && eth == null) {
      // console.log('nothing')
  } else if (gen != null && sex == null && eth == null) {
    // console.log(gen)
    // console.log(q)

    if (gen == 1) {
        var w = _.remove(q, {
            'Gender Identity': 2,
            'Sexual Orientation': 2
        })
        var q = _.remove(q, {
            'Gender Identity': 1,
            'Sexual Orientation': 1
        })
    }
    else if (gen == 2) {
        // console.log('male')
        // _.remove(q, {
        //     'Gender Identity': 1,
        //     'Sexual Orientation': 2
        // })
        // _.remove(q, {
        //     'Gender Identity': 2,
        //     'Sexual Orientation': 1
        // })
        var q = new Array(1040)

    }
  } else if (gen == null && sex != null && eth == null) {
      q = _.filter(json, {
          'Sexual Orientation': sex
      })
  } else if (gen != null && sex != null && eth == null) {

      if (sex == 3) {
        q = _.filter(json, {
          'Gender Identity': gen,
          'Sexual Orientation': sex
        })
        var w = _.filter(json, {
          'Gender Identity': gen,
          'Sexual Orientation': 1
		})
		q = q.concat(w)
        // q = new Array(q.length + w.length)

	  }
	  else if (sex == 4) {
		q = _.filter(json, {
			'Gender Identity': gen,
			'Sexual Orientation': 3
		  })
		var w = _.filter(json, {
			'Gender Identity': gen,
			'Sexual Orientation': 1
		  })
		q = q.concat(w)
		var y = _.filter(json, {
			'Gender Identity': gen,
			'Sexual Orientation': sex
		  })
		q = q.concat(y)
	  }
      else {
        q = _.filter(json, {
          'Gender Identity': gen,
          'Sexual Orientation': sex
        })
      }
  } else if (gen == null && sex == null && eth != null) {
      // console.log('only eth')

      q = ethQuery(q, eth)
  } else if (gen == null && sex != null && eth != null) {
      // console.log('only sex and eth')

      q = _.filter(json, {
          'Sexual Orientation': sex
      })
      q = ethQuery(q, eth)
  } else if (gen != null && sex == null && eth != null) {
      // console.log('only gender and eth')

      q = _.filter(json, {
          'Gender Identity': gen
      })

      q = ethQuery(q, eth)

  } else {
      // console.log('everything')

	if (sex == 3) {
        q = _.filter(json, {
          'Gender Identity': gen,
          'Sexual Orientation': sex
        })
        var w = _.filter(json, {
          'Gender Identity': gen,
          'Sexual Orientation': 1
		})
		q = q.concat(w)
	}
	else if (sex == 4) {
		q = _.filter(json, {
			'Gender Identity': gen,
			'Sexual Orientation': 3
		  })
		var w = _.filter(json, {
			'Gender Identity': gen,
			'Sexual Orientation': 1
		  })
		q = q.concat(w)
		var y = _.filter(json, {
			'Gender Identity': gen,
			'Sexual Orientation': sex
		  })
		q = q.concat(y)
	  }
	else {
		q = _.filter(json, {
			'Gender Identity': gen,
			'Sexual Orientation': sex
		})
	}
      q = ethQuery(q, eth)

  }

  	q.forEach(d => {
	  poolData[0] += (d['What kind of relationship are you looking for?']);
	  poolData[1] += (d['Are sports important to you?']);
	  poolData[2] += (d['How much time do you expect to spend with your partner?']);
	  poolData[3] += (d['It\’s important that I make more money than my peers.']);
	  poolData[4] += (d['420?']);
	  poolData[5] += (d['I\'m comfortable with my child being gay.']);
	  poolData[6] += (d['Rate the importance of sex in a relationship']);
	  poolData[7] += (d['I prefer politically incorrect humor.']);
	  poolData[8] += (d['Emotional vulnerability is an important part of my friendships.']);
	  poolData[9] += (d['If you do nothing for an entire day, how do you feel?']);
	  poolData[10] += (d['I prefer a partner with a similar ethnicity as myself']);
	});
	poolData[0] /= q.length;
	poolData[1] /= q.length;
	poolData[2] /= q.length;
	poolData[3] /= q.length;
	poolData[4] /= q.length;
	poolData[5] /= q.length;
	poolData[6] /= q.length;
	poolData[7] /= q.length;
	poolData[8] /= q.length;
	poolData[9] /= q.length;
	poolData[10] /= q.length;

	// console.log("Pool Data:");
	// console.log(poolData);
	if (poolData[5] > 7) {
		poolData[5] = 7.0
	}

  percentage = Math.ceil((q.length / json.length) * 100)
  updateCircle(Math.ceil(percentage*1.96))
  return percentage
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
