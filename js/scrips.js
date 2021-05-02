	// Mapa Leaflet
	var mapa = L.map('mapid').setView([10, -84], 7);

	// Capa base
	var osm = L.tileLayer(
	  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?', 
	  {
	    maxZoom: 19,
	    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	  }
	).addTo(mapa);		
	    
	// Otra capa base
        var esri = L.tileLayer(
	  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', 
	  {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
	  }
	).addTo(mapa);	   

	// Otra capa base 2
    var OpenStreetMap_HOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
    }
	).addTo(mapa);	
	    
	// Marcadores
	liberia = L.marker([10.633333, -85.433333]);
	liberia.bindTooltip("Liberia").openTooltip();
	liberia.bindPopup("<h1>Liberia</h1>Enlace a <a href = 'https://es.wikipedia.org/'>wikipedia</a>").openPopup( );
	liberia.addTo(mapa);
	    
	limon = L.marker([10.002216, -83.084037]);
	limon.bindTooltip("Limón").openTooltip();
	limon.bindPopup("<h1>Limón</h1>Enlace a <a href = 'https://es.wikipedia.org/'>wikipedia</a>").openPopup( );
	limon.addTo(mapa);	   
	    
	puntarenas = L.marker([9.966667, -84.833333]);
	puntarenas.bindTooltip("Puntarenas").openTooltip();
	puntarenas.bindPopup("<h1>Puntarenas</h1>Enlace a <a href = 'https://es.wikipedia.org/'>wikipedia</a>").openPopup( );
	puntarenas.addTo(mapa);	
	
	sanjose = L.marker([9.989484, -84.164847]);
	sanjose.bindTooltip("San José").openTooltip();
	sanjose.bindPopup('<h2>San José</h2>Enlace a <a href="https://es.wikipedia.org/wiki/San_Jos%C3%A9_(Costa_Rica)">San José</a><p><img src="img/Ciudad_de_San_José.png" alt="San Jose" height="100" width="100"></p>').openPopup();
	sanjose.addTo(mapa);

	
	// Conjunto de capas base
	var mapasBase = {
	    "ESRI": esri,		
	    "OSM": osm,
		"OpenStreetMap":OpenStreetMap_HOT
	};	    
	    
	// Control de capas
        L.control.layers(mapasBase).addTo(mapa);	  
    // Control de escala
       L.control.scale ({position:'topright', imperial: false}).addTo(mapa)