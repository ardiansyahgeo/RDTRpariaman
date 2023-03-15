var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_POLARUANG_1 = new ol.format.GeoJSON();
var features_POLARUANG_1 = format_POLARUANG_1.readFeatures(json_POLARUANG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLARUANG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLARUANG_1.addFeatures(features_POLARUANG_1);
var lyr_POLARUANG_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLARUANG_1, 
                style: style_POLARUANG_1,
                interactive: true,
    title: 'POLA RUANG<br />\
    <img src="styles/legend/POLARUANG_1_0.png" /> Badan Air<br />\
    <img src="styles/legend/POLARUANG_1_1.png" /> Badan Jalan<br />\
    <img src="styles/legend/POLARUANG_1_2.png" /> Cagar Budaya<br />\
    <img src="styles/legend/POLARUANG_1_3.png" /> Campuran Intensitas Menengah/Sedang<br />\
    <img src="styles/legend/POLARUANG_1_4.png" /> Hortikultura<br />\
    <img src="styles/legend/POLARUANG_1_5.png" /> Instalasi Pengolahan Air Limbah (IPAL)<br />\
    <img src="styles/legend/POLARUANG_1_6.png" /> Instalasi Pengolahan Air Minum (IPAM)<br />\
    <img src="styles/legend/POLARUANG_1_7.png" /> Jalur Hijau<br />\
    <img src="styles/legend/POLARUANG_1_8.png" /> Pemakaman<br />\
    <img src="styles/legend/POLARUANG_1_9.png" /> Perdagangan dan Jasa Skala Kota<br />\
    <img src="styles/legend/POLARUANG_1_10.png" /> Perdagangan dan Jasa Skala WP<br />\
    <img src="styles/legend/POLARUANG_1_11.png" /> Perikanan Budi Daya<br />\
    <img src="styles/legend/POLARUANG_1_12.png" /> Perkantoran<br />\
    <img src="styles/legend/POLARUANG_1_13.png" /> Perlindungan Setempat<br />\
    <img src="styles/legend/POLARUANG_1_14.png" /> Pertahanan dan Keamanan<br />\
    <img src="styles/legend/POLARUANG_1_15.png" /> Perumahan Kepadatan Rendah<br />\
    <img src="styles/legend/POLARUANG_1_16.png" /> Perumahan Kepadatan Sedang<br />\
    <img src="styles/legend/POLARUANG_1_17.png" /> Perumahan Kepadatan Tinggi<br />\
    <img src="styles/legend/POLARUANG_1_18.png" /> Peternakan<br />\
    <img src="styles/legend/POLARUANG_1_19.png" /> Rimba Kota<br />\
    <img src="styles/legend/POLARUANG_1_20.png" /> SPU Skala Kecamatan<br />\
    <img src="styles/legend/POLARUANG_1_21.png" /> SPU Skala Kelurahan<br />\
    <img src="styles/legend/POLARUANG_1_22.png" /> SPU Skala Kota<br />\
    <img src="styles/legend/POLARUANG_1_23.png" /> SPU Skala RW<br />\
    <img src="styles/legend/POLARUANG_1_24.png" /> Taman Kecamatan<br />\
    <img src="styles/legend/POLARUANG_1_25.png" /> Taman Kelurahan<br />\
    <img src="styles/legend/POLARUANG_1_26.png" /> Tanaman Pangan<br />\
    <img src="styles/legend/POLARUANG_1_27.png" /> Transportasi<br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_POLARUANG_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_POLARUANG_1];
lyr_POLARUANG_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nama_Objek': 'Nama Obyek', 'Nama_Zona': 'Nama Zona', 'Kode_Zona': 'Kode Zona', 'Nama_Sub_Z': 'Nama Sub Zona', 'Kode_Sub_Z': 'Kode Sub Zona', 'Jenis_Renc': 'Jenis Rencana', 'Kode_WP': 'Kode WP', 'Kode_SWP': 'Kode SWP', 'Kode_Blok': 'Kode Blok', 'Kode_Sub_B': 'Kode Sub Blok', 'Wilayah_Ad': 'Provinsi', 'Wilayah__1': 'Kabupaten', 'Wilayah__2': 'Kecamatan', 'Wilayah__3': 'Desa', 'Kawasan_Ke': 'Kawasan_Ke', 'Lahan_Pert': 'Lahan Pertanian Pangan Berkelanjutan', 'Kawasan_Ra': 'Kawasan Rawan Bencana', 'Kawasan_Be': 'Kawasan Berorientasi Transit', 'Tempat_Eva': 'Tempat Evakuasi Bencana', 'Pusat_Pene': 'Pusat Penelitian', 'Kawasan_Ca': 'Kawasan Cagar Budaya', 'Kawasan_Re': 'Kawasan Resapan Air', 'Kawasan_Se': 'Kawasan Sempadan', 'Kawasan_Pe': 'Kawasan Pertahanan dan Keamanan', 'Kawasan_Ka': 'Kawasan Karst', 'Kawasan__1': 'Kawasan Pertambangan Mineral dan Batubara', 'Kawasan_Mi': 'Kawasan Migrasi Satwa', 'Ruang_Dala': 'Ruang Dalam Bumi', 'Teknik_Pen': 'Teknik Pengaturan Zonasi', 'Catatan': 'Catatan', 'Luas_Area': 'Luas_Area', 'Shape_Area': 'Shape_Area', 'Shape_Leng': 'Shape_Leng', 'Shape_Ar_1': 'Shape_Ar_1', });
lyr_POLARUANG_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nama_Objek': 'TextEdit', 'Nama_Zona': 'TextEdit', 'Kode_Zona': 'TextEdit', 'Nama_Sub_Z': 'TextEdit', 'Kode_Sub_Z': 'TextEdit', 'Jenis_Renc': 'TextEdit', 'Kode_WP': 'TextEdit', 'Kode_SWP': 'TextEdit', 'Kode_Blok': 'TextEdit', 'Kode_Sub_B': 'TextEdit', 'Wilayah_Ad': 'TextEdit', 'Wilayah__1': 'TextEdit', 'Wilayah__2': 'TextEdit', 'Wilayah__3': 'TextEdit', 'Kawasan_Ke': 'TextEdit', 'Lahan_Pert': 'TextEdit', 'Kawasan_Ra': 'TextEdit', 'Kawasan_Be': 'TextEdit', 'Tempat_Eva': 'TextEdit', 'Pusat_Pene': 'TextEdit', 'Kawasan_Ca': 'TextEdit', 'Kawasan_Re': 'TextEdit', 'Kawasan_Se': 'TextEdit', 'Kawasan_Pe': 'TextEdit', 'Kawasan_Ka': 'TextEdit', 'Kawasan__1': 'TextEdit', 'Kawasan_Mi': 'TextEdit', 'Ruang_Dala': 'TextEdit', 'Teknik_Pen': 'TextEdit', 'Catatan': 'TextEdit', 'Luas_Area': 'TextEdit', 'Shape_Area': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Ar_1': 'TextEdit', });
lyr_POLARUANG_1.set('fieldLabels', {'OBJECTID': 'inline label', 'Nama_Objek': 'inline label', 'Nama_Zona': 'inline label', 'Kode_Zona': 'inline label', 'Nama_Sub_Z': 'inline label', 'Kode_Sub_Z': 'inline label', 'Jenis_Renc': 'inline label', 'Kode_WP': 'inline label', 'Kode_SWP': 'inline label', 'Kode_Blok': 'inline label', 'Kode_Sub_B': 'inline label', 'Wilayah_Ad': 'inline label', 'Wilayah__1': 'inline label', 'Wilayah__2': 'inline label', 'Wilayah__3': 'inline label', 'Kawasan_Ke': 'inline label', 'Lahan_Pert': 'inline label', 'Kawasan_Ra': 'inline label', 'Kawasan_Be': 'inline label', 'Tempat_Eva': 'inline label', 'Pusat_Pene': 'inline label', 'Kawasan_Ca': 'inline label', 'Kawasan_Re': 'inline label', 'Kawasan_Se': 'inline label', 'Kawasan_Pe': 'inline label', 'Kawasan_Ka': 'inline label', 'Kawasan__1': 'inline label', 'Kawasan_Mi': 'inline label', 'Ruang_Dala': 'inline label', 'Teknik_Pen': 'inline label', 'Catatan': 'inline label', 'Luas_Area': 'inline label', 'Shape_Area': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Ar_1': 'inline label', });
lyr_POLARUANG_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});