/**
 * 绘制仪表盘
 */

!function () {
    var jusfDashBoard = {};

    jusfDashBoard.createBDashBoard = function (id, width, height, datas) {
        var textPxOne = '16px';
        var textPxTwo = '28px';
        var textPxThree = '14px';
        var textPxFour = '12px';

        var svg = d3.select("#" + id).append("svg")
            .attr("width", width)
            .attr("height", height);
        if (datas.backgroundColor != null) {
            svg.style('background-color', datas.backgroundColor);
        }

        //添加仪表盘背景图片
        var gImage = svg.append("g")
            .attr("transform", "translate(30,25)")
            .attr("class", "gImage");
        gImage.append("image")
            .attr("width", 142)
            .attr("height", 117)
            .style('border', '6px')
            .attr("xlink:href", datas.config.dashBoardBgUrl);//背景图片项目地址

        //添加红圈image
        var gPotImage = svg.append('g')
            .attr("transform", "translate(76,66.5)")
            .attr('class', 'gPotImage');
        var gPotOne = gPotImage.append('image')
            .attr('transform', 'translate(-38.136,25.723)')
            .attr('width', 56)
            .attr('height', 55)
            .attr('xlink:href', datas.config.dashBoardPointUrl);//红色圆圈项目地址

        //添加文本信息--数值
        var gNumber = svg.append("g")
            .attr("class", "gNumber");
        var gTotal = gNumber.append("text")
            .attr("x", 220)
            .attr("y", 94)
            .attr("fill", "#00F0FF")
            .attr("font-family", "microsoft yahei")
            .attr("font-size", textPxTwo)
            .style("text-anchor", "middle")
            .text(datas.total);
        //添加文本信息--%
        var multiple = 0;
        if (datas.decimal != null) {
            multiple = datas.decimal;
        }
        var gUnit = gNumber.append("text")
            .attr("x", 265)
            .attr("y", 90.5)
            .attr("fill", "#00F0FF")
            .attr("font-family", "microsoft yahei")
            .attr("font-size", textPxFour)
            .style("text-anchor", "middle")
            .text('(' + (datas.unit != null ? datas.unit : '') + ')');

        //环比
        var gTypeOne = gNumber.append("text")
            .attr("x", 210)
            .attr("y", 120)
            .attr("fill", "#FFFFFF")
            .attr("font-family", "microsoft yahei")
            .attr("font-size", textPxThree)
            .style("text-anchor", "middle")
            .text(datas.type != null ? (datas.type + '：') : '');
        //环比百分比
        var chainRatio = datas.chainRatio != null ? (datas.chainRatio + '') : '';
        var ratioText = chainRatio != '' ? (chainRatio + '%') : '';
        var gTypeTwo = gNumber.append("text")
            .attr("x", 240)
            .attr("y", 121)
            .attr("fill", "#00D514")
            .attr("font-family", "microsoft yahei")
            .attr("font-size", textPxThree)
            .style("text-anchor", "middle")
            .text(ratioText);
        //环比符号
        var ratioUrl = datas.config.dashBoardFlatUrl != null ? datas.config.dashBoardFlatUrl : '';
        var ratio = Number(chainRatio);
        if (ratio != NaN) {
            if (ratio > 0) {
                ratioUrl = datas.config.dashBoardUpUrl != null ? datas.config.dashBoardUpUrl : '';
            } else if (ratio < 0) {
                ratioUrl = datas.config.dashBoardDownUrl != null ? datas.config.dashBoardDownUrl : '';
            }
        }
        var gTypeThree = gNumber.append("image")
            .attr("width", 20)
            .attr("height", 15)
            .style('border', '6px')
            .attr("xlink:href", ratioUrl)//背景图片项目地址
            .attr("x", 258)
            .attr("y", 107);

        //添加文本信息--名称
        //var gText = svg.append("g")
        //    .attr("class", "gText");
        //gText.append("text")
        //    .attr("x", 103)
        //    .attr("y", 120)
        //    .attr("fill", "#fff")
        //    .attr("font-family", 'microsoft yahei')
        //    .attr("font-size", textPxOne)
        //    .style("text-anchor", "middle")
        //    .text(datas.name);

        //添加文本信息--右侧说明
        var gType = svg.append("g")
            .attr("class", "gNumber");
        //var typeName = '本月';
        //if (datas.type != null) {
        //    typeName = datas.type;
        //}
        //中心位置信息，颜色根据count: '一次',//'一次'、'多次'、‘超时’，3种，文字颜色根据其改变
        var count = datas.count != null ? datas.count : '';
        var centerContextColor;
        if (count === "一次") {
            centerContextColor = "#00F0F0";
        } else if (count === "多次") {
            centerContextColor = "#F0FF00";
        } else if (count === "超时") {
            centerContextColor = "#00FF06";
        } else {
            centerContextColor = '#fff';
        }

        var gCenterContext = gType.append("text")
            .datum(datas.count)
            .attr("x", 102)
            .attr("y", 100)
            .attr("fill", centerContextColor)
            .attr("font-family", "microsoft yahei")
            .attr("font-size", textPxOne)
            .style("text-anchor", "middle");

        if (datas.value > datas.max) {
            datas.souValue = datas.max;
        } else {
            datas.souValue = datas.value;
        }
        var circle = {
            startAngle: 146,
            endAngle: 394,
            startRadius0: 43,
            startRadius1: 42,
            middleRadius0: 39.5,
            middleRadius1: 39,
            endRadius: 38,
            decimal: 3,
            pi: Math.PI / 180
        };

        function getCircleCenter(percent) {
            var angle = circle.startAngle + (circle.endAngle - circle.startAngle) * (percent);
            var cRadius;
            if (angle < 180 && angle >= circle.startAngle) {
                cRadius = circle.startRadius0;
            } else if (angle < 225 && angle >= 180) {
                cRadius = circle.startRadius1;
            }
            else if (angle > 315 && angle <= circle.endAngle) {
                cRadius = circle.endRadius;
            }
            else if (angle < 285 && angle >= 225) {
                cRadius = circle.middleRadius0;
            } else {
                cRadius = circle.middleRadius1;
            }

            var cx = (Math.cos(angle * circle.pi) * cRadius).toFixed(circle.decimal);
            var cy = (Math.sin(angle * circle.pi) * cRadius).toFixed(circle.decimal);

            var o = {"cx": cx, "cy": cy};
            return o;
        }

        function getColor(percent) {
            if (percent <= 0.16) {
                return "#f24242";
            } else if ((percent > 0.16) && (percent <= 0.66)) {
                return "#748166";
            }
            else if ((percent > 0.66) && (percent <= 0.81)) {
                return "#308ba4";
            } else {
                return "#3bc428";
            }
        }

        function getColorOther(type) {
            if (type == 1) {
                return "#2DFEFB";
            } else if (type == 2) {
                return "#F0FD37";
            } else if (type == 3) {
                return "#29FD30";
            }

            return '#fff';
        }

        var o = {
            t: 0
        };
        var percent = (datas.souValue / datas.max).toFixed(circle.decimal);
        createjs.Tween.get(o, {
            loop: false,
            onChange: function () {
                var displayValue = 0;
                if (datas.decimal == null) {
                    displayValue = Math.floor(datas.souValue * o.t);
                } else {
                    displayValue = (datas.souValue * o.t).toFixed(datas.decimal);
                }
                var centerdata = getCircleCenter((percent * o.t).toFixed(circle.decimal));

                gPotOne.attr('transform', 'translate(' + centerdata.cx + ',' + centerdata.cy + ')');

                //var color;
                //if (datas.sortNum != null) {
                //    color = getColorOther(datas.sortNum);
                //} else {
                //    color = getColor((percent * o.t).toFixed(circle.decimal));
                //}

                //数值动画
                gCenterContext.text(displayValue + '%');
            }
        }).to({t: 1}, 1000);

    }

    this.jusfDashBoard = jusfDashBoard;
}();