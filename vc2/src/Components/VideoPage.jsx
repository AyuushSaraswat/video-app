import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const VideoPage = () => {
  const { id } = useParams();
  const roomID = id;
  
  let myMeeting = async (element) => {

    // generate Kit Token
    const appID = 320497812 ;
    const serverSecret = "65557d0f36efccc1ad713e5fde864124";
    const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Ayush");
   
    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    
    // start the call
    zp.joinRoom({
           container: element,
           sharedLinks: [
             {
               name: 'Copy link',
               url:
                window.location.protocol + '//' + 
                window.location.host + window.location.pathname +
                 '?roomID=' +
                 roomID,
             },
           ],
           scenario: {
            mode: ZegoUIKitPrebuilt.VideoConference,
           },
      });
     };
   
     return (
       <div
         className="myCallContainer"
          ref={myMeeting}
         style={{ width: '100vw', height: '100vh' }}
       ></div>
     );
   }


   export default VideoPage;