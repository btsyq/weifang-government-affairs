$(".callmsg").niceScroll({
	cursorcolor: "#227afe",
	cursoropacitymax: 1,
	touchbehavior: false,
	cursorwidth: "10px",
	cursorborder: "0",
	cursorborderradius: "5px"
})

$('.sctab>div').on('click', function() {
	$(this).addClass('active').siblings().removeClass('active');
	if($(this).hasClass('jzxx')) {
		$('.jzxxdiv').addClass('active').siblings().removeClass('active');
	} else if($(this).hasClass('jdxx')) {
		$('.jdxxdiv').addClass('active').siblings().removeClass('active');
	} else if($(this).hasClass('qsxx')) {
		$('.qsxxdiv').addClass('active').siblings().removeClass('active');
	}
});

var rotatedeg = 180;
$('.scbtm').on('click', function() {
	rotatedeg += 180;
	$('.sctop').slideToggle();
	$('.toggle').css({
		'-webkit-transform': 'rotate(' + rotatedeg + 'deg)',
		'-moz-transform': 'rotate(' + rotatedeg + 'deg)',
		'-ms-transform': 'rotate(' + rotatedeg + 'deg)',
		'-o-transform': 'rotate(' + rotatedeg + 'deg)',
		'transform': 'rotate(' + rotatedeg + 'deg)'
	});
})

//表格数据最多三条,注意顺序
var jzdata = {
	name: '王贵',
	age: 89,
	sex: '男',
	ill: '糖尿病,心肌梗',
	call: {
		time: [
			['2016-12-1', '08:20'],
			['2016-10-29', '18:12'],
			['2016-8-12', '21:09']
		],
		msg: [
			'忘记带钥匙,求助开锁',
			'来电人反映：我将车停在天熙苑小区门口商铺前的停车位上，因逆向停车被贴了罚单，不合理。',
			'求医问药'
		]
	}
}

jzmsg(jzdata);

function jzmsg(data) {
	$('#name').html(data.name);
	$('#age').html((data.age + '岁'));
	$('#sex').html(data.sex);
	$('#ill').html(data.ill);

	var msg = data.call;
	for(var i = 0; i < msg.time.length; i++) {
		$('.msgtable').append('<tr><td><p>' + msg.time[i][0] + '</p><p class="ldtime">' + msg.time[i][1] + '</p></td><td>' + msg.msg[i] + '</td></tr>');
	}
}

var mymap;
var layer;
var layer_label;
var layerraster;
var layerraster_label;

function mapInit() {
	//地图实例化  
	mymap = new NMap("map");
	//图层参数设置  
	var lyrOptionswmts = {
		tileSize: new NXY(256, 256),
		tileOrigin: new NXY(-180, 90),
		maxExtent: new NBounds(-180.0, -90.0, 180.0, 90.0),
		resolutions: [0.010986328125, 0.0054931640625, 0.00274658203125, 0.001373291015625, 0.0006866455078125, 0.00034332275390625, 0.000171661376953125, 0.0000858306884765625, 0.00004291534423828125, 0.000021457672119140625, 0.0000107288360595703125, 0.00000536441802978515625, 0.000002682209014892578125, 0.0000013411045074462890625],
		serverResolutions: {
			'7': 0.010986328125,
			'8': 0.0054931640625,
			'9': 0.00274658203125,
			'10': 0.001373291015625,
			'11': 0.0006866455078125,
			'12': 0.00034332275390625,
			'13': 0.000171661376953125,
			'14': 0.0000858306884765625,
			'15': 0.00004291534423828125,
			'16': 0.000021457672119140625,
			'17': 0.0000107288360595703125,
			'18': 0.00000536441802978515625,
			'19': 0.000002682209014892578125,
			'20': 0.0000013411045074462890625
		}
	};
	//矢量图层
	//潍坊市图层 18-20配置信息
	var whlayeroption = {
		format: "image/png",
		units: "dd",
		projection: "EPSG:4490",
		layer: "WFVectorMap",
		style: "Default",
		serviceMode: 'KVP',
		tileMatrixSet: "TileMatrixSet_0"
	};
	//省图层 2-17配置信息
	var provinceoption = {
		format: "image/png",
		units: "dd",
		projection: "EPSG:4490",
		layer: "0",
		style: "default",
		serviceMode: 'KVP',
		tileMatrixSet: "taishannew"
	};

	var configopt = [{
		url: 'http://124.128.48.210/tileservice/sdpubmap',
		z: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
		params: provinceoption
	}, {
		url: 'http://112.253.20.180:9898/newmap/tianditu/wfmap/WFVectorMap/wmts?',
		z: [18, 19, 20],
		params: whlayeroption
	}];
	layer = new NExtWMTSLayer("WMTS", "http://112.253.20.180:9898/newmap/tianditu/wfmap/WFVectorMap/wmts?", lyrOptionswmts, configopt);
	mymap.addLayer(layer);

	//矢量注记图层
	//潍坊市注记层配置信息
	var whoption_label = {
		format: "image/png",
		units: "dd",
		projection: "EPSG:4490",
		layer: "WFVectorMapAnno",
		style: "Default",
		serviceMode: 'KVP',
		tileMatrixSet: "TileMatrixSet_0"
	};

	var configopt_label = [{
		url: 'http://112.253.20.180:9898/newmap/tianditu/wfmap/WFVectorMapAnno/wmts',
		z: [18, 19, 20],
		params: whoption_label
	}];
	layer_label = new NExtWMTSLayer("WMTS", "http://112.253.20.180:9898/newmap/tianditu/wfmap/WFVectorMapAnno/wmts", lyrOptionswmts, configopt_label);
	layer_label.isBasicLayer = false;
	mymap.addLayer(layer_label);

	//影像图层
	//潍坊市影像18-20配置信息
	var rcrasteroption = {
		format: "image/png",
		units: "dd",
		projection: "EPSG:4490",
		layer: "WFRasterMap",
		style: "Default",
		serviceMode: 'KVP',
		tileMatrixSet: "TileMatrixSet_0"
	};
	//山东省影像 2-17配置信息
	var sdrasteroption = {
		format: "image/jpeg",
		units: "dd",
		projection: "EPSG:4490",
		layer: "0",
		style: "default",
		serviceMode: 'KVP',
		tileMatrixSet: "tianditu2013"
	};

	var configrasteropt = [{
		url: 'http://www.sdmap.gov.cn/tileservice/SDRasterPubMap',
		z: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
		params: sdrasteroption
	}, {
		url: 'http://112.253.20.180:9898/newmap/tianditu/wfmap/WFRasterMap/wmts?',
		z: [18, 19, 20],
		params: rcrasteroption
	}];
	layerraster = new NExtWMTSLayer("WMTSraster", "ttp://112.253.20.180:9898/newmap/tianditu/wfmap/WFRasterMap/wmts?", lyrOptionswmts, configrasteropt);
	layerraster.isBasicLayer = true;
	mymap.addLayer(layerraster);

	//影像注记
	//潍坊市注记层配置信息
	var rcraster_label = {
		format: "image/png",
		units: "dd",
		projection: "EPSG:4490",
		layer: "WFRasterMapAnno",
		style: "Default",
		serviceMode: 'KVP',
		tileMatrixSet: "TileMatrixSet_0"
	};
	//山东影像注记
	var sdraster_label = {
		format: "image/png",
		units: "dd",
		projection: "EPSG:4490",
		layer: "0",
		style: "default",
		serviceMode: 'KVP',
		tileMatrixSet: "taishannew"
	};

	var configraster_label = [{
		url: 'http://www.sdmap.gov.cn/tileservice/SDPubRasterNoteMapall',
		z: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
		params: sdraster_label
	}, {
		url: 'http://112.253.20.180:9898/newmap/tianditu/wfmap/WFRasterMapAnno/wmts?',
		z: [18, 19, 20],
		params: rcraster_label
	}];
	layerraster_label = new NExtWMTSLayer("WMTS", "http://112.253.20.180:9898/newmap/tianditu/wfmap/WFRasterMapAnno/wmts?", lyrOptionswmts, configraster_label);
	layerraster_label.isBasicLayer = false;
	layerraster_label.visible = false;
	mymap.addLayer(layerraster_label);

	mymap.moveTo(new NXY(119.1061, 36.7201), 4);

	//				mymap.addControl(new NPanZoomBarControl({
	//					useZoomBarTag: true
	//				}));
	//				mymap.addControl(new NPositionControl());
	mymap.setMode("dragzoom");
};