export const slugify = (str) =>
  encodeURIComponent(
    str
      .toLowerCase()
      .replace(/[’'/]/g, '') // remove straight and curly apostrophes + slashes
      .replace(/\s+/g, '-')  // replace spaces with dashes
  );

export const unslugify = (slug) =>
  decodeURIComponent(slug.replace(/-/g, ' '));