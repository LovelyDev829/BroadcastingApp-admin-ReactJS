import React, { useEffect, useState } from 'react';
var temp={}
function Out() {
  useEffect(() => {
    fetch(`http://localhost:8290/liveRadio/`, { method: "GET" })
      .then((response) => response.json())
      .then((response) => {
        console.log("here" + response[0]);
        // temp=response;
      })
      .catch((err) => {
        console.log("FetchError : " + err.message);
      });
  }, []);
  return (
    <div>
    </div>
  )
}

export default Out;
