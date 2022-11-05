import Link from 'next/link';

const StyledLink = ({ children, href, target }: { children: React.ReactNode; href: string; target?: string;  }) => {
  return (
    <Link
      href={href}
      target={target}
      className="inline-flex items-center bg-gradient-to-r from-[#FDFC47] to-[#24FE41] bg-clip-text text-transparent hover:opacity-70">
      {children}
    </Link>
  );
};

export const StyledLinkButton = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => {
  return (
    <button type="button" onClick={onClick}
      className="bg-gradient-to-r from-[#FDFC47] to-[#24FE41] bg-clip-text text-transparent hover:opacity-70">
      {children}
    </button>
  );
};

export default StyledLink;
