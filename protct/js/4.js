/**
 * 页面四：逻辑处理脚本
 * 核心：表单操作、错误捕捉、宏任务模拟
 */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('guardianForm');
    const feedback = document.getElementById('feedback');
    const msg = document.getElementById('feedbackMsg');
    const submitBtn = document.getElementById('submitBtn');

    // 【知识点：表单操作 - 提交事件监听】
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // 阻止默认刷新行为

        // 获取表单数据
        const formData = {
            name: document.getElementById('username').value.trim(),
            role: document.getElementById('role').value,
            motivation: document.getElementById('motivation').value
        };

        // 【知识点：错误处理与控制结构】
        try {
            // 自定义验证逻辑
            if (formData.name.length < 2) {
                throw new Error("姓名长度太短，请输入真实姓名。");
            }
            if (!formData.role) {
                throw new Error("请选择您想参与的方向。");
            }
            if (formData.motivation.length < 10) {
                throw new Error("初衷介绍字数不足（至少10字），我们需要了解您的诚意。");
            }

            // 验证通过，进入异步处理
            processSubmission(formData);

        } catch (error) {
            // 【知识点：错误处理 - 捕获异常并反馈给用户】
            alert("提交失败：" + error.message);
            console.error("Validation Error:", error);
        }
    });

    /**
     * 【知识点：宏任务 (Macro-task)】
     * 利用 setTimeout 模拟一个耗时的网络请求过程
     */
    function processSubmission(data) {
        // UI 状态切换
        submitBtn.disabled = true;
        submitBtn.innerText = "处理中...";
        feedback.classList.remove('hidden');

        // 这是一个宏任务，会被放入事件队列中稍后执行
        setTimeout(() => {
            // 模拟服务器处理逻辑
            console.log("正在保存数据到博物馆数据库...", data);
            
            // 结果反馈
            msg.innerHTML = `<span style="color:green; font-weight:bold;">恭喜您，${data.name}！</span><br>您的申请已成功录入系统，我们的文化专员将在3个工作日内联系您。`;
            submitBtn.innerText = "提交成功";
            
            // 【知识点：控制结构】
            // 如果是技术岗，额外提示
            if (data.role === 'tech') {
                msg.innerHTML += "<br><small>系统提示：由于您报选了技术岗，请准备好您的作品集。</small>";
            }

        }, 2000); // 延迟2秒执行，体现宏任务特性
    }
});