export default function checkFavorite(favorites, story) {
    return favorites.some((fav) => fav.id === story.id);
}
