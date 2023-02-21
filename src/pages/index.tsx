import Head from 'next/head';
import Image from 'next/image';
import { THERAPY_AREAS, REFERENCE_MAP } from '@/utils/constants';

export default function Home() {
  return (
    <>
      <Head>
        <title>SONUS</title>
      </Head>

      <p className="mb-7 text-primary font-bold">Hi Mr. Ayodeji Alaran!</p>

      <div className="grid grid-cols-3 gap-x-10 mb-28">
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
        </div>

        <div className="flex flex-col">
          <div className="py-6 px-5 mb-16 bg-[#E7DDDD4D] rounded-lg">
            <h3 className="mb-4 text-[#986D6D]">Facility Class</h3>
            <p className="text-xs">Government Teaching Hospitals, General Hospitals, Private Hospitals</p>
          </div>

          <div className="py-6 px-5 bg-[#C9BCBC4D] rounded-lg">
            <h3 className="mb-4 text-[#5F7377]">Therapy Areas</h3>
            <div className="grid grid-cols-3 gap-7">
              {THERAPY_AREAS.map((item) => (
                <div
                  key={item.to}
                  className="flex flex-col items-center justify-center w-[70px] h-[70px] bg-[#E3E4E5] rounded-lg"
                >
                  <div className="shrink-0 flex items-center justify-center w-7 h-7 bg-[#C7C7C7] rounded-md">
                    <Image src={item.icon} alt={item.label} width="18" height="18" />
                  </div>
                  <span className="text-[10px] leading-6 text-center">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-x-10">
        <div className="col-span-2">
          <div className="grid grid-cols-3 gap-5 mb-32">
            {REFERENCE_MAP.map((item) => (
              <h3 key={item.title} className="self-center text-primary">
                {item.title}
              </h3>
            ))}

            {REFERENCE_MAP.map((item) => (
              <div key={item.title} className="flex">
                <div className="shrink-0 w-16 h-16 mr-3 bg-white rounded-lg">
                  <Image src={item.icon} alt={item.title} width="64" height="64" />
                </div>
                <p className="text-black text-sm leading-6">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-end">
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
