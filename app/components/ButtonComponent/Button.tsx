import EllipseBlackSvg from '~/assets/svgs/Ellipse-black.svg'

type Props = {
  text?: string
  size?: 'small' | 'large'
  onClick?: () => void
}

const Button = ({ text, size, onClick }: Props) => {
  const isSmall = size === 'small'
  const svgSize = isSmall ? 100 : 150
  return (
    <button
      className="flex items-center justify-center text-white"
      style={{
        width: `${svgSize}px`,
        height: `${svgSize}px`,
        borderRadius: '50%',
        overflow: 'hidden',
      }}
      onClick={onClick}
    >
      <svg
        xmlns={EllipseBlackSvg}
        width={svgSize}
        height={svgSize}
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="50" fill="black" />
      </svg>
      <span className="absolute">{text}</span>
    </button>
  )
}

export default Button
