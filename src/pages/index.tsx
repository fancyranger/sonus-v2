import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { THERAPY_AREAS, REFERENCE_MAP } from '@/utils/constants';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>SONUS</title>
      </Head>

      <h3 className="mb-7">Hi Mr. Ayodeji Alaran!</h3>

      <div className="grid grid-cols-3 gap-x-10 mb-28">
        <div className="col-span-2">
          <div className="content-header mb-7">
            <h1 className="mb-4">
              Welcome to SONUS<sup>TM</sup>
            </h1>

            <p className="mb-0.5">
              Helping you uncover new opportunities from insight on doctors and pharmacists knowledge and behaviours.
            </p>

            <div>
              SONUS<sup>TM</sup> provides access to unprecedented data and insight captured from face-to-face interview
              of doctors and pharmacists in major disease diagnosis, treatment, and dispensing centres in the country.
            </div>
          </div>

          <div className="grid grid-cols-3 gap-x-5 gap-y-3">
            <h3 className="self-center text-[#674775]">Respondents interviewed</h3>
            <h3 className="self-center text-[#3B6E35]">HCP’s Speacilty</h3>
            <h3 className="self-center text-[#8F5200]">HCP’s Cadre</h3>

            <div className="dashboard-card flex items-start py-2 bg-[#8332AC4D]">
              <Image className="mr-2" src="/respondent.svg" alt="respondent" width="40" height="40" />
              <div className="flex flex-col">
                <span className="font-bold text-[#111111CC] leading-[18px]">2,051</span>
                <span>Doctors</span>
              </div>
            </div>
            <div className="dashboard-card py-2 bg-[#5FAD564D]">
              <p>
                GPs, Cardiologists, Nephrologists, Endocrinologists, Family Medicine, Neurology, Oncologists, O&G,
                General Surgery
              </p>
            </div>
            <div className="dashboard-card py-2 bg-[#FF95054D]">
              <p>
                Consultants, Senior Registrars, Junior Registrars, General Practitioners, Community Pharmacists,
                Hospital Pharmacists
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="dashboard-card mb-16 bg-[#E7DDDD]">
            <h3 className="mb-4 text-[#986D6D]">Facility Class</h3>
            <p>Government Teaching Hospitals, General Hospitals, Private Hospitals</p>
          </div>

          <div className="dashboard-card py-6 bg-[#C9BCBC]">
            <h3 className="mb-4 text-[#5F7377]">Therapy Areas</h3>
            <div className="grid grid-cols-3 gap-6">
              {THERAPY_AREAS.map((item) => (
                <Link
                  key={item.to}
                  href={item.to}
                  className="flex flex-col items-center w-[70px] h-[70px] p-0 bg-[#E3E4E5] text-cyan-blue-dark font-normal rounded-[10px]"
                >
                  <figure className="shrink-0 flex items-center justify-center w-7 h-7 mt-4 bg-[#C7C7C7] rounded-md">
                    <Image src={item.icon} alt={item.label} width="18" height="18" />
                  </figure>
                  <span className="text-[10px] leading-6 text-center">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-x-10 mb-32">
        <div className="col-span-2">
          <div className="grid grid-cols-3 gap-5">
            {REFERENCE_MAP.map((item) => (
              <h3 key={item.title} className="self-center">
                {item.title}
              </h3>
            ))}

            {REFERENCE_MAP.map((item) => (
              <div key={item.title} className="flex">
                <figure className="shrink-0 flex items-center justify-center w-[70px] h-[70px] mr-3 bg-white rounded-[10px]">
                  <Image src={item.icon} alt={item.title} width="64" height="64" />
                </figure>
                <p className="text-black text-sm leading-6">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-end">
          <Link href="/support" className="flex items-center px-5 py-4 bg-[#0D8BA6]">
            <Image className="mr-4" src="/support.svg" alt="support" width="24" height="24" />
            <span className="mr-20 leading-[18px]">Support</span>
            <Image src="/right.svg" alt="right" width="6" height="10" />
          </Link>
        </div>
      </div>
    </>
  );
}
