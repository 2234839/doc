
// OceanPress DocTree - 动态加载的文档树
(function() {
  'use strict';
  
  // 文档树数据
  const docTreeData = [
  {
    "id": "20230925200243-n7i7jir",
    "hpath": "/index",
    "title": "index",
    "sort": 0,
    "children": [
      {
        "id": "20250805144437-8tef5gs",
        "hpath": "/index/amd 8700g 使用gpu运行ollama",
        "title": "amd 8700g 使用gpu运行ollama",
        "sort": 0
      },
      {
        "id": "20250605085551-m90g40p",
        "hpath": "/index/位图图片转svg",
        "title": "位图图片转svg",
        "sort": 1
      },
      {
        "id": "20250304134614-qnhu20w",
        "hpath": "/index/windows 语音输入",
        "title": "windows 语音输入",
        "sort": 1
      },
      {
        "id": "20250226150151-nw265i8",
        "hpath": "/index/[Vue warn]: Failed to resolve component: feDropShadow 的pr解决之路",
        "title": "[Vue warn]: Failed to resolve component: feDropShadow 的pr解决之路",
        "sort": 2
      },
      {
        "id": "20250226134940-i75khvz",
        "hpath": "/index/如何评价CSS框架TailwindCSS？",
        "title": "如何评价CSS框架TailwindCSS？",
        "sort": 3
      },
      {
        "id": "20250225214521-7bhsxel",
        "hpath": "/index/超级棒的remote app",
        "title": "超级棒的remote app",
        "sort": 4
      },
      {
        "id": "20250216144955-o08said",
        "hpath": "/index/电子爱好",
        "title": "电子爱好",
        "sort": 5,
        "children": [
          {
            "id": "20250216145021-umi0c9s",
            "hpath": "/index/电子爱好/微型单片机",
            "title": "微型单片机",
            "children": [
              {
                "id": "20250216145031-clci1j7",
                "hpath": "/index/电子爱好/微型单片机/esp8266",
                "title": "esp8266"
              }
            ]
          }
        ]
      },
      {
        "id": "20250212204219-tpp9jkv",
        "hpath": "/index/ai agent学习",
        "title": "ai agent学习",
        "sort": 6
      },
      {
        "id": "20250207102303-34utbcn",
        "hpath": "/index/vscode continue插件支持从思源中搜索文档使用",
        "title": "vscode continue插件支持从思源中搜索文档使用",
        "sort": 7
      },
      {
        "id": "20250203190113-bu077qy",
        "hpath": "/index/ai测试",
        "title": "ai测试",
        "sort": 8
      },
      {
        "id": "20250202145716-wvgw7m7",
        "hpath": "/index/对于依赖注入的思考-二",
        "title": "对于依赖注入的思考-二",
        "sort": 9,
        "children": [
          {
            "id": "20250203112550-q97m2ib",
            "hpath": "/index/对于依赖注入的思考-二/Reflections on Dependency Injection",
            "title": "Reflections on Dependency Injection"
          }
        ]
      },
      {
        "id": "20250123195658-scsswa0",
        "hpath": "/index/各类网站官网",
        "title": "各类网站官网",
        "sort": 10
      },
      {
        "id": "20250101095839-ec2nkqw",
        "hpath": "/index/对于依赖注入的思考",
        "title": "对于依赖注入的思考",
        "sort": 11,
        "children": [
          {
            "id": "20250120091259-h7hf587",
            "hpath": "/index/对于依赖注入的思考/Suddenly Realized Why Dependency Injection Is Necessary",
            "title": "Suddenly Realized Why Dependency Injection Is Necessary"
          }
        ]
      },
      {
        "id": "20250308191532-g9hkuca",
        "hpath": "/index/Automatic translation of documents-the combination of expr plugin and aichat plugin technology",
        "title": "Automatic translation of documents-the combination of expr plugin and aichat plugin technology",
        "sort": 12
      },
      {
        "id": "20241228103033-h9y9bt3",
        "hpath": "/index/自动翻译文档-expr插件和aichat插件的组合技",
        "title": "自动翻译文档-expr插件和aichat插件的组合技",
        "sort": 13
      },
      {
        "id": "20241227155607-14cuxd5",
        "hpath": "/index/aiChat-plugin-siyuan",
        "title": "aiChat-plugin-siyuan",
        "sort": 14
      },
      {
        "id": "20241022155634-9i70eo4",
        "hpath": "/index/我的软件资源清单",
        "title": "我的软件资源清单",
        "sort": 15,
        "children": [
          {
            "id": "20250209144058-w6zqsho",
            "hpath": "/index/我的软件资源清单/崮生61键按键方案",
            "title": "崮生61键按键方案"
          },
          {
            "id": "20250206101803-rkl1ig1",
            "hpath": "/index/我的软件资源清单/continue",
            "title": "continue"
          },
          {
            "id": "20250306095518-jlyl2hi",
            "hpath": "/index/我的软件资源清单/pixpin",
            "title": "pixpin"
          }
        ]
      },
      {
        "id": "20240109173237-d7cuxlg",
        "hpath": "/index/test",
        "title": "test",
        "sort": 16,
        "children": [
          {
            "id": "20241228093344-9p38sqj",
            "hpath": "/index/test/ExprTest",
            "title": "ExprTest",
            "children": [
              {
                "id": "20250306213356-ekvz9w9",
                "hpath": "/index/test/ExprTest/需要翻译的文档",
                "title": "需要翻译的文档",
                "children": [
                  {
                    "id": "20250306214437-r31jvst",
                    "hpath": "/index/test/ExprTest/需要翻译的文档/未命名",
                    "title": "未命名"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "20250427062301-dtaov2k",
        "hpath": "/index/给脚本猫开发了新的首页",
        "title": "给脚本猫开发了新的首页"
      },
      {
        "id": "20250811182000-rpev1x9",
        "hpath": "/index/国内访问 GitHub API 的简单解决方案",
        "title": "国内访问 GitHub API 的简单解决方案"
      },
      {
        "id": "20250508192447-1q0xnj8",
        "hpath": "/index/开发在线Playground的实践",
        "title": "开发在线Playground的实践"
      },
      {
        "id": "20250424113849-m7bcro5",
        "hpath": "/index/如何分享OceanPress的内容到其他平台",
        "title": "如何分享OceanPress的内容到其他平台"
      },
      {
        "id": "20250630163846-e72bdtc",
        "hpath": "/index/如何设计",
        "title": "如何设计"
      },
      {
        "id": "20250814080313-wys8wfk",
        "hpath": "/index/如何实现模块化加载的前端和后端代码",
        "title": "如何实现模块化加载的前端和后端代码"
      },
      {
        "id": "20250814153947-efg1qd2",
        "hpath": "/index/如何为 claude code 添加用户级mcp工具",
        "title": "如何为 claude code 添加用户级mcp工具"
      },
      {
        "id": "20250816093350-c4hlojl",
        "hpath": "/index/邵东人建网站，为何不找身边的专家？—— 申子龙 为您提供本地化专业网站建设服务",
        "title": "邵东人建网站，为何不找身边的专家？—— 申子龙 为您提供本地化专业网站建设服务"
      },
      {
        "id": "20250507170654-enuezoa",
        "hpath": "/index/使用ai从零开始实现一个在线计算笔记本：NoteCalc",
        "title": "使用ai从零开始实现一个在线计算笔记本：NoteCalc"
      },
      {
        "id": "20250316152730-ut0dzer",
        "hpath": "/index/思源公益知识库",
        "title": "思源公益知识库"
      },
      {
        "id": "20250527104233-so7c9f2",
        "hpath": "/index/随时随地访问家中的思源",
        "title": "随时随地访问家中的思源"
      },
      {
        "id": "20250329095707-ozm41yv",
        "hpath": "/index/通过网络远程唤醒电脑",
        "title": "通过网络远程唤醒电脑"
      },
      {
        "id": "20250724085137-20uwnvo",
        "hpath": "/index/网站后端如何设计文件系统的鉴权",
        "title": "网站后端如何设计文件系统的鉴权"
      },
      {
        "id": "20250606162300-tawz4ma",
        "hpath": "/index/网站中什么尺寸的图片最合适",
        "title": "网站中什么尺寸的图片最合适"
      },
      {
        "id": "20250726085524-dnaymcz",
        "hpath": "/index/微信如何直接打开网站链接",
        "title": "微信如何直接打开网站链接"
      },
      {
        "id": "20250331104122-ibalthg",
        "hpath": "/index/为什响应式设计需要移动端优先",
        "title": "为什响应式设计需要移动端优先"
      },
      {
        "id": "20250814155805-fdxoye3",
        "hpath": "/index/为claude code+glm 添加上眼睛",
        "title": "为claude code+glm 添加上眼睛"
      },
      {
        "id": "20250312225200-5mtfqiq",
        "hpath": "/index/怎么发布npm包",
        "title": "怎么发布npm包"
      },
      {
        "id": "20250420152104-3zsfekn",
        "hpath": "/index/ai生成视频",
        "title": "ai生成视频"
      },
      {
        "id": "20250508195715-fwl85it",
        "hpath": "/index/ai提示词",
        "title": "ai提示词"
      },
      {
        "id": "20250529083931-6gjv4tt",
        "hpath": "/index/AiEnglish ：在阅读中渐进式学习英语",
        "title": "AiEnglish ：在阅读中渐进式学习英语"
      },
      {
        "id": "20250722145119-8p7i3u7",
        "hpath": "/index/Claude Code 配置使用自定义api",
        "title": "Claude Code 配置使用自定义api"
      },
      {
        "id": "20250506095719-tiy36tk",
        "hpath": "/index/deepseek叮",
        "title": "deepseek叮"
      },
      {
        "id": "20250322113857-vh93nri",
        "hpath": "/index/effect-ts",
        "title": "effect-ts"
      },
      {
        "id": "20250620113627-k89mkw1",
        "hpath": "/index/Effect实现接口并发控制",
        "title": "Effect实现接口并发控制"
      },
      {
        "id": "20250813102052-b9wjt9x",
        "hpath": "/index/glm4.5+claude code和qwen以及v0的还原网页测试",
        "title": "glm4.5+claude code和qwen以及v0的还原网页测试",
        "children": [
          {
            "id": "20250813102052-btjeszs",
            "hpath": "/index/glm4.5+claude code和qwen以及v0的还原网页测试/首先我使用 glm-4.5v对网页进行提示词输出",
            "title": "首先我使用 glm-4.5v对网页进行提示词输出",
            "sort": 0
          }
        ]
      },
      {
        "id": "20250401165003-2006op9",
        "hpath": "/index/Identifier 'h' has already been declared",
        "title": "Identifier 'h' has already been declared"
      },
      {
        "id": "20250319215933-nshgiqr",
        "hpath": "/index/leaferjs",
        "title": "leaferjs",
        "children": [
          {
            "id": "20250319220001-bacxpac",
            "hpath": "/index/leaferjs/如何绘制透明背景-深浅相间的方格",
            "title": "如何绘制透明背景-深浅相间的方格"
          }
        ]
      },
      {
        "id": "20250319134255-h8w7hwq",
        "hpath": "/index/linux tar命令压缩解压缩",
        "title": "linux tar命令压缩解压缩"
      },
      {
        "id": "20250508192550-xtk8sij",
        "hpath": "/index/NoteCalc",
        "title": "NoteCalc"
      },
      {
        "id": "20250314212231-3bp2eh7",
        "hpath": "/index/OceanPress 部署思源笔记到自托管 server",
        "title": "OceanPress 部署思源笔记到自托管 server"
      },
      {
        "id": "20250727081527-9l14251",
        "hpath": "/index/ossfs挂载磁盘",
        "title": "ossfs挂载磁盘"
      },
      {
        "id": "20250811143840-8u62rsk",
        "hpath": "/index/pm2",
        "title": "pm2"
      },
      {
        "id": "20250623112355-0jx3wu1",
        "hpath": "/index/prisma sqlite并发错误",
        "title": "prisma sqlite并发错误"
      },
      {
        "id": "20250413211142-d533spm",
        "hpath": "/index/TsFullStack",
        "title": "TsFullStack",
        "children": [
          {
            "id": "20250725185420-jtzbtbq",
            "hpath": "/index/TsFullStack/比prisma studio更好性能的类studio数据管理",
            "title": "比prisma studio更好性能的类studio数据管理"
          },
          {
            "id": "20250424110043-j91p4aj",
            "hpath": "/index/TsFullStack/基于Effect的后端api设计",
            "title": "基于Effect的后端api设计"
          },
          {
            "id": "20250516192100-bbiukav",
            "hpath": "/index/TsFullStack/全景地图",
            "title": "全景地图"
          },
          {
            "id": "20250418190906-eg8nscc",
            "hpath": "/index/TsFullStack/设计思考",
            "title": "设计思考"
          }
        ]
      },
      {
        "id": "20250327103117-2j6h672",
        "hpath": "/index/vue-components-example",
        "title": "vue-components-example"
      }
    ]
  },
  {
    "id": "20210816161946-8u7zzdl",
    "hpath": "/想法",
    "title": "想法",
    "sort": 2,
    "children": [
      {
        "id": "20231208144225-hfjbyjm",
        "hpath": "/想法/笔记计算",
        "title": "笔记计算"
      },
      {
        "id": "20210816161946-80g0obr",
        "hpath": "/想法/纯前端文件转换",
        "title": "纯前端文件转换",
        "children": [
          {
            "id": "20201119101833-ro7laq4",
            "hpath": "/想法/纯前端文件转换/思源静态站点生成",
            "title": "思源静态站点生成"
          }
        ]
      },
      {
        "id": "20231214200058-wb45tvj",
        "hpath": "/想法/函数计算sw加速",
        "title": "函数计算sw加速"
      },
      {
        "id": "20210816161946-fp4gawb",
        "hpath": "/想法/交流",
        "title": "交流",
        "children": [
          {
            "id": "20201104153359-0h9u525",
            "hpath": "/想法/交流/学习群",
            "title": "学习群"
          }
        ]
      },
      {
        "id": "20210816161946-jg7gw9i",
        "hpath": "/想法/链接预览",
        "title": "链接预览",
        "children": [
          {
            "id": "20201106103031-ct0oco7",
            "hpath": "/想法/链接预览/uri_preview",
            "title": "uri_preview"
          }
        ]
      },
      {
        "id": "20210816161946-79tliax",
        "hpath": "/想法/时间线",
        "title": "时间线",
        "children": [
          {
            "id": "20201104153359-x66p2my",
            "hpath": "/想法/时间线/README",
            "title": "README"
          }
        ]
      },
      {
        "id": "20210816161946-yblm94o",
        "hpath": "/想法/项目",
        "title": "项目",
        "children": [
          {
            "id": "20210624094709-grekpei",
            "hpath": "/想法/项目/查典式学习法",
            "title": "查典式学习法"
          },
          {
            "id": "20240812180040-f36fih0",
            "hpath": "/想法/项目/思源标签排序功能",
            "title": "思源标签排序功能"
          },
          {
            "id": "20210102035720-poopll6",
            "hpath": "/想法/项目/振动报时",
            "title": "振动报时"
          },
          {
            "id": "20201121142422-1gk6qv5",
            "hpath": "/想法/项目/md2website",
            "title": "md2website"
          },
          {
            "id": "20201121142503-ivwtfzg",
            "hpath": "/想法/项目/OceanPress",
            "title": "OceanPress",
            "children": [
              {
                "id": "20210819143836-o8fisty",
                "hpath": "/想法/项目/OceanPress/website-check",
                "title": "website-check"
              }
            ]
          },
          {
            "id": "20230905170531-6q68jov",
            "hpath": "/想法/项目/OceanPress_js",
            "title": "OceanPress_js",
            "children": [
              {
                "id": "20240118165400-y89pfvq",
                "hpath": "/想法/项目/OceanPress_js/2023 年更新日志",
                "title": "2023 年更新日志",
                "sort": 1
              },
              {
                "id": "20240106082524-8iwydhr",
                "hpath": "/想法/项目/OceanPress_js/OceanPress插件",
                "title": "OceanPress插件",
                "sort": 2,
                "children": [
                  {
                    "id": "20240613202813-wm6by5e",
                    "hpath": "/想法/项目/OceanPress_js/OceanPress插件/更新日志",
                    "title": "更新日志",
                    "sort": 1,
                    "children": [
                      {
                        "id": "20240613191653-ozw9kcv",
                        "hpath": "/想法/项目/OceanPress_js/OceanPress插件/更新日志/OceanPress插件支持手机端ocr文本识别 v0.3.7",
                        "title": "OceanPress插件支持手机端ocr文本识别 v0.3.7",
                        "sort": 2
                      },
                      {
                        "id": "20240612161400-q3nlr71",
                        "hpath": "/想法/项目/OceanPress_js/OceanPress插件/更新日志/OceanPress插件实现完美ocr v0.3.6",
                        "title": "OceanPress插件实现完美ocr v0.3.6",
                        "sort": 3
                      },
                      {
                        "id": "20240619153751-jif1b3g",
                        "hpath": "/想法/项目/OceanPress_js/OceanPress插件/更新日志/支持使用umi-ocr进行图片识别 v0.3.10",
                        "title": "支持使用umi-ocr进行图片识别 v0.3.10"
                      },
                      {
                        "id": "20250315142527-96g76zu",
                        "hpath": "/想法/项目/OceanPress_js/OceanPress插件/更新日志/支持在思源内打开OceanPress面板 0.3.28 ",
                        "title": "支持在思源内打开OceanPress面板 0.3.28 "
                      },
                      {
                        "id": "20240615115002-oxkn74l",
                        "hpath": "/想法/项目/OceanPress_js/OceanPress插件/更新日志/OceanPress插件支持tif文件渲染 v0.3.8",
                        "title": "OceanPress插件支持tif文件渲染 v0.3.8"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "20240101170825-d2e78a0",
                "hpath": "/想法/项目/OceanPress_js/自建meilisearch搜索",
                "title": "自建meilisearch搜索",
                "sort": 3
              },
              {
                "id": "20231005185546-0mj4dt8",
                "hpath": "/想法/项目/OceanPress_js/为OceanPress生成的网站添加搜索功能",
                "title": "为OceanPress生成的网站添加搜索功能",
                "sort": 4
              },
              {
                "id": "20250822173529-o1ssnht",
                "hpath": "/想法/项目/OceanPress_js/OceanPress更新日志",
                "title": "OceanPress更新日志"
              },
              {
                "id": "20250309124009-4jajj1n",
                "hpath": "/想法/项目/OceanPress_js/OceanPress云",
                "title": "OceanPress云"
              },
              {
                "id": "20250328131032-9kfjdb9",
                "hpath": "/想法/项目/OceanPress_js/v1.0.42 OceanPress支持侧边文档树目录导航",
                "title": "v1.0.42 OceanPress支持侧边文档树目录导航"
              }
            ]
          },
          {
            "id": "20240110172815-llqsqzd",
            "hpath": "/想法/项目/SiYuan serverless",
            "title": "SiYuan serverless",
            "children": [
              {
                "id": "20240113150613-7qp57gh",
                "hpath": "/想法/项目/SiYuan serverless/函数计算域名调试web应用",
                "title": "函数计算域名调试web应用"
              }
            ]
          },
          {
            "id": "20240113115746-pg2rerf",
            "hpath": "/想法/项目/siyuan_cms",
            "title": "siyuan_cms"
          },
          {
            "id": "20240621163256-yozgllm",
            "hpath": "/想法/项目/sy2video",
            "title": "sy2video",
            "children": [
              {
                "id": "20240622103850-90v98k8",
                "hpath": "/想法/项目/sy2video/通过 iframe 引用思源的 block",
                "title": "通过 iframe 引用思源的 block",
                "sort": 0
              },
              {
                "id": "20240628140503-6jghprs",
                "hpath": "/想法/项目/sy2video/媒体片段引用",
                "title": "媒体片段引用"
              },
              {
                "id": "20240622172305-ov58n5w",
                "hpath": "/想法/项目/sy2video/思源笔记文本转语音",
                "title": "思源笔记文本转语音"
              }
            ]
          },
          {
            "id": "20240812175925-7gocw7u",
            "hpath": "/想法/项目/toolkit-plugin-siyuan",
            "title": "toolkit-plugin-siyuan",
            "children": [
              {
                "id": "20240815094954-25sj3sn",
                "hpath": "/想法/项目/toolkit-plugin-siyuan/思源简单冲突对比",
                "title": "思源简单冲突对比",
                "sort": 0
              }
            ]
          },
          {
            "id": "20240906095232-rehxac8",
            "hpath": "/想法/项目/univer-siyuan-plugin",
            "title": "univer-siyuan-plugin"
          }
        ]
      },
      {
        "id": "20231214112450-ndy3t2e",
        "hpath": "/想法/siyuan_feed插件",
        "title": "siyuan_feed插件",
        "children": [
          {
            "id": "20231221203731-tlrovzq",
            "hpath": "/想法/siyuan_feed插件/思源更新了吗",
            "title": "思源更新了吗"
          },
          {
            "id": "20231222113813-m3epi12",
            "hpath": "/想法/siyuan_feed插件/feed插件推广",
            "title": "feed插件推广"
          }
        ]
      },
      {
        "id": "20201230210825-tsznbqn",
        "hpath": "/想法/state.ts",
        "title": "state.ts"
      }
    ]
  },
  {
    "id": "20210816161946-q6rdjhv",
    "hpath": "/读书笔记",
    "title": "读书笔记",
    "sort": 3,
    "children": [
      {
        "id": "20210816161947-6280j1o",
        "hpath": "/读书笔记/编程的道与术",
        "title": "编程的道与术",
        "children": [
          {
            "id": "20210714173310-l6dvvj1",
            "hpath": "/读书笔记/编程的道与术/编程的道与术",
            "title": "编程的道与术"
          },
          {
            "id": "20210714173351-acodh4b",
            "hpath": "/读书笔记/编程的道与术/lambda演算",
            "title": "lambda演算"
          }
        ]
      },
      {
        "id": "20210816161947-zudecmv",
        "hpath": "/读书笔记/道德经",
        "title": "道德经",
        "children": [
          {
            "id": "20201104153359-irsz9bq",
            "hpath": "/读书笔记/道德经/帛书版-道德经",
            "title": "帛书版-道德经"
          },
          {
            "id": "20201104153359-g185dv9",
            "hpath": "/读书笔记/道德经/readme",
            "title": "readme"
          }
        ]
      },
      {
        "id": "20210816161947-oz0j949",
        "hpath": "/读书笔记/黄帝内经",
        "title": "黄帝内经",
        "children": [
          {
            "id": "20210322194209-1tn8q9j",
            "hpath": "/读书笔记/黄帝内经/黄帝内经",
            "title": "黄帝内经"
          },
          {
            "id": "20210322200659-e7kkuca",
            "hpath": "/读书笔记/黄帝内经/素问-金匮真言论",
            "title": "素问-金匮真言论"
          },
          {
            "id": "20210322194658-kdc817l",
            "hpath": "/读书笔记/黄帝内经/素问-上古天真论第一",
            "title": "素问-上古天真论第一"
          },
          {
            "id": "20210322195752-aedfvoo",
            "hpath": "/读书笔记/黄帝内经/素问-生气通天论",
            "title": "素问-生气通天论"
          },
          {
            "id": "20210322194912-otw45g0",
            "hpath": "/读书笔记/黄帝内经/素问-四气调神大论",
            "title": "素问-四气调神大论"
          },
          {
            "id": "20210323084450-cic42uv",
            "hpath": "/读书笔记/黄帝内经/素问-阴阳离合论",
            "title": "素问-阴阳离合论"
          }
        ]
      },
      {
        "id": "20210816161947-hrf113b",
        "hpath": "/读书笔记/前端开发杂记",
        "title": "前端开发杂记",
        "children": [
          {
            "id": "20201104153359-facvk78",
            "hpath": "/读书笔记/前端开发杂记/语义化",
            "title": "语义化"
          },
          {
            "id": "20201104153359-47tgpd3",
            "hpath": "/读书笔记/前端开发杂记/ajax",
            "title": "ajax"
          },
          {
            "id": "20201104153359-4xbjpcg",
            "hpath": "/读书笔记/前端开发杂记/css疑难解答",
            "title": "css疑难解答"
          },
          {
            "id": "20201104153359-wv8uv3c",
            "hpath": "/读书笔记/前端开发杂记/css纵向两排横向滚动",
            "title": "css纵向两排横向滚动"
          },
          {
            "id": "20210816161947-6yxny60",
            "hpath": "/读书笔记/前端开发杂记/img",
            "title": "img"
          }
        ]
      },
      {
        "id": "20210816161947-ejgmn53",
        "hpath": "/读书笔记/算法杂记",
        "title": "算法杂记"
      },
      {
        "id": "20210816161946-lf7tgkz",
        "hpath": "/读书笔记/css相关",
        "title": "css相关",
        "children": [
          {
            "id": "20210816161946-0h0epy4",
            "hpath": "/读书笔记/css相关/css选择器世界",
            "title": "css选择器世界",
            "children": [
              {
                "id": "20201104153359-x39wcrb",
                "hpath": "/读书笔记/css相关/css选择器世界/README",
                "title": "README"
              }
            ]
          },
          {
            "id": "20210816161946-7as5e92",
            "hpath": "/读书笔记/css相关/scss",
            "title": "scss",
            "children": [
              {
                "id": "20201104153359-xnxrhg0",
                "hpath": "/读书笔记/css相关/scss/scss",
                "title": "scss"
              }
            ]
          }
        ]
      },
      {
        "id": "20210816161946-1dvrc2d",
        "hpath": "/读书笔记/javascript编程精解",
        "title": "javascript编程精解",
        "children": [
          {
            "id": "20201104153359-gqh773e",
            "hpath": "/读书笔记/javascript编程精解/核心点",
            "title": "核心点"
          },
          {
            "id": "20210816161947-lffq5xb",
            "hpath": "/读书笔记/javascript编程精解/习题",
            "title": "习题",
            "children": [
              {
                "id": "20201104153359-xkdstl8",
                "hpath": "/读书笔记/javascript编程精解/习题/递归",
                "title": "递归"
              },
              {
                "id": "20201104153359-6bs7c2t",
                "hpath": "/读书笔记/javascript编程精解/习题/分组与可迭代分组",
                "title": "分组与可迭代分组"
              },
              {
                "id": "20201104153359-6dlzvfx",
                "hpath": "/读书笔记/javascript编程精解/习题/你自己的循环",
                "title": "你自己的循环"
              },
              {
                "id": "20201104153359-nyj5skv",
                "hpath": "/读书笔记/javascript编程精解/习题/棋盘",
                "title": "棋盘"
              },
              {
                "id": "20201104153359-n2mjpeu",
                "hpath": "/读书笔记/javascript编程精解/习题/向量类型",
                "title": "向量类型"
              },
              {
                "id": "20201104153359-zqr64qz",
                "hpath": "/读书笔记/javascript编程精解/习题/展开",
                "title": "展开"
              },
              {
                "id": "20201104153359-zj5gqvy",
                "hpath": "/读书笔记/javascript编程精解/习题/字符计数",
                "title": "字符计数"
              },
              {
                "id": "20201104153359-ut8ga52",
                "hpath": "/读书笔记/javascript编程精解/习题/最小值",
                "title": "最小值"
              },
              {
                "id": "20201104153359-gj1v86t",
                "hpath": "/读书笔记/javascript编程精解/习题/every",
                "title": "every"
              },
              {
                "id": "20201104153359-9fw3wmp",
                "hpath": "/读书笔记/javascript编程精解/习题/FizzBuzz",
                "title": "FizzBuzz"
              }
            ]
          },
          {
            "id": "20210816161947-chzxpl1",
            "hpath": "/读书笔记/javascript编程精解/项目",
            "title": "项目",
            "children": [
              {
                "id": "20201104153359-brkto0f",
                "hpath": "/读书笔记/javascript编程精解/项目/机器人",
                "title": "机器人"
              },
              {
                "id": "20210816161947-ulf5i9p",
                "hpath": "/读书笔记/javascript编程精解/项目/egg编程语言",
                "title": "egg编程语言",
                "children": [
                  {
                    "id": "20201104153359-rw2q4l2",
                    "hpath": "/读书笔记/javascript编程精解/项目/egg编程语言/egg",
                    "title": "egg"
                  }
                ]
              }
            ]
          },
          {
            "id": "20201104153359-8o50xst",
            "hpath": "/读书笔记/javascript编程精解/javascript数值问题",
            "title": "javascript数值问题"
          }
        ]
      },
      {
        "id": "20210816161946-ew0qx4e",
        "hpath": "/读书笔记/javascript悟道",
        "title": "javascript悟道",
        "children": [
          {
            "id": "20210724181837-rot8okl",
            "hpath": "/读书笔记/javascript悟道/javascript悟道",
            "title": "javascript悟道"
          }
        ]
      },
      {
        "id": "20210816161947-2j8gsxm",
        "hpath": "/读书笔记/node",
        "title": "node",
        "children": [
          {
            "id": "20201104153359-3bz18z5",
            "hpath": "/读书笔记/node/各种系统安装node",
            "title": "各种系统安装node"
          },
          {
            "id": "20201104153359-c21on9u",
            "hpath": "/读书笔记/node/一次nodejs内存溢出bug修复",
            "title": "一次nodejs内存溢出bug修复"
          },
          {
            "id": "20201104153359-eraeclx",
            "hpath": "/读书笔记/node/node热部署以及装饰器的应用",
            "title": "node热部署以及装饰器的应用"
          },
          {
            "id": "20201104153359-xx5qj28",
            "hpath": "/读书笔记/node/worker",
            "title": "worker"
          }
        ]
      },
      {
        "id": "20210816161947-fku4u1q",
        "hpath": "/读书笔记/react",
        "title": "react",
        "children": [
          {
            "id": "20201226094811-1ndo5l2",
            "hpath": "/读书笔记/react/react速览",
            "title": "react速览"
          }
        ]
      },
      {
        "id": "20210816161947-zze45mt",
        "hpath": "/读书笔记/rust",
        "title": "rust",
        "children": [
          {
            "id": "20201227173912-l5o79dn",
            "hpath": "/读书笔记/rust/崮生的rust速览",
            "title": "崮生的rust速览"
          },
          {
            "id": "20201227174236-l9h382g",
            "hpath": "/读书笔记/rust/Cargo",
            "title": "Cargo"
          }
        ]
      },
      {
        "id": "20231215140217-nnevmxs",
        "hpath": "/读书笔记/siyuan开发相关",
        "title": "siyuan开发相关"
      },
      {
        "id": "20210816161947-7d4k0hf",
        "hpath": "/读书笔记/tailwindcss",
        "title": "tailwindcss"
      },
      {
        "id": "20210816161947-gcm5vi3",
        "hpath": "/读书笔记/typescript",
        "title": "typescript",
        "children": [
          {
            "id": "20201104153359-i4urcgu",
            "hpath": "/读书笔记/typescript/深入了解Typescript",
            "title": "深入了解Typescript"
          },
          {
            "id": "20201121144434-sbev4ga",
            "hpath": "/读书笔记/typescript/一个简简单单的 TypeScript RPC 解决方案",
            "title": "一个简简单单的 TypeScript RPC 解决方案"
          },
          {
            "id": "20201104153359-whnn14z",
            "hpath": "/读书笔记/typescript/ts技巧",
            "title": "ts技巧"
          },
          {
            "id": "20250524184355-t7jgpsn",
            "hpath": "/读书笔记/typescript/tsup",
            "title": "tsup"
          },
          {
            "id": "20201104153359-1xck2an",
            "hpath": "/读书笔记/typescript/typescript-vuex",
            "title": "typescript-vuex"
          },
          {
            "id": "20210118110553-zmx5glh",
            "hpath": "/读书笔记/typescript/typescript速查文档",
            "title": "typescript速查文档"
          },
          {
            "id": "20201113141123-61qhktl",
            "hpath": "/读书笔记/typescript/typescript游乐场",
            "title": "typescript游乐场"
          },
          {
            "id": "20201104153359-0zkt74n",
            "hpath": "/读书笔记/typescript/typescript中文手册",
            "title": "typescript中文手册"
          }
        ]
      },
      {
        "id": "20210816161947-wjpp6pw",
        "hpath": "/读书笔记/vue",
        "title": "vue",
        "children": [
          {
            "id": "20201104153359-f25ee82",
            "hpath": "/读书笔记/vue/readme",
            "title": "readme"
          },
          {
            "id": "20210106142508-wr3ob9l",
            "hpath": "/读书笔记/vue/vue动态引入替换组件",
            "title": "vue动态引入替换组件"
          },
          {
            "id": "20210108200154-2j8bhxv",
            "hpath": "/读书笔记/vue/vue异步数据呈现方案",
            "title": "vue异步数据呈现方案"
          }
        ]
      },
      {
        "id": "20210816161947-b2b74yn",
        "hpath": "/读书笔记/yarn",
        "title": "yarn",
        "children": [
          {
            "id": "20201104153359-x7lw9qj",
            "hpath": "/读书笔记/yarn/README",
            "title": "README"
          }
        ]
      }
    ]
  },
  {
    "id": "20210816161946-c0z6moi",
    "hpath": "/杂记",
    "title": "杂记",
    "sort": 4,
    "children": [
      {
        "id": "20210816161946-gq89dr8",
        "hpath": "/杂记/尝试新东西",
        "title": "尝试新东西"
      },
      {
        "id": "20231222130701-3nn4grd",
        "hpath": "/杂记/崮生的歌单",
        "title": "崮生的歌单"
      },
      {
        "id": "20230914195323-trjref1",
        "hpath": "/杂记/关于前端组件数据交互的思考",
        "title": "关于前端组件数据交互的思考"
      },
      {
        "id": "20250101081553-mj041nl",
        "hpath": "/杂记/黄球刁捞",
        "title": "黄球刁捞"
      },
      {
        "id": "20210816161946-rflx1l8",
        "hpath": "/杂记/山河永在",
        "title": "山河永在",
        "children": [
          {
            "id": "20201104153359-gey2qn2",
            "hpath": "/杂记/山河永在/海宁海塘",
            "title": "海宁海塘"
          }
        ]
      },
      {
        "id": "20231225175705-yinrosq",
        "hpath": "/杂记/吐槽",
        "title": "吐槽",
        "children": [
          {
            "id": "20231225175716-4ouggrv",
            "hpath": "/杂记/吐槽/ai补码就是抄代码",
            "title": "ai补码就是抄代码"
          }
        ]
      },
      {
        "id": "20241219120543-87boo63",
        "hpath": "/杂记/未命名",
        "title": "未命名"
      },
      {
        "id": "20210816161946-03r3yhj",
        "hpath": "/杂记/咸蛋技巧",
        "title": "咸蛋技巧",
        "children": [
          {
            "id": "20210201162630-r7ph1tz",
            "hpath": "/杂记/咸蛋技巧/窗户塑料膜清理技巧",
            "title": "窗户塑料膜清理技巧"
          },
          {
            "id": "20201104153359-5n443yl",
            "hpath": "/杂记/咸蛋技巧/坐地铁无依靠站稳的技巧",
            "title": "坐地铁无依靠站稳的技巧"
          },
          {
            "id": "20201104153359-pwpnmge",
            "hpath": "/杂记/咸蛋技巧/README",
            "title": "README"
          }
        ]
      },
      {
        "id": "20210816161946-3wz613n",
        "hpath": "/杂记/游戏",
        "title": "游戏",
        "children": [
          {
            "id": "20210816161946-4u3l09q",
            "hpath": "/杂记/游戏/英雄联盟",
            "title": "英雄联盟",
            "children": [
              {
                "id": "20201104153359-f54wyi8",
                "hpath": "/杂记/游戏/英雄联盟/2019-8-12",
                "title": "2019-8-12"
              }
            ]
          }
        ]
      },
      {
        "id": "20240620185326-hl2ywbv",
        "hpath": "/杂记/在思源笔记中直接复制图片上的文字",
        "title": "在思源笔记中直接复制图片上的文字"
      },
      {
        "id": "20210816161946-b3avj9r",
        "hpath": "/杂记/摘抄",
        "title": "摘抄",
        "children": [
          {
            "id": "20201113101557-gtg9j56",
            "hpath": "/杂记/摘抄/养生",
            "title": "养生"
          },
          {
            "id": "20210816161946-svlzugy",
            "hpath": "/杂记/摘抄/mdn",
            "title": "mdn",
            "children": [
              {
                "id": "20201104153359-0bk0hx8",
                "hpath": "/杂记/摘抄/mdn/dom",
                "title": "dom"
              }
            ]
          }
        ]
      },
      {
        "id": "20231016190935-4774n41",
        "hpath": "/杂记/子虚云游记",
        "title": "子虚云游记",
        "children": [
          {
            "id": "20231016191314-lszg2uk",
            "hpath": "/杂记/子虚云游记/01",
            "title": "01"
          },
          {
            "id": "20231016191350-hkgi34b",
            "hpath": "/杂记/子虚云游记/02",
            "title": "02"
          },
          {
            "id": "20231016191421-oszi2bp",
            "hpath": "/杂记/子虚云游记/03",
            "title": "03"
          },
          {
            "id": "20231017063535-ho7cq1g",
            "hpath": "/杂记/子虚云游记/04",
            "title": "04"
          },
          {
            "id": "20231018115239-h5d7gsb",
            "hpath": "/杂记/子虚云游记/05",
            "title": "05"
          },
          {
            "id": "20231019102934-nbanyvw",
            "hpath": "/杂记/子虚云游记/06",
            "title": "06"
          },
          {
            "id": "20231020114146-yv3l6au",
            "hpath": "/杂记/子虚云游记/07",
            "title": "07"
          },
          {
            "id": "20231021113155-2qfdc5n",
            "hpath": "/杂记/子虚云游记/08",
            "title": "08"
          },
          {
            "id": "20231022085149-hfsepbs",
            "hpath": "/杂记/子虚云游记/09",
            "title": "09"
          },
          {
            "id": "20231024183521-1eblkic",
            "hpath": "/杂记/子虚云游记/10",
            "title": "10"
          },
          {
            "id": "20231025084627-yc3py9j",
            "hpath": "/杂记/子虚云游记/11",
            "title": "11"
          },
          {
            "id": "20231026081050-8uxc4gf",
            "hpath": "/杂记/子虚云游记/12",
            "title": "12"
          }
        ]
      },
      {
        "id": "20210816161946-mlpug9y",
        "hpath": "/杂记/javascript",
        "title": "javascript",
        "children": [
          {
            "id": "20201113144133-kxmi1f7",
            "hpath": "/杂记/javascript/崮生的编程技巧",
            "title": "崮生的编程技巧"
          }
        ]
      },
      {
        "id": "20201231214224-yxqubps",
        "hpath": "/杂记/Serverless state",
        "title": "Serverless state"
      },
      {
        "id": "20231205133939-oirnugp",
        "hpath": "/杂记/webtorrent_cdn",
        "title": "webtorrent_cdn"
      }
    ]
  },
  {
    "id": "20210816161946-cktc4gf",
    "hpath": "/关于",
    "title": "关于",
    "sort": 5,
    "children": [
      {
        "id": "20201228124011-2gj12qd",
        "hpath": "/关于/代码编写规范",
        "title": "代码编写规范"
      },
      {
        "id": "20201104153359-jpxsqye",
        "hpath": "/关于/崮生_子虚",
        "title": "崮生_子虚",
        "children": [
          {
            "id": "20231127182409-5xk96xo",
            "hpath": "/关于/崮生_子虚/求职简历",
            "title": "求职简历",
            "sort": 0
          },
          {
            "id": "20231008140539-0ypp5e0",
            "hpath": "/关于/崮生_子虚/雇佣崮生",
            "title": "雇佣崮生"
          },
          {
            "id": "20201228124011-yky6n68",
            "hpath": "/关于/崮生_子虚/子虚的联系方式",
            "title": "子虚的联系方式"
          }
        ]
      },
      {
        "id": "20201104153359-lc7zm7m",
        "hpath": "/关于/崮生的 MIT",
        "title": "崮生的 MIT"
      },
      {
        "id": "20240531120717-vvo8li4",
        "hpath": "/关于/崮生信任订阅使用协议",
        "title": "崮生信任订阅使用协议"
      },
      {
        "id": "20201104153359-liiyn6p",
        "hpath": "/关于/联系站长",
        "title": "联系站长"
      },
      {
        "id": "20210816161946-7tgmtwa",
        "hpath": "/关于/文档聚合",
        "title": "文档聚合",
        "children": [
          {
            "id": "20210111192121-rd74g8n",
            "hpath": "/关于/文档聚合/日常",
            "title": "日常"
          },
          {
            "id": "20210111191714-0ddi0rm",
            "hpath": "/关于/文档聚合/闲评",
            "title": "闲评"
          },
          {
            "id": "20210717104806-m2vhww8",
            "hpath": "/关于/文档聚合/最佳实践",
            "title": "最佳实践"
          }
        ]
      },
      {
        "id": "20210702133812-93y6sm2",
        "hpath": "/关于/信息源 star 列表",
        "title": "信息源 star 列表"
      },
      {
        "id": "20201104153359-l0puyba",
        "hpath": "/关于/赞助",
        "title": "赞助"
      },
      {
        "id": "20210607115110-bw6zi84",
        "hpath": "/关于/git repo star 列表＆备注",
        "title": "git repo star 列表＆备注"
      },
      {
        "id": "20210816161946-n0q3y9f",
        "hpath": "/关于/rss",
        "title": "rss",
        "children": [
          {
            "id": "20210608142805-pg1fgwh",
            "hpath": "/关于/rss/崮生精选.rss.xml",
            "title": "崮生精选.rss.xml"
          },
          {
            "id": "20210606154842-rgtj4rm",
            "hpath": "/关于/rss/最近更新.rss.xml",
            "title": "最近更新.rss.xml"
          }
        ]
      }
    ]
  },
  {
    "id": "20210816161946-ui0vsq7",
    "hpath": "/工具",
    "title": "工具",
    "sort": 6,
    "children": [
      {
        "id": "20230922210347-ajsgtu5",
        "hpath": "/工具/firefox",
        "title": "firefox",
        "sort": -1
      },
      {
        "id": "20201104153359-5zlt2de",
        "hpath": "/工具/代码片段",
        "title": "代码片段"
      },
      {
        "id": "20231214205132-uvaysrt",
        "hpath": "/工具/开发最佳实践",
        "title": "开发最佳实践",
        "children": [
          {
            "id": "20250306093127-z0ilsud",
            "hpath": "/工具/开发最佳实践/act",
            "title": "act"
          },
          {
            "id": "20240311141906-ne5uqtm",
            "hpath": "/工具/开发最佳实践/rime",
            "title": "rime"
          },
          {
            "id": "20250222153112-6tgkzn0",
            "hpath": "/工具/开发最佳实践/rslib",
            "title": "rslib"
          }
        ]
      },
      {
        "id": "20231224125712-55fdbgk",
        "hpath": "/工具/开放api",
        "title": "开放api"
      },
      {
        "id": "20210816161946-5l4bo26",
        "hpath": "/工具/文本处理",
        "title": "文本处理",
        "children": [
          {
            "id": "20201229110751-0x4j8r8",
            "hpath": "/工具/文本处理/简单文本处理",
            "title": "简单文本处理"
          }
        ]
      },
      {
        "id": "20201104153359-xpte8ka",
        "hpath": "/工具/我常用的软件",
        "title": "我常用的软件"
      },
      {
        "id": "20231229135531-hdydug5",
        "hpath": "/工具/小徽章",
        "title": "小徽章"
      },
      {
        "id": "20210105131555-g84sdyd",
        "hpath": "/工具/在线工具",
        "title": "在线工具"
      },
      {
        "id": "20231226111126-tjp7z0p",
        "hpath": "/工具/站点监测",
        "title": "站点监测"
      },
      {
        "id": "20231127131913-lo4mk5u",
        "hpath": "/工具/blender",
        "title": "blender"
      },
      {
        "id": "20231215143612-kg51jqj",
        "hpath": "/工具/chatGPT",
        "title": "chatGPT"
      },
      {
        "id": "20231227083806-th3cv3m",
        "hpath": "/工具/dependency",
        "title": "dependency"
      },
      {
        "id": "20240115162002-i24yr9v",
        "hpath": "/工具/distill_monitor",
        "title": "distill_monitor",
        "children": [
          {
            "id": "20240115162126-8grn8ja",
            "hpath": "/工具/distill_monitor/我所使用的一些 js 选择器",
            "title": "我所使用的一些 js 选择器",
            "sort": 0
          }
        ]
      },
      {
        "id": "20231223132556-b9bysq1",
        "hpath": "/工具/prisma",
        "title": "prisma",
        "children": [
          {
            "id": "20231224203440-qyuvf3m",
            "hpath": "/工具/prisma/使用prisma studio链接任何server",
            "title": "使用prisma studio链接任何server"
          },
          {
            "id": "20231223132619-pult0qj",
            "hpath": "/工具/prisma/在serverless中使用prisma",
            "title": "在serverless中使用prisma"
          },
          {
            "id": "20231226185114-3bo0qy9",
            "hpath": "/工具/prisma/keystonejs",
            "title": "keystonejs"
          }
        ]
      },
      {
        "id": "20230922162718-eluwqph",
        "hpath": "/工具/singleFile",
        "title": "singleFile"
      },
      {
        "id": "20240114184008-yp717pd",
        "hpath": "/工具/tmux",
        "title": "tmux"
      }
    ]
  },
  {
    "id": "20210816161946-xswbi9y",
    "hpath": "/文集",
    "title": "文集",
    "sort": 7,
    "children": [
      {
        "id": "20210816161946-l6yc03h",
        "hpath": "/文集/朗诵",
        "title": "朗诵",
        "children": [
          {
            "id": "20201230191955-3lywr9p",
            "hpath": "/文集/朗诵/《放言五首·其三》",
            "title": "《放言五首·其三》"
          }
        ]
      },
      {
        "id": "20230922205553-7i2y5mr",
        "hpath": "/文集/散文",
        "title": "散文",
        "children": [
          {
            "id": "20230922205558-iro62fu",
            "hpath": "/文集/散文/繁星",
            "title": "繁星"
          }
        ]
      },
      {
        "id": "20210816161946-pggam1d",
        "hpath": "/文集/诗",
        "title": "诗",
        "children": [
          {
            "id": "20210621152319-2uwq2w5",
            "hpath": "/文集/诗/观蒲",
            "title": "观蒲"
          },
          {
            "id": "20201104153359-6rhkc16",
            "hpath": "/文集/诗/寄志",
            "title": "寄志"
          },
          {
            "id": "20201104153359-k6rnbae",
            "hpath": "/文集/诗/无梦",
            "title": "无梦"
          },
          {
            "id": "20201105171416-s549npq",
            "hpath": "/文集/诗/无名（1）",
            "title": "无名（1）"
          },
          {
            "id": "20210621151546-9vi1wr3",
            "hpath": "/文集/诗/无名（2）",
            "title": "无名（2）"
          },
          {
            "id": "20230922205308-8x754vu",
            "hpath": "/文集/诗/忆友人-其二",
            "title": "忆友人-其二"
          },
          {
            "id": "20230922205315-thmt7se",
            "hpath": "/文集/诗/忆友人-其三",
            "title": "忆友人-其三"
          },
          {
            "id": "20230922205126-j9qqrop",
            "hpath": "/文集/诗/忆友人-其一",
            "title": "忆友人-其一"
          }
        ]
      },
      {
        "id": "20240113085151-ixsk33c",
        "hpath": "/文集/问答",
        "title": "问答",
        "children": [
          {
            "id": "20240113085159-hq7ownx",
            "hpath": "/文集/问答/浏览器页面实现读取和存储文件到c盘，是否能实现",
            "title": "浏览器页面实现读取和存储文件到c盘，是否能实现"
          }
        ]
      },
      {
        "id": "20250522144812-wgflqvv",
        "hpath": "/文集/小游戏开发",
        "title": "小游戏开发"
      },
      {
        "id": "20231215121826-vrlq40n",
        "hpath": "/文集/feed",
        "title": "feed",
        "children": [
          {
            "id": "20231214134236-8hquuwm",
            "hpath": "/文集/feed/阮一峰的网络日志",
            "title": "阮一峰的网络日志",
            "sort": 0,
            "children": [
              {
                "id": "20240614162153-cx2hz8l",
                "hpath": "/文集/feed/阮一峰的网络日志/2023",
                "title": "2023",
                "sort": 0
              },
              {
                "id": "20241227165527-wpv67aw",
                "hpath": "/文集/feed/阮一峰的网络日志/编程十年的感悟",
                "title": "编程十年的感悟"
              }
            ]
          },
          {
            "id": "20231227154204-c0ewql1",
            "hpath": "/文集/feed/崮生精选",
            "title": "崮生精选"
          },
          {
            "id": "20240113141121-roht5p7",
            "hpath": "/文集/feed/臨池不輟",
            "title": "臨池不輟"
          },
          {
            "id": "20231221124707-a6k71b6",
            "hpath": "/文集/feed/太郎-龙逸楠的博客",
            "title": "太郎-龙逸楠的博客"
          },
          {
            "id": "20231216200315-o17mohb",
            "hpath": "/文集/feed/鑫空间鑫生活",
            "title": "鑫空间鑫生活"
          },
          {
            "id": "20231216212502-ym67vlt",
            "hpath": "/文集/feed/逸飞的技术日志",
            "title": "逸飞的技术日志"
          }
        ]
      }
    ]
  },
  {
    "id": "20210816161944-cn1ky4x",
    "hpath": "/other",
    "title": "other",
    "sort": 8,
    "children": [
      {
        "id": "20210721202624-lt17ln1",
        "hpath": "/other/闭包",
        "title": "闭包"
      },
      {
        "id": "20210322143546-fmh2888",
        "hpath": "/other/采蕨",
        "title": "采蕨"
      },
      {
        "id": "20201227130023-sv9fvdm",
        "hpath": "/other/测试页面_普通表单",
        "title": "测试页面_普通表单"
      },
      {
        "id": "20210524142217-v3z91to",
        "hpath": "/other/从零开始学习嵌入式-尝试",
        "title": "从零开始学习嵌入式-尝试"
      },
      {
        "id": "20210523132739-slee716",
        "hpath": "/other/从我来迁移文档",
        "title": "从我来迁移文档"
      },
      {
        "id": "20210401083345-h0z90rh",
        "hpath": "/other/各语言网页版在线 Playground",
        "title": "各语言网页版在线 Playground"
      },
      {
        "id": "20210329135444-6rfsl2l",
        "hpath": "/other/关于下一代设计软件的思考",
        "title": "关于下一代设计软件的思考"
      },
      {
        "id": "20210602160954-hmntjxm",
        "hpath": "/other/鸿蒙到底是啥",
        "title": "鸿蒙到底是啥"
      },
      {
        "id": "20210817164422-dslx1er",
        "hpath": "/other/莲荷山",
        "title": "莲荷山"
      },
      {
        "id": "20210528184548-4pncr8b",
        "hpath": "/other/你都用 typescript（JavaScript） 来做什么",
        "title": "你都用 typescript（JavaScript） 来做什么"
      },
      {
        "id": "20210321135933-s41eepw",
        "hpath": "/other/全历史",
        "title": "全历史"
      },
      {
        "id": "20210326102459-nrdlzel",
        "hpath": "/other/任意应用输入框内引用实现记录",
        "title": "任意应用输入框内引用实现记录"
      },
      {
        "id": "20210225105304-a4p3k91",
        "hpath": "/other/双向链接",
        "title": "双向链接"
      },
      {
        "id": "20210209161008-nzq3um7",
        "hpath": "/other/思源安卓版 git 同步方法",
        "title": "思源安卓版 git 同步方法"
      },
      {
        "id": "20210325154235-xo42dww",
        "hpath": "/other/思源畅想-任意应用输入框内块引用",
        "title": "思源畅想-任意应用输入框内块引用"
      },
      {
        "id": "20210805125620-rre8vhj",
        "hpath": "/other/思源挂件块开发实践",
        "title": "思源挂件块开发实践"
      },
      {
        "id": "20210824162114-vaqmnda",
        "hpath": "/other/思源图表小白教程",
        "title": "思源图表小白教程"
      },
      {
        "id": "20210526203700-iclp3d7",
        "hpath": "/other/速览系列",
        "title": "速览系列"
      },
      {
        "id": "20210716095156-av6caio",
        "hpath": "/other/网络请求的调试方法",
        "title": "网络请求的调试方法"
      },
      {
        "id": "20201226134721-9xsczq4",
        "hpath": "/other/未来还有希望吗",
        "title": "未来还有希望吗"
      },
      {
        "id": "20210620093045-77zcrcq",
        "hpath": "/other/我的开源项目",
        "title": "我的开源项目",
        "children": [
          {
            "id": "20241029102540-tqjzjyu",
            "hpath": "/other/我的开源项目/书法助手",
            "title": "书法助手"
          },
          {
            "id": "20240313114518-aqxsu3i",
            "hpath": "/other/我的开源项目/code-transform",
            "title": "code-transform"
          },
          {
            "id": "20240514180230-phkn1ck",
            "hpath": "/other/我的开源项目/siyuan expression 插件",
            "title": "siyuan expression 插件",
            "children": [
              {
                "id": "20240605121942-px30pq7",
                "hpath": "/other/我的开源项目/siyuan expression 插件/更新记录",
                "title": "更新记录",
                "sort": -1,
                "children": [
                  {
                    "id": "20240612204758-qbln0jw",
                    "hpath": "/other/我的开源项目/siyuan expression 插件/更新记录/v0.0.8表达式插件更新",
                    "title": "v0.0.8表达式插件更新",
                    "sort": 0
                  },
                  {
                    "id": "20240714093844-u7pdcux",
                    "hpath": "/other/我的开源项目/siyuan expression 插件/更新记录/v0.0.12 expr表达式插件支持引用其他表达式计算结果",
                    "title": "v0.0.12 expr表达式插件支持引用其他表达式计算结果"
                  }
                ]
              },
              {
                "id": "20231130092706-ohhuutd",
                "hpath": "/other/我的开源项目/siyuan expression 插件/noteCalc3",
                "title": "noteCalc3",
                "sort": 0
              },
              {
                "id": "20240515165405-2fmv9kk",
                "hpath": "/other/我的开源项目/siyuan expression 插件/开发思路",
                "title": "开发思路"
              },
              {
                "id": "20240808092621-2rdw83w",
                "hpath": "/other/我的开源项目/siyuan expression 插件/expr 支持图表等其他块的映射",
                "title": "expr 支持图表等其他块的映射"
              }
            ]
          },
          {
            "id": "20240818115523-hf23y5f",
            "hpath": "/other/我的开源项目/webfont",
            "title": "webfont"
          }
        ]
      },
      {
        "id": "20210816161944-jn60dqq",
        "hpath": "/other/我来迁移文档",
        "title": "我来迁移文档",
        "children": [
          {
            "id": "20210523141744-xxqoc1c",
            "hpath": "/other/我来迁移文档/【项目】从网页生成图片",
            "title": "【项目】从网页生成图片"
          },
          {
            "id": "20210523141123-nvrvju4",
            "hpath": "/other/我来迁移文档/不适合百度的「问题」",
            "title": "不适合百度的「问题」"
          },
          {
            "id": "20210523134052-dz43vdr",
            "hpath": "/other/我来迁移文档/春秋义战",
            "title": "春秋义战"
          },
          {
            "id": "20210523133227-9oxf7me",
            "hpath": "/other/我来迁移文档/关于字体AcuminVariableConcept",
            "title": "关于字体AcuminVariableConcept"
          },
          {
            "id": "20210523132829-qk82mwr",
            "hpath": "/other/我来迁移文档/链式调用与proxy",
            "title": "链式调用与proxy"
          },
          {
            "id": "20210523140916-wogrnf9",
            "hpath": "/other/我来迁移文档/如何解决问题",
            "title": "如何解决问题"
          },
          {
            "id": "20210523134810-rvp0hfj",
            "hpath": "/other/我来迁移文档/深度学习之JavaScript",
            "title": "深度学习之JavaScript"
          },
          {
            "id": "20210523140614-befj0bl",
            "hpath": "/other/我来迁移文档/手机编程输入法选型",
            "title": "手机编程输入法选型"
          },
          {
            "id": "20210523143435-07slayx",
            "hpath": "/other/我来迁移文档/受害者有罪论者是什么样的心理机制？",
            "title": "受害者有罪论者是什么样的心理机制？"
          },
          {
            "id": "20210523140253-j7t0ns4",
            "hpath": "/other/我来迁移文档/Toy react",
            "title": "Toy react"
          },
          {
            "id": "20210609085655-iox6dtr",
            "hpath": "/other/我来迁移文档/zerotier",
            "title": "zerotier"
          }
        ]
      },
      {
        "id": "20210401172931-hc1maz5",
        "hpath": "/other/沃·兹基硕德",
        "title": "沃·兹基硕德"
      },
      {
        "id": "20210421165200-zklfi5r",
        "hpath": "/other/闲谈节约",
        "title": "闲谈节约"
      },
      {
        "id": "20210811164611-ktksld1",
        "hpath": "/other/小心的使用promise.finally",
        "title": "小心的使用promise.finally"
      },
      {
        "id": "20210313185853-87zajkh",
        "hpath": "/other/一个视频说清整个英语语法体系(重塑你的语法认知框架)-笔记",
        "title": "一个视频说清整个英语语法体系(重塑你的语法认知框架)-笔记"
      },
      {
        "id": "20210906175508-0pf1c5r",
        "hpath": "/other/远程开发方案",
        "title": "远程开发方案"
      },
      {
        "id": "20210225110544-v1qsyks",
        "hpath": "/other/再提醒",
        "title": "再提醒",
        "children": [
          {
            "id": "20241021210626-7njzjnz",
            "hpath": "/other/再提醒/思源再提醒油猴插件",
            "title": "思源再提醒油猴插件"
          }
        ]
      },
      {
        "id": "20210426092442-n21hh6l",
        "hpath": "/other/自建论坛方案列表",
        "title": "自建论坛方案列表"
      },
      {
        "id": "20210523142634-uvobblz",
        "hpath": "/other/Ajax-hook",
        "title": "Ajax-hook"
      },
      {
        "id": "20210505154756-xqznmxz",
        "hpath": "/other/Aliyun Linux 17.1安装 zerotier 失败",
        "title": "Aliyun Linux 17.1安装 zerotier 失败"
      },
      {
        "id": "20210326105109-gzk63km",
        "hpath": "/other/autoHotKey-崮生速览",
        "title": "autoHotKey-崮生速览"
      },
      {
        "id": "20210526112647-r1n4w6i",
        "hpath": "/other/Bookmarklet",
        "title": "Bookmarklet"
      },
      {
        "id": "20210401171714-bbrvuw7",
        "hpath": "/other/config-editor组件",
        "title": "config-editor组件"
      },
      {
        "id": "20201202172848-w21p8ky",
        "hpath": "/other/css 变量",
        "title": "css 变量"
      },
      {
        "id": "20201228195854-0h3zjhp",
        "hpath": "/other/custom Element",
        "title": "custom Element"
      },
      {
        "id": "20210330075700-7dekwqy",
        "hpath": "/other/electron icp 封装（基于vue computed）",
        "title": "electron icp 封装（基于vue computed）"
      },
      {
        "id": "20210301181940-rfgyz8t",
        "hpath": "/other/IOC",
        "title": "IOC"
      },
      {
        "id": "20210411105659-pcgjcao",
        "hpath": "/other/javascipt 可能会抛出异常的方法统计",
        "title": "javascipt 可能会抛出异常的方法统计"
      },
      {
        "id": "20210730102015-bf88uzo",
        "hpath": "/other/juicefs",
        "title": "juicefs"
      },
      {
        "id": "20210321142309-wn4sd7t",
        "hpath": "/other/Link to Text Fragment",
        "title": "Link to Text Fragment"
      },
      {
        "id": "20210116223423-f6rtkwk",
        "hpath": "/other/linux",
        "title": "linux"
      },
      {
        "id": "20210820105114-4lrg7mt",
        "hpath": "/other/malagu Failed to resolve moduld 问题",
        "title": "malagu Failed to resolve moduld 问题"
      },
      {
        "id": "20201210142721-mwt2mnn",
        "hpath": "/other/Pinbox",
        "title": "Pinbox"
      },
      {
        "id": "20210428160117-mmi8zfa",
        "hpath": "/other/pnpm",
        "title": "pnpm"
      },
      {
        "id": "20210303161429-imqdv28",
        "hpath": "/other/promise reolve 两次后才结束（伪）",
        "title": "promise reolve 两次后才结束（伪）"
      },
      {
        "id": "20210115103808-12zcrqu",
        "hpath": "/other/quark量子计划迷你linux开发版",
        "title": "quark量子计划迷你linux开发版"
      },
      {
        "id": "20210410202607-9aupc9h",
        "hpath": "/other/ts_return_error",
        "title": "ts_return_error"
      },
      {
        "id": "20210722113406-2cw602x",
        "hpath": "/other/TypeScript 有什么用？",
        "title": "TypeScript 有什么用？"
      },
      {
        "id": "20210311191530-v6y7ex5",
        "hpath": "/other/vscode调试定位node.js项目死循环代码",
        "title": "vscode调试定位node.js项目死循环代码"
      },
      {
        "id": "20210522103127-ugoktxu",
        "hpath": "/other/Vue conf 21",
        "title": "Vue conf 21"
      },
      {
        "id": "20210407192843-1xalt6t",
        "hpath": "/other/vue-router如何清除历史记录",
        "title": "vue-router如何清除历史记录"
      },
      {
        "id": "20210409090637-h0drlqf",
        "hpath": "/other/zone.js",
        "title": "zone.js"
      }
    ]
  },
  {
    "id": "20210816161944-euzdsdj",
    "hpath": "/record",
    "title": "record",
    "sort": 9,
    "children": [
      {
        "id": "20240901095218-n4gomty",
        "hpath": "/record/How I Created a 3.78MB Docker Image for a JavaScript Service",
        "title": "How I Created a 3.78MB Docker Image for a JavaScript Service",
        "sort": 1
      },
      {
        "id": "20240831144820-s0ruk7h",
        "hpath": "/record/如何实现一个小体积的js docker镜像",
        "title": "如何实现一个小体积的js docker镜像",
        "sort": 2
      },
      {
        "id": "20240610142803-fratzp9",
        "hpath": "/record/powershell 终端美化 git 分支名乱码解决办法",
        "title": "powershell 终端美化 git 分支名乱码解决办法",
        "sort": 3
      },
      {
        "id": "20231008184503-uguufic",
        "hpath": "/record/网页剪藏的最佳方案",
        "title": "网页剪藏的最佳方案",
        "sort": 4
      },
      {
        "id": "20210816161945-64u34r8",
        "hpath": "/record/数学",
        "title": "数学",
        "sort": 5,
        "children": [
          {
            "id": "20210816161945-lqyet22",
            "hpath": "/record/数学/高等数学1",
            "title": "高等数学1",
            "children": [
              {
                "id": "20201104153359-3nx9bze",
                "hpath": "/record/数学/高等数学1/函数",
                "title": "函数"
              }
            ]
          }
        ]
      },
      {
        "id": "20210816161945-ymzwhyj",
        "hpath": "/record/每日总结",
        "title": "每日总结",
        "sort": 6,
        "children": [
          {
            "id": "20240113132004-pe0p8zk",
            "hpath": "/record/每日总结/2024",
            "title": "2024",
            "sort": 1,
            "children": [
              {
                "id": "20240113132004-nil06rk",
                "hpath": "/record/每日总结/2024/2024-01-13",
                "title": "2024-01-13"
              }
            ]
          },
          {
            "id": "20230922210235-fm15v2v",
            "hpath": "/record/每日总结/2022",
            "title": "2022",
            "sort": 2,
            "children": [
              {
                "id": "20230922210341-tb0j8jh",
                "hpath": "/record/每日总结/2022/1月",
                "title": "1月",
                "children": [
                  {
                    "id": "20230922210751-18ta3pt",
                    "hpath": "/record/每日总结/2022/1月/百度输入法手机版",
                    "title": "百度输入法手机版"
                  },
                  {
                    "id": "20230922210913-sk1gknw",
                    "hpath": "/record/每日总结/2022/1月/愿",
                    "title": "愿"
                  }
                ]
              },
              {
                "id": "20230922210636-yrrx8sv",
                "hpath": "/record/每日总结/2022/2月",
                "title": "2月"
              },
              {
                "id": "20230922210708-5lki55w",
                "hpath": "/record/每日总结/2022/4月",
                "title": "4月"
              }
            ]
          },
          {
            "id": "20230913125831-oxze2rw",
            "hpath": "/record/每日总结/2023",
            "title": "2023",
            "sort": 3,
            "children": [
              {
                "id": "20231005183002-rr95gtx",
                "hpath": "/record/每日总结/2023/10月",
                "title": "10月"
              },
              {
                "id": "20231010145603-m1new0e",
                "hpath": "/record/每日总结/2023/2023-10-10",
                "title": "2023-10-10"
              },
              {
                "id": "20231012212211-t5jj284",
                "hpath": "/record/每日总结/2023/2023-10-12",
                "title": "2023-10-12"
              },
              {
                "id": "20231014184811-1mr93ig",
                "hpath": "/record/每日总结/2023/2023-10-14",
                "title": "2023-10-14"
              },
              {
                "id": "20231025173036-4yu8iku",
                "hpath": "/record/每日总结/2023/2023-10-25",
                "title": "2023-10-25"
              },
              {
                "id": "20231030002114-s0u2qmt",
                "hpath": "/record/每日总结/2023/2023-10-30",
                "title": "2023-10-30"
              },
              {
                "id": "20231109202643-pubpgip",
                "hpath": "/record/每日总结/2023/2023-11-09",
                "title": "2023-11-09"
              },
              {
                "id": "20231110154611-m87735j",
                "hpath": "/record/每日总结/2023/2023-11-10",
                "title": "2023-11-10"
              },
              {
                "id": "20231125164710-km0izr2",
                "hpath": "/record/每日总结/2023/2023-11-25",
                "title": "2023-11-25"
              },
              {
                "id": "20231201144232-8mit5u5",
                "hpath": "/record/每日总结/2023/2023-12-01",
                "title": "2023-12-01"
              },
              {
                "id": "20231209124318-kh9uiv5",
                "hpath": "/record/每日总结/2023/2023-12-09",
                "title": "2023-12-09"
              },
              {
                "id": "20231210171848-24ne2n1",
                "hpath": "/record/每日总结/2023/2023-12-10",
                "title": "2023-12-10"
              },
              {
                "id": "20231214222228-a3q0xr0",
                "hpath": "/record/每日总结/2023/2023-12-14",
                "title": "2023-12-14"
              },
              {
                "id": "20231226141816-7ki545g",
                "hpath": "/record/每日总结/2023/2023-12-26",
                "title": "2023-12-26"
              },
              {
                "id": "20231230090617-l3l0s7b",
                "hpath": "/record/每日总结/2023/2023-12-30",
                "title": "2023-12-30"
              },
              {
                "id": "20230913125831-6cw6uv2",
                "hpath": "/record/每日总结/2023/9月",
                "title": "9月"
              }
            ]
          },
          {
            "id": "20210816161945-kbhf80b",
            "hpath": "/record/每日总结/2020",
            "title": "2020",
            "sort": 4,
            "children": [
              {
                "id": "20201104153359-gbvpbnu",
                "hpath": "/record/每日总结/2020/10月",
                "title": "10月"
              },
              {
                "id": "20201105164945-ukz3aft",
                "hpath": "/record/每日总结/2020/11月",
                "title": "11月"
              },
              {
                "id": "20201201102932-3rahy0i",
                "hpath": "/record/每日总结/2020/12月",
                "title": "12月",
                "children": [
                  {
                    "id": "20201210141155-imuexul",
                    "hpath": "/record/每日总结/2020/12月/「收藏吃灰！」的解决方案-再提醒",
                    "title": "「收藏吃灰！」的解决方案-再提醒",
                    "sort": 0
                  }
                ]
              },
              {
                "id": "20201104153359-zzkfdc0",
                "hpath": "/record/每日总结/2020/3月",
                "title": "3月"
              },
              {
                "id": "20201104153359-9o6xh4z",
                "hpath": "/record/每日总结/2020/4月",
                "title": "4月"
              },
              {
                "id": "20201104153359-mfnccc5",
                "hpath": "/record/每日总结/2020/5月",
                "title": "5月"
              },
              {
                "id": "20201104153359-4v5piql",
                "hpath": "/record/每日总结/2020/6月",
                "title": "6月"
              },
              {
                "id": "20201104153359-cupt5av",
                "hpath": "/record/每日总结/2020/7月",
                "title": "7月"
              },
              {
                "id": "20201104153359-w6wvqcs",
                "hpath": "/record/每日总结/2020/8月",
                "title": "8月"
              }
            ]
          },
          {
            "id": "20201127151651-bbzj4xi",
            "hpath": "/record/每日总结/uniapp composition-api 中使用 onShow、onLoad 这样的生命周期",
            "title": "uniapp composition-api 中使用 onShow、onLoad 这样的生命周期",
            "sort": 5
          },
          {
            "id": "20210816161945-qxdhvo1",
            "hpath": "/record/每日总结/2021",
            "title": "2021",
            "sort": 6,
            "children": [
              {
                "id": "20210905174515-llcwmro",
                "hpath": "/record/每日总结/2021/9月",
                "title": "9月",
                "sort": 1
              },
              {
                "id": "20210609090557-nrhc2to",
                "hpath": "/record/每日总结/2021/了解 vue composition-api 原理",
                "title": "了解 vue composition-api 原理",
                "sort": 2
              },
              {
                "id": "20210816161945-zlvgoab",
                "hpath": "/record/每日总结/2021/备份",
                "title": "备份",
                "sort": 4
              },
              {
                "id": "20210805125608-n62j529",
                "hpath": "/record/每日总结/2021/8月",
                "title": "8月",
                "sort": 5
              },
              {
                "id": "20210702212953-hptovcw",
                "hpath": "/record/每日总结/2021/7月",
                "title": "7月",
                "sort": 6
              },
              {
                "id": "20210602160922-oyit5cy",
                "hpath": "/record/每日总结/2021/6月",
                "title": "6月",
                "sort": 7,
                "children": [
                  {
                    "id": "20240619103613-kfgx3q2",
                    "hpath": "/record/每日总结/2021/6月/Typescript函数返回类型怎样根据传入参数值的不同而改变？ - 知乎",
                    "title": "Typescript函数返回类型怎样根据传入参数值的不同而改变？ - 知乎"
                  }
                ]
              },
              {
                "id": "20210503102039-ncj65ct",
                "hpath": "/record/每日总结/2021/5月",
                "title": "5月",
                "sort": 8
              },
              {
                "id": "20210401083626-7ixkh94",
                "hpath": "/record/每日总结/2021/4月",
                "title": "4月",
                "sort": 9
              },
              {
                "id": "20210303140939-kgbmsqn",
                "hpath": "/record/每日总结/2021/3月",
                "title": "3月",
                "sort": 10
              },
              {
                "id": "20210201164305-8nne8fj",
                "hpath": "/record/每日总结/2021/2月",
                "title": "2月",
                "sort": 11
              },
              {
                "id": "20210101181148-phljk8h",
                "hpath": "/record/每日总结/2021/1月",
                "title": "1月",
                "sort": 12
              }
            ]
          }
        ]
      },
      {
        "id": "20210816161945-yh6mc8d",
        "hpath": "/record/网络讨论",
        "title": "网络讨论",
        "sort": 7,
        "children": [
          {
            "id": "20210611162725-22vs8tr",
            "hpath": "/record/网络讨论/Edge浏览器并没有保存网页的功能，依托脚本能解决吗？ - 知乎",
            "title": "Edge浏览器并没有保存网页的功能，依托脚本能解决吗？ - 知乎"
          }
        ]
      },
      {
        "id": "20210816161945-tnqwefh",
        "hpath": "/record/文本处理",
        "title": "文本处理",
        "sort": 8,
        "children": [
          {
            "id": "20210816161945-d912m9t",
            "hpath": "/record/文本处理/搜索",
            "title": "搜索",
            "children": [
              {
                "id": "20210122234859-v457hqz",
                "hpath": "/record/文本处理/搜索/站内搜索方案",
                "title": "站内搜索方案"
              },
              {
                "id": "20201104153359-4l8zwfm",
                "hpath": "/record/文本处理/搜索/flexsearch",
                "title": "flexsearch"
              }
            ]
          }
        ]
      },
      {
        "id": "20210816161945-isafot5",
        "hpath": "/record/环境",
        "title": "环境",
        "sort": 9,
        "children": [
          {
            "id": "20210816161945-hi5hvmu",
            "hpath": "/record/环境/阿里",
            "title": "阿里",
            "children": [
              {
                "id": "20201104153359-2skxfk4",
                "hpath": "/record/环境/阿里/阿里云视频点播",
                "title": "阿里云视频点播"
              },
              {
                "id": "20201104153359-rzhftsw",
                "hpath": "/record/环境/阿里/阿里云oss上传",
                "title": "阿里云oss上传"
              },
              {
                "id": "20210816161945-yz0hxts",
                "hpath": "/record/环境/阿里/表格存储",
                "title": "表格存储",
                "children": [
                  {
                    "id": "20201104153359-6o8ykq1",
                    "hpath": "/record/环境/阿里/表格存储/nodejs",
                    "title": "nodejs"
                  }
                ]
              }
            ]
          },
          {
            "id": "20210816161945-t1fzc5o",
            "hpath": "/record/环境/阿里云函数计算",
            "title": "阿里云函数计算",
            "children": [
              {
                "id": "20201104153359-gxaskpx",
                "hpath": "/record/环境/阿里云函数计算/README",
                "title": "README"
              }
            ]
          },
          {
            "id": "20210816161945-89wm30z",
            "hpath": "/record/环境/高德",
            "title": "高德",
            "children": [
              {
                "id": "20201104153359-gu2wpr5",
                "hpath": "/record/环境/高德/高德地图",
                "title": "高德地图"
              }
            ]
          },
          {
            "id": "20210816161945-0kiser9",
            "hpath": "/record/环境/腾讯",
            "title": "腾讯",
            "children": [
              {
                "id": "20201104153359-kzy7ww2",
                "hpath": "/record/环境/腾讯/腾讯ocr接口调用",
                "title": "腾讯ocr接口调用"
              }
            ]
          },
          {
            "id": "20210816161945-8v1pttn",
            "hpath": "/record/环境/微信",
            "title": "微信",
            "children": [
              {
                "id": "20201104153359-rccb8p2",
                "hpath": "/record/环境/微信/readme",
                "title": "readme"
              },
              {
                "id": "20201104153359-4xivpsg",
                "hpath": "/record/环境/微信/wxqr",
                "title": "wxqr"
              }
            ]
          },
          {
            "id": "20210816161945-e40j1xf",
            "hpath": "/record/环境/css",
            "title": "css",
            "children": [
              {
                "id": "20210105091835-cdjfps5",
                "hpath": "/record/环境/css/css伪类",
                "title": "css伪类"
              },
              {
                "id": "20210105091610-1ylde5k",
                "hpath": "/record/环境/css/README",
                "title": "README"
              }
            ]
          },
          {
            "id": "20210816161945-x76jwhu",
            "hpath": "/record/环境/dcoker",
            "title": "dcoker",
            "children": [
              {
                "id": "20201104153359-brlarq4",
                "hpath": "/record/环境/dcoker/Docker",
                "title": "Docker"
              }
            ]
          },
          {
            "id": "20210816161945-jvteo7c",
            "hpath": "/record/环境/go",
            "title": "go",
            "children": [
              {
                "id": "20201110230929-sms0o5n",
                "hpath": "/record/环境/go/go",
                "title": "go"
              },
              {
                "id": "20201110231008-4kvyoy9",
                "hpath": "/record/环境/go/go语法学习",
                "title": "go语法学习"
              }
            ]
          },
          {
            "id": "20210816161945-0xo6w1w",
            "hpath": "/record/环境/mogodb",
            "title": "mogodb",
            "children": [
              {
                "id": "20201104153359-jafjpde",
                "hpath": "/record/环境/mogodb/CentOS安装mogodb失败",
                "title": "CentOS安装mogodb失败"
              }
            ]
          },
          {
            "id": "20210816161945-m1yhabb",
            "hpath": "/record/环境/mysql",
            "title": "mysql",
            "children": [
              {
                "id": "20201104153359-vt5eeq5",
                "hpath": "/record/环境/mysql/CentOS安装mysql8.0",
                "title": "CentOS安装mysql8.0"
              },
              {
                "id": "20201104153359-4qiguui",
                "hpath": "/record/环境/mysql/mysql问题",
                "title": "mysql问题"
              }
            ]
          },
          {
            "id": "20210816161945-9zcl2hk",
            "hpath": "/record/环境/nest",
            "title": "nest",
            "children": [
              {
                "id": "20201104153359-facmwwd",
                "hpath": "/record/环境/nest/readme",
                "title": "readme"
              }
            ]
          },
          {
            "id": "20210816161945-hsrrnq3",
            "hpath": "/record/环境/nginx",
            "title": "nginx",
            "children": [
              {
                "id": "20201104153359-c94443j",
                "hpath": "/record/环境/nginx/nginx",
                "title": "nginx"
              }
            ]
          },
          {
            "id": "20210816161945-wh7so7e",
            "hpath": "/record/环境/php",
            "title": "php",
            "children": [
              {
                "id": "20201104153359-ie21qk4",
                "hpath": "/record/环境/php/php-mysql返回类型不对",
                "title": "php-mysql返回类型不对"
              },
              {
                "id": "20201104153359-9xdmm8q",
                "hpath": "/record/环境/php/php安装",
                "title": "php安装"
              },
              {
                "id": "20201104153359-g97yry7",
                "hpath": "/record/环境/php/php工具函数",
                "title": "php工具函数"
              }
            ]
          },
          {
            "id": "20210816161945-ssbbzxp",
            "hpath": "/record/环境/uni",
            "title": "uni",
            "children": [
              {
                "id": "20201104153359-4x1obw3",
                "hpath": "/record/环境/uni/关于appid和包名",
                "title": "关于appid和包名"
              },
              {
                "id": "20201104153359-zpmbtmk",
                "hpath": "/record/环境/uni/组件在非h5端不显示问题",
                "title": "组件在非h5端不显示问题"
              },
              {
                "id": "20210816161945-um46we2",
                "hpath": "/record/环境/uni/img",
                "title": "img"
              },
              {
                "id": "20201104153359-zjxz9mz",
                "hpath": "/record/环境/uni/uni-app",
                "title": "uni-app"
              },
              {
                "id": "20210122232307-u074mii",
                "hpath": "/record/环境/uni/uni-app数据传递的坑",
                "title": "uni-app数据传递的坑"
              },
              {
                "id": "20201104153359-oek66c7",
                "hpath": "/record/环境/uni/uni-app转微信",
                "title": "uni-app转微信"
              },
              {
                "id": "20210120134520-egxkpts",
                "hpath": "/record/环境/uni/uni-app最佳实践",
                "title": "uni-app最佳实践"
              }
            ]
          },
          {
            "id": "20210816161945-sc79cz2",
            "hpath": "/record/环境/vscode",
            "title": "vscode",
            "children": [
              {
                "id": "20201104153359-acpp4oy",
                "hpath": "/record/环境/vscode/vscode开启时cpu飙升",
                "title": "vscode开启时cpu飙升"
              },
              {
                "id": "20201104153359-55kblxd",
                "hpath": "/record/环境/vscode/vscode使用心得",
                "title": "vscode使用心得",
                "children": [
                  {
                    "id": "20231220132730-nudn7j1",
                    "hpath": "/record/环境/vscode/vscode使用心得/过时的",
                    "title": "过时的"
                  },
                  {
                    "id": "20231227091314-c3z7g7o",
                    "hpath": "/record/环境/vscode/vscode使用心得/Untitled",
                    "title": "Untitled"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "20210816161945-af8jx5u",
        "hpath": "/record/脚本相关",
        "title": "脚本相关",
        "sort": 10,
        "children": [
          {
            "id": "20210816161945-1a8kwl8",
            "hpath": "/record/脚本相关/油猴",
            "title": "油猴",
            "children": [
              {
                "id": "20201104153359-95kjr3c",
                "hpath": "/record/脚本相关/油猴/如何动态的加载脚本",
                "title": "如何动态的加载脚本"
              }
            ]
          }
        ]
      },
      {
        "id": "20201104153359-cfnpj3r",
        "hpath": "/record/正则",
        "title": "正则",
        "sort": 11
      },
      {
        "id": "20210816161944-wywd7gp",
        "hpath": "/record/img",
        "title": "img",
        "sort": 11
      },
      {
        "id": "20201104153359-62miawh",
        "hpath": "/record/商城__云",
        "title": "商城__云",
        "sort": 12,
        "children": [
          {
            "id": "20250804105804-iuhpip4",
            "hpath": "/record/商城__云/knife4j",
            "title": "knife4j"
          }
        ]
      },
      {
        "id": "20201104153359-xardzca",
        "hpath": "/record/storage事件",
        "title": "storage事件",
        "sort": 12
      },
      {
        "id": "20210816161944-p1sylcd",
        "hpath": "/record/展示",
        "title": "展示",
        "sort": 13
      },
      {
        "id": "20201104153359-sk9a3yg",
        "hpath": "/record/markdown",
        "title": "markdown",
        "sort": 13
      },
      {
        "id": "20210816161944-l6uorse",
        "hpath": "/record/vscode编辑器-monaco-editor",
        "title": "vscode编辑器-monaco-editor",
        "sort": 14,
        "children": [
          {
            "id": "20201104153359-nns1qjc",
            "hpath": "/record/vscode编辑器-monaco-editor/monaco-editor",
            "title": "monaco-editor"
          }
        ]
      },
      {
        "id": "20210816161944-81sfqa9",
        "hpath": "/record/多活一会",
        "title": "多活一会",
        "sort": 15,
        "children": [
          {
            "id": "20210123155100-ghlek94",
            "hpath": "/record/多活一会/多活一会",
            "title": "多活一会"
          }
        ]
      },
      {
        "id": "20201113162255-nc5j27k",
        "hpath": "/record/网站seo相关优化",
        "title": "网站seo相关优化",
        "sort": 16
      },
      {
        "id": "20201105161737-0hvwi5r",
        "hpath": "/record/Tag",
        "title": "Tag",
        "sort": 17
      },
      {
        "id": "20201104155455-awawq0n",
        "hpath": "/record/思源笔记",
        "title": "思源笔记",
        "sort": 18,
        "children": [
          {
            "id": "20250325142805-8fbm375",
            "hpath": "/record/思源笔记/思源开发手册",
            "title": "思源开发手册"
          }
        ]
      },
      {
        "id": "20201105161628-4vktwyt",
        "hpath": "/record/思源笔记 其他记录",
        "title": "思源笔记 其他记录",
        "sort": 19
      },
      {
        "id": "20201104153359-jmwdhm3",
        "hpath": "/record/aop面向切面",
        "title": "aop面向切面",
        "sort": 20
      },
      {
        "id": "20201104153359-3hiw1pt",
        "hpath": "/record/装饰器详解",
        "title": "装饰器详解",
        "sort": 21
      },
      {
        "id": "20201104153359-ufenbps",
        "hpath": "/record/socket.io",
        "title": "socket.io",
        "sort": 22
      },
      {
        "id": "20201104153359-sji4b7x",
        "hpath": "/record/mui的踩坑之路",
        "title": "mui的踩坑之路",
        "sort": 23
      },
      {
        "id": "20201104153359-r2m5rrg",
        "hpath": "/record/b3blog",
        "title": "b3blog",
        "sort": 24
      },
      {
        "id": "20201104153359-qojdpli",
        "hpath": "/record/服务器疑难诊断",
        "title": "服务器疑难诊断",
        "sort": 25
      },
      {
        "id": "20201104153359-lfntwqo",
        "hpath": "/record/nico",
        "title": "nico",
        "sort": 26
      },
      {
        "id": "20201104153359-k6sls0m",
        "hpath": "/record/js实现撤销功能",
        "title": "js实现撤销功能",
        "sort": 27
      },
      {
        "id": "20201104153359-k5cnjmg",
        "hpath": "/record/android-studio",
        "title": "android-studio",
        "sort": 28
      },
      {
        "id": "20201104153359-yr20jlk",
        "hpath": "/record/css",
        "title": "css",
        "sort": 29
      },
      {
        "id": "20201104153359-es0bj7h",
        "hpath": "/record/git",
        "title": "git",
        "sort": 30
      },
      {
        "id": "20201104153359-c5rek5r",
        "hpath": "/record/typeorm",
        "title": "typeorm",
        "sort": 31
      },
      {
        "id": "20201104153359-8cmuico",
        "hpath": "/record/cssFlex",
        "title": "cssFlex",
        "sort": 32
      },
      {
        "id": "20201104153359-7rhwdvj",
        "hpath": "/record/template",
        "title": "template",
        "sort": 33
      },
      {
        "id": "20201104153359-5vksxt1",
        "hpath": "/record/环境啊你好坑",
        "title": "环境啊你好坑",
        "sort": 34
      },
      {
        "id": "20201104153359-5sr0lpx",
        "hpath": "/record/https与koa",
        "title": "https与koa",
        "sort": 35
      },
      {
        "id": "20201104153359-4x44rpk",
        "hpath": "/record/ios网页安装",
        "title": "ios网页安装",
        "sort": 36
      }
    ]
  },
  {
    "id": "20240127182639-lbj1xw6",
    "hpath": "/daily note",
    "title": "daily note",
    "sort": 10,
    "children": [
      {
        "id": "20240127182639-2u9o4ac",
        "hpath": "/daily note/2024",
        "title": "2024",
        "children": [
          {
            "id": "20240127182639-ofwree6",
            "hpath": "/daily note/2024/01",
            "title": "01",
            "children": [
              {
                "id": "20240127182639-vn5szi8",
                "hpath": "/daily note/2024/01/2024-01-27",
                "title": "2024-01-27"
              }
            ]
          },
          {
            "id": "20240206172429-ej5o8j4",
            "hpath": "/daily note/2024/02",
            "title": "02",
            "children": [
              {
                "id": "20240206172429-p0gchmq",
                "hpath": "/daily note/2024/02/2024-02-06",
                "title": "2024-02-06"
              }
            ]
          },
          {
            "id": "20240311141820-y5nvvd9",
            "hpath": "/daily note/2024/03",
            "title": "03",
            "children": [
              {
                "id": "20240312184126-t452mq4",
                "hpath": "/daily note/2024/03/2024-03-12",
                "title": "2024-03-12"
              },
              {
                "id": "20240313135437-4xsir7m",
                "hpath": "/daily note/2024/03/2024-03-13",
                "title": "2024-03-13"
              },
              {
                "id": "20240314183307-w8sj8rj",
                "hpath": "/daily note/2024/03/2024-03-14",
                "title": "2024-03-14"
              },
              {
                "id": "20240316165101-otrbbbf",
                "hpath": "/daily note/2024/03/2024-03-16",
                "title": "2024-03-16"
              },
              {
                "id": "20240317144428-asz6rle",
                "hpath": "/daily note/2024/03/2024-03-17",
                "title": "2024-03-17",
                "children": [
                  {
                    "id": "20240317144444-1h5ogkq",
                    "hpath": "/daily note/2024/03/2024-03-17/minIO",
                    "title": "minIO"
                  }
                ]
              },
              {
                "id": "20240320171028-amnitg0",
                "hpath": "/daily note/2024/03/2024-03-20",
                "title": "2024-03-20",
                "children": [
                  {
                    "id": "20240320171046-u1vay6w",
                    "hpath": "/daily note/2024/03/2024-03-20/OpenSCAD",
                    "title": "OpenSCAD"
                  }
                ]
              },
              {
                "id": "20240311141820-58ast58",
                "hpath": "/daily note/2024/03/espruino",
                "title": "espruino"
              }
            ]
          },
          {
            "id": "20240424212628-7jmh3di",
            "hpath": "/daily note/2024/04",
            "title": "04",
            "children": [
              {
                "id": "20240424212628-7vbiwqv",
                "hpath": "/daily note/2024/04/2024-04-24",
                "title": "2024-04-24"
              },
              {
                "id": "20240425120311-c7sk66d",
                "hpath": "/daily note/2024/04/2024-04-25",
                "title": "2024-04-25"
              }
            ]
          },
          {
            "id": "20240514102355-cjj0q7u",
            "hpath": "/daily note/2024/05",
            "title": "05",
            "children": [
              {
                "id": "20240514102355-g34hf4y",
                "hpath": "/daily note/2024/05/2024-05-14",
                "title": "2024-05-14",
                "children": [
                  {
                    "id": "20240514114344-ege1lpq",
                    "hpath": "/daily note/2024/05/2024-05-14/心栈空间",
                    "title": "心栈空间"
                  },
                  {
                    "id": "20240514102402-jhu3mmy",
                    "hpath": "/daily note/2024/05/2024-05-14/自动获取思源笔记一页中的各级标题的数量",
                    "title": "自动获取思源笔记一页中的各级标题的数量"
                  }
                ]
              },
              {
                "id": "20240517125318-bm8kdnl",
                "hpath": "/daily note/2024/05/2024-05-17",
                "title": "2024-05-17",
                "children": [
                  {
                    "id": "20240517155301-464yodt",
                    "hpath": "/daily note/2024/05/2024-05-17/一键创建云端思源",
                    "title": "一键创建云端思源"
                  }
                ]
              },
              {
                "id": "20240518231425-b1m62z4",
                "hpath": "/daily note/2024/05/2024-05-18",
                "title": "2024-05-18",
                "children": [
                  {
                    "id": "20240518231434-d8w3074",
                    "hpath": "/daily note/2024/05/2024-05-18/llrt",
                    "title": "llrt"
                  }
                ]
              }
            ]
          },
          {
            "id": "20240606162404-iyp3vr0",
            "hpath": "/daily note/2024/06",
            "title": "06",
            "children": [
              {
                "id": "20240606162404-jh6a36p",
                "hpath": "/daily note/2024/06/2024-06-06",
                "title": "2024-06-06",
                "children": [
                  {
                    "id": "20240606162435-2uz93n3",
                    "hpath": "/daily note/2024/06/2024-06-06/思源周边开发者所获之巨利",
                    "title": "思源周边开发者所获之巨利"
                  }
                ]
              },
              {
                "id": "20240607105808-d30mtvl",
                "hpath": "/daily note/2024/06/2024-06-07",
                "title": "2024-06-07"
              },
              {
                "id": "20240608203236-d2fne5c",
                "hpath": "/daily note/2024/06/2024-06-08",
                "title": "2024-06-08"
              },
              {
                "id": "20240609133438-f23b5n3",
                "hpath": "/daily note/2024/06/2024-06-09",
                "title": "2024-06-09"
              },
              {
                "id": "20240610093138-us9xcv0",
                "hpath": "/daily note/2024/06/2024-06-10",
                "title": "2024-06-10"
              },
              {
                "id": "20240611153054-qr0ikf7",
                "hpath": "/daily note/2024/06/2024-06-11",
                "title": "2024-06-11"
              },
              {
                "id": "20240612113204-bk98olz",
                "hpath": "/daily note/2024/06/2024-06-12",
                "title": "2024-06-12"
              },
              {
                "id": "20240613203835-x48msil",
                "hpath": "/daily note/2024/06/2024-06-13",
                "title": "2024-06-13"
              },
              {
                "id": "20240614143147-kudehad",
                "hpath": "/daily note/2024/06/2024-06-14",
                "title": "2024-06-14"
              },
              {
                "id": "20240619221713-7i99yq9",
                "hpath": "/daily note/2024/06/2024-06-19",
                "title": "2024-06-19"
              }
            ]
          },
          {
            "id": "20240729115419-wt4fuz8",
            "hpath": "/daily note/2024/07",
            "title": "07",
            "children": [
              {
                "id": "20240729115419-fn4zv2a",
                "hpath": "/daily note/2024/07/2024-07-29",
                "title": "2024-07-29"
              }
            ]
          },
          {
            "id": "20240808091946-czero1z",
            "hpath": "/daily note/2024/08",
            "title": "08",
            "children": [
              {
                "id": "20240808091946-dqbdwdq",
                "hpath": "/daily note/2024/08/2024-08-08",
                "title": "2024-08-08"
              }
            ]
          }
        ]
      }
    ]
  }
];
  
  // 渲染函数
  function renderDocTree(containerId, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error('Container not found:', containerId);
      return;
    }
    
    const currentPath = options.currentPath || window.location.pathname.replace(/\.html$/, '');
    
    // 生成 HTML
    const html = generateHTMLTree(docTreeData, currentPath);
    container.innerHTML = html;
    
    // 加载样式
    loadStyles();
    
    // 初始化交互
    initInteractions(container, currentPath);
  }
  
  // 检查是否为单一路径（只有单个子节点的文件夹）
  function isSinglePath(node) {
    if (!node.children || node.children.length !== 1) {
      return false;
    }
    
    let current = node;
    while (current.children && current.children.length === 1) {
      current = current.children[0];
    }
    
    // 如果最终节点没有子节点，说明是单一路径
    return !current.children || current.children.length === 0;
  }

  // 获取单一路径的所有节点
  function getSinglePathNodes(node) {
    const pathNodes = [node];
    let current = node;
    
    while (current.children && current.children.length === 1) {
      current = current.children[0];
      pathNodes.push(current);
    }
    
    return pathNodes;
  }

  // 生成面包屑路径
  function generateBreadcrumb(pathNodes, currentPath) {
    const lastNode = pathNodes[pathNodes.length - 1];
    const isCurrent = lastNode.hpath === currentPath;
    
    let breadcrumbHtml = '<div class="breadcrumb-path">';
    
    pathNodes.forEach((node, index) => {
      if (index > 0) {
        breadcrumbHtml += '<span class="breadcrumb-separator">/</span>';
      }
      
      const isLast = index === pathNodes.length - 1;
      const nodeCurrent = node.hpath === currentPath;
      
      breadcrumbHtml += `
        <a href="${node.hpath}.html" class="breadcrumb-part ${(isLast && isCurrent) ? 'current' : ''}" target="_top">${node.title}</a>
      `;
    });
    
    breadcrumbHtml += '</div>';
    return breadcrumbHtml;
  }

  // 生成 HTML 树
  function generateHTMLTree(nodes, currentPath, level = 0) {
    let html = '';
    for (const node of nodes) {
      const isCurrent = node.hpath === currentPath;
      const isActive = isCurrent || (currentPath && node.hpath && currentPath.startsWith(node.hpath));
      
      // 检查是否为单一路径，如果是则显示为面包屑
      if (isSinglePath(node)) {
        const pathNodes = getSinglePathNodes(node);
        html += generateBreadcrumb(pathNodes, currentPath);
        continue;
      }
      
      if (node.children && node.children.length > 0) {
        // 有子节点时使用 details/summary
        const isExpanded = isActive ? 'open' : '';
        html += `
          <details class="folder" ${isExpanded}>
            <summary class="folder-summary">
              <a href="${node.hpath}.html" class="folder-link ${isCurrent ? 'current' : ''}" target="_top">${node.title}</a>
            </summary>
            <div class="folder-children" style="padding:0 0 0 10px;">
              ${generateHTMLTree(node.children, currentPath, level + 1)}
            </div>
          </details>
        `;
      } else {
        // 没有子节点的普通项目
        html += `
          <div class="file ${isCurrent ? 'current' : ''}">
            <a href="${node.hpath}.html" class="file-link" target="_top">${node.title}</a>
          </div>
        `;
      }
    }
    return html;
  }
  
  // 加载样式
  function loadStyles() {
    if (document.getElementById('oceanpress-doctree-styles')) return;
    
    const link = document.createElement('link');
    link.id = 'oceanpress-doctree-styles';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://fastly.jsdelivr.net/gh/siyuan-note/oceanpress@1.0.12/apps/frontend/public/notebook/appearance/docTree.css';
    document.head.appendChild(link);
  }
  
  // 初始化交互
  function initInteractions(container, currentPath) {
    // 为当前页面项添加高亮样式
    const currentItems = container.querySelectorAll('.current');
    currentItems.forEach(item => {
      // 如果是面包屑路径中的当前项，需要特殊处理
      if (item.classList.contains('breadcrumb-part')) {
        item.style.fontWeight = 'bold';
        item.style.color = 'var(--oceanpress-sidebar-current-border)';
      } else {
        // 使用 CSS 变量而不是硬编码颜色
        item.style.backgroundColor = 'var(--oceanpress-sidebar-current-bg)';
        item.style.borderLeft = '3px solid var(--oceanpress-sidebar-current-border)';
        item.style.paddingLeft = '7px';
      }
    });
    
    // 确保当前页面的所有父文件夹都展开
    const currentElements = container.querySelectorAll('.current');
    currentElements.forEach(currentElement => {
      // 向上遍历所有父级 details 元素并展开
      let parent = currentElement.parentElement;
      while (parent) {
        if (parent.tagName === 'DETAILS') {
          parent.setAttribute('open', 'open');
        }
        parent = parent.parentElement;
      }
    });
    
    // 自动滚动到当前页面
    const firstCurrent = container.querySelector('.current');
    if (firstCurrent) {
      setTimeout(() => {
        firstCurrent.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
    
    // 监听主题变化事件，更新高亮样式
    window.addEventListener('oceanpress-theme-changed', function(e) {
      currentItems.forEach(item => {
        if (item.classList.contains('breadcrumb-part')) {
          item.style.fontWeight = 'bold';
          item.style.color = 'var(--oceanpress-sidebar-current-border)';
        } else {
          item.style.backgroundColor = 'var(--oceanpress-sidebar-current-bg)';
          item.style.borderLeft = '3px solid var(--oceanpress-sidebar-current-border)';
        }
      });
    });
  }
  
  // 暴露到全局
  window.OceanPressDocTree = {
    render: renderDocTree,
    data: docTreeData
  };
  
  // 自动渲染（如果容器存在）
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      if (document.getElementById('oceanpress-doctree')) {
        renderDocTree('oceanpress-doctree');
      }
    });
  } else {
    if (document.getElementById('oceanpress-doctree')) {
      renderDocTree('oceanpress-doctree');
    }
  }
})();
    