import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { Post } from "./post";

export interface Post {
    id: string;
    userId: string;
    title: string;
    user: string;
    description: string;
}

export const Main = () => {
    const [postList, setPostList] = useState<Post[] | null>(null);
    const postsRef = collection(db, "posts");

    const getPosts = async () => {
        const data = await getDocs(postsRef);
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]);
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="post-container">
            {postList?.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};
