//Самовызывающая функция
(function () { 
  let starts,
      end,
      resTim;
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
      if (starts === undefined) {
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
    if (starts === undefined) {
      console.log('4.1 старт фокус в пределах окна');
      start();
    }
  };
  //Старт - запись временой метки
  function start() {

    starts = window.performance.now();
  };
  /*
    Стоп - запись временой метки
    расчет времени.
    После формирует объект с доменным именем сайта и сколькона нем было пароведено времени.
    После формированый объект Выводмс в консоль ( отправка на сервер)
  */
  function stop() {

    end = window.performance.now();
    //проверка на наличие папаметров и вычисление  
    if (
      starts !== undefined &&
      end !== undefined
    ) {
      
      resTim = end - starts;
    }  
    //запись данных
    const logs = {
      site: window.document.location.hostname,
      url: window.document.location.href,
      time: `${(`${Math.floor((resTim / (1000 * 60 * 60) % 24))}`).split(-2)}:${(`${Math.floor((resTim / 1000 / 60) % 60)}`).split(-2)}:${(`${Math.floor((resTim / 1000) % 60)}`).split(-2)}:${(`${Math.floor((resTim % 1000))}`).split(-3,-1)}`
  };
    console.log(logs); //реализацияя функции куда передавать данные
    //очистка параметров
    starts = undefined;
    end = undefined;
  };
})();
