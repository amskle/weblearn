
// --- 0. GEMINI API CONFIG ---
const apiKey = ""; // Runtime Environment will provide key

async function callGeminiAPI(prompt) {
    if (!apiKey) {
        console.warn("API Key missing (simulating logic for demo if needed, but intended for real env)");
        // Just in case we are in a no-key env, we might want to fail gracefully or show mock
        // return "API Key not configured."; 
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
    const payload = {
        contents: [{ parts: [{ text: prompt }] }]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text || "抱歉，我暂时无法回答这个问题。";
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "网络连接异常，请稍后重试。";
    }
}

// --- 1. DATA STORAGE ---

// Artifact Data
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

// News Data
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

// --- 2. INITIALIZATION & RENDERING ---

document.addEventListener('DOMContentLoaded', () => {
    initCharts();
    renderArtifacts(artifacts);
    renderNews();

    // Mobile Menu Toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
});

// --- 3. NAVIGATION ---

function navigateTo(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(sec => {
        sec.classList.add('hidden');
    });

    // Show selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.remove('hidden');
        // Re-trigger animations
        activeSection.classList.remove('fade-in');
        void activeSection.offsetWidth; // Trigger reflow
        activeSection.classList.add('fade-in');
    }

    // Close mobile menu if open
    document.getElementById('mobile-menu').classList.add('hidden');

    // Scroll to top
    window.scrollTo(0, 0);
}

// --- 4. ARTIFACT LOGIC (Museum) ---

function renderArtifacts(data) {
    const grid = document.getElementById('artifact-grid');
    grid.innerHTML = '';

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer border border-stone-100 group";
        card.onclick = () => openModal(item);

        card.innerHTML = `
                    <div class="h-48 overflow-hidden relative">
                        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                        <div class="absolute top-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
                            ${getCategoryName(item.category)}
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="font-serif text-xl font-bold text-heritage-secondary mb-1">${item.name}</h3>
                        <p class="text-sm text-heritage-primary mb-2">${item.period}</p>
                        <p class="text-stone-500 text-sm line-clamp-2">${item.desc}</p>
                        <div class="mt-3 text-xs text-stone-400 border-t pt-2 flex justify-between">
                            <span>点击查看详情</span>
                            <span>➔</span>
                        </div>
                    </div>
                `;
        grid.appendChild(card);
    });
}

function filterArtifacts(category) {
    // Update UI buttons
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        if (btn.dataset.filter === category) {
            btn.classList.add('bg-heritage-primary', 'text-white', 'border-transparent');
        } else {
            btn.classList.remove('bg-heritage-primary', 'text-white', 'border-transparent');
        }
    });

    // Filter Data
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

// --- 5. NEWS LOGIC ---

function renderNews() {
    const container = document.getElementById('news-container');
    container.innerHTML = '';

    newsData.forEach(item => {
        const article = document.createElement('div');
        article.className = "bg-white border-l-4 border-stone-300 pl-6 py-2 transition-all hover:border-heritage-primary";
        article.innerHTML = `
                    <div class="flex justify-between items-start cursor-pointer" onclick="toggleNews(${item.id})">
                        <div>
                            <h3 class="text-xl font-bold text-heritage-secondary hover:text-heritage-primary transition-colors">${item.title}</h3>
                            <div class="text-xs text-stone-400 mt-1 mb-2">发布日期: ${item.date}</div>
                        </div>
                        <span id="news-icon-${item.id}" class="text-2xl text-stone-300 transform transition-transform">+</span>
                    </div>
                    <p class="text-stone-600 mb-2">${item.summary}</p>
                    <div id="news-content-${item.id}" class="hidden mt-4 text-stone-800 bg-stone-50 p-4 rounded text-sm leading-relaxed border border-stone-100">
                        ${item.content}
                    </div>
                `;
        container.appendChild(article);
    });
}

function toggleNews(id) {
    const content = document.getElementById(`news-content-${id}`);
    const icon = document.getElementById(`news-icon-${id}`);

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.textContent = '-';
        icon.classList.add('text-heritage-primary');
    } else {
        content.classList.add('hidden');
        icon.textContent = '+';
        icon.classList.remove('text-heritage-primary');
    }
}

// --- 6. MODAL SYSTEM & AI FEATURE #1 (AI GUIDE) ---

function openModal(item) {
    const modal = document.getElementById('modal-overlay');
    const body = document.getElementById('modal-body');

    body.innerHTML = `
                <div class="flex flex-col md:flex-row">
                    <div class="md:w-1/2 h-64 md:h-auto">
                        <img src="${item.image}" class="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                    </div>
                    <div class="p-8 md:w-1/2 flex flex-col justify-center max-h-[90vh] overflow-y-auto">
                        <div class="inline-block px-3 py-1 bg-heritage-primary text-white text-xs rounded-full w-fit mb-4">
                            ${getCategoryName(item.category)} • ${item.period}
                        </div>
                        <h2 class="font-serif text-3xl font-bold text-heritage-secondary mb-4">${item.name}</h2>
                        
                        <div class="space-y-4">
                            <div>
                                <h4 class="font-bold text-sm uppercase text-stone-400">文物描述</h4>
                                <p class="text-stone-700 leading-relaxed">${item.desc}</p>
                            </div>
                            
                            <div class="bg-stone-50 p-4 rounded border border-stone-200">
                                <h4 class="font-bold text-sm uppercase text-heritage-primary mb-1">数字化档案 / 修复记录</h4>
                                <p class="text-sm text-stone-600">${item.details}</p>
                                <div class="mt-2 text-xs font-mono text-stone-400">当前状态: ${item.status}</div>
                            </div>

                            <!-- GEMINI FEATURE: AI GUIDE BUTTON -->
                            <div class="pt-4 border-t border-dashed border-stone-300">
                                <button onclick="generateAIStory('${item.name}', '${item.period}', this)" class="w-full py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded hover:opacity-90 transition shadow flex justify-center items-center text-sm font-bold">
                                    <span>✨ 生成 AI 智能解说</span>
                                </button>
                                <div id="ai-story-output" class="hidden mt-3 p-3 bg-purple-50 text-stone-700 text-sm rounded border border-purple-100 leading-relaxed"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

    modal.classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('modal-content').classList.remove('scale-95');
        document.getElementById('modal-content').classList.add('scale-100');
    }, 10);
}

async function generateAIStory(name, period, btn) {
    const outputDiv = btn.nextElementSibling;
    const originalText = btn.innerHTML;

    // UI Loading State
    btn.disabled = true;
    btn.innerHTML = `<span class="spinner border-white border-l-transparent"></span> 正在生成历史故事...`;
    outputDiv.classList.add('hidden');
    outputDiv.innerHTML = '';

    const prompt = `你是专业的博物馆金牌导览员。请为观众介绍一件【${period}】的文物【${name}】。请用生动、有趣、略带故事性的语言，介绍它的历史背景、艺术价值或可能发生的历史趣事。字数控制在150字以内。`;

    // Call API
    const result = await callGeminiAPI(prompt);

    // Update UI
    btn.innerHTML = originalText;
    btn.disabled = false;
    outputDiv.innerHTML = `<strong>✨ AI 导览员：</strong><br>${result}`;
    outputDiv.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('modal-overlay');
    const content = document.getElementById('modal-content');

    content.classList.remove('scale-100');
    content.classList.add('scale-95');

    setTimeout(() => {
        modal.classList.add('hidden');
    }, 150);
}

// --- 7. AI FEATURE #2 (RESTORATION CONSULTANT) ---

async function askRestorationAI() {
    const input = document.getElementById('ai-tech-input');
    const output = document.getElementById('ai-tech-output');
    const btn = document.getElementById('ai-tech-btn');
    const userQuestion = input.value.trim();

    if (!userQuestion) {
        alert("请输入您的问题！");
        return;
    }

    // UI Loading State
    const originalBtnText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = `<span class="spinner border-white border-l-transparent"></span> AI 思考中...`;
    output.classList.add('hidden');

    const prompt = `你是一位资深的文物修复专家和数字文保技术顾问。用户问了一个关于文物保护的问题：“${userQuestion}”。请用专业但通俗易懂的语言回答，可以结合传统修复工艺和现代科技手段。字数控制在200字左右。`;

    // Call API
    const result = await callGeminiAPI(prompt);

    // Update UI
    btn.innerHTML = originalBtnText;
    btn.disabled = false;
    output.innerHTML = `<strong>💡 专家解答：</strong><br>${result}`;
    output.classList.remove('hidden');
}


// --- 8. CHARTS (Chart.js) ---

function initCharts() {
    // Home: Preservation Status Chart
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

    // Tech: Efficiency Chart
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

// --- 9. CONTACT FORM ---

function handleContactSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const btn = e.target.querySelector('button');
    const originalText = btn.innerText;

    btn.innerText = "发送中...";
    btn.disabled = true;

    // Simulate Network Request
    setTimeout(() => {
        alert(`感谢您的留言，${name}！\n我们已收到您的信息，工作人员将在3个工作日内联系您。`);
        e.target.reset();
        btn.innerText = originalText;
        btn.disabled = false;
    }, 1000);
}

