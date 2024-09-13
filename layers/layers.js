ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([107.556091, -6.889995, 107.576639, -6.874870]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KelurahanPasirkaliki_2 = new ol.format.GeoJSON();
var features_KelurahanPasirkaliki_2 = format_KelurahanPasirkaliki_2.readFeatures(json_KelurahanPasirkaliki_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KelurahanPasirkaliki_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KelurahanPasirkaliki_2.addFeatures(features_KelurahanPasirkaliki_2);
var lyr_KelurahanPasirkaliki_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KelurahanPasirkaliki_2, 
                style: style_KelurahanPasirkaliki_2,
                popuplayertitle: "Kelurahan Pasirkaliki",
                interactive: true,
                title: '<img src="styles/legend/KelurahanPasirkaliki_2.png" /> Kelurahan Pasirkaliki'
            });
var format_Waypoints_3 = new ol.format.GeoJSON();
var features_Waypoints_3 = format_Waypoints_3.readFeatures(json_Waypoints_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Waypoints_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waypoints_3.addFeatures(features_Waypoints_3);
var lyr_Waypoints_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waypoints_3, 
                style: style_Waypoints_3,
                popuplayertitle: "Waypoints",
                interactive: true,
                title: '<img src="styles/legend/Waypoints_3.png" /> Waypoints'
            });
var format_KawasanPenyebaranJentik_4 = new ol.format.GeoJSON();
var features_KawasanPenyebaranJentik_4 = format_KawasanPenyebaranJentik_4.readFeatures(json_KawasanPenyebaranJentik_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KawasanPenyebaranJentik_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanPenyebaranJentik_4.addFeatures(features_KawasanPenyebaranJentik_4);
var lyr_KawasanPenyebaranJentik_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanPenyebaranJentik_4, 
                style: style_KawasanPenyebaranJentik_4,
                popuplayertitle: "Kawasan Penyebaran Jentik",
                interactive: true,
                title: '<img src="styles/legend/KawasanPenyebaranJentik_4.png" /> Kawasan Penyebaran Jentik'
            });
var format_TitikJentik_5 = new ol.format.GeoJSON();
var features_TitikJentik_5 = format_TitikJentik_5.readFeatures(json_TitikJentik_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TitikJentik_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikJentik_5.addFeatures(features_TitikJentik_5);
var lyr_TitikJentik_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikJentik_5, 
                style: style_TitikJentik_5,
                popuplayertitle: "Titik Jentik",
                interactive: true,
                title: '<img src="styles/legend/TitikJentik_5.png" /> Titik Jentik'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_KelurahanPasirkaliki_2.setVisible(true);lyr_Waypoints_3.setVisible(true);lyr_KawasanPenyebaranJentik_4.setVisible(true);lyr_TitikJentik_5.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_OpenStreetMap_1,lyr_KelurahanPasirkaliki_2,lyr_Waypoints_3,lyr_KawasanPenyebaranJentik_4,lyr_TitikJentik_5];
lyr_KelurahanPasirkaliki_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_Waypoints_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_KawasanPenyebaranJentik_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TitikJentik_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_KelurahanPasirkaliki_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_Waypoints_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_KawasanPenyebaranJentik_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_TitikJentik_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_KelurahanPasirkaliki_2.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_Waypoints_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_KawasanPenyebaranJentik_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TitikJentik_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TitikJentik_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});