import React, { useState } from "react";
import { ZIMKitManager, Common } from "@zegocloud/zimkit-react";
import "@zegocloud/zimkit-react/index.css";
import { useEffect } from "react";
import { useLoginForm } from "../../api/login-api";
import Avatar from "../../ui/avatar/avatar";
const Chat = () => {
  const { userLogin } = useLoginForm();
  console.log(userLogin._id);
  const [state, setState] = useState({
    appConfig: {
      appID: 1619525991,
      serverSecret: "0533594fd8ac6f92c5bf4437072beaa6",
    },
    userInfo: {
      userID: `${userLogin._id}`,
      userName: `${userLogin.fullname}`,
      userAvatarUrl: `${userLogin.avatar}` || (
        <Avatar name={userLogin.fullname} />
      ),
    },
  });
  // useEffect(() => {
  //   if (userLogin) {
  //     setState((prevState) => ({
  //       ...prevState,
  //       userInfo: {
  //         userID: userLogin._id,
  //         userName: userLogin.fullname,
  //         userAvatarUrl: userLogin.avatarUrl || (
  //           <Avatar name={userLogin.fullname} />
  //         ),
  //       },
  //     }));
  //   }
  // }, [userLogin]);

  useEffect(() => {
    const init = async () => {
      const zimKit = new ZIMKitManager();
      const token = zimKit.generateKitTokenForTest(
        state.appConfig.appID,
        state.appConfig.serverSecret,
        state.userInfo.userID
      );
      await zimKit.init(state.appConfig.appID);
      await zimKit.connectUser(state.userInfo, token);
    };
    init();
  }, []);
  return (
    <div className="sub_container">
      Chat <Common></Common>
    </div>
  );
};

export default Chat;
