/**
 * 页面五：综合应用脚本
 * 涵盖：Fetch, Promise, 异步编程, 事件委托, DOM操作
 */

// 模拟数据库数据
const MOCK_DATA = [
    { id: 101, name: "曾侯乙编钟", period: "战国时期", location: "湖北随州", desc: "中国规模最大、保存最完好的乐器重宝。" },
    { id: 102, name: "四羊方尊", period: "商代", location: "湖南宁乡", desc: "中国现存最大的商代青铜方尊。" },
    { id: 103, name: "步摇金冠", period: "东汉", location: "内蒙古", desc: "极具民族特色的古代头饰精品。" },
    { id: 104, name: "敦煌莫高窟", period: "十六国至元", location: "甘肃酒泉", desc: "世界现存规模最大的佛教艺术地。" }
];

document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    const resultContainer = document.getElementById('resultContainer');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    // --- 1. 【知识点：异步编程 & Fetch & Promise】 ---
    async function searchArtifacts(query) {
        resultContainer.innerHTML = '<div class="loading">正在检索数字指纹...</div>';
        
        // 使用 Promise 模拟网络延迟
        const fakeFetch = new Promise((resolve) => {
            setTimeout(() => {
                const results = MOCK_DATA.filter(item => 
                    item.name.includes(query) || item.period.includes(query)
                );
                resolve(results);
            }, 800);
        });

        try {
            const data = await fakeFetch; // 等待 Promise 结果 (异步编程)
            renderResults(data);
        } catch (error) {
            resultContainer.innerHTML = '<div class="error">服务器同步异常，请稍后再试。</div>';
        }
    }

    // --- 2. 【知识点：DOM 操作】 ---
    function renderResults(list) {
        resultContainer.innerHTML = ''; // 清空内容
        
        if (list.length === 0) {
            resultContainer.innerHTML = '<div class="initial-msg">未找到匹配的文物资料。</div>';
            return;
        }

        list.forEach(item => {
            const card = document.createElement('div');
            card.className = 'result-card';
            // 设置自定义属性，方便事件委托获取数据
            card.dataset.id = item.id; 
            
            card.innerHTML = `
                <h3>${item.name}</h3>
                <div class="meta">年代：${item.period} | 出土：${item.location}</div>
                <div class="btn-detail" data-action="view">查看数字化档案 →</div>
            `;
            resultContainer.appendChild(card);
        });
    }

    // --- 3. 【知识点：事件委托 (Event Delegation)】 ---
    // 监听父容器，处理动态生成的子元素点击，避免为每个卡片都绑定监听器
    resultContainer.addEventListener('click', (event) => {
        // 向上寻找最近的 .result-card
        const card = event.target.closest('.result-card');
        
        if (card) {
            const id = card.dataset.id;
            const artifact = MOCK_DATA.find(i => i.id == id);
            showModal(artifact);
        }
    });

    function showModal(info) {
        modalBody.innerHTML = `
            <h2>${info.name}</h2>
            <p style="margin: 20px 0; line-height: 1.8;">${info.desc}</p>
            <p><small>档案编号：REST-API-00${info.id}</small></p>
        `;
        modal.classList.remove('hidden');
    }

    // 关闭弹窗逻辑
    document.querySelector('.close-btn').onclick = () => modal.classList.add('hidden');
    window.onclick = (e) => { if (e.target == modal) modal.classList.add('hidden'); };

    // 绑定搜索按钮
    searchBtn.onclick = () => {
        const q = searchInput.value.trim();
        if (q) searchArtifacts(q);
    };
});