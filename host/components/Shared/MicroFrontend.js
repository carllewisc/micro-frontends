import { useEffect } from "react";

function MicroFrontend({ name, host, messages }) {
  useEffect(() => {
    const scriptId = `micro-frontend-script-${name}`;

    const renderMicroFrontend = () => {
      window[`render${name}`](`${name}-container`, {messages});
    };
    
    if (document.getElementById(scriptId)) {
      renderMicroFrontend();
      return;
    }
    
    fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        const script = document.createElement("script");
        script.id = scriptId;
        script.crossOrigin = "";
        script.src = `${host}${manifest.files["main.js"]}`;
        script.onload = () => {
          renderMicroFrontend();
        };
        document.head.appendChild(script);
      });

    // TODO:
    // return () => {
    //   window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`);
    // };
  }, []);

  return <section id={`${name}-container`} />;
}

export default MicroFrontend;
