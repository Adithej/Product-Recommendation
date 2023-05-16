import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
  Button,
  AlphaCard,
  HorizontalGrid,
  HorizontalStack,
  LegacyCard
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";


export default function HomePage() {
  return (
    <>
    <LegacyCard >
        <div style={{backgroundColor: "var(--p-border-depressed)", display:"flex", height:"3.5rem", alignItems:"center"}}>
          <div style={{padding:"5px", color:"white"}}><Link removeUnderline monochrome>Home</Link></div>
          <div style={{padding:"5px", color:"white"}}><Link removeUnderline monochrome>Widget setup</Link></div>
          <div style={{padding:"5px", color:"white"}}><Link removeUnderline monochrome>Manual recommondation</Link></div>
          <div style={{padding:"5px", color:"white"}}><Link removeUnderline monochrome>My widgets</Link></div>
          <div style={{padding:"5px", color:"white"}}><Link removeUnderline monochrome>Analytics</Link></div>
        </div>
      </LegacyCard>
    <Page fullWidth
      title="Select a page to reccomend products"  
    >
      <HorizontalGrid gap="4" columns={3}>
        <div>
        <LegacyCard title="Credit card" sectioned>
          <p style={{height:"4rem"}}>Credit card information</p>
        </LegacyCard>
        <LegacyCard title="Credit card" sectioned >
          <p style={{height:"5rem"}}>Credit card information</p>
        </LegacyCard> 
        </div>
        <div>
        <LegacyCard title="Credit card" sectioned>
          <p style={{height:"4rem"}}>Credit card information</p>
        </LegacyCard>
        <LegacyCard title="Credit card" sectioned >
          <p style={{height:"5rem"}}>Credit card information</p>
        </LegacyCard>
        </div>
        <div>
        <LegacyCard title="Credit card" sectioned>
          <p style={{height:"4rem"}}>Credit card information</p>
        </LegacyCard>
        <LegacyCard title="Credit card" sectioned >
          <p style={{height:"5rem"}}>Credit card information</p>
        </LegacyCard> 
        </div>
      </HorizontalGrid>
    </Page>
    </>
  );
}
