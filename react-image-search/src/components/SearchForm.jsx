import { useForm } from "react-hook-form";
import { queryPhotos } from "../actions/unsplash";

export default function SearchForm(props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const submitForm = async (data) => {
        const responseData = await queryPhotos(data.query);
        props.setSearchData(responseData);
    }

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <input {...register('query', { required: true })} className="w-full text-xl border rounded-lg p-2" type="search" placeholder="Search images..." />
            {
                errors.query && <p className="text-sm text-red-500 mt-1">Please type something!</p>
            }
        </form>
    );   
}