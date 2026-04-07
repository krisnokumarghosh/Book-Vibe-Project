import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from "../../components/ListedItems/ListedReadList";
import ListedWishlist from "../../components/ListedItems/ListedWishlist";


const ListedBooks = () => {
  

  return (
    <div className="container mx-auto mt-20">
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
         <ListedReadList/>
        </TabPanel>
        <TabPanel>
         <ListedWishlist/>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
