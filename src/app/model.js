export class BookWithReviews {
  constructor(id, title, reviews) {
    this.id = id;
    this.title = title;
    this.reviews = reviews;
  }

  addReview(author, content) {
    this.reviews.push({ author, content });
  }
}
