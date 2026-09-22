export const posts = [
  {
    slug: "pet-ki-charbi-kaise-kam-kare",
    title: "Pet Ki Charbi Kaise Kam Kare",
    excerpt: "Sirf crunches se nahi — pet ki charbi kam karne ka asli, step-by-step tarika.",
    category: "Diet",
    image: "/images/blog/pet-ki-charbi-kaise-kam-kare.webp",
  },
  {
    slug: "motapa-kaise-kam-kare",
    title: "Motapa Kaise Kam Kare",
    excerpt: "Crash diet ke bina, sustainable tarike se wazan kam karen.",
    category: "Diet",
    image: "/images/blog/motapa-kaise-kam-kare.webp",
  },
  {
    slug: "weight-loss-diet-plan",
    title: "Weight Loss Diet Plan",
    excerpt: "Ek din ka sample chart jo follow karna asaan ho.",
    category: "Diet",
    image: "/images/blog/weight-loss-diet-plan.webp",
  },
  {
    slug: "hand-cream-dry-skin-ke-liye",
    title: "Dry Hands Ke Liye Sahi Hand Cream Routine",
    excerpt: "Baar baar hath dhone se hone wali dryness ka ilaj.",
    category: "Skin",
    image: "/images/blog/hand-cream-dry-skin-ke-liye.webp",
  },
  {
    slug: "combination-skin-care-routine",
    title: "Combination Skin Care Routine",
    excerpt: "Jab T-zone oily ho lekin gaal dry — zone-based routine.",
    category: "Skin",
    image: "/images/blog/combination-skin-care-routine.webp",
  },
  {
    slug: "facewash-dry-skin-ke-liye",
    title: "Dry Skin Ke Liye Sahi Facewash",
    excerpt: "Galat facewash dryness ko aur barha sakta hai — kya dekhna chahiye.",
    category: "Skin",
    image: "/images/blog/facewash-dry-skin-ke-liye.webp",
  },
  {
    slug: "high-protein-vegetarian-diet-muscle-gain",
    title: "High Protein Vegetarian Diet — Muscle Gain Ke Liye",
    excerpt: "Bina meat ke bhi muscle gain mumkin hai — veg aur vegan protein sources.",
    category: "Diet",
    image: "/images/blog/high-protein-vegetarian-diet-muscle-gain.webp",
  },
  {
    slug: "acne-prone-skin-care-routine",
    title: "Acne-Prone Skin Ke Liye Sahi Routine",
    excerpt: "Pimples baar baar ho rahe hain? Sahi routine, sahi products.",
    category: "Skin",
    image: "/images/blog/acne-prone-skin-care-routine.webp",
  },
];

export function getRelatedPosts(currentSlug) {
  const currentPost = posts.find((post) => post.slug === currentSlug);

  if (!currentPost) {
    return posts.slice(0, 3);
  }

  const sameCategory = posts.filter(
    (post) => post.slug !== currentSlug && post.category === currentPost.category
  );
  const otherCategory = posts.filter(
    (post) => post.slug !== currentSlug && post.category !== currentPost.category
  );

  return [...sameCategory, ...otherCategory].slice(0, 3);
}
