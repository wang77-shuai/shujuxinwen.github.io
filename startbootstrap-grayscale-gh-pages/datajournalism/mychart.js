var myChart4 = echarts.init(document.getElementById("myAreahart4"));
var option = {
    title: {
        text: '南丁格尔玫瑰图',
        subtext: '纯属虚构',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x: 'center',
        y: 'bottom',
        data: ['0-5%', '6%-10%', '11%-15%', '16%-20%', '21%-25%', '26%-30%']
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    calculable: true,
    series: [{
        name: '面积模式',
        type: 'pie',
        radius: [30, 110],
        center: ['75%', '50%'],
        roseType: 'area',
        data: [
            { name: '0-5%', value: 2 },
            { name: '6%-10%', value: 4 },
            { name: '11%-15%', value: 15 },
            { name: '16%-20%', value: 8 },
            { name: '21%-25%', value: 1 },
            { name: '26%-30%', value: 1 }
        ]
    }]
};
myChart4.setOption(option);
window.onresize = function() {
    myChart4.resize();
}