import { fetchPricingData } from "../lib/loaders";
import Pricing from "../ui/Pricing";
import { useLoaderData } from "react-router-dom";

export async function loader(){
  let pricingData = await fetchPricingData();
  return pricingData;
}

export default function Buy() {
    const data = useLoaderData();
    return (
      <>
        <section>
          <Pricing {...data}/>
        </section>
      </>
    );
  }