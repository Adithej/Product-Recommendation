import {
  Page,
  HorizontalGrid,
  LegacyCard,
  Button,
  Link,
} from "@shopify/polaris";
import TabsHead from "../components/TabsHead";

const RelatedTitle = () => {
  return (
    <h2
      style={{ textAlign: "center", fontWeight: "600", lineHeight: "2.5rem" }}
    >
      Related Products
    </h2>
  );
};

const RecentTitle = () => {
  return (
    <h2
      style={{ textAlign: "center", fontWeight: "600", lineHeight: "2.5rem" }}
    >
      Recently viewed
    </h2>
  );
};

const FrequentTitle = () => {
  return (
    <h2
      style={{ textAlign: "center", fontWeight: "600", lineHeight: "2.5rem" }}
    >
      Frequently brought together
    </h2>
  );
};

const ArrivalTitle = () => {
  return (
    <h2
      style={{ textAlign: "center", fontWeight: "600", lineHeight: "2.5rem" }}
    >
      New arrivals
    </h2>
  );
};

const SellersTitle = () => {
  return (
    <h2
      style={{ textAlign: "center", fontWeight: "600", lineHeight: "2.5rem" }}
    >
      Best Sellers
    </h2>
  );
};
const SaleTitle = () => {
  return (
    <h2
      style={{ textAlign: "center", fontWeight: "600", lineHeight: "2.5rem" }}
    >
      Products on sale
    </h2>
  );
};


export default function ProductPage() {
  return (
    <>
      <TabsHead />
      <Page fullWidth title="Select a page to reccomend products" backAction={{id:"Home", content:"Home" , url:"/"}}>
        <HorizontalGrid gap="4" columns={3}>
          <div>
            <LegacyCard title={RelatedTitle()} sectioned>
              <p style={{ textAlign: "center", color:"var(--p-color-text-subdued)"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </LegacyCard>
            <LegacyCard title={RecentTitle()} sectioned>
              <p style={{ textAlign: "center", color:"var(--p-color-text-subdued)" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </LegacyCard>
            
          </div>
          <div>
            <LegacyCard title={FrequentTitle()} sectioned>
              <p style={{ textAlign: "center", color:"var(--p-color-text-subdued)" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doP
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </LegacyCard>
            <LegacyCard title={ArrivalTitle()} sectioned>
              <p style={{ textAlign: "center" , color:"var(--p-color-text-subdued)"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </LegacyCard>
          </div>
          <div>
            <LegacyCard title={SellersTitle()} sectioned>
              <p style={{ textAlign: "center", color:"var(--p-color-text-subdued)" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </LegacyCard>
            <LegacyCard title={SaleTitle()} sectioned>
              <p style={{ textAlign: "center", color:"var(--p-color-text-subdued)"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </LegacyCard>
          </div>
        </HorizontalGrid>
      </Page>
    </>
  );
}
