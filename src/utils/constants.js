export const BASE_URL = 'http://192.168.152.135:8080/api';
// export const BASE_URL = '/api';

export const api = {
    checkLang: (lang) => {
        const allowed = ['uz', 'ru', 'uk'];
        return allowed.includes(lang) ? lang : 'uz';
    },
    urls : {
        CATEGORIES : BASE_URL + "/categories",
        SERVICES : BASE_URL + "/services",
        RESOURCES : BASE_URL + "/resources",
        CONTACTS : BASE_URL + "/contacts",
    }
}

export default api;