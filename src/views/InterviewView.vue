<template>
  <div class="interview">

    <div class="interview_main">
      <div class="interview_main-subject">

        <h1>出题</h1>

        <!-- 信息录入 -->
        <div class="form">
          <div
            v-for="(item, i) in from"
            :key="i"
            class="form-item"
          >
            {{ item.label }}:<input :placeholder="`请输入${item.label}`" />
          </div>

          <div class="text-area">
            备注：<textarea placeholder="请输入备注"></textarea>
          </div>
        </div>

        <!-- 题目 -->
        <div class="subject">

          <div class="subject-search">
            题目：<input placeholder="请输入题目" />
            <button>搜索</button>
          </div>

        </div>

      </div>
      <div class="interview_main-res">结果</div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import TheWelcome from '@/components/TheWelcome.vue'

const from = [
  {
    label: '姓名',
  },
  {
    label: '职位',
  },
  {
    label: '年龄',
  },
  {
    label: '性别',
  },
]
</script>

<style lang="scss">
.interview {
  width: 100%;
  min-height: 100vh;
  display: flex;

  &_main {
    width: 100%;
    height: auto;

    display: flex;
    border: 1px rgb(0, 255, 200) solid;

    &-subject,
    &-res {
      width: 50%;
    }

    &-subject {
      border-right: 1px rgb(0, 255, 200) solid;
    }
  }
}
</style>
