import Image from "next/image"

export default function SiteLogo(props) {
  return (
    <Image
      width={props?.width ?? 41}
      height={props?.height ?? 41}
      src="/logo-wpgraphql.svg"
      alt="WPGraphQL Logo"
    />
  )
}
