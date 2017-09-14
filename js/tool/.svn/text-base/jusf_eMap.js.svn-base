/**
 * 绘制地图
 */
!function () {
    var jusfMap = {};
    var arrowUpPath = 'path://m271.14501,228.1622l32.00001,-114.72399l32.00001,114.72399l-16.00001,0l0,115.27602l-32.00001,0l0,-115.27602l-16.00001,0z';
    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

    /**
     *默认提供一种geoCoordMap，更改需求，需要在数据datas中添加geoCoordMap属性
     */
    var geoCoordMapDatas = {
        "寿光市": [118.840834, 36.980345],
        "寒亭区": [119.118107, 36.892325],
        "昌邑市": [119.431656, 36.928249],
        "青州市": [118.484693, 36.697855],
        "潍城区": [118.955564, 36.683034],
        "奎文区": [119.199305, 36.705443],
        "昌乐县": [118.935053, 36.539278],
        "坊子区": [119.370779, 36.561562],
        "安丘市": [119.128374, 36.30716],
        "临朐县": [118.537361, 36.347839],
        "高密市": [119.757033, 36.37754],
        "诸城市": [119.403182, 35.997093],
        "模拟中心": [119.148518, 36.60024]
    }

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
     * 格式化数值，非数字默认返回'-'，可添加参数alterSymbol设定默认返回字符
     * @param value
     * @param alterSymbol
     * @returns {Number}
     */
    function formattingValue(value, alterSymbol) {
        var result = parseInt(value);
        var alterSymbol = alterSymbol != null ? alterSymbol : '-';
        if (isNaN(result)) {
            result = alterSymbol;
        }
        return result
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
                } else if (type == 0) {
                    item.itemStyle = {
                        normal: {
                            areaColor: '#eee',
                            borderColor: '#E2F5FE'
                        },
                        emphasis: {
                            areaColor: '#FDA62D',//焦点、选中时，区域颜色
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
                                color: '#14A69C',//焦点、选中时，文字颜色
                                fontSize: 14
                            }
                        }
                    };
                } else {
                    item.showLegendSymbol = true;
                    item.itemStyle = {
                        normal: {
                            areaColor: '#eee',
                            borderColor: '#1468D8'
                        },
                        emphasis: {
                            areaColor: '#FDA62D',//焦点、选中时，区域颜色
                            borderColor: '#1468D8'
                        }
                    };
                    item.label = {
                        normal: {
                            show: true,
                            textStyle: {
                                color: '#FFFFFF',//焦点、选中时，文字颜色
                                fontSize: 12
                            }
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                color: '#FFFFFF',//焦点、选中时，文字颜色
                                fontSize: 12
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
                                            hint = params.data.name + '\t:\t' + formattingValue(params.data.value);
                                        }
                                        return hint;
                                    }
                                    return params.data.name + '\t:\t' + formattingValue(params.data.value);
                                },
                                textStyle: {
                                    color: 'white'
                                }
                            },
                            emphasis: {
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
                                                hint = hint + schema[i].text + ':\t'
                                                    + params.data[schema[i].icon] + '\n';
                                            }
                                        }
                                        if (!isEnter) {
                                            hint = params.data.name + '\t:\t' + formattingValue(params.data.value);
                                        }
                                        return hint;
                                    }
                                    return params.data.name + '\t:\t' + formattingValue(params.data.value);
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
                        symbol: "image://images/pointSymbol.png",//根据项目配置路径，image://，后面是图片路径
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
     * 获得迁徙图的序列数据
     * @param seriesData
     * @param geoCoordMap，地理坐标信息
     * @returns {Array}
     */
    function getMagriteMapSeries(seriesData, geoCoordMap, max) {
        var series = [];
        if (seriesData != null) {

            for (var i = 0; i < seriesData.length; i++) {
                var itemLines1 = {
                    name: seriesData[i].name,
                    type: 'lines',
                    animation: false,
                    zlevel: 1,
                    effect: {
                        period: 6,
                        show: true,
                        trailLength: 0.7,
                        //color: '#fff',//设置这个时，导致尾迹不消失
                        symbolSize: 4,//添加svg的symbol，模仿尾迹，但颜色受视觉映射控制
                        symbol: 'm233.19356,157.7056l64.43287,0l0,0c8.44089,0 15.28357,0.22386 15.28357,0.5c0,0.27614 -6.84268,0.5 -15.28357,0.5l-64.43287,0l0,0c-8.44088,0 -15.28357,-0.22386 -15.28357,-0.5c0,-0.27614 6.84269,-0.5 15.28357,-0.5z'
                    },
                    lineStyle: {
                        normal: {
                            width: 0,
                            curveness: 0.2,
                            opacity: 0.3
                        }
                    },
                    label: {
                        normal: {
                            show: false,
                            position: 'end',
                            formatter: function (value) {
                                return formattingValue(value.data.value, '')
                            },
                            textStyle: {
                                fontSize: 14
                            }
                        }
                    },
                    data: convertData(seriesData[i].data, geoCoordMap),
                    markLine: {//设置标线曲度无效
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        data: seriesData[i].lineData
                    },
                    //markPoint: {
                    //    symbol: "rect",
                    //    symbolSize: 50,
                    //    itemStyle: {
                    //        normal: {
                    //            color: 'blue'
                    //        }
                    //    },
                    //    data: seriesData[i].pointData != null ? seriesData[i].pointData : []
                    //}
                };

                var itemLines2 = {
                    name: seriesData[i].name,
                    type: 'lines',
                    zlevel: 2,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        symbolSize: 14,
                        symbolRotate: 90,
                        symbol: arrowUpPath
                        //symbol:'arrow'
                        //symbol: planePath
                    },
                    lineStyle: {
                        normal: {
                            show: true,
                            width: 1,
                            curveness: 0.2
                        }
                    },
                    data: convertData(seriesData[i].data, geoCoordMap)
                };

                var itemEffectScatter = {
                    name: seriesData[i].name,
                    type: 'effectScatter',
                    zlevel: 2,
                    rippleEffect: {
                        period: 6,
                        brushType: 'stroke',
                        scale: 3.5
                    },
                    coordinateSystem: 'geo',
                    label: {
                        normal: {
                            show: false,
                            // position: 'bottom',
                            // formatter: function (value) {
                            //     return formattingValue(value.data.value, '');
                            // }
                        },
                        emphasis: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontSize: 14
                            },
                            formatter: function (value) {
                                return formattingValue(value.data.value[2], '');
                            }
                        }
                    },
                    symbol: 'path://m212.93501,146.53001l0,0c0,-28.7188 25.74363,-52 57.5,-52l0,0c15.24994,0 29.8753,5.47855 40.65863,15.23044c10.78334,9.7519 16.84137,22.97829 16.84137,36.76956l0,0c0,28.7188 -25.74363,52 -57.5,52l0,0c-31.75636,0 -57.5,-23.2812 -57.5,-52zm28.75,0l0,0c0,14.3594 12.87182,26 28.75,26c15.87819,0 28.75,-11.6406 28.75,-26c0,-14.3594 -12.87182,-26 -28.75,-26l0,0c-15.87818,0 -28.75,11.64061 -28.75,26z',
                    symbolSize: function (value) {
                        var denominator = 14 * ((max / 200).toFixed(2));
                        return value[2] / denominator + 6;//+6圆圈大小最小为6，可调整节点圆圈大小
                    },
                    itemStyle: {
                        normal: {
                            opacity: 0
                        },
                        emphasis: {
                            show: true,
                            opacity: 1
                        }
                    },
                    data: getSuitableGeoData(seriesData[i].data, geoCoordMap, i)
                };

                series.push(itemLines1);
                series.push(itemLines2);
                series.push(itemEffectScatter);
            }
        }
        return series;
    }

    /**
     * 通过地理坐标信息，组装数据，格式为[lng,lat,value]
     * @param datas
     * @param geoCoordMap
     * @param i
     * @returns {Array}
     */
    function getSuitableGeoData(datas, geoCoordMap, i) {
        var list = [];
        if (i == 0) {
            list = datas.map(function (dataItem) {
                var result = {
                    name: dataItem[1].name
                };
                if (geoCoordMap[dataItem[1].name] != undefined) {
                    result.value = geoCoordMap[dataItem[1].name].concat([dataItem[1].value]);
                } else {
                    result.value = ['-', '-'].concat([dataItem[1].value]);
                }
                return result;
            })
        } else if (i == 1) {
            list = datas.map(function (dataItem) {
                var result = {
                    name: dataItem[0].name
                };
                if (geoCoordMap[dataItem[0].name] != undefined) {
                    result.value = geoCoordMap[dataItem[0].name].concat([dataItem[1].value]);
                } else {
                    result.value = ['-', '-'].concat([dataItem[1].value]);
                }
                return result;
            })
        }

        return list;
    }

    /**
     * 将数据处理成带有地理坐标的数据，如：
     * [
     * {"name":"北京-->上海","coords":[[116.4551,40.2539],[121.4648,31.2891]]},
     * {"name":"北京-->广州","coords":[[116.4551,40.2539],[113.5107,23.2196]]}]
     * @param data
     * @returns {Array}
     */
    function convertData(data, geoCoordMap) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];

            if (fromCoord == undefined || toCoord == undefined) {
                continue;
            }

            var item = {
                name: dataItem[0].name + '-->' + dataItem[1].name,
                coords: [fromCoord, toCoord],
                value: dataItem[1].value
            };

            res.push(item);
        }

        return res;
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
    function setBBaseOption(datas) {
        var title = {};
        var tooltip = {};
        var legend = {};
        var toolbox = {};

        title = setOptionParam(title, datas.title);
        tooltip = setOptionParam(tooltip, datas.tooltip);
        legend = setOptionParam(legend, datas.legend);
        toolbox = setOptionParam(toolbox, datas.toolbox);

        var baseMapOption = {
//            backgroundColor: datas.backgroundColor != null ? datas.backgroundColor : 'transparent',
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
                backgroundColor: "rgba(2,30,103,0.5)"
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
                right: '2.0%',
                y: '1.0%',
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

        if (datas.colors != null) {
            baseMapOption.color = datas.colors;
        } else if (datas.colors == null && legend.data != null) {
            var length = legend.data.length;

            var colors = ['#6190E3', '#F9BC2B', ' #72AC4D', '#F36262', '#F78B44',
                '#5E9CD3', '#F09E69', '#B4B4B4', '#FDBF2D', '#18A92E',
                '#FC4920', '#FC7B2C'];

            var m = Math.floor(length / colors.length);
            var n = length % colors.length;
            var tColors = [];
            for (var i = 0; i < m; i++) {
                tColors = tColors.concat(colors);
            }
            tColors = tColors.concat(colors.slice(0, n));
            baseMapOption.color = tColors;
        }

        return baseMapOption;
    }

    /**
     *
     * @param datas
     * @returns {*}
     */
    function setBaseOption(datas) {
        var bMapOption = setBBaseOption(datas);
        var dataRange = {};
        dataRange = setOptionParam(dataRange, datas.dataRange);

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
            bMapOption.dataRange = {
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
            bMapOption.dataRange = {
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

            bMapOption.dataRange = {

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

        bMapOption.dataRange.min = min;
        bMapOption.dataRange.max = max;
        bMapOption.dataRange.bottom = bottom;
        bMapOption.dataRange.x = x;
        bMapOption.dataRange.textGap = 15;

        if (dataRange != null && dataRange.left != null) {
            bMapOption.dataRange.left = dataRange.left;
        }

        bMapOption.dataRange.show = dataRange.isShow != null ? dataRange.isShow : true;

        return bMapOption;
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
     * 设置普通地图的option，新首页地图效果
     * @param datas
     * @returns {*}
     */
    function initCommonMapOtherOption(datas) {
        var option = setBaseOption(datas);
        var dataRange = {};
        dataRange = setOptionParam(dataRange, datas.dataRange);

        option.color = datas.colors != null ? datas.colors : ['#FFFFFF'];//添加图中圆圈颜色

        option.dataRange.show = dataRange.isShow != null ? dataRange.isShow : false;
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
                        hint = hint + '<span style="color:#8BC9F7">' + schema[i].text + '\t' + ':\t' + '</span><br/>'
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


        option.series = getMapSeries(datas.series, datas, 1);

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

    /**
     * 设置迁徙图的option
     * @param datas
     * @returns {*}
     */
    function initMagriteMapOption(datas) {
        var option = setBBaseOption(datas);
        var legend = {};
        var geo = {};
        var visualMap = {};
        var geoCoordMap = datas.geoCoordMap != null ? datas.geoCoordMap : geoCoordMapDatas;

        legend = setOptionParam(legend, datas.legend);
        geo = setOptionParam(geo, datas.geo);
        visualMap = setOptionParam(visualMap, datas.dataRange);

        option.visualMap = {
            show: visualMap.isShow != null ? visualMap.isShow : true,
            type: 'continuous',
            min: visualMap.min != null ? visualMap.min : 0,
            max: visualMap.max != null ? visualMap.max : 200,
            text: visualMap.text != null ? visualMap.text : '',
            realtime: false,
            calculable: true,
            textStyle: {color: 'white'},
            color: visualMap.color != null ? visualMap.color : ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
            inverse: visualMap.inverse != null ? visualMap.inverse : true,
            left: '1.2%',
            bottom: '1.5%'
        };


        option.legend = {
            data: legend.data != null ? legend.data : [],
            show: legend.isShow != null ? legend.isShow : true,
            right: '1.5%',
            bottom: '2%',
            itemHeight: 7,
            orient: 'vertical',
            textStyle: {
                fontSize: 14,
                color: '#CCCFD7'
            },
            align: 'right',
            selectedMode: legend.selectedMode != null ? legend.selectedMode : 'single'
        };

        option.geo = {
            map: geo.map,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#FFF',
                        fontSize: 12
                    }
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        color: '#FFF',
                        fontSize: 12
                    }
                }
            },
            zoom: geo.zoom != null ? geo.zoom : 1.12,
            roam: geo.roam != null ? geo.roam : true,
            itemStyle: {
                normal: {
                    areaColor: '#1B1B1B',
                    borderColor: 'rgba(100,149,237,1)'
                },
                emphasis: {
                    areaColor: '#1B1B1B'
                }
            }
        };

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
                    hint = params.data.name;
                    if (params.componentSubType == "effectScatter") {
                        hint += ('\t:\t' + formattingValue(params.data.value[2]))
                    }
                }
                return hint;
            }

            hint = params.data.name;
            if (params.componentSubType == "effectScatter") {
                hint += ('\t:\t' + formattingValue(params.data.value[2]))
            }
            return hint;
        };

        option.series = getMagriteMapSeries(datas.series, geoCoordMap, option.visualMap.max);

        return option;
    }

    /**
     * 绘制通用地图
     * @param id
     * @param datas
     * @param param
     * @returns {*}
     */
    jusfMap.drawCommonMap = function (id, datas, param) {
        var chart = getChart(id);
        var myChart = chart.myChart;

        try {
            // DOM重用时，清除遗留的图表信息
            if (myChart != null) {
                myChart.clear();

                // 设置option
                var option = initCommonMapOption(datas);

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
     * 新首页地图效果
     * @param id
     * @param datas
     * @param param
     * @returns {*}
     */
    jusfMap.drawCommonMapOther = function (id, datas, param) {
        var chart = getChart(id);
        var myChart = chart.myChart;

        try {
            // DOM重用时，清除遗留的图表信息
            if (myChart != null) {
                myChart.clear();

                // 设置option
                var option = initCommonMapOtherOption(datas);

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

    /**
     *添加标注，在带有时间轴的序列数据中
     * @param chart
     * @param pointData
     */
    jusfMap.addPointDatas = function (chart, pointData) {
        if (chart != null) {
            var option = initTimelineMapOption(pointData);

            chart.clear();
            chart.setOption(option);
        }
    }

    /**
     * 添加标注，在单个时间点的序列数据中
     * @param chart
     * @param pointData
     */
    jusfMap.addPointDatasCommon = function (chart, pointData) {
        if (chart != null) {
            var option = initCommonMapOption(pointData);

            chart.clear();
            chart.setOption(option);
        }
    }

    /**
     * 绘制迁徙地图
     * @param id
     * @param datas
     */
    jusfMap.drawMagriteMap = function (id, datas) {
        var chart = getChart(id);
        var myChart = chart.myChart;

        try {
            // DOM重用时，清除遗留的图表信息
            if (myChart != null) {
                myChart.clear();

                // 设置option
                var option = initMagriteMapOption(datas);

                myChart.setOption(option);
            }
        } catch (err) {
            console.error(err)
        }

        return myChart;
    }


    this.jusfMap = jusfMap;
}();