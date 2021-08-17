(function () { 
  
    let milliseconds = 0;
    let timer = undefined;
    let time = undefined;
  
    document.querySelector('html').addEventListener('mouseout', (e) => {
      let events = e || window.e;
      if ( events.clientY <= 0 ) {

        stop();
      } else if ( events.clientY >= 0 ) {
        if ( timer === undefined ) {

          start();
        }
      }
    });

    window.onblur = () => {   

      stop();
    };
  
    window.onfocus = () => {   
      if ( timer === undefined ) {

        start();
      }
    };
  
    function start() {
      timer = setInterval(() => {

        milliseconds += 10;
        let dateTimet = new Date(milliseconds);
  
        return time = `
            ${(`${dateTimet.getUTCHours()}`).split(-2)} : 
            ${(`${dateTimet.getUTCMinutes()}`).split(-2)} : 
            ${(`${dateTimet.getUTCSeconds()}`).split(-2)} : 
            ${(`${dateTimet.getUTCMilliseconds()}`).split(-3,-1)}
        `;
      },10);
    };
  
    function stop() {

      clearInterval(timer);

      const info = {
        currentLocation: window.location.hostname,
        time: time
      };

      console.log(info); //реализацияя функции куда передавать данные

      milliseconds = 0;
      timer = undefined;
      time = undefined;
    };
  })();
  