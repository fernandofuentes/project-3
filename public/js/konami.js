if (window.addEventListener) {
    var keys = [],
        konami = "38,38,40,40,37,39,37,39,66,65";

    window.addEventListener("keydown", function(e){

        keys.push(e.keyCode);

        if (keys.toString().indexOf(konami) >= 0) {

            alert('30 LIVES ACTIVATED!!!');

            keys = [];
        };
    }, true);
};
