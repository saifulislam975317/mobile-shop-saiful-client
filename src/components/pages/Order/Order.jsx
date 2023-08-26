import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <h1 className="text-center text-bold text-3xl">Order Online</h1>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>iPhone</Tab>
          <Tab>Samsung</Tab>
          <Tab>Realme</Tab>
          <Tab>Vivo</Tab>
          <Tab>Oppo</Tab>
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
