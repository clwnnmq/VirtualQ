import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">Price</h2>
        <div className="flex flex-wrap ">
            {pricingOptions.map((option, index) => (
                <div className="w-full sm:w-1/2 lg:w-1/3 p-2" key={index}>
                    <div className="p-10 border border-blue-700 rounded-xl">
                        <p className="text-4xl mb-8">
                            {option.title}
                            {option.title === "Pro" && ( <span className="bg-gradient-to-r from-blue-500 to-purple-400 text-transparent bg-clip-text text-xl mb-4">(Most popular)</span> )}    
                        </p>
                        <p className="mb-8">
                            <span className="text-5xl">{option.price}</span>
                            <span className="text-neutral-500">/Moth</span>
                        </p>
                        <ul>
                            {option.features.map((feature, index) => (
                                <li key={index} className="mt-8 flex items-center">
                                    <CheckCircle2 />
                                    <span className="ml-2">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#" className="inline-flex justify-center items-center text-cneter w-full h-12 p-5 mt-20 tracking-tight hover:bg-purple-600 border border-blue-900 rounded-lg transition duration-200">Subscribe</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing