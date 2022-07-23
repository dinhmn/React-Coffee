import React from "react";

const NavAddress = ({ className }) => {
  return (
    <div
      className={`flex items-center justify-center py-2 gap-14 ${className}`}
    >
      <span className="px-5">156 Cửa hàng khắp cả nước</span>
      <span>Đặt hàng: 1800.6936</span>
      <span>Freeship từ 50.000vnđ</span>
    </div>
  );
};

export default NavAddress;
