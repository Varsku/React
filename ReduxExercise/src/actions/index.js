export function selectBook(book) {
  //SelectBooks is an ActionCreator, it need to return an action,
  //an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };

}
