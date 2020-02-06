function animation() {
    d3.json(`/deepstat`).then(function(data) {
        fix = 0
        res = 0
        if (data["improvement"] != 0 ){
            res = data["improvement"]
        }
    });
};