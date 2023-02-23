import dynamic from 'next/dynamic';

const icons = {
  home: dynamic(() => import('@@/static/icons/home.svg')),
  cohort: dynamic(() => import('@@/static/icons/cohort.svg')),
  doctor: dynamic(() => import('@@/static/icons/doctor.svg')),
  pharmacist: dynamic(() => import('@@/static/icons/pharmacist.svg')),
  logout: dynamic(() => import('@@/static/icons/logout.svg')),
  pbr: dynamic(() => import('@@/static/icons/pbr.svg')),
  search: dynamic(() => import('@@/static/icons/search.svg')),
  language: dynamic(() => import('@@/static/icons/language.svg')),
  profile: dynamic(() => import('@@/static/icons/profile.svg')),
  digital: dynamic(() => import('@@/static/icons/digital.svg')),
  salesforce: dynamic(() => import('@@/static/icons/salesforce.svg')),
  ranking: dynamic(() => import('@@/static/icons/ranking.svg')),
  support: dynamic(() => import('@@/static/icons/support.svg')),
  right: dynamic(() => import('@@/static/icons/right.svg')),
  down: dynamic(() => import('@@/static/icons/down.svg')),
  up: dynamic(() => import('@@/static/icons/up.svg')),
} as { [keys: string]: any };

export default function WrapIcon({ children, ...rest }: React.HTMLAttributes<HTMLOrSVGElement>) {
  const Icon = icons[children as string];

  if (Icon) {
    return <Icon {...rest} />;
  }

  return <span {...rest}>{children}</span>;
}
