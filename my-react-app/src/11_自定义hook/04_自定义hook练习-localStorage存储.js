import React, { useEffect, useState } from "react";
import useLocalStorage from "./../hook/local-store-hook";

export default function CUstomDataStoreHook() {
  const [name, setName] = useLocalStorage("name");

  console.log(name);
  return (
    <div>
      <h2>CUstomDataStoreHook</h2>
      <button onClick={(e) => setName("aa")}>设置name</button>
    </div>
  );
}
