import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CardFile from '../CardFile/CardFile';


const CategoryTab = () => {
  const data = useLoaderData();
  
  console.log(data);
  const filter1 = data?.filter((p) => p.category.includes("Web"));
  const filter2 = data?.filter((p) => p.category.includes("Digital"));
  const filter3 = data?.filter((p) => p.category.includes("Graphics"));
  console.log(filter1, filter2, filter3);
    return (
        <div className='max-w-7xl mx-auto mt-6'>
        <Tabs>
    <TabList className='text-center '>
      <Tab>Web development</Tab>
      <Tab>Digital Marketing</Tab>
      <Tab>Graphics Design</Tab>
    </TabList>
    <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-5 mx-auto p-5">
            {filter1.map((cart) => (
              <CardFile cart={cart} key={cart.id} />
            ))}
          </div>
    </TabPanel>
    <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-auto p-5">
            {filter2.map((cart) => (
              <CardFile cart={cart} key={cart.id} />
            ))}
          </div>
    </TabPanel>
    <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-auto p-5">
            {filter3.map((cart) => (
              <CardFile cart={cart} key={cart.id} />
            ))}
          </div>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default CategoryTab;