import Taro from '@tarojs/taro'
import { AtButton } from 'taro-ui'
import { View, Form, Input, Textarea, Button } from '@tarojs/components'

export default function PostForm (props) {
  return (
    <View className='post-form'>
      <View>新的帖子</View>
      <Form onSubmit={props.handleSubmit}>
      <View className='form-hint'>标题</View>
        <Input className='input-title' type='text' placeholder='点击输入标题' value={props.formTitle} onInput={props.handleTitleInput}></Input>
        <View className='form-hint'>正文</View>
        <Textarea className='input-content' placeholder='点击输入正文' value={props.formContent} onInput={props.handleContentInput}></Textarea>
        <AtButton className='form-button' formType='submit' type='primary'>发帖</AtButton>
      </Form>
    </View>
  )
}