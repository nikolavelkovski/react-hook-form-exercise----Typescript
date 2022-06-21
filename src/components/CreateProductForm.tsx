import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

type Props = {};

interface IFormInput {
    title: string;
    price: number;
    description?:string;
    imageUrl: string;
    stateId :string;
    categoryId : string
}


const schema = yup.object({
    title: yup.string().required("This Field its required!").min(4,"The minimum length of the title its 4 characters"),
    price: yup.number().required("This Field its required!").typeError('You must specify a number!').min(4, "Minimum value for the price its 4!"),
    imageUrl: yup.string().required("This Field its required!").matches(/(http[s]*:\/\/)([a-z\-_0-9\/.]+)\.([a-z.]{2,3})\/([a-z0-9\-_\/._~:?#\[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(jpg|jpeg|png)/,'Enter correct image url!'),

}).required()

export default function CreateProducthtmlForm({ }: Props) {
    const {register, handleSubmit, formState: {errors}} = useForm<IFormInput>({
        resolver:yupResolver(schema)
    })

    const handleFormSubmit:SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    }
    return (
        <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit(handleFormSubmit)}>
            <h2 className="text-gray-700 font-bold text-2xl text-left mb-10">Create Product</h2>
            <div className="flex mb-7">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
                <label
                    className="block uppercase tracking-wide text-left text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-state"
                >
                    State:
                </label>
                <div className="relative">
                    <select {...register("stateId", {required:true})}
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                    >
                        <option value="lal">New Mexico</option>
                        <option>Missouri</option>
                        <option>Texas</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/4 mb-6 ml-4 md:mb-0">
                <label
                    className="block uppercase tracking-wide text-left text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-state"
                >
                    Category:
                </label>
                <div className="relative">
                    <select {...register("categoryId", {required:true})}
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                    >
                        <option>New Mexico</option>
                        <option>Missouri</option>
                        <option>Texas</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>
            </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label  
                        className="block uppercase tracking-wide text-left text-gray-700 text-xs font-bold mb-2"
                        htmlFor="title-form"
                    >
                        Title:
                    </label>
                    <input {...register("title")}
                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.title && 'border-red-500 '} rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white`}
                        id="title-form"
                        type="text"
                        placeholder="Product title"
                    />
                    {<p className="text-red-500 text-xs italic px-2 text-left">
                        {errors.title?.message}
                    </p>}
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label
                        className="block uppercase tracking-wide text-left text-gray-700 text-xs font-bold mb-2"
                        htmlFor="price-form"
                    >
                        Price:
                    </label>
                    <input  {...register("price")}
                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 ${errors.price && 'border-red-500 '} rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="price-form"
                        type="text"
                        placeholder="Product price ($)"
                    />
                       {<p className="text-red-500 text-xs italic px-2 text-left">
                        {errors.price?.message}
                    </p>}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label
                        className="block uppercase tracking-wide text-left text-gray-700 text-xs font-bold mb-2"
                        htmlFor="imageUrl-form"
                    >
                        Image Url:
                    </label>
                    <input  {...register("imageUrl")}
                        className={`appearance-none  block w-full bg-gray-200 text-left text-gray-700 border ${errors.imageUrl && 'border-red-500 '}  border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="imageUrl-form"
                        type="text"
                        placeholder="Product Image Url"
                    />
                 {<p className="text-red-500 text-xs italic px-2 text-left">
                        {errors.imageUrl?.message}
                    </p>}
                </div>
               
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label
                        className="block uppercase tracking-wide text-left text-gray-700 text-xs font-bold mb-2"
                        htmlFor="description-form"
                    >
                        Product Description:
                    </label>
                    <input {...register("description")}
                        className="appearance-none  block w-full bg-gray-200 text-left text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="description-form"
                        type="text"
                        placeholder="Product Description"
                    />
                
                </div>
            </div>
            <input type="submit" />
        </form>
    );
}
