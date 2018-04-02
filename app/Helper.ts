const BASE_URL = 'https://project-9827f.firebaseio.com/';
const PRODUCT_BASE_URL ='https://products-d4caf.firebaseio.com/';
export class Helper {
    static buildUrl(url: String = '') {
        return BASE_URL + url + '.json';
    };

    static buildProductUrl(url: String = '') {
        return PRODUCT_BASE_URL + url + '.json';
    };
}
//Product/-KXD_NdCjtrIjU0A6KV4/reviews