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
    logo: "https://cdn.workfolio.ir/images/logo/workfolio-dark.svg",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: `${rating}`,
      reviewCount: `${numReviews}`,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "IRR",
      price: `${price}`,
      itemCondition: "http://schema.org/UsedCondition",
      availability: "http://schema.org/InStock",
    },
  };
};
