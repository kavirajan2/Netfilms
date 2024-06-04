import React from "react";
import Loading from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from "./styles.module.css";

function FeaturedMovieLoading() {
    return (
        <div style={{ height:278}} className={styles.MovieWrapper}>
            <Loading />
        </div>
    );
}

export default FeaturedMovieLoading;