/**
 * Created by lvzhaohua on 16/11/14.
 */
function getELineData() {
	return {
		//      backgroundColor: '#021A4D',
		//      title: {
		//          text: '声量走势分析',
		//          isShow: true
		//      },
		legend: {
			isShow: true,
			data: ['冬季供暖民意', '冬季供暖民意1']
		},
		xAxis: {
			data: ['09-26', '10-01', '10-07', '10-14', '10-21', '11-01']
		},
		yAxis: {
			max: 2500
		},
		series: [{
			name: '冬季供暖民意',
			data: [1221, 1228, 1330, 1590, 1980, 2220],
			//tooltipIsShow: false,//控制标线的提示框是否显示，默认显示
			lineData: [{
				yAxis: 1500,
				itemType: 0 //通过itemType区别，若itemType为0，显示标线颜色，标签内容为数值；itemType为1，辅助数据，标签内容为名称
			}, {
				name: '\n本月平均\n声量', //辅助数据
				yAxis: 1500,
				itemType: 1,
				lineStyle: {
					normal: {
						opacity: 0,
						color: 'white'
					},
					emphasis: {
						opacity: 0,
						color: 'white'
					}
				},
				label: { //设置名称字体大小，同一个size，文字比数字稍显过大
					normal: {
						textStyle: {
							fontSize: 12
						}
					},
					emphasis: {
						textStyle: {
							fontSize: 12
						}
					}
				}
			}]
		}]
	}
}