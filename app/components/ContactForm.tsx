// contactform.tsx
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface ContactFormProps {
  onSubmit: (data: Record<string, string>) => void;
}
const ContactForm = ({ onSubmit }: ContactFormProps) => {
    const { register, handleSubmit } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmitHandler = async (data: Record<string, string>) => {
        setIsSubmitting(true);
        setIsSuccess(false);
        setIsError(false);
        setErrorMessage("");

        try {
            await onSubmit(data);
            setIsSuccess(true);
        } catch (error) {
            setIsError(true);
            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("An error occurred");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" {...register("name", { required: true })} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" {...register("email", { required: true })} />
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" {...register("message", { required: true })}></textarea>
            </div>
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
            </button>
            {isSuccess && <p>Form submitted successfully!</p>}
            {isError && <p>Error: {errorMessage}</p>}
        </form>
    );
};

export default ContactForm;