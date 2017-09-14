/**
 * 绘制柱状图
 */

!function () {
    var jusfGraph = {};

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
            myChart = gECharts.init(document.getElementById(id), '-', 300);
        }

        return {
            myChart: myChart,
            gECharts: gECharts
        }
    }

    /**
     * 获得力导向图的序列数据
     * @param seriesData
     * @param categories
     * @returns {Array}
     */
    function getForceSeries(seriesData, categories) {
        var series = [];
        if (seriesData != null) {
            var item;
            for (var i = 0; i < seriesData.length; i++) {
                var nodes = seriesData[i].nodes;

                for (var j = 0; j < nodes.length; j++) {
                    if (nodes[j].symbolSize != null) {
                        nodes[j].label = {
                            normal: {
                                textStyle: {
                                    fontSize: nodes[j].symbolSize / 4 > 10 ? (nodes[j].symbolSize / 4 > 28 ? 28 : nodes[j].symbolSize / 4) : 10
                                }
                            },
                            emphasis: {
                                textStyle: {
                                    fontSize: nodes[j].symbolSize / 4 > 10 ? (nodes[j].symbolSize / 4 > 28 ? 28 : nodes[j].symbolSize / 4) : 10
                                }
                            }
                        }
                    } else {
                        nodes[j].label = {
                            normal: {
                                textStyle: {
                                    fontSize: nodes[j].value / 4 > 10 ? (nodes[j].value / 4 > 28 ? 28 : nodes[j].value / 4) : 10
                                }
                            },
                            emphasis: {
                                textStyle: {
                                    fontSize: nodes[j].value / 4 > 10 ? (nodes[j].value / 4 > 28 ? 28 : nodes[j].value / 4) : 10
                                }
                            }
                        }
                    }

                }

                var repulsionNum = Number(seriesData[i].repulsion != null ? seriesData[i].repulsion
                    : 130);
                item = {
                    name: seriesData[i].name != null ? seriesData[i].name : '',
                    type: 'graph',
                    layout: 'force',
                    data: nodes,
                    links: seriesData[i].links,
                    categories: categories,
                    roam: true,
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            textStyle: {
                                color: '#FFFFFF',
                                fontSize: 18
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            opacity: 0.8
                        },
                        emphasis: {
                            opacity: 1
                        }
                    },
                    force: {
                        repulsion: repulsionNum
                    },
                    symbol: 'circle',
                    symbolSize: function (value, params) {
                        if (params.data.symbolSize == null) {
                            if (value != null) {
                                var num = value / 4;
                                if (num < 30) {
                                    num = 30;
                                } else if (num > 100) {
                                    num = 100;
                                }
                                return num;
                            }
                        }
                        return 30;
                    }
                };
                series.push(item);
            }
        }
        return series;
    }

    /**
     * 首页热点关键词
     * 获得力导向图的序列数据
     * @param seriesData
     * @param categories
     * @returns {Array}
     */
    function getForceTwoSeries(seriesData, categories, colors) {
        var series = [];
        if (seriesData != null) {
            var item;
            for (var i = 0; i < seriesData.length; i++) {
                var nodes = seriesData[i].nodes;

                for (var j = 0; j < nodes.length; j++) {
                    nodes[j].itemStyle = {
                        normal: {
                            color: colors[j],
                            opacity: 0.5,
                            borderWidth: 1,
                            borderColor: colors[j],
                        },
                        emphasis: {
                            color: colors[j],
                            opacity: 1,
                            borderWidth: 1,
                            borderColor: colors[j]
                        }
                    };
                    var length = nodes[j].name.length;
                    var width = 100 + (length - 4) * 10;
                    nodes[j].symbolSize = [Number(width), 30];
                }

                var repulsionNum = Number(seriesData[i].repulsion != null ? seriesData[i].repulsion
                    : 100);
                item = {
                    name: seriesData[i].name != null ? seriesData[i].name : '',
                    type: 'graph',
                    layout: 'force',
                    data: nodes,
                    links: seriesData[i].links,
                    categories: categories,
                    roam: true,
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            textStyle: {
                                color: '#FFFFFF',
                                fontSize: 18
                            }
                        }
                    },
                    //itemStyle: {
                    //    normal: {
                    //        opacity: 0.6,
                    //        borderWidth: 2,
                    //    },
                    //    emphasis: {
                    //        opacity: 0.7,
                    //        borderWidth: 2
                    //    }
                    //},
                    force: {
                        repulsion: repulsionNum
                    },
                    //symbol: 'path://m173.50774,98.00559l198.72454,0l0,0c26.03348,0 47.13774,30.22079 47.13774,67.50002c0,37.27921 -21.10426,67.49999 -47.13774,67.49999l-198.72454,0l0,0c-26.03345,0 -47.13774,-30.22078 -47.13774,-67.49999c0,-37.27923 21.10428,-67.50002 47.13774,-67.50002z',
                    symbol: 'rect',
                    //symbolSize: [120, 30]
                };
                series.push(item);
            }
        }
        return series;
    }

    /**
     * 首页热点事件预测
     * 获得layout-none的序列数据
     * @param seriesData
     * @param colors
     * @returns {Array}
     */
    function getGraphLayoutNoneSeries(seriesData, max) {
        var max = max != null ? max : 200;
        var colors = ['#A9040F', '#BF5212', '#019CF6',
            '#0073B2', '#009D7D', '#00DEE5', '#C88111', '#6F4CB3',
            '#FC3E1D', '#1787FB', '#FEE233', '#FD9526', '#149343', '#1BA4DE', '#28E4FD', '#1FB5FC'];
        var colorsLength = colors.length;
        var series = [];
        if (seriesData != null) {
            var item;
            for (var i = 0; i < seriesData.length; i++) {
                var total = seriesData[i].data.length;
                var nodes = seriesData[i].data;
                var attr = [[130, 90], [100, 220], [240, 170]];
                item = '';
                if (i == 0) {
                    for (var j = 0; j < total; j++) {
                        nodes[j].itemStyle = {
                            normal: {
                                color: colors[j % colorsLength],
                                opacity: 0.5,
                                borderWidth: 2,
                                borderColor: colors[j % colorsLength],
                            },
                            emphasis: {
                                color: colors[j % colorsLength],
                                opacity: 1,
                                borderWidth: 2,
                                borderColor: colors[j % colorsLength]
                            }
                        };
                        if (nodes[j].x == null && nodes[j].y == null) {
                            nodes[j].x = attr[j % 3][0];
                            nodes[j].y = attr[j % 3][1];
                        }
                    }


                    item = {
                        name: seriesData[i].name != null ? seriesData[i].name : '',
                        type: 'graph',
                        layout: 'none',
                        data: nodes,
                        roam: true,
                        label: {
                            normal: {
                                show: true,
                                position: 'inside',
                                textStyle: {
                                    color: 'white',
                                    fontSize: 14
                                },
                                formatter: function (params) {
                                    var result = '';
                                    if (params.data.labelName != null) {
                                        result = params.data.labelName;
                                    } else {
                                        result = params.data.name != null ? params.data.name : '';
                                    }
                                    return result;
                                }
                            }
                        },
                        symbol: 'circle',
                        symbolSize: function (value) {
                            var denominator = 12 * ((max / 400).toFixed(2));
                            return value / denominator + 30;//+30圆圈大小最小为30，可调整节点圆圈大小
                        }
                    };

                } else {
                    //辅助显示
                    var icon = '';
                    for (var k = 0; k < nodes.length; k++) {
                        icon = (k % 3 == 0 || k % 3 == 1) ? 'path://m160.58949,141.55847l10.7315,-13.9972l-10.7315,-13.9973l6.1336,-7.99929l16.8664,21.99659l-16.8664,22.00341' :
                            'path://m213.24969,143.2255l-9.33281,10.17884l9.33281,10.17883l-5.3336,5.82057l-14.66641,-15.99939l14.66641,-16.00061';
                        var textOffset = (k % 3 != 0 && k % 3 != 1) ? ['50%', 0] : ['-50%', 0];
                        nodes[k].symbolOffset = (k % 3 != 0 && k % 3 != 1) ? ['600%', 0] : ['-600%', 0];//调整箭头偏移量
                        nodes[k].symbol = icon;
                        nodes[k].symbolSize = [8, 8];
                        nodes[k].itemStyle = {
                            normal: {
                                color: colors[k % colorsLength],
                                opacity: 1,
                                borderColor: colors[k % colorsLength],
                            },
                            emphasis: {
                                color: colors[k % colorsLength],
                                opacity: 1,
                                borderColor: colors[k % colorsLength]
                            }
                        };
                        nodes[k].label = {
                            normal: {
                                show: true,
                                position: (k % 3 != 0 && k % 3 != 1) ? 'right' : 'left',
                                textStyle: {
                                    color: colors[k % colorsLength],
                                    fontSize: 1,
                                    offset: textOffset
                                },
                            },
                            emphasis: {
                                show: true,
                                position: (k % 3 != 0 && k % 3 != 1) ? 'right' : 'left',
                                textStyle: {
                                    color: colors[k % colorsLength],
                                    fontSize: 18,
                                    offset: textOffset
                                }
                            }
                        };

                        if (nodes[k].x == null && nodes[k].y == null) {
                            nodes[k].x = attr[k % 3][0];
                            nodes[k].y = attr[k % 3][1];
                        }
                    }

                    item = {
                        type: 'graph',
                        layout: 'none',
                        data: nodes,
                        roam: true,
                        nodeScaleRatio: 1,
                        tooltip: {show: false},
                        label: {
                            normal: {
                                formatter: function (params) {
                                    return (params.value != null ? (params.value + (params.unit != null ? params.unit : '件')) : '');
                                }
                            }
                        }
                    };
                }

                var tmpAttr = [[0, 0], [300, 300]];
                for (var t = 0; t < tmpAttr.length; t++) {
                    item.data.push({
                        x: tmpAttr[t][0],
                        y: tmpAttr[t][1],
                        itemStyle: {
                            normal: {
                                color: 'transparent',
                            }
                        },
                        label: {
                            normal: {
                                show: false,
                            }
                        }
                    });
                }
                series.push(item);
            }
        }
        return series;
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
     * 设置基类
     * @param datas
     * @returns {{}}
     */
    function setBaseOption(datas) {
        var title = {};
        var tooltip = {};
        var toolbox = {};

        title = setOptionParam(title, datas.title);
        tooltip = setOptionParam(tooltip, datas.tooltip);
        toolbox = setOptionParam(toolbox, datas.toolbox);

        var baseOption = {
            backgroundColor: datas.backgroundColor != null ? datas.backgroundColor : 'transparent',
            title: [
                {
                    show: title.isShow != null ? title.isShow : false,
                    text: title.text != null ? title.text : '',
                    subtext: title.subtext != null ? title.subtext : '',
                    subtextStyle: {
                        color: '#fff'
                    },
                    x: 13,
                    top: '1%',
                    textStyle: {
                        color: '#fff',
                        fontSize: 18
                    }
                }
            ],
            tooltip: {
                show: tooltip.isShow != null ? tooltip.isShow : true,
                trigger: 'item',
                borderColor: '#419FFC',
                borderWidth: 1.5,
                padding: [8, 12, 8, 12],
                backgroundColor: "rgba(2,30,103,0.5)",
                formatter: function (params) {
                    var hint = '';
                    hint = hint + '<span style="color:#DCB234;font-size: 16px">' + params.name + '</span>' + '\t:\t' + (params.value != undefined ? params.value : '-');
                    return hint;
                }
            },
            toolbox: {
                right: '17',
                y: '10',
                show: toolbox.isShow != null ? toolbox.isShow : false,
                feature: {
                    saveAsImage: {
                        show: true,
                        backgroundColor: toolbox.backgroundColor != null ? toolbox.backgroundColor : '#002e73',
                        iconStyle: {
                            normal: {
                                borderColor: '#0084ff'
                            }
                        }
                    }
                }
            },
            animationDuration: 1500,
            animationEasingUpdate: 'quinticInOut'
        };

        // 可设置自定义颜色
        if (datas.colors != null) {
            baseOption.color = datas.colors;
        } else if (datas.colors == null && datas.categories != null) {
            var num = datas.categories.length > 6 ? 6 : datas.categories.length;
            var colors = ['#D73617', '#3192E3', '#1BB264', '#E5A73A', '#2D2B2D', '#632F32'];
            if (num < 7 && num > 0) {
                baseOption.color = colors.slice(0, num);
            }
        }

        return baseOption;
    }

    /**
     * 设置力导向图的option
     * @param datas
     * @returns {{}}
     */
    function initForceOption(datas) {
        var option = setBaseOption(datas);
        option.series = getForceSeries(datas.series, datas.categories);

        return option;
    }

    /**
     * 首页热点关键词
     * 设置力导向图的option
     * @param datas
     * @returns {{}}
     */
    function initForceTwoOption(datas) {
        var option = setBaseOption(datas);

        // 可设置自定义颜色
        if (datas.colors != null) {
            option.color = datas.colors;
        } else if (datas.colors == null && datas.categories != null) {
            var length = datas.categories.length;

            var colors = ['#0073B2', '#009D7D', '#00DEE5', '#C88111', '#6F4CB3',
                '#FC3E1D', '#1787FB', '#FEE233', '#FD9526', '#149343', '#1BA4DE', '#28E4FD', '#1FB5FC'];

            var m = Math.floor(length / colors.length);
            var n = length % colors.length;
            var tColors = [];
            for (var i = 0; i < m; i++) {
                tColors = tColors.concat(colors);
            }
            tColors = tColors.concat(colors.slice(0, n));
            option.color = tColors;
        }

        option.series = getForceTwoSeries(datas.series, datas.categories, option.color);
        return option;
    }

    /**
     * 首页热点事件预测
     * 设置力导向图的option
     * @param datas
     * @returns {{}}
     */
    function initGraphLayoutNoneOption(datas) {
        var option = setBaseOption(datas);

        // 可设置自定义颜色
        if (datas.colors != null) {
            option.color = datas.colors;
        } else if (datas.colors == null && datas.categories != null) {
            var length = datas.categories.length;

            var colors = ['#A9040F', '#019CF6', '#BF5212',
                '#0073B2', '#009D7D', '#00DEE5', '#C88111', '#6F4CB3',
                '#FC3E1D', '#1787FB', '#FEE233', '#FD9526', '#149343', '#1BA4DE', '#28E4FD', '#1FB5FC'];

            var m = Math.floor(length / colors.length);
            var n = length % colors.length;
            var tColors = [];
            for (var i = 0; i < m; i++) {
                tColors = tColors.concat(colors);
            }
            tColors = tColors.concat(colors.slice(0, n));
            option.color = tColors;
        }

        option.series = getGraphLayoutNoneSeries(datas.series, datas.max);
        return option;
    }

    /**
     * 绘制力导向图
     * @param id
     * @param datas
     * @returns {*}
     */
    jusfGraph.drawForce = function (id, datas) {
        var chart = getChart(id);
        var myChart = chart.myChart;

        try {
            // DOM重用时，清除遗留的图表信息
            if (myChart != null) {
                myChart.clear();

                // 设置option
                var option = initForceOption(datas);

                myChart.setOption(option);
            }
        } catch (err) {
            console.error(err)
        }

        return myChart;
    }

    /**
     * 首页热点关键词
     * @param id
     * @param datas
     * @returns {*}
     */
    jusfGraph.drawForceTwo = function (id, datas, param) {
        var chart = getChart(id);
        var myChart = chart.myChart;

        try {
            // DOM重用时，清除遗留的图表信息
            if (myChart != null) {
                myChart.clear();

                // 设置option
                var option = initForceTwoOption(datas);

                myChart.setOption(option);
                if (param != null) {
                    if (param.dispatchParams != null) {
                        myChart.dispatchAction(param.dispatchParams);
                    }

                    if (param.clickFn != null && param.clickFn instanceof Function && param.clickParam != null) {
                        myChart.on('click', function (params) {
                            //点击地图区域，根据所需参数返回data中存在数据
                            if (param.clickParam instanceof Array) {
                                var arrayP = [];
                                for (var i = 0; i < param.clickParam.length; i++) {
                                    arrayP.push(params.data[param.clickParam[i]] != null ? params.data[param.clickParam[i]] : params[param.clickParam[i]])
                                }
                                param.clickFn(arrayP);
                            } else {
                                param.clickFn(params.data[param.clickParam] != null ? params.data[param.clickParam] : params[param.clickParam])
                            }
                        })
                    }

                }
            }
        } catch (err) {
            console.error(err)
        }

        return myChart;
    }

    /**
     * 首页热点事件预测
     * @param id
     * @param datas
     * @returns {*}
     */
    jusfGraph.drawGraphLayoutNone = function (id, datas) {
        var chart = getChart(id);
        var myChart = chart.myChart;

        try {
            // DOM重用时，清除遗留的图表信息
            if (myChart != null) {
                myChart.clear();

                // 设置option
                var option = initGraphLayoutNoneOption(datas);

                myChart.setOption(option);
            }
        } catch (err) {
            console.error(err)
        }

        return myChart;
    }

    this.jusfGraph = jusfGraph;
}

();
