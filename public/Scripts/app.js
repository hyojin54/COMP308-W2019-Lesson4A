// IIFE -- Immediately Invoked Function Express
(function(){
    function start() {
        console.log(`%c App Started...`, "font-size:20px; color:blue; font-weight:bold;");
    }

    window.addEventListener("load", start);
})();