import dynamic from "next/dynamic"
import { useEffect, useState } from "react";

/**
 * This component allows an icon to be rendered based on the name of the icon (i.e., string passed from a WordPress Nav Menu Item)
 * @see: https://github.com/tailwindlabs/heroicons/issues/278#issuecomment-851594776
 */
export default function DynamicHeroIcon(props) {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const Icon = dynamic(() =>
      import(`@heroicons/react/24/outline`).then(icons => icons[props.icon]),
    { ssr: false } // This ensures the component is only rendered on the client side
  );

  return <Icon className="h-6 w-6 text-white" aria-hidden="true" {...props} />;
}
