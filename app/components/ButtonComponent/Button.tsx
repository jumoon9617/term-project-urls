import EllipseBlackSvg from '~/assets/svgs/Ellipse-black.svg'

type Props = {
  text?: string
  size?: 'small' | 'large'
  onClick?: () => void
  disabled?: boolean
}

const Button = ({ text, size, onClick, disabled }: Props) => {
  const isSmall = size === 'small'
  const svgSize = isSmall ? 100 : 150
  
  return (
    <button
      className={`flex items-center justify-center text-white relative ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`} // 無効化時にopacityとcursorを変更
      style={{
        width: `${svgSize}px`,
        height: `${svgSize}px`,
        borderRadius: '50%',
        overflow: 'hidden',
      }}
      onClick={disabled ? undefined : onClick} // 無効化されている場合、onClickを無効化
      disabled={disabled} // ボタンが無効化されると、クリックできないようにする
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
