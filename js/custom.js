function addEvent(func){
    var oldOnload = window.onload;
    if(typeof oldOnload == 'function')
        {
            window.onload = function(){
                oldOnload();
                func();
            }
        }else{
            window.onload = func;
        }
}     

//日期选择组建代码
    /*time selector*/
    $('.form_month').datetimepicker({
        language:  'zh-CN',
        weekStart: 1,
        todayBtn:  0,
		autoclose: 1,
		todayHighlight: 1,
		startView: 3,
        minView:3,
		forceParse: 0,
        showMeridian: 0
    });
	$('.form_date').datetimepicker({
        language:  'fr',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		minView: 2,
		forceParse: 0
    });/*time selector end*/
    

//调用js生成一个新的仪表盘：
        var g1;
        var g2;
        addEvent(function(){
            var g1 = new JustGage({
                id: "g1",
                value: getRandomInt(30, 40),
                min: 0,
                max: 45,
                title: "盐度",
                decimals:1,
                label: "percent",
                levelColors: [
                    "#222222"
                ]   
            });
            ph();
            temperature();
            oxy();
            chlorine();
            conductance();
        });
        
        function ph(){
            var g2 = new JustGage({
                id: "g2",
                value: getRandomInt(6,8),
                min: 0,
                max: 14,
                title: "PH",
                decimals:1,
                label: "Ph",
                levelColors: [
                    "#222222"
                ]   
            });
        }      
        function temperature(){
            var g3 = new JustGage({
                id: "g3",
                value: getRandomInt(18, 19),
                min: 0,
                max: 30,
                title: "温度",
                decimals:1,
                label: "Celsius",
                levelColors: [
                    "#222222"
                ]   
            });
        }   
        
        function oxy(){
            var g4 = new JustGage({
                id: "g4",
                value: getRandomInt(4, 9),
                min: 0,
                max: 10,
                title: "含氧量",
                decimals:1,
                label: "mg/L",
                levelColors: [
                    "#222222"
                ]   
            });
        }     
        function chlorine(){
            var g5 = new JustGage({
                id: "g5",
                value: getRandomInt(1,4),
                min: 0,
                max: 100,
                title: "氯度",
                decimals:1,
                label: "％",
                levelColors: [
                    "#222222"
                ]   
            });
        } 
        
                function conductance(){
            var g6 = new JustGage({
                id: "g6",
                value: getRandomInt(50, 51),
                min: 0,
                max: 100,
                title: "电导率",
                decimals:1,
                label: "percent",
                levelColors: [
                    "#222222"
                ]   
            });
        } 

//生成线性图js代码

     $(function() {
    'use strict';
    var line_chart_options = {
        scaleGridLineColor : "rgba(0,0,0,.05)",
        responsive: true
    };
    var data = {
        labels: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40,33,44,55,66,77]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                pointColor:"rgba(151,187,205,1)",
                pointStrokeColor:"#fff",
                pointHighlightFill:"#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 86, 27, 90,33,44,55,66,77]
            }
        ]
    };
    var data2 = {
        labels: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","00",],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [40, 59, 80, 81, 56, 55, 40,40, 59, 80, 81, 56, 55, 40,40, 59, 80, 81, 56, 55, 40,33,44,33]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [40, 48, 40, 19, 86, 27, 90, 80, 81, 56, 55, 40,40, 59, 80, 81, 56, 55, 40,40, 59,55,66,77]
            }
        ]
    };
    var ctx11 = $("#myChart11").get(0).getContext("2d");
    var myLineChart11 = new Chart(ctx11).Line(data, line_chart_options);
    var ctx12 = $("#myChart12").get(0).getContext("2d");
    var myLineChart12 = new Chart(ctx12).Line(data, line_chart_options);
    var ctx13 = $("#myChart13").get(0).getContext("2d");
    var myLineChart13 = new Chart(ctx13).Line(data, line_chart_options);
    var ctx14 = $("#myChart14").get(0).getContext("2d");
    var myLineChart14 = new Chart(ctx14).Line(data, line_chart_options);
    var ctx15 = $("#myChart15").get(0).getContext("2d");
    var myLineChart15 = new Chart(ctx15).Line(data, line_chart_options);
    var ctx16 = $("#myChart16").get(0).getContext("2d");
    var myLineChart16 = new Chart(ctx16).Line(data, line_chart_options);
    var ctx21 = $("#myChart21").get(0).getContext("2d");
    var myLineChart21;
    var ctx22 = $("#myChart22").get(0).getContext("2d");
    var myLineChart22;
    var ctx23 = $("#myChart23").get(0).getContext("2d");
    var myLineChart23;
    var ctx24 = $("#myChart24").get(0).getContext("2d");
    var myLineChart24;
    var ctx25 = $("#myChart25").get(0).getContext("2d");
    var myLineChart25;
    var ctx26 = $("#myChart26").get(0).getContext("2d");
    var myLineChart26;
    $('#tab1').on('shown.bs.tab', function (e) {
        myLineChart21.destroy();
        myLineChart22.destroy();
        myLineChart23.destroy();
        myLineChart24.destroy();
        myLineChart25.destroy();
        myLineChart26.destroy();
        myLineChart11 = new Chart(ctx11).Line(data, line_chart_options);
        myLineChart12 = new Chart(ctx12).Line(data, line_chart_options);
        myLineChart13 = new Chart(ctx13).Line(data, line_chart_options);
        myLineChart14 = new Chart(ctx14).Line(data, line_chart_options);
        myLineChart15 = new Chart(ctx15).Line(data, line_chart_options);
        myLineChart16 = new Chart(ctx16).Line(data, line_chart_options);
    });
    $('#tab2').on('shown.bs.tab', function (e) {
        myLineChart11.destroy();
        myLineChart12.destroy();
        myLineChart13.destroy();
        myLineChart14.destroy();
        myLineChart15.destroy();
        myLineChart16.destroy();
        myLineChart21 = new Chart(ctx21).Line(data2, line_chart_options);
        myLineChart22 = new Chart(ctx22).Line(data2, line_chart_options);
        myLineChart23 = new Chart(ctx23).Line(data2, line_chart_options);
        myLineChart24 = new Chart(ctx24).Line(data2, line_chart_options);
        myLineChart25 = new Chart(ctx25).Line(data2, line_chart_options);
        myLineChart26 = new Chart(ctx26).Line(data2, line_chart_options);
    });
});
        
     
        