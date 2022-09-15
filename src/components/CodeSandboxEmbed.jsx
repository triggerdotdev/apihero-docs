import React from "react";

const defaultProps = {
  fontSize: 14,
  theme: "dark",
};

export function CodeSandboxEmbed(props) {
  const options = {
    ...defaultProps,
    ...props,
  };

  const searchParams = new URLSearchParams(options);

  searchParams.set("fontsize", options.fontSize);
  searchParams.set("theme", options.theme);
  searchParams.set("module", props.module);

  if (props.view) {
    searchParams.set("view", options.view);
  }

  return (
    <iframe
      src={`https://codesandbox.io/embed/${
        options.id
      }?${searchParams.toString()}`}
      style={{
        width: "100%",
        height: "500px",
        border: 0,
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="API Hero - Look to the stars"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  );
}
