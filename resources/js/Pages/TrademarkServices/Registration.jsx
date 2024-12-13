import React from 'react'
import MarcomLayout from '@/Layouts/MarcomLayout'
import RegistrationHeader from '@/Components/Trademark/RegistrationHeader'
import RegistrationProcess from '@/Components/Trademark/RegistrationProcess'
import RegistrationBenefits from '@/Components/Trademark/RegistrationBenefits'
import RegistrationFAQ from '@/Components/Trademark/RegistrationFAQ'
import RegistrationCTA from '@/Components/Trademark/RegistrationCTA'

export default function Registration() {
    return (
        <MarcomLayout
            title="Trademark Registration | Hebert Thomas Law"
            description="Expert trademark registration services for your business"
        >
            <RegistrationHeader />
            <RegistrationProcess />
            <RegistrationBenefits />
            <RegistrationFAQ />
            <RegistrationCTA />
        </MarcomLayout>
    )
}