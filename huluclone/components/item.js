import Image from "next/image";
import { HiOutlineThumbUp, HiOutlineCollection } from "react-icons/hi";


function Item({ title, description, imageLink, key, release,likes,media}){
    const LINK = 'https://image.tmdb.org/t/p/original';
    return (
        <div className={'cursor-pointer'}>
            <Image key={key} src={`${LINK}${imageLink}`} layout={"responsive"} height={1100} width={1800} alt={''}/>
            <div className={'p-3'}>
                <p className={'truncate ... hidden'}>{description}</p>
                <div className={'flex justify-between'}>
                    <div>
                        <p className={'font-bold text-xl'}>{title}</p>
                        <p>{release}</p>
                    </div>
                    <div className={'flex flex-col space-y-2.5'}>
                        <div className={'flex space-x-2.5'}>
                            <HiOutlineThumbUp fontSize={22}/>
                            <span>{likes}</span>
                        </div>
                        <div className={'flex space-x-2.5'}>
                            <HiOutlineCollection fontSize={22} />
                            <p>{media}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Item;