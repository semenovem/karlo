import React from "react";

import { Helmet } from "react-helmet";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 страница не найдена</title>
      </Helmet>

      <div style={{ padding: "1rem" }}>
        <p>404</p>
      </div>

      <br />
      <div>на главную</div>
      <br />

    </>
  );
}

export default NotFound;
