import Head from 'next/head';
import Link from 'next/link';

export default function () {
  return (
    <>
      <Head>
        <title>SONUS Doctor Insight</title>
      </Head>

      <h1 className="mb-7">Doctor Insight - Diabetes Dynamics - Brand Preference and Brand Recall</h1>

      <div className="grid grid-cols-3 mb-10">
        <div className="col-span-2 px-4 py-3 bg-white rounded-lg">
          <p>
            This analysis provides insight on brand top-of-mind audit and brand preference for both oral antidiabetics
            and insulins for treatment of type 2 and type 1 diabetes respectively.
          </p>
        </div>
      </div>
    </>
  );
}
