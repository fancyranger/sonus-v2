import Head from 'next/head';

export default function () {
  return (
    <>
      <Head>
        <title>SONUS Pharmacist Insight</title>
      </Head>

      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <div className="content-header mb-7">
            <h1 className="mb-7">Pharmacist Insight - Diabetes Dynamics - Prescription Dynamics (Insulin)</h1>

            <div>
              This analysis provides insight on number of patients encountered, newly diagnosed patients, number of
              patients encountered, newly diagnosed patients, and patients with uncontrolled type 1 and 2 diabetes
              respectively.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
