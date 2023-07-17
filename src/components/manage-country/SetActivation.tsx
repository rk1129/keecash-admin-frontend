import React, { useState } from "react";
import Checkbox from "../common/Checkbox";
import MultiSelector from "../common/MultiSelector";

const SetActivation = () => {
  const [isActive, setIsActive] = useState("true");
  return (
    <div className="w-full border-bordercolor border-2 rounded">
      <div className="bg-graybackground px-4 py-2">
        <p className="text-base font-bold">Setting</p>
      </div>
      <div className="p-4 flex flex-col gap-4">
        <p className="text-xl font-black">Country name</p>
        <p className="text-base font-black">country code</p>
        <p className="text-base text-specialgray">phone code</p>
        <p className="text-base">id</p>
        <button className="text-base font-normal px-3 py-2 bg-primary text-specialwhite rounded w-40">
          Save modifications
        </button>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <p className="text-base font-bold">
          Check currency available for this country(only when you select a
          specify country)
        </p>
        <div className="flex gap-5 pl-4">
          <Checkbox name="USD" />
          <Checkbox name="EUR" />
        </div>
        <div className="flex w-full">
          <div className="flex w-6/12 justify-between p-4">
            <p className="text-base py-1.5">is active</p>
            <div className="w-52">
              <MultiSelector
                names={["true", "false"]}
                value={isActive}
                setSelectorValue={setIsActive}
              />
            </div>
          </div>
          <div className="flex w-6/12 justify-between p-4">
            <p className="text-base py-1.5">inactive message</p>
            <div className="w-80 h-24 hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded">
              <textarea className="w-full h-full border-none py-1.5 px-3 outline-none resize-none" />
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex w-6/12 justify-between p-4">
            <p className="text-base py-1.5">is app in maintenance</p>
            <div className="w-52">
              <MultiSelector
                names={["true", "false"]}
                value={isActive}
                setSelectorValue={setIsActive}
              />
            </div>
          </div>
          <div className="flex w-6/12 justify-between p-4">
            <p className="text-base py-1.5">in maintenance message</p>
            <div className="w-80 h-24 hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded">
              <textarea className="w-full h-full border-none py-1.5 px-3 outline-none resize-none" />
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex w-6/12 justify-between p-4">
            <p className="text-base py-1.5">deposit is active</p>
            <div className="w-52">
              <MultiSelector
                names={["true", "false"]}
                value={isActive}
                setSelectorValue={setIsActive}
              />
            </div>
          </div>
          <div className="flex w-6/12 justify-between p-4">
            <p className="text-base py-1.5">deposit message</p>
            <div className="w-80 h-24 hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded">
              <textarea className="w-full h-full border-none py-1.5 px-3 outline-none resize-none" />
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex w-6/12 justify-between p-4">
            <p className="text-base py-1.5">withdraw is active</p>
            <div className="w-52">
              <MultiSelector
                names={["true", "false"]}
                value={isActive}
                setSelectorValue={setIsActive}
              />
            </div>
          </div>
          <div className="flex w-6/12 justify-between p-4">
            <p className="text-base py-1.5">withdraw message</p>
            <div className="w-80 h-24 hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded">
              <textarea className="w-full h-full border-none py-1.5 px-3 outline-none resize-none" />
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex w-6/12 justify-between p-4">
            <p className="text-base py-1.5">transfer is active</p>
            <div className="w-52">
              <MultiSelector
                names={["true", "false"]}
                value={isActive}
                setSelectorValue={setIsActive}
              />
            </div>
          </div>
          <div className="flex w-6/12 justify-between p-4">
            <p className="text-base py-1.5">transfer message</p>
            <div className="w-80 h-24 hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded">
              <textarea className="w-full h-full border-none py-1.5 px-3 outline-none resize-none" />
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex w-6/12 justify-between p-4">
            <p className="text-base py-1.5">card multiple is active</p>
            <div className="w-52">
              <MultiSelector
                names={["true", "false"]}
                value={isActive}
                setSelectorValue={setIsActive}
              />
            </div>
          </div>
          <div className="flex w-6/12 justify-between p-4">
            <p className="text-base py-1.5">card multiple message</p>
            <div className="w-80 h-24 hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded">
              <textarea className="w-full h-full border-none py-1.5 px-3 outline-none resize-none" />
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex w-6/12 justify-between p-4">
            <p className="text-base py-1.5">card unique is active</p>
            <div className="w-52">
              <MultiSelector
                names={["true", "false"]}
                value={isActive}
                setSelectorValue={setIsActive}
              />
            </div>
          </div>
          <div className="flex w-6/12 justify-between p-4">
            <p className="text-base py-1.5">card unique message</p>
            <div className="w-80 h-24 hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded">
              <textarea className="w-full h-full border-none py-1.5 px-3 outline-none resize-none" />
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex w-6/12 justify-between p-4">
            <p className="text-base py-1.5">card physics is active</p>
            <div className="w-52">
              <MultiSelector
                names={["true", "false"]}
                value={isActive}
                setSelectorValue={setIsActive}
              />
            </div>
          </div>
          <div className="flex w-6/12 justify-between p-4">
            <p className="text-base py-1.5">card physics message</p>
            <div className="w-80 h-24 hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded">
              <textarea className="w-full h-full border-none py-1.5 px-3 outline-none resize-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetActivation;
