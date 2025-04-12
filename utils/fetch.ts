import { API_KEY, API_URL } from "./key";

export default async (urlParams?: string) => {
    try {
        const response = await fetch(
            `${API_URL}?api_key=${API_KEY}${
                typeof urlParams !== 'undefined' && urlParams?.length > 0 
                ? urlParams 
                : ''
            }`,
        );
        const data = await response.json();

        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error);
    }
};
