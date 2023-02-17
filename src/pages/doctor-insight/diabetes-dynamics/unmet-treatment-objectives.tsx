import Head from 'next/head';

export default function () {
  return (
    <>
      <Head>
        <title>SONUS Doctor Insight</title>
      </Head>

      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <div className="content-header mb-7">
            <h1 className="mb-7">Doctor Insight - Diabetes Dynamics - Unmet Treatment Objectives</h1>

            <div>
              This analysis provides insight on unmet treatment objectives for patients with type 1 and type 2 diabetes
              as treated with oral antidiabetics and insulins.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
