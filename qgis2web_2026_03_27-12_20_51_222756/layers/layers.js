var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://opentopomap.org/about#datenstand">OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KelasKepadatanPenduduk_3 = new ol.format.GeoJSON();
var features_KelasKepadatanPenduduk_3 = format_KelasKepadatanPenduduk_3.readFeatures(json_KelasKepadatanPenduduk_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KelasKepadatanPenduduk_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KelasKepadatanPenduduk_3.addFeatures(features_KelasKepadatanPenduduk_3);
var lyr_KelasKepadatanPenduduk_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KelasKepadatanPenduduk_3, 
                style: style_KelasKepadatanPenduduk_3,
                popuplayertitle: 'Kelas Kepadatan Penduduk',
                interactive: true,
    title: 'Kelas Kepadatan Penduduk<br />\
    <img src="styles/legend/KelasKepadatanPenduduk_3_0.png" /> rendah<br />\
    <img src="styles/legend/KelasKepadatanPenduduk_3_1.png" /> sedang<br />\
    <img src="styles/legend/KelasKepadatanPenduduk_3_2.png" /> tinggi<br />' });
var format_TitikPentingKependudukan_4 = new ol.format.GeoJSON();
var features_TitikPentingKependudukan_4 = format_TitikPentingKependudukan_4.readFeatures(json_TitikPentingKependudukan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikPentingKependudukan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikPentingKependudukan_4.addFeatures(features_TitikPentingKependudukan_4);
var lyr_TitikPentingKependudukan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikPentingKependudukan_4, 
                style: style_TitikPentingKependudukan_4,
                popuplayertitle: 'Titik Penting Kependudukan',
                interactive: true,
    title: 'Titik Penting Kependudukan<br />\
    <img src="styles/legend/TitikPentingKependudukan_4_0.png" /> Kalurahan<br />\
    <img src="styles/legend/TitikPentingKependudukan_4_1.png" /> Kecamatan<br />\
    <img src="styles/legend/TitikPentingKependudukan_4_2.png" /> Kependudukan<br />\
    <img src="styles/legend/TitikPentingKependudukan_4_3.png" /> Pemerintahan<br />' });

lyr_OpenTopoMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_KelasKepadatanPenduduk_3.setVisible(true);lyr_TitikPentingKependudukan_4.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_GoogleSatellite_1,lyr_OSMStandard_2,lyr_KelasKepadatanPenduduk_3,lyr_TitikPentingKependudukan_4];
lyr_KelasKepadatanPenduduk_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', 'kepadatan': 'kepadatan', 'kelas_kpdt': 'kelas_kpdt', });
lyr_TitikPentingKependudukan_4.set('fieldAliases', {'NAMA': 'NAMA', 'KATEGORI': 'KATEGORI', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_KelasKepadatanPenduduk_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', 'kepadatan': 'TextEdit', 'kelas_kpdt': 'TextEdit', });
lyr_TitikPentingKependudukan_4.set('fieldImages', {'NAMA': 'TextEdit', 'KATEGORI': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_KelasKepadatanPenduduk_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'inline label - always visible', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'inline label - always visible', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', 'kepadatan': 'no label', 'kelas_kpdt': 'no label', });
lyr_TitikPentingKependudukan_4.set('fieldLabels', {'NAMA': 'inline label - visible with data', 'KATEGORI': 'inline label - visible with data', 'LATITUDE': 'inline label - visible with data', 'LONGITUDE': 'inline label - visible with data', });
lyr_TitikPentingKependudukan_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});