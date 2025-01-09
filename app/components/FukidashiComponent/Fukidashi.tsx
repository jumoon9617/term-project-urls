import FukidashiLeftSvg from '~/assets/svgs/fukidashi-left.svg'
import FukidashiRightSvg from '~/assets/svgs/fukidashi-right.svg'

type Props = {
  title?: string
  url?: string
  date?: string
  position?: 'left' | 'right'
}

const Fukidashi = ({ title, url, date, position }: Props) => {
  const isLeft = position === 'left'
  return (
    <div className="relative">
      {isLeft ? (
        <div className="relative">
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
        </div>
      ) : (
        <div className="relative">
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
        </div>
      )}
    </div>
  )
}

export default Fukidashi
