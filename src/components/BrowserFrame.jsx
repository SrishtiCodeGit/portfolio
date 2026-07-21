import './BrowserFrame.css';

export default function BrowserFrame({ domain, image, children }) {
  return (
    <div className="browser-frame">
      <div className="browser-frame__bar">
        <span className="browser-frame__dot browser-frame__dot--red" />
        <span className="browser-frame__dot browser-frame__dot--yellow" />
        <span className="browser-frame__dot browser-frame__dot--green" />
        {domain && <span className="browser-frame__url">{domain}</span>}
      </div>
      <div className="browser-frame__body">
        {image ? <img src={image} alt="" className="browser-frame__img" /> : children}
      </div>
    </div>
  );
}
