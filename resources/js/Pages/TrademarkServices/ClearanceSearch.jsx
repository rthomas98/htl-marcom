import React from 'react';
import MarcomLayout from '@/Layouts/MarcomLayout';
import ClearanceSearchHeader from '@/Components/Trademark/ClearanceSearchHeader';
import ClearanceSearchProcess from '@/Components/Trademark/ClearanceSearchProcess';
import ClearanceSearchFeatures from '@/Components/Trademark/ClearanceSearchFeatures';
import ClearanceSearchBenefits from '@/Components/Trademark/ClearanceSearchBenefits';
import ClearanceSearchFAQ from '@/Components/Trademark/ClearanceSearchFAQ';
import ClearanceSearchCTA from '@/Components/Trademark/ClearanceSearchCTA';

export default function ClearanceSearch() {
    return (
        <MarcomLayout
            title="Trademark Clearance Search | Hebert Thomas Law"
            description="Comprehensive trademark clearance search services"
        >
            <ClearanceSearchHeader />
            <ClearanceSearchProcess />
            <ClearanceSearchFeatures />
            <ClearanceSearchBenefits />
            <ClearanceSearchFAQ />
            <ClearanceSearchCTA />
        </MarcomLayout>
    );
}