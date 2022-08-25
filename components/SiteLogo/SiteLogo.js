import Image from 'next/image'

const SiteLogo = (props) => {
  return (
    <Image
      width={props?.width ?? 41}
      height={props?.height ?? 41}
      src="/logo-wpgraphql.svg"
      alt="WPGraphQL Logo"
    />
  )
}

export default SiteLogo
