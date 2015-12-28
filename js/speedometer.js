        //调用js生成一个新的仪表盘：
        var g1;
        var g2;
        window.onload = function(){
            var g1 = new JustGage({
                id: "g1",
                value: getRandomInt(0, 30),
                min: 0,
                max: 100,
                title: "盐度",
                label: "percent",
                levelColors: [
                    "#222222"
                ]   
            });
            setInterval(function() {
                  g1.refresh(getRandomInt(55, 55));
                }, 800);
            ph();
            temperature();
            oxy();
            chlorine();
            conductance();
        }
        function ph(){
            var g2 = new JustGage({
                id: "g2",
                value: getRandomInt(0, 4),
                min: 0,
                max: 14,
                title: "PH",
                label: "Ph",
                levelColors: [
                    "#222222"
                ]   
            });
            setInterval(function() {
                  g2.refresh(getRandomInt(6, 6));
                }, 800);
        }      
        function temperature(){
            var g3 = new JustGage({
                id: "g3",
                value: getRandomInt(25, 26),
                min: 0,
                max: 50,
                title: "温度",
                label: "Celsius",
                levelColors: [
                    "#222222"
                ]   
            });
            setInterval(function() {
                  g3.refresh(getRandomInt(20, 20));
                }, 800);
        }   
        
        function oxy(){
            var g4 = new JustGage({
                id: "g4",
                value: getRandomInt(7, 7),
                min: 0,
                max: 10,
                title: "含氧量",
                label: "MG/L",
                levelColors: [
                    "#222222"
                ]   
            });
            setInterval(function() {
                  g4.refresh(getRandomInt(5, 6));
                }, 800);
        }     
        function chlorine(){
            var g5 = new JustGage({
                id: "g5",
                value: getRandomInt(50, 51),
                min: 0,
                max: 100,
                title: "氯度",
                label: "percent",
                levelColors: [
                    "#222222"
                ]   
            });
            setInterval(function() {
                  g5.refresh(getRandomInt(6, 6));
                }, 800);
        } 
        
                function conductance(){
            var g6 = new JustGage({
                id: "g6",
                value: getRandomInt(50, 51),
                min: 0,
                max: 100,
                title: "电导率",
                label: "percent",
                levelColors: [
                    "#222222"
                ]   
            });
            setInterval(function() {
                  g6.refresh(getRandomInt(6, 6));
                }, 800);
        } 
        