<template>
	<div class="lianxishi">
		<div class="lianxiguangg">
			<img src="../../assets/guanggao5.png" />
		</div>
		<div class="">
			<div class="input_video">
				<video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions"></video-player>
			</div>
			<div class="video-title">
				<span>练习室录播</span>
				<div class="xiang"></div>
				<span>讲师大公开</span>
			</div>
		</div>
		<hr />
		<div class="biaoQbao">
			<div class="biaoQbao-title">相册一堆表情包，一画手就废？</div>
			<div class="jianshi">
				<div class="jianshi-xinxi">
					<img src="../../assets/gaoxiao1@2x.png" />
					<span>我不在线鸭</span>
				</div>
				<div class="jianshi-radius">讲师</div>
			</div>
			<div class="benqi">
				<div class="benqi-title">本期回顾:</div>
				<div class="benqi-item">大家都是阅表情包无数的人，谁的相册还没一二百张无水印表情呢。
					虽 然但是，自己画表情竟然时常感觉“难产”！本次直播鸭鸭老师将演
					示如何 通过五官、发型或其他细节画法，来表现开心、愤怒、生气等情
					绪表情，即 兴表情包大家来配字。拯救笔下人物的面瘫脸或成为斗图王者不是梦！</div>
			</div>
			<div class="">
				<div class="time-wenzi">时间：</div>
				<div class="time-date">
					<div class="data-naozho">
						<img class="naozho" src="../../assets/naozho.png" />
						<span>周二 06月16日 19：00</span>
					</div>
					<div class="data-naozho">
						<img class="naozho" src="../../assets/naozho.png" />
						<span>周四 06月16日 19：00</span>
					</div>
				</div>
			</div>
			<div class="button-bg">抢占位置</div>
		</div>
		<div class="bacKg">
			<div class="guanzhu">
				<div class="guanzhu-xinxi">
					<img src="../../assets/gaoxiao1@2x.png" />
					<span>我不在线鸭</span>
				</div>
				<div class="guanzhu-radius">关注</div>
			</div>
			<div class="neiro">
				日漫专业辅导老师，动漫专业出身，擅长赛璐璐和国画，喜
				欢,画风激萌可爱，精通AE和SAI。曾参加过大学生广告艺术大赛，
				获得过三等奖。对于学生，认为“沟通是最好的交流教学”为教
				学理念。
			</div>
		</div>
		<div class="lecturer">
			<div class="lecturer-title">
				<div>讲师作品</div>
				<div class="lecturer-radius">查看更多</div>
			</div>
			<div class="lecturer-columm">
				<div class="lecturer-row">
					<img src="../../assets/lianxishi1.png" />
					<img src="../../assets/lianxishi2.png" />
				</div>
				<div class="lecturer-row">
					<img src="../../assets/lianxishi4.png" />
					<img src="../../assets/lianxishi3.png" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				// 视频播放
				playerOptions: {
					playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
					autoplay: true, //如果true,浏览器准备好时开始回放。
					muted: false, // 默认情况下将会消除任何音频。
					loop: false, // 视频一结束就重新开始。
					preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
					language: 'zh-CN',
					aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
					fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
					sources: [{
						src:'http://vjs.zencdn.net/v/oceans.mp4',
						type:'video/mp4' //url地址
					}],
					poster: "https://tukuimg.bdstatic.com/scrop/4bc9ba544e237c23e476b612da9f1839.jpeg@s_0,w_800,h_1000,q_80", //你的封面地址
					// width: document.documentElement.clientWidth,
					notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
					controlBar: {
						timeDivider: true, //当前时间和持续时间的分隔符
						durationDisplay: true, //显示持续时间
						remainingTimeDisplay: false, //是否显示剩余时间功能
						fullscreenToggle: true //全屏按钮
					}
				}
			}
		}
	}
</script>

<style>
	.lianxishi{
		height: 1500px;
	}
	
	.lianxiguangg img {
		width: 100%;
	}

	.input_video {
		width: 300px;
		height: 200px;
		margin: 6px auto;

	}

	/* .video-js .vjs-icon-placeholder {
		width: 100%;
		height: 100%;
		display: block;
	} */

	.video-title {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		font-size: 16px;
		color: #333333;
		padding-left: 35px;
		padding-right: 35px;
	}

	/* 竖线 */
	.xiang {
		width: 1px;
		height: 32px;
		border-left: 2px solid #b7b5b5;
	}

	.biaoQbao {
		height: 430px;
		border-bottom: 1px solid #333333;
	}

	/* 标题 */
	.biaoQbao-title {
		width: 315px;
		font-size: 20px;
		font-weight: bold;
	}

	/* 讲师 */
	.jianshi {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		font-size: 14px;
		padding-right: 140px;
		line-height: 50px;
	}

	.jianshi-xinxi {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		font-size: 16px;
		width: 138px;
	}

	.jianshi-xinxi img {
		width: 40px;
		height: 40px;
	}

	/* 讲师圆框 */
	.jianshi-radius {
		width: 40px;
		height: 18px;
		background-color: #ffffff;
		border-radius: 18px;
		border: solid 2px #999999;
		text-align: center;
		line-height: 18px;
	}

	/* 本期回顾 */
	.benqi {
		font-size: 14px;
	}

	.benqi-title {
		text-align: left;
		padding-left: 20px;
		font-size: 16px;
		color: #333333;
		line-height: 40px;
	}

	/* 本期回顾内容 */
	.benqi-item {
		text-indent: 28px;
		line-height: 22px;
		width: 350px;
		margin: auto;
		text-align: left;
		color: #666666;
	}

	.time-wenzi {
		text-align: left;
		padding-left: 20px;
		font-size: 16px;
		color: #333333;
		line-height: 40px;
	}

	/* 具体日期 */
	.time-date {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	.data-naozho {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		font-size: 12px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 30px;
		letter-spacing: 0px;
		color: #666666;
	}

	/* 闹钟图标 */
	.naozho {
		width: 30px;
		height: 30px;
	}

	/* 抢占位置  按钮 */
	.button-bg {
		width: 150px;
		height: 35px;
		background-image: linear-gradient(90deg,
			#182b7c 0%,
			#6d82df 100%);
		border-radius: 31px;
		font-family: AdobeHeitiStd-Regular;
		font-size: 16px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 35px;
		letter-spacing: 1px;
		color: #fdfdfd;
		margin: 55px auto;
	}

	/* 黑框 */
	.bacKg {
		width: 340px;
		height: 200px;
		background-color: #000000;
		border-radius: 20px;
		border: solid 3px #000000;
		margin: 30px auto;
	}

	.guanzhu {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		font-size: 14px;
		line-height: 60px;
	}

	.guanzhu-xinxi {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		font-size: 14px;
		width: 130px;
		color: #FFFFFF;
	}

	.guanzhu-xinxi img {
		width: 35px;
		height: 35px;
	}

	.guanzhu-radius {
		width: 55px;
		height: 18px;
		background-color: #6d82df;
		border-radius: 17px;
		text-align: center;
		line-height: 18px;
		color: #ffffff;
		font-size: 12px;
	}

	/* 讲师的描述 */
	.neiro {
		width: 300px;
		font-size: 12px;
		text-indent: 28px;
		text-align: left;
		margin: auto;
		font-weight: normal;
		font-stretch: normal;
		line-height: 25px;
		letter-spacing: 0px;
		color: #cacaca;
	}

	.lecturer-title {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		font-size: 16px;
	}

	.lecturer-radius {
		width: 100px;
		height: 25px;
		background-color: #6d82df;
		border-radius: 17px;
		text-align: center;
		line-height: 25px;
		color: #ffffff;
		font-size: 14px;
	}

	.lecturer-columm {
		height: 280px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		margin-top: 10px;
	}

	.lecturer-row {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 320px;
	}

	.lecturer-row img {
		width: 150px;
		/* height: 100px; */
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
</style>
