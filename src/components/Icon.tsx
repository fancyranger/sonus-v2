import dynamic from 'next/dynamic';

const icons = {
  dashboard: dynamic(() => import('@@/static/icons/dashboard.svg')),
  home: dynamic(() => import('@@/static/icons/home.svg')),
  doctor: dynamic(() => import('@@/static/icons/doctor.svg')),
  pharmacist: dynamic(() => import('@@/static/icons/pharmacist.svg')),
  logout: dynamic(() => import('@@/static/icons/logout.svg')),
  pbr: dynamic(() => import('@@/static/icons/pbr.svg')),
  search: dynamic(() => import('@@/static/icons/search.svg')),
  language: dynamic(() => import('@@/static/icons/language.svg')),
  profile: dynamic(() => import('@@/static/icons/profile.svg')),
  oncology: dynamic(() => import('@@/static/icons/oncology.svg')),
  hypertension: dynamic(() => import('@@/static/icons/hypertension.svg')),
  diabetes: dynamic(() => import('@@/static/icons/diabetes.svg')),
  respiratory: dynamic(() => import('@@/static/icons/respiratory.svg')),
  'anti-infectives': dynamic(() => import('@@/static/icons/anti-infectives.svg')),
  vitamins: dynamic(() => import('@@/static/icons/vitamins.svg')),
  digital: dynamic(() => import('@@/static/icons/digital.svg')),
  salesforce: dynamic(() => import('@@/static/icons/salesforce.svg')),
  ranking: dynamic(() => import('@@/static/icons/ranking.svg')),
  support: dynamic(() => import('@@/static/icons/support.svg')),
  right: dynamic(() => import('@@/static/icons/right.svg')),
  down: dynamic(() => import('@@/static/icons/down.svg')),
} as { [keys: string]: any };

export default function WrapIcon({ children, ...rest }: React.HTMLAttributes<HTMLOrSVGElement>) {
  const Icon = icons[children as string];

  if (Icon) {
    return <Icon {...rest} />;
  }

  return <span {...rest}>{children}</span>;
}
