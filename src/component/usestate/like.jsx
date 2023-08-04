import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
const LikeHeart = () => {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(100);
  const HandleLike = () => {
    setLike(!like);
    setCount(like ? count - 1 : count + 1);
  };
  // const HandleHeart = () => {
  //   if (like === true) {
  //     return <AiFillHeart />;
  //   } else {
  //     return <AiOutlineHeart />;
  //   }
  // };
  return (
    <div>
      {/* {HandleHeart()} */}
      {like ? (
        <AiFillHeart style={{ color: "red" }} onClick={HandleLike} />
      ) : (
        <AiOutlineHeart onClick={HandleLike} />
      )}
      {count}
    </div>
  );
};

export default LikeHeart;
