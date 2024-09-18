import { useState } from "react";

function HeaderHome({ onInputClick }) {
  return (
    <header className="flex justify-between items-center bg-custom-gray-light h-12 p-4  ">
      <h1 className="text-xl font-bold">NewNotes</h1>

    </header>
  );
}

export default HeaderHome;
