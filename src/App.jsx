import React from "react";
import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [addText, setAddText] = useState("");
  // 課題一覧を作成
  const [incompleteList, setIncompleteList] = useState(["掃除", "皿洗い"]);
  // 完了一覧を作成
  const [completeList, setCompleteList] = useState(["犬の散歩", "買い物"]);
  const onChangeText = (event) => setAddText(event.target.value);

  // 課題一覧に入力された課題を追加する
  const onClickAdd = () => {
    // 未入力時の登録を無効化
    if (addText !== "") {
      const newText = [...incompleteList, addText];
      setIncompleteList(newText);
      setAddText("");
    }
  };
  // 削除ボタン押下
  const onClickDelete = (index) => {
    const newText = [...incompleteList];
    newText.splice(index, 1);
    setIncompleteList(newText);
  };
  // 完了ボタン押下
  const onClickComplete = (index) => {
    const incompleteText = [...incompleteList];
    incompleteText.splice(index, 1);

    const completeText = [...completeList, incompleteList[index]];
    setIncompleteList(incompleteText);
    setCompleteList(completeText);
  };
  // 課題に戻すボタン押下
  const onClickIncomplete = (index) => {
    const completeText = [...completeList];
    completeText.splice(index, 1);

    const incompleteText = [...incompleteList, completeList[index]];
    setCompleteList(completeText);
    setIncompleteList(incompleteText);
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
            {completeList.map((todo, index) => {
              return (
                <div key={todo} className="list">
                  <li>{todo}</li>
                  <button onClick={() => onClickIncomplete(index)}>
                    課題に戻す
                  </button>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
