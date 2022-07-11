(function () { 
    let starts,
        end,
        resTim;
    
    document.querySelector('html').addEventListener('mouseout', (e) => {
        let events = e || window.e;
        if ( events.clientY <= 0 ) {

            stop();
        } else if ( events.clientY >= 0 ) {
            if ( starts === undefined ) {

            start();
            }
        }
    });

    window.onblur = () => {   

        stop();
    };
  
    window.onfocus = () => {   
        if ( starts === undefined ) {

            start();
        }
    };
  
    function start() {

        starts = window.performance.now();
    };
  
    function stop() {

        end = window.performance.now();
        
        if (
            starts !== undefined &&
            end !== undefined
        ) {
            
            resTim = end - starts;
        }  

        const logs = {
            site: window.document.location.hostname,
            url: window.document.location.href,
            time: `${(`${Math.floor((resTim / (1000 * 60 * 60) % 24))}`).split(-2)}:${(`${Math.floor((resTim / 1000 / 60) % 60)}`).split(-2)}:${(`${Math.floor((resTim / 1000) % 60)}`).split(-2)}:${(`${Math.floor((resTim % 1000))}`).split(-3,-1)}`
        };

        console.log(logs); //реализацияя функции куда передавать данные

        starts = undefined;
        end = undefined;
    };
})();
  