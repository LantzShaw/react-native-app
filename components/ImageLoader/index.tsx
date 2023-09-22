import { Suspense } from 'react'
import { ActivityIndicator, Image, ImageStyle } from 'react-native'

interface Props {
  url?: string
  style?: ImageStyle
}

export default function ImageLoader({ url, style }: Props) {
  return (
    <Suspense fallback={<ActivityIndicator />}>
      <Image source={{ uri: url }} style={style} />
    </Suspense>
  )
}
