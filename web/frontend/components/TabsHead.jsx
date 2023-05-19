import { Tabs,AlphaCard} from '@shopify/polaris';
import {useState, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';



export default function TabsHead() {
  const navigate = useNavigate();

  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => {
      setSelected(selectedTabIndex);
      navigate(pages[selectedTabIndex]);
    },
    [],
  );

  const tabs = [
    {
      id: 'all-customers-1',
      content: 'Home',
    },
    {
      id: 'accepts-marketing-1',
      content: 'Widget setup',
    },
    {
      id: 'repeat-customers-1',
      content: 'Manual recommendation',
    },
    {
      id: 'My Widget',
      content: 'My widgets',
    },
    {
      id: 'Analytics',
      content: 'Analytics',
    },
  ];


  const pages = [
    '/',
    "/ProductPage",
    '/CartPage',
    '/ShopPage',
    '/CheckoutPage',
  ];

  return (
    <AlphaCard roundedAbove="--p-border-radius-05" padding="0">
      <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
      </Tabs>
    </AlphaCard>
  );
}
