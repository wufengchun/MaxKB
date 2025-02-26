<template>
  <div class="flex-between mb-16">
    <h5 class="lighter">{{ $t('chat.userInput') }}</h5>
    <el-button link type="primary" @click="openAddDialog()">
      <el-icon class="mr-4">
        <Plus />
      </el-icon>
      {{ $t('common.add') }}
    </el-button>
  </div>
  <el-table
    v-if="props.nodeModel.properties.user_input_field_list?.length > 0"
    :data="props.nodeModel.properties.user_input_field_list"
    class="mb-16"
  >
    <el-table-column prop="field" :label="$t('dynamicsForm.paramForm.field.label')" width="95">
      <template #default="{ row }">
        <span :title="row.field" class="ellipsis-1">{{ row.field }}</span>
      </template>
    </el-table-column>

    <el-table-column prop="label" :label="$t('dynamicsForm.paramForm.name.label')">
      <template #default="{ row }">
        <span v-if="row.label && row.label.input_type === 'TooltipLabel'">
          <span :title="row.label.label" class="ellipsis-1">
            {{ row.label.label }}
          </span>
        </span>
        <span v-else>
          <span :title="row.label" class="ellipsis-1">
            {{ row.label }}
          </span></span
        >
      </template>
    </el-table-column>
    <el-table-column :label="$t('dynamicsForm.paramForm.input_type.label')">
      <template #default="{ row }">
        <el-tag type="info" class="info-tag" v-if="row.input_type === 'TextInput'">{{
          $t('dynamicsForm.input_type_list.TextInput')
        }}</el-tag>
        <el-tag type="info" class="info-tag" v-if="row.input_type === 'Slider'">{{
          $t('dynamicsForm.input_type_list.Slider')
        }}</el-tag>
        <el-tag type="info" class="info-tag" v-if="row.input_type === 'SwitchInput'">{{
          $t('dynamicsForm.input_type_list.SwitchInput')
        }}</el-tag>
        <el-tag type="info" class="info-tag" v-if="row.input_type === 'SingleSelect'">{{
          $t('dynamicsForm.input_type_list.SingleSelect')
        }}</el-tag>
        <el-tag type="info" class="info-tag" v-if="row.input_type === 'MultiSelect'">{{
          $t('dynamicsForm.input_type_list.MultiSelect')
        }}</el-tag>
        <el-tag type="info" class="info-tag" v-if="row.input_type === 'RadioCard'">{{
          $t('dynamicsForm.input_type_list.RadioCard')
        }}</el-tag>
        <el-tag type="info" class="info-tag" v-if="row.input_type === 'DatePicker'">{{
          $t('dynamicsForm.input_type_list.DatePicker')
        }}</el-tag>
      </template>
    </el-table-column>

    <el-table-column prop="default_value" :label="$t('dynamicsForm.default.label')">
      <template #default="{ row }">
        <span :title="row.default_value" class="ellipsis-1">{{ getDefaultValue(row) }}</span>
      </template>
    </el-table-column>
    <el-table-column :label="$t('common.required')">
      <template #default="{ row }">
        <div @click.stop>
          <el-switch disabled size="small" v-model="row.required" />
        </div>
      </template>
    </el-table-column>
    <el-table-column :label="$t('common.operation')" align="left" width="90">
      <template #default="{ row, $index }">
        <span class="mr-4">
          <el-tooltip effect="dark" :content="$t('common.modify')" placement="top">
            <el-button type="primary" text @click.stop="openAddDialog(row, $index)">
              <el-icon><EditPen /></el-icon>
            </el-button>
          </el-tooltip>
        </span>
        <el-tooltip effect="dark" :content="$t('common.delete')" placement="top">
          <el-button type="primary" text @click="deleteField($index)">
            <el-icon>
              <Delete />
            </el-icon>
          </el-button>
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>

  <UserFieldFormDialog ref="UserFieldFormDialogRef" @refresh="refreshFieldList" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { set } from 'lodash'
import UserFieldFormDialog from './UserFieldFormDialog.vue'
import { MsgError } from '@/utils/message'
import { t } from '@/locales'
const props = defineProps<{ nodeModel: any }>()

const UserFieldFormDialogRef = ref()
const inputFieldList = ref<any[]>([])

function openAddDialog(data?: any, index?: any) {
  UserFieldFormDialogRef.value.open(data, index)
}

function deleteField(index: any) {
  inputFieldList.value.splice(index, 1)
  props.nodeModel.graphModel.eventCenter.emit('refreshFieldList')
}

function refreshFieldList(data: any, index: any) {
  for (let i = 0; i < inputFieldList.value.length; i++) {
    if (inputFieldList.value[i].field === data.field && index !== i) {
      MsgError(t('views.applicationWorkflow.tip.paramErrorMessage') + data.field)
      return
    }
  }
  // 查看另一个list又没有重复的
  let arr = props.nodeModel.properties.api_input_field_list
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].variable === data.field) {
      MsgError(t('views.applicationWorkflow.tip.paramErrorMessage') + data.field)
      return
    }
  }
  if (index !== null) {
    inputFieldList.value.splice(index, 1, data)
  } else {
    inputFieldList.value.push(data)
  }
  UserFieldFormDialogRef.value.close()
  props.nodeModel.graphModel.eventCenter.emit('refreshFieldList')
}

const getDefaultValue = (row: any) => {
  if (row.default_value) {
    const default_value = row.option_list
      ?.filter((v: any) => row.default_value.indexOf(v.value) > -1)
      .map((v: any) => v.label)
      .join(',')
    if (default_value) {
      return default_value
    }
    return row.default_value
  }
  if (row.default_value !== undefined) {
    return row.default_value
  }
}

onMounted(() => {
  if (!props.nodeModel.properties.user_input_field_list) {
    if (props.nodeModel.properties.input_field_list) {
      props.nodeModel.properties.input_field_list
        .filter((item: any) => {
          return item.assignment_method === 'user_input'
        })
        .forEach((item: any) => {
          inputFieldList.value.push(item)
        })
    }
  } else {
    inputFieldList.value.push(...props.nodeModel.properties.user_input_field_list)
  }
  // 兼容旧数据
  inputFieldList.value.forEach((item, index) => {
    item.label = item.label || item.name
    item.field = item.field || item.variable
    item.required = item.required || item.is_required
    switch (item.type) {
      case 'input':
        item.input_type = 'TextInput'
        break
      case 'select':
        item.input_type = 'SingleSelect'
        break
      case 'date':
        item.input_type = 'DatePicker'
        break
    }
  })
  set(props.nodeModel.properties, 'user_input_field_list', inputFieldList)
})
</script>

<style scoped lang="scss"></style>
