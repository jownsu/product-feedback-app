/* React */
import React from "react";

/* Plugins */
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Dropdown } from "react-bootstrap";

/* Redux */
import { useDispatch, useSelector } from "react-redux";
import { editFeedback, deleteFeedback } from "../../redux/feedback_slice";

/* Constants */
import { CATEGORIES, STATUS } from "../../assets/constants/constants";

/* Styles */
import "./edit_feedback.scss";

const EditFeedback = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { feedback_id } = useParams();

    const { product_requests } = useSelector(state => state.feedback);
    const selected_feedback = product_requests.find(product => product.id == feedback_id);

    const { 
        register, 
        handleSubmit, 
        setValue,
        watch,
        formState: { errors } 
    } = useForm({
        defaultValues: {
            id: selected_feedback.id,
            title: selected_feedback.title,
            category: selected_feedback.category,
            status: selected_feedback.status,
            description: selected_feedback.description
        }
    });

    const handleCreateFeedbackSubmit = (form_data) => {
        dispatch(editFeedback(form_data));
        navigate(`/feedbacks/${selected_feedback.id}`);
    }

    const handleDeleteFeedback = () => {
        dispatch(deleteFeedback({id: selected_feedback.id}));
        navigate("/");
    }

    return(
        <div className="edit_feedback">
            <Link 
                to="/" 
                className="back"
            >
                <span className="back__icon"></span> 
                Go back
            </Link>
            <form onSubmit={handleSubmit(handleCreateFeedbackSubmit)} className="edit_feedback_form">
                <span className="plus_icon"></span>
                <h2>Edit Feedback</h2>
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
                                    key={key}
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
                <div className="input">
                    <p className="input__main_label">Update Status</p>
                    <p className="input__sub_label">Change feedback state</p>
                    <Dropdown className="input__dropdown">
                        <Dropdown.Toggle>{STATUS[watch("status")]}</Dropdown.Toggle>
                        <Dropdown.Menu className="input__dropdown--menu">
                            {
                                Object.entries(STATUS).map(([key, status]) => (
                                    <Dropdown.Item
                                        key={key}
                                        as="div"
                                        className="input__dropdown--option"
                                        onClick={() => setValue("status", key)}
                                    >
                                        {status}
                                        {watch("status") === key && <span className="input__dropdown--check"></span>}
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
                    <button 
                        type="button" 
                        className="btn btn--danger"
                        onClick={handleDeleteFeedback}
                    >
                        Delete
                    </button>
                    <Link to="/" className="btn btn--tertiary">Cancel</Link>
                    <button type="submit" className="btn btn--primary">Save Changes</button>
                </div>
            </form>
        </div>
    )
}

export default EditFeedback;