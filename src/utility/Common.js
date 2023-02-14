export const convertPrincipleTileToUrlName = (title) => {
    return title?.replace(/\s+/g, '-').toLowerCase();
}