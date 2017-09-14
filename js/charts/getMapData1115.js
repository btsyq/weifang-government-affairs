function randomData() {
    return Math.round(Math.random() * 1000 / 5);
}


var seriestimeline = [
    {
        name: '冬季供暖',
        mapType: 'weifang',
        data: [
            {name: '寿光市', value: randomData(), value1: 10},
            {name: '寒亭区', value: randomData(), value1: 10},
            {name: '昌邑市', value: randomData(), value1: 10},
            {name: '青州市', value: randomData(), value1: 10},
            {name: '昌乐市', value: randomData(), value1: 10},
            {name: '潍城区', value: randomData(), value1: 10},
            {name: '奎文区', value: randomData(), value1: 10},
            {name: '昌乐县', value: randomData(), value1: 10},
            {name: '坊子区', value: randomData(), value1: 10},
            {name: '安丘市', value: randomData(), value1: 10},
            {name: '临朐县', value: randomData(), value1: 10},
            {name: '高密市', value: randomData(), value1: 10},
            {name: '诸城市', value: randomData(), value1: 10},
        ],
    },
    {
        name: '夏季供电',
        mapType: 'weifang',
        data: [
            {name: '寿光市', value: randomData(), value1: 10},
            {name: '寒亭区', value: randomData(), value1: 10},
            {name: '昌邑市', value: randomData(), value1: 10},
            {name: '青州市', value: randomData(), value1: 10},
            {name: '昌乐市', value: randomData(), value1: 10},
            {name: '潍城区', value: randomData(), value1: 10},
            {name: '奎文区', value: randomData(), value1: 10},
            {name: '昌乐县', value: randomData(), value1: 10},
            {name: '坊子区', value: randomData(), value1: 10},
            {name: '安丘市', value: randomData(), value1: 10},
            {name: '临朐县', value: randomData(), value1: 10},
            {name: '高密市', value: randomData(), value1: 10},
            {name: '诸城市', value: randomData(), value1: 10},
        ]
    },
    {
        name: '酸奶过期',
        mapType: 'weifang',
        data: [
            {name: '寿光市', value: randomData(), value1: 10},
            {name: '寒亭区', value: randomData(), value1: 10},
            {name: '昌邑市', value: randomData(), value1: 10},
            {name: '青州市', value: randomData(), value1: 10},
            {name: '昌乐市', value: randomData(), value1: 10},
            {name: '潍城区', value: randomData(), value1: 10},
            {name: '奎文区', value: randomData(), value1: 10},
            {name: '昌乐县', value: randomData(), value1: 10},
            {name: '坊子区', value: randomData(), value1: 10},
            {name: '安丘市', value: randomData(), value1: 10},
            {name: '临朐县', value: randomData(), value1: 10},
            {name: '高密市', value: randomData(), value1: 10},
            {name: '诸城市', value: randomData(), value1: 10},
        ]
    },
    {
        name: '东风街修路',
        mapType: 'weifang',
        data: [
            {name: '寿光市', value: randomData(), value1: 10},
            {name: '寒亭区', value: randomData(), value1: 10},
            {name: '昌邑市', value: randomData(), value1: 10},
            {name: '青州市', value: randomData(), value1: 10},
            {name: '昌乐市', value: randomData(), value1: 10},
            {name: '潍城区', value: randomData(), value1: 10},
            {name: '奎文区', value: randomData(), value1: 10},
            {name: '昌乐县', value: randomData(), value1: 10},
            {name: '坊子区', value: randomData(), value1: 10},
            {name: '安丘市', value: randomData(), value1: 10},
            {name: '临朐县', value: randomData(), value1: 10},
            {name: '高密市', value: randomData(), value1: 10},
            {name: '诸城市', value: randomData(), value1: 10},
        ]
    },
    {
        name: '煤气中毒',
        mapType: 'weifang',
        data: [
            {name: '寿光市', value: randomData(), value1: 10},
            {name: '寒亭区', value: randomData(), value1: 10},
            {name: '昌邑市', value: randomData(), value1: 10},
            {name: '青州市', value: randomData(), value1: 10},
            {name: '昌乐市', value: randomData(), value1: 10},
            {name: '潍城区', value: randomData(), value1: 10},
            {name: '奎文区', value: randomData(), value1: 10},
            {name: '昌乐县', value: randomData(), value1: 10},
            {name: '坊子区', value: randomData(), value1: 10},
            {name: '安丘市', value: randomData(), value1: 10},
            {name: '临朐县', value: randomData(), value1: 10},
            {name: '高密市', value: randomData(), value1: 10},
            {name: '诸城市', value: randomData(), value1: 10},
        ],
        //pointData: [
        //    {
        //        name: '企业1',
        //        coord: [121.123795, 31.173719],
        //        value: 100,
        //        value2: 20
        //    },
        //    //{
        //    //    name: '嘉定区地址1',
        //    //    coord: [121.291297, 31.298986],
        //    //    value: 130
        //    //},
        //    {
        //        name: '企业2',
        //        coord: [121.1353, 28.6688],
        //        value: 130,
        //        value2: 20
        //    }
        //]
    }
];


function geteMapDataTimeline(index) {
    return {
//      backgroundColor: '#021A4D',
        title: {
            text: '潍坊市热力图',
            subtext: '民意大数据平台',
            isShow: true,
        },
        legend: {
            //isShow: true,
            data: ['高价值企业分布', '中高价值企业分布', '低价值企业分布', '高价值企业分布1', '中高价值企业分布1', '低价值企业分布1']
        },
        tooltip: {
            isShow: false
        },
        series: {
            '2011': seriestimeline,
            '2012': seriestimeline,
            '2013': seriestimeline,
            '2014': seriestimeline,
            '2015': seriestimeline,
            '2016': seriestimeline,
            //'2011-10-11': seriestimeline,
            //'2012-10-11': seriestimeline,
            //'2013-10-11': seriestimeline,
            //'2014-10-11': seriestimeline,
            //'2015-10-11': seriestimeline,
            //'2016-10-11': seriestimeline,
        },
        schema: [{'text': '民意数量', 'icon': 'value'}, {'text': '区域排名', 'icon': 'value1'}],//地图区域上添加多余属性时需要配置
        //subSchema: schemast,
        dataRange: {
            max: 1200,
            min: 30,
            text: ['1200', '30'],
            //    type: 'custom',
            //    left: 'right',
            //    splitList: [
            //        {start: 1000000},
            //        {start: 900, end: 200000},
            //        {start: 300, end: 1000},
            //        {start: 10, end: 300, label: '自定义label: 10 到 200'},
            //        {end: 10}]
        },
        timeline: {
            //setCustomTime: true,
            //axisType: 'time',//轴的类型。可选值为：'value' 数值轴，适用于连续数据。'category' 类目轴，适用于离散的类目数据。'time' 时间轴，默认为'category'
            //data: ['2011-12-19', '2012-05-20','2013-08-21','2014-11-01', '2015-09-20','2016-10-11'],
            //data: ['2011-10-11', '2012-10-11', '2013-10-11', '2014-10-11', '2015-10-11', '2016-10-11'],
            data: ['2011', '2012', '2013', '2014', '2015', '2016'],
            currentIndex: index,
            //rotate:45
        }
    }
}

var seriestimelineOther = [
    {
        name: '冬季供暖',
        mapType: 'weifang',
        data: [
            {name: '寿光市', value: randomData(), value1: 10},
            {name: '寒亭区', value: randomData(), value1: 10},
            {name: '昌邑市', value: randomData(), value1: 10},
            {name: '青州市', value: randomData(), value1: 10},
            {name: '昌乐市', value: randomData(), value1: 10},
            {name: '潍城区', value: randomData(), value1: 10},
            {name: '奎文区', value: randomData(), value1: 10},
            {name: '昌乐县', value: randomData(), value1: 10},
            {name: '坊子区', value: randomData(), value1: 10},
            {name: '安丘市', value: randomData(), value1: 10},
            {name: '临朐县', value: randomData(), value1: 10},
            {name: '高密市', value: randomData(), value1: 10},
            {name: '诸城市', value: randomData(), value1: 10},
        ],
    },
    {
        name: '夏季供电',
        mapType: 'weifang',
        data: [
            {name: '寿光市', value: randomData(), value1: 10},
            {name: '寒亭区', value: randomData(), value1: 10},
            {name: '昌邑市', value: randomData(), value1: 10},
            {name: '青州市', value: randomData(), value1: 10},
            {name: '昌乐市', value: randomData(), value1: 10},
            {name: '潍城区', value: randomData(), value1: 10},
            {name: '奎文区', value: randomData(), value1: 10},
            {name: '昌乐县', value: randomData(), value1: 10},
            {name: '坊子区', value: randomData(), value1: 10},
            {name: '安丘市', value: randomData(), value1: 10},
            {name: '临朐县', value: randomData(), value1: 10},
            {name: '高密市', value: randomData(), value1: 10},
            {name: '诸城市', value: randomData(), value1: 10},
        ]
    },
    {
        name: '酸奶过期',
        mapType: 'weifang',
        data: [
            {name: '寿光市', value: randomData(), value1: 10},
            {name: '寒亭区', value: randomData(), value1: 10},
            {name: '昌邑市', value: randomData(), value1: 10},
            {name: '青州市', value: randomData(), value1: 10},
            {name: '昌乐市', value: randomData(), value1: 10},
            {name: '潍城区', value: randomData(), value1: 10},
            {name: '奎文区', value: randomData(), value1: 10},
            {name: '昌乐县', value: randomData(), value1: 10},
            {name: '坊子区', value: randomData(), value1: 10},
            {name: '安丘市', value: randomData(), value1: 10},
            {name: '临朐县', value: randomData(), value1: 10},
            {name: '高密市', value: randomData(), value1: 10},
            {name: '诸城市', value: randomData(), value1: 10},
        ],
        //pointData: [
        //    {
        //        name: '民意总数',
        //        coord: [118.539876, 36.516371],
        //        value: 100,
        //        value2: 20
        //    },
        //    {
        //        name: '排名第一',
        //        coord: [119.103784, 36.710062],
        //        value: 130,
        //        value2: 20
        //    }
        //]
    },
    {
        name: '东风街修路',
        mapType: 'weifang',
        data: [
            {name: '寿光市', value: randomData(), value1: 10},
            {name: '寒亭区', value: randomData(), value1: 10},
            {name: '昌邑市', value: randomData(), value1: 10},
            {name: '青州市', value: randomData(), value1: 10},
            {name: '昌乐市', value: randomData(), value1: 10},
            {name: '潍城区', value: randomData(), value1: 10},
            {name: '奎文区', value: randomData(), value1: 10},
            {name: '昌乐县', value: randomData(), value1: 10},
            {name: '坊子区', value: randomData(), value1: 10},
            {name: '安丘市', value: randomData(), value1: 10},
            {name: '临朐县', value: randomData(), value1: 10},
            {name: '高密市', value: randomData(), value1: 10},
            {name: '诸城市', value: randomData(), value1: 10},
        ]
    },
    {
        name: '煤气中毒',
        mapType: 'weifang',
        data: [
            {name: '寿光市', value: randomData(), value1: 10},
            {name: '寒亭区', value: randomData(), value1: 10},
            {name: '昌邑市', value: randomData(), value1: 10},
            {name: '青州市', value: randomData(), value1: 10},
            {name: '昌乐市', value: randomData(), value1: 10},
            {name: '潍城区', value: randomData(), value1: 10},
            {name: '奎文区', value: randomData(), value1: 10},
            {name: '昌乐县', value: randomData(), value1: 10},
            {name: '坊子区', value: randomData(), value1: 10},
            {name: '安丘市', value: randomData(), value1: 10},
            {name: '临朐县', value: randomData(), value1: 10},
            {name: '高密市', value: randomData(), value1: 10},
            {name: '诸城市', value: randomData(), value1: 10},
        ],
        pointData: [
            {
                name: '煤气中毒1',
                coord: [118.539876, 36.516371],
                value: 100,
                value2: 20
            },
            //{
            //    name: '嘉定区地址1',
            //    coord: [121.291297, 31.298986],
            //    value: 130
            //},
            //{
            //    name: '煤气中毒2',
            //    coord: [119.166326, 36.654616],
            //    value: 130,
            //    value2: 20
            //}
        ]
    }
];

var seriestimelineOther22 = [
    {
        name: '冬季供暖',
        mapType: 'weifang',
        data: [
            {name: '寿光市', value: randomData(), value1: 10},
            {name: '寒亭区', value: randomData(), value1: 10},
            {name: '昌邑市', value: randomData(), value1: 10},
            {name: '青州市', value: randomData(), value1: 10},
            {name: '昌乐市', value: randomData(), value1: 10},
            {name: '潍城区', value: randomData(), value1: 10},
            {name: '奎文区', value: randomData(), value1: 10},
            {name: '昌乐县', value: randomData(), value1: 10},
            {name: '坊子区', value: randomData(), value1: 10},
            {name: '安丘市', value: randomData(), value1: 10},
            {name: '临朐县', value: randomData(), value1: 10},
            {name: '高密市', value: randomData(), value1: 10},
            {name: '诸城市', value: randomData(), value1: 10},
        ],
    },
    {
        name: '夏季供电',
        mapType: 'weifang',
        data: [
            {name: '寿光市', value: randomData(), value1: 10},
            {name: '寒亭区', value: randomData(), value1: 10},
            {name: '昌邑市', value: randomData(), value1: 10},
            {name: '青州市', value: randomData(), value1: 10},
            {name: '昌乐市', value: randomData(), value1: 10},
            {name: '潍城区', value: randomData(), value1: 10},
            {name: '奎文区', value: randomData(), value1: 10},
            {name: '昌乐县', value: randomData(), value1: 10},
            {name: '坊子区', value: randomData(), value1: 10},
            {name: '安丘市', value: randomData(), value1: 10},
            {name: '临朐县', value: randomData(), value1: 10},
            {name: '高密市', value: randomData(), value1: 10},
            {name: '诸城市', value: randomData(), value1: 10},
        ]
    },
    {
        name: '酸奶过期',
        mapType: 'weifang',
        data: [
            {name: '寿光市', value: randomData(), value1: 10},
            {name: '寒亭区', value: randomData(), value1: 10},
            {name: '昌邑市', value: randomData(), value1: 10},
            {name: '青州市', value: randomData(), value1: 10},
            {name: '昌乐市', value: randomData(), value1: 10},
            {name: '潍城区', value: randomData(), value1: 10},
            {name: '奎文区', value: randomData(), value1: 10},
            {name: '昌乐县', value: randomData(), value1: 10},
            {name: '坊子区', value: randomData(), value1: 10},
            {name: '安丘市', value: randomData(), value1: 10},
            {name: '临朐县', value: randomData(), value1: 10},
            {name: '高密市', value: randomData(), value1: 10},
            {name: '诸城市', value: randomData(), value1: 10},
        ],
        pointData: [
            {
                name: '临朐县',
                coord: [118.539876, 36.516371],
                value: 100,
                value2: 20
            },
            {
                name: '昌乐县',
                coord: [119.103784, 36.710062],
                value: 130,
                value2: 20
            }
        ]
    },
    {
        name: '东风街修路',
        mapType: 'weifang',
        data: [
            {name: '寿光市', value: randomData(), value1: 10},
            {name: '寒亭区', value: randomData(), value1: 10},
            {name: '昌邑市', value: randomData(), value1: 10},
            {name: '青州市', value: randomData(), value1: 10},
            {name: '昌乐市', value: randomData(), value1: 10},
            {name: '潍城区', value: randomData(), value1: 10},
            {name: '奎文区', value: randomData(), value1: 10},
            {name: '昌乐县', value: randomData(), value1: 10},
            {name: '坊子区', value: randomData(), value1: 10},
            {name: '安丘市', value: randomData(), value1: 10},
            {name: '临朐县', value: randomData(), value1: 10},
            {name: '高密市', value: randomData(), value1: 10},
            {name: '诸城市', value: randomData(), value1: 10},
        ]
    },
    {
        name: '煤气中毒',
        mapType: 'weifang',
        data: [
            {name: '寿光市', value: randomData(), value1: 10},
            {name: '寒亭区', value: randomData(), value1: 10},
            {name: '昌邑市', value: randomData(), value1: 10},
            {name: '青州市', value: randomData(), value1: 10},
            {name: '昌乐市', value: randomData(), value1: 10},
            {name: '潍城区', value: randomData(), value1: 10},
            {name: '奎文区', value: randomData(), value1: 10},
            {name: '昌乐县', value: randomData(), value1: 10},
            {name: '坊子区', value: randomData(), value1: 10},
            {name: '安丘市', value: randomData(), value1: 10},
            {name: '临朐县', value: randomData(), value1: 10},
            {name: '高密市', value: randomData(), value1: 10},
            {name: '诸城市', value: randomData(), value1: 10},
        ],
    }
];
function geteMapDataTimelineOther(index) {
    return {
        backgroundColor: '#021A4D',
        title: {
            text: '潍坊市热力图',
            subtext: '民意大数据平台',
            isShow: true,
        },
        legend: {
            //isShow: true,
            data: ['冬季供暖', '夏季供电', '酸奶过期', '东风街修路', '煤气中毒']
        },
        series: {
            //'2011-10-11': seriestimelineOther,
            //'2012-10-11': seriestimeline,
            //'2013-10-11': seriestimelineOther22,
            //'2014-10-11': seriestimeline,
            //'2015-10-11': seriestimeline,
            //'2016-10-11': seriestimeline,
            '2011': seriestimelineOther,
            '2012': seriestimeline,
            '2013': seriestimelineOther22,
            '2014': seriestimeline,
            '2015': seriestimeline,
            '2016': seriestimeline,
        },
        //schema: [{'text': '评分', 'icon': 'value1'}],//地图区域上添加多余属性时需要配置
        subSchema: [{'text': '区域排行', 'icon': 'value2'}, {'text': '民意总数', 'icon': 'value'}],//MarkPoint上添加多余属性时需要配置
        dataRange: {
            max: 1200,
            min: 30,
            text: ['1200', '30'],
            //    type: 'custom',
            //    left: 'right',
            //    splitList: [
            //        {start: 1000000},
            //        {start: 900, end: 200000},
            //        {start: 300, end: 1000},
            //        {start: 10, end: 300, label: '自定义label: 10 到 200'},
            //        {end: 10}]
        },
        timeline: {
            //setCustomTime: true,
            //axisType: 'time',//轴的类型。可选值为：'value' 数值轴，适用于连续数据。'category' 类目轴，适用于离散的类目数据。'time' 时间轴，默认为'category'
            //data: ['2011-12-19', '2012-05-20','2013-08-21','2014-11-01', '2015-09-20','2016-10-11'],
            //data: ['2011-10-11', '2012-10-11', '2013-10-11', '2014-10-11', '2015-10-11', '2016-10-11'],
            data: ['2011', '2012', '2013', '2014', '2015', '2016'],
            currentIndex: index,
            //rotate:45
        }
    }
}

var seriesshandong = [
    {
        //name: '地域热力',
        //mapType: '山东',
        //data: [
        //    {name: '威海市', value: randomData(), value1: 10},
        //    {name: '淄博市', value: randomData(), value1: 10},
        //    {name: '枣庄市', value: randomData(), value1: 10},
        //    {name: '临沂市', value: randomData(), value1: 10},
        //    {name: '聊城市', value: randomData(), value1: 10},
        //    {name: '菏泽市', value: randomData(), value1: 10},
        //    {name: '济宁市', value: randomData(), value1: 10},
        //    {name: '东营市', value: randomData(), value1: 10},
        //    {name: '日照市', value: randomData(), value1: 10},
        //    {name: '烟台市', value: randomData(), value1: 10},
        //    {name: '青岛市', value: randomData(), value1: 10},
        //    {name: '莱芜市', value: randomData(), value1: 10},
        //    {name: '滨州市', value: randomData(), value1: 10},
        //    {name: '德州市', value: randomData(), value1: 10},
        //    {name: '潍坊市', value: randomData(), value1: 10},
        //    {name: '泰安市', value: randomData(), value1: 10},
        //    {name: '济南市', value: randomData(), value1: 10},
        //]
        name: '煤气中毒',
        mapType: 'weifang',
        data: [
            {name: '寿光市', value: randomData(), value1: 10, selected: true},
            {name: '寒亭区', value: randomData(), value1: 10},
            {name: '昌邑市', value: randomData(), value1: 10, selected: true},
            {name: '青州市', value: randomData(), value1: 10},
            {name: '昌乐市', value: randomData(), value1: 10},
            {name: '潍城区', value: randomData(), value1: 10},
            {name: '奎文区', value: randomData(), value1: 10},
            {name: '昌乐县', value: randomData(), value1: 10},
            {name: '坊子区', value: randomData(), value1: 10},
            {name: '安丘市', value: randomData(), value1: 10},
            {name: '临朐县', value: randomData(), value1: 10},
            {name: '高密市', value: randomData(), value1: 10},
            {name: '诸城市', value: randomData(), value1: 10},
        ],
    }];

var seriesweifang = [
    {
        name: '煤气中毒',
        mapType: 'weifang',
        data: [
            //{name: '寿光市'},
            //{name: '寒亭区'},
            //{name: '昌邑市'},
            //{name: '青州市'},
            //{name: '昌乐市'},
            //{name: '潍城区'},
            //{name: '奎文区'},
            //{name: '昌乐县'},
            //{name: '坊子区'},
            //{name: '安丘市'},
            //{name: '临朐县'},
            //{name: '高密市'},
            //{name: '诸城市'},
//            {name: '寿光市', value: 1, selected: true},
            {name: '寿光市', value: 1},
            {name: '寒亭区', value: 1},
            {name: '昌邑市', value: 1},
            {name: '青州市', value: 1},
            {name: '昌乐市', value: 1},
            {name: '潍城区', value: 1},
            {name: '奎文区', value: 1},
            {name: '昌乐县', value: 1},
            {name: '坊子区', value: 1},
            {name: '安丘市', value: 1},
            {name: '临朐县', value: 1},
            {name: '高密市', value: 1},
            {name: '诸城市', value: 1},
        ],
    }];

function getEMapData() {
    return {
//      backgroundColor: '#021A4D',
        //title: {
        //    text: '潍坊市热力图',
        //    //subtext: '民意大数据平台',
        //    isShow: true,
        //},
        //legend: {
        //    //isShow: true,
        //    data: ['地域热力']
        //},
        series: seriesweifang,
        //schema: [{'text': '评分', 'icon': 'value1'}],//地图区域上添加多余属性时需要配置
        //subSchema: [{'text': '区域排行', 'icon': 'value2'}, {'text': '民意总数', 'icon': 'value'}],//MarkPoint上添加多余属性时需要配置
        dataRange: {//必须设置
            max: 200,
            min: 30,
            isShow: false//隐藏视觉映射控件
        }
    }
}

var geoCoordMap = {
    "威海市": [122.080096, 37.167243],
    "淄博市": [118.047648, 36.814939],
    "枣庄市": [117.393047, 34.84217],
    "临沂市": [118.326443, 35.065282],
    "聊城市": [115.980367, 36.456013],
    "菏泽市": [115.469381, 35.246531],
    "济宁市": [116.587245, 35.415393],
    "东营市": [118.66471, 37.434564],
    "日照市": [119.207916, 35.541775],
    "烟台市": [120.988456, 37.322163],
    "青岛市": [120.124122, 36.649912],
    "莱芜市": [117.677736, 36.214397],
    "滨州市": [117.896125, 37.615125],
    "德州市": [116.547211, 37.2715],
    "潍坊市": [119.107078, 36.70925],
    "泰安市": [117.04042, 36.058289],
    "济南市": [117.278716, 36.651709],
}

function getMigrateData() {
    return {
//      backgroundColor: '#021A4D',
        geoCoordMap: geoCoordMap,
        geo: {map: '山东'},
        legend: {
            data: ['潍坊市迁徙图top10', '潍坊市迁徙图last'],
        },
        dataRange: {//必须设置
            max: 200,
            min: 0,
            color: ['#EC0C19', '#FB6120', '#FEF048'],
            isShow: true//隐藏视觉映射控件
        },
        series: [
            {
                name: '潍坊市迁徙图top10',
                data: [
                    [{name: '潍坊市'}, {name: '威海市', value: randomData()}],
                    [{name: '潍坊市'}, {name: '淄博市', value: randomData()}],
                    [{name: '潍坊市'}, {name: '枣庄市', value: randomData()}],
                    [{name: '潍坊市'}, {name: '临沂市', value: randomData()}],
                    [{name: '潍坊市'}, {name: '聊城市', value: randomData()}],
                    [{name: '潍坊市'}, {name: '菏泽市', value: randomData()}],
                    [{name: '潍坊市'}, {name: '济宁市', value: randomData()}],
                    [{name: '潍坊市'}, {name: '东营市', value: randomData()}],
                    [{name: '潍坊市'}, {name: '日照市', value: randomData()}],
                    [{name: '潍坊市'}, {name: '烟台市', value: randomData()}],
                    //[{name: '潍坊市'}, {name: '青岛市', value: randomData()}],
                    //[{name: '潍坊市'}, {name: '莱芜市', value: randomData()}],
                    //[{name: '潍坊市'}, {name: '滨州市', value: randomData()}],
                    //[{name: '潍坊市'}, {name: '德州市', value: randomData()}],
                    //[{name: '潍坊市'}, {name: '泰安市', value: randomData()}],
                    //[{name: '潍坊市'}, {name: '济南市', value: randomData()}]
                ]
            },
            {
                name: '潍坊市迁徙图last',
                data: [
                    //[{name: '潍坊市'}, {name: '威海市', value: randomData()}],
                    //[{name: '潍坊市'}, {name: '淄博市', value: randomData()}],
                    //[{name: '潍坊市'}, {name: '枣庄市', value: randomData()}],
                    //[{name: '潍坊市'}, {name: '临沂市', value: randomData()}],
                    //[{name: '潍坊市'}, {name: '聊城市', value: randomData()}],
                    //[{name: '潍坊市'}, {name: '菏泽市', value: randomData()}],
                    //[{name: '潍坊市'}, {name: '济宁市', value: randomData()}],
                    //[{name: '潍坊市'}, {name: '东营市', value: randomData()}],
                    //[{name: '潍坊市'}, {name: '日照市', value: randomData()}],
                    //[{name: '潍坊市'}, {name: '烟台市', value: randomData()}],
                    [{name: '潍坊市'}, {name: '青岛市', value: randomData()}],
                    [{name: '潍坊市'}, {name: '莱芜市', value: randomData()}],
                    [{name: '潍坊市'}, {name: '滨州市', value: randomData()}],
                    [{name: '潍坊市'}, {name: '德州市', value: randomData()}],
                    [{name: '潍坊市'}, {name: '泰安市', value: randomData()}],
                    [{name: '潍坊市'}, {name: '济南市', value: randomData()}]
                ]
            }
        ]
    }
}
