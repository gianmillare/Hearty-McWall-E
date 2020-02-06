function animation() {
    d3.json(`/deepstat`).then(function(data) {
        var fix = 0;
        if (data["improvement"] != 0 ){
            fix = data["improvement"];
        };

        var canvasR = document.getElementById("result");
        var ctxR = canvasR.getContext("2d");
        ctxR.font = "30px Georgia";
        ctxR.fillStyle = "blue";
        ctxR.textAlign = "center";
        if (data["prediction"][0][0]>data["prediction"][0][1]){
            ctxR.fillText(data["prediction"][0][0] + " probability of being healthy!", canvasR.width/2, canvasR.height/2);
            gsap.to("#healthy", {autoAlpha:1, visibility: "visible", duration:1});
        } else {
            ctxR.fillText(data["prediction"][0][1] + " probability of having cardiovascular disease. Consult your doctor.", canvasR.width/2, canvasR.height/2);
            gsap.to("#doctor", {autoAlpha:1, visibility: "visible", duration:1});
        };
        console.log(fix);
        if (fix != 0){
            var canvas = document.getElementById("fix");
            var ctx = canvas.getContext("2d");
            ctx.font = "30px Georgia";
            ctx.fillStyle = "blue";
            ctx.textAlign = "center";
            if (fix == "cholesterol"){
                ctx.fillText("Be careful of cholesterol intake.", canvas.width/2, canvas.height/2);
                gsap.to("#cholC", {autoAlpha:1, visibility: "visible", duration:1});
            } 
            else if (fix == "weight"){
                ctx.fillText("Motivate yourself to shed some unnecessary weight.", canvas.width/2, canvas.height/2);
                gsap.to("#weightC", {autoAlpha:1, visibility: "visible", duration:1});
            }
            else if (fix == "alcohol"){
                ctx.fillText("Lessen your intake of alcohol.", canvas.width/2, canvas.height/2);
                gsap.to("#alcoC", {autoAlpha:1, visibility: "visible", duration:1});
            }
            else if (fix == "BP"){
                ctx.fillText("Monitor your blood pressure closely.", canvas.width/2, canvas.height/2);
                gsap.to("#BP", {autoAlpha:1, visibility: "visible", duration:1});
            }
            else if (fix = "smoking"){
                ctx.fillText("Time to help others and yourself by not smoking.", canvas.width/2, canvas.height/2);
                gsap.to("#smokeC", {autoAlpha:1, visibility: "visible", duration:1});
            }
            else if (fix == "glucose"){
                ctx.fillText("Be careful of sugar intake.", canvas.width/2, canvas.height/2);
                gsap.to("#glucC", {autoAlpha:1, visibility: "visible", duration:1});
            }
            else if (fix == "active"){
                ctx.fillText("Motivate yourself to move.", canvas.width/2, canvas.height/2);
                gsap.to("#activeC", {autoAlpha:1, visibility: "visible", duration:1});
            }
        };
        
    });
};
animation();
