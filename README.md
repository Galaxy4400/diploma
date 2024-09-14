# Области хранения данных

- База данных на json-server
- BFF (Backend for frontend)
- Redux-store


# Сущности приложения

- Пользователь: БД (список пользователей), BFF (сессия текущего пользователя), redux-store (отображение)
- Счет: БД (список счетов), redux-store (отображение)
- Тип счета: БД (список счетов), redux-store (отображение)
- Категория: БД (список операций), redux-store (отображение)
- Операция: БД (список операций), redux-store (отображение)


# Таблицы БД

- users: id, login, password, registed_at
- accounts: id, user_id, type_id, name, created_at
- account_types: id, name
- categories: id, name
- operations: id, user_id, account_id, category_id, created_at


# Схема состояния на BFF

- Сессия текущего пользователя: login, password


# Схема для redux-store на клиенте
<!-- 
- user: id, login
- accounts: массив account: id, type, name -->