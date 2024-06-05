import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.css";

function MoviesSection({ title,movies }) {
    return (
        <div className={styles.moviesSection}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.movies}>
                {Array.isArray(movies) && movies.map((movie) => (
                    <div className={styles.movie} key={movie.id}>
                        <Link href={`/movie/${movie.id}`}>
                            <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}
                                   fill unoptimized />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MoviesSection;