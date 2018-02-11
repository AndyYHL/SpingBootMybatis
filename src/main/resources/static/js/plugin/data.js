	function re() {
		var height = $("body").height();
		var width = $("body").width();
		var jianxi = width * 0.0089;
		$(".dataBox3").attr("style", "width: " + ($(".mainBox").width() - $(".map3").width() - jianxi) + 
		"px; height: " + $(".mainBox").height() * 0.32 + 
		"px;top:" + (44 + jianxi * 2 + $(".dataBox2").height()) + "px");
		$(".dataBox4").css({
			"height": $(".mainBox").height() - $(".dataBox2").height() - $(".dataBox3").height() - 44 - jianxi * 3,
			"width": $(".mainBox").width() - $(".map3").width() - jianxi
		});
	}
	re();
	// 基于准备好的dom，初始化echarts实例
	var firstChart = echarts.init(document.getElementById('db3'));
	window.onresize = function() {
		re();
		firstChart.resize();
		secondChart.resize();
	};

	// 指定图表的配置项和数据
	var option = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		color: ['#32bcd2', '#0570a5', '#ffd154'],
		legend: {
			orient: 'vertical',
			x: 'left'
		},
		series: [{
			name: '越栏车辆机构',
			type: 'pie',
			radius: ['40%', '48%'],
			center: ['20%', '50%'],
			avoidLabelOverlap: false,
			label: {
				normal: {
					show: false,
					position: 'center'
				},
				emphasis: {
					show: false,
					textStyle: {
						fontSize: '14',
						fontWeight: 'bold'
					}
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
					value: 335,
					name: 'XXXXXXXX局'
				},
				{
					value: 310,
					name: 'XXXXXXXXX局'
				},
				{
					value: 234,
					name: 'XXXXXX局'
				},
			]
		}]
	};

	// 使用刚指定的配置项和数据显示图表。
	firstChart.setOption(option);

	var secondChart = echarts.init(document.getElementById('db4'));
	var option = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		color: ['#0570a5', '#abe220', '#ff574b'],
		legend: {
			orient: 'vertical',
			x: 'left'
		},
		series: [{
			name: '越栏车辆类型',
			type: 'pie',
			radius: ['40%', '48%'],
			center: ['20%', '50%'],
			avoidLabelOverlap: false,
			label: {
				normal: {
					show: false,
					position: 'center'
				},
				emphasis: {
					show: false,
					textStyle: {
						fontSize: '14',
						fontWeight: 'bold'
					}
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
					value: 335,
					name: 'XXXXXXXX局'
				},
				{
					value: 310,
					name: 'XXXXXXXXX局'
				},
				{
					value: 1200,
					name: 'XXXXXX局'
				}
			]
		}]
	};
	secondChart.setOption(option);