import axios from "axios";

// Backend URL
const API = axios.create({
    baseURL: "http://localhost:8080/api", // backend URL
});

// Har bir so‘rovda til yuborish
API.interceptors.request.use((config) => {
    let lang = localStorage.getItem("lang");
    if (!lang) {
        lang = "uz"; // default til
        localStorage.setItem("lang", lang);
    }
    config.headers["Accept-Language"] = lang; // ✅ to‘g‘ri header nomi
    return config;
});

// Javobni ushlash
API.interceptors.response.use(
    (response) => {
        // 200-299 bo‘lsa normal qaytar
        return response;
    },
    (error) => {
        // Agar 200–299 bo‘lmasa
        if (error.response && error.response.data) {
            const { code, message } = error.response.data;
            alert(`Xatolik!\nCode: ${code}\nMessage: ${message}`);
        } else {
            // Agar backenddan umuman javob kelmagan bo‘lsa
            alert("Server bilan aloqa qilishda muammo bor!");
        }
        return Promise.reject(error); // xatoni tashlab yuborish
    }
);

export default API;
