import {
  Page,
  Button,
  HorizontalGrid,
  LegacyCard,
} from "@shopify/polaris";

import Header from "../components/Header";

import { TitleBar } from "@shopify/app-bridge-react";


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
    <>
      <Header />
      <Page fullWidth title="Select a page to reccomend products">
        <HorizontalGrid gap="4" columns={3}>
          <div>
            <div style={{ margin: "1rem" }}>
              {/* <Button plain monochrome removeUnderline url="/ProductPage"> */}
                <LegacyCard title={ProductTitle()} sectioned>
                  <p style={{ height: "8rem", textAlign: "center" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </LegacyCard>
              {/* </Button> */}
            </div>
            <div style={{ margin: "1rem" }}>
              <Button plain monochrome removeUnderline url="/CartPage">
                <LegacyCard title={CartTitle()} sectioned>
                  <p style={{ height: "8rem", textAlign: "center" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </LegacyCard>
              </Button>
            </div>
          </div>
          <div>
            <div style={{ margin: "1rem" }}>
              <Button plain monochrome removeUnderline url="/CollectionsPage">
                <LegacyCard title={CollectionTitle()} sectioned>
                  <p style={{ height: "8rem", textAlign: "center" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    doP eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </LegacyCard>
              </Button>
            </div>
            <div style={{ margin: "1rem" }}>
              <Button plain monochrome removeUnderline url="/CheckoutPage">
                <LegacyCard title={CheckoutTitle()} sectioned>
                  <p style={{ height: "8rem", textAlign: "center" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </LegacyCard>
              </Button>
            </div>
          </div>
          <div>
            <div style={{ margin: "1rem" }}>
              <Button plain monochrome removeUnderline url="/ShopPage">
                <LegacyCard title={ShopTitle()} sectioned>
                  <p style={{ height: "8rem", textAlign: "center" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </LegacyCard>
              </Button>
            </div>
            <div style={{ margin: "1rem" }}>
              <Button plain monochrome removeUnderline url="/CheckoutPage">
                <LegacyCard title={CheckoutTitle()} sectioned>
                  <p style={{ height: "8rem", textAlign: "center" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </LegacyCard>
              </Button>
            </div>
          </div>
        </HorizontalGrid>
      </Page>
    </>
  );
}
