//Самовызывающая функция
(function () { 
  
  let milliseconds = 0;
  let timer = undefined;
  let time = undefined;

  /*
    Проверяет событие мыши!
    Если мыша выходит за границы документа:
    (предпологаемо если клиент хочет поработать с:
      - урлой браузера 
      - закрытием вклдаки
      - вернутся обратно (по стрелочке)
      )
  */
  document.querySelector('html').addEventListener('mouseout', (event) => {
    let events = event || window.event;
    //Триггер на стоп - это выход за область контента сайта
    if (events.clientY <= 0) {
      console.log('1 стоп мыша за пределами окна');
      stop();
    //Триггер на стоп - это вход за область контента сайта
    } else if (events.clientY >= 0) {
      console.log('2 старт мыша');
      if (timer === undefined) {
        console.log('2.1 старт мыша в пределах окна');
        start();
      }
    }
  });

  /*
    Изменение форкуса! Стоп таймер
    Пример что есть триггер:
    - Переключится на рабочий стол
    - Переключится на консоль останавливает счетчик 
  */
  window.onblur = () => {    
    console.log('3 стоп фокус не в пределах окна');
    stop();
  };

  /*
    Запуск счетчика! Старт таймер
    Триггре:
    - фокус на рабочую (контент) обасть браузера
  */
  window.onfocus = () => {   
    console.log('4 фокус');
    if (timer === undefined) {
      console.log('4.1 старт фокус в пределах окна');
      start();
    }
  };

  //Старт таймера
  function start() {
    timer = setInterval(() => {
      milliseconds += 10;
      let dateTimet = new Date(milliseconds);

      return time = `${(`${dateTimet.getUTCHours()}`).split(-2)} : ${(`${dateTimet.getUTCMinutes()}`).split(-2)} : ${(`${dateTimet.getUTCSeconds()}`).split(-2)} : ${(`${dateTimet.getUTCMilliseconds()}`).split(-3,-1)}`;
    },10);
  };

  /*
    Стоп таймер!
    Останавливаем таймерю.
    После формирует объект с доменным именем сайта и сколькона нем было пароведено времени.
    После формированый объект Выводмс в консоль ( отправка на сервер)
  */
  function stop() {
    clearInterval(timer);
    const info = {
      currentLocation: window.location.hostname,
      time: time
    };
    console.log(info);
    milliseconds = 0;
    timer = undefined;
    time = undefined;
  };
})();
