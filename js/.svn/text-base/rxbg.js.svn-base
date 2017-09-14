
$("#timtab").change(function(){
	alert($(this).val());
});



$(function(){
    intType();   //初始化热点类型分布图
});

//初始化热点类型分布图
function intType(){
    var myChart = echarts.init(document.getElementById('chart1'));

    // 指定图表的配置项和数据
    var option = {
        legend: {
        	show: false,
//          orient: 'vertical',
//          itemHeight: 5,
//          align: 'left',
//          top: 'middle',
//          //right: '10%',
//           x: 'right',
//          textStyle: {
//              color: '#a3a6af'
//          },
//          data:['物业管理','市政建设','农民及农村问题 ','城管执法','社会治安','其他']
        },
        tooltip: {
            trigger: 'item',
            formatter: "{d}%",
            backgroundColor: 'transparent',
            position: ['38%', '42%'],
            padding: 10,
            textStyle: {
                fontSize: '20',
                fontWeight: 'bold',
                color: '#F77B17'
            }
        },
        color:['#ff502d','#ff8d27','#a6d845','#4ac977','#09b2e9','#168fff'],
        series : [
            {
                name:'',
                type:'pie',
                radius : [50, 100],
                center : ['50%', '50%'],
                avoidLabelOverlap: false,
                labelLine:{
                    normal:{
                        length:10,
                        length2:20
                    }
                },
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: '12'
                        }
                    }
                },
                itemStyle:{
                    normal:{
                        borderColor:'#0D2A58',
                        borderWidth:2
                    }
                },
                data:[
                    {value:641, name:'建议'},
                    {value:11976, name:'求助'},
                    {value:13130, name:'咨询 '},
                    {value:3058, name:'举报'},
                    {value:14013, name:'投诉'}

                ]
            },
            {
                name:'',
                type:'pie',
                radius : [74, 77],
                center : ['50%', '50%'],
                tooltip: {
                    show: false
                },
                hoverAnimation:false,
                legendHoverLink:false,
                label: {
                    show:false,
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                lableLine: {
                    show: false,
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                data:[
                    {
                        value:'',
                        itemStyle:{
                            normal:{
                                color:'#0B255F'
                            }
                        }
                    }
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}