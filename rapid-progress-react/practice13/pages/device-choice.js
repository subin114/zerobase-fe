import React from "react";
import BottomButton from "../src/components/BottomButton";
import { useRouter } from "next/router";
import { useState } from "react";

export default function deviceChoice() {
  const router = useRouter();
  const [selectedDevice, setSelectedDevice] = useState("");

  // 로컬 스토리지에 저장하기
  const goNextPage = () => {
    localStorage.setItem("selected_device", selectedDevice);
    router.push("/accessory-choice");
  };

  const onChangeHandler = (e) => {
    setSelectedDevice(e.target.value);
  };

  console.log(selectedDevice);

  return (
    <div className="container">
      <div className="wrapper">
        <h3 className="title">아이맥과 맥북 중 원하는 장비를 선택해주세요.</h3>
      </div>

      {/* 라디오 버튼 추가 */}
      <label>
        <input
          type="radio"
          name="device"
          id="device"
          value="iMac"
          onChange={onChangeHandler}
        />
        iMac
      </label>
      <label>
        <input
          type="radio"
          name="device"
          id="device"
          value="Macbook"
          onChange={onChangeHandler}
        />
        Macbook
      </label>

      <BottomButton onClick={goNextPage}>
        악세서리 선택 화면으로 넘어가기
      </BottomButton>
    </div>
  );
}
