import { title } from "process";
import React from "react";
import { IconType } from "react-icons";
import { FiDollarSign, FiHome, FiLink, FiPaperclip, FiUser } from "react-icons/fi";

export const RouteSelect = () => {
  return (
    <div className="mt-4 text-sm grid gap-1">
      <Route Icon={FiHome} selected={true} title="Dashboard"/>
      <Route Icon={FiUser} selected={false} title="Team" />
      <Route Icon={FiPaperclip} selected={false} title="Invoices" />
      <Route Icon={FiLink} selected={false} title="Integrations" />
      <Route Icon={FiDollarSign} selected={false} title="Finance" />
    </div>
  )
}

const Route = ({
  selected,
  Icon,
  title,
}:{
  selected: boolean
  Icon: IconType
  title: string
}) => {
  return (
    <button className="w-full flex items-center px-2 py-1.5 gap-2 transition-colors hover:bg-stone-400 shadow rounded">
      <Icon className={selected ? "text-violet-500" : ""} />
      <span>{title}</span>
    </button>
  )
}