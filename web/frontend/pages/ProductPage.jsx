import {
  Page,
  HorizontalGrid,
  LegacyCard,
  Button,
  Link,
} from "@shopify/polaris";
import Header from "../components/Header";
import { TitleBar } from "@shopify/app-bridge-react";

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

function HomeLink() {
  return (
    <Link url="/" monochrome removeUnderline>
      Home
    </Link>
  );
}

function ProductLink() {
  return (
    <Link url="/ProductPage" monochrome removeUnderline>
      Product
    </Link>
  );
}

export default function ProductPage() {
  return (
    <>
      <Header />
      {/* backAction={{id:"Home", content:"Home" , url:"/"}} */}
      {/* <TitleBar
        title="Products"
        breadcrumbs={{url:"/", content:"Home"}}
      /> */}

      <div style={{ margin: "2rem", fontWeight: "500" }}>
        <HomeLink /> &ensp;
        <span>&gt;</span>
        &ensp;
        <ProductLink />
      </div>

      <Page
        fullWidth
        title="Choose a widget"
        backAction={{ id: "Home", content: "Home", url: "/" }}
      >
        <HorizontalGrid gap="4" columns={3}>
          <div>
            <div>
              <div style={{ margin: "1rem" }}>
                <Button plain monochrome removeUnderline url="/">
                  <LegacyCard title={RelatedTitle()} sectioned>
                    <p style={{ height: "8rem", textAlign: "center" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </LegacyCard>
                </Button>
              </div>
            </div>
            <div style={{ margin: "1rem" }}>
              <Button plain monochrome removeUnderline url="/">
                <LegacyCard title={RecentTitle()} sectioned>
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
              <Button plain monochrome removeUnderline url="/">
                <LegacyCard title={FrequentTitle()} sectioned>
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
              <Button plain monochrome removeUnderline url="/">
                <LegacyCard title={ArrivalTitle()} sectioned>
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
              <Button plain monochrome removeUnderline url="/">
                <LegacyCard title={SellersTitle()} sectioned>
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
              <Button plain monochrome removeUnderline url="/">
                <LegacyCard title={SaleTitle()} sectioned>
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
