import FukidashiLeftSvg from '~/assets/svgs/fukidashi-left.svg'
import FukidashiRightSvg from '~/assets/svgs/fukidashi-right.svg'

type Props = {
  title?: string
  url?: string
  date?: string
  position?: 'left' | 'right'
  urlId?: number
  onClick?: (id: number) => void
}

const Fukidashi = ({ title, url, date, position, urlId, onClick }: Props) => {
  const isLeft = position === 'left'

  const handleClick = () => {
    if (urlId && onClick) {
      onClick(urlId) // urlIdが存在する場合にonClickを呼び出す
    }
  }

  return (
    <div className="relative">
      {isLeft ? (
        <button className="relative" onClick={handleClick}>
          <img src={FukidashiLeftSvg} alt="Fukidashi Left" />
          <div className="absolute top-1/3 left-12 transform -translate-y-1/2 text-deep-gray p-3 rounded-lg flex flex-col items-start max-w-xs">
            <div
              className="text-left truncate mt-8"
              style={{
                maxWidth: '200px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              Title: {title}
            </div>
            <div
              className="text-left truncate mt-4"
              style={{
                maxWidth: '200px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              URL: {url}
            </div>
          </div>
          <div className="text-right mr-8">{date}</div>
        </button>
      ) : (
        <button className="relative" onClick={handleClick}>
          <img src={FukidashiRightSvg} alt="Fukidashi Right" />
          <div className="absolute top-1/3 left-12 transform -translate-y-1/2 text-deep-gray p-3 rounded-lg flex flex-col items-start max-w-xs">
            <div
              className="text-left truncate mt-8"
              style={{
                maxWidth: '200px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
              onClick={handleClick}
            >
              Title: {title}
            </div>
            <div
              className="text-left truncate mt-4"
              style={{
                maxWidth: '200px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              URL: {url}
            </div>
          </div>
          <div className="text-right mr-8">{date}</div>
        </button>
      )}
    </div>
  )
}

export default Fukidashi
