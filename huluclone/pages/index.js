import Head from 'next/head'
import Navbar from "../components/header";
import OptionsComp from "../components/options";
import requests from "../data/data";
import Content from "../components/content";

export default function Home(props) {
    return (
        <div className={'bg-hulu'}>
       <Head>
        <title>Hulu Clone | Ritvik Shukla</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Hulu Clone" />
        <meta property="og:description" content="This is a hulu clone built by me while learning NextJs" />
        <meta property="og:image" content="" />
       </Head>
        <Navbar />
       <OptionsComp />
       <Content result={props} />
</div>
    );
}

export async function getServerSideProps(context) {
    const genre= context.query.genre;
    const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.Url || requests.trending.Url}`).then((res)=>res.json());
    return {
        props: request
    }
}

