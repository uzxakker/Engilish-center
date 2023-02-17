import React from "react";
import { WrapperContainer } from "../../App-styled";
import { Wrapper, WrapperTeacher } from "./styled-index";
import {items} from './tabData'
import "./styles.css";

// ant tab
import { Tabs } from "antd";
const onChange = (key) => {
  console.log(key);
};


// ant tab
export default function Teacher() {
  const [activeTab, setActiveTab] = React.useState(9);
  const onTabClick = (e, index) => {
    setActiveTab(index);
  };
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <WrapperTeacher id="whoisteacher">
      <WrapperContainer>
        <Wrapper>
          <h2 data-aos='fade-down' data-aos-duration='900' className="teacher-title">Ustozlarim kim?</h2>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </Wrapper>
      </WrapperContainer>
    </WrapperTeacher>
  );
}
