import React from 'react'
import {
    Link,
    LegacyCard,
  } from "@shopify/polaris";

function Header() {
  return (
    <div>
      <LegacyCard>
        <div
          style={{
            backgroundColor: "var(--p-border-depressed)",
            display: "flex",
            height: "3.5rem",
            alignItems: "center",
          }}
        >
          <div style={{ padding: "5px", color: "white" }}>
            <Link monochrome removeUnderline url='/'>
              Home
            </Link>
          </div>
          <div style={{ padding: "5px", color: "white" }}>
            <Link removeUnderline monochrome>
              Widget setup
            </Link>
          </div>
          <div style={{ padding: "5px", color: "white" }}>
            <Link removeUnderline monochrome>
              Manual recommondation
            </Link>
          </div>
          <div style={{ padding: "5px", color: "white" }}>
            <Link removeUnderline monochrome>
              My widgets
            </Link>
          </div>
          <div style={{ padding: "5px", color: "white" }}>
            <Link removeUnderline monochrome>
              Analytics
            </Link>
          </div>
        </div>
      </LegacyCard>
    </div>
  )
}

export default Header
