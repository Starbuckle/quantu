/*******************************

脚本名称: 动物夜市——无限胡萝卜
下载地址：微信小程序
软件版本：9.99.9
脚本作者：彭于晏💞
更新时间：2023-8-23
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

^http[s]?:\/\/www.liwox.com\/api\/game\/account\/data\/download url script-response-body https://raw.githubusercontent.com/Starbuckle/quantu/main/liwox.js

[mitm] 

hostname = www.liwox.com

*******************************/

var body = $response.body.replace(/playerInfo_gold\\":\d+/g,'playerInfo_gold\\":88878')
.replace(/playerInfo_buildScore\\":\d+/g,'playerInfo_buildScore\\":88998')
.replace(/playerInfo_shipuScore\\":\d+/g,'playerInfo_shipuScore\\":88898')
.replace(/playerInfo_diamond\\":\d+/g,'playerInfo_diamond\\":888888')
$done({ body });
