import React, { useContext, useState } from "react";
import { MovieContext } from "../MovieContext";
import { ListContext } from "../ListContext";
import { ImBin, ImPlus, ImMinus } from "react-icons/im";
import { TiShoppingCart } from "react-icons/ti";
const Watchlist = () => {
  const [movies] = useContext(MovieContext);
  const [lists, setLists] = useContext(ListContext);
  const [isOpen, setIsOpen] = useState(0);
  let [o, setO] = useState(0);
  let sum = 0;
  let item_index;

  function handleisOpen() {
    return setIsOpen(!isOpen);
  }

  const handleDelete = (index) => {
    setLists(lists.filter((item) => item.id !== index));
    return changeCounter(index);
  };

  function increaseNumberOfItems(id) {
    return lists.map((item) => {
      if (item.id === id) {
        item.number_of_items++;
        setO(o + 1);
      }
      if (item.number_of_items === 20) {
        alert("Maximum number of items!");
      }
      return item.number_of_items;
    });
  }
  function decreaseNumberOfItems(id) {
    lists.map((item) => {
      if (item.id === id) {
        item.number_of_items--;
      }
      if (item.number_of_items === 0) {
        alert("Minimum number of item!");
      }
      return item.number_of_items;
    });
    setO(o - 1);
  }

  function changeCounter(id) {
    movies.map((movie) => {
      if (movie.id - 1 === id) {
        movie.counter = 0;
      }
      return movie.counter;
    });
  }

  return (
    <>
      <div onClick={handleisOpen} className="shoplist-btn ">
        <TiShoppingCart /> <span>Cart({lists.length})</span>
      </div>

      <div className={isOpen ? "visible-list" : "not-visible-list"}>
        <h1>Shop Card</h1>
        <div onClick={handleisOpen} className="exit-btn">
          X
        </div>
        <div>
          {lists.map((item, index) => {
            sum = sum + item.price * item.number_of_items;
            item_index = index + 1;

            return (
              <div className="one-item" key={index}>
                <p className="item-name">
                  <span>{item_index}.</span> {item.name}
                </p>
                <p className="price">${item.price}</p>
                <div className="plus-minus">
                  <p onClick={() => increaseNumberOfItems(item.id)}>
                    <ImPlus />
                  </p>
                  <p onClick={() => decreaseNumberOfItems(item.id)}>
                    <ImMinus />
                  </p>
                </div>

                <p className="number-of-items">{item.number_of_items}</p>
                <div className="bin" onClick={() => handleDelete(item.id)}>
                  <ImBin />
                </div>
              </div>
            );
          })}
        </div>
        <div className="sum">
          <h3>Total Sum:</h3>
          <h2>${sum}</h2>
        </div>
      </div>
    </>
  );
};

export default Watchlist;
