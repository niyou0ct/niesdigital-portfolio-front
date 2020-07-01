import React from 'react'

export type HeadingProps = {
  tag: string
  color?: string
}
const Heading: React.FC<HeadingProps> = (props: HeadingProps): JSX.Element => {
  const { tag } = props
  const Tag = tag
  return <Tag />
}

export default Heading
