export interface Post {
  postId: number,
  posterImage: string,
  postImage: string,
  posterName: string,
  likeCount: number,
  commentsCount: number,
  liked: boolean
}

export interface Profile {
  img: string,
  name: string,
  user: string
}

export interface Story {
  name: string,
  image: string
}
