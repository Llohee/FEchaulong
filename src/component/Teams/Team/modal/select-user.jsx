import React, { useState } from "react";
import { useGetAllStudent } from "../../../../api/students-api";
import { Combobox } from "@headlessui/react";
import {
  ComboboxButton,
  ComboboxOption,
  ComboboxOptions,
  ComboboxText,
  UserDetailOptionDisp,
  UserDetailSideDisp,
} from "../../../../ui/combobox/combobox";
import { useGetAllTeams } from "../../../../api/teams-api";
import { useParams } from "react-router-dom";
import ConfirmAddUser from "./confirm-add-user";

const SeclectUser = ({ closeModal }) => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const { getAllStudent } = useGetAllStudent();
  const { errorMessage } = useGetAllTeams();
  console.log(errorMessage);
  const [isShowModalConfirm, setIsShowModalConfirm] = useState(false);

  const filteredUsers =
    search === ""
      ? getAllStudent
      : getAllStudent?.filter(
          (item) =>
            item.fullname.toLowerCase().includes(search.toLowerCase()) ||
            item.email.toLowerCase().includes(search.toLowerCase())
        );
  return (
    <div className="relative h-96 w-96 overflow-hidden">
      <div className="overflow-auto">
        <Combobox
          value={selected}
          onChange={(value) => {
            setSelected(value);
          }}
          multiple={true}
        >
          <div className="px-4 flex flex-col gap-2 mt-2">
            <div>Đã chọn ({selected.length})</div>
            <div className="relative">
              <Combobox.Input
                autoFocus={true}
                className="relative appearance-none py-2 px-3 focus:outline-none leading-tight peer text-body-3 w-full gap-2 !text-typography-label rounded-lg transition-all border focus-within:border-primary-base  checked:text-grey-1 h-[38px] placeholder-typography-placeholder"
                displayValue={(user) => user?.name}
                onChange={(event) => setSearch(event.target.value)}
              />
              <ComboboxButton />
            </div>
          </div>
          <ComboboxOptions className="">
            {getAllStudent.isFetching || !filteredUsers ? (
              <ComboboxText>Đang tải thành viên</ComboboxText>
            ) : filteredUsers.length === 0 ? (
              <ComboboxText>
                {search.length < 3
                  ? "Nhập ít nhất 3 ký tự"
                  : "Không tìm thấy người dùng"}
              </ComboboxText>
            ) : (
              filteredUsers.map((user) => (
                <ComboboxOption key={user.id} value={user}>
                  <UserDetailOptionDisp user={user} />
                </ComboboxOption>
              ))
            )}
          </ComboboxOptions>
          {selected && selected.length > 0 ? (
            <div className="mt-2 !overflow-auto h-64">
              <UserDetailSideDisp
                value={selected}
                onChangeTrackValue={setSelected}
              />
            </div>
          ) : (
            <div className="absolute inset-[30%] whitespace-nowrap text-sm text-gray-400">
              Chưa chọn thành viên
            </div>
          )}
        </Combobox>
      </div>
      <div className="flex justify-between -ml-2 px-6 py-4 shadow-2xl shadow-top bg-violet-100 fixed bottom-0 w-full">
        {/* {errorMessage && (
        <div className="text-red-500 text-end px-4">{errorMessage}</div>
      )}  */}
        <button onClick={closeModal} className="">
          Hủy
        </button>
        <button
          onClick={() => {
            setIsShowModalConfirm(true);
          }}
          className=""
        >
          Thêm
        </button>
      </div>
      <ConfirmAddUser
        isOpen={isShowModalConfirm}
        closeModal={() => {
          // closeModal();
          setIsShowModalConfirm(false);
        }}
        selected={selected}
      />
    </div>
  );
};

export default SeclectUser;
