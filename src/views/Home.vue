<template>
	<div class="home">
		<div>
			<van-tabs v-model="active" sticky>
				<van-sticky :offset-top="43">
					<van-search class="rgb" v-model="value" shape="round">
						<!-- <router-link> -->
							<template #left-icon>
								<div @click="moSearch">
									<van-icon name="search" />
								</div>
								
							</template>
						<!-- </router-link> -->
					</van-search>
				</van-sticky>
				<van-tab title="推荐">
					<div class="">
						<!-- 	广告 古风图片 -->
						<div class="gufeng-img">
							<img src="../assets/gufen.png" />
						</div>
						<!-- 今日热门 -->
						<div class="jinRe">
							<div>
								<div class="jinRe-title">今日热门</div>
								<div class="jinre-colunm">
									<div class="jinre-row">
										<div class="jinre-rowColunm">
											<img src="../assets/rmtox.png" />
											<span class="rowColunm-title">如何提升头像完成度</span>
											<div class="userXinxi userBot">
												<div class="toxName">
													<img src="../assets/toxiang1.png" />
													<span>奇思妙想</span>
												</div>
												<span class="userMf">免费</span>
											</div>
										</div>
										<router-link to="/tuijianqu">
											<div class="jinre-rowColunm">
												<img src="../assets/yanjing.png" />
												<span class="rowColunm-title">【画渣三分钟】画渣如何最
													快画眼睛，三分钟拯救手..</span>
												<div class="userXinxi">
													<div class="toxName">
														<img src="../assets/toxiang4.png" />
														<span>咕嘎咕嘎 </span>
													</div>
													<span class="userMf">免费</span>
												</div>
											</div>
										</router-link>


									</div>
									<div class="jinre-row">
										<div class="jinre-rowColunm">
											<img src="../assets/naiba.png" />
											<span class="rowColunm-title">恶魔奶爸人物绘制过程。</span>
											<div class="userXinxi userBot">
												<div class="toxName">
													<img src="../assets/toxiang2.png" />
													<span class="toxName-span">九九</span>
												</div>
												<span class="userMf2">￥10.0</span>
											</div>
										</div>
										<div class="jinre-rowColunm">
											<img src="../assets/mh2.png" />
											<span class="rowColunm-title">【画渣两分钟】如何才能
												规范自己的线条，不再... </span>
											<div class="userXinxi">
												<div class="toxName">
													<img src="../assets/toxiang3.png" />
													<span class="toxName-span">没有风</span>
												</div>
												<span class="userMf2">￥10.0</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- 为您推荐 -->
							<div class="tuijian">
								<div class="tuijian-title">
									<div class="jinRe-title">今日热门</div>
									<div class="jinRe-title-R">换一批</div>
								</div>
								<div class="jinre-colunm">
									<div class="jinre-row">
										<router-link to="/tuwenyikao">
											<div class="yikao-colunm">
												<div class="yikaoImg">
													<img src="../assets/yikao.png" />
													<img class="yikao-weizi" src="../assets/yikaowz.png" />
												</div>
												<div class="yika-title">艺考</div>
											</div>
										</router-link>
										<div class="yikao-colunm">
											<div class="yikaoImg">
												<img src="../assets/zhezuo.png" />
												<span class="yikao-weizi">褶皱怎么画才好？</span>
											</div>
											<div class="yika-title">我也可以</div>
										</div>
									</div>
								</div>
							</div>
							<!-- 近期更新 -->
							<div class="">
								<div class="jinRe-title">近期更新</div>
								<div class="jinre-colunm">
									<div class="jinre-row">
										<div class="jinre-rowColunm">
											<img src="../assets/jinqi1.png" />
											<span class="rowColunm-title">如何提升头像完成度【笔刷】多种水墨笔刷，如
												何安装？快点击进来看看.. </span>
											<div class="userXinxi">
												<div class="toxName">
													<img src="../assets/jinqi2.png" />
													<span>奇思妙想</span>
												</div>
												<span class="userMf">免费</span>
											</div>
										</div>
										<div class="jinre-rowColunm">
											<img src="../assets/mh2.png" />
											<span class="rowColunm-title">如何提升头像完成度</span>
											<div class="userXinxi userBot">
												<div class="toxName">
													<img src="../assets/toxiang3.png" />
													<span class="toxName-span">没有风</span>
												</div>
												<span class="userMf2">￥10.0</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- 专业课程 -->
							<div class="tuijian">
								<div class="tuijian-title">
									<div class="jinRe-title">专业课程</div>
									<div class="jinRe-title-R">更 多</div>
								</div>
								<div class="jinre-colunm">
									<div class="jinre-row">
										<div class="yikao-colunm">
											<img src="../assets/zhuanye1.png" />
											<span class="rowColunm-title title-top">场景概念设计专业班(粱华华)</span>
										</div>
										<div class="yikao-colunm">
											<img src="../assets/zhuanye.png" />
											<span class="rowColunm-title title-top">原画人物设计概念课程(不知所措)</span>
										</div>
									</div>
								</div>
							</div>
							<!-- 图文教程 -->
							<div class="tuijian">
								<div class="tuijian-title">
									<div class="jinRe-title">图文教程</div>
								</div>
								<!-- 作家 -->
								<div class="zuojia">
									<div class="zuojia-xinxi">
										<div class="zuojia-toxName">
											<img src="../assets/toxiang3.png" />
											<span class="toxName-span">一二一</span>
										</div>
										<img class="userMf" src="../assets/gengdo.png" />
									</div>
									<div class="jinre-colunm">
										<div class="zuojia-cp">你是否还在为画不出CP绝美爱情而猛虎痛哭？</div>
										<div class="zuojia-tuw1">
											<img src="../assets/tuw1.png" />
										</div>
										<div class="miaoshu">简单介绍了一下从剧本到分页、分格脚本、分镜草图的过程。是我...</div>
									</div>
								</div>
								<div class="zuojia">
									<div class="zuojia-xinxi">
										<div class="zuojia-toxName">
											<img src="../assets/toxiang3.png" />
											<span class="toxName-span">哇卡卡卡</span>
										</div>
										<img class="userMf" src="../assets/gengdo.png" />
									</div>
									<div class="jinre-colunm">
										<div class="zuojia-cp SAI">【SAI笔刷】</div>
										<div class="zuojia-tuw1">
											<img src="../assets/tuw2.jpg" />
										</div>
										<div class="miaoshu">简单介绍了一下从剧本到分页、分格脚本、分镜草图的过程。是我...</div>
									</div>
								</div>
								<!-- 到底文字提示 -->
								<div class="dibutishi">-- 我是有底线的 --</div>
							</div>
						</div>
					</div>
				</van-tab>
				<!-- 专业课表 -->
				<van-tab title="专业课表">
					<div class="tabSeatch">
						<div class="kecheng">
							<div class="kecheng-jiangshi">
								<div class="kecheng-img1">
									<div class="jiangshi-colunm">
										<div class="jiangshi-name">
											<img src="../assets/toxiang3.png" />
											<span>讲师: 哈哈哈</span>
										</div>
										<div class="kecheng-name">美术艺考色彩</div>
									</div>
									<div class="kecheng-button">学习周期：3个月</div>
								</div>
							</div>
							<div class="kecheng-jiangshi">
								<div class="kecheng-img2">
									<div class="jiangshi-colunm">
										<div class="jiangshi-name">
											<img src="../assets/toxiang3.png" />
											<span>讲师: 不知所措 </span>
										</div>
										<div class="kecheng-name">原画人物设计概念课程</div>
									</div>
									<div class="kecheng-button">学习周期：4 个月</div>
								</div>
							</div>
							<div class="kecheng-jiangshi">
								<div class="kecheng-img3">
									<div class="jiangshi-colunm">
										<div class="jiangshi-name">
											<img src="../assets/toxiang3.png" />
											<span>讲师: 粱华华</span>
										</div>
										<div class="kecheng-name">原画场景基础班</div>
									</div>
									<div class="kecheng-button">学习周期：12个月</div>
								</div>
							</div>
							<div class="kecheng-jiangshi">
								<router-link to="/kechengXianq">
									<div class="kecheng-img4">
										<div class="jiangshi-colunm">
											<div class="jiangshi-name">
												<img src="../assets/toxiang3.png" />
												<span>讲师: 哈哈哈</span>
											</div>
											<div class="kecheng-name">美术艺考色彩</div>
										</div>
										<div class="kecheng-button">学习周期：6 个月</div>
									</div>
								</router-link>
							</div>
							<div class="kecheng-jiangshi">
								<div class="kecheng-img5">
									<div class="jiangshi-colunm">
										<div class="jiangshi-name">
											<img src="../assets/toxiang3.png" />
											<span>讲师: 云怪</span>
										</div>
										<div class="kecheng-name black">漫画分镜基础班</div>
									</div>
									<div class="kecheng-button button-color">学习周期：3个月</div>
								</div>
							</div>
							<div class="kecheng-jiangshi">
								<div class="kecheng-img6">
									<div class="jiangshi-colunm">
										<div class="jiangshi-name">
											<img src="../assets/toxiang3.png" />
											<span>讲师: 蓝不胖</span>
										</div>
										<div class="kecheng-name">高级日系基础插画班</div>
									</div>
									<div class="kecheng-button">学习周期：3个月</div>
								</div>
								<div class="kecheng-jiangshi">
									<div class="kecheng-img7">
										<div class="jiangshi-colunm">
											<div class="jiangshi-name">
												<img src="../assets/toxiang3.png" />
												<span>讲师: 日落</span>
											</div>
											<div class="kecheng-name">日系基础插画班 </div>
										</div>
										<div class="kecheng-button button-color">学习周期：3个月</div>
									</div>
								</div>
								<!-- 到底文字提示 -->
								<div class="dibutishi">-- 敬请期待更多课程 --</div>
							</div>
						</div>
					</div>
				</van-tab>
				<van-tab title="视频教程">
					<div class="tabSeatch">
						<div>
							<div class="jinre-colunm">
								<div class="jinre-row">
									<div class="jinre-rowColunm">
										<img src="../assets/rmtox.png" />
										<span class="rowColunm-title">如何提升头像完成度</span>
										<div class="userXinxi userBot">
											<div class="toxName">
												<img src="../assets/toxiang1.png" />
												<span>奇思妙想</span>
											</div>
											<span class="userMf">免费</span>
										</div>
									</div>
									<router-link to="/tuijianqu">
										<div class="jinre-rowColunm">
											<img src="../assets/yanjing.png" />
											<span class="rowColunm-title">【画渣三分钟】画渣如何最
												快画眼睛，三分钟拯救手..</span>
											<div class="userXinxi">
												<div class="toxName">
													<img src="../assets/toxiang4.png" />
													<span>咕嘎咕嘎 </span>
												</div>
												<span class="userMf">免费</span>
											</div>
										</div>
									</router-link>
								</div>
								<div class="jinre-row">
									<div class="jinre-rowColunm">
										<img src="../assets/naiba.png" />
										<span class="rowColunm-title">恶魔奶爸人物绘制过程。</span>
										<div class="userXinxi userBot">
											<div class="toxName">
												<img src="../assets/toxiang2.png" />
												<span class="toxName-span">九九</span>
											</div>
											<span class="userMf2">￥10.0</span>
										</div>
									</div>
									<div class="jinre-rowColunm">
										<img src="../assets/mh2.png" />
										<span class="rowColunm-title">【画渣两分钟】如何才能
											规范自己的线条，不再... </span>
										<div class="userXinxi">
											<div class="toxName">
												<img src="../assets/toxiang3.png" />
												<span class="toxName-span">没有风</span>
											</div>
											<span class="userMf2">￥10.0</span>
										</div>
									</div>
								</div>
							</div>
							<div class="guanggao">
								<img src="../assets/guanggao2.png" />
							</div>
							<div class="">
								<div class="jinre-colunm">
									<div class="jinre-row">
										<div class="jinre-rowColunm">
											<img src="../assets/sptp1.png" />
											<span class="rowColunm-title">【日系插画】PROCREATE静态冬日雪景照片写生。 </span>
											<div class="userXinxi">
												<div class="toxName">
													<img src="../assets/toxiang2.png" />
													<span>随缘一画</span>
												</div>
												<span class="userMf">免费</span>
											</div>
										</div>
										<div class="jinre-rowColunm">
											<img src="../assets/sptp2.png" />
											<span class="rowColunm-title">【画渣两分钟】如何才能规范自己的线条，不再... </span>
											<div class="userXinxi">
												<div class="toxName">
													<img src="../assets/toxiang3.png" />
													<span class="toxName-span">不被西瓜吃</span>
												</div>
												<span class="userMf2">￥10.0</span>
											</div>
										</div>
									</div>
									<div class="jinre-row">
										<div class="jinre-rowColunm">
											<img src="../assets/sptp3.png" />
											<span class="rowColunm-title">【画渣两分钟】如何才能规范自己的线条，不再... </span>
											<div class="userXinxi">
												<div class="toxName">
													<img src="../assets/toxiang3.png" />
													<span class="toxName-span">不被西瓜吃</span>
												</div>
												<span class="userMf2">￥10.0</span>
											</div>
										</div>
										<div class="jinre-rowColunm">
											<img src="../assets/sptp4.png" />
											<span class="rowColunm-title">【日系插画】PROCREATE静态冬日雪景照片写生。 </span>
											<div class="userXinxi">
												<div class="toxName">
													<img src="../assets/toxiang2.png" />
													<span>随缘一画</span>
												</div>
												<span class="userMf">免费</span>
											</div>
										</div>
									</div>
									<div class="jinre-row">
										<div class="jinre-rowColunm">
											<img src="../assets/sptp5.png" />
											<span class="rowColunm-title">【画渣两分钟】如何才能规范自己的线条，不再... </span>
											<div class="userXinxi">
												<div class="toxName">
													<img src="../assets/toxiang3.png" />
													<span class="toxName-span">不被西瓜吃</span>
												</div>
												<span class="userMf2">￥10.0</span>
											</div>
										</div>
										<div class="jinre-rowColunm">
											<img src="../assets/sptp6.png" />
											<span class="rowColunm-title">【日系插画】PROCREATE静态冬日雪景照片写生。 </span>
											<div class="userXinxi">
												<div class="toxName">
													<img src="../assets/toxiang2.png" />
													<span>随缘一画</span>
												</div>
												<span class="userMf">免费</span>
											</div>
										</div>
									</div>
									<div class="jinre-row">
										<div class="jinre-rowColunm">
											<img src="../assets/sptp7.png" />
											<span class="rowColunm-title">【画渣两分钟】如何才能规范自己的线条，不再... </span>
											<div class="userXinxi">
												<div class="toxName">
													<img src="../assets/toxiang3.png" />
													<span class="toxName-span">不被西瓜吃</span>
												</div>
												<span class="userMf2">￥10.0</span>
											</div>
										</div>
										<div class="jinre-rowColunm">
											<img src="../assets/sptp8.png" />
											<span class="rowColunm-title">【日系插画】PROCREATE静态冬日雪景照片写生。 </span>
											<div class="userXinxi">
												<div class="toxName">
													<img src="../assets/toxiang2.png" />
													<span>随缘一画</span>
												</div>
												<span class="userMf">免费</span>
											</div>
										</div>
									</div>
									<!-- 到底文字提示 -->
									<div class="dibutishi">-- 我是有底线的 --</div>
								</div>
							</div>
						</div>
					</div>
				</van-tab>
				<van-tab title="大牛来了">
					<div class="tabDanu">
						<div class="kaijiang">
							<div class="tabDanu-title">即将开讲</div>
							<div class="tabDanu-row">
								<img class="tabDanu-rowImg" src="../assets/daniu3.png" />
								<div class="kaijian-xinxi">
									<span class="titleName">拯救上色废大作战</span>
									<div class="kaijian-imgName">
										<img src="../assets/toxiang1.png" />
										<span>镇压鸭</span>
									</div>
									<span class="kaijianDate">上课时间: 周六晚上7:00-9:00</span>
								</div>
							</div>
							<div class="tabDanu-row">
								<img class="tabDanu-rowImg" src="../assets/daniu2.png" />
								<div class="kaijian-xinxi">
									<span class="titleName">魔法变身!如何设计法术系角色</span>
									<div class="kaijian-imgName">
										<img src="../assets/toxiang1.png" />
										<span>赢猫</span>
									</div>
									<span class="kaijianDate">上课时间: 周六晚上7:00-9:00</span>
								</div>
							</div>
						</div>
						<div class="kaijiang2">
							<div class="tabDanu-title">往期回顾</div>
							<div class="tabDanu-row">
								<img class="tabDanu-rowImg" src="../assets/daniu1.png" />
								<div class="kaijian-xinxi">
									<span class="titleName">神仙头像的诞生史</span>
									<div class="kaijian-imgName">
										<img src="../assets/toxiang1.png" />
										<span>恒星树</span>
									</div>
								</div>
							</div>
							<div class="tabDanu-row">
								<img class="tabDanu-rowImg" src="../assets/daniu4.png" />
								<div class="kaijian-xinxi">
									<span class="titleName">实用向古风发型绘画指南</span>
									<div class="kaijian-imgName">
										<img src="../assets/toxiang1.png" />
										<span>粱华华</span>
									</div>
								</div>
							</div>
							<div class="tabDanu-row">
								<img class="tabDanu-rowImg" src="../assets/daniu5.png" />
								<div class="kaijian-xinxi">
									<span class="titleName">新手向人体骨骼结构全面解析</span>
									<div class="kaijian-imgName">
										<img src="../assets/toxiang1.png" />
										<span>陈一块</span>
									</div>
								</div>
							</div>
						</div>
						<div class="daniuGuanggao">
							<img src="../assets/daniu.png">
						</div>
						<div class="kaijiang3">
							<div class="tabDanu-row">
								<img class="tabDanu-rowImg" src="../assets/daniu6.png" />
								<div class="kaijian-xinxi">
									<span class="titleName">神仙头像的诞生史</span>
									<div class="kaijian-imgName">
										<img src="../assets/toxiang1.png" />
										<span>恒星树</span>
									</div>
								</div>
							</div>
							<div class="tabDanu-row">
								<img class="tabDanu-rowImg" src="../assets/daniu7.png" />
								<div class="kaijian-xinxi">
									<span class="titleName">实用向古风发型绘画指南</span>
									<div class="kaijian-imgName">
										<img src="../assets/toxiang1.png" />
										<span>粱华华</span>
									</div>
								</div>
							</div>
							<div class="tabDanu-row">
								<img class="tabDanu-rowImg" src="../assets/daniu8.png" />
								<div class="kaijian-xinxi">
									<span class="titleName">实用向古风发型绘画指南</span>
									<div class="kaijian-imgName">
										<img src="../assets/toxiang1.png" />
										<span>粱华华</span>
									</div>
								</div>
							</div>
							<div class="tabDanu-row">
								<img class="tabDanu-rowImg" src="../assets/daniu9.png" />
								<div class="kaijian-xinxi">
									<span class="titleName">新手向人体骨骼结构全面解析</span>
									<div class="kaijian-imgName">
										<img src="../assets/toxiang1.png" />
										<span>陈一块</span>
									</div>
								</div>
							</div>
						</div>
						<!-- 到底文字提示 -->
						<div class="dibutishi">-- 我是有底线的 --</div>
					</div>
				</van-tab>
				<van-tab title="图文教程">
					<div class="tabSeatch">
						<!-- 图文教程 -->
						<div class="tuijian">
							<!-- 作家 -->
							<div class="zuojia">
								<div class="zuojia-xinxi">
									<div class="zuojia-toxName">
										<img src="../assets/toxiang8.png" />
										<span class="toxName-span">宝箱果</span>
									</div>
									<img class="userMf" src="../assets/gengdo.png" />
								</div>
								<div class="jinre-colunm">
									<div class="zuojia-cp AIts">如何用SAI画出碧蓝大海？</div>
									<div class="zuojia-tuw1">
										<img src="../assets/timg1.png" />
									</div>
									<div class="miaoshu">如何才能画出有层次的云朵和蔚蓝大海的画面，本次由我为大家一...</div>
								</div>
							</div>
							<div class="zuojia">
								<div class="zuojia-xinxi">
									<div class="zuojia-toxName">
										<img src="../assets/toxiang9.png" />
										<span class="toxName-span">风流不是流氓</span>
									</div>
									<img class="userMf" src="../assets/gengdo.png" />
								</div>
								<div class="jinre-colunm">
									<div class="zuojia-cp">关于原画材质金属如何绘画那些事</div>
									<div class="zuojia-tuw1">
										<img src="../assets/timg2.png" />
									</div>
									<div class="miaoshu">简单介绍了一下从剧本到分页、分格脚本、分镜草图的过程。是我...</div>
								</div>
							</div>
							<div class="zuojia">
								<div class="zuojia-xinxi">
									<div class="zuojia-toxName">
										<img src="../assets/toxiang10.png" />
										<span class="toxName-span">张震真</span>
									</div>
									<img class="userMf" src="../assets/gengdo.png" />
								</div>
								<div class="jinre-colunm">
									<div class="zuojia-cp">原画石块如何绘画？</div>
									<div class="zuojia-tuw1">
										<img src="../assets/timg3.png" />
									</div>
									<div class="miaoshu">如何绘画石块，首先要了解石头的体积，色彩，材质，才能更好的...</div>
								</div>
							</div>
							<div class="zuojia">
								<div class="zuojia-xinxi">
									<div class="zuojia-toxName">
										<img src="../assets/toxiang11.png" />
										<span class="toxName-span">订书不是卷</span>
									</div>
									<img class="userMf" src="../assets/gengdo.png" />
								</div>
								<div class="jinre-colunm">
									<div class="zuojia-cp">鬼刀临摹分析</div>
									<div class="zuojia-tuw1">
										<img src="../assets/timg4.png" />
									</div>
									<div class="miaoshu">简单介绍了一下从剧本到分页、分格脚本、分镜草图的过程。是我...</div>
								</div>
							</div>
							<div class="zuojia">
								<div class="zuojia-xinxi">
									<div class="zuojia-toxName">
										<img src="../assets/toxiang12.png" />
										<span class="toxName-span">大小小</span>
									</div>
									<img class="userMf" src="../assets/gengdo.png" />
								</div>
								<div class="jinre-colunm">
									<div class="zuojia-cp">关于奇形怪状如何绘画？</div>
									<div class="zuojia-tuw1">
										<img src="../assets/timg5.png" />
									</div>
									<div class="miaoshu">很多人，一说到奇形怪状就会很有想法，但是要下笔的时候，确卡...</div>
								</div>
							</div>
							<div class="zuojia">
								<div class="zuojia-xinxi">
									<div class="zuojia-toxName">
										<img src="../assets/toxiang13.png" />
										<span class="toxName-span">一二一</span>
									</div>
									<img class="userMf" src="../assets/gengdo.png" />
								</div>
								<div class="jinre-colunm">
									<div class="zuojia-cp">你是否还在为画不出CP绝美爱情而猛虎痛哭？</div>
									<div class="zuojia-tuw1">
										<img src="../assets/tuw1.png" />
									</div>
									<div class="miaoshu">简单介绍了一下从剧本到分页、分格脚本、分镜草图的过程。是我...</div>
								</div>
							</div>
							<div class="zuojia">
								<div class="zuojia-xinxi">
									<div class="zuojia-toxName">
										<img src="../assets/toxiang14.png" />
										<span class="toxName-span">哇卡卡卡</span>
									</div>
									<img class="userMf" src="../assets/gengdo.png" />
								</div>
								<div class="jinre-colunm">
									<div class="zuojia-cp SAI">【SAI笔刷】</div>
									<div class="zuojia-tuw1">
										<img src="../assets/tuw2.jpg" />
									</div>
									<div class="miaoshu">简单介绍了一下从剧本到分页、分格脚本、分镜草图的过程。是我...</div>
								</div>
							</div>
						</div>
						<!-- 到底文字提示 -->
						<div class="dibutishi">-- 我是有底线的 --</div>
					</div>
				</van-tab>
				<van-tab title="">

				</van-tab>
			</van-tabs>
		</div>
		<div>
			<Tabers />
		</div>

	</div>
</template>

<script>
	// @ is an alias to /src
	// import HelloWorld from '@/components/HelloWorld.vue'
	//底部导航栏
	import Tabers from '@/components/taBer.vue'
	export default {
		name: 'Home',
		data() {
			return {
				active: 0,
				value: ''
			}
		},
		components: {
			Tabers
		},
		methods: {
			moSearch() {
				// console.log(val)
				this.$router.push({
					path: '/Shearch'
				})
			}
		}
	}
</script>

<style>
	/* 点击字体变大 */
	.home .van-tab--active {
		color: #323233;
		font-size: 22px;
		font-weight: bold;
		font-family: SimHei;
	}

	.home .van-tab__text {
		color: #040404;
	}

	.home .van-tabs__line {
		position: absolute;
		bottom: 0px;
		left: 0;
		z-index: 1;
		width: 0px;
		height: 0px;
		background-color: none;
		border-radius: 0px;
	}

	/* 搜索 */
	.home .van-search__content--round {
		border-radius: 999px;
		border: 1px solid;
		background-color: #ffffff;
	}

	/* 搜索图标 */
	.home .van-field__left-icon .van-icon,
	.van-field__right-icon .van-icon {
		display: block;
		min-width: -2em;
		font-size: 30px;
		line-height: inherit;
	/* 	left: 293px; */
		color: #959fa7;
	}

	/* 阴影 */
	.rgb {
		background-color: rgb(255, 255, 255);
		box-shadow: rgba(0, 0, 0, 0.05) 0px 17px 20px 0px;
	}

	.tabSeatch {
		margin-top: 30px;
	}



	/* 广告 古风图片 */
	.gufeng-img img {
		width: 375px;
	}

	/* 今日热门 */
	.home .jinRe {
		background-color: #FFFFFF;
		margin: auto;
		border-radius: 30px 30px 0px 0px;
		position: relative;
		bottom: 30px;
	}

	/* 今日热门 标题 */
	.home .jinRe .jinRe-title {
		font-family: SimHei;
		font-size: 18px;
		font-weight: bold;
		font-stretch: normal;
		line-height: 50px;
		letter-spacing: 1px;
		color: #040404;
		width: 116px;
		height: 40px;
	}

	.jinre-colunm {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.jinre-colunm .jinre-row {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 180px;
	}

	.jinre-rowColunm {
		font-size: 16px;
		height: 180px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		display: -webkit-box;
		/*作为弹性伸缩盒子模型显示*/
		-webkit-line-clamp: 2;
		/*显示的行数；如果要设置2行加...则设置为2*/
		overflow: hidden;
		text-overflow: ellipsis;
		/* 溢出用省略号*/
		/*! autoprefixer: off */
		-webkit-box-orient: vertical;
		/*伸缩盒子的子元素排列：从上到下*/
	}

	/* 作者图片 */
	.jinre-rowColunm img {
		width: 170px;
	}

	.rowColunm-title {
		font-family: SimHei;
		font-size: 16px;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0px;
		color: #040404;
		width: 180px;
		display: -webkit-box;
		/*作为弹性伸缩盒子模型显示*/
		-webkit-line-clamp: 2;
		/*显示的行数；如果要设置2行加...则设置为2*/
		overflow: hidden;
		text-overflow: ellipsis;
		/* 溢出用省略号*/
		/*! autoprefixer: off */
		-webkit-box-orient: vertical;
		/*伸缩盒子的子元素排列：从上到下*/
	}

	/* 作者信息 */
	.userXinxi {
		width: 185px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		color: #666666;
	}

	.userBot {
		margin-top: 16px;
	}

	/* 免费 */
	.userXinxi .userMf {
		color: #27ab16;
		margin-right: 10px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 28px;
	}

	/*价钱 */
	.userMf2 {
		color: #e02222;
		margin-right: 10px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 28px;
		letter-spacing: 0px;
		color: #e02222;
	}

	.userXinxi .toxName {
		/* width: 112px; */
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		text-align: left;
		padding: 0px 6px;
	}

	.userXinxi .toxName .toxName-span {
		margin-right: 0px;
	}

	.userXinxi .toxName img {
		width: 25px;
	}


	.home .van-cell__title span {
		position: relative;
		right: 0px;
	}

	.custom-title {
		margin-right: 4px;
		vertical-align: middle;
	}

	/* 为您推荐 */
	.home .jinRe .tuijian {
		margin: auto;
	}

	/* 标题 */
	.tuijian-title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 360px;
	}

	/* 换一批 */
	.tuijian-title .jinRe-title-R {
		width: 62px;
		height: 22px;
		background-color: #ffffff;
		border-radius: 17px;
		border: solid 2px #6d82df;
		color: #6d82df;
		font-size: 16px;
		line-height: 22px;
	}

	/* 艺考 */
	.yikao-colunm {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	/* 艺考图片 */
	.yikaoImg {
		height: 100px;
		width: 170px;
	}

	.yikao-colunm img {
		width: 170px;
		border-radius: 10px;
	}

	.yikao-colunm .yikao-weizi {
		width: 100px;
		position: relative;
		bottom: 60px;
		font-family: AdobeHeitiStd-Regular;
		font-size: 16px;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 1px;
		color: #e5d7ae;
	}

	/* 艺考标题 */
	.yikao-colunm .yika-title {
		margin-top: 15px;
		margin-bottom: 16px;
		line-height: 30px;
		width: 100px;
		height: 30px;
		background-image: linear-gradient(115deg,
			#182b7c 0%,
			#4357ae 46%,
			#6d82df 100%);
		border-radius: 24px;
		color: #fdfdfd;
		font-size: 16px;
	}

	/* 专业课程 */
	.yikao-colunm .title-top {
		padding-top: 8px;
		text-align: left;
	}

	/* 图文教程 */
	.zuojia {
		margin: 10px auto;
	}

	.zuojia-xinxi {
		width: 370px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		color: #666666;
	}

	/* 头像 名称 */
	.zuojia-toxName {
		width: 150px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		text-align: left;
	}

	/* 头像 */
	.zuojia-toxName img {
		width: 25px;
	}

	/* 名称 */
	.toxName-span {
		font-weight: normal;
		font-stretch: normal;
		font-family: SimHei;
		color: #666666;
	}

	.zuojia-xinxi .userMf {
		width: 32px;
		margin-right: 10px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 28px;
	}

	.jinre-colunm .zuojia-cp {
		font-weight: bold;
		font-stretch: normal;
		line-height: 50px;
		letter-spacing: 0px;
		color: #040404;
	}

	.zuojia-xinxi .jinre-colunm .zuojia-tuw1 {
		width: 370px;
		margin: auto;
	}

	/* 图片 */
	.jinre-colunm .zuojia-tuw1 img {
		width: 350px;
		margin: auto;
	}

	/* 文字描述 */
	.jinre-colunm .miaoshu {
		width: 350px;
		font-family: SimHei;
		font-size: 16px;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0px;
		color: #666666;
		display: -webkit-box;
		/*作为弹性伸缩盒子模型显示*/
		-webkit-line-clamp: 1;
		/*显示的行数；如果要设置2行加...则设置为2*/
		overflow: hidden;
		text-overflow: ellipsis;
		/* 溢出用省略号*/
		/*! autoprefixer: off */
		-webkit-box-orient: vertical;
		/*伸缩盒子的子元素排列：从上到下*/
	}

	/* 【SAI笔刷】 */

	.jinre-colunm .SAI {
		margin-right: 265px;
	}

	/* 专业课表 */
	.kecheng {
		height: 3440px;
		margin-top: 30px;
	}

	.kecheng-img1 {
		width: 340px;
		height: 450px;
		background: url(../assets/yikao12.png) no-repeat center;
		background-size: 100% 100%;
		margin: 20px auto;
	}

	.kecheng-img2 {
		width: 340px;
		height: 450px;
		background: url(../assets/kecheng2.png)no-repeat center;
		background-size: 100% 100%;
		margin: 20px auto;
	}

	.kecheng-img3 {
		width: 340px;
		height: 450px;
		background: url(../assets/zhuanye3.png)no-repeat center;
		background-size: 100% 100%;
		margin: 20px auto;
	}


	.kecheng-img4 {
		width: 340px;
		height: 450px;
		background: url(../assets/zhuanye2.png)no-repeat center;
		background-size: 100% 100%;
		margin: 20px auto;
	}

	.kecheng-img5 {
		width: 340px;
		height: 450px;
		background: url(../assets/zhuanye5.png)no-repeat center;
		background-size: 100% 100%;
		margin: 20px auto;
	}

	.kecheng-img5 .black {
		color: #000000;
	}

	.kecheng-img6 {
		width: 340px;
		height: 450px;
		background: url(../assets/zhuanye6.png)no-repeat center;
		background-size: 100% 100%;
		margin: 20px auto;
	}

	.kecheng-img7 {
		width: 340px;
		height: 450px;
		background: url(../assets/zhuanye7.png)no-repeat center;
		background-size: 100% 100%;
		margin: 20px auto;
	}

	/* 讲师 信息*/
	.jiangshi-colunm {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-left: 8px;
		padding-top: 10px;
		color: #ffffff;
		width: 195px;
		text-align: left;
	}

	/* 讲师名称 */
	.jiangshi-name {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 130px;
		font-size: 14px;
	}

	/* 讲师头像 */
	.jiangshi-name img {
		width: 30px;
	}

	/* 课程 名称 */
	.kecheng-name {
		font-family: SimHei;
		font-size: 22px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 40px;
		letter-spacing: 0px;
		color: #ffffff;
		width: 320px;
		margin: auto;
	}

	/* 学习时间 */
	.kecheng-button {
		width: 135px;
		position: relative;
		top: 330px;
		color: #fff;
		font-size: 14px;
	}

	.button-color {
		position: relative;
		top: 336px;
		color: #000;

	}

	/* 到底文字提示 */
	.dibutishi {
		color: #9E9E9E;
		margin-top: 20px;
		height: 100px;
	}

	/* 视频教程 */
	/* 广告 */
	.guanggao {
		height: 115px;
	}

	.guanggao img {
		margin: auto;
		border-radius: 10px;
		width: 360px;
	}

	.duiqi {
		padding-top: 18px;
	}

	/* 大牛来了 */
	.tabDanu {
		margin-top: 30px;
	}

	/* 即将开讲 */
	.tabDanu .kaijiang {
		display: flex;
		height: 290px;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	/* 往期回顾 */
	.kaijiang2 {
		display: flex;
		height: 410px;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.kaijiang3 {
		display: flex;
		height: 500px;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.tabDanu-title {
		padding-right: 250px;
		font-size: 22px;
		font-weight: bold;
		font-stretch: normal;
		line-height: 24px;
		letter-spacing: 0px;
		color: #040404;
	}

	.tabDanu .tabDanu-row {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 356px;
	}

	/* 即将开讲的图片 */
	.tabDanu .tabDanu-row .tabDanu-rowImg {
		width: 150px;
	}

	/* 开讲者的信息 */
	.kaijian-xinxi {
		text-align: left;
		margin: auto;
		padding-left: 10px;
	}

	.titleName {
		font-family: SimHei;
		width: 195px;
		font-size: 18px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 24px;
		letter-spacing: 0px;
		color: #333333;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		display: -webkit-box;
		/*作为弹性伸缩盒子模型显示*/
		-webkit-line-clamp: 1;
		/*显示的行数；如果要设置2行加...则设置为2*/
		overflow: hidden;
		text-overflow: ellipsis;
		/* 溢出用省略号*/
		/*! autoprefixer: off */
		-webkit-box-orient: vertical;
		/*伸缩盒子的子元素排列：从上到下*/
	}

	.kaijian-imgName {
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 14px;
	}

	/* 开讲者的头像 */
	.kaijian-imgName img {
		padding: 6px 6px;
		width: 30px;
	}

	/* 开讲时间 */
	.kaijianDate {
		color: #666666;
		font-size: 14px;
	}

	/* 大牛来了 广告 */
	.daniuGuanggao {
		margin-top: 10px;
		margin: auto;
	}

	.daniuGuanggao img {
		border-radius: 10px;
		width: 360px;
		margin-top: 10px;
	}

	/* 图文教程 */
	.AIts {
		padding-right: 145px;
	}
</style>
