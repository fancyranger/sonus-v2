import Link from 'next/link';

interface ContentHeaderProps {
  title?: string;
  sub?: string;
  description?: string;
  to?: string;
}

export default function ContentHeader({ title, sub, description, to }: ContentHeaderProps) {
  return (
    <div className="content-header">
      {title && <h1>{title}</h1>}
      {sub && <p>{sub}</p>}
      {description && <div>{description}</div>}
      {to && <Link href={to}>Back</Link>}
    </div>
  );
}
