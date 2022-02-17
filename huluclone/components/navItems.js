function NavItems({ title, Icon}) {
    return (
      <div className={'group flex flex-col items-center w-14 hover:text-white cursor-pointer'}>
          <Icon className={'mb-1.5 group-hover:animate-bounce'} fontSize={28}/>
          <p className={'opacity-0 group-hover:opacity-100'}>{title}</p>
      </div>
    );
}
export default NavItems;