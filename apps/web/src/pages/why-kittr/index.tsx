import ContactUs from '@Components/shared/ContactUs';
import Head from '@Components/shared/Head';
import { getTotalKitsQuery } from '@Services/orm/queries/kits/total';
import { Routes } from '@Utils/lookups/routes';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import CallToAction from '@Features/WhyKittr/CallToAction';
import Features from '@Features/WhyKittr/Features';
import Hero from '@Features/WhyKittr/Hero';
import HowItWorks from '@Features/WhyKittr/HowItWorks';
import Testimonials from '@Features/WhyKittr/Testimonials';
import Winners from '@Features/WhyKittr/Winners';
import * as Styled from '@Features/WhyKittr/style';

interface Props {
  totalNumberOfKits: number;
}

function WhyKittr({ totalNumberOfKits }: Props) {
  return (
    <>
      <Head
        description="."
        title="Improve Your Channel in 15 Minutes | kittr"
      />
      <Hero totalNumberOfKits={totalNumberOfKits} />
      <div style={{ margin: '0 24px' }}>
        <Features />
        <HowItWorks />
        <Winners />
        <Testimonials />
        <Styled.H2>CONTACT US</Styled.H2>
        <Styled.P>STILL HAVE QUESTIONS? WE'VE GOT YOUR BACK.</Styled.P>
        <ContactUs />
        <CallToAction header="get kittd." marginTop="32px" />
        <div style={{ marginBottom: '32px', textAlign: 'center' }}>
          <Link href={Routes.ROOT} legacyBehavior passHref>
            <Styled.LinkButton
              design="transparent"
              rel="noopener no referrer"
              style={{ marginTop: '0' }}
              target="_blank"
            >
              VISIT SITE
            </Styled.LinkButton>
          </Link>
        </div>
      </div>
    </>
  );
}

export default WhyKittr;

export const getStaticProps: GetStaticProps = async () => {
  const totalNumberOfKits = await getTotalKitsQuery();

  return {
    props: {
      totalNumberOfKits: Math.ceil(totalNumberOfKits / 100) * 100 || 0,
    },
    revalidate: 60,
  };
};
