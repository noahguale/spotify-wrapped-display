import cx from "clsx";
import Link from "next/link";
import {Github} from "./Github";
import {LinkedinIcon} from "./LinkedinIcon";
import {Logo} from "./Logo";

export const FOCUS_VISIBLE_OUTLINE = `focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1DB954]`;
export const LINK_SUBTLE_STYLES = `hover:underline hover:decoration-[#1DB954] hover:underline-offset-2 hover:text-[#1DB954]`;

export const Footer = () => {
  return (
    <footer className="mt-10 pb-36 text-base ">
      <div className="text-gray-300">

        
      </div>

      <p className="flex items-center justify-center text-gray-500 text-sm mt-2">
        Built with
        <Link 
          href="https://www.remotion.dev/" 
          className={cx("ml-1", LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}>
            Remotion
        </Link>
      </p>



      <div className="flex flex-col mt-4 items-center justify-center font-medium lg:flex-row ">
          <div className="flex space-x-4 items-center">


             <Link
              href="https://www.guale.io/"
              className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
            >
              <Logo className="text-gray-300 w-[16px]" />
            </Link>

            <Link
              href="https://github.com/noahguale"
              className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
            >
              <Github className="text-gray-300 w-[18px]" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/noahguale/"
              className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
            >
              <LinkedinIcon className="text-gray-300 w-[18px]" />
            </Link>

          </div>
        </div>


        <p className="flex items-center justify-center text-[#1DB954] text-sm mt-2">
            <Link 
            href="https://github.com/noahguale/spotify-wrapped" 
            className={cx("ml-1", LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}>
                Source Code
            </Link>
      </p>

    </footer>
  );
};
