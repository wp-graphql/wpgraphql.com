import Image from "next/legacy/image"

export default function SiteLogo(props) {
  return (
    <Image
      width={props?.width ?? 42}
      height={props?.height ?? 42}
      src="/logo-wpgraphql.svg"
      alt="WPGraphQL Logo"
    />
  )
}
