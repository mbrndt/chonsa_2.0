import React from "react";

export default function Collections() {
  return (
    <div className="flex flex-wrap gap-6">
      <div className="basis-1/4 flex text-center p-10 rounded-xl my-10 bg-neutral-100 border">
        <h1>col1</h1>
      </div>
      <div className="basis-1/4 flex text-center p-10 rounded-xl my-10 bg-neutral-100 border">
        <h1>col2</h1>
      </div>
      <div className="basis-1/4 flex text-center p-10 rounded-xl my-10 bg-neutral-100 border">
        <h1>col3</h1>
      </div>
      <div className="basis-1/4 flex text-center p-10 rounded-xl my-10 bg-neutral-100 border">
        <h1>col4</h1>
      </div>
    </div>
  );
}
