// Importing
import React from "react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

//Start a functional Component and receive the props
export default function Quotes(props) {
  const shareurl="https://anime-quoter.netlify.app";
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
                <a href="/" className="text-green-400 inline-flex items-center">
                  <ion-icon
                    className="mx-3"
                    name="share-social-outline"
                  ></ion-icon>{" "}
                  Share this Quote Via &nbsp;
                </a>
                  <EmailShareButton className="mx-1" url={shareurl} subject="Read this awesome quote from Animes on AnimeQuoter" body={props.quotes+"\n -By " + props.character+ "\n From- "+props.animeName+"\n Find more Quotes on AnimeQuoter"}>
                  <EmailIcon size={35} round={true} />
                  </EmailShareButton>
                  <FacebookShareButton className="mx-1" url={shareurl} quote={"Read this awesome quote from Animes on AnimeQuoter-  \n" + props.quotes+"\n -By " + props.character+ "\n From- "+props.animeName} >
                  <FacebookIcon size={35} round={true} />
                  </FacebookShareButton>
                  <TwitterShareButton className="mx-1" url={shareurl} title={"Read this awesome quote from Animes on AnimeQuoter-  \n" + props.quotes+"\n -By " + props.character+ "\n From- "+props.animeName} via={"skyrunner360"} hashtags={["Animequoter","Animechan","Anime","Quotes","ReactApp"]} related={["@skyrunner360"]}>
                    <TwitterIcon size={35} round={true} />
                  </TwitterShareButton>
                  <LinkedinShareButton className="mx-1" url={shareurl} title={"Read this awesome quote from Animes on AnimeQuoter-  \n" + props.quotes+"\n -By " + props.character+ "\n From- "+props.animeName} summary="Anime-Quoter is a React App to give you quotes from Animes you already love" source={shareurl}>
                    <LinkedinIcon size={35} round={true} />
                  </LinkedinShareButton>
                  <RedditShareButton className="mx-1" url={shareurl} title={"Read this awesome quote from Animes on AnimeQuoter-  \n" + props.quotes+"\n -By " + props.character+ "\n From- "+props.animeName}>
                    <RedditIcon size={35} round={true} />
                  </RedditShareButton>
                  <WhatsappShareButton className="mx-1" url={shareurl} title={"Read this awesome quote from Animes on AnimeQuoter-  \n" + props.quotes+"\n -By " + props.character+ "\n From- "+props.animeName}>
                    <WhatsappIcon size={35} round={true} />
                  </WhatsappShareButton>
                  <TelegramShareButton className="mx-1" url={shareurl} title={"Read this awesome quote from Animes on AnimeQuoter-  \n" + props.quotes+"\n -By " + props.character+ "\n From- "+props.animeName}>
                    <TelegramIcon size={35} round={true} />
                  </TelegramShareButton>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
