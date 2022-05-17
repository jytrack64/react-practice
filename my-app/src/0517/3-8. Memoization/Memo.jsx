import React, {useState} from 'react'
import Comments from './Comments'

const commentList = [
  {title: "comment1", content: "message1", likes: 1},
  {title: "comment2", content: "message2", likes: 1},
  {title: "comment3", content: "message3", likes: 1},
];

export default function Memo() {
  const [comments, setComments] = useState(commentList);
  return <Comments commentList={comments} />;
}
