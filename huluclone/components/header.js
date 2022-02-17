import Image from "next/image";
import NavItems from "./navItems";
import {
    HiOutlineHome,
    HiOutlineBadgeCheck,
    HiOutlineCollection,
    HiOutlineLightningBolt,
    HiOutlineSearch,
    HiOutlineUser
} from "react-icons/hi";

function Navbar() {
    return (
            <header className={'flex flex-col sm:flex-row items-center sm:justify-between'}>
                <div className={'flex flex-grow justify-evenly max-w-3xl mt-6'}>
                    <NavItems title={'HOME'} Icon={HiOutlineHome} />
                    <NavItems title={'TRENDING'} Icon={HiOutlineLightningBolt} />
                    <NavItems title={'VERIFIED'} Icon={HiOutlineBadgeCheck} />
                    <NavItems title={'COLLECTION'} Icon={HiOutlineCollection} />
                    <NavItems title={'SEARCH'} Icon={HiOutlineSearch} />
                    <NavItems title={'Account'} Icon={HiOutlineUser} />
                </div>
                <Image
                    className={'object-contain'}
                    src={'https://links.papareact.com/ua6'}
                    width={200}
                    height={100}
                    alt={''}
                />
            </header>
    )
}
export default Navbar;