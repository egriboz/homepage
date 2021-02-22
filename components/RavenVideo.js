import React, { useEffect } from "react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/react";

export default function Raven() {
  const filterImage = useColorModeValue("invert(0)", "invert(1)");
  // onContextMenu={(e) => e.preventDefault()}
  useEffect(() => {
      /* 
      
      https://css-tricks.com/overlaying-video-with-transparency-while-wrangling-cross-browser-support/
      
      HEVC with alpha is supported ONLY on Safari >=13 / ios >=13
      previous versions also supported HEVC but WITHOUT alpha channel (video will play with black bg)
      Safari 13 is the first version to support mediaCapabilities
      
      */
      function supportsHEVCAlpha() {
      const navigator = window.navigator;
      const ua = navigator.userAgent.toLowerCase()
      const hasMediaCapabilities = !!(navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo)
      const isSafari = ((ua.indexOf('safari') != -1)&& (!(ua.indexOf('chrome')!= -1) && (ua.indexOf('version/')!= -1)))
  
      return isSafari && hasMediaCapabilities
      }
      
      function isIE11() {
        return !!window.navigator.userAgent.match(/Trident\/7\./,[]);
      }
      if (!isIE11()) {
        const player = document.getElementById('player');
        player.src = supportsHEVCAlpha() ? '/raven/raven-HEVC-safari.mov': '/raven/raven.webm';
      } 
      //
  }, []);
  return (
    <Box filter={filterImage} >
      <video id="player" autoPlay loop muted playsInline="1" crossOrigin="true">
        {/* <source src="/raven/raven-HEVC-safari.mov" type="video/webm" /> */}
      </video>
    </Box>
  );
}
