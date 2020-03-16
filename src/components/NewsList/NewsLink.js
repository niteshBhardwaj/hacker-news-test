import React from "react";

const getHostName = (link = "") => link.match(/(?:\w+\.)+\w+/);

export default ({ link }) => {
  if (!link) link = "";
  let hostName = React.useMemo(() => getHostName(link), [link]);
  if (!hostName) hostName = link;
  return (
    <a
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      className="link-domain"
    >
      ({hostName})
    </a>
  );
};
