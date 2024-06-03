import React from "react";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <Link href="/about">About</Link>
            <br/>
            <Link href="/docs/post-1">Post 1</Link>
            <br/>
            <Link href="/docs/post-1/post-2">Post 2</Link>
            <br/>
            <Link href="{{ " >Post 2</Link>
        </div>
    );
}