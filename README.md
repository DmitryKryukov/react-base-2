# React.База. Задание № 2
Разработать типизированную систему управления автомобилем: главный интерфейс `Car` и вспомогательные интерфейсы для различных подсистем. Реализовать функции для вывода основной информации об авто, о состоянии различных деталей и устройств, обновления информации и текущего состояния автомобиля.

Продемонстрировать работу создавая переменные и вызывая реализованные функции.

Работа должна представлять собой скрипт выводящий информацию о происходящем в `console.log`, без пользовательского интерфейса.

## Модель решения
В файле `car.ts` написал три интерфейса для абстрактных подсистем автомобиля и интерфейс для супера. Вынес общую логику в отдельный класс `CarSystem`. Создал классы реализующие интерфейсы подсистем и класс для самого автомобиля `Car`. В конструкторе инициализировал системы и передал ссылку на автомобиль. Экспортировал `Car` для использования в входном файле. В `app.ts` собрал демостенд, попереключал системы в разные состояния и вызвал `displayInfo()`.

P.S. Диман, когда будешь оценивать — сделай скидку, что задача сделана тупым дизайнером😄