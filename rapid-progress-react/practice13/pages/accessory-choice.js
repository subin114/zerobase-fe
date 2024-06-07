import React, { useState } from "react";
import BottomButton from "../src/components/BottomButton";
import { useRouter } from "next/router";
import RadioGroup from "../src/components/RadioGroup";
import Radio from "../src/components/Radio";

export default function accessoryChoiceChoice() {
  const router = useRouter();
  const [selectedAccessory, setSelectedAccessory] = useState("");

  // const onChangeHandler = (e) => {
  //   setSelectedAccessory(e.target.value);
  // };

  // 로컬 스토리지에 저장하기
  const goNextPage = () => {
    localStorage.setItem("selected_accessory", selectedAccessory);
    router.push("/complete");
  };

  console.log(selectedAccessory);

  return (
    <div className="container">
      <div className="wrapper">
        <h3 className="title">
          모니터와 키보드 중 원하는 악세서리를 선택해주세요.
        </h3>
      </div>

      {/* 라디오 버튼 추가 */}
      <RadioGroup
        name="accessory"
        onChange={(state) => setSelectedAccessory(state)}
      >
        <Radio id="monitor" name="accessory" value="monitor" label="monitor" />
        <Radio
          id="keyboard"
          name="accessory"
          value="keyboard"
          label="keyboard"
        />
      </RadioGroup>

      <BottomButton onClick={goNextPage}>완료 화면으로 넘어가기</BottomButton>
    </div>
  );
}
