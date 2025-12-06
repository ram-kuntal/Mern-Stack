import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Codenator's</span>
        <span className="headerTitleLg" >Blog</span>
      </div>
      <img
        className="headerImg"
        src="/a.jpeg"
        alt=""
      />
    </div>
  );
}
