/**
 * Fragrance model
 */
export default class Fragrance {
  constructor({ id, title, price, description, image, isNiche, isForWomen, brandId, noteIds, rating } = {}) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
    this.isNiche = isNiche ?? false;
    this.isForWomen = isForWomen ?? false;
    this.brandId = brandId;
    this.noteIds = noteIds ?? [];
    this.rating = rating ?? null;
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      price: this.price,
      description: this.description,
      image: this.image,
      isNiche: this.isNiche,
      isForWomen: this.isForWomen,
      brandId: this.brandId,
      noteIds: this.noteIds,
      rating: this.rating,
    };
  }

  static fromJSON(data) {
    return new Fragrance(data);
  }
}
