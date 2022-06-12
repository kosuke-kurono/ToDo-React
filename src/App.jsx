import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="container">
        <div className="input-area border">
          <input type="text" placeholder="入力してください" />
          <button>登録</button>
        </div>
        <div className="incomplete box">
          <p>課題</p>
          <ul>
            <div>
              <li>あああ</li>
              <button>完了</button>
              <button>削除</button>
            </div>
            <div>
              <li>いいい</li>
              <button>完了</button>
              <button>削除</button>
            </div>
          </ul>
        </div>
        <div className="complete box">
          <p>完了</p>
          <ul>
            <div>
              <li>ううう</li>
              <button>未完了に戻す</button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};
