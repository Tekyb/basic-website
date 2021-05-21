import React from "react"

import TestData from "../../common/posts/data"

const NewestWorks = () => (
  <div className="items worknews">
    <div className="container">
      <div className="item">
        <div className="items-head">
          <h2 className="item-title" style={{ color: "white" }}>
            NewestWorks
          </h2>
          <span className="head-underline"></span>
        </div>
        <TestData />
      </div>
    </div>
  </div>
)
export default NewestWorks
