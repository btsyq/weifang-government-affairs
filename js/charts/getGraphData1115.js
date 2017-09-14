/**
 * Created by lvzhaohua on 16/11/15.
 */
function randomSize(size) {
	if(size == null)
		return Math.round(Math.random() * 1000)
	return Math.round(Math.random() * size + 10)
}

function getEGraphData() {
	return {
		//      backgroundColor: '#021A4D',
		//      title: {
		//          text: '关键字分析',
		//          isShow: true
		//      },
		categories: [{
			name: '类别1'
		}, {
			name: '类别2'
		}, {
			name: '类别3'
		}, {
			name: '类别4'
		}],
		series: [{
			name: '测试力导向图的时间轴组件',
			nodes: [
				//{category: 0, name: '打人', value: randomSize()},
				//{category: 0, name: '乱收费', value: randomSize()},
				//{category: 0, name: '空气污染', value: randomSize()},
				//{category: 0, name: '热点', value: randomSize()},
				//{category: 0, name: '城市化', value: randomSize()},
				//{category: 0, name: '拥堵', value: randomSize()},
				//{category: 0, name: '医疗', value: randomSize()},
				//{category: 0, name: '废弃物', value: randomSize()},
				//{category: 0, name: '智慧城市', value: randomSize()},
				//{category: 1, name: '文化节', value: randomSize()},
				//{category: 1, name: '大数据', value: randomSize()},
				//{category: 1, name: '创业', value: randomSize()},
				//{category: 1, name: '科技', value: randomSize()},
				//{category: 1, name: '污染', value: randomSize()},
				//{category: 1, name: '工商', value: randomSize()},
				//{category: 1, name: '执法', value: randomSize()},
				//{category: 1, name: '规划', value: randomSize()},
				//{category: 1, name: '环境变化', value: randomSize()},
				//{category: 1, name: '环保监控', value: randomSize()},
				//{category: 2, name: '小学教育', value: randomSize()},
				//{category: 2, name: '民意云', value: randomSize()},
				//{category: 2, name: '大众创业', value: randomSize()},
				//{category: 2, name: '雾霾', value: randomSize()},
				//{category: 2, name: '医保', value: randomSize()},
				//{category: 3, name: '酒店', value: randomSize()},
				//{category: 3, name: '酒水车', value: randomSize()},
				//{category: 3, name: '比赛', value: randomSize()},
				//{category: 3, name: '交通', value: randomSize()},
				//{category: 3, name: '垃圾', value: randomSize()},
				{
					category: 0,
					name: '打人',
					value: randomSize(),
					symbolSize: randomSize(100)
				}, {
					category: 0,
					name: '乱收费',
					value: randomSize(),
					symbolSize: randomSize(100)
				}, {
					category: 0,
					name: '空气污染',
					value: randomSize(),
					symbolSize: randomSize(100)
				}, {
					category: 0,
					name: '热点',
					value: randomSize(),
					symbolSize: randomSize(100)
				}, {
					category: 0,
					name: '城市化',
					value: randomSize(),
					symbolSize: randomSize(100)
				}, {
					category: 0,
					name: '拥堵',
					value: randomSize(),
					symbolSize: randomSize(100)
				}, {
					category: 0,
					name: '医疗',
					value: randomSize(),
					symbolSize: randomSize(100)
				}, {
					category: 0,
					name: '废弃物',
					value: randomSize(),
					symbolSize: randomSize(100)
				}, {
					category: 0,
					name: '智慧城市',
					value: randomSize(),
					symbolSize: randomSize(100)
				}, {
					category: 1,
					name: '文化节',
					value: randomSize(),
					symbolSize: randomSize(100)
				}, {
					category: 1,
					name: '大数据',
					value: randomSize(),
					symbolSize: randomSize(100)
				}, {
					category: 1,
					name: '创业',
					value: randomSize(),
					symbolSize: randomSize(100)
				}, {
					category: 1,
					name: '科技',
					value: randomSize(),
					symbolSize: randomSize(100)
				}, {
					category: 1,
					name: '污染',
					value: randomSize(),
					symbolSize: randomSize(100)
				}, {
					category: 1,
					name: '工商',
					value: randomSize(),
					symbolSize: randomSize(100)
				}, {
					category: 1,
					name: '执法',
					value: randomSize(),
					symbolSize: randomSize(100)
				}, {
					category: 1,
					name: '规划',
					value: randomSize(),
					symbolSize: randomSize(100)
				}, {
					category: 1,
					name: '环境变化',
					value: randomSize(),
					symbolSize: randomSize(100)
				}, {
					category: 1,
					name: '环保监控',
					value: randomSize(),
					symbolSize: randomSize(100)
				}, {
					category: 2,
					name: '小学教育',
					value: randomSize(),
					symbolSize: randomSize(100)
				}, {
					category: 2,
					name: '民意云',
					value: randomSize(),
					symbolSize: randomSize(100)
				}, {
					category: 2,
					name: '大众创业',
					value: randomSize(),
					symbolSize: randomSize(100)
				}, {
					category: 2,
					name: '雾霾',
					value: randomSize(),
					symbolSize: randomSize(100)
				}, {
					category: 2,
					name: '医保',
					value: randomSize(),
					symbolSize: randomSize(100)
				}, {
					category: 3,
					name: '酒店',
					value: randomSize(),
					symbolSize: randomSize(100)
				}, {
					category: 3,
					name: '酒水车',
					value: randomSize(),
					symbolSize: randomSize(100)
				}, {
					category: 3,
					name: '比赛',
					value: randomSize(),
					symbolSize: randomSize(100)
				}, {
					category: 3,
					name: '交通',
					value: randomSize(),
					symbolSize: randomSize(100)
				}, {
					category: 3,
					name: '垃圾',
					value: randomSize(),
					symbolSize: randomSize(100)
				},
			],
			//repulsion: 100,//用于设置力导向图的斥力，越大，节点距离越大
		}]
	}
};