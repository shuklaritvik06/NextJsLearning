import {useRouter} from "next/router";
import requests from "../data/data";
function OptionsComp() {

    const router = useRouter();
    return(
        <div className={'relative'}>
            <div className={'flex px-14 sm:px-20 space-x-8 lg:space-x-40 overflow-scroll whitespace-nowrap scrollbar-hide mt-5'}>
                {
                    Object.entries(requests).map(([key,{ title,Url}])=> <h2 key={key} onClick={()=>{router.push(`/?genre=${key}`).then(r => console.log('Success!'))}} className={'cursor-pointer  last:pr-12 hover:scale-125'}>{title}</h2>)
                }
            </div>
            <div className={'absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12'} />
        </div>
    )
}
export default OptionsComp;