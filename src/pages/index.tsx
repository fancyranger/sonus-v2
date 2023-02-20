import Head from 'next/head';
import Image from 'next/image';
import { THERAPY_AREAS } from '@/utils/constants';

export default function Home() {
  return (
    <>
      <Head>
        <title>SONUS</title>
      </Head>

      <p className="mb-7 text-primary font-bold">Hi Mr. Ayodeji Alaran!</p>

      <div className="grid grid-cols-3 gap-x-10">
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

          <div className="grid grid-cols-3 gap-x-8 gap-y-3 mb-7">
            <h3 className="self-center text-[#674775]">Respondents interviewed</h3>
            <h3 className="self-center text-[#674775]">HCP’s Speacilty</h3>
            <h3 className="self-center text-[#674775]">HCP’s Cadre</h3>

            <div className="flex items-start py-2 px-4 bg-[#8332AC4D] text-xs rounded-lg">
              <Image className="mr-2" src="/respondent.svg" alt="respondent" width="40" height="40" />
              <div className="flex flex-col">
                <span className="font-bold text-[#111111CC] leading-[#18px]">2,051</span>
                <span>Doctors</span>
              </div>
            </div>
            <div className="py-2 px-4 bg-[#5FAD564D] text-xs rounded-lg">
              GPs, Cardiologists, Nephrologists, Endocrinologists, Family Medicine, Neurology, Oncologists, O&G, General
              Surgery
            </div>
            <div className="py-2 px-4 bg-[#FF95054D] text-xs rounded-lg">
              Consultants, Senior Registrars, Junior Registrars, General Practitioners, Community Pharmacists, Hospital
              Pharmacists
            </div>
          </div>

          <div className="flex flex-col mb-7">
            <h3 className="mb-3 text-[#036D66]">Distribution of Respondents</h3>

            <div className="px-5 py-8 bg-[#CBEEF34D] text-xs">
              In a highly competitive market in which companies are looking for the next lever for growth, SONUS ™ offer
              unprecedented insight for brand repositioning, performance assessment, new product opportunity, assessment
              of marketing impact, and field force effectiveness.
              <br />
              <br />
              SONUS™ survey is conducted annually first syndicated research completed November 2021.
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5 mb-32">
            <h3 className="self-center text-primary">Digital Preference</h3>
            <h3 className="self-center text-primary">Salesforce Assessment</h3>
            <h3 className="self-center text-primary">Ranking: Most Engaging Companies</h3>

            <div className="flex">
              <div className="shrink-0 w-16 h-16 mr-3 bg-white rounded-lg"></div>
              <p className="text-black text-sm leading-6">Preferred channel of engagement by companies</p>
            </div>
            <div className="flex">
              <div className="shrink-0 w-16 h-16 mr-3 bg-white rounded-lg"></div>
              <p className="text-black text-sm leading-6">
                Ranking of companies by value added by sales representatives
              </p>
            </div>
            <div className="flex">
              <div className="shrink-0 w-16 h-16 mr-3 bg-white rounded-lg"></div>
              <p className="text-black text-sm leading-6">
                Respondents&apos; ranking of companies by value of scientific and pharmacy engagement
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <div className="py-6 px-5 mb-16 bg-[#E7DDDD4D] rounded-lg">
            <h3 className="mb-4 text-[#986D6D]">Facility Class</h3>
            <p className="text-xs">Government Teaching Hospitals, General Hospitals, Private Hospitals</p>
          </div>

          <div className="py-6 px-5 mb-32 bg-[#C9BCBC4D] rounded-lg">
            <h3 className="mb-4 text-[#5F7377]">Therapy Areas</h3>
            <div className="grid grid-cols-3 gap-7">
              {THERAPY_AREAS.map((item) => (
                <div
                  key={item}
                  className="flex flex-col items-center justify-center w-[70px] h-[70px] bg-[#E3E4E5] rounded-lg"
                >
                  <div className="shrink-0 w-7 h-7 bg-[#C7C7C7] rounded-md"></div>
                  <span className="text-[10px] leading-6 text-center">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <a href="/support" className="flex items-center py-4 bg-[#0D8BA6]">
            <Image src="/support.svg" className="mr-4" alt="support" width="24" height="24" />
            <span className="mr-20 leading-[18px]">Support</span>
            <Image src="/right.svg" alt="right" width="6" height="10" />
          </a>
        </div>
      </div>
    </>
  );
}
