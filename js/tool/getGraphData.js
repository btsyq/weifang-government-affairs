function randomSize(size) {
    if (size == null)
        return Math.round(Math.random() * 1000)
    return Math.round(Math.random() * size + 10)
}

function getEGraphLayoutNoneData() {
    return {
//      backgroundColor: '#021A4D',
        max: 4324,//设置最大值，用于圆圈大小显示，默认大小为200
        series: [
            {
                data: [
                    {
                        name: '运输管理', value: 7153, labelName: '运输\n管理'//labelName,用于显示在圆圈内
                    },
                    {
                        name: '城区供暖', value: 6301, labelName: '城区\n供暖'
                    },
                    {
                        name: '工商管理', value: 3152, labelName: '工商\n管理'
                    },
                ],
            },
            {//辅助显示
                data: [
                    {
                        name: '运输管理', value: 7153, labelName: '运输\n管理'//labelName,用于显示在圆圈内
                    },
                    {
                        name: '城区供暖', value: 6301, labelName: '城区\n供暖'
                    },
                    {
                        name: '工商管理', value: 3152, labelName: '工商\n管理'
                    },
                ]
            }
        ]
    }
}


function getEGraphData() {
    return {
        //backgroundColor: '#021A4D',
        //title: {
        //    text: '关键字分析',
        //    isShow: true
        //},
        categories: [
            {
                name: '类别1'
            },
            {
                name: '类别2'
            },
            {
                name: '类别3'
            },
            {
                name: '类别4'
            }
        ],
        series: [
            {
                name: '热点事件分析--关键词分析',
                nodes: [
                    {category: 0, name: '工作', value: 17}/*,
                    {category: 0, name: '乱收费', value: randomSize()},
                    {category: 0, name: '空气污染', value: randomSize()},
                    {category: 0, name: '热点', value: randomSize()},
                    {category: 0, name: '城市化', value: randomSize()},
                    {category: 0, name: '拥堵', value: randomSize()},
                    {category: 0, name: '医疗', value: randomSize()},
                    {category: 0, name: '废弃物', value: randomSize()},
                    {category: 0, name: '智慧城市', value: randomSize()},
                    {category: 1, name: '文化节', value: randomSize()},
                    {category: 1, name: '大数据', value: randomSize()},
                    {category: 1, name: '创业', value: randomSize()},
                    {category: 1, name: '科技', value: randomSize()},
                    {category: 1, name: '污染', value: randomSize()},
                    {category: 1, name: '工商', value: randomSize()},
                    {category: 1, name: '执法', value: randomSize()},
                    {category: 1, name: '规划', value: randomSize()},
                    {category: 1, name: '环境变化', value: randomSize()},
                    {category: 1, name: '环保监控', value: randomSize()},
                    {category: 2, name: '小学教育', value: randomSize()},
                    {category: 2, name: '民意云', value: randomSize()},
                    {category: 2, name: '大众创业', value: randomSize()},
                    {category: 2, name: '雾霾', value: randomSize()},
                    {category: 2, name: '医保', value: randomSize()},
                    {category: 3, name: '酒店', value: randomSize()},
                    {category: 3, name: '酒水车', value: randomSize()},
                    {category: 3, name: '比赛', value: randomSize()},
                    {category: 3, name: '交通', value: randomSize()},
                    {category: 3, name: '垃圾', value: randomSize()},*/
                ],
                //repulsion: 100,//用于设置力导向图的斥力，越大，节点距离越大
            }
        ]
    }
}

function getEGraphData02() {
    return {
        backgroundColor: '#021A4D',
        categories: [
            {
                name: '类别1'
            },
            {
                name: '类别2'
            },
            {
                name: '类别3'
            },
            {
                name: '类别4'
            },
            {
                name: '类别5'
            }
        ],
        series: [
            {
                nodes: [
                    {category: 0, name: '金马路修路', value: randomSize()},
                    {category: 1, name: '儿童走失', value: randomSize()},
                    {category: 2, name: '冬季供暖', value: randomSize()},
                    {category: 3, name: '煤气中毒', value: randomSize()},
                    {category: 4, name: '过期食品', value: randomSize()},
                ],
            }
        ]
    }
}