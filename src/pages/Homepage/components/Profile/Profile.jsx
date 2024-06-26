import "./Profile.style.scss";
import photo from "../../../../assets/images/IMG_0419.JPG";

const data = {
  textpath:
    "HTML • CSS • jQuery • JavaScript • React • Vue • HTML • CSS • jQuery • JavaScript • React • Vue • HTML • CSS • jQuery • JavaScript • React • Vue • HTML • CSS • jQuery • JavaScript • React • Vue ",
  footersbj:
    "IMPOSSIBLE IS NOTING · IMPOSSIBLE IS NOTING · IMPOSSIBLE IS NOTING · IMPOSSIBLE IS NOTING · IMPOSSIBLE IS NOTING · IMPOSSIBLE IS NOTING · IMPOSSIBLE IS NOTING ·",
  footerdesc: "더 좋은 결과를 위해 계속 수정 중에 있습니다",
  info: {
    name: "Gwak Sunah",
    email: "hellojoyworldz@gmail.com",
    phone: "+82 10-9783-6375",
    portfolio: "hellojoyworldz.github.io/myPORTFOLIO",
    github: "github.com/hellojoyworldz",
    blog: "hellojoyworldz.tistory.com",
  },
};

const Profile = ({ bgcolor }) => {
  return (
    <>
      <section className="mainProfile" data-bgcolor={bgcolor}>
        <svg
          className="mainProfile__svg"
          width="1440"
          height="539"
          viewBox="0 0 1440 539"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-17.4829 15.9294C297.2 -24.1211 339.25 187.141 393.211 351.93C447.171 516.719 617.113 575.553 790.539 486.617C963.965 397.68 1095.42 189.366 1488.7 319.17"
            stroke="#FF7896"
            strokeWidth="50"
            id="text-path"
          ></path>
          <text dy="1.5%" y="15px">
            <textPath
              xlinkHref="#text-path"
              fill="currentColor"
              startOffset="-197.5816"
            >
              {data.textpath}
              <animate
                attributeName="startOffset"
                begint="0"
                dur="20s"
                from="0"
                to="-1024"
                repeatCount="indefinite"
              />
            </textPath>
          </text>
        </svg>
        {photo && (
          <span className="mainProfile__thumb">
            <img src={photo} alt="" />
          </span>
        )}

        <footer className="footer" data-bgcolor="#ff7896">
          <h2 className="screenHide">CONTACT ME</h2>
          <address className="footer__info">
            {data.footerdesc && (
              <div className="footer__desc">{data.footerdesc}</div>
            )}
            <ul className="list">
              {data.info.name && (
                <li className="list__item">
                  <strong className="list__tit">Name</strong>
                  {data.info.name}
                </li>
              )}
              {data.info.email && (
                <li className="list__item">
                  <strong className="list__tit">E-mail</strong>
                  <a href={data.info.email}>{data.info.email}</a>
                </li>
              )}
              {data.info.phone && (
                <li className="list__item">
                  <strong className="list__tit">Phone</strong>
                  <a href={`SMS:${data.info.phone}`}>{data.info.phone}</a>
                </li>
              )}
              {data.info.portfolio && (
                <li className="list__item">
                  <strong className="list__tit">Portfolio</strong>
                  <a href={data.info.portfolio}>{data.info.portfolio}</a>
                </li>
              )}
              {data.info.github && (
                <li className="list__item">
                  <strong className="list__tit">Git-Hub</strong>
                  <a href={data.info.github} target="_blank">
                    {data.info.github}
                  </a>
                </li>
              )}
              {data.info.blog && (
                <li className="list__item">
                  <strong className="list__tit">Blog</strong>
                  <a href={data.info.blog} target="_blank">
                    {data.info.blog}
                  </a>
                </li>
              )}
            </ul>
          </address>
          <span className="footer__sbj">{data.footersbj}</span>
        </footer>
      </section>
    </>
  );
};

export default Profile;
