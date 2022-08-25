import * as HIcons from '@heroicons/react/outline'

/**
 * This component allows an icon to be rendered based on the name of the icon (i.e., string passed from a WordPress Nav Menu Item)
 * @see: https://github.com/tailwindlabs/heroicons/issues/278#issuecomment-851594776
 */
const DynamicHeroIcon = (props) => {
  const { ...icons } = HIcons
  const TheIcon = icons[props.icon]

  return (
    <>
      <TheIcon className="h-6 w-6 text-white" aria-hidden="true" />
    </>
  )
}

export default DynamicHeroIcon
