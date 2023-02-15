import Link from 'next/link';

export default function RouteLink({
  to,
  children,
  ...rest
}: {
  to: string;
  children: JSX.Element | JSX.Element[];
  [keys: string]: any;
}) {
  return (
    <Link
      href={to}
      className="flex items-center w-full pl-7 py-3 mr-4 rounded-l-none rounded-r-lg bg-transparent hover:bg-[#56BDD3]"
      {...rest}
    >
      {children}
    </Link>
  );
}
