
//Format date
 var minDate = moment('1990-01-01');
   
   //console.log(minDate);
   
   $('#date1, #date2').datepicker({
   
   dateFormat:'dd.mm.yy'
   
   });


//Variable in which are saved layers - events
		var events = L.featureGroup();

//Center of the map
        var center = [44.50, 16.4];

//Basemaps
        var osmBw = L.tileLayer(
		    'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', 
		    {attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'}
		);

//Map variables, treba dodati maxzoom da se vidi juga samo
        var map = L.map('map', {
            zoomControl: false,
			layers: [osmBw, events],
            center: center,
            zoom: 7,
            minZoom:6

        });

//Home control
var zoomHome = L.Control.zoomHome();
zoomHome.addTo(map);



//Base layer
cro = L.geoJSON([croatia_poly], {style: myStyle}).addTo(map);

//Zooming on press of radio button
	var parentGroup = L.featureGroup().addTo(map),
	    croatia = L.featureGroup.subGroup(parentGroup);
		croatia2 = L.featureGroup.subGroup(parentGroup);
		juga = L.featureGroup.subGroup(parentGroup);
		srbija = L.featureGroup.subGroup(parentGroup);
		vu26_08_91 = L.featureGroup.subGroup(parentGroup);
		mamac25_09_91 = L.featureGroup.subGroup(parentGroup);
		mamac05_10_91 = L.featureGroup.subGroup(parentGroup);
		mamac10_11_91 = L.featureGroup.subGroup(parentGroup);
		sla16_12_91 = L.featureGroup.subGroup(parentGroup);
        zapsla_26_08_91 = L.featureGroup.subGroup(parentGroup);
        zapsla_25_09_91 = L.featureGroup.subGroup(parentGroup);
		zapsla_29_10_91 = L.featureGroup.subGroup(parentGroup);
		zapsla_12_11_91 = L.featureGroup.subGroup(parentGroup);
		zapsla_19_11_91 = L.featureGroup.subGroup(parentGroup);
		zapsla_17_12_91 = L.featureGroup.subGroup(parentGroup);
		zapsla_03_01_92 = L.featureGroup.subGroup(parentGroup);
        mamacban_kor = L.featureGroup.subGroup(parentGroup);
        mamaclika = L.featureGroup.subGroup(parentGroup);
        mamacslunj = L.featureGroup.subGroup(parentGroup);
        mamaczadar = L.featureGroup.subGroup(parentGroup);
        mamacjug = L.featureGroup.subGroup(parentGroup);
        mamacdub = L.featureGroup.subGroup(parentGroup);
        sarajevoagr = L.featureGroup.subGroup(parentGroup);
        mamacjas = L.featureGroup.subGroup(parentGroup);
		mamacnos = L.featureGroup.subGroup(parentGroup);
		mamacmilj = L.featureGroup.subGroup(parentGroup);
		mamackriz = L.featureGroup.subGroup(parentGroup);
		unpasektori = L.featureGroup.subGroup(parentGroup);
		
		smjernapada = L.featureGroup.subGroup(parentGroup);
		mamacmasl = L.featureGroup.subGroup(parentGroup);
		mamacslano = L.featureGroup.subGroup(parentGroup);
		mamaccavtat = L.featureGroup.subGroup(parentGroup);
		mamacperuca = L.featureGroup.subGroup(parentGroup);
		mamacmedak = L.featureGroup.subGroup(parentGroup);
		mamaczima = L.featureGroup.subGroup(parentGroup);
		mamacbljesak = L.featureGroup.subGroup(parentGroup);
		mamacoluja_3_8 = L.featureGroup.subGroup(parentGroup);
		mamackorban_3_8 = L.featureGroup.subGroup(parentGroup);
		mamaclik_3_8 = L.featureGroup.subGroup(parentGroup);
		mamacdal_3_8 = L.featureGroup.subGroup(parentGroup);
		mamaclik_6_8 = L.featureGroup.subGroup(parentGroup);
		mamaclik_7_8 = L.featureGroup.subGroup(parentGroup);
		mamackorban_8_8 = L.featureGroup.subGroup(parentGroup);
		logrevolution = L.featureGroup.subGroup(parentGroup);
		logrevolution = L.featureGroup.subGroup(parentGroup);
		proclamation_sao = L.featureGroup.subGroup(parentGroup);
		sr_postaje = L.featureGroup.subGroup(parentGroup);
		mamaczapsla = L.featureGroup.subGroup(parentGroup);
		lowConflict = L.featureGroup.subGroup(parentGroup);
		mamaclowConflict = L.featureGroup.subGroup(parentGroup);



	
		
    for (var i = 0; i < 10; i += 1) {  
	    L.geoJSON([croatia_poly], {style: croStyle}).addTo(croatia);
	    L.geoJSON([ex_yu], {style: yuStyle}).addTo(juga);
	    L.geoJSON([great_ser], {style: serStyle}).addTo(srbija);
		L.geoJSON([vu_26_08_91], {style: herStyle}). addTo(vu26_08_91);
	    L.geoJSON([mamac_26_08_91], {style: mamacstyle}).addTo(mamac25_09_91);
	    L.geoJSON([mamac_05_10_91], {style: mamacstyle}).addTo(mamac05_10_91);
	    L.geoJSON([mamac_10_11_91], {style: mamacstyle}).addTo(mamac10_11_91);
		L.geoJSON([sla_16_12_91], {style: herStyle}).addTo(sla16_12_91);
	    L.geoJSON([zap_sla_26_08_91], {style: herStyle}).addTo(zapsla_26_08_91);
	    L.geoJSON([zap_sla_25_09_91], {style: herStyle}).addTo(zapsla_25_09_91);
	    L.geoJSON([zap_sla_29_10_91], {style: herStyle}).addTo(zapsla_29_10_91);
	    L.geoJSON([zap_sla_12_11_91], {style: herStyle}).addTo(zapsla_12_11_91);
	    L.geoJSON([zap_sla_19_11_91], {style: herStyle}).addTo(zapsla_19_11_91);
	    L.geoJSON([zap_sla_17_12_91], {style: herStyle}).addTo(zapsla_17_12_91);
	    L.geoJSON([zap_sla_03_01_92], {style: herStyle}).addTo(zapsla_03_01_92);
	    L.geoJSON([mamac_ban_kor], {style: mamacstyle}).addTo(mamacban_kor);
	    L.geoJSON([mamac_lika], {style: mamacstyle}).addTo(mamaclika);
	    L.geoJSON([mamac_slunj], {style: mamacstyle}).addTo(mamacslunj);
	    L.geoJSON([mamac_zadar], {style: mamacstyle}).addTo(mamaczadar);
	    L.geoJSON([mamac_jug], {style: mamacstyle}).addTo(mamacjug);
	    L.geoJSON([mamac_dub], {style: mamacstyle}).addTo(mamacdub);
	    L.geoJSON([sarajevo_agr], {style: mamacstyle}).addTo(sarajevoagr);
	    L.geoJSON([jasenak], {style: mamacstyle}).addTo(mamacjas);
	    L.geoJSON([mamac_noska], {style: mamacstyle}).addTo(mamacnos);
	    L.geoJSON([mamac_milj], {style: mamacstyle}).addTo(mamacmilj);
	    L.geoJSON([unpa_sektori], {style: mamacstyle}).addTo(unpasektori);
		
	    L.geoJSON([mamac_kriz], {style: mamacstyle}).addTo(mamackriz);
	    L.geoJSON([smjer_napada], {style: smjernapadaStyle}).addTo(smjernapada);
	    L.geoJSON([mamac_masl], {style: mamacstyle}).addTo(mamacmasl);
	    L.geoJSON([mamac_slano], {style: mamacstyle}).addTo(mamacslano);
	    L.geoJSON([mamac_cavtat], {style: mamacstyle}).addTo(mamaccavtat);
	    L.geoJSON([mamac_peruca], {style: mamacstyle}).addTo(mamacperuca);
	    L.geoJSON([mamac_medak], {style: mamacstyle}).addTo(mamacmedak);
	    L.geoJSON([mamac_zima], {style: mamacstyle}).addTo(mamaczima);
	    L.geoJSON([mamac_bljesak], {style: mamacstyle}).addTo(mamacbljesak);
	    L.geoJSON([mamac_oluja3_8], {style: mamacstyle}).addTo(mamacoluja_3_8);
	    L.geoJSON([mamac_korban_3_8], {style: mamacstyle}).addTo(mamackorban_3_8);
	    L.geoJSON([mamac_lik_3_8], {style: mamacstyle}).addTo(mamaclik_3_8);
	    L.geoJSON([mamac_dal_3_8], {style: mamacstyle}).addTo(mamacdal_3_8);
	    L.geoJSON([mamac_lik_6_8], {style: mamacstyle}).addTo(mamaclik_6_8);
	    L.geoJSON([mamac_lik_7_8], {style: mamacstyle}).addTo(mamaclik_7_8);
	    L.geoJSON([mamac_korban_8_8], {style: mamacstyle}).addTo(mamackorban_8_8);
	    L.geoJSON([zap_sla_25_09_91], {style: mamacstyle}).addTo(mamaczapsla);
	    L.geoJSON([croatia_poly], {style: mamacstyle}).addTo(croatia2);
	    L.geoJSON([mamac_lowConflict], {style: mamacstyle}).addTo(mamaclowConflict);


	    }
		

//Log revolution markers 
	var log_revolution = L.geoJSON(roadblocks,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: stopIcon, riseOnHover: true, zIndexOffset: 1000});
		},
				onEachFeature: function(feature,layer)
            {
            layer.on("mouseover",function(e){
                layer.setIcon(stopIcon2);	
            });
			
            layer.on("mouseout",function(e){
                layer.setIcon(stopIcon)
            });
			
			
			
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.datum))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })
			
		log_revolution.addTo(logrevolution);

//Police stations markers
	var srpske_postaje = L.geoJSON(serpol_postaje,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: serbgrbIcon, riseOnHover: true, zIndexOffset: 1000});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(serbgrbIcon2);	
            });
			
            layer.on("mouseout",function(e){
                layer.setIcon(serbgrbIcon)
            });
			
			
			
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(5,-30), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })
			
	srpske_postaje.addTo(sr_postaje);

//JNA plan layer
			
	var jna_plan = L.geoJSON(jna_barracks,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: jna, riseOnHover: true, zIndexOffset: 1000});
		},
				onEachFeature: function(feature,layer)
            {
            layer.on("mouseover",function(e){
                layer.setIcon(jna2);	
            });
			
            layer.on("mouseout",function(e){
                layer.setIcon(jna)
            });
			
			
			
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-22), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })

//Sao Krajina layer
    var saokrajina = L.geoJSON(sao_krajina, {
		             style: saoStyle,
					 onEachFeature: function(feature, layer) {
            if (feature.properties && feature.properties.NAME_2) {
                layer.bindPopup('<p id = "popup">' + feature.properties.NAME_2, {closeButton: false, offset: L.point(0, -10)});
                layer.on('mouseover mousemove', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });
				layer.on('mouseover mousemove', function (e) {
	        	var layer = e.target;
            
	        	layer.setStyle({
	        		weight: 1,
	        		color: '#7f0000',
	        		fillOpacity: 0.5,
	        		fillColor: '#fc9272'
	        	});
            
	        	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
	        		layer.bringToFront();
	        	}
	          });
				
              }

			   layer.on('mouseout', function (e) {
				  saokrajina.resetStyle(e.target);
	          });
              }
		  });
			
		saokrajina.addTo(proclamation_sao);

			
//Open popup on hover for serb enclaves
		function serb_enclaves(feature, layer) {
            if (feature.properties && feature.properties.place) {
                layer.bindPopup('<p id = "popup">' + feature.properties.place, {closeButton: false, offset: L.point(0, -10)});
                layer.on('mouseover mousemove', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });
            }
        }			
			
			
	 
//UN pink zones	 
	  var pink = L.geoJSON(pink_zones, {
		             style: pinkStyle,
					 onEachFeature: function(feature, layer) {
            if (feature.properties && feature.properties.title) {
               layer.bindPopup('<p id = "popup">' + feature.properties.title, {closeButton: false});
                layer.on('mouseover mousemove', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });
				layer.on('mouseover mousemove', function (e) {
	        	var layer = e.target;
            
	        	layer.setStyle({
	        		weight: 1,
	        		color: '#800026',
	        		fillOpacity: 0.5,
	        		fillColor: '#fcc5c0'
	        	});
            
	        	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
	        		layer.bringToFront();
	        	}
	          });
				
              }

			   layer.on('mouseout', function (e) {
				  pink.resetStyle(e.target);
	          });
              }
		  });

//UNPA zones
    var unpa = L.geoJSON(unpa_sectors, {
		             style: unpaStyle,
					 onEachFeature: function(feature, layer) {
            if (feature.properties && feature.properties.title) {
               layer.bindPopup('<p id = "popup">' + feature.properties.title, {closeButton: false});
                layer.on('mouseover mousemove', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });
				layer.on('mouseover mousemove', function (e) {
	        	var layer = e.target;
            
	        	layer.setStyle({
	        		weight: 1,
	        		color: '#800026',
	        		fillOpacity: 0.5,
	        		fillColor: '#d9f0a3'
	        	});
            
	        	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
	        		layer.bringToFront();
	        	}
	          });
				
              }

			   layer.on('mouseout', function (e) {
				  unpa.resetStyle(e.target);
	          });
              }
		  });
		  
//UNPA zone under control of Croats
    var unpacro = L.geoJSON(unpa_sectorscro, {
		             style: unpacroStyle,
					 onEachFeature: function(feature, layer) {
            if (feature.properties && feature.properties.title) {
               layer.bindPopup('<p id = "popup">' + feature.properties.title, {closeButton: false});
                layer.on('mouseover mousemove', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });
				layer.on('mouseover mousemove', function (e) {
	        	var layer = e.target;
            
	        	layer.setStyle({
	        		weight: 1,
	        		color: '#800026',
	        		fillOpacity: 0.5,
	        		fillColor: '#74a9cf'
	        	});
            
	        	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
	        		layer.bringToFront();
	        	}
	          });
				
              }

			   layer.on('mouseout', function (e) {
				  unpacro.resetStyle(e.target);
	          });
              }
		  });
	
//sarajevo agreement layer
	var sar_hover = L.geoJSON(sarajevo_agr, {
		             style: sarStyle,
					 onEachFeature: function(feature, layer) {
            
               /* layer.bindPopup('<p id = "popup">' + feature.properties.title, {closeButton: false});
                layer.on('mouseover mousemove', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });*/
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
              }
		  });
	
	
//independence day		
var independenceDay = L.geoJSON(independence_day,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: hrgrbIcon1, riseOnHover: true, zIndexOffset: 1000});
			
		},
				onEachFeature: function(feature,layer)
            {
            layer.on("mouseover",function(e){
                layer.setIcon(hrgrbIcon2);	
            });
			
            layer.on("mouseout",function(e){
                layer.setIcon(hrgrbIcon1)
            });
			
			
			
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-30), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })
						
//low intensity period
var low_period = L.geoJSON(low_conflict,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: incident1, riseOnHover: true, zIndexOffset: 1000});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(incident2);	
            });
			
            layer.on("mouseout",function(e){
                layer.setIcon(incident1)
            });
			
			
			
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
			
		low_period.addTo(lowConflict);
			

//FLAGS --- positions of the armies
	var hrzas_26_8 = L.geoJSON(hrsnage_26_8_91,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_26_8.removeLayer(hr);
    }
    else {
            hrzas_26_8.addLayer(hr);
        }
});		
		}
		  })
		  
	var srzas_26_8 = L.geoJSON(srsnage_26_8_91,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_26_8.removeLayer(hr);
    }
    else {
            hrzas_26_8.addLayer(hr);
        }
});		
		}
		  })
			
	var hrzas_12_9 = L.geoJSON(hrsnage_12_9_91,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_12_9.removeLayer(hr);
    }
    else {
            hrzas_12_9.addLayer(hr);
        }
});		
		}
		  })
		  
	var srzas_12_9 = L.geoJSON(srsnage_12_9_91,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_12_9.removeLayer(hr);
    }
    else {
            hrzas_12_9.addLayer(hr);
        }
});		
		}
		  })		  

    var hrzas_21_9 = L.geoJSON(hrsnage_21_9_91,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_21_9.removeLayer(hr);
    }
    else {
            hrzas_21_9.addLayer(hr);
        }
});		
		}
		  })
		  
    var srzas_21_9 = L.geoJSON(srsnage_21_9_91,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_21_9.removeLayer(hr);
    }
    else {
            hrzas_21_9.addLayer(hr);
        }
});		
		}
		  })
		  

  var hrzas_26_9 = L.geoJSON(hrsnage_26_9_91,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_26_9.removeLayer(hr);
    }
    else {
            hrzas_26_9.addLayer(hr);
        }
});		
		}
		  })
		  
    var srzas_26_9 = L.geoJSON(srsnage_26_9_91,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_26_9.removeLayer(hr);
    }
    else {
            hrzas_26_9.addLayer(hr);
        }
});		
		}
		  })
		  
		  
	var hrzas_05_10 = L.geoJSON(hrsnage_05_10_91,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_05_10.removeLayer(hr);
    }
    else {
            hrzas_05_10.addLayer(hr);
        }
});		
		}
		  })
		 
    var srzas_05_10 = L.geoJSON(srsnage_05_10_91,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_05_10.removeLayer(hr);
    }
    else {
            hrzas_05_10.addLayer(hr);
        }
});		
		}
		  })
		  
	var hrzas_26_10 = L.geoJSON(hrsnage_26_10_91,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_26_10.removeLayer(hr);
    }
    else {
            hrzas_26_10.addLayer(hr);
        }
});		
		}
		  })
		 
    var srzas_26_10 = L.geoJSON(srsnage_26_10_91,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_26_10.removeLayer(hr);
    }
    else {
            hrzas_26_10.addLayer(hr);
        }
});		
		}
		  })
	
	var hrzas_12_11 = L.geoJSON(hrsnage_12_11_91,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_12_11.removeLayer(hr);
    }
    else {
            hrzas_12_11.addLayer(hr);
        }
});		
		}
		  })
		 
    var srzas_12_11 = L.geoJSON(srsnage_12_11_91,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_12_11.removeLayer(hr);
    }
    else {
            hrzas_12_11.addLayer(hr);
        }
});		
		}
		  })

	var hrzas_15_11 = L.geoJSON(hrsnage_15_11_91,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_15_11.removeLayer(hr);
    }
    else {
            hrzas_15_11.addLayer(hr);
        }
});		
		}
		  })
		 
    var srzas_15_11 = L.geoJSON(srsnage_15_11_91,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_15_11.removeLayer(hr);
    }
    else {
            hrzas_15_11.addLayer(hr);
        }
});		
		}
		  })
		  
    var hrzas_17_11 = L.geoJSON(hrsnage_17_11_91,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_17_11.removeLayer(hr);
    }
    else {
            hrzas_17_11.addLayer(hr);
        }
});		
		}
		  })
		 
    var srzas_17_11 = L.geoJSON(srsnage_17_11_91,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_17_11.removeLayer(hr);
    }
    else {
            hrzas_17_11.addLayer(hr);
        }
});		
		}
		  })
		  
     var hrzas_19_11 = L.geoJSON(hrsnage_19_11_91,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_19_11.removeLayer(hr);
    }
    else {
            hrzas_19_11.addLayer(hr);
        }
});		
		}
		  })
		 
    var srzas_19_11 = L.geoJSON(srsnage_19_11_91,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_19_11.removeLayer(hr);
    }
    else {
            hrzas_19_11.addLayer(hr);
        }
});		
		}
		  })
	
	 var hrzas_28_11 = L.geoJSON(hrsnage_28_11_91,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_28_11.removeLayer(hr);
    }
    else {
            hrzas_28_11.addLayer(hr);
        }
});		
		}
		  })
		 
    var srzas_28_11 = L.geoJSON(srsnage_28_11_91,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_28_11.removeLayer(hr);
    }
    else {
            hrzas_28_11.addLayer(hr);
        }
});		
		}
		  })
		  
	var hrzas_17_12 = L.geoJSON(hrsnage_17_12_91,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_17_12.removeLayer(hr);
    }
    else {
            hrzas_17_12.addLayer(hr);
        }
});		
		}
		  })
		 
    var srzas_17_12 = L.geoJSON(srsnage_17_12_91,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_17_12.removeLayer(hr);
    }
    else {
            hrzas_17_12.addLayer(hr);
        }
});		
		}
		  })
	
	
	var hrzas_03_01 = L.geoJSON(hrsnage_03_01_92,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_03_01.removeLayer(hr);
    }
    else {
            hrzas_03_01.addLayer(hr);
        }
});		
		}
		  })
		 
    var srzas_03_01 = L.geoJSON(srsnage_03_01_92,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_03_01.removeLayer(hr);
    }
    else {
            hrzas_03_01.addLayer(hr);
        }
});		
		}
		  })
	
	
	var hrzas_25_5 = L.geoJSON(hrsnage_25_5_93,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_25_5.removeLayer(hr);
    }
    else {
            hrzas_25_5.addLayer(hr);
        }
});		
		}
		  })
		 
    var srzas_25_5 = L.geoJSON(srsnage_25_5_93,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_25_5.removeLayer(hr);
    }
    else {
            hrzas_25_5.addLayer(hr);
        }
});		
		}
		  })
	
	var hrzas_28_5 = L.geoJSON(hrsnage_28_5_93,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_28_5.removeLayer(hr);
    }
    else {
            hrzas_28_5.addLayer(hr);
        }
});		
		}
		  })
		 
    var srzas_28_5 = L.geoJSON(srsnage_28_5_93,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_28_5.removeLayer(hr);
    }
    else {
            hrzas_28_5.addLayer(hr);
        }
});		
		}
		  })
	
	
	
	var hrzas_jasenak = L.geoJSON(hrsnage_jasenak,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_jasenak.removeLayer(hr);
    }
    else {
            hrzas_jasenak.addLayer(hr);
        }
});		
		}
		  })
		 
    var srzas_jasenak = L.geoJSON(srsnage_jasenak,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_jasenak.removeLayer(hr);
    }
    else {
            hrzas_jasenak.addLayer(hr);
        }
});		
		}
		  })
		  
	var hrzas_dubfree = L.geoJSON(hrsnage_dub_free,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_dubfree.removeLayer(hr);
    }
    else {
            hrzas_dubfree.addLayer(hr);
        }
});		
		}
		  })
		 
    var srzas_dubfree = L.geoJSON(srsnage_dub_free,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_dubfree.removeLayer(hr);
    }
    else {
            hrzas_dubfree.addLayer(hr);
        }
});		
		}
		  })
		  
	var hrzasmasl = L.geoJSON(hrsnage_masl,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzasmasl.removeLayer(hr);
    }
    else {
            hrzasmasl.addLayer(hr);
        }
});		
		}
		  })
		 
    var srzasmasl = L.geoJSON(srsnage_masl,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzasmasl.removeLayer(hr);
    }
    else {
            hrzasmasl.addLayer(hr);
        }
});		
		}
		  })
	
	var hrzas_peruca = L.geoJSON(hrsnage_peruca,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_peruca.removeLayer(hr);
    }
    else {
            hrzas_peruca.addLayer(hr);
        }
});		
		}
		  })
		 
    var srzas_peruca = L.geoJSON(srsnage_peruca,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_peruca.removeLayer(hr);
    }
    else {
            hrzas_peruca.addLayer(hr);
        }
});		
		}
		  })
		  
    var hrzas_medak = L.geoJSON(hrsnage_medak,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_medak.removeLayer(hr);
    }
    else {
            hrzas_medak.addLayer(hr);
        }
});		
		}
		  })
		 
    var srzas_medak = L.geoJSON(srsnage_medak,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_medak.removeLayer(hr);
    }
    else {
            hrzas_medak.addLayer(hr);
        }
});		
		}
		  })
	
	
	var hrzas_zima94 = L.geoJSON(hrsnage_zima94,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_zima94.removeLayer(hr);
    }
    else {
            hrzas_zima94.addLayer(hr);
        }
});		
		}
		  })
		 
    var srzas_zima94 = L.geoJSON(srsnage_medak,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_zima94.removeLayer(hr);
    }
    else {
            hrzas_zima94.addLayer(hr);
        }
});		
		}
		  })
		  
		  
	var hrzas_bljesak = L.geoJSON(hrsnage_ol_3_8,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_bljesak.removeLayer(hr);
    }
    else {
            hrzas_bljesak.addLayer(hr);
        }
});		
		}
		  })
		 
    var srzas_bljesak = L.geoJSON(srsnage_ol_3_8,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrzas_bljesak.removeLayer(hr);
    }
    else {
            hrzas_bljesak.addLayer(hr);
        }
});		
		}
		  })
		  
		  
		  
		  
		  
		  
		  
		  
	var hrzas_genol_4_8 = L.geoJSON(hrsnage_genol_4_8,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <8){
            hrzas_genol_4_8.removeLayer(hr);
    }
    else {
            hrzas_genol_4_8.addLayer(hr);
        }
});		
		}
		  })
		 
    var srzas_genol_4_8 = L.geoJSON(srsnage_genol_4_8,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <8){
            hrzas_genol_4_8.removeLayer(hr);
    }
    else {
            hrzas_genol_4_8.addLayer(hr);
        }
});		
		}
		  })
	
	var hrzas_ol_4_8 = L.geoJSON(hrsnage_ol_4_8,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <9){
            hrzas_ol_4_8.removeLayer(hr);
    }
    else {
            hrzas_ol_4_8.addLayer(hr);
        }
});		
		}
		  })
		 
    var srzas_ol_4_8 = L.geoJSON(srsnage_ol_4_8,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <9){
            hrzas_ol_4_8.removeLayer(hr);
    }
    else {
            hrzas_ol_4_8.addLayer(hr);
        }
});		
		}
		  })
	
	var hrzas_ol_5_8 = L.geoJSON(hrsnage_ol_5_8,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <9){
            hrzas_ol_5_8.removeLayer(hr);
    }
    else {
            hrzas_ol_5_8.addLayer(hr);
        }
});		
		}
		  })
		 
    var srzas_ol_5_8 = L.geoJSON(srsnage_ol_5_8,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <9){
            hrzas_ol_5_8.removeLayer(hr);
    }
    else {
            hrzas_ol_5_8.addLayer(hr);
        }
});		
		}
		  })	
	
	var hrzas_genol_6_8 = L.geoJSON(hrsnage_genol_6_8,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <8){
            hrzas_genol_6_8.removeLayer(hr);
    }
    else {
            hrzas_genol_6_8.addLayer(hr);
        }
});		
		}
		  })
		 
    var srzas_genol_6_8 = L.geoJSON(srsnage_genol_6_8,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <8){
            hrzas_genol_6_8.removeLayer(hr);
    }
    else {
            hrzas_genol_6_8.addLayer(hr);
        }
});		
		}
		  })
		  
    var hrzas_ol_6_8 = L.geoJSON(hrsnage_ol_6_8,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <9){
            hrzas_ol_6_8.removeLayer(hr);
    }
    else {
            hrzas_ol_6_8.addLayer(hr);
        }
});		
		}
		  })
		 
    var srzas_ol_6_8 = L.geoJSON(srsnage_ol_6_8,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <9){
            hrzas_ol_6_8.removeLayer(hr);
    }
    else {
            hrzas_ol_6_8.addLayer(hr);
        }
});		
		}
		  })	
		  hrzas_ol_6_8
		  
	var hrzas_genol_7_8 = L.geoJSON(hrsnage_genol_7_8,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <8){
            hrzas_genol_7_8.removeLayer(hr);
    }
    else {
            hrzas_genol_7_8.addLayer(hr);
        }
});		
		}
		  })
		 
    var srzas_genol_7_8 = L.geoJSON(srsnage_genol_7_8,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <8){
            hrzas_genol_7_8.removeLayer(hr);
    }
    else {
            hrzas_genol_7_8.addLayer(hr);
        }
});		
		}
		  })
	
	
	var hrzas_ol_7_8 = L.geoJSON(hrsnage_ol_7_8,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <9){
            hrzas_ol_7_8.removeLayer(hr);
    }
    else {
            hrzas_ol_7_8.addLayer(hr);
        }
});		
		}
		  })
		 
    var srzas_ol_7_8 = L.geoJSON(srsnage_ol_7_8,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <9){
            hrzas_ol_7_8.removeLayer(hr);
    }
    else {
            hrzas_ol_7_8.addLayer(hr);
        }
});		
		}
		  })	
		  hrzas_ol_7_8
	
	var hrzas_genol_8_8 = L.geoJSON(hrsnage_genol_8_8,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <8){
            hrzas_genol_8_8.removeLayer(hr);
    }
    else {
            hrzas_genol_8_8.addLayer(hr);
        }
});		
		}
		  })
		 
    var srzas_genol_8_8 = L.geoJSON(srsnage_genol_8_8,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <8){
            hrzas_genol_8_8.removeLayer(hr);
    }
    else {
            hrzas_genol_8_8.addLayer(hr);
        }
});		
		}
		  })
	
	var hrzas_genol_9_8 = L.geoJSON(hrsnage_genol_9_8,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <8){
            hrzas_genol_9_8.removeLayer(hr);
    }
    else {
            hrzas_genol_9_8.addLayer(hr);
        }
});		
		}
		  })
		 
    var srzas_genol_9_8 = L.geoJSON(srsnage_genol_9_8,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <8){
            hrzas_genol_9_8.removeLayer(hr);
    }
    else {
            hrzas_genol_9_8.addLayer(hr);
        }
});		
		}
		  })
	
	
	var hrzas_genol_10_8 = L.geoJSON(hrsnage_genol_10_8,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: hrzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <8){
            hrzas_genol_10_8.removeLayer(hr);
    }
    else {
            hrzas_genol_10_8.addLayer(hr);
        }
});		
		}
		  })
		 
    var srzas_genol_10_8 = L.geoJSON(srsnage_genol_10_8,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <8){
            hrzas_genol_10_8.removeLayer(hr);
    }
    else {
            hrzas_genol_10_8.addLayer(hr);
        }
});		
		}
		  })
	
//Layers of occupied territory
	var vu_pocetak = L.geoJSON([vu_26_08_91], {style: yourStyle});
	var vu_drugi = L.geoJSON([vu_12_09_91], {style: yourStyle});
	var marinci = L.geoJSON([vu_25_09_91], {style: yourStyle});
    var mar = L.geoJSON([vu_05_10_91], {style: yourStyle});
	var connection = L.geoJSON([vu_26_10_91], {style: yourStyle});
	var bogdanovci = L.geoJSON([vu_10_11_91], {style: yourStyle});
	var two_parts = L.geoJSON([vu_17_11_91], {style: yourStyle});
	var vukovar_fall = L.geoJSON([vu_19_11_91], {style: yourStyle});
	var laslovo = L.geoJSON([sla_21_11_91], {style: yourStyle});
	var paudvor = L.geoJSON([sla_16_12_91], {style: yourStyle});
    var zapsla_prvi = L.geoJSON([zap_sla_26_08_91], {style: yourStyle});
	var zapsla_izmedu = L.geoJSON([zap_sla_12_09_91], {style: yourStyle});
    var zapsla_drugi = L.geoJSON([zap_sla_25_09_91], {style: yourStyle});
	var zapsla_treci = L.geoJSON([zap_sla_29_10_91], {style: yourStyle});
    var zapsla_cetvrti = L.geoJSON([zap_sla_12_11_91], {style: yourStyle});
    var zapsla_peti = L.geoJSON([zap_sla_19_11_91], {style: yourStyle});
	var zapsla_peses = L.geoJSON([zap_sla_28_11_91], {style: yourStyle});
	var zapsla_sesti = L.geoJSON([zap_sla_17_12_91], {style: yourStyle});
    var zapsla_sedmi = L.geoJSON([zap_sla_03_01_92], {style: yourStyle});
	var krajina_prvi = L.geoJSON([krajina_26_8_91], {style: yourStyle});
	var krajina_drugi = L.geoJSON([krajina_12_9_91], {style: yourStyle});
	var krajina_21 = L.geoJSON([krajina_21_9_91], {style: yourStyle});
	var krajina_treci = L.geoJSON([krajina_25_9_91], {style: yourStyle});
	var krajina_cetvrti = L.geoJSON([krajina_05_10_91], {style: yourStyle});
	var krajina_peti = L.geoJSON([krajina_26_10_91], {style: yourStyle});
	var krajina_sesti = L.geoJSON([krajina_11_11_91], {style: yourStyle});
    var krajina_sedmi = L.geoJSON([krajina_17_11_91], {style: yourStyle});
	var krajina_osmi = L.geoJSON([krajina_19_11_91], {style: yourStyle});
	var krajina_izmedu = L.geoJSON([krajina_28_11_91], {style: yourStyle});
	var krajina_deveti = L.geoJSON([krajina_17_12_91], {style: yourStyle});
	var krajina_deseti = L.geoJSON([krajina_01_01_92], {style: yourStyle});
	var jug_prvo = L.geoJSON([jug_05_10_91], {style: yourStyle});
    var jug_drugi = L.geoJSON([jug_26_10_91], {style: yourStyle});
    var jug_treci = L.geoJSON([jug_15_11_91], {style: yourStyle});
    var jug_cetvrti = L.geoJSON([jug_21_11_91], {style: yourStyle});
    var jug_peti = L.geoJSON([jug_17_12_91], {style: yourStyle});
	var jas = L.geoJSON([jasenak], {style: yourStyle, onEachFeature: serb_enclaves});
	var sar = L.geoJSON([sarajevo_agr], {style: yourStyle});
	var sar2 = L.geoJSON([sarajevo_agr2], {style: yourStyle});
	var sar3 = L.geoJSON([sarajevo_agr3], {style: yourStyle});
	var sar4 = L.geoJSON([sarajevo_dub_7_5], {style: yourStyle});
	var sar5 = L.geoJSON([sarajevo_blockriz], {style: yourStyle});
	var sar6 = L.geoJSON([sarajevo_dub_22_5], {style: yourStyle});
	var sar7 = L.geoJSON([sarajevo_freekriz], {style: yourStyle});
	var sar8 = L.geoJSON([sarajevo_dub_25_5], {style: yourStyle});	
	var sar9 = L.geoJSON([sarajevo_dub_26_5], {style: yourStyle});
	var sar10 = L.geoJSON([sarajevo_dub_28_5], {style: yourStyle});
	var sar11 = L.geoJSON([sarajevo_agr_milj], {style: yourStyle});
	var sar12 = L.geoJSON([sarajevo_dub_21_10], {style: yourStyle});
	var sar13 = L.geoJSON([sarajevo_dub_free], {style: yourStyle});
	var masl_prvi = L.geoJSON([masl_22_01_93], {style: yourStyle});
	var masl_drugi = L.geoJSON([masl_27_01_93], {style: yourStyle});



//Directions of military attack
var ostatak = L.geoJSON([zap_sla_mir_sar], {style: yourStyle});
	var nos_strela = L.geoJSON([nos_kalik_strela], {style: strelacroStyle, filter: filter20});
 function filter20(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            nos_strela.removeLayer(hr);
    }
    else {
            nos_strela.addLayer(hr);
        }
});		
		}
	var kriz_strela = L.geoJSON([brdo_kriz_strela], {style: strelacroStyle, filter: filter21});
 function filter21(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            kriz_strela.removeLayer(hr);
    }
    else {
            kriz_strela.addLayer(hr);
        }
});	
 }
	var milj_strela = L.geoJSON([miljevci_strela], {style: strelacroStyle, filter: filter22});
 function filter22(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            milj_strela.removeLayer(hr);
    }
    else {
            milj_strela.addLayer(hr);
        }
});	
 }



	var maslstrela = L.geoJSON([masl_strela], {style: strelacroStyle, filter: filter33});
 function filter33(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            maslstrela.removeLayer(hr);
    }
    else {
            maslstrela.addLayer(hr);
        }
});	
 }	
	
	var dub_strelaprvi = L.geoJSON([dub_strela1], {style: strelacroStyle, filter: filter23});
 function filter23(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            dub_strelaprvi.removeLayer(hr);
    }
    else {
            dub_strelaprvi.addLayer(hr);
        }
});	
 }
	var dub_streladrugi = L.geoJSON([dub_strela2], {style: strelacroStyle, filter: filter24});
 function filter24(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            dub_streladrugi.removeLayer(hr);
    }
    else {
            dub_streladrugi.addLayer(hr);
        }
});	
 }
	var dub_strelatreci = L.geoJSON([dub_strela3], {style: strelacroStyle, filter: filter25});
 function filter25(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            dub_strelatreci.removeLayer(hr);
    }
    else {
            dub_strelatreci.addLayer(hr);
        }
});	
 }
	var dub_strelacetvrti = L.geoJSON([dub_strela4], {style: strelacroStyle, filter: filter26});
 function filter26(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            dub_strelacetvrti.removeLayer(hr);
    }
    else {
            dub_strelacetvrti.addLayer(hr);
        }
});	
 }
	var dub_strelapeti = L.geoJSON([dub_strela5], {style: strelacroStyle, filter: filter27});
 function filter27(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            dub_strelapeti.removeLayer(hr);
    }
    else {
            dub_strelapeti.addLayer(hr);
        }
});	
 }
	var dub_strelasesti = L.geoJSON([dub_strela6], {style: strelacroStyle, filter: filter28});
 function filter28(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            dub_strelasesti.removeLayer(hr);
    }
    else {
            dub_strelasesti.addLayer(hr);
        }
});	
 }
	var dub_strelasedmi = L.geoJSON([dub_strela7], {style: strelacroStyle, filter: filter29});
 function filter29(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            dub_strelasedmi.removeLayer(hr);
    }
    else {
            dub_strelasedmi.addLayer(hr);
        }
});	
 }
	var dub_strelaosmi = L.geoJSON([dub_strela8], {style: strelacroStyle, filter: filter30});
 function filter30(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            dub_strelaosmi.removeLayer(hr);
    }
    else {
            dub_strelaosmi.addLayer(hr);
        }
});	
 }
	var strelaperuca = L.geoJSON([strela_peruca], {style: strelacroStyle, filter: filter31});
 function filter31(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            strelaperuca.removeLayer(hr);
    }
    else {
            strelaperuca.addLayer(hr);
        }
});	
 }
	
	var peruca = L.geoJSON([peruca_28_01], {style: yourStyle});
	var strelamedak = L.geoJSON([strela_medak], {style: strelacroStyle, filter: filter32});
 function filter32(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            strelamedak.removeLayer(hr);
    }
    else {
            strelamedak.addLayer(hr);
        }
});	
 }
	var medak = L.geoJSON([medak_9_9], {style: yourStyle});
	var zimastrela = L.geoJSON([zima_strela], {style: strelacroStyle, filter: filter34});
 function filter34(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            zimastrela.removeLayer(hr);
    }
    else {
            zimastrela.addLayer(hr);
        }
});	
 }
	var zima94 = L.geoJSON([zima_94], {style: yourStyle});
	var skokstrela = L.geoJSON([skok_strela], {style: strelacroStyle, filter: filter35});
 function filter35(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            skokstrela.removeLayer(hr);
    }
    else {
            skokstrela.addLayer(hr);
        }
});	
 }
	var skok1 = L.geoJSON([skok_1], {style: yourStyle});
	var bljesakstrela = L.geoJSON([bljesak_strela], {style: strelacroStyle, filter: filter36});
 function filter36(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            bljesakstrela.removeLayer(hr);
    }
    else {
            bljesakstrela.addLayer(hr);
        }
});	
 }
	var oluja_3_8 = L.geoJSON([oluja_3_8_95], {style: yourStyle});
	var strelaol_3_8 = L.geoJSON([strelaol_3_8], {style: strelacroStyle, filter: filter37});
 function filter37(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <9){
            strelaol_3_8.removeLayer(hr);
    }
    else {
            strelaol_3_8.addLayer(hr);
        }
});	
 }
	
	var strelageneol_3_8 = L.geoJSON([strela_geneol_3_8], {style: strelacroStyle, filter: filter38});
 function filter38(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <8){
            strelageneol_3_8.removeLayer(hr);
    }
    else {
            strelageneol_3_8.addLayer(hr);
        }
});	
 }
	var oluja_4_8 = L.geoJSON([oluja_4_8_95], {style: yourStyle});
	var strelaol_4_8 = L.geoJSON([strelaol_4_8], {style: strelacroStyle, filter: filter39});
 function filter39(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <9){
            strelaol_4_8.removeLayer(hr);
    }
    else {
            strelaol_4_8.addLayer(hr);
        }
});	
 }
	var strela_geneol_4_8 = L.geoJSON([strela_geneol_4_8], {style: strelacroStyle, filter: filter40});
function filter40(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <8){
            strela_geneol_4_8.removeLayer(hr);
    }
    else {
            strela_geneol_4_8.addLayer(hr);
        }
});	
 }	
	var oluja_5_8 = L.geoJSON([oluja_5_8_95], {style: yourStyle});
	var strelaol_5_8 = L.geoJSON([strelaol_5_8], {style: strelacroStyle, filter: filter41});
 function filter41(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <9){
            strelaol_5_8.removeLayer(hr);
    }
    else {
            strelaol_5_8.addLayer(hr);
        }
});	
 }	
	var strela_geneol_5_8 = L.geoJSON([strela_geneol_5_8], {style: strelacroStyle, filter: filter42});
function filter42(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <8){
            strela_geneol_5_8.removeLayer(hr);
    }
    else {
            strela_geneol_5_8.addLayer(hr);
        }
});	
 }
	var oluja_6_8 = L.geoJSON([oluja_6_8_95], {style: yourStyle});
	var strela_geneol_6_8 = L.geoJSON([strela_geneol_6_8], {style: strelacroStyle, filter: filter43});
function filter43(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <8){
            strela_geneol_6_8.removeLayer(hr);
    }
    else {
            strela_geneol_6_8.addLayer(hr);
        }
});	
 }	
	var strelaol_6_8 = L.geoJSON([strelaol_6_8], {style: strelacroStyle, filter: filter44});
 function filter44(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <9){
            strelaol_6_8.removeLayer(hr);
    }
    else {
            strelaol_6_8.addLayer(hr);
        }
});	
 }		
	var oluja_7_8 = L.geoJSON([oluja_7_8_95], {style: yourStyle});
	var strela_geneol_7_8 = L.geoJSON([strela_geneol_7_8], {style: strelacroStyle, filter: filter45});
function filter45(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <8){
            strela_geneol_7_8.removeLayer(hr);
    }
    else {
            strela_geneol_7_8.addLayer(hr);
        }
});	
 }		
	var strelaol_7_8 = L.geoJSON([strelaol_7_8], {style: strelacroStyle, filter: filter46});
 function filter46(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <9){
            strelaol_7_8.removeLayer(hr);
    }
    else {
            strelaol_7_8.addLayer(hr);
        }
});	
 }		
	var oluja_8_8 = L.geoJSON([oluja_8_8_95], {style: yourStyle});
	var strela_geneol_8_8 = L.geoJSON([strela_geneol_8_8], {style: strelacroStyle, filter: filter47});
function filter47(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <8){
            strela_geneol_8_8.removeLayer(hr);
    }
    else {
            strela_geneol_8_8.addLayer(hr);
        }
});	
 }		
	var strelaol_8_8 = L.geoJSON([strelaol_8_8], {style: strelacroStyle, filter: filter48});
function filter48(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <9){
            strelaol_8_8.removeLayer(hr);
    }
    else {
            strelaol_8_8.addLayer(hr);
        }
});	
 }		
    var oluja_9_8 = L.geoJSON([oluja_9_8_95], {style: yourStyle});
	var strelaol_9_8 = L.geoJSON([strelaol_9_8], {style: strelacroStyle, filter: filter49});
function filter49(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <9){
            oluja_9_8.removeLayer(hr);
    }
    else {
            oluja_9_8.addLayer(hr);
        }
});	
 }		
	
	
	
	
	var srstrela26_28 = L.geoJSON([srstrela_26_28], {style: strelayuStyle, filter: filter});
 function filter(feature) {
    var hr = L.geoJSON(feature, {style: strelayuStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            srstrela26_28.removeLayer(hr);
    }
    else {
            srstrela26_28.addLayer(hr);
        }
});		
		}
		
	//srstrela26_28.setZIndex(1100);

	
	var srstrela12_09 = L.geoJSON([srstrela_12_09], {style: strelayuStyle, filter: filter2});
function filter2(feature) {
    var hr = L.geoJSON(feature, {style: strelayuStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            srstrela12_09.removeLayer(hr);
    }
    else {
            srstrela12_09.addLayer(hr);
        }
});		
		}  
	var srstrela21_09 = L.geoJSON([srstrela_21_09], {style: strelayuStyle, filter: filter3});
function filter3(feature) {
    var hr = L.geoJSON(feature, {style: strelayuStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            srstrela21_09.removeLayer(hr);
    }
    else {
            srstrela21_09.addLayer(hr);
        }
});		
		}  
	var srstrela26_09 = L.geoJSON([srstrela_26_09], {style: strelayuStyle, filter: filter4});
function filter4(feature) {
    var hr = L.geoJSON(feature, {style: strelayuStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            srstrela26_09.removeLayer(hr);
    }
    else {
            srstrela26_09.addLayer(hr);
        }
});		
		}  
	var srstrela05_10 = L.geoJSON([srstrela_05_10], {style: strelayuStyle, filter: filter5});
function filter5(feature) {
    var hr = L.geoJSON(feature, {style: strelayuStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            srstrela05_10.removeLayer(hr);
    }
    else {
            srstrela05_10.addLayer(hr);
        }
});		
		} 
	var hrstrela21_09 = L.geoJSON([hrstrela_21_09], {style: strelacroStyle, filter: filter6});
function filter6(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrstrela21_09.removeLayer(hr);
    }
    else {
            hrstrela21_09.addLayer(hr);
        }
});		
		} 
	var hrstrela05_10 = L.geoJSON([hrstrela_05_10], {style: strelacroStyle, filter: filter7});
function filter7(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrstrela05_10.removeLayer(hr);
    }
    else {
            hrstrela05_10.addLayer(hr);
        }
});		
		} 
	var srstrela26_10 = L.geoJSON([srstrela_26_10], {style: strelayuStyle, filter: filter8});
function filter8(feature) {
    var hr = L.geoJSON(feature, {style: strelayuStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            srstrela26_10.removeLayer(hr);
    }
    else {
            srstrela26_10.addLayer(hr);
        }
});		
		} 
	var hrstrela29_10 = L.geoJSON([hrstrela_29_10], {style: strelacroStyle, filter: filter9});
function filter9(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrstrela29_10.removeLayer(hr);
    }
    else {
            hrstrela29_10.addLayer(hr);
        }
});		
		} 
	var hrstrela11_11 = L.geoJSON([hrstrela_11_11], {style: strelacroStyle, filter: filter10});
function filter10(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrstrela11_11.removeLayer(hr);
    }
    else {
            hrstrela11_11.addLayer(hr);
        }
});	
}
	var srstrela11_11 = L.geoJSON([srstrela_11_11], {style: strelayuStyle, filter: filter11});
function filter11(feature) {
    var hr = L.geoJSON(feature, {style: strelayuStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            srstrela11_11.removeLayer(hr);
    }
    else {
            srstrela11_11.addLayer(hr);
        }
});	
}
	var srstrela17_11 = L.geoJSON([srstrela_17_11], {style: strelayuStyle, filter: filter12});
function filter12(feature) {
    var hr = L.geoJSON(feature, {style: strelayuStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            srstrela17_11.removeLayer(hr);
    }
    else {
            srstrela17_11.addLayer(hr);
        }
});
}	
	var srstrela19_11 = L.geoJSON([srstrela_19_11], {style: strelayuStyle, filter: filter13});
function filter13(feature) {
    var hr = L.geoJSON(feature, {style: strelayuStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            srstrela19_11.removeLayer(hr);
    }
    else {
            srstrela19_11.addLayer(hr);
        }
});	
}
	var srstrela21_11 = L.geoJSON([srstrela_21_11], {style: strelayuStyle, filter: filter14});
function filter14(feature) {
    var hr = L.geoJSON(feature, {style: strelayuStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            srstrela21_11.removeLayer(hr);
    }
    else {
            srstrela21_11.addLayer(hr);
        }
});	
}
	var srstrela28_11 = L.geoJSON([srstrela_28_11], {style: strelayuStyle, filter: filter15});
function filter15(feature) {
    var hr = L.geoJSON(feature, {style: strelayuStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            srstrela28_11.removeLayer(hr);
    }
    else {
            srstrela28_11.addLayer(hr);
        }
});	
}
	var srstrela17_12 = L.geoJSON([srstrela_17_12], {style: strelayuStyle, filter: filter16});
function filter16(feature) {
    var hr = L.geoJSON(feature, {style: strelayuStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            srstrela17_12.removeLayer(hr);
    }
    else {
            srstrela17_12.addLayer(hr);
        }
});	
}
	var hrstrela28_11 = L.geoJSON([hrstrela_28_11], {style: strelacroStyle, filter: filter17});
function filter17(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrstrela28_11.removeLayer(hr);
    }
    else {
            hrstrela28_11.addLayer(hr);
        }
});	
}
	var hrstrela17_12 = L.geoJSON([hrstrela_17_12], {style: strelacroStyle, filter: filter18});
function filter18(feature) {
    var hr = L.geoJSON(feature, {style: strelacroStyle});
		map.on('zoomend', function() {
    if (map.getZoom() <10){
            hrstrela17_12.removeLayer(hr);
    }
    else {
            hrstrela17_12.addLayer(hr);
        }
});
}

	
//Control tree --- layer switcher
    var overlaysTree = {
		
        label: '<big><b>The Homeland war</b></big>',
        children: [
			{label: '<div id="onlysel" class="group"></div>'},
            {label: '<big><b>Territories</b></big>', children: [
			    {label: 'Republic of Croatia <i>(click on polygon)<i>', layer: croatia},
                {label: 'Former Yugoslavia <i>(click on polygon)<i>', layer: juga},
				{label: 'The idea of Great Serbia <i>(click on polygon)<i>', layer: srbija},

            ]},
		    {label: '<div id="onlysel" class="group"></div>'},
                {label: '<big><b>Warfare</b></big>', children: [
			    {label: '<div id="onlysel" class="group"></div>'},
				{label: '<big><b>1990</b></big>', children: [ 
				    {label: '<div id="onlysel" class="line"><hr>' + 
					'&nbsp;&nbsp;&nbsp;&nbsp;' + '● By the fall of the Berlin Wall the democratic changes that began all over the' + '<br>' +
  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'Europe has also caused changes in Yugoslavia. With the political program' + '<br>' +
  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'of establishing the Croatian state, the Croatian Democratic Union (HDZ), led' + '<br>' +
  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'by Franjo Tuđman, won at the first multiparty elections held in late April' + '<br>' + 
  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'and early May 1990. Most of Serbs in Croatia, under the influence of propaganda' + '<br>' +
  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'and Serbian agressive nationalist rallies held since the mid - 80s throughout' + '<br>' +
  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'Yugoslavia, could not reconciled with that victory and therefore announced a' + '<br>' +
  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'referendum on Serbian autonomy and their determination towards Yugoslavia.' + '<br>' +
  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'Croatian authorities have said that they will prevent it, so the rebel Serbs' + '<br>' +
  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'blocked the roads a few the days before the planned referendum and started' + '<br>' +
  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'setting up checkpoints with armed guards on the approaches to the areas' + '<br>' +
  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'where they had the most of population.' + '<hr></div>'},
					{label: "17.08.1990. - <b>'Log revolution' in the areas with Serbian population majority</b>", layer: L.featureGroup ([logrevolution])},
					{label: '<div id="onlysel" class="line"><hr>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;' + '● After the referendum on which only Serbs voted and expressed their' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'commitment to Yugoslavia, so-called "Serbian Autonomous Oblast (SAO)' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'Krajina" was proclaimed and almost all municipalities with a Serb majority were' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'soon included to it. Then, the rest of the Serbian population which have lived' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'near by, but in the municipalities with Croatian majority, start to separate' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'their local communities and join to SAO Krajina.' + '<hr></div>'},
				
				{label: '21.12.1990. - <b>The proclamation of the Serbian Autonomous Oblast (SAO)' + '<br>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'Krajina</b>', layer: L.featureGroup ([proclamation_sao])},
				]},
				{label: '<div id="onlysel" class="group"></div>'},
				{label: '<small>Source:' + '<br>' + 'Marijan, D.(2016) The Homeland War. Zagreb: Croatian Institute of History and Despot infinitus.</small>'},
				{label: '<div id="onlysel" class="hrline"></div>'},
					{label: '<big><b>1991</b></big>', children: [ 
					{label: '<div id="onlysel" class="line"><hr>' + '&nbsp;&nbsp;&nbsp;&nbsp;' +
'● After seizing weapons from police warehouses and canceling obedience to' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
  'most police stations in places with a Serbian majority, the leadership of so-called' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
  'SAO Krajina has established an autonomous Secretariat of the Internal Affairs' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
  'of SAO Krajina. The Ministry of Internal Affairs (MUP) of the Republic of Croatia' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
  'has been informed that its police patrols will not be tolerated. After that,' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
  'the regular contact with MUP of Croatia was interrupted.' + '<hr></div>'},
					{label: '04.01.1991 - <b>The establishment of an autonomous Secretariat of the of' 
					+ '<br>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'Internal Affairs of SAO Krajina</b>', layer: L.featureGroup ([sr_postaje])},
					{label: '<div id="onlysel" class="line"><hr>' + '&nbsp;&nbsp;&nbsp;&nbsp;' +
  '● From 1 March 1991 and the first armed conflict between the rebel Serbs' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
  'and the Croatian police in Pakrac, Croatia has been in a low-intensity conflict.' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
  'This situation deteriorated from month to month, so to protect the Croatian' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +  
  'population in rebel areas the Croatian police has established police' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
  'stations in settlements with the majority Croat population, for which JNA' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
  'was openly opposed. At the same time, the JNA has established a buffer' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
  'zones between the conflicting sides under the guise of establishing order' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
  'and peace. Their presence and provocations of the Croatian police, who at' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
  'that time were ordered not to cause conflicts with them, has encouraged' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
  'rebel Serbs for further attacks. The real purpose of these zones was to' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
  'prevent Croatian authorities from stifling the Serbian rebellion and thereby' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
 'spreading the borders of SAO Krajina.' + '<hr></div>'},
					
					{label: 'March - July - <b>Low-intensity conflict</b>', layer: L.featureGroup ([mamaclowConflict, independenceDay, lowConflict])},
{label: '<div id="onlysel" class="line"><hr>' + '&nbsp;&nbsp;&nbsp;&nbsp;' +
 '● Following the proclamation of Croatian independence, the rebel Serbs' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +  
'strengthened their armed actions on almost all the areas in which they were' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
'in large numbers. In the second half of August, the JNA begins to take over' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
'the primacy of causing conflicts and abducting Croatian territory. On these' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
'events, the Croatian government responded by blocking and attacking most of' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
'the JNA barracks and warehouses on its territory. The JNA thus received the' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
'excuse for even more open enemy activities on the Croatian state, presenting' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
'it as a justified response to the attacks. On the order of Croatian leadership' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
'from 12 September 1991 for the blockade of military facilities, the JNA' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
'reacted by activating the war plan that was agreed upon the end of July 1991.' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
'By the mid - October, the penetration of the JNA into the depths of the Croatian' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
'territory was mostly halted and their plan was only partially realized.'  + '<hr></div>'},
					{label: 'July - <b>The plan of the Yugoslav People´s Army (JNA) to attack Croatia</b>', layer: L.featureGroup ([smjernapada, jna_plan])},
	    {label: '<div id="onlysel" class="group"></div>'},
		{label: '<big><b>Eastern Slavonia front</b></big> <i>(zoom to feature)</i>', children: [ 
					{label: '26.08.1991.', layer: L.featureGroup ([vu26_08_91, zapsla_prvi, krajina_prvi, jas, hrzas_26_8, srstrela26_28])},
					{label: '<div id="onlysel" class="line"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Battle of Vukovar</b></div>'},
					{label: '26.09.1991.', layer: L.featureGroup ([mamac25_09_91, marinci, zapsla_drugi, krajina_treci, jas, hrzas_26_9, srstrela26_09])},
					{label: '05.10.1991. - <b>Fall of Marinci</b>', layer: L.featureGroup ([mamac05_10_91, mar, zapsla_treci, krajina_cetvrti, jug_prvo, jas, hrzas_05_10, srstrela05_10, hrstrela05_10])},
					{label: '26.10.1991. - <b>End of connection Bogdanovci - Vukovar</b>', layer: L.featureGroup ([mamac05_10_91, connection, zapsla_treci, krajina_peti, jug_drugi, jas, hrzas_26_10, srstrela26_10])},
					{label: '11.11.1991. - <b>Fall of Bogdanovci</b>', layer: L.featureGroup ([mamac10_11_91, bogdanovci, krajina_sesti, zapsla_cetvrti, jug_drugi, jas, hrzas_12_11, hrstrela11_11, srstrela11_11])},
                   	{label: '17.11.1991. - <b>Vukovar before surrender</b>', layer: L.featureGroup ([mamac10_11_91, two_parts, zapsla_cetvrti, krajina_sedmi, jug_treci, jas, hrzas_17_11, hrstrela28_11, srstrela17_11])},
                   	{label: '19.11.1991. - <b>Fall of Vukovar </b>', layer: L.featureGroup ([mamac10_11_91, vukovar_fall, zapsla_peti, krajina_osmi, jug_treci, jas, hrzas_19_11, hrstrela28_11, srstrela19_11])},
					{label: '21.11.1991.', layer: L.featureGroup ([mamac25_09_91, laslovo, zapsla_peti, krajina_osmi, jug_cetvrti, jas, hrzas_19_11, srstrela21_11, hrstrela28_11])},
				    {label: '<div id="onlysel" class="line"><b>&nbsp;&nbsp;&nbsp;&nbsp;Eastern Slavonia</b></div>'},
                   	{label: '17.12.1991.', layer: L.featureGroup ([sla16_12_91, zapsla_sesti, krajina_deveti, jug_peti, jas, hrzas_17_12, srstrela17_12, hrstrela17_12])},
                ]},		
		{label: '<div id="onlysel" class="group"></div>'},
		{label: '<big><b>Western Slavonia front</b></big> <i>(zoom to feature)</i>', children: [ 
					{label: '26.08.1991.', layer: L.featureGroup ([mamaczapsla, zapsla_26_08_91, vu_pocetak, krajina_prvi, jas, hrzas_26_8, srstrela26_28])},
					{label: '26.09.1991.', layer: L.featureGroup ([zapsla_25_09_91, marinci, krajina_treci, jas, hrzas_26_9, srstrela26_09])},
					{label: '<div id="onlysel" class="line"><hr>' + '&nbsp;&nbsp;&nbsp;&nbsp;' +
'● The first liberation of Croatian territories by the Croatian Army' + '<hr></div>'},
					{label: "29.10.1991. - <b>Operation 'Swath 10' and 'Hurricane 91'</b>", layer: L.featureGroup ([mamaczapsla, zapsla_29_10_91, connection, krajina_peti, jug_drugi, jas, hrzas_26_10, srstrela26_10, srstrela26_10, hrstrela29_10])},
					{label: "11.11.1991. - <b>Operation 'Hurricane 91'</b>", layer: L.featureGroup ([mamaczapsla, zapsla_12_11_91, bogdanovci, krajina_sesti, jug_drugi, jas, hrzas_12_11, hrstrela11_11, srstrela11_11])},
					{label: "19.11.1991. - <b>Operation 'Hurricane 91'</b>", layer: L.featureGroup ([mamaczapsla, zapsla_19_11_91, vukovar_fall, krajina_osmi, jug_treci, jas, hrzas_19_11, hrstrela28_11, srstrela19_11])},
					{label: "17.12.1991. - <b>Operation 'Hurricane 91'</b>", layer: L.featureGroup ([mamaczapsla, zapsla_17_12_91, paudvor, krajina_deveti, jug_peti, jas, hrzas_17_12, srstrela17_12, hrstrela17_12])},
                ]},
		{label: '<div id="onlysel" class="group"></div>'},
		{label: '<big><b>Banovina and Kordun front</b></big> <i>(zoom to feature)</i>', children: [ 
					{label: '26.08.1991.', layer: L.featureGroup ([mamacban_kor, zapsla_prvi, vu_pocetak, krajina_prvi, jas, hrzas_26_8, srstrela26_28])},
					{label: '12.09.1991. - <b>Day before the fall of Topusko and Hrvatska Kostajnica</b>', layer: L.featureGroup ([mamacban_kor, krajina_drugi, vu_drugi, zapsla_izmedu, jas, hrzas_12_9, srstrela12_09])},
				    {label: '21.09.1991. - <b>Fall of Petrinja </b>', layer: L.featureGroup ([mamacban_kor, krajina_21, vu_drugi, zapsla_izmedu, jas, hrzas_21_9, srstrela21_09, hrstrela21_09])},
					{label: '26.09.1991.', layer: L.featureGroup ([mamacban_kor,  marinci, zapsla_drugi, krajina_treci, jas, hrzas_26_9, srstrela26_09])},
					{label: '05.10.1991.', layer: L.featureGroup ([mamacban_kor,  mar, zapsla_treci, krajina_cetvrti, jug_prvo, jas, hrzas_05_10, srstrela05_10, hrstrela05_10])},
					{label: '26.10.1991. - <b>Fall of Hrvatski Blagaj</b>', layer: L.featureGroup ([mamacban_kor, connection, zapsla_treci, krajina_peti, jug_drugi, jas, hrzas_26_10, srstrela26_10])},
					{label: '11.11.1991. ', layer: L.featureGroup ([mamacban_kor, bogdanovci, krajina_sesti, zapsla_cetvrti, jug_drugi, jas, hrzas_12_11, hrstrela11_11, srstrela11_11])},
					{label: '17.11.1991. - <b>Fall of Slunj </b>', layer: L.featureGroup ([mamacban_kor,two_parts, zapsla_cetvrti, krajina_sedmi, jug_treci, jas, hrzas_17_11, hrstrela28_11, srstrela17_11])},
					{label: '28.11.1991. - <b>Fall of Cetingrad</b>', layer: L.featureGroup ([mamacban_kor,paudvor,zapsla_peses, krajina_izmedu, jug_cetvrti, jas, hrzas_28_11, srstrela28_11, hrstrela28_11])},
                ]},
		{label: '<div id="onlysel" class="group"></div>'},
		{label: '<big><b>Lika front</b></big> <i>(zoom to feature)</i>', children: [ 
					{label: '26.08.1991.', layer: L.featureGroup ([mamaclika, zapsla_prvi, vu_pocetak, krajina_prvi, jas, hrzas_26_8, srstrela26_28])},
					{label: '12.09.1991. - <b>Serbian attacks on Gospić </b>', layer: L.featureGroup ([mamaclika, krajina_drugi, vu_drugi, zapsla_izmedu, jas, hrzas_12_9, srstrela12_09])},
					{label: '26.09.1991.', layer: L.featureGroup ([mamaclika,  marinci, zapsla_drugi, krajina_treci, jas, hrzas_26_9, srstrela26_09])},
					{label: '26.10.1991.', layer: L.featureGroup ([mamaclika, connection, zapsla_treci, krajina_peti, jug_drugi, jas, hrzas_26_10, srstrela26_10])},
					{label: '12.11.1991. - <b>Fall of Saborsko</b>', layer: L.featureGroup ([mamaclika, bogdanovci, krajina_sesti, zapsla_cetvrti, jug_drugi, jas, hrzas_12_11, hrstrela11_11, srstrela11_11])},
					{label: '17.11.1991. - <b>Fall of Slunj </b>', layer: L.featureGroup ([mamacslunj,two_parts, zapsla_cetvrti, krajina_sedmi, jug_treci, jas, hrzas_17_11, hrstrela28_11, srstrela17_11])},
					{label: '28.11.1991. - <b>Fall of Cetingrad</b>', layer: L.featureGroup ([mamacslunj,paudvor,zapsla_peses, krajina_izmedu, jug_cetvrti, jas, hrzas_28_11, srstrela28_11, hrstrela28_11])},
                ]},
		{label: '<div id="onlysel" class="group"></div>'},
		{label: '<big><b>Dalmacija front</b></big> <i>(zoom to feature)</i>', children: [ 
					{label: '26.08.1991.', layer: L.featureGroup ([mamaczadar, zapsla_prvi, vu_pocetak, krajina_prvi, jas, hrzas_26_8, srstrela26_28])},
					{label: '12.09.1991.', layer: L.featureGroup ([mamaczadar, krajina_drugi, vu_drugi, zapsla_izmedu, jas, hrzas_12_9, srstrela12_09])},
				    {label: '21.09.1991. - <b>Serbian attacks on Šibenik </b>', layer: L.featureGroup ([mamaczadar, krajina_21, vu_drugi, zapsla_izmedu, jas, hrzas_21_9, srstrela21_09, hrstrela21_09])},
					{label: '26.09.1991.', layer: L.featureGroup ([mamaczadar,  marinci, zapsla_drugi, krajina_treci, jas, hrzas_26_9, srstrela26_09])},
					{label: '05.10.1991. - <b>Serbian attacks on Zadar </b>', layer: L.featureGroup ([mamaczadar,  mar, zapsla_treci, krajina_cetvrti, jug_prvo, jas, hrzas_05_10, srstrela05_10, hrstrela05_10])},
					{label: '19.11.1991. - <b>Fall of Škabrnja and Nadin</b>', layer: L.featureGroup ([mamaczadar,vukovar_fall, zapsla_peti, krajina_osmi, jug_treci, jas, hrzas_19_11, hrstrela28_11, srstrela19_11])},
					{label: '28.11.1991. - <b>Fall of Cetingrad</b>', layer: L.featureGroup ([mamaczadar,paudvor,zapsla_peses, krajina_izmedu, jug_cetvrti, jas, hrzas_28_11, srstrela28_11, hrstrela28_11])},
                ]}, 				
	    {label: '<div id="onlysel" class="group"></div>'},
		{label: '<big><b>South front</b></big> <i>(zoom to feature)</i>', children: [ 
					{label: '01.10.1991. - <b>JNA attacked Dubrovnik area', layer: L.featureGroup ([mamacjug, marinci, zapsla_drugi, krajina_treci, jas, hrzas_26_9, srstrela26_09])},
					{label: '05.10.1991. - <b>Serbian attacks on Dubrovnik area</b>', layer: L.featureGroup ([mamacjug,  mar, zapsla_treci, krajina_cetvrti, jug_prvo, jas, hrzas_05_10, srstrela05_10, hrstrela05_10])},
				    {label: '26.10.1991. - <b>Serbian attacks on Dubrovnik area</b>', layer: L.featureGroup ([mamacjug, connection, zapsla_treci, krajina_peti, jug_drugi, jas, hrzas_26_10, srstrela26_10])},
					{label: '15.11.1991. - <b>The siege of the Dubrovnik </b>', layer: L.featureGroup ([mamacjug, bogdanovci, krajina_sesti, zapsla_cetvrti, jug_treci, jas, hrzas_15_11, hrstrela11_11, srstrela11_11])},
					{label: '21.11.1991. - <b>Fall of Mokošica</b>', layer: L.featureGroup ([mamacjug,laslovo, zapsla_peti, krajina_osmi, jug_cetvrti, jas, hrzas_19_11, hrstrela28_11,  srstrela21_11])},
                    {label: '17.12.1991.', layer: L.featureGroup ([mamacjug, paudvor, zapsla_sesti, krajina_deveti, jug_peti, jas, hrzas_17_12, srstrela17_12, hrstrela17_12])},

				]}, 
				]},
				{label: '<div id="onlysel" class="group"></div>'},
 				{label: '<small>Source:' + '<br>' + '1. Central Intelligence Agency (2002-2003) Balkan battlegrounds. Washington, DC: Central Intelligence' + '<br>' + 
				'Agency, Office of Russian and European Analysis.' + '<br>' +  
				'2. Marijan, D.(2016) The Homeland War. Zagreb: Croatian Institute of History and Despot infinitus.</small>'},				
				{label: '<div id="onlysel" class="hrline"></div>'},
				{label: '<big><b>1992</b></big>', children: [ 
			    {label: '<div id="onlysel" class="line"><hr>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;' + '● On the begining of the new year a new termination of all armed conflicts' + '<br>' +
  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'has been agreed. This time the ceasefire was successful and that was a proviso' + '<br>' +
  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + ' for the arrival of the UN peacekeeping force.' + '<hr></div>'},
  
				{label: '<big><b>03.01.1992. - Sarajevo Ceasefire</b></big> <i>(click on polygon)</i>', layer: L.featureGroup ([sarajevoagr, sar_hover])},
    {label: '<hr><div id="onlysel" class="line">' + 
					'&nbsp;&nbsp;&nbsp;&nbsp;' + '● On 21 February 1992 the UN Security Council adopted resolution 743 on the' + '<br>' +
  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'start of a peacekeeping operation and deployment of international peacekeeping' + '<br>' +
  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'forces in the Republic of Croatia for the period of 12 months. Four security' + '<br>' +
  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'zones were established: East, West, North and South. The Western zone was' + '<br>' + 
  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'divided into two parts, one under the control of rebel Serbs and the other under' + '<br>' +
  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'the control of Croats. Outside the protected zones were parts of municipalities' + '<br>' +
  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + "with the majority Croatian population occupied by the JNA called 'pink zones'." + '<hr></div>'},
				{label: '<big><b>UNPA sectors</b><big>', layer: L.featureGroup ([unpasektori, pink, unpa, unpacro])},
			    
  
	    {label: '<div id="onlysel" class="group"></div>'},
		{label: '<big><b>Western Slavonia front</b></big> <i>(zoom to feature)</i>', children: [ 
					{label: '03.01.1992.', layer: L.featureGroup ([mamaczapsla, zapsla_03_01_92, paudvor, krajina_deseti, jug_peti, jas, hrzas_03_01])},
                ]},
		{label: '<div id="onlysel" class="group"></div>'},
		{label: '<big><b>Dalmacija front</b></big> <i>(zoom to feature)</i>', children: [ 
				{label: '01.01.1992. - <b>Fall of Pridraga, Novigrad and Nos Kalik</b>', layer: L.featureGroup ([mamaczadar,paudvor,zapsla_sedmi, krajina_deseti, jug_peti, jas, hrzas_03_01])},
				{label: '<b>The operation to liberate Nos Kalik</b>', children: [ 
					    {label: '01.03.1992. - <b>Occupied Nos Kalik</b>', layer: L.featureGroup ([mamacnos,sar2, jas, nos_strela, hrzas_03_01])},
					    {label: '02.03.1992. - <b>The Croatian Army liberated Nos Kalik</b>', layer: L.featureGroup ([mamacnos,sar3, jas,  hrzas_03_01])},                
				]},
				{label: '<b>The operation to capture hill Križ</b>', children: [ 
					    {label: '17.05.1992. - <b>Start of the operation</b>', layer: L.featureGroup ([mamackriz, sar4, jas, kriz_strela, dub_streladrugi, hrzas_03_01])},
						{label: '18.05.1992. - <b>Blocade of Križ bunker</b>', layer: L.featureGroup ([mamackriz, sar5, jas, kriz_strela, dub_streladrugi, hrzas_03_01])},
					    {label: '23.05.1992. - <b>The Croatian Army captured the hill Križ above Zadar</b>', layer: L.featureGroup ([mamackriz, sar7, jas, dub_strelatreci, hrzas_03_01])},                
				]},
				{label: "b>Operation on Miljevci plateau</b>", children: [ 
					    {label: '17.06.1992. - <b>Start of the operation on Miljevci plateau</b>', layer: L.featureGroup ([mamacmilj,sar10, jas, milj_strela, hrzas_28_5])},
					    {label: '22.06.1992. - <b>The Croatian Army liberated villages on the Miljevci'
                        + '<br>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'plateau</b>', layer: L.featureGroup ([mamacmilj, sar11, jas, hrzas_28_5])},                
				]},
				]},
		{label: '<div id="onlysel" class="group"></div>'},
		{label: '<big><b>Lika front</b></big> <i>(zoom to feature)</i></big>', children: [ 
                    {label: '<b>Serb enclaves Jasenak, Gomirje, Moravice and Drežnica</b>', layer: L.featureGroup ([mamacjas, jas, sar11, hrzas_28_5])},
				    {label: '06.07.1992. - <b>Disarmament of Serb enclaves</b>', layer: L.featureGroup ([mamacjas, sar11, hrzas_jasenak])},                
				]},
		{label: '<div id="onlysel" class="group"></div>'},
		{label: '<big><b>South front</b></big> <i>(zoom to feature)</i>', children: [ 
                    {label: '06.05.1992. - <b>Start of actions to unblock Dubrovnik</b>', layer: L.featureGroup ([mamacjug, sar3, jas, dub_strelaprvi, hrzas_03_01])},
				    {label: '07.05.1992.', layer: L.featureGroup ([mamacjug, sar4, jas, dub_streladrugi, hrzas_03_01])},   
				    {label: '22.05.1992.', layer: L.featureGroup ([mamacjug, sar6, jas, dub_strelatreci, kriz_strela, hrzas_03_01])}, 
				    {label: '25.05.1992. - <b>The Croatian Army liberated area around Slano</b>', layer: L.featureGroup ([mamacjug, sar8, jas, dub_strelacetvrti, hrzas_25_5])},                
					{label: '27.05.1992. - <b>The Croatian Army unblocked Dubrovnik</b>', layer: L.featureGroup ([mamacjug, sar9, jas, dub_strelapeti, hrzas_25_5])},                
					{label: '28.05.1992. - <b>The Croatian Army liberated Dubrovnik area</b>', layer: L.featureGroup ([mamacjug, sar10, jas, dub_strelasesti, hrzas_28_5])},                
					{label: '20.10.1992. - <b>Start of actions to liberate Konavle area</b>', layer: L.featureGroup ([mamaccavtat, sar11, dub_strelasedmi, hrzas_jasenak])},                
					{label: '21.10.1992. - <b>The Croatian Army liberated Cavtat</b>', layer: L.featureGroup ([mamaccavtat, sar12, dub_strelaosmi, hrzas_jasenak])},                
					{label: '24.10.1992. - <b>The Croatian Army liberated Konavle area</b>', layer: L.featureGroup ([mamaccavtat, sar13, hrzas_dubfree])},                					
				]},

                ]},
				{label: '<div id="onlysel" class="group"></div>'},
				{label: '<small>Source:' + '<br>' + '1. Marijan, D.(2016) The Homeland War. Zagreb: Croatian Institute of History and Despot infinitus.' + '<br>' + 
				'2. Nazor, A.(2011) A Greater-Serbian aggression against Croatia in 1990s. Zagreb: Croatian Homeland' + '<br>' + 
				'War Memorial and Documentation Centre.</small>'},
				{label: '<div id="onlysel" class="hrline"></div>'},
				{label: '<big><b>1993</b></big>', children: [ 
		{label: '<div id="onlysel" class="group"></div>'},
		{label: '<big><b>Dalmacija front</b></big> <i>(zoom to feature)</i>', children: [ 
				{label: "<b>Operation 'Maslenica'</b>", children: [ 
					    {label: "22.01.1993. - <b>Start of operation 'Maslenica'</b>", layer: L.featureGroup ([mamacmasl,masl_prvi, maslstrela, hrzas_dubfree])},
					    {label: '27.01.1993. - <b>The Croatian Army cleaned the' + '<br>' + '&nbsp;&nbsp;&nbsp;&nbsp;' + 'area from Zadar to Maslenica</b>', layer: L.featureGroup ([mamacmasl, masl_drugi, hrzasmasl])},                
				]},
				{label: '<b>Peruća dam</b>', children: [ 
					    {label: '27.01.1993. - <b>Croatian forces move into action to take the control' + '<br>' + '&nbsp;&nbsp;&nbsp;&nbsp;' + 'over the Peruća dam</b>', layer: L.featureGroup ([mamacperuca,masl_drugi, strelaperuca, hrzasmasl])},
						{label: '28.01.1993. - <b>Croatian forces seized the Peruća dam</b>', layer: L.featureGroup ([mamacperuca,peruca, hrzas_peruca])},
				]},
				]},
	    {label: '<div id="onlysel" class="group"></div>'},
		{label: '<big><b>Lika front</b></big> <i>(zoom to feature)</i>', children: [ 
                   {label: "<b>Operation 'Medak pocket'</b>", children: [ 
					    {label: "Dawn, 09.09.1993. - <b>Start of the operation 'Medak pocket'</b>", layer: L.featureGroup ([mamacmedak, peruca, strelamedak, hrzas_peruca])},
					    {label: 'End of the day, 09.09.1993. - <b>The Croatian Army liberated villages in'
                        + '<br>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'Gospić area</b>', layer: L.featureGroup ([mamacmedak, medak, hrzas_medak])},                
				]},
				]},
                ]},
				{label: '<div id="onlysel" class="group"></div>'},
				{label: '<small>Source:' + '<br>' + 'Marijan, D.(2016) The Homeland War. Zagreb: Croatian Institute of History and Despot infinitus.</small>'},
				{label: '<div id="onlysel" class="hrline"></div>'},
				{label: '<big><b>1994</b></big>', children: [ 
	    {label: '<div id="onlysel" class="group"></div>'},
		{label: '<big><b>Dalmacija front</b></big> <i>(zoom to feature)</i>', children: [ 
				{label: "<b>Operation 'Winter 94'</b>", children: [ 
					    {label: "29.11.1994. - <b>Start of operation 'Winter 94'</b>", layer: L.featureGroup ([mamaczima, medak, zimastrela, hrzas_medak])},
					    {label: '24.12.1994. - <b>The Croatian Army at Dinara mountain</b>', layer: L.featureGroup ([mamaczima, zima94, hrzas_zima94])},                
				]},
				]},
                ]},
				{label: '<div id="onlysel" class="group"></div>'},
				{label: '<small>Source:' + '<br>' + 'Marijan, D.(2016) The Homeland War. Zagreb: Croatian Institute of History and Despot infinitus.</small>'},
				{label: '<div id="onlysel" class="hrline"></div>'},
				{label: '<big><b>1995</b></big>', children: [ 
	    {label: '<div id="onlysel" class="group"></div>'},
		{label: '<big><b>Dalmacija front</b></big> <i>(zoom to feature)</i>', children: [ 
				{label: "<b>Operation 'Jump - 1' </b>", children: [ 
					    {label: "06.04.1995. - <b>Start of operation 'Jump - 1'</b>", layer: L.featureGroup ([mamaczima, zima94, skokstrela, hrzas_zima94])},
					    {label: '14.04.1995. - <b>The Croatian Army capture better locations on Dinara'
                        + '<br>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'mountain</b>', layer: L.featureGroup ([mamaczima, skok1, hrzas_zima94])},                
				]},
				]},
	    {label: '<div id="onlysel" class="group"></div>'},
		{label: '<big><b>Western Slavonia front</b></big> <i>(zoom to feature)</i>', children: [ 
				{label: "<b>Operation 'Flash'</b>", children: [ 
					    {label: "01.05.1995. - <b>Start of operation 'Flash'</b>", layer: L.featureGroup ([mamacbljesak, skok1, bljesakstrela, hrzas_zima94])},
					    {label: '04.05.1995. - <b>The Croatian Army liberated Western Slavonia</b>', layer: L.featureGroup ([mamacbljesak, oluja_3_8, hrzas_bljesak])},                
				]},
				]},
				{label: '<div id="onlysel" class="line"><hr>' + '&nbsp;&nbsp;&nbsp;&nbsp;' +
'●	After years of waiting, a good moment for the liberation of all Croatian' + '<br>' +
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
'territories finally came. Because of the crimes against humanity of the Army of' + '<br>' +
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
'Republika Srpska in eastern Bosnia and Herzegovina in Srebrenica at the' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
' mid - July, Croatia has been given a tacit support of the influential part of the' + '<br>' +
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
'international community to solve the problem of Republika Srpska Krajina in a' + '<br>' +
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
'short time. After several successful military operations Croatia gained better' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
'tactical positions on the battlefield, but also in front of the international' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
'community demonstrated its strength and efficiency in the liberation of its own' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
'territory. Thereby, the Croatian Army was ready for the final and complete' + '<br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
'reintegration of the occupied territories.' + '<hr></div>'},
	    {label: '<div id="onlysel" class="group"></div>'},
		{label: "<big><b>Operation 'Storm'</b></big> <i>(zoom to feature)</i>", children: [ 
			   {label: "<b>Dawn, 04.08.1995. - Start of operation 'Storm'</b>", children: [
					    {label: '<b>General view</b>', layer: L.featureGroup ([mamacoluja_3_8, oluja_3_8, strelageneol_3_8, hrzas_genol_4_8])},
					    {label: '<b>Kordun and Banovina</b>', layer: L.featureGroup ([mamackorban_3_8, oluja_3_8, strelaol_3_8, hrzas_ol_4_8])},
					    {label: '<b>Lika</b>', layer: L.featureGroup ([mamaclik_3_8, oluja_3_8, strelaol_3_8, hrzas_ol_4_8])},
					    {label: '<b>Dalmacija</b>', layer: L.featureGroup ([mamacdal_3_8, oluja_3_8, strelaol_3_8, hrzas_ol_4_8])},
						]},
                {label: '<b>End of the day, 04.08.1995.</b>', children: [
					    {label: '<b>General view</b>', layer: L.featureGroup ([mamacoluja_3_8, oluja_4_8, strela_geneol_4_8, hrzas_genol_4_8])},
					    {label: '<b>Kordun and Banovina</b>', layer: L.featureGroup ([mamackorban_3_8, oluja_4_8, strelaol_4_8, hrzas_ol_4_8])},
					    {label: '<b>Lika</b>', layer: L.featureGroup ([mamaclik_3_8, oluja_4_8, strelaol_4_8, hrzas_ol_4_8])},
					    {label: '<b>Dalmacija</b>', layer: L.featureGroup ([mamacdal_3_8, oluja_4_8, strelaol_4_8, hrzas_ol_4_8])},
						]},
			    {label: '<b>05.08.1995.</b>', children: [
					    {label: '<b>General view</b>', layer: L.featureGroup ([mamacoluja_3_8, oluja_5_8, strela_geneol_5_8, hrzas_genol_4_8])},
					    {label: '<b>Kordun and Banovina</b>', layer: L.featureGroup ([mamackorban_3_8, oluja_5_8, strelaol_5_8, hrzas_ol_5_8])},
					    {label: '<b>Lika</b>', layer: L.featureGroup ([mamaclik_3_8, oluja_5_8, strelaol_5_8, hrzas_ol_5_8])},
					    {label: '<b>Dalmacija</b>', layer: L.featureGroup ([mamacdal_3_8, oluja_5_8, strelaol_5_8, hrzas_ol_5_8])},
						]},
			    {label: '<b>06.08.1995.</b>', children: [
					    {label: '<b>General view</b>', layer: L.featureGroup ([mamacoluja_3_8, oluja_6_8, strela_geneol_6_8, hrzas_genol_6_8])},
					    {label: '<b>Kordun and Banovina</b>', layer: L.featureGroup ([mamackorban_3_8, oluja_6_8, strelaol_6_8, hrzas_ol_6_8])},
					    {label: '<b>Lika</b>', layer: L.featureGroup ([mamaclik_6_8, oluja_6_8, strelaol_6_8, hrzas_ol_6_8])},
					    {label: '<b>Dalmacija</b>', layer: L.featureGroup ([mamacdal_3_8, oluja_6_8, strelaol_6_8, hrzas_ol_6_8])},
						]},
				{label: '<b>07.08.1995.</b>', children: [
					    {label: '<b>General view</b>', layer: L.featureGroup ([mamacoluja_3_8, oluja_7_8, strela_geneol_7_8, hrzas_genol_7_8])},
					    {label: '<b>Kordun and Banovina</b>', layer: L.featureGroup ([mamackorban_3_8, oluja_7_8, strelaol_7_8, hrzas_ol_7_8])},
					    {label: '<b>Lika</b>', layer: L.featureGroup ([mamaclik_7_8, oluja_7_8, strelaol_7_8, hrzas_ol_7_8])},
						]},
				{label: '<b>08.08.1995.</b>', children: [
					    //{label: '<b>General view</b>', layer: L.featureGroup ([mamackorban_8_8, oluja_8_8, strela_geneol_8_8, hrzas_genol_8_8])},
					    {label: '<b>Kordun and Banovina</b>', layer: L.featureGroup ([mamackorban_3_8, oluja_8_8, strelaol_8_8, hrzas_genol_8_8])},
						]},
				{label: '<b>09.08.1995.</b>', children: [
					    //{label: '<b>General view</b>', layer: L.featureGroup ([mamackorban_8_8, oluja_8_8, strela_geneol_8_8, hrzas_genol_8_8])},
					    {label: '<b>Kordun and Banovina</b>', layer: L.featureGroup ([mamackorban_8_8, oluja_9_8, strelaol_9_8, hrzas_genol_9_8])},
						]},
				{label: "<b>10.08.1995. - <b>End of the operation 'Storm'</b>", children: [
					    //{label: '<b>General view</b>', layer: L.featureGroup ([mamackorban_8_8, oluja_8_8, strela_geneol_8_8, hrzas_genol_8_8])},
					    {label: '<b>Croatia</b>', layer: L.featureGroup ([croatia2, paudvor, hrzas_genol_10_8])},
						]},
				{label: '<div id="onlysel" class="line"><hr>' + '&nbsp;&nbsp;&nbsp;&nbsp;' +
                        "● By the end of the operation 'Storm', with some minor armed incidents, military" + '<br>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
						'conflicts ended in the Republic of Croatia. Before and during the operation,' + '<br>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
                        'almost all Serbs from the liberated territory left Croatia. From the Serbian' + '<br>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
						'perspective it was ethnic cleansing, while from the Croatian perspective, they' + '<br>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
						'left voluntarily. Given the massive response to the referendum on Serbian' + '<br>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
						'autonomy and mass involvement in the armed rebellion, such an outcome'  + '<br>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
						'was logical. International community have mostly demonstrated understanding' + '<br>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
						'of the operation being carried out. It was said that Croatia had left enough' + '<br>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
						"time for them to resolve the conflict by negotiations, and that Operation 'Storm'" + '<br>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
						'was legal and established the balance of power in Bosnia and Herzegovina' + '<br>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
						'and thus created the conditions for conclusion of a peace agreement.' + '<hr></div>'},
                {label: '<div id="onlysel" class="group"></div>'},
				{label: '<div id="onlysel" class="line">' + '&nbsp;&nbsp;&nbsp;&nbsp;' +
                        '● After the "Storm", only 4.6% of the Croatian territory remained under Serbian' + '<br>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
						'occupation, on the far east of Croatia, in the Croatian Danube Region.' + '<br>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
                        'Based on the Erdut Agreement signed on 12.11.1995., this area finally' + '<br>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
						' returned to the composition of the Republic of Croatia  on 15.01.1998.' + '<br>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
						'Thereby, the Croatian government has fully established its authority over' + '<br>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
						'the internationally recognized borders of the Republic of Croatia.' + '<hr></div>'},
				{label: '<div id="onlysel" class="group"></div>'},
                {label: '<small>Source:' + '<br>' + '1. Central Intelligence Agency (2002-2003) Balkan battlegrounds. Washington, DC: Central' + '<br>' + 
				        'Intelligence Agency, Office of Russian and European Analysis.</small>' + '<br>' + 
				        '<small>2. Marijan, D.(2016) The Homeland War. Zagreb: Croatian Institute of History and Despot infinitus.</small>' + '<br>' +
				        '<small>3. Nazor, A.(2011) A Greater-Serbian aggression against Croatia in 1990s. Zagreb: Croatian' 
				        + '<br>' + 'Homeland War Memorial and Documentation Centre.</small>'},
				
				
				
				]},
                ]}]},
            ]
        }


        var lay = L.control.layers.tree( null, overlaysTree,
            {
                namedToggle: false,
                selectorBack: false,
                closedSymbol: '&#10148;',
                openedSymbol: '&#10148;',
                collapseAll: 'Collapse all',
                expandAll: 'Expand all',

            });

        lay.addTo(map).collapseTree().expandSelected().collapseTree(true);
        L.DomEvent.on(L.DomUtil.get('onlysel'), 'click', function() {
            lay.collapseTree(true).expandSelected(true);
        });

//Follow-up of zooming on press of radio button
map.on('overlayadd overlayremove', function () {
	var bounds = parentGroup.getBounds();
  if (bounds.isValid()) {
  	map.fitBounds(bounds);
  }
});		

//Open popup on hover for events
		function pop_popplaces (feature,layer){
			
			layer.on("mouseover",function(e){
                layer.setIcon(ser_politika2);	
            });
			
            layer.on("mouseout",function(e){
                layer.setIcon(ser_politika1)
            });
			
           layer.on('mouseover mousemove', function(e){
           var hover_bubble = new L.Rrose({ offset: new L.Point(0,-30), closeButton: false, autoPan: true })
           .setContent('<p id = "popup2">' + String(feature.properties.title) + '<p id = "popup3">' + String(feature.properties.datum))
           .setLatLng(e.latlng)
      .openOn(map);
  });
  layer.on('mouseout', function(e){map.closePopup() });
}

        function pop_popplaces2 (feature,layer){
			
			layer.on("mouseover",function(e){
                layer.setIcon(ser_napad2);	
            });
			
            layer.on("mouseout",function(e){
                layer.setIcon(ser_napad1)
            });
			
           layer.on('mouseover mousemove', function(e){
           var hover_bubble = new L.Rrose({ offset: new L.Point(0,-30), closeButton: false, autoPan: true })
           .setContent('<p id = "popup2">' + String(feature.properties.title) + '<p id = "popup3">' + String(feature.properties.datum))
           .setLatLng(e.latlng)
      .openOn(map);
  });
  layer.on('mouseout', function(e){map.closePopup() });
}

	    function pop_popplaces3 (feature,layer){
			
			layer.on("mouseover",function(e){
                layer.setIcon(hr_politika2);	
            });
			
            layer.on("mouseout",function(e){
                layer.setIcon(hr_politika1)
            });
			
           layer.on('mouseover mousemove', function(e){
           var hover_bubble = new L.Rrose({ offset: new L.Point(0,-30), closeButton: false, autoPan: true })
           .setContent('<p id = "popup2">' + String(feature.properties.title) + '<p id = "popup3">' + String(feature.properties.datum))
           .setLatLng(e.latlng)
      .openOn(map);
  });
  layer.on('mouseout', function(e){map.closePopup() });
}

        function pop_popplaces4 (feature,layer){
			
			layer.on("mouseover",function(e){
                layer.setIcon(hr_napad2);	
            });
			
            layer.on("mouseout",function(e){
                layer.setIcon(hr_napad1)
            });
			
           layer.on('mouseover mousemove', function(e){
           var hover_bubble = new L.Rrose({ offset: new L.Point(0,-30), closeButton: false, autoPan: true })
           .setContent('<p id = "popup2">' + String(feature.properties.title) + '<p id = "popup3">' + String(feature.properties.datum))
           .setLatLng(e.latlng)
      .openOn(map);
  });
  layer.on('mouseout', function(e){map.closePopup() });
}	
//Time slider
		var slidervar = document.getElementById('slider');
		noUiSlider.create(slidervar, {
			connect: true,
			start: [ 0, 228 ],
			step: 1,
			range: {
				min: 0,
				max: 2190
			}
		});
		
		
		$('#date1').on('change', function () {
		

		//Object
		var date = moment($(this).val(), 'DD.MM.YYYY');
		var diff = date.diff(minDate, 'days');
		console.log(diff);
		slidervar.noUiSlider.set([diff, null]);
		
		});
		$('#date2').on('change', function () {
		
	    //console.log($(this).val(), 'DD.MM.YYYY'));
		
		var date = moment($(this).val(), 'DD.MM.YYYY');
		var diff = date.diff(minDate, 'days');
		//console.log(diff);
		slidervar.noUiSlider.set([null, diff]);


		
		});
		
		
		
		var inputNumberMin = document.getElementById('input-number-min');
		var inputNumberMax = document.getElementById('input-number-max');
		/*inputNumberMin.addEventListener('change', function(){
			slidervar.noUiSlider.set([this.value, null]);
		});
		inputNumberMax.addEventListener('change', function(){
			slidervar.noUiSlider.set([null, this.value]);
		});*/
		slidervar.noUiSlider.on('update', function( values, handle ) {
		
		console.log(handle);
		
				inputNumberMin.value = minDate.clone().add(values[0], 'days').format('YYYYMMDD');
				$('#date1').val(minDate.clone().add(values[0], 'days').format('DD.MM.YYYY'));
				inputNumberMax.value = minDate.clone().add(values[1], 'days').format('YYYYMMDD');
				$('#date2').val(minDate.clone().add(values[1], 'days').format('DD.MM.YYYY'));

			
			
			rangeMin = inputNumberMin.value;
			rangeMax = inputNumberMax.value;
			//first let's clear the layer:
			events.clearLayers();
			
		//and repopulate it
		//First layer - event
		ser_pol = new L.geoJSON(ser_politika,{
				onEachFeature: pop_popplaces,
				filter:
					function(feature, layer) {
						 return (feature.properties.date <= rangeMax) && (feature.properties.date >= rangeMin);
					},
pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: ser_politika1, riseOnHover: true, riseOffset: 1100});
		}			})
		//Second layer - event
		ser_nap = new L.geoJSON(ser_napad,{
				onEachFeature: pop_popplaces2,
				filter:
					function(feature, layer) {
						 return (feature.properties.date <= rangeMax) && (feature.properties.date >= rangeMin);
					},
pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: ser_napad1, riseOnHover: true, riseOffset: 1100});
		}			})
		
		//Third layer - event
		hr_pol = new L.geoJSON(hr_politika,{
				onEachFeature: pop_popplaces3,
				filter:
					function(feature, layer) {
						 return (feature.properties.date <= rangeMax) && (feature.properties.date >= rangeMin);
					},
pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: hr_politika1, riseOnHover: true, riseOffset: 1100});
		}			})
		//Fourth layer - event
		hr_nap = new L.geoJSON(hr_napad,{
				onEachFeature: pop_popplaces4,
				filter:
					function(feature, layer) {
						 return (feature.properties.date <= rangeMax) && (feature.properties.date >= rangeMin);
					},
pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: hr_napad1, riseOnHover: true, riseOffset: 1100});
		}			})
		
			//console.log(map.getBounds().getEast());
			//and back again into the cluster group
			events.addLayer(ser_pol);
			events.addLayer(ser_nap);
			events.addLayer(hr_pol);
			events.addLayer(hr_nap);
		});



	
		
//Sidebar		
		var sidebar = L.control.sidebarv1('sidebar', {
            closeButton: true,
            position: 'right',


        });
        map.addControl(sidebar);
		
		
		var sidebar2 = L.control.sidebarv1('sidebar2', {
            closeButton: true,
            position: 'right',

        });
        map.addControl(sidebar2);
		
		
		
        
//Open sidebar on onload, for now I don't need it
		/*
		setTimeout(function () {
            sidebar.show();
        }, 250);*/
        /*var marker = L.marker([51.2, 7]).addTo(map).on('click', function () {
            sidebar.toggle();
        });*/
				
    /*    map.on('click', function () {
            sidebar.hide();
        });
		*/
        sidebar.on('show', function () {
            console.log('Sidebar will be visible.');
        });
        sidebar.on('shown', function () {
            console.log('Sidebar is visible.');
        });
        sidebar.on('hide', function () {
            console.log('Sidebar will be hidden.');
        });
        sidebar.on('hidden', function () {
            console.log('Sidebar is hidden.');
        });
        L.DomEvent.on(sidebar.getCloseButton(), 'click', function () {
            console.log('Close button clicked.');
        });
			
	/*	
//Aboz project and legend divs		
		var about = L.Control.extend({	
        options: {
			position: 'bottomleft'
		},

		onAdd: function (map) {
			// create the control container with a particular class name
			var container = L.DomUtil.create('div', 'about');
			container.innerHTML = '<h4>About project</h4>';


			// ... initialize other DOM elements, add listeners, etc.
			
			
			//Why here cannot be çontainer.addTo(map);?

			return container;
		}
	});
	
	map.addControl( new about() );*/
		
		
	/*	var legend = L.Control.extend({	
        options: {
			position: 'bottomleft'
		},

		onAdd: function (map) {
			// create the control container with a particular class name
			var container = L.DomUtil.create('div', 'legend');
			container.innerHTML = '<h4>Legend</h4>';


			// ... initialize other DOM elements, add listeners, etc.
			
			
			//Why here cannot be çontainer.addTo(map);?

			return container;
		}
	});
	
	map.addControl( new legend() );*/