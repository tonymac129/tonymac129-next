import { MdEmail } from "react-icons/md";
import {
  FaDiscord,
  FaReddit,
  FaTiktok,
  FaYoutube,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

function Footer() {
  return (
    <div className="border-t-2 border-zinc-800 flex flex-col items-center gap-y-5 py-15 px-5">
      <span className="text-sm text-zinc-400 text-center">
        Made with ❤️ and too many all nighters
      </span>
      <span className="text-sm text-zinc-400 text-center">
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://github.com/tonymac129"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          TonyMac129
        </a>
      </span>
      <div className="text-zinc-400 flex flex-wrap justify-center gap-x-7 gap-y-5 mt-5">
        <a href="mailto:yo@tonymac.net">
          <MdEmail size={25} className="cursor-pointer" />
        </a>
        <a href="https://discord.com/users/1068681362590146611" target="_blank">
          <FaDiscord size={25} className="cursor-pointer" />
        </a>
        <a href="https://github.com/tonymac129" target="_blank">
          <SiGithub size={25} className="cursor-pointer" />
        </a>
        <a href="https://reddit.com/u/tonymac129" target="_blank">
          <FaReddit size={25} className="cursor-pointer" />
        </a>
        <a href="https://tiktok.com/@tonymac129" target="_blank">
          <FaTiktok size={25} className="cursor-pointer" />
        </a>
        <a href="https://youtube.com/@tonymac129" target="_blank">
          <FaYoutube size={25} className="cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/tonymac129" target="_blank">
          <FaInstagram size={25} className="cursor-pointer" />
        </a>
        <a href="https://x.com/tonymac129" target="_blank">
          <FaXTwitter size={25} className="cursor-pointer" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100090236006126"
          target="_blank"
        >
          <FaFacebook size={25} className="cursor-pointer" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
