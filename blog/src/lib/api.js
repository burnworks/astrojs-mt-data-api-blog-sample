const ENDPOINT = import.meta.env.SECRET_MT_ENDPOINT_URL;

const fetchAPI = async (path) => {
    const res = await fetch(`${ENDPOINT}${path}`).catch((err) => { console.error(err) });
    const json = await res.json();
    return json;
}

const fetchAllPosts = (num) => {
    const params = [['limit', num], ['status', 'Publish']];
    const param = new URLSearchParams(params).toString();

    return fetchAPI(`?${param}`);
}

export const getAllPosts = async (num) => {
    const data = await fetchAllPosts(num);
    return data;
}