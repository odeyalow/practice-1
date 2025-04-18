const API_BASE = import.meta.env.VITE_API_BASE;

const API = {
    ALL_PRODUCTS: `${API_BASE}/products`,
    SEARCH_PRODUCTS: (query: string) => `${API_BASE}/products/search?q=${query}`,
    PRODUCTS_CATEGORIES: `${API_BASE}/products/categories`,
    PRODUCTS_CATEGORIES_LIST: `${API_BASE}/products/category-list`,
    CATEGORY_PRODUCTS: (categoryName: string) => `${API_BASE}/products/category/${categoryName}`,
}

export default API;