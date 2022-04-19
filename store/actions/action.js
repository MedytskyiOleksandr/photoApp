export const SET_IMAGES = "SET_IMAGES";

import { fetchNewData } from "../../api/api";

export const fetchData = (nextPage) => {
    return async (dispatch) => {
        try {
            const response = await fetchNewData(nextPage);
            const data = await response.json();

            let posts = data.map((imgData) => ({
                id: imgData.id,
                username: imgData.user.username,
                miniImage: imgData.urls.small,
                fullImage: imgData.urls.full,
                likes: imgData.likes,
                width: imgData.width,
                height: imgData.height,
            }));

            dispatch({ type: SET_IMAGES, images: posts, page: nextPage })
        } catch (error) {
            console.log(error);
        }
    };
};