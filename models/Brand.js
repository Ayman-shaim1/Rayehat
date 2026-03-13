/**
 * Brand model
 */
export default class Brand {
  constructor({ id, title, image } = {}) {
    this.id = id;
    this.title = title;
    this.image = image;
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      image: this.image,
    };
  }

  static fromJSON(data) {
    return new Brand(data);
  }
}
