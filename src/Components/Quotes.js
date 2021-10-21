// Importing
import React from "react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";

//Start a functional Component and receive the props
export default function Quotes(props) {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="px-5 py-24 mx-auto">
          <div className="flex d-flex justify-content-center flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                  {props.character} 
                  {/* Set Character Props here */}
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                  {props.animeName}
                  {/* Set AnimeName props here */}
                </h1>
                <p className="leading-relaxed mb-3">
                  {props.quotes}
                  {/* Set Quotes props here */}
                </p>
                <a href="#" className="text-green-400 inline-flex items-center">
                  {" "}
                  <ion-icon
                    className="mx-3"
                    name="share-social-outline"
                  ></ion-icon>{" "}
                  Share via &nbsp;
                </a>
                  <EmailShareButton openShareDialogOnClick url="https://localhoast:3000" subject="Read this awesome quote from Animes on AnimeQuoter" body={props.quotes+"\n -By " + props.character+ "\n From- "+props.animeName+"\n Find more Quotes on AnimeQuoter"}>
                  <EmailIcon size={35} round={true}/>
                  </EmailShareButton>
                  <FacebookShareButton url="https://www.google.com" quote={"Read this awesome quote from Animes on AnimeQuoter  \n" + props.quotes+"\n -By " + props.character+ "\n From- "+props.animeName} openShareDialogOnClick>
                  <FacebookIcon size={35} round={true}/>
                  </FacebookShareButton>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <ion-icon
                    className="mx-3"
                    name="share-social-outline"
                  >
                    </ion-icon>5
                    <FacebookShareCount url="https://www.google.com">
                    {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
                    </FacebookShareCount>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
