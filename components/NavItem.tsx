import Link from "next/link";
import React from "react";

interface NavItemProps {
  item: any;
  onClose: () => void;
  isActive: boolean;
}

function NavItem({ item, onClose, isActive }: NavItemProps) {
  return (
    <li>
      <Link
        href={item.href}
        onClick={onClose}
        data-active={isActive}
        aria-current={isActive ? "page" : undefined}
        className="block w-full px-4 py-2 text-zinc-200 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors duration-200 rounded-md relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-bottom-left after:scale-x-0 after:bg-blue-500 after:transition-transform after:duration-200 hover:after:scale-x-100 data-[active=true]:after:scale-x-100"
      >
        {item.name}
      </Link>
    </li>
  );
}

export default NavItem;