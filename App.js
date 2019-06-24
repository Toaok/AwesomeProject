import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  ListView,
  TouchableOpacity,
  Image,
  ScrollView,
  Text,
  Alert,
  View
} from 'react-native';
import  Video from 'react-native-video'

export default class HelloWorldApp extends Component {
  render() {

    let video={
      uri:'http://upos-hz-mirrorkodou.acgvideo.com/dspxcode/i180110qn3pahpmc2h5wr13o84kfzd36-1-56.mp4?deadline=1555074266&gen=dsp&wsTime=1555074266&os=kodou&drate=500000&platform=html5&uparams=deadline,gen,wsTime,os,drate,platform&upsig=8f6c8522fb86e2a82aa770676072231e&uuid=5cb070baf27f4'
    };

    return (
      <Video source={video}       // Can be a URL or a local file.
      rate={1.0}                   // 控制暂停/播放，0 代表暂停
      volume={1.0}                 // 声音的放大倍数，0 代表没有声音，就是静音muted, 1 代表正常音量 normal，更大的数字表示放大的倍数
      muted={false}                //true代表静音，默认为false.
      paused={false}               // Pauses playback entirely.
      resizeMode="cover"           // 视频的自适应伸缩铺放行为，
      repeat={true}                // 是否重复播放
      onLoadStart={this.loadStart} // 当视频开始加载时的回调函数
      onLoad={this.setDuration}    // 当视频加载完毕时的回调函数
      onProgress={this.setTime}    // 进度控制，每250ms调用一次，以获取视频播放的进度
      onEnd={this.onEnd}           // 当视频播放完毕后的回调函数
      onError={this.videoError}    // 当视频不能加载，或出错后的回调函数
      style={styles.backgroundVideo}
    />

    );
  }
}
const styles = StyleSheet.create({
  backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
  },
});
