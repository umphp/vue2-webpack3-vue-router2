<template>
    <div class="m-container index">
        <h1 class="f-abs-hide">社区首页</h1>
        <top-nav></top-nav>
        <div class="work-main">
            <div class="home-sel f-clearfix">
                <div class="work-sel">
                    <a class="work-dian on" href="javascript:;">作品点评</a><a class="work-enjoy" href="javascript:;">佳作欣赏</a>
                </div>
                <!-- 交互说明
                  点击hot或者new时，相对应的高亮在后面追加.on
                 -->
                <ul class="hot-new">
                    <li class="hot on"><a href="javascript:;">最热</a></li>
                    |
                    <li class="new"><a href="javascript:;">最新</a></li>
                </ul>
            </div>
            <div class="f-clearfix">
                <ul class="work-list w-left">
                    <li class="work-item">
                        <a href="javascript:;">
                            <div class="work-box">
                                <!-- 交互说明
                                  动图添加下列ico-gif标签
                                -->
                                <span class="ico-gif"></span> <img class="work-img"
                                src="http://lorempixel.com/300/200/people/" alt="">
                                <div class="work-love">
                                    <span><i class="g-iconfont-like"></i> 5</span>
                                    <span><i class="g-iconfont-pinglun"></i> 5</span>
                                </div>
                            </div>
                        </a>
                        <p class="title">
                            这个杀手不太冷短发小萝莉 </p>
                        <div class="author f-clearfix">
                            <span class="user-img"> <img src="http://lorempixel.com/50/50/people/" alt=""> </span >
                            <div class="intro-box">
                                <span class="user-name f-hide-col-1">
                                    BeforeDawn
                                </span>
                                <span class="user-time">
                                    3分钟前
                                </span>
                            </div>
                        </div>
                        <!--item-comment
                            交互说明
                            收起 | 默认
                            展开 | show-comment-detail
                        -->
                        <div class="item-comment">
                            <p class="tit">晨星专家点评</p>
                            <p class="intro"><span class="name f-hide-col-1">这个名字很长很长很长</span><i>：</i>完成度不高，但是从模型上来看建模是没有什么问题的。适当的时候可以发出线框图来看看。材质渲染方面可以使用阿诺德渲染或者VRAY渲染来尝试一下适当的但是从模型上来看建模是没有什么问题的。</p>
                            <div class="opt-line">
                                <div class="opt-down"><i class="g-iconfont-arrowdown"></i></div>
                                <div class="opt-up"><i class="g-iconfont-arrowup"></i></div>
                            </div>
                        </div>
                    </li>
                    <li class="work-item">
                        <a href="javascript:;">
                            <div class="work-box">
                                <img class="work-img" src="http://lorempixel.com/400/300/people/" alt="">
                                <div class="work-love">
                                    <span><i class="g-iconfont-like"></i> 5</span>
                                    <span><i class="g-iconfont-pinglun"></i> 5</span>
                                </div>
                            </div>
                        </a>
                        <p class="title">
                            这个杀手不太冷短发小萝莉 </p>
                        <div class="author f-clearfix">
                            <span class="user-img"> <img src="http://lorempixel.com/50/50/people/" alt=""> </span >
                            <div class="intro-box">
                                <span class="user-name f-hide-col-1">
                                    BeforeDawn
                                </span>
                                <span class="user-time">
                                    3分钟前
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul class="work-list w-right">
                    <li class="work-item">
                        <a href="javascript:;">
                            <div class="work-box">
                                <img class="work-img" src="http://lorempixel.com/400/300/people/" alt="">
                                <div class="work-love">
                                    <span><i class="g-iconfont-like"></i> 5</span>
                                    <span><i class="g-iconfont-pinglun"></i> 5</span>
                                </div>
                            </div>
                        </a>
                        <p class="title">
                            这个杀手不太冷短发小萝莉 </p>
                        <div class="author f-clearfix">
                            <span class="user-img"> <img src="http://lorempixel.com/50/50/people/" alt=""> </span >
                            <div class="intro-box">
                                <span class="user-name f-hide-col-1">
                                    BeforeDawn
                                </span>
                                <span class="user-time">
                                    3分钟前
                                </span>
                            </div>
                        </div>
                        <!--item-comment
                            交互说明
                            收起 | 默认
                            展开 | show-comment-detail
                        -->
                        <div class="item-comment show-comment-detail">
                            <p class="tit">晨星专家点评</p>
                            <p class="intro"><span class="name f-hide-col-1">这个名字很长很长很长</span><i>：</i>完成度不高，但是从模型上来看建模是没有什么问题的。适当的时候可以发出线框图来看看。材质渲染方面可以使用阿诺德渲染或者VRAY渲染来尝试一下适当的但是从模型上来看建模是没有什么问题的。完成度不高，但是从模型上来看建模是没有什么问题的。适当的时候可以发出线框图来看看。材质渲染方面可以使用阿诺德渲染或者VRAY渲染来尝试一下适当的但是从模型上来看建模是没有什么问题的。</p>
                            <div class="opt-line">
                                <div class="opt-down"><i class="g-iconfont-arrowdown"></i></div>
                                <div class="opt-up"><i class="g-iconfont-arrowup"></i></div>
                            </div>
                        </div>
                    </li>
                    <li class="work-item">
                        <a href="javascript:;">
                            <div class="work-box">
                                <img class="work-img" src="http://lorempixel.com/400/300/people/" alt="">
                                <div class="work-love">
                                    <span><i class="g-iconfont-like"></i> 5</span>
                                    <span><i class="g-iconfont-pinglun"></i> 5</span>
                                </div>
                            </div>
                        </a>
                        <p class="title">
                            这个杀手不太冷短发小萝莉 </p>
                        <div class="author f-clearfix">
                            <span class="user-img"> <img src="http://lorempixel.com/50/50/people/" alt=""> </span >
                            <div class="intro-box">
                                <span class="user-name f-hide-col-1">
                                    BeforeDawn
                                </span>
                                <span class="user-time">
                                    3分钟前
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 列表页下拉显示 -->
            <!--交互说明：
                默认不展示，三个区块可灵活抽取展示
                加载按钮 | dl-goto（展示dlmore-btn&dlmore-btnsec）
                加载中 | dl-loading（展示dlmore-loading）
                没有更多数据 | dl-nomore（展示dlmore-nomore）
            -->
            <div class="m-dlmore dl-goto">
                <a class="dlmore-btn" href="javascript:;">刷新页面查看更多消息…</a>
                <span class="dlmore-loading gico-loading loading-20">加载中</span>
                <span class="dlmore-nomore">没有更多消息</span>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState,mapMutations} from 'vuex';
    import topNav from 'Components/community/top-nav.vue';
    export default {
        data () {
            return {
                page: 'index'
            }
        },
        components: {
            topNav,
        },
        computed:{
            ...mapState({
                'archives' : 'archives'
            })
        },
        mounted(){
            this.doIt();
        },
        methods:{
            ...mapMutations({
                'SAVE_ARCHIVES':'SAVE_ARCHIVES'
            })
            ,doIt(){
                this.SAVE_ARCHIVES([1,2,3]);
            }
        }

    }
</script>