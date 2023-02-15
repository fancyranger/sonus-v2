import Head from 'next/head';
import Link from 'next/link';

export default function () {
  return (
    <>
      <Head>
        <title>SONUS Doctor Insight</title>
      </Head>

      <h1 className="mb-7">Doctor Insight - Digital Preference Analysis</h1>

      <div className="grid grid-cols-3 mb-10">
        <div className="col-span-2 px-4 py-3 bg-white rounded-lg">
          <p>
            This analysis provides insight on number of patients encountered, newly diagnosed patients, number of
            patients encountered, newly diagnosed patients, and patients with uncontrolled type 1 and 2 diabetes
            respectively.
          </p>
        </div>
      </div>
    </>
  );
}
