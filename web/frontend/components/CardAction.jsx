import {
  LegacyCard,
  ResourceList,
  ResourceItem,
  Text,
  Box,
} from "@shopify/polaris";
import React from "react";

export default function CardAction() {
  return (
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
              <div style={{ padding: "var(--p-space-4" }}>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Text>
            </ResourceItem>
          );
        }}
      />
    </LegacyCard>
  );
}
