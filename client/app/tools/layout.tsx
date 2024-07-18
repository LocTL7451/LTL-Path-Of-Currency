import AnimatedHorizontalPage from "../components/horizontal.page.component";
import React from "react";
export const metadata = {
  title: "OGKA - Tools",
  description: "Tools",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AnimatedHorizontalPage>
      <main>{children}</main>
    </AnimatedHorizontalPage>
  );
}

export default Layout;
