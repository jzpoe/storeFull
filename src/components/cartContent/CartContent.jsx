import { useContext } from "react";
import { dataContext } from "../context/DataContext";

export const CartContent = () => {
  const { selectProduct } = useContext(dataContext);
  

  return (
    <div className="">
      <div className="">
        {selectProduct.map((image) => (
          <div key={image.public_id}>
            <div className="">
              <img
                src={image.url}
                alt={image.original_filename}
                className="image-item"
              />{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
