const ID = "ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9";

export const fetchNewData = async () => {
    const url = `https://api.unsplash.com/photos/?client_id=${ID}&per_page=30`
    const response = await fetch(url, { method: "get" });
    return response;
};