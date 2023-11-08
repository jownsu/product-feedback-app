/* React */
import React from "react";

/* Plugins */
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Dropdown } from "react-bootstrap";

/* Redux */
import { useDispatch } from "react-redux";
import { createFeedback } from "../../redux/feedback_slice";

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
            category: "Feature",
            description: ""
        }
    });

    const handleCreateFeedbackSubmit = (form_data) => {
        dispatch(createFeedback(form_data));
        navigate("/");
    }


    return(
        <div className="create_feedback">
            <Link 
                to="/" 
                className="back"
            >
                <span className="back__icon"></span> 
                Go back
            </Link>
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
                        <Dropdown.Toggle>{watch("category")}</Dropdown.Toggle>
                        <Dropdown.Menu className="input__dropdown--menu">
                            <Dropdown.Item
                                as="div"
                                className="input__dropdown--option"
                                onClick={() => setValue("category", "Feature")}
                            >
                                Feature
                                {watch("category") === "Feature" && <span className="input__dropdown--check"></span>}
                            </Dropdown.Item>
                            <Dropdown.Item 
                                as="div" 
                                className="input__dropdown--option"
                                onClick={() => setValue("category", "UI")}
                            >
                                UI
                                {watch("category") === "UI" && <span className="input__dropdown--check"></span>}
                            </Dropdown.Item>
                            <Dropdown.Item
                                as="div" 
                                className="input__dropdown--option"
                                onClick={() => setValue("category", "UX")}
                            >
                                UX
                                {watch("category") === "UX" && <span className="input__dropdown--check"></span>}
                            </Dropdown.Item>
                            <Dropdown.Item 
                                as="div" 
                                className="input__dropdown--option"
                                onClick={() => setValue("category", "Enhancement")}
                            >
                                Enhancement
                                {watch("category") === "Enhancement" && <span className="input__dropdown--check"></span>}
                            </Dropdown.Item>
                            <Dropdown.Item 
                                as="div" 
                                className="input__dropdown--option"
                                onClick={() => setValue("category", "Bug")}
                            >
                                Bug
                                {watch("category") === "Bug" && <span className="input__dropdown--check"></span>}
                            </Dropdown.Item>
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
                    <Link to="/" className="btn btn--tertiary">Cancel</Link>
                    <button type="submit" className="btn btn--primary">Add Feedback</button>
                </div>
            </form>
        </div>
    )
}

export default CreateFeedback;