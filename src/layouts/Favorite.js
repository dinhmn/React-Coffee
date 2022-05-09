import React from "react";
import Heading from "./Heading";
import Items from "./Items";

const Favorite = ({ className }) => {
  return (
    <div className={className}>
      <Heading header="Choose one of our flavours">
        COFFEE BUILD YOUR BASE.
      </Heading>
      <div className="grid grid-cols-4 gap-x-8 gap-y-4 page-container gap-x-6">
        <Items
          className="flex flex-col items-center justify-center cursor-pointer gap-y-4"
          header="ESPRESSO"
          path="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-3-icon-img-1.png"
        >
          Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil
          expetendis in mei an pericula.
        </Items>
        <Items
          className="flex flex-col items-center justify-center cursor-pointer gap-y-4"
          header="ESPRESSO"
          path="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-3-icon-img-1.png"
        >
          Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil
          expetendis in mei an pericula.
        </Items>
        <Items
          className="flex flex-col items-center justify-center cursor-pointer gap-y-4"
          header="ESPRESSO"
          path="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-3-icon-img-1.png"
        >
          Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil
          expetendis in mei an pericula.
        </Items>
        <Items
          className="flex flex-col items-center justify-center cursor-pointer gap-y-4"
          header="ESPRESSO"
          path="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-3-icon-img-1.png"
        >
          Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil
          expetendis in mei an pericula.
        </Items>
        <Items
          className="flex flex-col items-center justify-center cursor-pointer gap-y-4"
          header="ESPRESSO"
          path="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-3-icon-img-1.png"
        >
          Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil
          expetendis in mei an pericula.
        </Items>
      </div>
    </div>
  );
};

export default Favorite;
