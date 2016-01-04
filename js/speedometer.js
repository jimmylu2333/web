        //调用js生成一个新的仪表盘：
        var g1;
        var g2;
        window.onload = function(){
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
//            setInterval(function() {
//                  g1.refresh(getRandomInt(55, 55));
//                }, 800);
            ph();
            temperature();
            oxy();
            chlorine();
            conductance();
        }
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
//            setInterval(function() {
//                  g2.refresh(getRandomInt(6, 6));
//                }, 800);
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
//            setInterval(function() {
//                  g3.refresh(getRandomInt(20, 20));
//                }, 800);
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
//            setInterval(function() {
//                  g4.refresh(getRandomInt(5, 6));
//                }, 800);
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
//            setInterval(function() {
//                  g5.refresh(getRandomInt(6, 6));
//                }, 800);
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
//            setInterval(function() {
//                  g6.refresh(getRandomInt(6, 6));
//                }, 800);
        } 
        