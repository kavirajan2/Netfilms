import React from 'react';
import Link from 'next/link';
import {white} from "next/dist/lib/picocolors";

function Movie404 () {
    return (
        <div style={
            {display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}
        }>
            <h1>404 - Movie Not Found</h1>
            <Link href="/" style={{textDecoration:"underline", fontsize:20, marginTop:8 , color:'white'}}>
                Go Home
            </Link>
        </div>
    );
}

export default Movie404;