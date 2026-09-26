import React from "react";
import WhyChooseimg from "./WhyChooseimg";
import WhychooseContent from "./WhychooseContent";
import Settingimg from "./Settingimg";
import SettingContent from "./SettingContent";
import CommentContent from "./CommentContent";
import GiftContent from "./GiftContent";
import LoveContent from "./LoveContent";
import Commentimg from "./Commentimg";
import Giftimg from "./Giftimg";
import Loveimg from "./Loveimg";


function WhychooseSection(){
    return(
        <>
        <div className="container py-5">
            <div className="row align-items-center">
        <div className="col-md-4">
            <WhyChooseimg/>
        </div>
        <div className="col-md-8">
            <WhychooseContent/>
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-2">
                           <Settingimg/>
                        </div>
                        <div className="col-md-10">
                           <SettingContent/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-2">
                            <Commentimg/>
                        </div>
                        <div className="col-md-10">
                             <CommentContent/>
                        </div>
                    </div>
                </div>
            </div>
             <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-2">
                            <Giftimg/>
                        </div>
                        <div className="col-md-10">
                            <GiftContent/>
                        </div>
                    </div>
                </div>
                 <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-2">
                            <Loveimg/>
                        </div>
                        <div className="col-md-10">
                               <LoveContent/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
             </div>
        </div>
        </>
    )
}
export default WhychooseSection