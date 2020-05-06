// __Работа с карточками книг на странице__

// Добавить книгу в корзину
export const PUT_BOOK_IN_BASKET = "PUT_BOOK_IN_BASKET";
// Загрузить книги с localstorage
export const GET_BOOKS_LOCALSTORAGE = "GET_BOOKS_LOCALSTORAGE";
// Загрузить книги с firestore
export const GET_BOOKS_FIRESTORE = "GET_BOOKS_FIRESTORE";

// __Работа с определённой покупкой в корзине__

// Добивать ещё одну книгу этого типа
export const ADD_BOOK_BASKET = "ADD_BOOK_BASKET";
// Удалить книгу этого типа. Если последняя удалить все
export const REMOVE_BOOK_BASKET = "REMOVE_BOOK_BASKET";
// Удалить все книги этого типа
export const DELETE_BOOK_BASKET = "DELETE_BOOK_BASKET";

// __Работа с корзиной__

// Очистить корзину
export const CLEAN_BASKET = "CLEAN_BASKET";
