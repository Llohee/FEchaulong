import { Combobox } from "@headlessui/react";
import { cx } from "class-variance-authority";
import React, { ChangeEvent } from "react";
import produce from "immer";
import Avatar from "../avatar/avatar";

export const ComboboxButton = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <Combobox.Button
      ref={ref}
      className={cx(
        "absolute inset-y-0 right-0 flex items-center pr-4",
        className
      )}
      {...props}
    >
      {children ?? (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.60698 5.77847C3.35391 5.5465 2.94912 5.5465 2.69605 5.77847C2.43465 6.0181 2.43465 6.41311 2.69605 6.65273L7.54454 11.0972C7.7976 11.3292 8.2024 11.3292 8.45546 11.0972L13.3039 6.65273C13.5654 6.41311 13.5654 6.0181 13.3039 5.77847C13.0509 5.5465 12.6461 5.5465 12.393 5.77847L8 9.80541L3.60698 5.77847Z"
            fill="#00204D"
            fillOpacity="0.6"
          />
        </svg>
      )}
    </Combobox.Button>
  )
);

export const ComboboxOptions = React.forwardRef(
  ({ className, ...props }, ref) => (
    <Combobox.Options
      ref={ref}
      className={cx(
        "bg-slate-100 absolute z-50 my-3 max-h-56 w-full list-none overflow-auto rounded-lg py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
        className
      )}
      {...props}
    />
  )
);

export const ComboboxText = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cx(
      "text-center py-4 text-body-2 text-black",
      className
    )}
    {...props}
  />
));

export const ComboboxOption = React.forwardRef(
  ({ className, ...props }, ref) => (
    <Combobox.Option
      ref={ref}
      className={cx(
        "cursor-pointer select-none px-4 py-3 ui-active:bg-slate-200 ui-selected:bg-slate-200",
        className
      )}
      {...props}
    />
  )
);

export const UserDetailOptionDisp = ({ user }) => {
  return (
    <div className="flex gap-3 justify-between items-center grow">
      <div className="flex gap-3 items-center">
        <Avatar name={user.fullname ?? ""} />
        <div>
          <div className="text-lg">
            {user.fullname}
          </div>
          <div className="text-base">
            {user.email}
          </div>
        </div>
      </div>
      <span className="items-center pl-3 hidden ui-selected:flex">
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.4879 4.21364C14.7245 4.45033 14.7245 4.83406 14.4879 5.07074L6.60907 12.9495C6.37238 13.1862 5.98865 13.1862 5.75197 12.9495L1.50954 8.70711C1.27286 8.47043 1.27286 8.08669 1.50954 7.85001C1.74622 7.61333 2.12996 7.61333 2.36664 7.85001L6.18052 11.6639L13.6308 4.21364C13.8674 3.97696 14.2512 3.97696 14.4879 4.21364Z"
            fill="#00204D"
            fillOpacity="0.6"
          />
        </svg>
      </span>
    </div>
  );
};

export const UserDetailSideDisp = ({ value, onChangeTrackValue }) => {
  return (
    <div className="flex flex-col bg-grey-1 rounded-lg border border-border-2 mt-3">
      {value.map((val, index) => (
        <div
          key={val.id}
          className="flex gap-3 items-center px-4 py-3 hover:bg-white group first:rounded-t-lg last:rounded-b-lg cursor-pointer"
        >
          <div className="flex gap-3 justify-between items-center grow">
            <div className="flex gap-3 items-center">
              <Avatar name={val.fullname ?? ""} />
              <div>
                <div className="text-label-4 text-typography-label">
                  {val.fullname}
                </div>
                <div className="text-subtitle-4 text-typography-subtitle">
                  {val.email}
                </div>
              </div>
            </div>
            {onChangeTrackValue && (
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 hidden group-hover:block"
                onClick={() => {
                  onChangeTrackValue(
                    produce(value, (draftState) => {
                      let index = draftState.findIndex(
                        (member) => val.id === member.id
                      );
                      if (index >= 0) {
                        draftState.splice(index, 1);
                      }
                    })
                  );
                }}
              >
                <path
                  d="M4.35549 17.1021C4.39465 17.6269 4.63035 18.1176 5.01552 18.4763C5.40069 18.8349 5.90697 19.0351 6.43326 19.0368H13.5694C14.0957 19.0351 14.6019 18.8349 14.9871 18.4763C15.3723 18.1176 15.608 17.6269 15.6472 17.1021L16.3027 7.92567H3.69993L4.35549 17.1021Z"
                  fill="#00204D"
                  fillOpacity="0.6"
                />
                <path
                  d="M17.6402 5.1479H13.4735V3.06456C13.4735 2.88038 13.4004 2.70375 13.2701 2.57352C13.1399 2.44328 12.9633 2.37012 12.7791 2.37012H7.22352C7.03935 2.37012 6.86271 2.44328 6.73248 2.57352C6.60224 2.70375 6.52908 2.88038 6.52908 3.06456V5.1479H2.36241C2.17824 5.1479 2.0016 5.22106 1.87137 5.35129C1.74113 5.48153 1.66797 5.65816 1.66797 5.84234C1.66797 6.02652 1.74113 6.20315 1.87137 6.33339C2.0016 6.46362 2.17824 6.53678 2.36241 6.53678H17.6402C17.8244 6.53678 18.001 6.46362 18.1312 6.33339C18.2615 6.20315 18.3346 6.02652 18.3346 5.84234C18.3346 5.65816 18.2615 5.48153 18.1312 5.35129C18.001 5.22106 17.8244 5.1479 17.6402 5.1479ZM7.91797 3.75901H12.0846V5.1479H7.91797V3.75901Z"
                  fill="#00204D"
                  fillOpacity="0.6"
                />
              </svg>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
