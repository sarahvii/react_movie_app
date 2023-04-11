import React, {useState} from "react";

const MovieAddForm = ({onAddMovieSubmit}) => {

    const [title, setTitle] = useState("");

const handleTitleChange = (evt) => {
    setTitle(evt.target.value);
}

const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const titleToSubmit = title.trim();
    if (!titleToSubmit) {
        return
    }

    onAddMovieSubmit({
        title: titleToSubmit,
    });

    setTitle("");
}

    return (
        <form className='movie-add-form' onSubmit={handleFormSubmit}>
            <input 
            type="text"
            placeholder="Add new movie"
            value={title}
            onChange={handleTitleChange}/>
            <input
            type="submit"
            value="Add"
            />

        </form>
    )
}

export default MovieAddForm