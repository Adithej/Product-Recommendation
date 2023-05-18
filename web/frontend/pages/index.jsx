import {
  Page,
  Button,
  HorizontalGrid,
  LegacyCard,
  TopBar,
  LegacyStack,
  Link,
  Box
} from "@shopify/polaris";

import TabsHead from "../components/TabsHead";

import CardAction from "../components/CardAction";
import CustomCard from "../components/CustomCard";


const ProductTitle = () => {
  return (
    <h2
      style={{ textAlign: "center", fontWeight: "600", lineHeight: "2.5rem" }}
    >
      Product page
    </h2>
  );
};

const CartTitle = () => {
  return (
    <h2
      style={{ textAlign: "center", fontWeight: "600", lineHeight: "2.5rem" }}
    >
      Cart page
    </h2>
  );
};

const CollectionTitle = () => {
  return (
    <h2
      style={{ textAlign: "center", fontWeight: "600", lineHeight: "2.5rem" }}
    >
      Collections page
    </h2>
  );
};

const CheckoutTitle = () => {
  return (
    <h2
      style={{ textAlign: "center", fontWeight: "600", lineHeight: "2.5rem" }}
    >
      Checkout page
    </h2>
  );
};

const ShopTitle = () => {
  return (
    <h2
      style={{ textAlign: "center", fontWeight: "600", lineHeight: "2.5rem" }}
    >
      Shop page
    </h2>
  );
};

export default function HomePage() {
  return (
    <Box maxWidth="1400px">
      <TabsHead />
      <Page  title="Select a page to reccomend products">
        <CustomCard/>
      </Page>
    </Box>
  );
}
