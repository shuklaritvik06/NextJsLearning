import Item from "./item";

function Content({ result }){
    return (
        <div className={'mt-12 px-3 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-3 xxl:flex xxl:flex-wrap xxl:justify-center'}>
            {
                Object.entries(result.results).map(([key, {id,title,overview,poster_path,release_date,vote_count,media_type}])=> <Item key={id} title={title} imageLink={poster_path} description={overview} release={release_date} likes={vote_count} media={media_type}/>)
            }
        </div>
    )

}

export default Content;