<template>
    <div class="m-container index">
        <h1 class="f-abs-hide">社区首页</h1>
        <top-nav></top-nav>
        <div class="home">
            <div class="home-sel f-clearfix">
                <!-- 交互说明
                   选中的选项dropdown-opitem上追加.on
                   点击作品页的时候，显示.work-sel,点击非作品页的时候显示.dropdown
                 -->
                <div class="dropdown">
                    <div class="dropdown-selected">
                        <span class="selected-value">热门</span> <i class="g-iconfont-arrowdown"></i>
                    </div>
                    <ul class="dropdown-options">
                        <li class="dropdown-opitem on">热门</li>
                        <li class="dropdown-opitem">我的</li>
                        <li class="dropdown-opitem">策划</li>
                        <li class="dropdown-opitem">程序</li>
                        <li class="dropdown-opitem">美术</li>
                        <li class="dropdown-opitem">VR/AR</li>
                    </ul>
                </div>
                <!-- 交互说明
                  点击hot或者new时，相对应的高亮在后面追加.on
                 -->
                <ul class="hot-new">
                    <li class="hot on"><a href="javascript:;">最热</a></li>|<li class="new"><a href="javascript:;">最新</a></li>
                </ul>
            </div>
            <!-- 交互说明
                有新的内容时显示
             -->
            <div class="new-msg">
                <p>有新的内容推荐，点击刷新~</p>
            </div>
            <ul class="uarticle">
                <!-- 文章：无图 -->
                <li class="uarticle-item">
                    <div class="author">
                        <a href="javascript:;" class="author-link">
                            <img  src="http://lorempixel.com/50/50/people/" class="author-head" alt=""> </span ><span class="author-name">BeforeDawn</span>
                        </a>
                        <span class="author-time">3分钟前</span>
                    </div>
                    <h4 class="uarticle-tit f-hide-col-1"><a class="link" href="javascript:;" target="_blank" title="内容标题">内容标题内容标题内容标题内容标题内容标题</a></h4>
                    <div class="uarticle-wrap">
                        <div class="uarticle-info">
                            <p class="uarticle-tro f-hide-col-2"><a class="link" href="javascript:;" target="_blank" title="内容文案">内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案</a></p>
                        </div>
                        <div class="umetadata">
                            <ul class="umetadata-main">
                                <li class="umetadata-li"><a class="link" href="javascript:;" target="_blank">30个赞</a></li>
                                <li class="umetadata-li"><a class="link" href="javascript:;" target="_blank">9条评论</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <!-- 文章有图 -->
                <li class="uarticle-item">
                    <div class="author">
                        <a href="javascript:;" class="author-link">
                            <img  src="http://lorempixel.com/50/50/people/" class="author-head" alt=""> </span ><span class="author-name">BeforeDawn</span>
                        </a>
                        <span class="author-time">3分钟前</span>
                    </div>
                    <h4 class="uarticle-tit f-hide-col-1"><a class="link" href="javascript:;" target="_blank" title="内容标题">内容标题内容标题内容标题内容标题内容标题</a></h4>
                    <div class="uarticle-wrap">
                        <a class="uarticle-pic" href="javascript:;" target="_blank"><img src="http://lorempixel.com/190/115/" alt=""></a>
                        <div class="uarticle-info">
                            <p class="uarticle-tro f-hide-col-2"><a class="link" href="javascript:;" target="_blank" title="内容文案">内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案</a></p>
                        </div>
                        <div class="umetadata">
                            <ul class="umetadata-main">
                                <li class="umetadata-li"><a class="link" href="javascript:;" target="_blank">30个赞</a></li>
                                <li class="umetadata-li"><a class="link" href="javascript:;" target="_blank">9条评论</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <!-- 文章有视频 -->
                <li class="uarticle-item">
                    <div class="author">
                        <a href="javascript:;" class="author-link">
                            <img  src="http://lorempixel.com/50/50/people/" class="author-head" alt=""> </span ><span class="author-name">BeforeDawn</span>
                        </a>
                        <span class="author-time">3分钟前</span>
                    </div>
                    <h4 class="uarticle-tit f-hide-col-1"><a class="link" href="javascript:;" target="_blank" title="内容标题">内容标题内容标题内容标题内容标题内容标题</a></h4>
                    <div class="uarticle-wrap">
                        <div class="uarticle-info">
                            <p class="uarticle-tro f-hide-col-2"><a class="link" href="javascript:;" target="_blank" title="内容文案">内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案</a></p>
                            <div class="video-wrap">
                                <i class="video-play g-iconfont-play"></i>
                                <video class="video-box" src="http://www.w3school.com.cn/i/movie.mp4"
                                       poster="http://lorempixel.com/343/157">
                                    您的浏览器不支持 video 标签。
                                </video>
                            </div>
                        </div>
                        <div class="umetadata">
                            <ul class="umetadata-main">
                                <li class="umetadata-li"><a class="link" href="javascript:;" target="_blank">30个赞</a></li>
                                <li class="umetadata-li"><a class="link" href="javascript:;" target="_blank">9条评论</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <!-- 多品单图 -->
                <li class="uarticle-item work-img-item">
                    <div class="author">
                        <a href="javascript:;" class="author-link">
                            <img  src="http://lorempixel.com/50/50/people/" class="author-head" alt=""> </span ><span class="author-name">BeforeDawn</span>
                        </a>
                        <span class="author-time">3分钟前</span>
                    </div>
                    <div class="uarticle-wrap">
                        <a class="uarticle-pic" href="javascript:;" target="_blank"><img src="http://lorempixel.com/190/115/" alt=""></a>
                        <div class="uarticle-info">
                            <h4 class="uarticle-tit f-hide-col-1"><a class="link" href="javascript:;" target="_blank" title="内容标题">内容标题内容标题内容标题内容标题内容标题</a></h4>
                            <p class="uarticle-tro"><a class="link" href="javascript:;" target="_blank" title="内容文案">内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案</a></p>
                        </div>
                        <div class="umetadata">
                            <ul class="umetadata-main">
                                <li class="umetadata-li"><a class="link" href="javascript:;" target="_blank">30个赞</a></li>
                                <li class="umetadata-li"><a class="link" href="javascript:;" target="_blank">9条评论</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <!-- 多品多图 -->
                <li class="uarticle-item">
                    <div class="author">
                        <a href="javascript:;" class="author-link">
                            <img  src="http://lorempixel.com/50/50/people/" class="author-head" alt=""> </span ><span class="author-name">BeforeDawn</span>
                        </a>
                        <span class="author-time">3分钟前</span>
                    </div>
                    <h4 class="uarticle-tit f-hide-col-1"><a class="link" href="javascript:;" target="_blank" title="内容标题">内容标题内容标题内容标题内容标题内容标题</a></h4>
                    <div class="uarticle-wrap">
                        <ul class="workslist">
                            <li class="workslist-item"><a class="workslist-link" href="javascript:;"><img src="http://lorempixel.com/232/144/" alt=""></a></li>
                            <li class="workslist-item"><a class="workslist-link" href="javascript:;"><img src="http://lorempixel.com/232/144/" alt=""></a></li>
                            <li class="workslist-item"><a class="workslist-link" href="javascript:;"><img src="http://lorempixel.com/232/144/" alt=""></a></li>
                        </ul>
                    </div>
                </li>
                <!-- 提出问题无回复&有回复 -->
                <li class="uarticle-item">
                    <div class="author">
                        <a href="javascript:;" class="author-link">
                            <img  src="http://lorempixel.com/50/50/people/" class="author-head" alt=""> </span ><span class="author-name">BeforeDawn</span>
                        </a>
                        <span class="anthor-done">提了问题</span>
                        <span class="author-time">3分钟前</span>
                    </div>
                    <h4 class="uarticle-tit f-hide-col-2"><a class="link" href="javascript:;" target="_blank" title="内容标题">内容标题内容标题内容标题内容标题内容标题题内容标标题内容标题题内容标题内容标题</a></h4>
                    <div class="uarticle-wrap">
                        <div class="uarticle-info">
                            <!-- <p class="uarticle-tro f-hide-col-2"><a class="link" href="javascript:;" target="_blank" title="内容文案">内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案</a></p> -->
                        </div>
                        <div class="umetadata">
                            <ul class="umetadata-main">
                                <!-- 交互说明
                                    0回答，umetadata-li文案为消灭0回答
                                    有回答 ，umetadata-li文案为% 个回答
                                 -->
                                <li class="umetadata-li"><a class="link" href="javascript:;" target="_blank">消灭 0 回答</a></li>
                                <li class="umetadata-li f-hide"><a class="link" href="javascript:;" target="_blank">9 个回答</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <!-- 回答问题无图 -->
                <li class="uarticle-item">
                    <div class="author">
                        <a href="javascript:;" class="author-link">
                            <img  src="http://lorempixel.com/50/50/people/" class="author-head" alt=""> </span ><span class="author-name">BeforeDawn</span>
                        </a>
                        <span class="anthor-done">回答了问题</span>
                        <span class="author-time">3分钟前</span>
                    </div>
                    <h4 class="uarticle-tit f-hide-col-1"><a class="link" href="javascript:;" target="_blank" title="内容标题">内容标题内容标题内容标题内容标题内容标题</a></h4>
                    <div class="uarticle-wrap">
                        <div class="uarticle-info">
                            <p class="uarticle-tro f-hide-col-2"><a class="link" href="javascript:;" target="_blank" title="内容文案">内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案</a></p>
                        </div>
                        <div class="umetadata">
                            <ul class="umetadata-main">
                                <li class="umetadata-li"><a class="link fav" href="javascript:;" target="_blank">999</a></li>
                                <li class="umetadata-li"><a class="link" href="javascript:;" target="_blank">9条评论</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <!-- 回答问题有图 -->
                <li class="uarticle-item">
                    <div class="author">
                        <a href="javascript:;" class="author-link">
                            <img  src="http://lorempixel.com/50/50/people/" class="author-head" alt=""> </span ><span class="author-name">BeforeDawn</span>
                        </a>
                        <span class="author-time">3分钟前</span>
                    </div>
                    <h4 class="uarticle-tit f-hide-col-1"><a class="link" href="javascript:;" target="_blank" title="内容标题">内容标题内容标题内容标题内容标题内容标题</a></h4>
                    <div class="uarticle-wrap">
                        <a class="uarticle-pic" href="javascript:;" target="_blank"><img src="http://lorempixel.com/190/115/" alt=""></a>
                        <div class="uarticle-info">
                            <p class="uarticle-tro f-hide-col-2"><a class="link" href="javascript:;" target="_blank" title="内容文案">内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案</a></p>
                        </div>
                        <div class="umetadata">
                            <ul class="umetadata-main">
                                <li class="umetadata-li"><a class="link fav" href="javascript:;" target="_blank">999</a></li>
                                <li class="umetadata-li"><a class="link" href="javascript:;" target="_blank">9条评论</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <!-- 赞了问题 -->
                <li class="uarticle-item">
                    <div class="author">
                        <a href="javascript:;" class="author-link">
                            <img  src="http://lorempixel.com/50/50/people/" class="author-head" alt=""> </span ><span class="author-name">BeforeDawn</span>
                        </a>
                        <span class="anthor-done">回答了问题</span>
                        <span class="author-time">3分钟前</span>
                    </div>
                    <h4 class="uarticle-tit f-hide-col-1"><a class="link" href="javascript:;" target="_blank" title="内容标题">内容标题内容标题内容标题内容标题内容标题</a></h4>
                    <div class="uarticle-wrap">
                        <div class="answer-job">
                            <span>野口同学</span><span class="job-txt">视觉设计师</span>
                        </div>
                        <div class="uarticle-info">
                            <p class="uarticle-tro f-hide-col-2"><a class="link" href="javascript:;" target="_blank" title="内容文案">内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案</a></p>
                        </div>
                        <div class="umetadata">
                            <ul class="umetadata-main">
                                <li class="umetadata-li"><a class="link fav" href="javascript:;" target="_blank">999</a></li>
                                <li class="umetadata-li"><a class="link" href="javascript:;" target="_blank">9条评论</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
            <!--交互说明：
                列表页下拉触底显示
                默认 .加载按钮 | dl-goto（展示dlmore-btn&dlmore-btnsec）
                加载中 | dl-loading（展示dlmore-loading）
                没有更多数据 | dl-nomore（展示dlmore-nomore）
            -->
            <div class="m-dlmore dl-goto">
                <a class="dlmore-btn" href="javascript:;">查看更多</a>
                <span class="dlmore-loading gico-loading loading-20">加载中</span>
                <span class="dlmore-nomore">没有更多消息</span>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState,mapMutations} from 'vuex';
    import topNav from 'Components/community/top-nav.vue'
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