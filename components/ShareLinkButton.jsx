"use client";

import { useState } from "react";
import { LinkIcon } from "@heroicons/react/24/outline";

export default function ShareLinkButton() {

    const [copied, setCopied] = useState(false);

    const handleClick = () => {
        setCopied(true);
        navigator.clipboard.writeText(window.location.href);
        setTimeout(() => setCopied(false), 1500);
    }

  return (
    <button onClick={handleClick} className="gap-1.5 flex items-center border px-2 py-1 rounded text-gray-500 hover:bg-gray-200 hover:text-gray-700">
        <LinkIcon className="w-4 h-4" />
        {copied ? "Link Copied" : "Copy Link"}
    </button>
  )
}
