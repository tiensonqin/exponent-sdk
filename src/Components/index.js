export AppLoading from './AppLoading';
export BarCodeScanner from './BarCodeScanner';
export BlurView from './BlurView';
export LinearGradient from './LinearGradient';
export MapView from 'react-native-maps';
export Video from './Video';

import * as SvgModules from 'react-native-svg';
let { Svg } = SvgModules;
for (let key in SvgModules) {
  if (key !== 'default' && key !== 'Svg') {
    Svg[key] = SvgModules[key];
  }
}
export { Svg };

// WebRTC
export RTCPeerConnection from './Webrtc/RTCPeerConnection';
export RTCIceCandidate from './Webrtc/RTCIceCandidate';
export RTCSessionDescription from './Webrtc/RTCSessionDescription';
export RTCView from './Webrtc/RTCView';
export MediaStream from './Webrtc/MediaStream';
export MediaStreamTrack from './Webrtc/MediaStreamTrack';
export getUserMedia from './Webrtc/getUserMedia';
