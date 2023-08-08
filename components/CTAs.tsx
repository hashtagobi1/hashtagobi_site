import Head from "next/head";
import Link from "next/link";

const CTAs = () => {
  const title = "Most Entertaining Rapper";
  return (
    <>
      <Head>
        <title>Most Entertaining Rapper</title>
        <meta
          property="og:title"
          content="Most Entertaining Rapper"
          key={title}
        />
      </Head>
      <main>
        <div className=" text-center flex justify-center  ">
          <Link
            href={
              "https://www.gotobeat.com/gig/thursday-10-august-t-o-n-i-live-in-peckham/"
            }
            className="cursor-pointer"
            passHref
          >
            <button className="bg-gray-700 rounded-lg p-2 font-semibold mr-2 text-white">
              Latest Single
            </button>
          </Link>
          <Link
            href={"https://untd.io/m/645d7fde508667570a08371e"}
            className="cursor-pointer"
            passHref
          >
            <button className="bg-white  rounded-lg p-2 font-semibold mr-2 border-black border text-black">
              See obi live 🕺🏾
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default CTAs;
