import Head from "next/head";
import Link from "next/link";

const EmailSignup = () => {
  const title = "obi Mailing List";
  return (
    <>
      <Head>
        <title>obi Mailing List</title>
        <meta property="og:title" content="obi mailing list" key={title} />
      </Head>
      <main>
        <div className=" text-center flex justify-center  ">
          <Link
            href={"https://untd.io/m/645d7fde508667570a08371e"}
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
            <button className="bg-white rounded-lg p-2 font-semibold mr-2 border-black border text-black">
              See obi live 🕺🏾
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default EmailSignup;
