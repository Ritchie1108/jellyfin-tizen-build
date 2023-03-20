# jellyfin-tizen-build
每天定时检查稳定分支的最新提交来自动构建并发布 jellyfin-tizen  
The purpose of this repository is to automatically build the most up-to-date release version of jellyfin-tizen.

## How to use
### 环境依赖 / Prerequisites
- 安装  Tizen Studio 和 CLI / Install Tizen Studio and CLI.   
(https://developer.tizen.org/development/tizen-studio/download)
- 下载你需要的发布版本 / Download .wgt files from a release.   
(https://github.com/Ritchie1108/jellyfin-tizen-build/releases)

### 安装到电视上 / Deploy to TV
1. 开启电视的开发者模式 / Activate Developer Mode on TV.   
(https://developer.samsung.com/tv/develop/getting-started/using-sdk/tv-device)

2. 在 Tizen Studio 的 Device Manager 中连接上你的电视 / Connect to TV with Device Manager from Tizen Studio. 
> 路径一般位于 / Typically located in: `/tizen-studio/tools/device-manager/bin`

3. 在命令行中 cd 到下面的目录 / To navigate to your directory.
> 路径一般位于 / Typically located in: `/tizen-studio/tools/ide/bin`

4. 在命令行中输入以下命令, 注意 wgt 文件名 / Install the package, using your .wgt filename.
```bash
tizen install -n jellyfin.wgt -t <the name of your tv>
```
> 电视名可以在 Device Manager 中进行查看, 也可以用 `sdb devices` 来查看 /  You can find your tv name in Device Manager from Tizen Studio or using `sdb devices`.  

# Thanks for
jellyfin/jellyfin-web: https://github.com/jellyfin/jellyfin-web  
jellyfin/jellyfin-tizen: https://github.com/jellyfin/jellyfin-tizen  
jeppevinkel/jellyfin-tizen-builds: https://github.com/jeppevinkel/jellyfin-tizen-builds
