//This script contains the structure of the dynamical content 
//that will be fetched from the variable json data        


//Info about Croatia
        croatia.on('click', function (e) {
	        if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
			sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		   					  '<br><p id = "event">' + String(e.layer.feature.properties.date1) +
                              '<br><p id = "event">' + String(e.layer.feature.properties.questions) + 
							  '<br><p id = "event">' + String(e.layer.feature.properties.question1) +	
                              '<br><p id = "event">' + String(e.layer.feature.properties.question2) +	
							  '<br><p id = "event">' + String(e.layer.feature.properties.date2) +
							  '<br><p id = "event">' + String(e.layer.feature.properties.date3) +
							  '<br><p id = "event">' + String(e.layer.feature.properties.date4) +
							  '<br><p id = "event">' + String(e.layer.feature.properties.date5) +
							  '<br><p id = "event">' + String(e.layer.feature.properties.date6) + '<hr>' +
		   					  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source1) + '</small>');
		   					  });

//Info about Yugoslavia
		juga.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
			sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +							  
							  '<br><p id = "event">' + String(e.layer.feature.properties.census) +
							  '<br><p id = "event">' + String(e.layer.feature.properties.photo) + '<hr>' +
		   					  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>'  + 
							  '<br><small>' + String(e.layer.feature.properties.source2) + '</small>')});
	
//Info about the idea of Great Serbia

		srbija.on('click', function (e) {
		  if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +							  
							  '<br><p id = "event">' + String(e.layer.feature.properties.table) +
							  '<br><p id = "event">' + String(e.layer.feature.properties.photo) + '<hr>' +
                              '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source1) + '</small>'  + 
							  '<br><small>' + String(e.layer.feature.properties.source2) + '</small>')});		   					 
       /* log_revolution.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
		   					  '<br>Date: ' + String(e.layer.feature.properties.datum) + '<hr>' +
		   					  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
		   					  '<br><small>Source: ' + String(e.layer.feature.properties.source) + '</small>');
		   					  });*/
		
	/*jas.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.NAME_2) + 
		   					  '<br>Date: ' + String(e.layer.feature.properties.datum) + '<hr>' +
		   					  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
		   					  '<br><small>Source: ' + String(e.layer.feature.properties.source) + '</small>');
		   					  });*/
	/*
   pink.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.NAME_2) + 
		   					  '<br>Date: ' + String(e.layer.feature.properties.datum) + '<hr>' +
		   					  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
		   					  '<br><small>Source: ' + String(e.layer.feature.properties.source) + '</small>');
		   					  });		  
	unpa.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.NAME_2) + 
		   					  '<br>Date: ' + String(e.layer.feature.properties.datum) + '<hr>' +
		   					  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
		   					  '<br><small>Source: ' + String(e.layer.feature.properties.source) + '</small>');
		   					  });
							  
	unpacro.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.NAME_2) + 
		   					  '<br>Date: ' + String(e.layer.feature.properties.datum) + '<hr>' +
		   					  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
		   					  '<br><small>Source: ' + String(e.layer.feature.properties.source) + '</small>');
		   					  });
							  */

//Sarajevo agreement
sar_hover.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		   					  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
		   					  '<br><small>Source:' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
		   					  }); 
							  
//Events content	
		events.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
            sidebar2.setContent('<h4 id = "title2">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.datum) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });
//Independence day							  
		independenceDay.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });
//Low conflict period
		lowConflict.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });
//Seized police stations							  
		sr_postaje.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });
							  
		