"use client";
import DropDownButton from "./partials/dropDownButton";

const NavbarComponent = () => {
  return (
    <div className="pb-4 border-b px-5 flex justify-between items-center ">
      <div className="flex flex-col flex-wrap gap-4 text-lg">Bienvenidos</div>
      <DropDownButton />
    </div>
  );
};

export default NavbarComponent;
