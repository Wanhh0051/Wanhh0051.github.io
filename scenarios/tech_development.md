# 技术开发场景配置

## 技术项目完整生命周期

### 阶段1: 项目规划
```yaml
主导Agent: product-strategy-planner
协作Agent:
  - tech-architecture-mentor (技术可行性分析)
  - project-management-master (计划审核)
质控Agent: project-management-master
输出物:
  - 技术需求文档
  - 项目时间线
  - 资源评估报告
  - 风险分析
```

### 阶段2: 架构设计
```yaml
主导Agent: tech-architecture-mentor
协作Agent:
  - code-quality-guardian (代码标准制定)
  - ux-insight-specialist (用户体验考虑)
质控Agent: ux-insight-specialist
输出物:
  - 系统架构图
  - 技术栈选择
  - API设计规范
  - 数据库设计
```

### 阶段3: 开发实施
```yaml
主导Agent: code-quality-guardian
协作Agent:
  - system-installation-manager (环境配置)
  - project-management-master (进度监控)
质控Agent: project-management-master
输出物:
  - 核心功能模块
  - 单元测试用例
  - 代码审查报告
  - 部署脚本
```

### 阶段4: 测试优化
```yaml
主导Agent: ux-insight-specialist
协作Agent:
  - code-quality-guardian (性能优化)
  - tech-architecture-mentor (架构审核)
质控Agent: tech-architecture-mentor
输出物:
  - 性能测试报告
  - 用户体验评估
  - 优化建议方案
  - 上线检查清单
```

### 闭环机制
- 每阶段结束后自动触发下一阶段
- 全程质量监控和异常处理
- 实时进度反馈和调整

## 技术任务类型处理

### 代码开发
```yaml
Agent组合: tech-architecture-mentor + code-quality-guardian
处理流程:
  1. 需求分析和技术选型
  2. 架构设计和代码规范制定
  3. 核心功能开发
  4. 代码审查和优化
  5. 测试和部署
```

### 问题排查
```yaml
Agent组合: system-installation-manager + code-quality-guardian
处理流程:
  1. 问题诊断和定位
  2. 根因分析
  3. 解决方案制定
  4. 实施修复
  5. 验证和预防措施
```

### 技术重构
```yaml
Agent组合: tech-architecture-mentor + code-quality-guardian
处理流程:
  1. 现状分析和评估
  2. 重构方案设计
  3. 渐进式重构实施
  4. 测试和验证
  5. 性能对比和总结
```

---

**适用场景: 软件开发、系统架构、技术问题解决**