/* React */
import React from "react";

/* Plugins */
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Dropdown } from "react-bootstrap";

/* Redux */
import { useDispatch } from "react-redux";
import { createFeedback } from "../../redux/feedback_slice";

/* Constants */
import { CATEGORIES, STATUS } from "../../assets/constants/constants";

/* Styles */
import "./create_feedback.scss";

const CreateFeedback = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { 
        register, 
        handleSubmit, 
        setValue,
        watch,
        formState: { errors } 
    } = useForm({
        defaultValues: {
            title: "",
            category: 1,
            status: 1,
            description: ""
        }
    });

    const handleCreateFeedbackSubmit = (form_data) => {
        dispatch(createFeedback(form_data));
        navigate("/");
    }

    return(
        <div className="create_feedback">
            <button 
                type="button" 
                className="back"
                onClick={() => navigate(-1)}
            >
                <span className="back__icon"></span> 
                Go back
            </button>
            <form onSubmit={handleSubmit(handleCreateFeedbackSubmit)} className="create_feedback_form">
                <span className="plus_icon"></span>
                <h2>Create New Feedback</h2>
                <div className={`input ${errors?.title ? "input--error" : ""}`}>
                    <p className="input__main_label">Feedback Title</p>
                    <p className="input__sub_label">Add a short, descriptive headline</p>
                    <input 
                        type="text" 
                        className="input__text"
                        {...register("title", { required: true })}
                    />
                    {errors?.title && <p className="input__error_msg">Can't be empty</p>}
                </div>
                <div className="input">
                    <p className="input__main_label">Category</p>
                    <p className="input__sub_label">Choose a category for your feedback</p>
                    <Dropdown className="input__dropdown">
                        <Dropdown.Toggle>{CATEGORIES[watch("category")]}</Dropdown.Toggle>
                        <Dropdown.Menu className="input__dropdown--menu">

                        {
                            Object.entries(CATEGORIES).map(([key, category]) => (
                                <Dropdown.Item
                                    as="div"
                                    className="input__dropdown--option"
                                    onClick={() => setValue("category", key)}
                                >
                                    {category}
                                    {watch("category") === key && <span className="input__dropdown--check"></span>}
                                </Dropdown.Item>
                            ))
                        }
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className={`input ${errors?.description ? "input--error" : ""}`}>
                    <p className="input__main_label">Feedback Detail</p>
                    <p className="input__sub_label">Include any specific comments on what should be improved, added, etc.</p>
                    <textarea 
                        type="text" 
                        className="input__textarea"
                        {...register("description", { required: true })}
                    ></textarea>
                    {errors?.description && <p className="input__error_msg">Can't be empty</p>}
                </div>
                <div className="action_container">
                    <button onClick={() => navigate(-1)} className="btn btn--tertiary">Cancel</button>
                    <button type="submit" className="btn btn--primary">Add Feedback</button>
                </div>
            </form>
        </div>
    )
}

export default CreateFeedback;