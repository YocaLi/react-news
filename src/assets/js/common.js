Date.prototype.format = function(format) {
    let dict = {
        'y+': this.getFullYear(),
        'M+': this.getMonth() + 1,
        'd+': this.getDate(),
        'H+': this.getHours(),
        'h+': this.getHours() - 12,
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
    }
    for (let k in dict) {
        let reg = new RegExp(k, 'g')
        format = format.replace(reg, function(g0) {
            return ('000000' + dict[k]).slice(-g0.length)
        })
    }
    return format
}
Array.prototype.shuffle = function() {
    var input = this
    for (var i = input.length - 1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1))
        var itemAtIndex = input[randomIndex]
        input[randomIndex] = input[i]
        input[i] = itemAtIndex
    }
    return input
}

export default {
    formatTimeToMatch (currentServerTime, startTime) {
        let timestamp = Date.parse(startTime.replace(/-/g, '/'))
        let date = new Date(timestamp).format('MM月dd日')
        let time = startTime.substring(11)
        let todayTime = new Date(new Date(currentServerTime / 1).format('yyyy/MM/dd')).getTime()//今天12点的时间戳大小
        let chazhi = (new Date(timestamp).getTime() - todayTime) / (24 * 60 * 60 * 1000)
        if (chazhi >= 0 && chazhi < 1) {
            return time + '开始'
        } else if (chazhi >= 1 && chazhi < 2) {
            return '明天' + time
        } else if (chazhi >= 2 && chazhi < 3) {
            return '后天' + time
        } else {
            return date
        }
    },
    getOsType() {
        let agent = navigator.userAgent.toLowerCase()
        let os_type = ''
        let version
        if (/android/i.test(navigator.userAgent)) {
            let index = agent.indexOf('android')
            version = agent.substr(index + 8, 3)
            os_type = 'Android ' + version
        }
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            let index = agent.indexOf('os')
            version = agent.substr(index + 3, 3)
            os_type = 'iOS ' + version
        }
        if (/Linux/i.test(navigator.userAgent) && !/android/i.test(navigator.userAgent) && !/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            os_type = 'Linux'
        }
        if (/windows|win32/i.test(navigator.userAgent)) {
            os_type = 'windows32'
        }
        if (/windows|win64/i.test(navigator.userAgent)) {
            os_type = 'windows64'
        }
        return os_type
    },
    browserType() {
        let agent = navigator.userAgent.toLowerCase()
        let browser_type = ''
        if (agent.indexOf('msie') > 0) {
            browser_type = 'IE'
        }
        if (agent.indexOf('firefox') > 0) {
            browser_type = 'firefox'
        }
        if (agent.indexOf('chrome') > 0 && agent.indexOf('mb2345browser') < 0 && agent.indexOf('360 aphone browser') < 0) {
            browser_type = 'chrome'
        }
        if (agent.indexOf('360 aphone browser') > 0 || agent.indexOf('qhbrowser') > 0) {
            browser_type = '360'
        }
        if (agent.indexOf('ucbrowser') > 0) {
            browser_type = 'UC'
        }
        if (agent.indexOf('micromessenger') > 0) {
            browser_type = 'WeChat'
        }
        if ((agent.indexOf('mqqbrowser') > 0 || agent.indexOf('qq') > 0) && agent.indexOf('micromessenger') < 0) {
            browser_type = 'QQ'
        }
        if (agent.indexOf('miuibrowser') > 0) {
            browser_type = 'MIUI'
        }
        if (agent.indexOf('mb2345browser') > 0) {
            browser_type = '2345'
        }
        if (agent.indexOf('sogoumobilebrowser') > 0) {
            browser_type = 'sogou'
        }
        if (agent.indexOf('liebaofast') > 0) {
            browser_type = 'liebao'
        }
        if (agent.indexOf('safari') > 0 && agent.indexOf('chrome') < 0 && agent.indexOf('ucbrowser') < 0 && agent.indexOf('micromessenger') < 0 && agent.indexOf('mqqbrowser') < 0 && agent.indexOf('miuibrowser') < 0 && agent.indexOf('mb2345browser') < 0 && agent.indexOf('sogoumobilebrowser') < 0 && agent.indexOf('liebaofast') < 0 && agent.indexOf('qhbrowser') < 0) {
            browser_type = 'safari'
        }
        return browser_type
    },
}