import React, { useState, useEffect } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    RadioGroup,
    RadioGroupItem,
    Input,
    Label,
    Checkbox,
    Textarea,
} from "@relume_io/relume-ui";
import { useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function ContactForm({ className = "", ...props }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        serviceType: "",
        clientType: "",
        message: "",
        acceptTerms: false,
        honey_pot: "", // Honeypot field
        recaptcha_token: "", // reCAPTCHA token
    });

    const [showMessage, setShowMessage] = useState(false);
    const [messageType, setMessageType] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Load reCAPTCHA script
        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=${window.recaptchaSiteKey}`;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleChange = (field, value) => {
        setData(field, value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setShowMessage(false);

        try {
            // Get reCAPTCHA token
            const token = await window.grecaptcha.execute(window.recaptchaSiteKey, {
                action: 'contact_form'
            });
            
            setData('recaptcha_token', token);
            
            post(route('contact.submit'), {
                preserveScroll: true,
                onSuccess: () => {
                    reset();
                    setMessageType('success');
                    setMessage('Thank you for your message. We will get back to you soon!');
                    setShowMessage(true);
                    setTimeout(() => setShowMessage(false), 5000);
                },
                onError: () => {
                    setMessageType('error');
                    setMessage('Sorry, there was an error sending your message. Please try again.');
                    setShowMessage(true);
                }
            });
        } catch (error) {
            setMessageType('error');
            setMessage('There was an error verifying your request. Please try again.');
            setShowMessage(true);
        }
    };

    const serviceTypes = [
        { value: "trademark-registration", label: "Trademark Registration" },
        { value: "ip-strategy", label: "IP Strategy & Portfolio Management" },
        { value: "business-law", label: "Business Law" },
        { value: "contract-review", label: "Contract Review" },
        { value: "litigation", label: "IP Litigation" }
    ];

    const clientTypes = [
        { value: "startup", label: "Startup Founder" },
        { value: "small-business", label: "Small Business Owner" },
        { value: "enterprise", label: "Enterprise Company" },
        { value: "individual", label: "Individual Creator" },
        { value: "nonprofit", label: "Nonprofit Organization" },
        { value: "other", label: "Other" }
    ];

    const formVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <section className={`bg-white px-[5%] py-16 md:py-24 lg:py-28 ${className}`} {...props}>
            <div className="container max-w-lg">
                <motion.div 
                    className="mx-auto mb-8 w-full max-w-lg text-center md:mb-10 lg:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="font-heading mb-3 font-semibold text-cod-gray/80 md:mb-4">Schedule a Consultation</p>
                    <h2 className="font-heading rb-5 mb-5 text-5xl font-bold text-cod-gray md:mb-6 md:text-7xl lg:text-8xl">
                        Let's Discuss Your Case
                    </h2>
                    <p className="text-cod-gray/80 md:text-md">
                        Fill out the form below and we’ll get back to you within 24 hours to schedule your consultation.
                    </p>
                </motion.div>

                {showMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`mb-6 rounded-lg p-4 ${
                            messageType === 'success' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                        }`}
                    >
                        {message}
                    </motion.div>
                )}

                <motion.form 
                    className="grid grid-cols-1 grid-rows-[auto_auto] gap-6"
                    variants={formVariants}
                    initial="hidden"
                    animate="visible"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        name="honey_pot"
                        value={data.honey_pot}
                        onChange={(e) => setData('honey_pot', e.target.value)}
                        style={{ display: 'none' }}
                        tabIndex="-1"
                        autoComplete="off"
                    />

                    <div className="grid grid-cols-2 gap-6">
                        <div className="grid w-full items-center">
                            <Label htmlFor="firstName" className="mb-2 text-cod-gray">
                                First name
                            </Label>
                            <Input
                                type="text"
                                id="firstName"
                                value={data.firstName}
                                onChange={(e) => handleChange('firstName', e.target.value)}
                                className="border-cod-gray/20 focus:border-pippin"
                                required
                            />
                        </div>

                        <div className="grid w-full items-center">
                            <Label htmlFor="lastName" className="mb-2 text-cod-gray">
                                Last name
                            </Label>
                            <Input
                                type="text"
                                id="lastName"
                                value={data.lastName}
                                onChange={(e) => handleChange('lastName', e.target.value)}
                                className="border-cod-gray/20 focus:border-pippin"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="grid w-full items-center">
                            <Label htmlFor="email" className="mb-2 text-cod-gray">
                                Email
                            </Label>
                            <Input
                                type="email"
                                id="email"
                                value={data.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                className="border-cod-gray/20 focus:border-pippin"
                                required
                            />
                        </div>

                        <div className="grid w-full items-center">
                            <Label htmlFor="phone" className="mb-2 text-cod-gray">
                                Phone number
                            </Label>
                            <Input
                                type="tel"
                                id="phone"
                                value={data.phone}
                                onChange={(e) => handleChange('phone', e.target.value)}
                                className="border-cod-gray/20 focus:border-pippin"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid w-full items-center">
                        <Label className="mb-2 text-cod-gray">Service Type</Label>
                        <Select onValueChange={(value) => handleChange('serviceType', value)}>
                            <SelectTrigger className="border-cod-gray/20 text-cod-gray">
                                <SelectValue placeholder="Select service type..." />
                            </SelectTrigger>
                            <SelectContent>
                                {serviceTypes.map((item, index) => (
                                    <SelectItem key={index} value={item.value}>
                                        {item.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid w-full items-center py-3 md:py-4">
                        <Label className="mb-3 text-cod-gray md:mb-4">Which best describes you?</Label>
                        <RadioGroup
                            className="grid grid-cols-2 gap-x-6 gap-y-3.5"
                            onValueChange={(value) => handleChange('clientType', value)}
                        >
                            {clientTypes.map((item, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <RadioGroupItem value={item.value} id={item.value} className="border-cod-gray/20 text-pippin" />
                                    <Label htmlFor={item.value} className="text-cod-gray">{item.label}</Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>

                    <div className="grid w-full items-center">
                        <Label htmlFor="message" className="mb-2 text-cod-gray">
                            Tell us about your case
                        </Label>
                        <Textarea
                            id="message"
                            placeholder="Please provide a brief description of your legal needs..."
                            className="min-h-[11.25rem] overflow-auto border-cod-gray/20 focus:border-pippin"
                            value={data.message}
                            onChange={(e) => handleChange('message', e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
                        <Checkbox 
                            id="terms" 
                            checked={data.acceptTerms}
                            onCheckedChange={(checked) => handleChange('acceptTerms', checked)}
                            className="border-cod-gray/20 text-pippin"
                            required
                        />
                        <Label htmlFor="terms" className="cursor-pointer text-cod-gray">
                            I understand that submitting this form does not create an attorney-client relationship and that the information submitted will be kept confidential.{" "}
                            <a className="text-cod-gray underline decoration-cod-gray/30 hover:decoration-cod-gray" href="#">
                                Terms & Privacy Policy
                            </a>
                        </Label>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            disabled={processing}
                            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray transition-colors duration-300"
                        >
                            {processing ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
}
