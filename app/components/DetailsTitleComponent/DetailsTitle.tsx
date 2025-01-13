import EllipseWhiteSvg from '~/assets/svgs/Ellipse-white.svg'

type Props = {
  title: string
  url: string
  userName: string
  date: string
}

const DetailsTitle = ({ title, url, userName, date }: Props) => {
  return (
    <div
      className="relative flex items-center justify-center mx-auto overflow-hidden bg-white rounded-full shadow-md"
      style={{
        width: 'clamp(300px, 80%, 600px)', // 最小300px、最大600pxに制限
        aspectRatio: '3 / 2', // 楕円形の比率を維持
      }}
    >
      <img
        src={EllipseWhiteSvg}
        alt="Ellipse Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute flex flex-col justify-center items-start px-8 w-[80%] h-[80%] text-left overflow-hidden">
        <div className="text-xl font-bold text-gray-800 break-words">Title: {title}</div>
        <div className="text-md text-blue-600 break-words overflow-hidden">
          URL:{' '}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block break-words"
            title={url}
          >
            {url}
          </a>
        </div>
        <div className="text-md text-deep-gray break-words">Sender: {userName}</div>
        <div className="text-sm text-deep-gray">Date: {date}</div>
      </div>
    </div>
  )
}

export default DetailsTitle