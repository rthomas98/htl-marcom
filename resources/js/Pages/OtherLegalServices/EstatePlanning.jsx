import React from 'react';
import MarcomLayout from '@/Layouts/MarcomLayout';
import Header5 from '@/Components/Common/Header5';
import { Layout235 } from '@/Components/Common/Layout235';
import { Layout237 } from '@/Components/Common/Layout237';
import { Faq3 } from '@/Components/Common/Faq3';
import { Cta27 } from '@/Components/Common/Cta27';

const EstatePlanning = () => {
  return (
    <MarcomLayout
      title="Estate Planning Services | Hebert Thomas Law"
      description="Professional estate planning and wealth management services in Louisiana"
    >
      <main>
        <Header5 />
        <Layout235 />
        <Layout237 />
        <Faq3 />
        <Cta27 />
      </main>
    </MarcomLayout>
  );
};

export default EstatePlanning;
