var map = L.map('map', {
		center: [23, 85],
		zoom: 4
	});


L.marker([23.35003932, 85.30807963]).addTo(map)
    .bindPopup('1134')
    .openPopup();
// layers are india3 ,basemap%3Aadmin_group
//<a href="http://bhuvan.nrsc.gov.in"> BHUWAN | ' +
//			' <a href="http://www.isro.gov.in/"> ISRO  


// wms --> http://bhuvannuis.nrsc.gov.in/bhuvan/gwc/service/wms/
//layer --> basemap%3Aadmin_group

//http://india-wris.nrsc.gov.in/ArcGIS/services/SubInfoSysLCC/Admin_subinfo_a/MapServer/WMSServer
	var wmsLayer = L.tileLayer.wms('http://india-wris.nrsc.gov.in/ArcGIS/services/SubInfoSysLCC/Admin_subinfo_a/MapServer/WMSServer', {
		layers: '4',
    attribution: ' ' +
			'',
		id: 'mapbox.light'
	}).addTo(map);


