// import { SubmitHandler, useForm, UseFormReset } from "react-hook-form";
// import { emailRegex, passwordRegex, phoneRegex } from "../../../hooks/regex";

// export const useUserCreate = ({ closeModal }) => {
//   const {formCreate, register} = useForm();
//   formCreate.register("phone", {
//     pattern: {
//       value: phoneRegex,
//       message: `Nhập chưa đúng định dạng số điện thoại`,
//     },
//   });
//   formCreate.register("email", {
//     required: `Trường này bắt buộc`,
//     pattern: {
//       value: emailRegex,
//       message: `Nhập chưa đúng định dạng email`,
//     },
//   });
//   formCreate.register("password", {
//     pattern: {
//       value: passwordRegex,
//       message: `Ít nhất 9 kí tự bao gồm chữ hoa, chữ thường, số và kí tự đặc biệt`,
//     },
//   });
//   formCreate.register("fullname", {
//     required: `Trường này bắt buộc`,
//     maxLength: { value: 100, message: `Tên hiển thị tối đa 100 kí tự` },
//     pattern: {
//       value: /.{3,}/,

//       message: `Tên hiển thị tối thiểu 3 kí tự`,
//     },
//   });
//   return (
//     formCreate,
//     register
//   )
// };
