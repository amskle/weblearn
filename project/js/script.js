// 文物数据
const artifacts = [
    {
        id: 1,
        name: "四羊方尊",
        category: "bronze",
        period: "商代晚期",
        image: "../images/siyang.jpg",
        desc: "四羊方尊是中国现存商代青铜方尊中最大的一件。其造型独特，肩部四角各塑一羊，羊首向外，羊角卷曲，神态安详。",
        details: "修复历史：1938年出土时碎为20余块，后经清洗、焊接、补配、随色等工序修复完整。最近一次数字化扫描显示其内壁有铭文痕迹。",
        status: "完好 (Level A)"
    },
    {
        id: 2,
        name: "翠玉白菜",
        category: "jade",
        period: "清代",
        image: "../images/cuiyu.jpg",
        desc: "利用翡翠天然的色泽雕刻而成，寓意清白。菜叶上停留的两只昆虫是螽斯和蝗虫，寓意多子多孙。",
        details: "维护记录：定期进行恒温恒湿环境监测。2021年发现微小裂纹风险，已加强防震支架保护。",
        status: "需监测 (Level B)"
    },
    {
        id: 3,
        name: "青花瓷盘",
        category: "ceramics",
        period: "明代",
        image: "../images/qinghua.jpg",
        desc: "盘心绘有缠枝莲纹，釉色温润，青花发色浓艳，是明代官窑的代表作。",
        details: "技术分析：通过X射线荧光光谱分析，确定其钴料来自进口的苏麻离青。",
        status: "完好 (Level A)"
    },
    {
        id: 4,
        name: "千里江山图(局部)",
        category: "painting",
        period: "北宋",
        image: "../images/qianli.jpg",
        desc: "王希孟18岁时所作，以石青、石绿等矿物颜料绘成，色彩绚丽，气势恢宏。",
        details: "保护现状：因矿物颜料易脱落，极少展出。目前主要通过8K高清数字副本供公众欣赏。",
        status: "极脆弱 (Level S)"
    },
    {
        id: 5,
        name: "三星堆金面具",
        category: "bronze",
        period: "商代",
        image: "../images/mianju.jpg",
        desc: "展示了古蜀文明独特的审美与高超的黄金加工工艺。",
        details: "出土情况：2021年出土于祭祀坑，出土时被压皱。通过数字展开技术还原了其原本形态。",
        status: "修复中 (Level C)"
    },
    {
        id: 6,
        name: "白玉龙钮印",
        category: "jade",
        period: "汉代",
        image: "../images/bailong.jpg",
        desc: "汉代皇室专用印章，玉质洁白无瑕，龙钮雕刻精细。",
        details: "无明显破损，主要进行定期清洁与表面封护。",
        status: "完好 (Level A)"
    },
    {
        id: 8,
        name: "青花缠枝莲纹梅瓶",
        category: "ceramic",
        period: "明代永乐",
        image: "../images/qinghuameiping.jpg",
        desc: "永乐官窑青花瓷典范，胎质细腻，釉色莹润，缠枝莲纹绘制工整，苏麻离青料发色浓艳。",
        details: "口沿有轻微冲线（已修复），釉面存在自然开片。定期进行稳定性检测。",
        status: "完好 (Level A)"
    },
    {
        id: 10,
        name: "错金银云纹青铜犀尊",
        category: "metal",
        period: "战国",
        image: "../images/xiyi.jpg",
        desc: "战国时期酒器，犀牛造型生动，通体错金银云纹，工艺精湛，体现战国时期金属工艺的高超水平。",
        details: "出土时断裂为三部分，已修复完整。错金银部分有轻微脱落，需避免振动。",
        status: "修复后稳定 (Level B)"
    }
];

// 新闻数据
const newsData = [
    {
        "id": 1,
        "title": "国家文物局发布《“十四五”文物保护和科技创新规划》",
        "date": "2024-05-15",
        "summary": "规划明确提出要加强文物科技创新，建立国家级文物保护科研平台，重点突破土遗址保护、有机质文物保护等关键技术瓶颈。",
        "content": "详细内容：规划指出，到2025年，我国文物科技创新能力显著增强，文物保护利用水平全面提升。重点任务包括：1. 建设国家文化遗产科技创新中心。2. 攻克一批文物保护关键核心技术。3. 完善文物科技人才培养体系。这将为我国从文物资源大国向文物保护强国跨越提供有力支撑。"
    },
    {
        "id": 2,
        "title": "中共中央办公厅、国务院办公厅印发《关于加强文物保护利用改革的若干意见》",
        "date": "2025-03-10",
        "summary": "文件作为新时代文物工作顶层设计，系统部署了文物保护利用改革的主要目标和重点任务，确立到2025年的阶段性改革目标。",
        "content": "详细内容：该《意见》是指导当前和今后一个时期文物工作的纲领性文件，强调坚持保护第一、强化系统保护，并着力破解影响文物事业高质量发展的体制机制障碍。核心举措包括健全不可移动文物保护机制、加强革命文物保护传承、激发博物馆创新活力、引导社会力量参与文物保护利用等，旨在构建党委领导、政府负责、社会协同、公众参与的文物工作新格局。"
    },
    {
        "id": 3,
        "title": "《河南省重要文物建筑系统性保护三年行动方案（2026—2028年）》正式印发",
        "date": "2025-09-20",
        "summary": "该方案是全国首个省级文物建筑系统性保护专项计划，标志文物保护理念从抢救性修复向预防性、研究性保护的根本性转变。",
        "content": "详细内容：方案聚焦河南省内国家级、省级文物保护单位中的珍贵文物建筑，部署未来三年的系统性保护工作。核心内容涵盖：1. 实施抢救性保护工程，消除重大险情。2. 建立全省文物建筑健康监测网络和动态数据库，强化预防性保护。3. 开展深入的考古研究和价值挖掘，支撑研究性保护。4. 推动文物建筑的活化利用，策划建设一批数字化展示项目。此举旨在为文物建筑构筑全生命周期的保护管理体系。"
    },
    {
        "id": 4,
        "title": "湘鄂黔三地签署《土司遗址保护利用十年行动计划（2026—2035）》",
        "date": "2025-10-28",
        "summary": "在第五届咸丰·世界遗产唐崖论坛上，湖北、湖南、贵州三省份联合签署行动计划，开创跨省域、跨遗产地协同保护管理新范式。",
        "content": "详细内容：该行动计划的签署是2025年遗产保护领域重要的学术与实践结合成果。其主要内容包括：1. 建立三省土司遗址联合保护管理协调机制，统一保护标准与监测体系。2. 共同开展学术研究，深化对土司制度与文化价值的阐释。3. 联合打造“中国土司遗产”文化旅游品牌，推动整体活化利用。此举旨在打破行政壁垒，对分布于三地的唐崖土司城址、老司城遗址、海龙屯遗址等世界文化遗产进行整体性、系统性保护。"
    },
    {
        "id": 5,
        "title": "北京市发布《文物保护单位无障碍设施设置规范》等两项地方标准",
        "date": "2025-12-01",
        "summary": "两项新标准于2026年1月1日正式实施，分别从人文关怀和技术精细化管理层面，为超大城市文物保护提供了“北京方案”。",
        "content": "详细内容：1.《文物保护单位无障碍设施设置规范》核心在于解决文物保护与平等参与的社会需求之间的矛盾，详细规定了坡道、扶手、标识等设施在不破坏文物本体、风貌的前提下的设置要求。2.《文物保护工程勘察规范 长城》则针对长城保护的特殊性，统一了勘察程序、病害分类与诊断方法，旨在解决以往勘察深度不一、病害判定不准的问题，为长城保护工程的科学实施奠定坚实基础。这两项标准体现了文物保护向着更精细化、人性化方向发展的趋势。"
    },
    {
        "id": 6,
        "title": "2025年文化遗产保护科技创新论坛在京举行",
        "date": "2025-11-17",
        "summary": "论坛聚焦“科技赋能遗产可持续发展”，集中展示了在考古探测、文物分析、预防性保护等领域的最新科技成果与应用案例。",
        "content": "详细内容：作为年度重要的学术交流活动，论坛汇聚了国内外文博机构、高校和科技企业的专家。核心议题与成果包括：1. 发布新型便携式光谱、雷达探测设备在田野考古与石窟寺渗水探测中的成功应用案例。2. 探讨人工智能在文物碎片智能拼接、病害自动识别分析中的前沿进展。3. 交流基于物联网和大数据的遗产地环境监测与风险评估预警平台建设经验。论坛形成了加强跨学科合作、推动科研成果快速转化应用的共识。"
    }
]


// --- 2. 初始化 ---

document.addEventListener('DOMContentLoaded', () => {
    initCharts();
    renderArtifacts(artifacts);
    renderNews();

    // 初始化滚动监听器 (Intersection Observer)
    initScrollObserver();

    // 移动端菜单切换
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
});

// --- 新增：滚动显现动画逻辑 ---
function initScrollObserver() {
    const observerOptions = {
        root: null, // 视口作为根
        threshold: 0.1, // 元素出现 10% 时触发
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 当元素进入视口，添加 .scroll-show 类
                entry.target.classList.add('scroll-show');
                // 动画只播放一次，所以取消监听
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 选取所有带有 .scroll-hidden 类的元素进行监听
    document.querySelectorAll('.scroll-hidden').forEach((el) => {
        observer.observe(el);
    });
}


// --- 3. 导航逻辑 ---

function navigateTo(sectionId) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(sec => {
        sec.classList.add('hidden');
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.remove('hidden');
        // 重置动画 (可选)
        activeSection.classList.remove('fade-in');
        void activeSection.offsetWidth;
        activeSection.classList.add('fade-in');
    }

    document.getElementById('mobile-menu').classList.add('hidden');
    window.scrollTo(0, 0);
}



const GEMINI_API_KEY = "AIzaSyDjyPIP86WxCG33URf7KVpw0kCiIA0S0PU"; 

// 核心函数：尝试调用真 AI，失败则用假 AI
async function getLocalAIResponse(keyword) {
    // 1. 定义提示词 (Prompt)
    let prompt = "";
    // 如果关键词是“修复”，说明是在问技术问题
    if (keyword === "修复") {
        const userQuestion = document.getElementById('ai-tech-input').value;
        prompt = `你是一位资深的文物修复专家。用户问：“${userQuestion}”。请用专业但通俗的语言简短回答（100字以内）。`;
    } else {
        // 否则是在问文物导览
        prompt = `你是一位博物馆金牌导览员。请为观众介绍文物“${keyword}”。用生动有趣的语言，包含历史背景和艺术价值，字数控制在100字以内。`;
    }

    // 2. 尝试调用 Gemini API
    try {
        // 如果没有填 Key，直接抛出错误，进入本地模式
        // if (!GEMINI_API_KEY || GEMINI_API_KEY.includes('')) {
        //     throw new Error("API Key 未配置");
        // }

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: prompt }]
                }]
            })
        });

        if (!response.ok) throw new Error("网络请求失败");

        const data = await response.json();
        const aiText = data.candidates[0].content.parts[0].text;
        
        // 成功拿到真 AI 的回复！
        return aiText;

    } catch (error) {
        console.warn("Gemini 调用失败，自动切换回本地预设模式:", error);
        
        // --- 3. 降级处理：本地预设回复 (兜底方案) ---
        // 模拟 1 秒延迟，保持体验一致
        return new Promise(resolve => {
            setTimeout(() => {
                let responseText = "";
                if (keyword.includes("四羊方尊")) {
                    responseText = "（本地模式）四羊方尊最神奇的地方在于它的铸造工艺。商代工匠使用'分铸法'，先分别铸好四个羊头，再放入模具与尊身一起浇铸。这种技术在3000多年前简直是黑科技！";
                } else if (keyword.includes("翠玉白菜")) {
                    responseText = "（本地模式）这棵白菜其实是'变废为宝'的典范。工匠巧妙地利用颜色分布，把瑕疵变成了菜叶的自然纹理。";
                } else if (keyword === "修复") {
                    responseText = "（本地模式）针对这种情况，如果是青铜器有害锈（粉状锈），我们通常采用物理打磨配合倍半碳酸钠浸泡法；如果是纸张酸化发黄，则需要通过弱碱性溶液进行脱酸处理。";
                } else {
                    responseText = "（本地模式）这是一件非常珍贵的文物。通过现代数字扫描技术，我们建立它的高精度三维模型，哪怕它由于岁月侵蚀发生微小变化，我们也能第一时间监测到。";
                }
                resolve(responseText);
            }, 1000);
        });
    }
}
// 2. 文物导览 AI (注意：这里加了 async)
async function generateAIStory(name, period, btn) {
    const outputDiv = btn.nextElementSibling;
    const originalText = btn.innerHTML;

    // 设置加载状态
    btn.disabled = true;
    btn.innerHTML = `<span class="spinner"></span> 正在查找资料...`;
    outputDiv.classList.add('hidden');

    // 等待 AI 回复 (这里用了 await，所以函数前面必须加 async)
    const result = await getLocalAIResponse(name);

    // 恢复按钮并显示结果
    btn.innerHTML = originalText;
    btn.disabled = false;
    outputDiv.innerHTML = `<strong>✨ 导览员解说：</strong><br>${result}`;
    outputDiv.classList.remove('hidden');
}

// 3. 技术顾问 AI (注意：这里也加了 async)
async function askRestorationAI() {
    const input = document.getElementById('ai-tech-input');
    const output = document.getElementById('ai-tech-output');
    const btn = document.getElementById('ai-tech-btn');
    const userQuestion = input.value.trim();

    if (!userQuestion) {
        alert("请输入您的问题！");
        return;
    }

    const originalBtnText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = `<span class="spinner"></span> 查询专家库...`;
    output.classList.add('hidden');

    // 等待 AI 回复 (使用 await)
    const result = await getLocalAIResponse("修复");

    btn.innerHTML = originalBtnText;
    btn.disabled = false;
    output.innerHTML = `<strong>💡 专家解答：</strong><br>${result}`;
    output.classList.remove('hidden');
}


// --- 5. 文物展示逻辑 ---

function renderArtifacts(data) {
    const grid = document.getElementById('artifact-grid');
    grid.innerHTML = '';

    data.forEach((item, index) => {
        const card = document.createElement('div');
        // 添加 scroll-hidden 类，并设置延迟，实现错落出现的动画效果
        card.className = "artifact-card scroll-hidden";
        card.style.transitionDelay = `${index * 0.1}s`;
        card.onclick = () => openModal(item);

        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${item.image}" alt="${item.name}" class="card-img">
                <div class="card-tag">
                    ${getCategoryName(item.category)}
                </div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${item.name}</h3>
                <p class="card-period">${item.period}</p>
                <p class="card-desc">${item.desc}</p>
                <div style="margin-top: 15px; border-top: 1px solid #f0f0f0; padding-top: 10px; font-size: 0.8rem; color: #999; display: flex; justify-content: space-between;">
                    <span>点击查看详情</span>
                    <span>➔</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    // 渲染后立即触发一次观察，确保新元素被监听
    initScrollObserver();
}

function filterArtifacts(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        if (btn.dataset.filter === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    if (category === 'all') {
        renderArtifacts(artifacts);
    } else {
        const filtered = artifacts.filter(item => item.category === category);
        renderArtifacts(filtered);
    }
}

function getCategoryName(cat) {
    const map = {
        'bronze': '青铜器',
        'jade': '玉器',
        'ceramics': '陶瓷',
        'painting': '书画'
    };
    return map[cat] || '其他';
}


// --- 6. 模态框逻辑 ---

function openModal(item) {
    const modal = document.getElementById('modal-overlay');
    const content = document.getElementById('modal-content');

    content.innerHTML = `
        <button onclick="closeModal()" class="close-modal-btn">✕</button>
        <div class="modal-img-area">
            <img src="${item.image}" class="modal-img">
        </div>
        <div class="modal-info-area">
            <div style="margin-bottom: 15px;">
                <span style="background: var(--primary); color: white; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem;">
                    ${getCategoryName(item.category)} · ${item.period}
                </span>
            </div>
            <h2 style="font-size: 2rem; margin-bottom: 20px;">${item.name}</h2>
            
            <div style="margin-bottom: 20px;">
                <h4 style="font-weight: bold; color: var(--text-light); font-size: 0.9rem; text-transform: uppercase;">文物描述</h4>
                <p style="line-height: 1.6;">${item.desc}</p>
            </div>
            
            <div style="background: var(--gray-100); padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                <h4 style="font-weight: bold; color: var(--primary); font-size: 0.9rem;">修复档案</h4>
                <p style="font-size: 0.9rem; margin-top: 5px;">${item.details}</p>
                <div style="margin-top: 10px; font-size: 0.8rem; color: var(--text-light);">状态: ${item.status}</div>
            </div>

            <div style="border-top: 1px dashed var(--gray-200); padding-top: 20px;">
                <button onclick="generateAIStory('${item.name}', '${item.period}', this)" style="width: 100%; background: linear-gradient(to right, #9333ea, #4f46e5); color: white; padding: 10px; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
                    ✨ 生成 AI 智能解说
                </button>
                <div class="hidden" style="margin-top: 15px; background: var(--purple-50); padding: 15px; border-radius: 6px; font-size: 0.9rem; line-height: 1.6;"></div>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('modal-overlay');
    modal.classList.add('hidden');
}


// --- 7. 新闻逻辑 (修改为时间轴结构) ---

function renderNews() {
    const container = document.getElementById('news-container');
    container.innerHTML = '';

    newsData.forEach((item, index) => {
        const article = document.createElement('div');
        // 使用时间轴类名，并添加滚动显现
        article.className = "timeline-item scroll-hidden";
        article.style.transitionDelay = `${index * 0.2}s`;

        article.innerHTML = `
            <div class="timeline-date">${item.date}</div>
            <div class="timeline-title" onclick="toggleNews(${item.id})">${item.title}</div>
            <div class="timeline-summary">${item.summary}</div>
            
            <!-- 展开详情区域 -->
            <div id="news-content-${item.id}" class="timeline-content-box hidden">
                ${item.content}
            </div>
        `;
        container.appendChild(article);
    });

    // 重新初始化监听，以捕获新生成的新闻条目
    initScrollObserver();
}

function toggleNews(id) {
    const content = document.getElementById(`news-content-${id}`);
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
    } else {
        content.classList.add('hidden');
    }
}


// --- 8. 图表初始化 ---

function initCharts() {
    // 首页图表
    const ctx1 = document.getElementById('preservationChart').getContext('2d');
    new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ['完好保存', '轻微破损', '急需修复', '正在修复中'],
            datasets: [{
                data: [65, 20, 10, 5],
                backgroundColor: ['#2c3e50', '#8c4b31', '#d4af37', '#e2e8f0'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });

    // 技术页图表
    const ctx2 = document.getElementById('techChart').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['碎片拼对', '颜色还原', '病害检测', '数据建档'],
            datasets: [
                {
                    label: '传统人工耗时 (小时)',
                    data: [120, 48, 24, 72],
                    backgroundColor: '#9ca3af'
                },
                {
                    label: 'AI/技术辅助耗时 (小时)',
                    data: [40, 12, 4, 10],
                    backgroundColor: '#8c4b31'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true }
            },
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });
}


// --- 9. 联系表单 ---

function handleContactSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalText = btn.innerText;

    btn.innerText = "发送中...";
    btn.disabled = true;

    // 模拟发送延迟
    setTimeout(() => {
        alert(`留言发送成功！`);
        e.target.reset();
        btn.innerText = originalText;
        btn.disabled = false;
    }, 1000);
}