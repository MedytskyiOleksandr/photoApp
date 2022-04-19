import React from 'react'
import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../store/actions/action'
import List from '../components/List';

function Gallery() {
    const posts = useSelector((state) => state.posts);

    const dispatch = useDispatch()

    const loadImages = useCallback(async () => {
        try {
            await dispatch(actions.fetchData());
        } catch (err) {
            throw Error(err.message)
        }
    }, [dispatch])

    useEffect(() => {
        loadImages()
    }, [loadImages])

    return (
        <List posts={posts} />
    )
}

export default Gallery;