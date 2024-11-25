export function parsePostURI(likeURI: string) {
  return likeURI.replace('app.bsky.feed.like', 'app.bsky.feed.post')
}
