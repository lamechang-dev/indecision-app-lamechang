import React from "react";
import ReactDOM from "react-dom";
import Indecisionapp from "./components/Indecisionapp";
import { library } from '@fortawesome/fontawesome-svg-core'; //fontawesomeのコアファイル
import { fas } from '@fortawesome/free-solid-svg-icons'; //fontawesomeのsolidアイコンのインポート
import "./styles/styles.scss";

library.add(fas);

ReactDOM.render(<Indecisionapp />, document.getElementById("app"));
