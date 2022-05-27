import React from "react";
import pic from "../img/building.jpg";

function Cover() {
  return (
    <div className="bg-image">
      <img src={pic} />
      <div className="quote-box">
        <div className="quote">"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam voluptatem dolores illo culpa recusandae cumque inventore nesciunt ipsam provident nihil?"</div>
      </div>
    </div>
  );
}

export default Cover;
