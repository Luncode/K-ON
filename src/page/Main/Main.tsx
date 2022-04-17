/* eslint-disable jsx-a11y/iframe-has-title */
import OneTalk from "../../compoment/OneTalk/OneTalk";
import Recommended from "../../compoment/Recommended/Recommended";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import "./Main.scss";
import WebsiteShare from "../../compoment/WebsiteShare/WebsiteShare";
import httLogo from "../../assets/htt_logo.jpg";
import { observer } from "mobx-react";
import { useState } from "react";
import Kcard from "../../compoment/Kcard/Kcard";
import Hirasawa_yui from "../../assets/k-on/Hirasawa_yui_.jpg";
import Akiyama_Mio from "../../assets/k-on/Akiyama_Mio.jpg";
import Tainaka_Ritsu from "../../assets/k-on/Tainaka_Ritsu.jpg";
import TSUMUGI from "../../assets/k-on/TSUMUGI.jpg";
import Nakano_Azusa from "../../assets/k-on/Nakano_Azusa.jpg";
interface IProps {
  change?: () => void;
}
const Main = observer((props: IProps) => {
  const [count, setCount] = useState<number>(0);
  const KcardlIST = [
    {
      title:
        "平泽唯（日语：平沢 唯（ひらさわ ゆい））是kakifly创作的漫画《轻音少女》及其衍生作品的主人公。",
      img: Hirasawa_yui,
      context:
        "樱丘高中轻音部的吉他手兼主唱，天然呆，拥有名为绝对音感的特殊能力。最初错把轻音乐当成轻便、简易的音乐而加入了轻音部。",
    },
    {
      title:
        "秋山 澪（líng）（日语：秋山 澪（あきやま みお））是kakifly创作的漫画《轻音少女》及其衍生作品的登场角色。",
      img: Akiyama_Mio,
      context:
        "轻音部的电贝斯手及合唱（有时也会担任主唱）。是一个左撇子，丹凤眼，有着到腰长度的黑发。是轻音部中唯一有后援会的部员。",
    },
    {
      title:
        "田井中律（日语：田井中 律（たいなか りつ））是kakifly创作的漫画《轻音少女》及其衍生作品的登场角色。",
      img: Tainaka_Ritsu,
      context: "樱丘高中轻音部的部长兼鼓手，作品中第一个决定加入轻音部。",
    },
    {
      title:
        "琴吹䌷（chōu）（日语：琴吹 紬（ことぶき つむぎ））是kakifly创作的漫画《轻音少女》及其衍生作品的登场角色。",
      img: TSUMUGI,
      context:
        "樱丘高中轻音部的键盘手，作品中被田井中律和秋山澪拉入轻音部（本来想加入合唱团）。",
    },
    {
      title:
        "中野梓（日语：中野（なかの） 梓（あずさ））是kakifly创作的漫画《轻音少女》及其衍生的动画、游戏等作品的登场角色，昵称“梓喵（あずにゃん）”。",
      img: Nakano_Azusa,
      context:
        "中野梓是故事开始后的第二年轻音部新加入的成员，与忧在同一班级。在新生欢迎会上看过轻音部的演出后，被唯等人的演奏感动憧憬而加入了轻音部。",
    },
  ];
  return (
    <div className="context">
      <div className="topBar">
        <OneTalk />
      </div>
      <div className="webContext">
        <div style={{ display: "flex" }}>
          <div>
            <Recommended />
          </div>
          <div className="detail">
            <div className="title">
              <span>
                <LaptopChromebookIcon />
              </span>
              常用网站
            </div>
            <WebsiteShare />
          </div>
        </div>
      </div>
      <div className="HTTList">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={httLogo} alt="" />
          <span style={{ margin: "0 5px" }}>轻音少女(K-ON)</span>
        </div>
        <div className="kon-List">
            {
                KcardlIST.map(item => (
                    <Kcard title={item.title} img={item.img} context={item.context} />
                ))
            }
        </div>
      </div>
    </div>
  );
});

export default Main;
