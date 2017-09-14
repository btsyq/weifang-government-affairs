$('#yuqing').on('click',function(){
	$('#loginform').submit();
})

$('.wf_tab>div').on('click', function() {
	$(this).addClass('active').siblings().removeClass('active');
});


require.config({
	paths: {
		'echarts': '../js/tool/echarts3.3.1',
		'weifang': '../js/tool/weifang'
	}
});

require(
	[
		'echarts',
		'weifang'
	],
	function(ec) {
		var param = {
			//                    dispatchParams: {
			//                        type: 'mapSelect',
			////                    dataIndex: 1
			//                        name: '青州市'
			//                    },
			clickFn: test,
			clickParam: 'name'
				//                    clickParam: ['name', 'value']
		}

		function test(param) {
//			alert(param)
			if(param == '临朐县'){
				window.location.href="dqzq.html?dq="+param; 
			}else if(param == '奎文区'){
				window.location.href="dqzq2.html?dq="+param; 
			}else if(param == '坊子区'){
				window.location.href="dqzq3.html?dq="+param; 
			}else if(param == '寒亭区'){
				window.location.href="dqzq4.html?dq="+param; 
			}else if(param == '昌乐县'){
				window.location.href="dqzq5.html?dq="+param; 
			}else if(param == '潍城区'){
				window.location.href="dqzq6.html?dq="+param; 
			}else if(param == '青州市'){
				window.location.href="dqzq7.html?dq="+param; 
			}else if(param == '诸城市'){
				window.location.href="dqzq8.html?dq="+param; 
			}else if(param == '安丘市'){
				window.location.href="dqzq9.html?dq="+param; 
			}else if(param == '寿光市'){
				window.location.href="dqzq10.html?dq="+param; 
			}else if(param == '高密市'){
				window.location.href="dqzq11.html?dq="+param; 
			}else if(param == '昌邑市'){
				window.location.href="dqzq12.html?dq="+param; 
			}
			
			
			
		}

		chart = jusfMap.drawCommonMapOther('main', getEMapCommonDataNoPoint(), param);
	}
)
require.config({
	'paths': {
		'echarts': 'js/echarts',
	}
});

require(
	[
		'echarts',
	],
	function(ec) {
		var params = {
            clickFn: testF,
            clickParam: 'name'
//                    clickParam: ['name', 'value']
        }

        function testF(param) {
//          alert(param)
            window.location.href="rdgjc.html?gjc="+param;
        }
		/**
		 *首页--热点关键词
		 */
		jusfGraph.drawForceTwo('chart-wordcloud2', getEGraphData(), params);
		/**
		 *首页--热点事件预测
		 */
		jusfGraph.drawGraphLayoutNone('chart-wordcloud3', getEGraphLayoutNoneData());
		/**
		 *首页--热点类型预测
		 */
		jusfBar.drawHrzBar('chart-bar', getEBarData());
	})