const API_BASE = import.meta.env.VITE_API_BASE;

const API = {
    ALL_PRODUCTS: (limit?: number, skip?: number) => `${API_BASE}/products?limit=${limit || 30}&skip=${skip || 0}`,
    SINGLE_PRODUCT: (id: number) => `${API_BASE}/products/${id}`,
    SEARCH_PRODUCTS: (query: string) => `${API_BASE}/products/search?q=${query}`,
    PRODUCTS_CATEGORIES: `${API_BASE}/products/categories`,
    CATEGORY_PRODUCTS: (categoryName: string | undefined) => `${API_BASE}/products/category/${categoryName}`,
}

export default API;