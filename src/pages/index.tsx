import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>SONUS</title>
      </Head>

      <p className="mb-7 text-primary font-bold">Hi Mr. Ayodeji Alaran!</p>

      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <div className="content-header mb-7">
            <h1 className="mb-7">
              Welcome to SONUS<sup>TM</sup>
            </h1>

            <p className="mb-7">
              Helping you uncover new opportunities from insight on doctors and pharmacists knowledge and behaviours.
            </p>

            <div>
              SONUS<sup>TM</sup> provides access to unprecedented data and insight captured from face-to-face interview
              of doctors and pharmacists in major disease diagnosis, treatment, and dispensing centres in the country.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
