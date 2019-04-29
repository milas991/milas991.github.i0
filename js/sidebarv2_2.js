 // create the sidebar instance and add it to the map
        var sidebar3 = L.control.sidebarv2({ container: 'sidebar3' })
            .addTo(map)

        // add panels dynamically to the sidebar
		    sidebar3
            .addPanel({
                id:   'home',
                tab:  '<i class="fas fa-chalkboard-teacher"></i>',
                title: 'Instructions',
                pane: '<p class = "legendText">This web map contains information on the population of the Republic of Croatia by municipalities. The layer switcher on the left side contains four layers each showing data of one census. Shown are the censuses from 1991, 2001 and 2000 are shown (see Figure 1 and Figure 2).</p><br><center><img src=images/slika1demo.png height=100% width=100%></center><br><center><i><p>Figure 1</p></i></center><br><p class = "legendText">The fourth layer of the map shows the largest area of occupied territory (see Figure 2).</p><br><center><img src=images/slika2demo.png height=100% width=100%></center><br><center><i><p>Figure 2</p></i></center><br><p class = "legendText">Clicking on a municipality displays statistics details in the upper right of the web browser (see Figure 3).</p><br><center><img src=images/slika3demo.png height=100% width=100%></center><br><center><i><p>Figure 3</p></i></center><br><p class = "legendText">In the lower left corner there is a chart showing the total number of citizens for each year of the census (see Figure 4).</p><br><center><img src=images/slika4demo.png height=100% width=100%></center><br><center><i><p>Figure 4</p></i></center><br>',
            })
			/*
			sidebar3
            .addPanel({
                id:   'autopan',
                tab:  '<i class="fas fa-chalkboard-teacher"></i>',
                title: 'Guide',
                pane: '<p>The Javascript API allows to dynamically create or modify the panel state.<p/><p><button onclick="sidebar.enablePanel(\'mail\')">enable mails panel</button><button onclick="sidebar.disablePanel(\'mail\')">disable mails panel</button></p><p><button onclick="addUser()">add user</button></b>',
            })
		*/
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
                tab: '<i class="fas fa-map-marked-alt"></i>',
                button: 'warfare.html',
				title: 'Homeland war',
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
    sidebar3.open('home');
}, 150);