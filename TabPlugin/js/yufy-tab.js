/**
 * * 选项卡插件
 * * author: @苏日俪格
 * @param {object} $el 容器(必填)
 * @param {object} tabBtn 选项的元素(必填)
 * @param {object} tabDiv 选项内容的元素(必填)
 * @param {object} tabEve 选项事件(默认onclick)
 * @param {object} tabBtnStyle //选项的样式
 * @param {object} tabDivStyle //选项内容的样式
 * @param {object} tabBtnHoverStyle //选项hover的样式
 * 调用方法
 *     new getTabBar();
 */
(function(win, doc) {
    function tabBar(options) {
        let tabBarConfig = {
            width: this.width ? this.width : '250px',
            height: this.height ? this.height : '250px',
            tabEve: this.tabEve ? this.tabEve : 'onclick',
            tabBtnStyle: {
                backgroundColor: '#CCCCCC'
            },
            tabDivStyle: {
                width: '200px',
                height: '200px',
                backgroundColor: '#CCCCCC',
                display: 'none'
            },
            tabBtnHoverStyle: {
                backgroundColor: '#e3e4e5'
            }
        };
        let _this = this;
        _this = Object.assign(this, tabBarConfig, options);
        this.$el = doc.querySelector(this.$el);
        this.tabBtn = doc.querySelectorAll(this.tabBtn);
        this.tabDiv = doc.querySelectorAll(this.tabDiv);
        let [oCombinetabBtnStyle, oCombinetabDivStyle, oCombinetabBtnHoverStyle] = [
            Object.assign(tabBarConfig.tabBtnStyle, this.tabBtnStyle),
            Object.assign(tabBarConfig.tabDivStyle, this.tabDivStyle),
            Object.assign(tabBarConfig.tabBtnHoverStyle, this.tabBtnHoverStyle)
        ];
        this.getTabBarStyle(oCombinetabBtnStyle, oCombinetabDivStyle, oCombinetabBtnHoverStyle);
        this.getTabBar(oCombinetabBtnStyle, oCombinetabDivStyle, oCombinetabBtnHoverStyle);
    }
    tabBar.prototype = {
        getTabBarStyle(oCombinetabBtnStyle, oCombinetabDivStyle, oCombinetabBtnHoverStyle) {
            for (let key1 in this) {
                for (let key2 in this.$el.style) {
                    if (key1 === key2) {
                        this.$el.style[key2] = this[key1];
                    }
                }
            }
            for (let key1 in oCombinetabBtnStyle) {
                for (let item of this.tabBtn) {
                    for (let key2 in item.style) {
                        if (key1 === key2) {
                            item.style[key2] = oCombinetabBtnStyle[key1];
                        }
                        if (item.className == 'active') {
                            let oCombineBtnStyle = {};
                            oCombineBtnStyle = Object.assign(oCombineBtnStyle, oCombinetabBtnStyle, oCombinetabBtnHoverStyle);
                            for (let key3 in oCombineBtnStyle) {
                                if (key2 === key3) {
                                    item.style[key2] = oCombineBtnStyle[key3];
                                }
                            }
                        }
                    }
                }
            }
            for (let key1 in oCombinetabDivStyle) {
                for (let item of this.tabDiv) {
                    for (let key2 in item.style) {
                        if (key1 === key2) {
                            item.style[key2] = oCombinetabDivStyle[key1];
                        }
                        if (item.className == 'active') {
                            if (key2 == 'display') {
                                item.style[key2] = 'block';
                            }
                        }
                    }
                }
            }
        },
        getTabBar(oCombinetabBtnStyle, oCombinetabDivStyle, oCombinetabBtnHoverStyle) {
            for (let i = 0; i < this.tabBtn.length; i++) {
                let _this = this;
                this.tabBtn[i]['index'] = i;
                this.tabBtn[i][this.tabEve] = function() {
                    for (let i = 0; i < _this.tabBtn.length; i++) {
                        _this.tabBtn[i].className = '';
                        _this.tabDiv[i].className = '';
                    }
                    this.className = 'active';
                    _this.tabDiv[_this.tabBtn[i]['index']].className = 'active';
                    _this.getTabBarStyle(oCombinetabBtnStyle, oCombinetabDivStyle, oCombinetabBtnHoverStyle);
                };
            }
        }
    };
    win.tabBar = tabBar;
})(window, document);
