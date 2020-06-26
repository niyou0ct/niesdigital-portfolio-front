import React, { ImgHTMLAttributes } from 'react'

export type ImageProps = ImgHTMLAttributes<any>
const Image: React.FC<ImageProps> = (props: ImageProps): JSX.Element => {
  const { src, alt } = props
  return <img src={src} alt={alt} />
}
export default Image
