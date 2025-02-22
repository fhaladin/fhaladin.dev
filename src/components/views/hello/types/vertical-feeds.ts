export interface RssFeedItem {
  title: string
  pubDate: string
  link: string
  guid: string
  author: string
  thumbnail: string
  description: string
  content: string
  enclosure: Record<string, unknown>
  categories: string[]
  image: string
}
