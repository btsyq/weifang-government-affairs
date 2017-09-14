/**
 * 绘制地图
 */
!function () {
    var jusfMap = {};

    /**
     * 通过div的id初始化成功chart，并返回
     * @param id
     * @returns {{myChart: *, gECharts: *}}
     */
    function getChart(id) {
        var myChart;
        var gECharts;
        try {
            var ec = require('echarts');
            gECharts = ec;
        } catch (err) {
            gECharts = echarts;
        }
        if (gECharts != null) {
            myChart = gECharts.init(document.getElementById(id));
        }

        return {
            myChart: myChart,
            gECharts: gECharts
        }
    }

    /**
     * 获取地图系列数据
     *
     * @param seriesData
     * @returns {Array}
     */
    function getMapSeries(seriesData, datas, type) {
        var series = [];
        if (seriesData != null) {
            for (var i = 0; i < seriesData.length; i++) {
                var item = {
                    name: seriesData[i].name != null ? seriesData[i].name : '',
                    type: 'map',
                    mapType: seriesData[i].mapType,
                    selectedMode: 'single',
                    roam: seriesData[i].roam != null ? seriesData[i].roam : false,
                    zoom: seriesData[i].zoom != null ? seriesData[i].zoom : 1,
                    showLegendSymbol: seriesData[i].showLegendSymbol != null ? seriesData[i].showLegendSymbol : false,
                    data: seriesData[i].data != null ? seriesData[i].data : [],
                }
                if (type == null) {
                    item.itemStyle = {
                        normal: {
                            areaColor: '#eee',
                            borderColor: '#000'
                        },
                        emphasis: {
                            areaColor: '#FDA62D',
                            borderColor: '#000'
                        }
                    };
                    item.label = {
                        normal: {
                            show: seriesData[i].labelIsShow != null ? seriesData[i].labelIsShow : false
                        },
                        emphasis: {
                            show: seriesData[i].labelIsShow != null ? seriesData[i].labelIsShow : false
                        }
                    };
                } else {
                    item.itemStyle = {
                        normal: {
                            areaColor: '#eee',
                            borderColor: '#E2F5FE'
                        },
                        emphasis: {
                            areaColor: '#FDA62D',
                            borderColor: '#E2F5FE'
                        }
                    };
                    item.label = {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                color: 'white',
                                fontSize: 16
                            }
                        }
                    };
                }

                if (seriesData[i].pointData != null) {
                    item.markPoint = {
                        label: {
                            normal: {
                                formatter: function (params) {
                                    var hint = '';
                                    var isEnter = false;
                                    var schema = datas.subSchema;

                                    if (schema != null && schema.length > 0) {
                                        hint = params.data.name + '\n\n';
                                        for (var i = 0; i < schema.length; i++) {
                                            if (schema[i].icon != null
                                                && params.data[schema[i].icon] != null) {
                                                isEnter = true;
                                                hint = hint + schema[i].text + '\t' + ':\t'
                                                    + params.data[schema[i].icon] + '\n';
                                            }
                                        }
                                        if (!isEnter) {
                                            hint = params.data.name + (params.data.value != null ? '\t' + ':\t' + params.data.value : '' );
                                        }
                                        return hint;
                                    }
                                    return params.data.name + (params.data.value != null ? '\t' + ':\t' + params.data.value : '' );
                                },
                                textStyle: {
                                    color: 'white'
                                }
                            },
                            emphasis: {
                                formatter: function (params) {
                                    console.info(params);

                                    var hint = '';
                                    var isEnter = false;
                                    var schema = datas.subSchema;

                                    if (schema != null && schema.length > 0) {
                                        hint = params.data.name + '\n\n';
                                        for (var i = 0; i < schema.length; i++) {
                                            if (schema[i].icon != null
                                                && params.data[schema[i].icon] != null) {
                                                isEnter = true;
                                                hint = hint + schema[i].text + ':\t'
                                                    + params.data[schema[i].icon] + '\n';
                                            }
                                        }
                                        if (!isEnter) {
                                            hint = params.data.name + (params.data.value != null ? ':\t' + params.data.value : '' );
                                        }
                                        return hint;
                                    }
                                    return params.data.name + (params.data.value != null ? ':\t' + params.data.value : '' );
                                },
                                textStyle: {
                                    color: 'white'
                                }
                            }
                        },
                        data: seriesData[i].pointData != null ? seriesData[i].pointData : [],
                        tooltip: {
                            show: false
                        },
                        symbol: "image://../images/pointSymbol.png",//根据项目配置路径
                        symbolSize: [110, 80]
                    };
                } else {
                    //当前没有标记事，去除前一个序列的标记
                    item.markPoint = {
                        data: []
                    };
                }

                series.push(item);
            }
        }
        return series;
    }


    /**
     * 初始化时，设置legend选中第一个
     *
     * @param legendData
     * @returns {Object}
     */
    function getSelectedList(legendData, index) {
        var list = new Object();
        if (legendData != null && legendData.length > 0) {
            for (var i = 0; i < legendData.length; i++) {
                list[legendData[i]] = false;
            }
            list[legendData[index]] = true;
        }
        return list;
    }

    /**
     * 赋值
     * @param obj
     * @param fromObj
     */
    function setOptionParam(obj, fromObj) {
        if (fromObj != null) {
            return fromObj;
        }
        return obj;
    }

    /**
     * 设置map的基础option
     * @param datas
     */
    function setBaseOption(datas) {
        var title = {};
        var tooltip = {};
        var legend = {};
        var toolbox = {};
        var dataRange = {};

        title = setOptionParam(title, datas.title);
        tooltip = setOptionParam(tooltip, datas.tooltip);
        legend = setOptionParam(legend, datas.legend);
        toolbox = setOptionParam(toolbox, datas.toolbox);
        dataRange = setOptionParam(dataRange, datas.dataRange);

        var baseMapOption = {
//          backgroundColor: datas.backgroundColor != null ? datas.backgroundColor : 'transparent',
            title: {
                show: title.isShow != null ? title.isShow : true,
                text: title.text != null ? title.text : '',
                subtext: title.subtext != null ? title.subtext : '',
                subtextStyle: {
                    color: '#fff'
                },
                x: 12,
                top: '1%',
                textStyle: {
                    color: '#fff',
                    fontSize: 24
                }
            },
            tooltip: {
                show: tooltip.isShow != null ? tooltip.isShow : true,
                trigger: 'item',
                borderColor: '#419FFC',
                borderWidth: 1.5,
                padding: [8, 12, 8, 12],
                backgroundColor: "rgba(2,30,103,0.5)",
            },
            legend: {
                data: legend.data != null ? legend.data : [],
                show: legend.isShow != null ? legend.isShow : false,
                itemHeight: 7,
                //selectedMode: legend.selectedMode != null ? legend.selectedMode : 'single',
                //selected: getSelectedList(legend.data, 0),
                y: '1%',
                left: 'center',
                x: '2%',
                orient: 'horizontal',
                textStyle: {
                    fontSize: 16,
                    color: 'black'
                }
            },
            toolbox: {
                right: '2.5%',
                show: toolbox.isShow != null ? toolbox.isShow : true,
                feature: {
                    saveAsImage: {
                        show: false,
                        iconStyle: {
                            normal: {
                                color: "#1787FB",
                                borderColor: '#1787FB',
                                borderWidth: 2,
                                opacity: 0.8
                            }, emphasis: {
                                color: "#1787FB",
                                borderColor: '#1787FB',
                                borderWidth: 2,

                            }
                        }
                    }
                }
            },
            animationDuration: 1500,
            animationEasingUpdate: 'quinticInOut'
        };

        /**
         * datas.dataRange:{
     * type:'',//三种类型：continuous(连续型)、piecewise(分段型)、custom(自定义分段)
     * max:500,
     * min:0,
     * color:[],
     * text:'',//视觉映射两端的文本
     * textColor:''
     *dimension:0//哪个维度数据进行映射
     * }
         */
        //三种类型：continuous(连续型)、piecewise(分段型)、custom(自定义分段)
        var type = (dataRange != null && dataRange.type != null) ? dataRange.type : 'continuous';
        var color = (dataRange != null && dataRange.color != null) ? dataRange.color : '';
        var text = (dataRange != null && dataRange.text != null) ? dataRange.text : '';
        var textColor = (dataRange != null && dataRange.textColor != null) ? dataRange.textColor : '';
        var dimension = (dataRange != null && dataRange.dimension != null) ? dataRange.dimension : 0;

        if (type == 'continuous') {
            baseMapOption.dataRange = {
                /**
                 * 连续性视觉映射
                 */
                type: 'continuous',
                color: color != '' ? color : ['#1165E0', '#80C0FD'],
                text: text, // 可视图形的文本提示，默认为数值文本
                calculable: false,
                textStyle: {
                    color: textColor != '' ? textColor : '#98999D'
                },
                inverse: (dataRange != null && dataRange.inverse != null) ? dataRange.inverse : true,
                dimension: dimension
            };
        } else if (type == 'piecewise') {
            var splitNumber = (dataRange != null && dataRange.splitNumber != null) ? dataRange.splitNumber : 5;
            baseMapOption.dataRange = {
                /**
                 * 分段视觉映射--5段
                 */
                // left : null,
                // right : 20,
                // y: 350,
                type: 'piecewise',
                splitNumber: splitNumber,
                color: color != '' ? color : ['#0075B2', '#0093C9', '#13B7E0', '#54CCF1', '#A2E2F6'],
                textStyle: {
                    color: textColor != '' ? textColor : '#000'
                }
            };
        } else {
            /**
             * 自定义分段
             */
            var splitList = (dataRange != null && dataRange.splitNumber != null) ? dataRange.splitNumber : [];

            baseMapOption.dataRange = {

                orient: 'vertical', // 'vertical'
                color: color != '' ? color : ['rgba(204,0,0,0.8)', 'rgba(255,102,0,0.8)',
                    'rgba(255,204,0,0.8)', 'rgba(51,51,255,0.8)',
                    'rgba(0,153,102,0.8)'], //颜色
                splitList: splitList
            }
        }

        var min = (dataRange != null && dataRange.min != null) ? dataRange.min : 0;
        var max = (dataRange != null && dataRange.max != null) ? dataRange.max : 100;

        var bottom = (dataRange != null && dataRange.bottom != null) ? dataRange.bottom : 20;
        var x = (dataRange != null && dataRange.x != null) ? dataRange.x : 15;

        baseMapOption.dataRange.min = min;
        baseMapOption.dataRange.max = max;
        baseMapOption.dataRange.bottom = bottom;
        baseMapOption.dataRange.x = x;
        baseMapOption.dataRange.textGap = 15;

        if (dataRange != null && dataRange.left != null) {
            baseMapOption.dataRange.left = dataRange.left;
        }

        baseMapOption.dataRange.show = dataRange.isShow != null ? dataRange.isShow : true;


        if (datas.colors != null) {
            baseMapOption.color = datas.colors;
        } else if (datas.colors == null && legend.data != null) {
            var num = legend.data.length > 12 ? 12 : legend.data.length;

            var colors = ['#6190E3', '#F9BC2B', ' #72AC4D', '#F36262', '#F78B44',
                '#5E9CD3', '#F09E69', '#B4B4B4', '#FDBF2D', '#18A92E',
                '#FC4920', '#FC7B2C'];

            if (num < 13 && num > 0) {
                baseMapOption.color = colors.slice(0, num);
            }
        }

        return baseMapOption;
    }

    /**
     * 设置普通地图的option
     * @param datas
     * @returns {*}
     */
    function initCommonMapOption(datas) {
        var option = setBaseOption(datas);
        option.tooltip.formatter = function (params) {
            var hint = '';
            var isEnter = false;
            var schema = [];

            if (params.componentType == 'markPoint') {
                schema = datas.subSchema;
            } else if (params.componentType == 'series') {
                schema = datas.schema;
            }

            if (schema != null && schema.length > 0) {
                hint = '<div style="color:#DCB234">' + params.data.name + '</div>';
                for (var i = 0; i < schema.length; i++) {
                    if (schema[i].icon != null
                        && params.data[schema[i].icon] != null) {
                        isEnter = true;
                        hint = hint + schema[i].text + '\t' + ':\t'
                            + params.data[schema[i].icon] + '<br/>';
                    }
                }
                if (!isEnter) {
                    hint = params.data.name + (params.data.value != null ? ':\t' + params.data.value : '' );
                }
                return hint;
            }
            return params.data.name + (params.data.value != null ? '\t' + ':' + '\t' + params.data.value : '' );
        };


        option.series = getMapSeries(datas.series, datas, 0);

        return option;
    }

    /**
     * 设置带有timeline控件的map-option
     * @param datas
     * @returns {*}
     */
    function initTimelineMapOption(datas) {
        var baseOption = setBaseOption(datas);

        baseOption.tooltip.formatter = function (params) {
            var hint = '';
            var isEnter = false;
            var schema = [];

            if (params.componentType == 'markPoint') {
                schema = datas.subSchema;
            } else if (params.componentType == 'series') {
                schema = datas.schema;
            } else if (params.componentType == 'timeline') {
                return params.name;
            }

            if (schema != null && schema.length > 0) {
                hint = '<div style="color:#DCB234">' + params.data.name + '</div>';
                for (var i = 0; i < schema.length; i++) {
                    if (schema[i].icon != null
                        && params.data[schema[i].icon] != null) {
                        isEnter = true;
                        hint = hint + schema[i].text + '\t' + ':\t'
                            + params.data[schema[i].icon] + '<br/>';
                    }
                }
                if (!isEnter) {
                    hint = params.data.name + (params.data.value != null ? ':\t' + params.data.value : '' );
                }
                return hint;
            }
            return params.data.name + (params.data.value != null ? '\t' + ':' + '\t' + params.data.value : '' );
        };

        var timeline = {};
        timeline = setOptionParam(timeline, datas.timeline);
        var option = {};
        var firstSeries = [];
        firstSeries = datas.series[timeline.data[0]];
        option.baseOption = baseOption;

        var subData = {
            subSchema: datas.subSchema
        }

        option.baseOption.series = getMapSeries(firstSeries, subData);

        var timelineIsShow = true;
        if (datas.timeline == null) {
            timelineIsShow = false;
        }

        option.baseOption.timeline = {
            show: timeline.isShow != null ? timeline.isShow : timelineIsShow,
            width: timeline.width != null ? timeline.width : '56%',
            axisType: timeline.axisType != null ? timeline.axisType : 'category',
            orient: 'horizontal',
            autoPlay: timeline.autoPlay != null ? timeline.autoPlay : false,
            inverse: false,
            playInterval: timeline.playInterval != null ? timeline.playInterval : 1500,
            left: 'center',
            bottom: 0,
            currentIndex: timeline.currentIndex != null ? timeline.currentIndex : 0,
            label: {
                normal: {
                    textStyle: {
                        color: '#A8A8A8',
                        fontSize: 14
                    },
                    interval: timeline.interval != null ? timeline.interval : 0
                },
                emphasis: {
                    textStyle: {
                        color: '#A8A8A8',
                        fontSize: 14
                    },
                    interval: timeline.interval != null ? timeline.interval : 0
                }
            },
            symbol: timeline.symbol != null ? timeline.symbol : 'circle',
            symbolSize: 8,
            lineStyle: {
                color: '#1784B9'
            },
            itemStyle: {
                normal: {
                    color: '#22C7FC'
                }
                ,
                emphasis: {
                    color: '#FD7E23'
                }
            },
            checkpointStyle: {
                color: '#FC381D',
                borderColor: '#FC381D',
                borderWidth: 1,
                symbolSize: 10,
            },
            controlStyle: {
                show: timeline.controlIsShow != null ? timeline.controlIsShow : false,
                showNextBtn: false,
                showPrevBtn: false,
                normal: {
                    color: '#666',
                    borderColor: '#666'
                },
                emphasis: {
                    color: '#aaa',
                    borderColor: '#aaa'
                }
            },
            data: []
        };
        option.options = [];

        if (option.baseOption.timeline.axisType == 'time' && (timeline.setCustomTime != null && timeline.setCustomTime)) {
            option.baseOption.timeline.label.normal.formatter = function (params) {
                var newTime = new Date(params);
                var year = newTime.getFullYear();
                var month = newTime.getMonth() + 1;
                var date = newTime.getDate();

                if (month < 10) {
                    month = '0' + month;
                }
                if (date < 10) {
                    date = '0' + date;
                }
                return year + '-' + month + '-' + date;
            }
        }

        for (var n = 0; timeline.data != null && n < timeline.data.length; n++) {
            option.baseOption.timeline.data.push(timeline.data[n]);
            var curseries = [];
            curseries = datas.series[timeline.data[n]];
            var series = getMapSeries(curseries, subData);
            var suboption = {};
            if (timeline.textIsShow != null && timeline.textIsShow) {
                suboption = {
                    title: [
                        {
                            text: (datas.title != null && datas.title.text != null) ? datas.title.text : '',
                            x: 12,
                            top: '1%'
                        },
                        {
                            text: timeline.data[n],
                            right: 30,
                            top: '55%',
                            textStyle: {
                                fontSize: 50,
                                color: (datas.title != null && datas.title.subColor != null) ? datas.title.subColor : '#0075B2'
                            },
                            borderColor: 'rgba(0, 0, 0, 0.5)',
                            borderWidth: 2,
                            padding: 14,
                            textBaseline: 'middle'
                        }],
                    series: series
                }
            } else {
                suboption = {series: series}
            }

            option.options.push(suboption);
        }

        return option;
    }

    jusfMap.drawCommonMap = function (id, datas, dispatchParams) {
        var chart = getChart(id);
        var myChart = chart.myChart;

        try {
            // DOM重用时，清除遗留的图表信息
            if (myChart != null) {
                myChart.clear();

                // 设置option
                var option = initCommonMapOption(datas);

                myChart.setOption(option);
                if (dispatchParams != null) {
                    myChart.dispatchAction(dispatchParams);
                }

            }
        } catch (err) {
            console.error(err)
        }

        return myChart;
    }


    /**
     * 绘制带有时间轴的地图
     * @param id
     * @param datas
     */
    jusfMap.drawTimelineMap = function (id, datas) {
        var chart = getChart(id);
        var myChart = chart.myChart;

        try {
            // DOM重用时，清除遗留的图表信息
            if (myChart != null) {
                myChart.clear();

                // 设置option
                var option = initTimelineMapOption(datas);

                myChart.setOption(option);
                //myChart.on('click', function (params) {
                //    //console.info(params);
                //    // 点击调用
                //    if (param != null && fn != null) {
                //        if (param instanceof Array) {
                //            var arrayP = [];
                //            for (var i = 0; i < param.length; i++) {
                //                arrayP.push(params.data[param[i]])
                //            }
                //            fn(arrayP);
                //        } else {
                //            fn(params.data[param])
                //        }
                //    }
                //});
            }
        } catch (err) {
            console.error(err)
        }

        myChart.on('timelinechanged', function (params) {
            jusfMap.currentIndex = params.currentIndex;
        });

        return myChart;
    }

    /**
     * 获取时间轴，当前选中项
     * 默认为0
     * @type {number}
     */
    jusfMap.currentIndex = 0;

    jusfMap.addPointDatas = function (chart, pointData) {
        if (chart != null) {
            var option = initTimelineMapOption(pointData);

            chart.clear();
            chart.setOption(option);
        }
    }

    this.jusfMap = jusfMap;
}();