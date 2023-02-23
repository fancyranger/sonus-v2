import Head from 'next/head';
import Link from 'next/link';
import ContentHeader from '@/components/ContentHeader';
import { APP_DATA } from '@/helpers/constants';
import { joinTitle } from '@/helpers/utils';

export default function () {
  const {
    data: {
      oncology: {
        data: {
          doctor: {
            to,
            header: { title: leftTitle },
            data: {
              'barriers-to-treatment': { title: rightTitle, description },
            },
          },
        },
      },
    },
  } = APP_DATA;
  const title = joinTitle(leftTitle, rightTitle);

  return (
    <>
      <Head>
        <title>SONUS {title}</title>
      </Head>

      <ContentHeader title={title} description={description} to={to} />
    </>
  );
}
