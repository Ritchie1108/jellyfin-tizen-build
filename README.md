# jellyfin-tizen-builds
The purpose of this repository is to automatically build the most up-to-date version of jellyfin-tizen.

## Installation Guide
### Prerequisites
- Install Tizen Studio  and CLI (https://developer.tizen.org/development/tizen-studio/download)
- Download .wgt files from a release (https://github.com/Ritchie1108/jellyfin-tizen-build/releases)

### Getting Started
1. Install prerequisites. that's all

### Deploy to TV
1. Activate Developer Mode on TV (https://developer.samsung.com/tv/develop/getting-started/using-sdk/tv-device).
2. Connect to TV with Device Manager from Tizen Studio. Typically located in `/tizen-studio/tools/device-manager/bin`
3. Install the package.  
To navigate to your directory, typically located in `/tizen-studio/tools/ide/bin`
```bash
tizen install -n jellyfin.wgt -t <the name of your tv>
```
> You can find your tv name in Device Manager from Tizen Studio or using `sdb devices`.  
