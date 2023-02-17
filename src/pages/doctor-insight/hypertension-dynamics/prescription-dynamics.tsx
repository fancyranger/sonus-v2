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
            <h1 className="mb-7">Doctor Insight - Hypertension Dynamics - Prescription Dynamics</h1>

            <div>
              This analysis provides insight on Oral Antidiabetics and Insulin class preference for uncontrolled
              diabetes, molecule preference, choice of brands and generics, reported outcomes, FBG or HBA1c control,
              brand selection criteria, population on insulin and oral antidiabetics.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
