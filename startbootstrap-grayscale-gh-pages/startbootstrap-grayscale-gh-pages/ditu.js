var myChart = echarts.init(document.getElementById('main'));
var v_data = [{
    name: '北京',
    value: 333.6163485,
    a: '58.60%',
    b: '63.98%',
    c: '14.26%'
}, {
    name: '湖南',
    value: 271.1867076,
    a: '12.22%',
    b: '26.21%',
    c: '18.18%'
}, {
    name: '福建',
    value: 310.4111361,
    a: '30.36%',
    b: '46.00%',
    c: '14.38%'
}, {
    name: '贵州',
    value: 310.8131979,
    a: '51.93%',
    b: '0.01%',
    c: '14.37%'
}, {
    name: '广西',
    value: 214.2475405,
    a: '15.38%',
    b: '0.00%',
    c: '18.09%'
}, {
    name: '广东',
    value: 219.2929656,
    a: '27.21%',
    b: '0.00%',
    c: '18.09%'
}, {
    name: '海南',
    value: 288.6977145,
    a: '16.34%',
    b: '23.55%',
    c: '19.95%'
}, {
    name: '河北',
    value: 327.0685047,
    a: '52.78%',
    b: '53.36%',
    c: '13.13%'
}, {
    name: '河南',
    value: 324.7076504,
    a: '61.29%',
    b: '32.40%',
    c: '11.90%'
}, {
    name: '吉林',
    value: 286.062011,
    a: '19.86%',
    b: '38.33%',
    c: '21.06%'
}, {
    name: '黑龙江',
    value: 295.2421973,
    a: '26.94%',
    b: '39.28%',
    c: '18.67%'
}, {
    name: '四川',
    value: 294.4762765,
    a: '19.94%',
    b: '42.49%',
    c: '18.95%'
}, {
    name: '辽宁',
    value: 304.7909637,
    a: '26.83%',
    b: '36.58%',
    c: '12.50%'
}, {
    name: '江苏',
    value: 341.6636368,
    a: '60.96%',
    b: '66.65%',
    c: '10.28%'
}, {
    name: '江西',
    value: 318.2151656,
    a: '29.23%',
    b: '28.27%',
    c: '10.89%'
}, {
    name: '内蒙',
    value: 317.6766333,
    a: '34.02%',
    b: '48.77%',
    c: '12.59%'
}, {
    name: '宁夏',
    value: 349.2790049,
    a: '44.07%',
    b: '42.17%',
    c: '12.55%'
}, {
    name: '青海',
    value: 306.9664661,
    a: '64.27%',
    b: '51.49%',
    c: '27.38%'
}, {
    name: '山东',
    value: 338.3722767,
    a: '57.56%',
    b: '56.21%',
    c: '8.91%'
}, {
    name: '山西',
    value: 336.2088778,
    a: '57.89%',
    b: '56.66%',
    c: '10.87%'
}, {
    name: '天津',
    value: 317.1760667,
    a: '38.26%',
    b: '57.42%',
    c: '12.97%'
}, {
    name: '陕西',
    value: 339.5216478,
    a: '48.87%',
    b: '43.41%',
    c: '3.78%'
}, {
    name: '上海',
    value: 352.5786334,
    a: '62.23%',
    b: '69.67%',
    c: '7.12%'
}, {
    name: '新疆',
    value: 397.5549676,
    a: '87.88%',
    b: '87.49%',
    c: '13.52%'
}, {
    name: '云南',
    value: 324.3644197,
    a: '41.35%',
    b: '46.27%',
    c: '13.73%'
}, {
    name: '浙江',
    value: 318.5733461,
    a: '27.45%',
    b: '40.19%',
    c: '7.42%'
}];
var v_data1 = [{
    name: '北京',
    value: 333.6163485
}, {
    name: '湖南',
    value: 271.1867076
}, {
    name: '福建',
    value: 310.4111361
}, {
    name: '贵州',
    value: 310.8131979
}, {
    name: '广西',
    value: 214.2475405
}, {
    name: '广东',
    value: 219.2929656
}, {
    name: '海南',
    value: 288.6977145
}, {
    name: '河北',
    value: 327.0685047
}, {
    name: '河南',
    value: 324.7076504
}, {
    name: '吉林',
    value: 286.062011
}, {
    name: '黑龙江',
    value: 295.2421973
}, {
    name: '四川',
    value: 294.4762765
}, {
    name: '辽宁',
    value: 304.7909637
}, {
    name: '江苏',
    value: 341.6636368
}, {
    name: '江西',
    value: 318.2151656
}, {
    name: '内蒙',
    value: 317.6766333
}, {
    name: '宁夏',
    value: 349.2790049
}, {
    name: '青海',
    value: 306.9664661
}, {
    name: '山东',
    value: 338.3722767
}, {
    name: '山西',
    value: 336.2088778
}, {
    name: '天津',
    value: 317.1760667
}, {
    name: '陕西',
    value: 339.5216478
}, {
    name: '上海',
    value: 352.5786334
}, {
    name: '新疆',
    value: 397.5549676
}, {
    name: '云南',
    value: 324.3644197
}, {
    name: '浙江',
    value: 318.5733461
}];


var geoCoordMap = {
    '合肥': [31.52, 117.17],
    '北京': [39.55, 116.24],
    '重庆': [29.59, 106.54],
    '福州': [26.05, 119.18],
    '兰州': [36.04, 103.51],
    '广州': [23.08, 113.14],
    '南宁': [22.48, 108.19],
    '贵阳': [26.35, 106.42],
    '海口': [20.02, 110.2],
    '石家庄': [38.02, 114.3],
    '郑州': [34.46, 113.4],
    '哈尔滨': [45.44, 126.36],
    '武汉': [30.35, 114.17],
    '长沙': [28.12, 112.59],
    '长春': [43.54, 125.19],
    '南京': [32.03, 118.46],
    '南昌': [28.4, 115.55],
    '沈阳': [41.48, 123.25],
    '呼和浩特': [40.48, 111.41],
    '银川': [38.27, 106.16],
    '西宁': [36.38, 101.48],
    '济南': [36.4, 117],
    '太原': [37.54, 112.33],
    '西安': [34.17, 108.57],
    '上海': [31.14, 121.29],
    '成都': [30.4, 104.04],
    '天津': [39.02, 117.12],
    '拉萨': [29.39, 91.08],
    '乌鲁木齐': [43.45, 87.36],
    '昆明': [25.04, 102.42],
    '杭州': [30.16, 120.1]
};

require([
    'echarts'
], function(echarts) {

    require(['map/js/china'], function() {
        var chart = echarts.init(document.getElementById('main'));

        chart.setOption({
            aria: {
                show: true
            },
            tooltip: {},
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['categoryA']
            },
            visualMap: {
                min: 200,
                max: 400,
                left: 'left',
                top: 'bottom',
                text: ['High', 'Low'],
                seriesIndex: [0],
                inRange: {
                    color: ['#006edd', '#e0ffff']
                },
                calculable: true
            },
            geo: {
                map: 'china',
                roam: false,
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: 'rgba(0,0,0,0.4)'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(0, 0, 0, 0.2)'
                    },
                    emphasis: {
                        color: null,
                        areaColor: null,
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 20,
                        borderWidth: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            },
            series: [{
                name: 'categoryA',
                type: 'map',
                geoIndex: 0,
                tooltip: {
                    formatter: function(params) {
                        if (params.data != null) {
                            return [
                                '得分：' + params.data['value'] + '<br/>',
                                '公办幼儿园比：' + params.data['a'] + '<br/>',
                                '公办人数比：' + params.data['b'] + '<br/>',
                                '收入学费比：' + params.data['c']
                            ].join('');
                        }

                        // return param.a;
                    }
                },
                data: v_data
            }]
        });

        chart.on('click', function(param) {
            alert('asdf');
        });
    });
});
myChart.setOption(option);

window.onresize = function() {
    myChart.resize();
}