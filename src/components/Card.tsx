import clsx from 'clsx';

export default function Card({ className, children, ...rest }: { className: string; children: JSX.Element }) {
  return (
    <div className={clsx(className, 'card flex flex-col px-7 py-5 rounded-lg')} {...rest}>
      {children}
    </div>
  );
}
