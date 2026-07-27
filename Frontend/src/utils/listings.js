import { API_URL } from "../api/client";

export function getImageUrl(filename) {
  if (!filename) {
    return "https://via.placeholder.com/400x300?text=No+Image";
  }
  if (
    filename.startsWith("http") ||
    filename.startsWith("data:") ||
    filename.startsWith("/")
  ) {
    return filename;
  }
  return `${API_URL}/uploads/${filename}`;
}

export function normalizeListing(listing) {
  if (!listing) return null;

  const image = getImageUrl(listing.image);

  return {
    id: listing._id,
    _id: listing._id,
    name: listing.title,
    title: listing.title,
    pricePerDay: listing.pricePerDay,
    price: `Rs ${Number(listing.pricePerDay).toLocaleString()} / day`,
    location: listing.location,
    category: listing.category,
    image,
    description: listing.description,
    desc: listing.description,
    vendor: listing.owner?.email || listing.owner,
    owner: listing.owner,
    ownerId: listing.owner?._id || listing.owner,
    available: listing.available ?? true,
    images: image ? [image] : [],
  };
}

export function normalizeListings(listings = []) {
  return listings.map(normalizeListing).filter(Boolean);
}
