import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { motion } from "framer-motion";

export const ConfirmModal = (props) => {
  return (
    <>
      <Transition
        appear={props.appear ?? true}
        show={props.isOpen}
        as={Fragment}
      >
        <Dialog
          as="div"
          className="relative z-[2000] "
          onClose={props.closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-1 flex flex-col gap-3 items-center justify-center p-4 text-center">
            <button
              type="button"
              className="flex justify-center bg-white rounded-full p-3 hover:bg-grey-3 items-center gap-1.5 whitespace-nowrap overflow-hidden tracking-wide transition-all duration-200 transform focus:outline-none active:focus:duration-0 disabled:cursor-not-allowed"
              // onClick={props.closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                // className="animate-[spin_500ms_ease-in-out]"
              >
                <path
                  d="M6.96306 6.0013L11.7995 0.402376C11.8805 0.309329 11.8124 0.167969 11.6871 0.167969H10.2168C10.1302 0.167969 10.0473 0.205545 9.9902 0.269963L6.0013 4.88832L2.01241 0.269963C1.95713 0.205545 1.87422 0.167969 1.78578 0.167969H0.315512C0.190226 0.167969 0.122055 0.309329 0.203123 0.402376L5.03955 6.0013L0.203123 11.6002C0.184963 11.621 0.173313 11.6463 0.169555 11.6733C0.165797 11.7003 0.170089 11.7277 0.181922 11.7524C0.193756 11.7771 0.212633 11.798 0.236313 11.8125C0.259992 11.8271 0.28748 11.8348 0.315512 11.8346H1.78578C1.87238 11.8346 1.95529 11.7971 2.01241 11.7326L6.0013 7.11429L9.9902 11.7326C10.0455 11.7971 10.1284 11.8346 10.2168 11.8346H11.6871C11.8124 11.8346 11.8805 11.6933 11.7995 11.6002L6.96306 6.0013Z"
                  fill="#262626"
                />
              </svg>
            </button>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[410px] transform overflow-hidden rounded-2xl bg-white p-0 text-left align-middle shadow-xl">
                <div className="w-full max-h-[calc(100vh-10rem)] overflow-auto">
                  <div className="flex flex-col justify-center items-center text-center p-6 gap-6">
                    <div className="flex flex-col gap-5 max-w-xs">
                      <div
                        className={`p-3.5 ${
                          props.type === "Info"
                            ? "bg-primary-background"
                            : "bg-warning-background"
                        } rounded-full w-fit mx-auto`}
                      >
                        <span className="relative flex w-12 h-12">
                          <motion.span
                            animate="ring"
                            className={`absolute inline-flex h-full w-full rounded-full  opacity-75 ${
                              props.type === "Info"
                                ? "bg-info-border"
                                : "bg-error-border"
                            } `}
                          ></motion.span>
                          {props.type === "Info" ? (
                            <motion.svg
                              animate="scaleSpring"
                              width="100%"
                              height="46"
                              viewBox="0 0 38 38"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="relative inline-flex w-12 h-12"
                            >
                              <path
                                d="M19 0.25C15.2916 0.25 11.6665 1.34967 8.58305 3.40994C5.49963 5.47022 3.0964 8.39857 1.67726 11.8247C0.258115 15.2508 -0.113198 19.0208 0.610275 22.6579C1.33375 26.2951 3.11951 29.636 5.74175 32.2582C8.36398 34.8805 11.7049 36.6662 15.3421 37.3897C18.9792 38.1132 22.7492 37.7419 26.1753 36.3227C29.6014 34.9036 32.5298 32.5004 34.59 29.4169C36.6503 26.3335 37.75 22.7084 37.75 19C37.7446 14.0288 35.7674 9.26283 32.2523 5.74768C28.7372 2.23254 23.9712 0.255377 19 0.25V0.25ZM20.6062 29.5062H17.3797V15.875H20.6062V29.5062ZM20.3391 11.5922C20.161 11.7553 19.9519 11.8809 19.7243 11.9615C19.4966 12.042 19.2551 12.0758 19.0141 12.0609C18.7686 12.0773 18.5224 12.0442 18.29 11.9637C18.0576 11.8832 17.8437 11.7568 17.6609 11.5922C17.4995 11.4184 17.3748 11.2138 17.2943 10.9907C17.2137 10.7676 17.179 10.5306 17.1922 10.2937C17.1758 10.0514 17.209 9.80828 17.2895 9.57916C17.3701 9.35003 17.4965 9.13969 17.6609 8.96094C17.8442 8.79702 18.0581 8.67117 18.2904 8.5907C18.5227 8.51023 18.7687 8.47674 19.0141 8.49219C19.255 8.47817 19.4963 8.51241 19.7238 8.5929C19.9514 8.6734 20.1605 8.79852 20.3391 8.96094C20.5035 9.13969 20.6299 9.35003 20.7104 9.57916C20.791 9.80828 20.8242 10.0514 20.8078 10.2937C20.821 10.5306 20.7863 10.7676 20.7057 10.9907C20.6252 11.2138 20.5005 11.4184 20.3391 11.5922Z"
                                fill="#366AE2"
                              />
                            </motion.svg>
                          ) : (
                            <motion.svg
                              animate="trashCan"
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="46"
                              viewBox="0 0 46 46"
                              fill="none"
                              className="relative inline-flex w-12 h-12"
                            >
                              <path
                                d="M10.586 37.0199C10.6741 38.2008 11.2044 39.305 12.0711 40.1119C12.9377 40.9189 14.0768 41.3692 15.261 41.373H31.3172C32.5014 41.3692 33.6405 40.9189 34.5071 40.1119C35.3738 39.305 35.9041 38.2008 35.9922 37.0199L37.4672 16.373H9.11098L10.586 37.0199Z"
                                fill="#E14337"
                              />
                              <motion.path
                                animate="trashLid"
                                d="M40.4766 10.123H31.1016V5.43555C31.1016 5.02115 30.9369 4.62372 30.6439 4.33069C30.3509 4.03767 29.9535 3.87305 29.5391 3.87305H17.0391C16.6247 3.87305 16.2272 4.03767 15.9342 4.33069C15.6412 4.62372 15.4766 5.02115 15.4766 5.43555V10.123H6.10156C5.68716 10.123 5.28973 10.2877 4.99671 10.5807C4.70368 10.8737 4.53906 11.2711 4.53906 11.6855C4.53906 12.0999 4.70368 12.4974 4.99671 12.7904C5.28973 13.0834 5.68716 13.248 6.10156 13.248H40.4766C40.891 13.248 41.2884 13.0834 41.5814 12.7904C41.8744 12.4974 42.0391 12.0999 42.0391 11.6855C42.0391 11.2711 41.8744 10.8737 41.5814 10.5807C41.2884 10.2877 40.891 10.123 40.4766 10.123ZM18.6016 6.99805H27.9766V10.123H18.6016V6.99805Z"
                                fill="#E14337"
                              />
                            </motion.svg>
                          )}
                        </span>
                      </div>
                      <div className="text-center">
                        <div className="text-xl text-[#00204D] mb-2">
                          {props.title}
                        </div>
                        <div className="text-sm text-[#00204Dcc]">
                          {props.description ?? ""}
                        </div>
                      </div>
                    </div>
                    <div className="w-full grid grid-cols-2 gap-2">
                      <button
                        className="bg-[#F2F5F8] shadow-[#F2F5F8] enabled:hover:bg-grey-4 enabled:active:bg-grey-5  border-grey-3 enabled:hover:border-primary-hover enabled:active:border-primary-pressed text-typography-subtitle enabled:hover:text-primary-hover enabled:active:text-primary-pressed enabled:hover:fill-primary-hover enabled:active:fill-primary-pressed enabled:hover:stroke-primary-hover enabled:active:stroke-primary-pressed text-base px-[20px] py-[9px] rounded-lg"
                        fullWidth
                        onClick={() => props.closeModal(false)}
                      >
                        Hủy
                      </button>
                      <button
                        className={`${
                          props.type === "Info"
                            ? "bg-[#366AE2] shadow-[#366AE2] enabled:hover:bg-primary-hover enabled:active:bg-primary-pressed  border-primary-base enabled:hover:border-primary-hover enabled:active:border-primary-pressed text-primary-base enabled:hover:text-primary-hover enabled:active:text-primary-pressed fill-primary-base enabled:hover:fill-primary-hover enabled:active:fill-primary-pressed stroke-primary-base enabled:hover:stroke-primary-hover enabled:active:stroke-primary-pressed text-base px-[20px] py-[9px] rounded-lg"
                            : "bg-[#E14337] shadow-[#E14337] enabled:hover:bg-error-hover enabled:active:bg-error-pressed border-error-base enabled:hover:border-error-hover enabled:active:border-error-pressed text-error-base enabled:hover:text-error-hover enabled:active:text-error-pressed fill-error-base enabled:hover:fill-error-hover enabled:active:fill-error-pressed stroke-error-base enabled:hover:stroke-error-hover enabled:active:stroke-error-pressed text-base px-[20px] py-[9px] rounded-lg"
                        }`}
                        // intent={props.type === "Info" ? "primary" : "error"}
                        type={"submit"}
                        fullWidth
                        onClick={props.action}
                      >
                        {props.type === "Info" ? "Xác nhận" : "Xóa"}
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
