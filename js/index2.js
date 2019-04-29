//Define control.layer variables
var leng = L.geoJSON();
var lang = L.geoJSON();
var ling = L.geoJSON();
//var lung = L.featureGroup([]);

//Define map variable	
var map = L.map('mapid', {
	    zoomControl: false,
		center: [45.5, 16.4],
		zoom: 8,
		layers: [leng]
	});
	
//Home control
var zoomHome = L.Control.zoomHome();
zoomHome.addTo(map);

//OSM map tile
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>',
     maxZoom: 14,
     minZoom: 7
}).addTo(map);

// control that shows state info on hover
	var info = L.control();

	info.onAdd = function (map) {
		this._div = L.DomUtil.create('div', 'info');
		this.update();
		return this._div;
	};
	
//info window update
	info.update = function (propere) {
		this._div.innerHTML = '<h4>DETAILS ON ETHNICITY POPULATION OF CROATIA BY MUNICIPALITY</h4><hr>' +  (propere ?
		    '<p id = "title">' + 'Census' + ' ' + propere.year + '<br/>' + '<hr>' +
			'<p id = "municipality">' + '● Municipality:' + ' ' + '<b>' + propere.NAME_2 + '<br/>' + '<hr>' +
			'<table><tr>' + '<th>' +  ''  + '<td><b>' + 'Total' + '<td><b>' + 'Percentage' + 
			'<tr><td>' + '● Citizens' + '<td>' + propere.Total_pop + '<td>' + '100%' + 
			'<tr id = "cro"><td>' + '● Croats' + '<td>' + propere.Croats + '<td>' + propere.cro_p + '%' + 
			'<tr id = "ser"><td>' + '● Serbs' + '<td>' + propere.Serbs + '<td>' + propere.ser_pe + '%' +
			'<tr><td>' + '● Yugoslavs' + '<td>' + propere.Yugoslavs + '<td>' + propere.yug_pe + '%' +
			'<tr><td>' + '● Rest' + '<td>' + propere.rest + '<td>' + propere.res_pe + '%' 
			: 'Hover over a municipality');
			
			/*function highlight () {
			var cr = document.getElementById("cro");
			var se = document.getElementById("ser");
				if (propere.Croats > propere.Serbs) {
                cr.style.backgroundColor="red";
            } else {
                se.style.backgroundColor="yellow";
            }highlight();
			}*/
			
	};
	
	info.addTo(map);

// get color depending on population density value
	function getColor(d) {
		return  d > 75   ? '#a50f15' :
				d > 50   ? '#cb181d' :
				d > 25   ? '#ef3b2c' :
				d > 10   ? '#fc805a' :
						   '#fcbba1' ;
	}
// style choropleth
	function style(feature) {
		return {
			weight: 1,
			opacity: 1,
			color: '#800026',
			dashArray: '',
			fillOpacity: 0.75,
			fillColor: getColor(feature.properties.ser_pe)
		};
	}
// highlight municipality
	function highlightFeature(e) {
		var layer = e.target;

		layer.setStyle({
			weight: 1.5,
			color: '#737373',
			dashArray: '',
			fillOpacity: 0.5,
			fillColor: '#cb181d'
		});

		if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
			layer.bringToFront();
		}

		info.update(layer.feature.properties);
	}

	var geojson;
// function when mouse outside of municipality
	function resetHighlight(e) {
		geojson.resetStyle(e.target);
		info.update();
	}
// zoom to feature on click
	function zoomToFeature(e) {
		map.fitBounds(e.target.getBounds());
	}
// function that groups all above options 
	function onEachFeature(feature, layer) {
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		});
	}
	
// style of sarajevo_agr layer
   var herStyle = {
        weight: 2,
        color: "#00116d",
        opacity: 0.5,
        fillColor: "#ff0000",
        fillOpacity: 0.5
}	
// style of mamac layer
var mamacstyle = {
   weight: 1,
            color: "#720808",
            opacity: 0,
            fillColor: "#ff0000",
            fillOpacity: 0
}
// style of the fourth layer
var sarStyle = {
   weight: 1,
            color: "#000000",
            opacity: 0.55,
            fillColor: "#b70000",
            fillOpacity: 0.55
}
	
//invoke geojsons from censusdata	
    geojson = L.geoJson(census1991, {
		style: style,
		onEachFeature: onEachFeature
	}).addTo(leng);

	geojson = L.geoJson(census2001, {
		style: style,
		onEachFeature: onEachFeature
	}).addTo(lang);
	
	geojson = L.geoJson(census2011, {
		style: style,
		onEachFeature: onEachFeature
	}).addTo(ling);



	var parentGroup = L.featureGroup().addTo(map);

var sarajevoagr = L.featureGroup.subGroup(parentGroup);
L.geoJSON([sarajevo_agr], {style: mamacstyle}).addTo(sarajevoagr);



	//sarajevoagr.addTo(lung);

var sar_hover = L.geoJSON(sarajevo_agr, {
		             style: sarStyle,
					/* onEachFeature: function(feature, layer) {
            
               
				layer.on('mouseover mousemove', function (e) {
	        	var layer = e.target;
            
	        	layer.setStyle({
	        		weight: 1,
	        		color: '#800026',
	        		fillOpacity: 0.5,
	        		fillColor: '#ff0000'
	        	});
            
	        	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
	        		layer.bringToFront();
	        	}
	          });
			  
			   layer.on('mouseout', function (e) {
				  sar_hover.resetStyle(e.target);
	          });
              }*/
		  });

 /* var sar_hover =  L.geoJson(sarajevo_agr,{
        style: herStyle
    });*/
	//sar_hover.addTo(lung);
	
	/*var sidebar = L.control.sidebarv1('sidebar', {
            closeButton: true,
            position: 'right'
        });
        map.addControl(sidebar);
		
	
	sar_hover.on('click', function (e) {
            sidebar.toggle();
            sidebar.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.datum) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + String(e.layer.feature.properties.source) + '</small>');
							  });
 */
//Attribution to data source
map.attributionControl.addAttribution('Population data &copy; <a href="https://www.dzs.hr/">Croatian Bureau of Statistics</a>');

//Store overlay layers in a variable
var baselayers = {
	    "Census 1991": leng,
		"Census 2001": lang,
		"Census 2011": ling,
	    "The maximum extent of occupied territory": L.featureGroup([sarajevoagr, sar_hover])

	};

//Adding control.layer to map
L.control.layers(baselayers, null, {
	position: 'topleft',
	}).addTo(map);

//Follow-up of zooming on press of radio button
map.on('baselayerchange', function () {
	var bounds = parentGroup.getBounds();
// Fit bounds only if the Parent Group actually has some markers,
// i.e. it returns valid bounds.
  if (bounds.isValid()) {
  	map.fitBounds(bounds);
  }
});

//Define a legend variable container
	var legend = L.control({position: 'bottomright'});

	legend.onAdd = function (map) {

		var div = L.DomUtil.create('div', 'info2 legend'),
			grades = [0, 10, 25, 50, 75],
			labels = [],
			from, to;

		for (var i = 0; i < grades.length; i++) {
			from = grades[i];
			to = grades[i + 1];

			labels.push(
				'<i style="background:' + getColor(from + 1) + '"></i> ' +
				from + (to ? '&ndash;' + to : '+'));
		}
		div.innerHTML = '<h3>Percentage of <br> Serb population %</h3><hr><br/>' + labels.join('<br>');

		return div;
	};

	legend.addTo(map);

//Define a piegraph variable container

var PieControl = L.Control.extend({	
        options: {
			position: 'bottomleft'
		},
		onAdd: function (map) {
			// create the control container with a particular class name
			var container = L.DomUtil.create('div', 'pie_graph');
			container.innerHTML = '<h4>CENSUS DATA</h4>' + "<hr>" + '<label id = radio><input type="radio" name="dataset" id="dataset1" value="option1" checked="checked" onclick="myFunction()">1991</label>' + '<label id = radio><input type="radio" name="dataset" id="dataset2" value="option2" onclick="myFunction1()">2001</label>' +  '<label id = radio><input type="radio" name="dataset" id="dataset2" value="option3" onclick="myFunction2()">2011</label>' + '<p id="demo"><b>Total population:</b> 4 784 265 citizens</p>';

			return container;
		}
	});
	
	map.addControl( new PieControl() );

//D3 chart

	  function myFunction() {
  document.getElementById("demo").innerHTML = "<p id = demo><b>Total population:</b> 4 784265 citizens<p>";
}
function myFunction1() {
  document.getElementById("demo").innerHTML = "<p id = demo><b>Total population:</b> 4 437460 citizens<p>";
}
function myFunction2() {
  document.getElementById("demo").innerHTML = "<p id = demo><b>Total population:</b> 4 284889 citizens<p>";
}
	  
	  
var svg = d3.select(".pie_graph")
	.append("svg")
	.append("g")

svg.append("g")
	.attr("class", "slices");
svg.append("g")
	.attr("class", "labelName");
svg.append("g")
	.attr("class", "labelValue");
svg.append("g")
	.attr("class", "lines");

var width = 450,
    height = 180,
	radius = Math.min(width, height) / 2;
	

var pie = d3.pie()
	.sort(null)
	.value(function(d) {
		return d.value;
	});
	
	

var arc = d3.arc()
	.outerRadius(radius * 0.8)
	.innerRadius(radius * 0.4);

var outerArc = d3.arc()
	.innerRadius(radius * 0.9)
	.outerRadius(radius * 0.9);

var legendRectSize = (radius * 0.05);
var legendSpacing = radius * 0.02;


var div = d3.select(".pie_graph").append("div").attr("class", "toolTip");

svg.attr("transform", "translate(" + width / 4 + "," + height / 2.35 + ")");

var colorRange = d3.scaleOrdinal(d3.schemeCategory20);

	
	var color = d3.scaleOrdinal(["#08306b","#a50f15","#88419d",
         "#e78ac3","#a6d854","#ffd92f"]);

census1991nat = ["Croats", "Serbs","Other", "Yugoslavs"]
census2001nat = ["Croats", "Serbs", "Other"]
census2011nat = ["Croats", "Serbs", "Other"]

census1991per = [78.10, 12.16, 7.53, 2.21]
census2001per = [89.63, 4.54, 5.83];
census2011per = [90.42, 4.45, 5.23];

census1991num = [3736356, 581663,360205, 106041]
census2001num = [3977171, 201631, 258658];
census2011num = [3874321, 186633, 223935];



datasetOption1 = [
		{label:census1991nat[0], value:census1991per[0], value2:census1991num[0]}, 
        {label:census1991nat[1], value:census1991per[1], value2:census1991num[1]}, 
        {label:census1991nat[2], value:census1991per[2], value2:census1991num[2]},
        {label:census1991nat[3], value:census1991per[3], value2:census1991num[3]},
        ];

datasetOption2 = [
	    {label:census2001nat[0], value:census2001per[0], value2:census2001num[0]}, 
        {label:census2001nat[1], value:census2001per[1], value2:census2001num[1]}, 
        {label:census2001nat[2], value:census2001per[2], value2:census2001num[2]},
        ];
		
datasetOption3 = [
	    {label:census2011nat[0], value:census2011per[0], value2:census2011num[0]}, 
        {label:census2011nat[1], value:census2011per[1], value2:census2011num[1]}, 
        {label:census2011nat[2], value:census2011per[2], value2:census2011num[2]},
        ];

d3.selectAll("input")
	.on("change", selectDataset)
	
function selectDataset(value = this.value)
{
  change(datasetOption1);
	//var value = this.value;
  var value = d3.select('input[name="dataset"]:checked').node().value;
	
	if (value == "option1")
	{
		change(datasetOption1);
	}
	else if (value == "option2")
	{
		change(datasetOption2);
	}
	else if (value == "option3")
	{
		change(datasetOption3);
	}
	
	
}
//Show chart onload of page
selectDataset("option1");

function change(data) {

	/* ------- PIE SLICES -------*/
	var slice = svg.select(".slices").selectAll("path.slice")
        .data(pie(data), function(d){ return d.data.label });

    slice.enter()
        .insert("path")
        .style("fill", function(d) { return color(d.data.label); })
        .attr("class", "slice");

    slice
        .transition().duration(1000)
        .attrTween("d", function(d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function(t) {
                return arc(interpolate(t));
            };
        })
    slice
	

	
        .on("mousemove", function(d){			        
    d3.select(this).style('fill','#9ebcda')

            div.style("left", d3.event.pageX+10+"px");
            div.style("top", d3.event.pageY-25+"px");
            div.style("display", "inline-block");
            div.html((d.data.label)+"<br>"+"<hr>"+(d.data.value2)+"<br>"+"<hr>"+(d.data.value)+"%");
;
        });

    slice
        .on("mouseout", function(d){
		    d3.select(this).style('fill',color(d.data.label))

            div.style("display", "none");
        });

    slice.exit()
        .remove();

var legendG = svg.selectAll(".legend")
      .data(pie(data))
      .enter().append("g")
      .attr("transform", function(d,i){
        return "translate(" + (width - 70) + "," + (i * 15 + 20) + ")";
      })
      .attr("class", "legend");   
    
    legendG.append("rect")
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", function(d) { return color(d.data.label); });
   
    


};