# Начало работы со списоком дел!

Прежде всего нужно поставить зависимости:
### `npm i`

Для работы необходимо запустить два сервера в двух разных сессиях интерпретатора командной строки:
* Backend, где располагается информация
* Frontend, который на запрос в корневой узел вернет страницу с необходимыми js-скриптами.

Запуск всей среды осуществляется на одном уровне с этим файлом (readme.md), необходимые скрипты написаны именно здесь в `package.json`:

### `npm run server`
### `npm run front`

После чего нужно перейти по адресу `http://localhost:8080` (если порт не переопределялся)

Ошибки при запуске могут значить необходимость определить порты. Сделать это можно с помощью создания в каждом пакете (в директориях `json-server-main` и `task-implem`) `.env` файла на основе примера `.env.example`.
Если представленые порты не заняты, то менять представленные там не требуется.
Веб-приложение при запросах на backend ориентируется на порт `5555`.

## Почему я сделал один репозиторий с двумя подпакетами?

Для удобства разработки. Монорепозитории в большинстве случаев могут быть неудобны, но здесь проект небольшой, это показалось мне самым удобным способом его хранить и передавать.

## Почему для frontend части я сделал сервер и там используется express?

`Express` используется только для того, чтобы возвращать по запросу само веб-приложение. В самом веб-приложении этот пакет не используется.
Сделано так было чисто для удобства разработки: например, инструмент для автообновления сервера при изменении файлов не будет работать без запущенного development-сервера.
По той же причине используются и другие пакеты, которые можно увидеть в зависимостях.