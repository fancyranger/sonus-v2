import Head from 'next/head';
import Link from 'next/link';

export default function () {
  return (
    <>
      <Head>
        <title>SONUS Doctor Insight</title>
      </Head>

      <h1 className="mb-7">Doctor Insight - Diabetes Dynamics - Prescription Dynamics</h1>

      <div className="grid grid-cols-3 mb-10">
        <div className="col-span-2 px-4 py-3 bg-white rounded-lg">
          <p>
            This analysis provides insight on Oral Antidiabetics and Insulin class preference for uncontrolled diabetes,
            molecule preference, choice of brands and generics, reported outcomes, FBG or HBA1c control, brand selection
            criteria, population on insulin and oral antidiabetics
          </p>
        </div>
      </div>
    </>
  );
}
