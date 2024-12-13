import React, { useState } from "react";
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
    Button,
} from "@relume_io/relume-ui";
import { motion } from 'framer-motion';

export default function ContactForm({ className = "", ...props }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        serviceType: "",
        clientType: "",
        message: "",
        acceptTerms: false
    });

    const handleChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // TODO: Implement form submission
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
                        Fill out the form below and we'll get back to you within 24 hours to schedule your consultation.
                    </p>
                </motion.div>

                <motion.form 
                    className="grid grid-cols-1 grid-rows-[auto_auto] gap-6"
                    variants={formVariants}
                    initial="hidden"
                    animate="visible"
                    onSubmit={handleSubmit}
                >
                    <div className="grid grid-cols-2 gap-6">
                        <div className="grid w-full items-center">
                            <Label htmlFor="firstName" className="mb-2 text-cod-gray">
                                First name
                            </Label>
                            <Input
                                type="text"
                                id="firstName"
                                value={formData.firstName}
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
                                value={formData.lastName}
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
                                value={formData.email}
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
                                value={formData.phone}
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
                            value={formData.message}
                            onChange={(e) => handleChange('message', e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
                        <Checkbox 
                            id="terms" 
                            checked={formData.acceptTerms}
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
                        <Button 
                            type="submit"
                            className="bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray"
                        >
                            Schedule Consultation
                        </Button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
}
