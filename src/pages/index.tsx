import Head from 'next/head';
import Link from 'next/link';
import Icon from '@/components/Icon';
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
          <div className="content-header">
            <h1>
              Welcome to SONUS<sup>TM</sup>
            </h1>

            <p>
              Helping you uncover new opportunities from insight on doctors and pharmacists knowledge and behaviours.
            </p>

            <div>
              SONUS<sup>TM</sup> provides access to unprecedented data and insight captured from face-to-face interview
              of doctors and pharmacists in major disease diagnosis, treatment, and dispensing centres in the country.
            </div>
          </div>

          <div className="grid grid-cols-3 gap-x-8 gap-y-3">
            <h3 className="self-center text-[#674775]">Respondents interviewed</h3>
            <h3 className="self-center text-[#3B6E35]">HCP’s Speacilty</h3>
            <h3 className="self-center text-[#8F5200]">HCP’s Cadre</h3>

            <div className="dashboard-card flex items-start bg-[#8332AC4D]">
              <Icon className="w-10 h-10 mr-2 text-[#111111CC]">doctor</Icon>
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
            <h3 className="text-[#986D6D]">Facility Class</h3>
            <p>Government Teaching Hospitals, General Hospitals, Private Hospitals</p>
          </div>

          <div className="dashboard-card py-6 bg-[#C9BCBC]">
            <h3 className="text-[#5F7377]">Therapy Areas</h3>
            <div className="grid grid-cols-3 gap-4">
              {THERAPY_AREAS.map(({ to, icon, label }) => (
                <Link key={to} href={to} className="therapy">
                  <div>
                    <Icon>{icon}</Icon>
                  </div>
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-x-10 mb-32">
        <div className="col-span-2">
          <div className="grid grid-cols-3 gap-5">
            {REFERENCE_MAP.map(({ title }) => (
              <h3 key={title} className="self-center">
                {title}
              </h3>
            ))}

            {REFERENCE_MAP.map(({ title, icon, description }) => (
              <div key={title} className="reference">
                <div>
                  <Icon>{icon}</Icon>
                </div>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-end">
          <Link href="/support" className="support">
            <Icon className="mr-4">support</Icon>
            <span className="mr-20">Support</span>
            <Icon>right</Icon>
          </Link>
        </div>
      </div>
    </>
  );
}
