//This file contains the structure and components that make the left sidebar of the application

 // create the sidebar instance and add it to the map
        var sidebar3 = L.control.sidebarv2({ container: 'sidebar3' })
            .addTo(map)

        // add panels dynamically to the sidebar
		    sidebar3
            .addPanel({
                id:   'intro',
                tab:  '<i class="fas fa-chalkboard-teacher"></i>',
                title: 'Instructions',
                pane: '<p class = "legendText">This website has two main components. On the right side of the web browser, there is a layer switcher which, along with the introductory map layers, provides a display of the changes in the battlefield for each part of the Republic of Croatia for each year of the war (see Figure 1).</p><br><center><img src=images/slika1.png height=100% width=100%></center><br><center><i><p>Figure 1</p></i></center><br><p class = "legendText">On the top of the web browser there is an interactive calendar and a timeline that serve for the same purpose, to provide insight into various events over a certain period of time (see Figure 2).</p><br><center><img src=images/slika2.png height=100% width=100%></center><br><center><i><p>Figure 2</p></i></center><br><p class = "legendText">For the best understanding of the events of the Homeland War, both components should be used together - chronologically change the layers of web maps in the layer switcher (see Figure 3), and set the calendar or timeline according to the date in the layer name (see Figure 4).</p><br><center><img src=images/slika3.png height=100% width=100%></center><br><center><i><p>Figure 3</p></i></center><br><center><img src=images/slika4.png height=100% width=100%></center><br><center><i><p>Figure 4</p></i></center><br><p class = "legendText">Example of use</p><br><p class = "legendText">Let us say that we are interested in the situation in the Eastern Slavonia front on 26/10/1991 First click on the <i>Expand all</i> option to display all map layers (see Figure 5).</p><br><center><img src=images/slika5.png height=100% width=100%></center><br><center><i><p>Figure 5</p></i></center><br><p class = "legendText">Then click on <i>26.10.1991. - End of connection Bogdanovci - Vukovar</i> map layer under the section <i>Eastern Slavonia front</i> (see Figure 6).</p><br><center><img src=images/slika6.png height=100% width=100%></center><br><center><i><p>Figure 6</p></i></center><br><p class = "legendText">This shows the state of the battlefield on 26/10/1991. Then choose the following dates in the calendar: for the start date, set the date of the previous layer – 05/10/1991, and for the final 26/10/1991 (see Figure 7).</p><br><center><img src=images/slika7.png height=100% width=100%></center><br><center><i><p>Figure 7</p></i></center><br><p class = "legendText">Date 05/10/1991 is mentioned in previous sentence because this is the date of the previous layer of the map. Result: an overview of the state of the battlefield in Eastern Slavonia front with the events from 05/10/1991 - 26/10/1991 (see Figure 8).</p><br><center><img src=images/slika8.png height=100% width=100%></center><br><center><i><p>Figure 8</p></i></center><br><p class = "legendText">This is the best way to avoid data overcrowding. Of course the map can be used according to your wishes so do not hesitate to use it in any way that suits you.<p><br><p class = "legendText">In addition to this instructions, on the left side of this element are links to map legend and other parts of the website (see Figure 9).</p><br><center><img src=images/slika9.png height=100% width=100%></center><br><center><i><p>Figure 9</p></i></center><br>'
            })
			/*
			sidebar3
            .addPanel({
                id:   'autopan',
                tab:  '<i class="fas fa-chalkboard-teacher"></i>',
                title: 'Guide',
                pane: '<p>The Javascript API allows to dynamically create or modify the panel state.<p/><p><button onclick="sidebar.enablePanel(\'mail\')">enable mails panel</button><button onclick="sidebar.disablePanel(\'mail\')">disable mails panel</button></p><p><button onclick="addUser()">add user</button></b>',
            })*/
			sidebar3
            .addPanel({
                id:   'legend',
                tab:  '<i class="fas fa-list-ul"></i>',
                title: 'Legend',
                pane: '<img src=images/stop_legend.png class = "img"><span class = "legendText">Roadblocks</span><br><img src=images/grb.png class = "img"><span class = "legendText">Croatian independence</span><br><img src=images/first_inci_legend.png class = "img"><span class = "legendText">First conflicts</span><br><img src=images/srpski_grb.png class = "img"><span class = "legendText">Police stations seized by Serbs</span><br><img src=images/jna_zvezda.png class = "img"><span class = "legendText">JNA barracks</span></span><br><img src=images/cro_pol_legend.png class = "img"><span class = "legendText">Croatian politics</span></span><br><img src=images/ser_pol_legend.png class = "img"><span class = "legendText">Serbian politics</span><br><img src=images/cro_rif_legend.png class = "img"><span class = "legendText">Croatian Army activities</span><br><img src=images/ser_rif_legend.png class = "img"><span class = "legendText">Serbian troops activities</span><br><img src=images/hrzastava.png class = "img"><span class = "legendText">Croatian Army</span><br><img src=images/srzastava.png class = "img"><span class = "legendText">Serbian troops</span><br><img src=images/cro_arrow.png class = "img"><span class = "legendText">Direction of Croatian attack</span><br><img src=images/ser_arrow.png class = "img"><span class = "legendText">Direction of Serbian attack</span><br><img src=images/croat_control.png class = "img"><span class = "legendText">Croat-controlled areas</span><br><img src=images/serb_control.png class = "img"><span class = "legendText">Serb-controlled areas</span>',
            })
		
			sidebar3
			.addPanel({
                id: 'ghlink',
                tab: '<i class="fa fa-home"></i>',
                button: 'index.html',
				title: 'Home',
           })
		   
			sidebar3
			.addPanel({
                id: 'ghlink',
                tab: '<i class="fas fa-chart-pie"</i>',
                button: 'census.html',
				title: 'Census',
           })

sidebar3.on('content', function (ev) {
            switch (ev.id) {
			    case 'home':
				case 'autopan':
                case 'js-api':
                sidebar3.options.autopan = true;
                break;
                default:
                sidebar3.options.autopan = false;
            }
        });

setTimeout(function () {
    sidebar3.open('intro');
}, 150);
        