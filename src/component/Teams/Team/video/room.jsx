import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useLoginForm } from "../../../../api/login-api";
import "./room.css";

const Room = () => {
  const { roomId } = useParams();
  const { userLogin } = useLoginForm();
  const containerRef = useRef(null);

  useEffect(() => {
    if (userLogin && userLogin.fullname && containerRef.current) {
      const myMeeting = async (element) => {
        const appId = 20773281;
        const serverSecret = "eceff65cba623b3ea1641332668d5a96";
        try {
          const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appId,
            serverSecret,
            roomId,
            Date.now().toString(),
            `${userLogin.fullname}`
          );
          const zc = ZegoUIKitPrebuilt.create(kitToken);
          console.log("Joining room with kitToken:", kitToken);
          zc.joinRoom({
            container: element,
            sharedLinks: [
              {
                name: "Copy Link",
                url: `http://localhost:3000/room/${roomId}`,
              },
            ],
            scenario: {
              mode: ZegoUIKitPrebuilt.GroupCall, 
            },
            showScreenSharingButton: true,
          });

          const callRecord = {
            roomId: roomId,
            caller: userLogin.fullname,
            startTime: new Date().toISOString(),
          };
          saveCallRecord(callRecord);
        } catch (error) {
          console.error("Error generating kit token or joining room:", error);
        }
      };

      myMeeting(containerRef.current);
    }
  }, [userLogin, roomId]);

  // Hàm để gửi record cuộc gọi lên Zego
  const saveCallRecord = async (callRecord) => {
    try {
      // Gửi record lên API của Zego để lưu
      const response = await fetch("wss://webliveroom20773281-api.coolzcloud.com/ws", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(callRecord),
      });

      if (response.ok) {
        console.log("Call record saved successfully:", callRecord);
      } else {
        console.error("Failed to save call record:", response.statusText);
      }
    } catch (error) {
      console.error("Error saving call record:", error);
    }
  };

  return (
    <div className="zego">
      <div ref={containerRef} className="h-screen"></div>
    </div>
  );
};

export default Room;
