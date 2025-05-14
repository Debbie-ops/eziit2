import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  /*{
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'For Individuals',
    description:
      '',
  },*/
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'For Individuals.',
    description:
      'Eziit provides financial flexibility, allowing you to access essential goods when you need them and pay when its convenient for your budget. With our zero interest policy, you will never pay more than the retail price, eliminating the burden of accumulating interest that comes with traditional credit options.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'For Merchants.',
    description:
      'Partnering with Eziit transforms your business by significantly increasing sales through converting browsers into buyers with our attractive flexible payment options. We eliminate financial risk from your business equation by providing full protection against payment defaults, ensuring you receive payment regardless of customer repayment status.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'For Employers.',
    description:
      'Offering Eziit to your workforce instantly enhances your employee benefits package with a valuable financial wellness benefit that addresses real world needs without adding costs to your business. By providing practical financial support, you can improve workplace productivity by reducing the financial stress that often impacts employee performance and focus.',
  },
  /*{
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
  /*{
    imageUrl: '/grid-icons/asset-7.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
  {
    imageUrl: '/grid-icons/asset-8.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
  {
    imageUrl: '/grid-icons/asset-9.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },*/
];

export default function Features() {
  return (
    
      <Container>
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Container>
    
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
