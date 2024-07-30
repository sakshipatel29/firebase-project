import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import {db, auth} from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface CreateFormData {
    title: string,
    description: string,
}

export const CreateForm = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required("You must add a Title!"),
        description: yup.string().required("You should write a description!"),
    })

const postRef = collection(db, "posts");

const onCreatePost = async (data: CreateFormData) => {
    await addDoc(postRef, {
        title: data.title,
        description: data.description, // ...data, will work for this title and description. if we want to use whole data in our database.
        user: user?.displayName,
        userId: user?.uid,
    });

    navigate("/");
}

const {register, handleSubmit, formState: {errors}} = useForm<CreateFormData>({
    resolver: yupResolver(schema),
})
    return (
        <form onSubmit={handleSubmit(onCreatePost)} >
            <input placeholder="Title..." {...register("title")}/>
            <p style={{color: "red"}}>{errors.title?.message}</p>
            <textarea placeholder="Description..." {...register("description")}/>
            <p style={{color: "red"}}>{errors.description?.message}</p>
            <input type="submit" className="submitForm"/>

        </form>
    );
}