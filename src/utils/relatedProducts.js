export function getRelatedProducts(array, numberOfObjects) {
    if (numberOfObjects > array.length) {
        throw new Error('Number of objects requested is greater than array length');
    }
    const shuffledArray = array.slice();
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    shuffle(shuffledArray);
    return shuffledArray.slice(0, numberOfObjects);
}
