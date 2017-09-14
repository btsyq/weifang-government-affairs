function randomData() {
    return Math.round(Math.random() * 50);
    //return Math.round(Math.random() * 1000 / 5);
    //return 8000;
}

var series0118 = [
    {
        mapType: 'weifang',//潍坊地图识别名称
        data: [//添加content，利用<br/>进行换行
            {name: '寿光市', value: 1493, content: '农民及农村问题  <br/> 工商管理<br/> 城区供暖'},//content为附加属性数值，value为左侧视觉映射识别数据，颜色按照数值不同显示
            {name: '寒亭区', value: 658, content: '农民及农村问题 <br/> 城区供暖 <br/>民工工资及拖欠工程款'},
            {name: '昌邑市', value: 1059, content: '农民及农村问题  <br/> 劳动保障 <br/>工商管理'},
            {name: '青州市', value: 1351, content: '农民及农村问题  <br/> 工商管理 <br/>运输管理'},
            {name: '昌乐市', value: 9938, content: '农民及农村问题 <br/> 城区供暖<br/> 交通治安'},
            {name: '潍城区', value: 1432, content: '城区供暖 <br/> 工商管理 <br/>物业管理'},
            {name: '奎文区', value: 15283, content: '运输管理 <br/> 工商管理<br/> 交通治安'},
            {name: '昌乐县', value: 1068, content: '农民及农村问题 <br/> 城区供暖 <br/>工商管理'},
            {name: '坊子区', value: 691, content: '农民及农村问题 <br/> 城区供暖<br/> 物业管理'},
            {name: '安丘市', value: 1465, content: '农民及农村问题 <br/> 城区供暖 <br/>工商管理'},
            {name: '临朐县', value: 975, content: '农民及农村问题 <br/> 城区供暖 <br/>工商管理'},
            {name: '高密市', value: 1547, content: '农民及农村问题 <br/> 工商管理 <br/>城区供暖'},
            {name: '诸城市', value: 1920, content: '农民及农村问题 <br/> 工商管理 <br/>城区供暖'},
        ],
    },
];


//不带有标注的数据
function getEMapCommonDataNoPoint() {
    return {
        backgroundColor: '#021A4D',
        series: series0118,
		dataRange:{
			max:20000
		},
        schema: [{'text': '主要诉求热点\n', 'icon': 'content'}],//地图区域上添加属性时需要配置
    }
}
