import Companies from '@/components/companies/Companies';
import DressStyles from '@/components/dressStyles/DressStyles';
import Hero from '@/components/hero/Hero';
import NewArrivals from '@/components/newArrivals/NewArrivals';
import Testimonials from '@/components/testimonials/Testimonials';
import { memo } from 'react';

const Home = async() => {
  const response = await fetch("https://api.errorchi.uz/product?limit=4", {next: {revalidate: 60}})
  const data = await response.json()
  
  

  return (
    <div className="mx-auto">
      <Hero />
      <Companies />
      <NewArrivals data={data?.data?.allProducts} text={'NEW ARRIVALS'}/>
      <hr className='!container !h-[1px] !text-[#000]/[0.1] !mb-[64px] mx-auto'/>
      <NewArrivals data={data?.data?.allProducts} text={'TOP SELLING'}/>
      <DressStyles />
      <Testimonials text={true}/>
      {/* <ProductView data={data?.data?.allProducts}/> */}
      {/* <Testimonials/>
      <Service/> */}
    </div>
  );
};

export default memo(Home);