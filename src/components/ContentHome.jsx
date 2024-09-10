import { Services } from "./Service";

export function Content(){
    return (
        <div>
            <div className=" grid grid-cols-1 sm:grid-cols-2 p-12">
                <div className="flex-col m-auto  ">
                    <div className="bg-transparent pb-2   rounded  text-xl font-semibold transition-transform duration-300 transform hover:scale-105 hover:translate-y-1 sm:pb-0">
                        {"किसान है धरती की शान, उनके हाथों में देश की जान।"}
                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    <img src="/images/FARMER.jpg" className="rounded-full"alt="" />
                </div>
                
            </div>
            
    </div>
    )
}