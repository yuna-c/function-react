import HoverInImage from './HoverInImage'
import './HoverInImage.scss' // SCSS 파일 import

export default function ImageGrid() {
  const images = ['https://placehold.co/1200x800', 'https://placehold.co/1200x800', 'https://placehold.co/1200x800']

  return (
    <div className="main">
      {images.map((src, index) => (
        <HoverInImage key={index} src={src} />
      ))}
    </div>
  )
}
