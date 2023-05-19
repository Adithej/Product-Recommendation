import {
  Page,
  HorizontalGrid,
  LegacyCard,
  Box,
  ResourceList,
  ResourceItem,
  Text,
  Banner,
} from "@shopify/polaris";

import TabsHead from "../components/TabsHead";

import CardAction from "../components/CardAction";
import CustomCard from "../components/CustomCard";

export default function HomePage() {
  return (
    <Box as="div">
      <TabsHead />
      <Page title="Select a page to recommend products">
        <HorizontalGrid gap="6" columns={3}>
          <Box>
            <LegacyCard>
              <ResourceList
                resourceName={{ singular: "Product", plural: "Products" }}
                items={[
                  {
                    url: "/ProductPage",
                  },
                ]}
                renderItem={() => {
                  return (
                    <ResourceItem url="/ProductPage">
                      <div style={{ marginBottom:"var(--p-space-2)"}}>
                        <Text
                          variant="headingMd"
                          fontWeight="semibold"
                          as="h3"
                          alignment="center"
                        >
                          Product Page
                        </Text>
                      </div>
                      <Text
                        variant="bodySm"
                        fontWeight="regular"
                        as="h4"
                        alignment="center"
                        color="subdued"
                        breakWord
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </Text>
                    </ResourceItem>
                  );
                }}
              />
            </LegacyCard>
            <div style={{ marginBottom: "var(--p-space-6)" }}></div>
            <LegacyCard>
              <ResourceList
                resourceName={{ singular: "Product", plural: "Products" }}
                items={[
                  {
                    url: "/ProductPage",
                  },
                ]}
                renderItem={() => {
                  return (
                    <ResourceItem url="/CartPage">
                      <div style={{ marginBottom:"var(--p-space-2)"}}>
                        <Text
                          variant="headingMd"
                          fontWeight="semibold"
                          as="h3"
                          alignment="center"
                        >
                          Cart Page
                        </Text>
                      </div>
                      <Text
                        variant="bodySm"
                        fontWeight="regular"
                        as="h4"
                        alignment="center"
                        color="subdued"
                        breakWord
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </Text>
                    </ResourceItem>
                  );
                }}
              />
            </LegacyCard>
          </Box>
          <Box>
            <LegacyCard>
              <ResourceList
                resourceName={{ singular: "Product", plural: "Products" }}
                items={[
                  {
                    url: "/ProductPage",
                  },
                ]}
                renderItem={() => {
                  return (
                    <ResourceItem url="/CollectionsPage">
                      <div style={{ marginBottom:"var(--p-space-2)"}}>
                        <Text
                          variant="headingMd"
                          fontWeight="semibold"
                          as="h3"
                          alignment="center"
                        >
                          Collections Page
                        </Text>
                      </div>
                      <Text
                        variant="bodySm"
                        fontWeight="regular"
                        as="h4"
                        alignment="center"
                        color="subdued"
                        breakWord
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </Text>
                    </ResourceItem>
                  );
                }}
              />
            </LegacyCard>
            <div style={{ marginBottom: "var(--p-space-6)" }}></div>
            <LegacyCard>
              <ResourceList
                resourceName={{ singular: "Product", plural: "Products" }}
                items={[
                  {
                    url: "/ProductPage",
                  },
                ]}
                renderItem={() => {
                  return (
                    <ResourceItem url="/CheckoutPage">
                      <div style={{ marginBottom:"var(--p-space-2)"}}>
                        <Text
                          variant="headingMd"
                          fontWeight="semibold"
                          as="h3"
                          alignment="center"
                        >
                          Checkout Page
                        </Text>
                      </div>
                      <Text
                        variant="bodySm"
                        fontWeight="regular"
                        as="h4"
                        alignment="center"
                        color="subdued"
                        breakWord
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </Text>
                    </ResourceItem>
                  );
                }}
              />
            </LegacyCard>
          </Box>
          <Box>
            <LegacyCard>
              <ResourceList
                resourceName={{ singular: "Product", plural: "Products" }}
                items={[
                  {
                    url: "/ProductPage",
                  },
                ]}
                renderItem={() => {
                  return (
                    <ResourceItem url="/ShopPage">
                      <div style={{ marginBottom:"var(--p-space-2)"}}>
                        <Text
                          variant="headingMd"
                          fontWeight="semibold"
                          as="h3"
                          alignment="center"
                        >
                          Shop Page
                        </Text>
                      </div>
                      <Text
                        variant="bodySm"
                        fontWeight="regular"
                        as="h4"
                        alignment="center"
                        color="subdued"
                        breakWord
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </Text>
                    </ResourceItem>
                  );
                }}
              />
            </LegacyCard>
            <div style={{ marginBottom: "var(--p-space-6)" }}></div>
            <LegacyCard>
              <ResourceList
                resourceName={{ singular: "Product", plural: "Products" }}
                items={[
                  {
                    url: "/ProductPage",
                  },
                ]}
                renderItem={() => {
                  return (
                    <ResourceItem url="/CheckoutPage">
                      <div style={{ marginBottom:"var(--p-space-2)"}}>
                        <Text
                          variant="headingMd"
                          fontWeight="semibold"
                          as="h3"
                          alignment="center"
                        >
                          Checkout Page
                        </Text>
                      </div>
                      <Text
                        variant="bodySm"
                        fontWeight="regular"
                        as="h4"
                        alignment="center"
                        color="subdued"
                        breakWord
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </Text>
                    </ResourceItem>
                  );
                }}
              />
            </LegacyCard>
          </Box>
        </HorizontalGrid>
      </Page>
      {/* <div style={{ marginTop: "var(--p-space-4)" }}>
        <Banner title="Order archived" onDismiss={() => {}} status="info">
          <p>This order was archived on March 7, 2017 at 3:12pm EDT.</p>
        </Banner>
      </div> */}
    </Box>
  );
}
