import Head from 'next/head';

export default function () {
  return (
    <>
      <Head>
        <title>SONUS Doctor Insight</title>
      </Head>

      <h1 className="mb-7">Doctor Insight - Diabetes Dynamics - Unmet Treatment Objectives</h1>

      <div className="grid grid-cols-3 mb-10">
        <div className="col-span-2 px-4 py-3 bg-white rounded-lg">
          <p>
            This analysis provides insight on unmet treatment objectives for patients with type 1 and type 2 diabetes as
            treated with oral antidiabetics and insulins.
          </p>
        </div>
      </div>
    </>
  );
}
