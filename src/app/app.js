import { BookWithReviews } from "./model";

/**
 * Parses passed books and reviews arrays to create an array of BookWithReviews object. Each row from books input array
 * should have a corresponding row in resulting array. For example, for following input data:
 *    books = [ { "id" : 101, "title" : "Some book title" } ]
 *    reviews = [ { "bookId" : 101, "author" : "John", "content" : "Great book!" } ];
 * It should return following result:
 *    result = [ { id: 101, title: "Some book title", reviews : [ { author: "John", content: "Great book!" }] } ];
 *
 * @param books - an array of input books, see 'src/app/dataset/books.json' for sample data.
 * @param reviews - an array of input reviews, see 'src/app/dataset/reviews.json' for sample data.
 * @returns {Array} - an array of BookWithReviews objects
 */
export function parseBooksData(books, reviews) {
  return books.map((book) => {
    const reviewsForBook = reviews.filter(
      (review) => review.bookId === book.id
    );

    return new BookWithReviews(book.id, book.title, reviewsForBook);
  });
}

/**
 * Displays data from passed `books` array. For example, if books argument would have following value:
 *    books = [ { id: 101, title: "Some book title", reviews : [ { author: "John", content: "Great book!" }] } ];
 * then, following structure should be created under the parentNode:
 * <ol>
 *    <li>
 *      <span>Some book title</span>
 *      <ul>
 *        <li>Great book! by John</li>
 *      </ul>
 *    </li>
 * </ol>
 * @param parentNode - parent node for all books
 * @param booksWithReviews - an array of BookWithReviews objects.
 */
export function displayBooksWithReviews(parentNode, booksWithReviews) {
  if (booksWithReviews.length > 0) {
    const bookList = document.createElement("ol");
    parentNode.appendChild(bookList);
    booksWithReviews.forEach((book) => {
      const bookListItem = document.createElement("li");
      const title = document.createElement("span");
      title.textContent = book.title;
      bookListItem.appendChild(title);
      bookList.appendChild(bookListItem);

      if (book.reviews.length > 0) {
        const reviewList = document.createElement("ul");
        bookListItem.appendChild(reviewList);
        book.reviews.forEach((review) => {
          const reviewListItem = document.createElement("li");
          reviewListItem.textContent = `${review.content} by ${review.author}`;
          reviewList.appendChild(reviewListItem);
        });
      }
    });
  }
}
