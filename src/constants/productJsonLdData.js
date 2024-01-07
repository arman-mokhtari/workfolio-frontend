export const jsonLdProductData = (product) => {
  const {
    title,
    imageLink,
    metaDescription,
    category,
    price,
    rating,
    numReviews,
  } = product;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: title,
    image: imageLink,
    description: metaDescription,
    category: category.title,
    brand: process.env.BRAND,
    logo: `${process.env.ABSOLUTE_URL}/assets/svg/workfolio-dark.svg`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: `${rating}`,
      reviewCount: `${numReviews}`,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "IRT",
      price: `${price}`,
      itemCondition: "http://schema.org/UsedCondition",
      availability: "http://schema.org/InStock",
    },
  };
};
