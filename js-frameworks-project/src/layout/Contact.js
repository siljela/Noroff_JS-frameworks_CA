import React from 'react';
import { useForm } from "react-hook-form";
import PokemonGroup from "../components/images/PokemonGroup";
import Heading from "../components/Heading";
// import Select from 'react-select'

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function onSubmit(data) {
        console.log(data);
        const form = document.querySelector("form");
        form.innerHTML = "<p>Form submitted. You will hear from us shortly.</p>";
    }

    // console.log(errors);

    return (
        <div className="contact-main">
                <Heading content="Contact us" secondHeadline="Please write your enquiry below.."/>

                <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Your name" {...register("name", { required: true })} />
                    {errors.name && <span className="form-error">Your name is missing</span>}

                    <input type="tel" placeholder="Phone number" {...register("phoneNumber", {required: true, pattern: /^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{2}$/ })} />
                    {errors.phoneNumber && <span className="form-error">Phone number is missing</span>}

                    <select {...register("type", { required: true })}>
                        <option value="enquiry">Enquiry</option>
                        <option value="complaint">Complaint</option>
                        <option value="compliment">Compliment</option>
                        <option value="general">General Message</option>
                    </select>

                    <textarea placeholder="Question or comment here" {...register("comment", { required: true })} />
                    {errors.comment && <span className="form-error">Please write a comment</span>}

                    <button>Send</button>
                </form>

                <PokemonGroup />
            </div>

    );
}

export default Contact
