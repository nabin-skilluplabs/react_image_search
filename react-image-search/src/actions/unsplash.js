export async function  queryPhotos(query) {
    const ACCESS_KEY = 'bvQLzDtiXgQu2bZfkaG07hAkY_6-KheISAOH2SgxQnc';
    const url = `https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&query=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}