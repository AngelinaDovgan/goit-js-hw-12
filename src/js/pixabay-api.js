
export default async function getImages(inputValue, amount, quantity) {
    const KEY = '42523874-92f67aed3babfb2c9b36364a5';
    const basicURL = 'https://pixabay.com/api/';

    const query = inputValue.trim();
    const imageType = 'photo';
    const orientationImage = 'horizontal';
    const safesearch = 'true';
    // const page = '1';
    // const per_page = '15';

    const response = await fetch(`${basicURL}?key=${KEY}&q=${query}&image_type=${imageType}&orientation=${orientationImage}&safesearch=${safesearch}&page=${amount}&per_page=${quantity}`);

    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json()
}