import React from "react";
import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [addText, setAddText] = useState("");
  const [incompleteList, setIncompleteList] = useState(["掃除", "皿洗い"]);
  const [completeList, setCompleteList] = useState(["犬の散歩", "買い物"]);
  const onChangeText = (event) => setAddText(event.target.value);
  const onClickAdd = () => {
    if (addText !== "") {
      const newText = [...incompleteList, addText];
      setIncompleteList(newText);
      setAddText("");
    }
  };
  const onClickDelete = (index) => {
    const newText = [...incompleteList];
    newText.splice(index, 1);
    setIncompleteList(newText);
  };
  const onClickComplete = (index) => {
    const incompleteText = [...incompleteList];
    incompleteText.splice(index, 1);

    const completeText = [...completeList, incompleteList[index]];
    setIncompleteList(incompleteText);
    setCompleteList(completeText);
  };
  return (
    <>
      <div className="container">
        <h1>ToDo</h1>
        <div className="input-area">
          <input
            type="text"
            placeholder="入力してください"
            value={addText}
            onChange={onChangeText}
          />
          <button onClick={onClickAdd}>登録</button>
        </div>
        <div className="incomplete box">
          <p>課題</p>
          <ul>
            {incompleteList.map((todo, index) => {
              return (
                <div key={todo} className="list">
                  <li>{todo}</li>
                  <div>
                    <button onClick={() => onClickComplete(index)}>完了</button>
                    <button onClick={() => onClickDelete(index)}>削除</button>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
        <div className="complete box">
          <p>完了</p>
          <ul>
            {completeList.map((todo) => {
              return (
                <div key={todo} className="list">
                  <li>{todo}</li>
                  <button>課題に戻す</button>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
