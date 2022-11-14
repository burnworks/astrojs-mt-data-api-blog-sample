const ENDPOINT = import.meta.env.SECRET_MT_ENDPOINT_URL;

const fetchAPI = async (param) => {
    const res = await fetch(`${ENDPOINT}${param}`).catch((err) => { console.error(err) });
    const json = await res.json();
    return json;
}

// 記事一覧取得
const fetchAllPosts = (num) => {
    const params = [['limit', num], ['status', 'Publish']];
    const param = new URLSearchParams(params).toString();

    return fetchAPI(`entries?${param}`);
}

export const getAllPosts = async (num) => {
    const data = await fetchAllPosts(num);
    return data;
}

// カテゴリ一覧取得
const fetchAllCategories = () => {
    const params = [['limit', '0'], ['sortBy', 'basename']];
    const param = new URLSearchParams(params).toString();

    return fetchAPI(`categories?${param}`);
}

export const getAllCategories = async () => {
    const data = await fetchAllCategories();
    return data;
}

// カテゴリ別の記事一覧取得
const fetchCategoriesPost = (id, num) => {
    const params = [['limit', num]];
    const param = new URLSearchParams(params).toString();

    return fetchAPI(`categories/${id}/entries?${param}`);
}

export const getCategoriesPost = async (id, num) => {
    const data = await fetchCategoriesPost(id, num);
    return data;
}

// 個別の記事データ取得（今回のサンプルでは使用していない id にエントリーIDを指定すれば個別記事の取得）
const fetchIndividualPost = (id) => {
    return fetchAPI(`entries/${id}`);
}

export const getIndividualPost = async (id) => {
    const data = await fetchIndividualPost(id);
    return data;
}
