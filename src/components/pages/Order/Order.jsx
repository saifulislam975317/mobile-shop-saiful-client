import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useProducts from "../../../hooks/useProducts";
import OrderTab from "./OrderTab/OrderTab";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [products] = useProducts();
  const iphone = products.filter((product) => product.category === "iPhone");
  const realme = products.filter((product) => product.category === "realme");
  const vivo = products.filter((product) => product.category === "vivo");
  const oppo = products.filter((product) => product.category === "oppo");
  const samsung = products.filter((product) => product.category === "samsung");
  console.log(products);
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
        <TabPanel>
          <OrderTab items={iphone}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={samsung}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={realme}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={vivo}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={oppo}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
