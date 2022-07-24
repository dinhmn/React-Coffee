import React, { useEffect, useState } from "react";
import { useCard } from "../components/contexts/card-context";
import ProductAPI from "../layouts/callAPI/ProductAPI";
import CommonItems from "../layouts/menuTask/CommonItems";
import Item from "../layouts/menuTask/Item";
import ItemNews from "../layouts/menuTask/ItemNews";
import Taskbar from "../layouts/menuTask/Taskbar";

const Menu = () => {
  const { coffee, setCoffee } = useCard();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await ProductAPI.getAllProduct();
        setCoffee(response.data);
      } catch (error) {}
      setLoading(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(coffee);
  return (
    <div className="grid grid-cols-4 gap-4 page-container">
      <Taskbar></Taskbar>
      <div className="col-span-3 my-3">
        <div className="my-3">
          <img
            src="https://images.unsplash.com/photo-1658528802649-2d49e3e9238b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>
        <CommonItems title="Coffee" className="my-4">
          <div className="grid grid-cols-4 gap-4">
            <Item
              image="https://images.pexels.com/photos/4051221/pexels-photo-4051221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              price="30.000"
            >
              Americano
            </Item>
            <Item
              image="https://images.pexels.com/photos/4051221/pexels-photo-4051221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              price="35.000"
            >
              Cold Brew Sữa Tươi
            </Item>
            <Item
              image="https://images.pexels.com/photos/4051221/pexels-photo-4051221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              price="40.000"
            >
              Cold Brew Truyền Thống
            </Item>
            <Item
              image="https://images.pexels.com/photos/4051221/pexels-photo-4051221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              price="50.000"
            >
              CloudFee Creamy Caramel
            </Item>
          </div>
        </CommonItems>
        <CommonItems title="Tin tức" className="my-3">
          <div className="grid grid-cols-3 my-3 gap-x-3">
            <ItemNews
              button="Đọc tiếp"
              image="https://images.unsplash.com/photo-1649859398021-afbfe80e83b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            >
              This is a new space.
            </ItemNews>
            <ItemNews
              button="Đọc tiếp"
              image="https://images.unsplash.com/photo-1649859398021-afbfe80e83b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            >
              This is a new space.
            </ItemNews>
            <ItemNews
              button="Đọc tiếp"
              image="https://images.unsplash.com/photo-1649859398021-afbfe80e83b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            >
              This is a new space.
            </ItemNews>
          </div>
        </CommonItems>
      </div>
    </div>
  );
};

export default Menu;
